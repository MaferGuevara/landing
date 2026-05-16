// Sections 1–5

// =================== SECTION 1 — HERO ===================
const Hero = () => {
  const ref = useReveal();
  const bgRef = useRef(null);

  useEffect(() => {
    const onMove = (e) => {
      if (!bgRef.current) return;
      const x = (e.clientX - window.innerWidth / 2) * 0.018;
      const y = (e.clientY - window.innerHeight / 2) * 0.018;
      bgRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <section
      id="top"
      ref={ref}
      data-screen-label="01 Hero"
      className="relative min-h-screen w-full overflow-hidden flex items-center pt-[140px] pb-20"
    >
      {/* Flower background with subtle parallax */}
      <div
        ref={bgRef}
        className="absolute inset-[-6%] flower-bg opacity-100"
        style={{ willChange: 'transform' }}
        aria-hidden="true"
      />
      {/* Vignette */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at center, transparent 30%, rgba(6,6,6,0.85) 85%)' }} />

      {/* Floating bright-green seal in top right */}
      <img
        src="assets/sello.png"
        alt=""
        aria-hidden="true"
        className="absolute -top-10 -right-12 md:top-24 md:right-16 w-44 md:w-64 spin-slow opacity-90 pointer-events-none"
        style={{ filter: 'drop-shadow(0 0 50px rgba(7,229,112,0.35))' }}
      />

      {/* Horizontal hairline cutting across */}
      <div className="absolute left-0 right-0 top-[58%] h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(7,229,112,0.28) 30%, rgba(7,229,112,0.28) 70%, transparent)' }} />

      {/* Marquee — micro detail */}
      <div className="absolute top-[96px] left-0 right-0 overflow-hidden pointer-events-none">
        <div className="flex marquee-track whitespace-nowrap will-change-transform" style={{ width: 'max-content' }}>
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex items-center gap-10 px-6 mono text-[0.72rem] tracking-[0.4em] uppercase" style={{ color: 'rgba(245,245,240,0.35)' }}>
              {Array.from({ length: 12 }).map((__, i) => (
                <span key={i} className="inline-flex items-center gap-4">
                  <span style={{ color: '#07e570' }}>◆</span>
                  ESTRATEGIA META ADS
                  <span style={{ color: '#3daa5f' }}>·</span>
                  ESTRUCTURA ANTES QUE TRÁFICO
                  <span style={{ color: '#3daa5f' }}>·</span>
                  TRAFFICKER DIGITAL
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-12 gap-6 items-start">
          {/* Left meta column */}
          <div className="hidden lg:flex col-span-1 flex-col items-start gap-4 mt-6">
            <SectionIndex index={1} />
            <div className="w-px h-24" style={{ background: 'linear-gradient(to bottom, rgba(7,229,112,0.45), transparent)' }} />
            <div className="mono text-[0.62rem] tracking-[0.3em] uppercase" style={{ color: '#555550' }}>
              MMXXV
            </div>
          </div>

          {/* Central "living window" card */}
          <div className="col-span-12 lg:col-span-10">
            <div
              className="relative reveal rounded-[14px] overflow-hidden"
              style={{
                background: 'rgba(11,11,11,0.55)',
                border: '1px solid rgba(7,229,112,0.18)',
                backdropFilter: 'blur(8px) saturate(120%)',
                WebkitBackdropFilter: 'blur(8px) saturate(120%)',
              }}
            >
              {/* Animated inner glow simulating wind */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="hero-card-glow" />
              </div>
              {/* Corner brackets */}
              <div className="absolute top-3 left-3 text-[#07e570] opacity-70"><IconCorner /></div>
              <div className="absolute top-3 right-3 text-[#07e570] opacity-70" style={{ transform: 'scaleX(-1)' }}><IconCorner /></div>
              <div className="absolute bottom-3 left-3 text-[#07e570] opacity-70" style={{ transform: 'scaleY(-1)' }}><IconCorner /></div>
              <div className="absolute bottom-3 right-3 text-[#07e570] opacity-70" style={{ transform: 'scale(-1,-1)' }}><IconCorner /></div>

              <div className="relative z-10 px-7 md:px-14 lg:px-20 py-14 md:py-20 lg:py-24">
                <div data-anim="slide-left" data-delay="0.1"><Tag>ESTRATEGIA · META ADS · ESTRUCTURA</Tag></div>

                <h1
                  data-anim="trigger"
                  className="h-display mt-8"
                  style={{ fontSize: 'clamp(3.4rem, 9vw, 9rem)', color: '#f5f5f0' }}
                >
                  <span className="block">
                    <span className="word-mask"><span className="word-inner" style={{ animationDelay: '0.30s' }}>Los</span></span>{' '}
                    <span className="word-mask"><span className="word-inner" style={{ animationDelay: '0.38s' }}>anuncios</span></span>
                  </span>
                  <span className="block">
                    <span className="word-mask"><span className="word-inner" style={{ animationDelay: '0.50s' }}>no</span></span>{' '}
                    <span className="word-mask"><span className="word-inner" style={{ animationDelay: '0.58s' }}>arreglan</span></span>
                  </span>
                  <span className="block">
                    <span className="word-mask"><span className="word-inner" style={{ animationDelay: '0.70s', color: '#07e570' }}>negocios</span></span>{' '}
                    <span className="word-mask"><span className="word-inner" style={{ animationDelay: '0.78s', fontStyle: 'italic', fontWeight: 300 }}>desordenados.</span></span>
                  </span>
                </h1>

                <div data-anim="line-grow" data-delay="0.9" className="mt-7 h-px w-32" style={{ background: '#07e570', boxShadow: '0 0 12px rgba(7,229,112,0.6)' }} />

                <div data-anim="fade-up" data-delay="1.0" className="mt-7 max-w-2xl">
                  <p className="editorial" style={{ fontSize: 'clamp(1.15rem, 2.1vw, 1.6rem)', color: '#f5f5f0' }}>
                    La publicidad amplifica sistemas.<br />
                    No reemplaza estrategia.
                  </p>
                </div>

                <p data-anim="fade-up" data-delay="1.2" className="body-copy mt-6 max-w-xl">
                  Si tu negocio ya vende y quieres escalar con inteligencia,
                  estás en el lugar correcto.
                </p>

                <div data-anim="scale-in" data-delay="1.5" className="mt-10 flex flex-col sm:flex-row gap-4">
                  <CTAPrimary href="#contacto" big>
                    Descubre si tu negocio está listo
                  </CTAPrimary>
                  <CTAGhost href="#enfoque">Ver mi enfoque</CTAGhost>
                </div>

                {/* Bottom meta row inside card */}
                <div data-anim="fade-up" data-delay="1.8" className="mt-14 pt-6 flex flex-wrap items-center gap-x-10 gap-y-3 border-t" style={{ borderColor: 'rgba(7,229,112,0.12)' }}>
                  <div className="flex items-center gap-2 mono text-[0.7rem] tracking-[0.28em] uppercase" style={{ color: '#999990' }}>
                    <IconDot className="text-[#07e570]" /> +<Counter to={8} duration={1400} /> países
                  </div>
                  <div className="mono text-[0.7rem] tracking-[0.28em] uppercase" style={{ color: '#999990' }}>
                    Cohorte limitada · 2025
                  </div>
                  <div className="mono text-[0.7rem] tracking-[0.28em] uppercase" style={{ color: '#999990' }}>
                    Sin garantías milagrosas
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right meta column */}
          <div className="hidden lg:flex col-span-1 flex-col items-end gap-3 mt-6">
            <div className="mono text-[0.62rem] tracking-[0.3em] uppercase text-right" style={{ color: '#555550' }}>
              CDMX<br/>SCROLL ↓
            </div>
          </div>
        </div>

        {/* Below card — three vertical disciplines */}
        <div className="mt-14 grid grid-cols-3 md:gap-10 gap-3">
          {[
            ['01', 'Auditoría', 'Negocio antes que anuncio'],
            ['02', 'Arquitectura', 'Campañas con estructura real'],
            ['03', 'Inteligencia', 'Decisiones, no solo métricas'],
          ].map(([n, t, s], i) => (
            <div key={n} data-anim="fade-up" data-delay={`${2.0 + i * 0.1}`} className="flex flex-col gap-2 pl-4 border-l" style={{ borderColor: 'rgba(7,229,112,0.20)' }}>
              <div className="mono text-[0.7rem] tracking-[0.3em]" style={{ color: '#07e570' }}>{n}</div>
              <div className="h-section" style={{ fontSize: 'clamp(1.2rem, 2.2vw, 1.8rem)', color: '#f5f5f0' }}>{t}</div>
              <div className="body-copy" style={{ fontSize: '0.95rem' }}>{s}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

// Single myth row — appears, then gets struck through after 0.4s
const MythRow = ({ i, a, b, body }) => {
  const ref = React.useRef(null);
  const [struck, setStruck] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setStruck(true), 600 + i * 250);
          io.disconnect();
        }
      },
      { threshold: 0.45 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [i]);
  return (
    <div ref={ref} data-anim="fade-up" data-delay={`${i * 0.12}`} className="py-6 border-t" style={{ borderColor: 'rgba(7,229,112,0.10)' }}>
      <div className="flex flex-wrap items-baseline gap-4">
        <div className="mono text-[0.7rem] tracking-[0.3em]" style={{ color: '#555550' }}>0{i + 1}</div>
        <div className="flex flex-wrap items-baseline gap-3" style={{ fontSize: 'clamp(1.4rem, 3vw, 2.4rem)', fontWeight: 700, letterSpacing: '-0.02em' }}>
          <span className={`strike-text ${struck ? 'struck' : ''}`} style={{ color: '#f5f5f0' }}>{a}</span>
          <span className="mono text-[1.4rem]" style={{ color: '#999990' }}>≠</span>
          <span style={{ color: '#07e570' }}>{b}</span>
        </div>
      </div>
      <p className="body-copy mt-2 max-w-2xl">{body}</p>
    </div>
  );
};

// =================== SECTION 2 — LA FALSA SOLUCIÓN ===================
const FalseSolution = () => {
  return (
    <Section id="enfoque" label="02 Falsa solución" screen="02 Falsa solución" className="overflow-hidden">
      {/* 4-petal soft background */}
      <img
        src="assets/petals-4.png"
        alt=""
        aria-hidden="true"
        className="absolute -left-20 top-20 w-[420px] md:w-[560px] opacity-[0.10] spin-rev pointer-events-none"
      />

      {/* Animated globe on the right */}
      <div className="absolute -right-[18%] top-[12%] w-[640px] h-[640px] md:w-[820px] md:h-[820px] pointer-events-none" aria-hidden="true">
        <div className="globe w-full h-full" />
        {/* orbital rings */}
        <div className="absolute inset-10 rounded-full" style={{ border: '1px dashed rgba(7,229,112,0.18)', animation: 'rotate-slow 90s linear infinite' }} />
        <div className="absolute inset-32 rounded-full" style={{ border: '1px solid rgba(7,229,112,0.08)' }} />
      </div>

      <Container>
        <div className="grid grid-cols-12 gap-6">
          {/* Frosted panel left */}
          <div
            className="col-span-12 lg:col-span-8 relative rounded-[14px] reveal"
            style={{
              background: 'rgba(6,6,6,0.78)',
              backdropFilter: 'blur(24px) saturate(0.85)',
              WebkitBackdropFilter: 'blur(24px) saturate(0.85)',
              border: '1px solid rgba(7,229,112,0.12)',
              padding: 'clamp(28px, 5vw, 64px)',
            }}
          >
            <div className="flex items-center justify-between mb-8">
              <Tag>EL ERROR MÁS COSTOSO</Tag>
              <SectionIndex index={2} />
            </div>

            <h2 data-anim="trigger" className="h-section" style={{ fontSize: 'clamp(2.4rem, 6vw, 5.6rem)', color: '#f5f5f0' }}>
              <span className="block">
                <span className="word-mask"><span className="word-inner" style={{ animationDelay: '0.05s' }}>Más</span></span>{' '}
                <span className="word-mask"><span className="word-inner" style={{ animationDelay: '0.15s' }}><CharWave text="tráfico" /></span></span>
              </span>
              <span className="block">
                <span className="word-mask"><span className="word-inner" style={{ animationDelay: '0.28s', color: '#07e570' }}>no</span></span>{' '}
                <span className="word-mask"><span className="word-inner" style={{ animationDelay: '0.38s' }}>es la respuesta.</span></span>
              </span>
            </h2>

            <p data-anim="fade-up" data-delay="0.4" className="editorial mt-6 max-w-xl" style={{ color: '#999990', fontSize: 'clamp(1.05rem, 1.8vw, 1.4rem)' }}>
              Tres confusiones que cuestan más que cualquier campaña mal gestionada.
            </p>

            <div className="mt-12 flex flex-col">
              {[
                { a: 'Más contenido', b: 'Más ventas', body: 'No es un problema de cantidad. Es un problema de estructura.' },
                { a: 'Más tráfico', b: 'Más conversión', body: 'Enviar personas a un sistema roto es pagar por confirmar que está roto.' },
                { a: 'Más anuncios', b: 'Más clientes', body: 'La publicidad amplifica lo que ya existe. Si lo que existe no está listo, solo amplifica el problema.' },
              ].map((row, i) => (
                <MythRow key={i} i={i} a={row.a} b={row.b} body={row.body} />
              ))}
              <div className="border-t" style={{ borderColor: 'rgba(7,229,112,0.10)' }} />
            </div>

            <div className="mt-14 reveal">
              <div className="text-[#07e570] mb-3 mono text-[0.7rem] tracking-[0.3em]">QUOTE</div>
              <blockquote
                className="editorial"
                style={{ fontSize: 'clamp(1.4rem, 3vw, 2.4rem)', color: '#f5f5f0', maxWidth: '36ch' }}
              >
                <span style={{ color: '#07e570' }}>“</span>
                El problema raramente es la inversión publicitaria.<br />
                El problema es lo que viene después del clic.
                <span style={{ color: '#07e570' }}>”</span>
              </blockquote>
            </div>
          </div>

          {/* Right space holds the globe visible behind */}
          <div className="hidden lg:flex col-span-4 flex-col gap-6 justify-end mt-12">
            <div className="rounded-md p-5" style={{ background: 'rgba(6,6,6,0.55)', border: '1px solid rgba(7,229,112,0.15)', backdropFilter: 'blur(10px)' }}>
              <div className="mono text-[0.65rem] tracking-[0.3em]" style={{ color: '#07e570' }}>EN VIVO</div>
              <div className="mt-2 body-copy" style={{ color: '#f5f5f0', fontSize: '0.95rem' }}>
                El planeta digital gira. La mayoría persigue tráfico. Muy pocos lo ordenan.
              </div>
            </div>
            <div className="rounded-md p-5" style={{ background: 'rgba(6,6,6,0.55)', border: '1px solid rgba(7,229,112,0.15)', backdropFilter: 'blur(10px)' }}>
              <div className="mono text-[0.65rem] tracking-[0.3em]" style={{ color: '#07e570' }}>RECORDATORIO</div>
              <div className="mt-2 body-copy" style={{ color: '#f5f5f0', fontSize: '0.95rem' }}>
                Una campaña no es una estrategia. Una estrategia es lo que vuelve útil una campaña.
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

// =================== SECTION 3 — CUANDO SÍ ESTÁ LISTO ===================
const WhenReady = () => {
  const states = [
    { n: '①', t: 'Claridad', body: 'Sabes exactamente qué está funcionando y por qué.' },
    { n: '②', t: 'Previsibilidad', body: 'Tu crecimiento deja de depender del azar.' },
    { n: '③', t: 'Decisiones con datos', body: 'Cada optimización parte de información real, no intuición.' },
    { n: '④', t: 'Escalamiento consciente', body: 'Creces cuando el sistema está listo para crecer.' },
  ];
  return (
    <Section id="diferencia" label="03 La diferencia" screen="03 Diferencia">
      <Container>
        <div className="grid grid-cols-12 gap-12 lg:gap-20">
          <div className="col-span-12 lg:col-span-6">
            <div className="flex items-center justify-between">
              <Tag>LA DIFERENCIA ES REAL</Tag>
              <SectionIndex index={3} />
            </div>
            <h2 className="h-section reveal mt-8" style={{ fontSize: 'clamp(2.4rem, 5.5vw, 5rem)', color: '#f5f5f0' }}>
              Cuando la estructura<br />
              precede al tráfico,<br />
              <em className="italic font-light" style={{ color: '#07e570' }}>todo cambia.</em>
            </h2>
            <p className="body-copy reveal mt-8 max-w-md" style={{ fontSize: '1.15rem' }}>
              No hablamos de "más ventas".<br />
              Hablamos de un negocio que funciona con lógica, donde cada campaña genera datos, y cada dato genera decisiones.
            </p>

            <div className="reveal mt-10 flex items-center gap-5" style={{ transitionDelay: '0.1s' }}>
              <div className="w-16 h-[1px] bg-[#07e570]" />
              <div className="mono text-[0.7rem] tracking-[0.3em] uppercase" style={{ color: '#07e570' }}>SISTEMA &gt; SUERTE</div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {states.map((s, i) => {
              const dir = ['spring-bl', 'spring-up', 'spring-br', 'spring-up'][i] || 'spring-up';
              return (
                <div
                  key={s.n}
                  data-anim={dir}
                  data-delay={`${i * 0.14}`}
                  className="state-card rounded-[14px] p-7"
                  style={{
                    background: '#0d0d0d',
                    border: '1px solid rgba(7,229,112,0.12)',
                    minHeight: 190,
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[1.6rem]" style={{ color: '#07e570', fontWeight: 600 }}>{s.n}</span>
                    <span className="mono text-[0.65rem] tracking-[0.3em]" style={{ color: '#555550' }}>STATE.0{i + 1}</span>
                  </div>
                  <div className="mt-6 h-section" style={{ fontSize: '1.7rem', color: '#f5f5f0' }}>{s.t}</div>
                  <p className="body-copy mt-3" style={{ fontSize: '0.97rem' }}>{s.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
};

// =================== SECTION 4 — MI ENFOQUE ===================
const Approach = () => {
  const bgRef = React.useRef(null);
  React.useEffect(() => {
    let raf = null;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const el = bgRef.current;
        if (!el) { raf = null; return; }
        const r = el.getBoundingClientRect();
        const center = r.top + r.height / 2;
        const p = (center - window.innerHeight / 2) / window.innerHeight;
        const y = Math.max(Math.min(p * -120, 140), -140);
        el.style.transform = `translate3d(0, ${y}px, 0)`;
        raf = null;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <Section id="metodo" label="04 Mi enfoque">
      {/* Mega bg type with parallax */}
      <div
        ref={bgRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-[8%] flex items-center justify-center select-none"
        style={{
          fontFamily: 'Genos', fontWeight: 900, fontSize: 'clamp(10rem, 30vw, 28rem)',
          color: 'transparent', WebkitTextStroke: '1px rgba(7,229,112,0.08)', letterSpacing: '-0.06em', lineHeight: 1,
          willChange: 'transform',
        }}
      >
        SISTEMA
      </div>

      {/* Two vertical green lines that draw in */}
      <div data-anim="line-grow-v" className="hidden lg:block absolute left-[6%] top-[14%] bottom-[14%] w-px" style={{ background: 'linear-gradient(to bottom, transparent, rgba(7,229,112,0.5), transparent)' }} />
      <div data-anim="line-grow-v" data-delay="0.2" className="hidden lg:block absolute right-[6%] top-[14%] bottom-[14%] w-px" style={{ background: 'linear-gradient(to bottom, transparent, rgba(7,229,112,0.5), transparent)' }} />

      <Container>
        <div className="relative">
          <div className="flex items-center justify-between mb-6">
            <Tag>CÓMO TRABAJO</Tag>
            <SectionIndex index={4} />
          </div>

          <h2 className="h-section reveal max-w-[18ch]" style={{ fontSize: 'clamp(2.6rem, 7vw, 7rem)', color: '#f5f5f0' }}>
            No <span className="italic font-light" style={{ color: '#999990' }}>ejecuto</span> campañas.<br />
            <span style={{ color: '#07e570' }}>Construyo sistemas</span><br />
            de adquisición.
          </h2>

          <div className="grid grid-cols-12 mt-16 gap-10 lg:gap-16">
            <div className="col-span-12 lg:col-span-5 reveal">
              <p className="body-copy" style={{ fontSize: '1.15rem', color: '#f5f5f0', fontWeight: 300 }}>
                Mi trabajo comienza mucho antes de publicar el primer anuncio.
                Comienza entendiendo cómo funciona tu negocio, quién compra,
                qué les convence, y qué pasa después de que convierten.
              </p>

              <div className="mt-10 p-7 rounded-md reveal" style={{ background: '#0d0d0d', border: '1px solid rgba(7,229,112,0.18)' }}>
                <div className="mono text-[0.65rem] tracking-[0.3em]" style={{ color: '#07e570' }}>FIRMA</div>
                <p className="editorial mt-4" style={{ fontSize: 'clamp(1.2rem, 2.2vw, 1.7rem)', color: '#07e570' }}>
                  “Soy la persona que le explica a tu negocio qué le dice la publicidad sobre sí mismo.”
                </p>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-7">
              <div className="flex flex-col">
                {[
                  ['Análisis profundo', 'Antes de invertir un solo peso.', '01'],
                  ['Arquitectura de campaña', 'Adaptada a tu estructura real.', '02'],
                  ['Gestión estratégica', 'Reporte y decisiones, no solo métricas.', '03'],
                ].map(([t, s, n], i) => (
                  <div key={n} className="reveal flex items-start gap-6 py-7 border-t" style={{ borderColor: 'rgba(7,229,112,0.12)', transitionDelay: `${i * 0.1}s` }}>
                    <div className="mono text-[0.7rem] tracking-[0.3em] pt-3" style={{ color: '#07e570', minWidth: 32 }}>{n}</div>
                    <div className="flex-1">
                      <div className="h-section" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', color: '#f5f5f0' }}>
                        — {t}
                      </div>
                      <p className="body-copy mt-1">{s}</p>
                    </div>
                    <IconPlus className="text-[#07e570] mt-3" />
                  </div>
                ))}
                <div className="border-t" style={{ borderColor: 'rgba(7,229,112,0.12)' }} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

// =================== SECTION 5 — CON QUIÉN SÍ TRABAJO ===================
const WithWho = () => {
  const items = [
    'Negocios que ya venden y quieren crecer con inteligencia.',
    'Emprendedores que entienden que publicidad no es magia.',
    'Marcas con oferta validada y capacidad operativa real.',
    'Dueños que quieren entender sus números, no solo verlos crecer.',
    'Proyectos donde hay estructura para sostener el crecimiento.',
  ];
  return (
    <section
      id="clientes"
      data-screen-label="05 Con quién sí trabajo"
      className="relative py-[120px] md:py-[180px] overflow-hidden"
      style={{ background: '#0a2f25' }}
    >
      {/* dark green gradient texture */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background:
          'radial-gradient(ellipse at 80% 10%, rgba(7,229,112,0.10), transparent 50%), radial-gradient(ellipse at 20% 90%, rgba(0,0,0,0.55), transparent 50%)'
      }} />
      <img src="assets/arch-flower.png" alt="" aria-hidden="true" className="absolute -left-20 bottom-[-10%] w-[480px] opacity-[0.12]" />
      <img src="assets/sello.png" alt="" aria-hidden="true" className="absolute right-[6%] top-[8%] w-28 spin-slow opacity-90" />

      <Container>
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-5">
            <div className="flex items-center justify-between">
              <Tag>PERFIL DE CLIENTE</Tag>
              <SectionIndex index={5} />
            </div>
            <h2 className="reveal h-section mt-8" style={{ fontSize: 'clamp(2.4rem, 6vw, 6rem)', color: '#f5f5f0' }}>
              No trabajo<br />
              con <em className="italic font-light" style={{ color: '#07e570' }}>cualquier</em><br />
              negocio.
            </h2>

            <p className="editorial reveal mt-8 max-w-md" style={{ color: 'rgba(245,245,240,0.78)', fontSize: 'clamp(1.05rem, 1.8vw, 1.35rem)', fontWeight: 300 }}>
              "Si buscas alguien que haga milagros con poco, no soy tu estratega.
              Si buscas a alguien que construya contigo un sistema sostenible, podemos conversar."
            </p>
          </div>

          <div className="col-span-12 lg:col-span-7">
            <ul className="flex flex-col">
              {items.map((t, i) => (
                <li
                  key={i}
                  data-anim="slide-left"
                  data-delay={`${i * 0.12}`}
                  className="list-mover flex items-start gap-5 py-5 border-t"
                  style={{ borderColor: 'rgba(245,245,240,0.10)' }}
                >
                  <span className="check-draw-wrap mt-1 inline-flex items-center justify-center" style={{ color: '#07e570' }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <circle cx="12" cy="12" r="11" stroke="currentColor" strokeOpacity="0.35" strokeWidth="1" />
                      <polyline
                        className="check-draw"
                        points="6.5,12.5 10.5,16.5 17.5,8.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        pathLength="30"
                        style={{ transitionDelay: `${0.1 + i * 0.12}s` }}
                      />
                    </svg>
                  </span>
                  <span className="list-text" style={{ color: '#f5f5f0', fontSize: 'clamp(1.15rem, 1.8vw, 1.45rem)', lineHeight: 1.35, fontWeight: 400, transition: 'color 0.3s ease' }}>
                    {t}
                  </span>
                </li>
              ))}
              <div className="border-t" style={{ borderColor: 'rgba(245,245,240,0.10)' }} />
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

Object.assign(window, { Hero, FalseSolution, WhenReady, Approach, WithWho });
