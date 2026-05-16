// Root app
const { useEffect: _ue } = React;

function App() {
  // Cursor radial glow follower (CSS var on :root) + custom cursor + global observer
  _ue(() => {
    let raf = null;
    let nx = window.innerWidth / 2;
    let ny = window.innerHeight / 2;
    const apply = () => {
      document.documentElement.style.setProperty('--cursor-x', `${nx}px`);
      document.documentElement.style.setProperty('--cursor-y', `${ny}px`);
      raf = null;
    };
    const onMove = (e) => {
      nx = e.clientX;
      ny = e.clientY;
      if (!raf) raf = requestAnimationFrame(apply);
    };
    window.addEventListener('mousemove', onMove, { passive: true });

    // Start global IO + cursor (defer one tick so React has mounted everything)
    const t = setTimeout(() => {
      window.__animTeardown = window.startGlobalObserver();
      window.__cursorTeardown = window.startCustomCursor();
    }, 30);

    return () => {
      window.removeEventListener('mousemove', onMove);
      if (raf) cancelAnimationFrame(raf);
      clearTimeout(t);
      if (window.__animTeardown) window.__animTeardown();
      if (window.__cursorTeardown) window.__cursorTeardown();
    };
  }, []);

  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <SectionDivider />
        <FalseSolution />
        <SectionDivider />
        <WhenReady />
        <SectionDivider />
        <Approach />
        <WithWho />
        <SectionDivider />
        <WithoutWho />
        <SectionDivider />
        <Methodology />
        <SectionDivider />
        <Philosophy />
        <SectionDivider />
        <Testimonials />
        <SectionDivider />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

const SectionDivider = () => (
  <div className="relative mx-auto" style={{ maxWidth: 1440, paddingLeft: 24, paddingRight: 24 }}>
    <div className="section-divider w-full" data-anim="line-grow" />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
