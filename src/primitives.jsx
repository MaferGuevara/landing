const { useEffect, useRef, useState, useMemo } = React;

// Reveal-on-scroll hook — observers are now handled by the GLOBAL observer
// in anim.jsx (startGlobalObserver). This hook returns a ref for backward
// compatibility; the global observer picks up .reveal nodes automatically.
function useReveal() {
  return useRef(null);
}

// Tag — small uppercase label
const Tag = ({ children, dim = false, dot = true, className = '' }) =>
<div className={`inline-flex items-center gap-2.5 ${className}`}>
    {dot &&
  <span
    className="inline-block w-1.5 h-1.5 rounded-full"
    style={{ background: dim ? '#999990' : '#07e570', boxShadow: dim ? 'none' : '0 0 12px rgba(7,229,112,0.7)' }} />

  }
    <span className={`label ${dim ? 'label-dim' : ''}`}>{children}</span>
  </div>;


// Section wrapper that auto-reveals children
const Section = ({ id, label, className = '', children, padded = true, screen }) => {
  const ref = useReveal();
  return (
    <section
      id={id}
      ref={ref}
      data-screen-label={screen || label}
      className={`relative ${padded ? 'py-[120px] md:py-[160px]' : ''} ${className}`}>
      
      {children}
    </section>);

};

// Container
const Container = ({ children, className = '' }) =>
<div className={`relative mx-auto w-full max-w-[1280px] px-6 md:px-10 lg:px-14 ${className}`}>{children}</div>;


// Mafer monogram inline (used in nav small) — actual logos use png assets
const Logo = ({ src = 'assets/logo-bright.png', alt = 'mafer.guevara', className = '' }) =>
<img src={src} alt={alt} className={className} draggable="false" />;


// CTA buttons
const CTAPrimary = ({ children, href = '#contacto', className = '', big = false }) =>
<a
  href={href}
  className={`btn-primary inline-flex items-center gap-3 rounded-md font-semibold tracking-wide ${big ? 'px-8 py-4 text-[1.05rem]' : 'px-6 py-3 text-[0.95rem]'} ${className}`}
  style={{ background: '#07e570', color: '#060606', boxShadow: '0 0 0 1px rgba(7,229,112,0.55), 0 0 30px rgba(7,229,112,0.18)' }}>
  
    <span>{children}</span>
    <IconArrow />
  </a>;


const CTAGhost = ({ children, href = '#enfoque', className = '' }) =>
<a
  href={href}
  className={`btn-ghost inline-flex items-center gap-3 rounded-md px-6 py-3 text-[0.95rem] font-medium tracking-wide ${className}`}
  style={{ color: '#f5f5f0', border: '1px solid rgba(7,229,112,0.45)' }}>
  
    <span>{children}</span>
    <IconArrow />
  </a>;


// Decorative hairline
const Hairline = ({ className = '' }) => <div className={`hairline ${className}`} />;

// Numbered index for sections (editorial-style) — disabled per design
const SectionIndex = ({ index, total = 10 }) => null;


// Navbar
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const links = [
  { href: '#enfoque', label: 'Enfoque' },
  { href: '#metodologia', label: 'Metodología' },
  { href: '#clientes', label: 'Clientes' },
  { href: '#testimonios', label: 'Testimonios' },
  { href: '#contacto', label: 'Contacto' }];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-[100] transition-all"
      style={{
        background: scrolled ? 'rgba(6,6,6,0.82)' : 'rgba(6,6,6,0.35)',
        backdropFilter: 'blur(22px) saturate(140%)',
        WebkitBackdropFilter: 'blur(22px) saturate(140%)',
        borderBottom: scrolled ? '1px solid rgba(7,229,112,0.10)' : '1px solid transparent'
      }}>
      
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14 flex items-center justify-between h-[96px] md:h-[108px]">
        <a href="#top" className="flex items-center gap-3" aria-label="mafer.guevara">
          <img src="assets/logo-bright.png" alt="mafer.guevara" className="h-16 md:h-20" draggable="false" />
        </a>
        <nav className="hidden md:flex items-center gap-9">
          {links.map((l) =>
          <a key={l.href} href={l.href} className="nav-link text-[0.95rem] tracking-wide" style={{ color: '#f5f5f0' }}>
              {l.label}
            </a>
          )}
        </nav>
        <div className="hidden md:block">
          <a
            href="#contacto"
            className="btn-ghost inline-flex items-center gap-2 rounded-md px-4 py-2 text-[0.85rem] font-medium tracking-wide"
            style={{ color: '#07e570', border: '1px solid rgba(7,229,112,0.45)' }}>
            
            Diagnóstico
            <IconArrow size={14} />
          </a>
        </div>
        {/* mobile */}
        <button
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md"
          style={{ border: '1px solid rgba(7,229,112,0.25)', color: '#07e570' }}
          onClick={() => setOpen((v) => !v)}
          aria-label="Menú">
          
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            {open ?
            <path d="M6 6l12 12M18 6l-12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /> :

            <>
                <path d="M4 8h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M4 16h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </>
            }
          </svg>
        </button>
      </div>
      {open &&
      <div className="md:hidden border-t border-[rgba(7,229,112,0.10)] bg-[#060606]/95">
          <div className="px-6 py-5 flex flex-col gap-4">
            {links.map((l) =>
          <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-[1.1rem] tracking-wide" style={{ color: '#f5f5f0' }}>
                {l.label}
              </a>
          )}
            <a href="#contacto" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center gap-2 rounded-md px-4 py-2 text-[0.85rem] font-medium tracking-wide" style={{ color: '#07e570', border: '1px solid rgba(7,229,112,0.45)', alignSelf: 'flex-start' }}>
              Diagnóstico <IconArrow size={14} />
            </a>
          </div>
        </div>
      }
    </header>);

};

// Footer
const Footer = () =>
<footer className="relative pt-24 pb-12 border-t" style={{ borderColor: 'rgba(7,229,112,0.08)' }}>
    {/* Decorative pin */}
    <img src="assets/pin.png" alt="" aria-hidden="true" className="absolute -top-8 right-8 md:right-20 w-12 md:w-16 opacity-50" />
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr_1fr] gap-12 items-start">
        <div style={{ height: "200px" }}>
          <img src="assets/logo-bright.png" alt="mafer.guevara" className="h-20" style={{ width: "130px", height: "130px" }} />
          <p className="mt-5 max-w-sm body-copy" style={{ fontSize: '1.05rem', lineHeight: 1.55 }}>
            Estructura antes que tráfico. Estrategia Meta Ads para negocios que ya venden y buscan crecer con inteligencia.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <Tag dim>Trabajo</Tag>
          <div className="body-copy" style={{ fontSize: '1rem' }}>
            <div style={{ color: '#f5f5f0' }}>Estratega Meta Ads</div>
            <div>Trabajando con negocios en +8 países</div>
            <div>Cohortes pequeñas · agenda limitada</div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <Tag dim>Contacto</Tag>
          <a href="mailto:hola@maferguevara.com" className="text-[1.15rem]" style={{ color: '#f5f5f0' }}>
            hola@maferguevara.com
          </a>
          <a href="#" style={{ color: '#999990' }} className="text-[1rem]">maferguevara.com</a>
          <div className="flex items-center gap-3 mt-2">
            <a href="#" className="w-10 h-10 inline-flex items-center justify-center rounded-md" style={{ border: '1px solid rgba(7,229,112,0.25)', color: '#07e570' }} aria-label="Instagram">
              <IconInstagram />
            </a>
            <a href="#" className="w-10 h-10 inline-flex items-center justify-center rounded-md" style={{ border: '1px solid rgba(7,229,112,0.25)', color: '#07e570' }} aria-label="LinkedIn">
              <IconLinkedIn />
            </a>
          </div>
        </div>
      </div>

      <Hairline className="mt-16" />

      <div className="mt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
        <div className="mono text-[0.72rem] tracking-[0.22em] uppercase" style={{ color: 'rgb(169,169,163)' }}>© 2026 MAFER GUEVARA · ESTRUCTURA ANTES QUE TRÁFICO

      </div>
        <div className="flex items-center gap-4">
          <img src="assets/logo-dark.png" alt="" aria-hidden="true" className="h-7 opacity-70" />
          <div className="mono text-[0.72rem] tracking-[0.22em] uppercase" style={{ color: 'rgb(169,169,163)' }}>
            Hecha con precisión · No con prisa
          </div>
        </div>
      </div>
    </Container>
  </footer>;


Object.assign(window, {
  useReveal,
  Tag,
  Section,
  Container,
  Logo,
  CTAPrimary,
  CTAGhost,
  Hairline,
  SectionIndex,
  Navbar,
  Footer
});