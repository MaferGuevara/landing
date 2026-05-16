// Global animation engine — one observer, one RAF loop, helpers.

const { useEffect: __ue, useRef: __ur, useState: __us, useCallback: __uc } = React;

// ============================================================
// GLOBAL OBSERVER — one instance handles every [data-anim]
// and every legacy .reveal node on the page.
// ============================================================
const __ANIM_STATE = { observer: null, rafCursor: null };

function installGlobalObserver() {
  if (__ANIM_STATE.observer) return __ANIM_STATE.observer;
  const fire = (el) => {
    const delay = parseFloat(el.dataset.delay || '0');
    const apply = () => {
      el.classList.add('anim-in');
      if (el.classList.contains('reveal')) el.classList.add('visible');
      // word-mask children fire automatically via cascade
      // Notify custom listeners
      const ev = new CustomEvent('anim:fire', { bubbles: false });
      el.dispatchEvent(ev);
    };
    if (delay > 0) setTimeout(apply, delay * 1000);
    else apply();
  };
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          fire(e.target);
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
  );
  __ANIM_STATE.observer = io;
  return io;
}

// Mutation-aware: as React renders new elements with [data-anim] / .reveal, observe them.
function startGlobalObserver() {
  const io = installGlobalObserver();
  const scan = (root = document) => {
    root.querySelectorAll('[data-anim]:not(.anim-in), .reveal:not(.visible)').forEach((n) => {
      io.observe(n);
    });
  };
  scan();
  const mo = new MutationObserver((muts) => {
    for (const m of muts) {
      m.addedNodes.forEach((n) => {
        if (n.nodeType !== 1) return;
        if (n.matches && (n.matches('[data-anim]') || n.matches('.reveal'))) io.observe(n);
        if (n.querySelectorAll) {
          n.querySelectorAll('[data-anim]:not(.anim-in), .reveal:not(.visible)').forEach((x) => io.observe(x));
        }
      });
    }
  });
  mo.observe(document.body, { childList: true, subtree: true });
  return () => { mo.disconnect(); io.disconnect(); __ANIM_STATE.observer = null; };
}

// ============================================================
// CUSTOM CURSOR — ring + dot with lerp
// ============================================================
function startCustomCursor() {
  if (window.matchMedia('(hover: none), (pointer: coarse)').matches) return () => {};
  const ring = document.getElementById('cc-ring');
  const dot = document.getElementById('cc-dot');
  if (!ring || !dot) return () => {};

  let mx = window.innerWidth / 2, my = window.innerHeight / 2;
  let rx = mx, ry = my;
  let raf;

  const onMove = (e) => {
    mx = e.clientX; my = e.clientY;
    dot.style.transform = `translate3d(${mx}px, ${my}px, 0)`;
  };

  const tick = () => {
    rx += (mx - rx) * 0.18;
    ry += (my - ry) * 0.18;
    ring.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
    raf = requestAnimationFrame(tick);
  };

  const isInteractive = (el) => {
    while (el && el !== document.body) {
      if (el.matches && el.matches('a, button, [role="button"], [data-cursor="grow"]')) return true;
      el = el.parentElement;
    }
    return false;
  };
  const onOver = (e) => {
    if (isInteractive(e.target)) document.body.classList.add('cc-active');
    else document.body.classList.remove('cc-active');
  };

  window.addEventListener('mousemove', onMove, { passive: true });
  document.addEventListener('mouseover', onOver, { passive: true });
  tick();

  return () => {
    window.removeEventListener('mousemove', onMove);
    document.removeEventListener('mouseover', onOver);
    if (raf) cancelAnimationFrame(raf);
  };
}

// ============================================================
// useCounter — counts up to target with easeOutExpo when visible
// ============================================================
function useCounter(target, duration = 1500) {
  const ref = __ur(null);
  const [value, setValue] = __us(0);
  __ue(() => {
    const el = ref.current;
    if (!el) return;
    let raf = null;
    let started = false;
    const start = () => {
      if (started) return;
      started = true;
      const t0 = performance.now();
      const step = (now) => {
        const p = Math.min((now - t0) / duration, 1);
        const e = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
        setValue(Math.floor(e * target));
        if (p < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    };
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { start(); io.disconnect(); } },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => { io.disconnect(); if (raf) cancelAnimationFrame(raf); };
  }, [target, duration]);
  return { ref, value };
}

const Counter = ({ to, duration = 1500, className = '', style = {}, prefix = '', suffix = '' }) => {
  const { ref, value } = useCounter(to, duration);
  return (
    <span ref={ref} className={className} style={style}>
      {prefix}{value}{suffix}
    </span>
  );
};

// ============================================================
// SplitWords — each word wrapped in mask for clip-up reveal.
// Auto-fires when its parent [data-anim] gets .anim-in, OR can be told to fire manually.
// ============================================================
const SplitWords = ({ text, baseDelay = 0, step = 0.07, perWordDelay = null, className = '', wordClassName = '', style = {} }) => {
  // Split by spaces but preserve <br/> as line breaks if user passes nodes
  const words = String(text).split(/\s+/);
  return (
    <span className={className} style={style}>
      {words.map((w, i) => (
        <span key={i} className="word-mask" style={{ marginRight: '0.22em' }}>
          <span
            className={`word-inner ${wordClassName}`}
            style={{ animationDelay: `${baseDelay + (perWordDelay ? perWordDelay(i) : i * step)}s` }}
          >
            {w}
          </span>
        </span>
      ))}
    </span>
  );
};

// SplitWordsBlur — same idea but blur-to-sharp materialize
const SplitWordsBlur = ({ text, baseDelay = 0, step = 0.06, className = '' }) => {
  const words = String(text).split(/\s+/);
  return (
    <span className={className}>
      {words.map((w, i) => (
        <span
          key={i}
          className="word-mat"
          style={{ animationDelay: `${baseDelay + i * step}s` }}
        >
          {w}
        </span>
      ))}
    </span>
  );
};

// CharWave — color washes through chars
const CharWave = ({ text, step = 0.04, className = '', style = {} }) => {
  const chars = String(text).split('');
  return (
    <span className={`char-wave ${className}`} style={style}>
      {chars.map((c, i) => (
        <span key={i} style={{ animationDelay: `${i * step}s`, whiteSpace: c === ' ' ? 'pre' : 'normal' }}>
          {c === ' ' ? '\u00A0' : c}
        </span>
      ))}
    </span>
  );
};

// ============================================================
// useFireOnView — get a ref + boolean fired when in viewport
// ============================================================
function useFireOnView(threshold = 0.25) {
  const ref = __ur(null);
  const [fired, setFired] = __us(false);
  __ue(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setFired(true); io.disconnect(); } },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, fired];
}

// ============================================================
// useParallaxY — translates element on scroll, throttled to RAF
// ============================================================
function useParallaxY(factor = 0.3, maxRange = 120) {
  const ref = __ur(null);
  __ue(() => {
    const el = ref.current;
    if (!el) return;
    let raf = null;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        const center = r.top + r.height / 2;
        const fromCenter = (center - window.innerHeight / 2) / window.innerHeight;
        const y = Math.max(Math.min(fromCenter * 100 * factor, maxRange), -maxRange);
        el.style.transform = `translate3d(0, ${y}px, 0)`;
        raf = null;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [factor, maxRange]);
  return ref;
}

// ============================================================
// MagneticCard — 3D tilt + sheen follow cursor
// ============================================================
const MagneticCard = ({ children, className = '', style = {}, maxTilt = 6 }) => {
  const ref = __ur(null);
  const onMove = (e) => {
    const card = ref.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const dx = (e.clientX - rect.left) / rect.width - 0.5;
    const dy = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.setProperty('--rx', `${dy * -maxTilt}deg`);
    card.style.setProperty('--ry', `${dx * maxTilt}deg`);
    card.style.setProperty('--mx', `${(dx + 0.5) * 100}%`);
    card.style.setProperty('--my', `${(dy + 0.5) * 100}%`);
  };
  const onLeave = () => {
    const card = ref.current;
    if (!card) return;
    card.style.setProperty('--rx', '0deg');
    card.style.setProperty('--ry', '0deg');
    card.style.setProperty('--mx', '50%');
    card.style.setProperty('--my', '50%');
  };
  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={className}
      style={{
        ...style,
        transform: 'perspective(900px) rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg)) translateZ(0)',
        transition: 'transform 0.45s cubic-bezier(0.16,1,0.3,1)',
        transformStyle: 'preserve-3d',
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  );
};

Object.assign(window, {
  installGlobalObserver,
  startGlobalObserver,
  startCustomCursor,
  useCounter,
  Counter,
  SplitWords,
  SplitWordsBlur,
  CharWave,
  useFireOnView,
  useParallaxY,
  MagneticCard,
});
