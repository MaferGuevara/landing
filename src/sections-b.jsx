// Sections 6–10

// =================== SECTION 6 — CON QUIÉN NO TRABAJO ===================
const WithoutWho = () => {
  const items = [
  'Negocios que buscan viralidad sin estrategia.',
  'Proyectos sin oferta clara ni proceso de venta definido.',
  'Quienes esperan resultados garantizados en la primera semana.',
  'Marcas que no pueden atender el volumen que generaría la campaña.',
  'Quienes buscan "alguien que maneje las redes" y no un socio estratégico.'];

  return (
    <Section id="no-trabajo" label="06 Con quién no" screen="06 Con quién no" className="overflow-hidden">
      {/* 6-petal flower spinning in corner */}
      <img
        src="assets/flower-6.png"
        alt=""
        aria-hidden="true"
        className="absolute -top-10 -right-10 md:top-10 md:right-10 w-[200px] md:w-[260px] lg:w-[320px] opacity-[0.12] md:opacity-[0.18] spin-slower pointer-events-none" />
      
      <img
        src="assets/petals-4.png"
        alt=""
        aria-hidden="true"
        className="absolute -bottom-20 -left-20 w-[300px] opacity-[0.08] spin-rev pointer-events-none" />
      

      <Container>
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-7">
            <ul className="flex flex-col">
              {items.map((t, i) =>
              <li
                key={i}
                data-anim="reject"
                data-delay={`${i * 0.12}`}
                className="flex items-start gap-5 py-5 border-t"
                style={{ borderColor: 'rgba(7,229,112,0.10)' }}>
                
                  <span className="mt-1 inline-flex items-center justify-center" style={{ color: '#999990' }}>
                    <IconX size={26} />
                  </span>
                  <span style={{ color: 'inherit', fontSize: 'clamp(1.15rem, 1.8vw, 1.45rem)', lineHeight: 1.35, fontWeight: 400 }}>
                    {t}
                  </span>
                </li>
              )}
              <div className="border-t" style={{ borderColor: 'rgba(7,229,112,0.10)' }} />
            </ul>
          </div>

          <div className="col-span-12 lg:col-span-5 order-first lg:order-last">
            <div className="flex items-center justify-between">
              <Tag>TRANSPARENCIA ANTES QUE CORTESÍA</Tag>
              <SectionIndex index={6} />
            </div>
            <h2 data-anim="glitch" className="h-section mt-8" style={{ fontSize: 'clamp(2.4rem, 6vw, 6rem)', color: '#f5f5f0' }}>
              No es <br />
              <span style={{ color: '#07e570' }}>para todos.</span><br />
              <em className="italic font-light" style={{ color: 'rgb(255,255,255)' }}>Y eso está bien.</em>
            </h2>

            <div className="reveal mt-10 rounded-md p-7" style={{ background: '#0d0d0d', border: '1px solid rgba(7,229,112,0.18)' }}>
              <div className="mono text-[0.65rem] tracking-[0.3em] mb-3" style={{ color: '#07e570' }}>POSTURA</div>
              <p className="editorial" style={{ fontSize: 'clamp(1.1rem, 2vw, 1.5rem)', color: '#f5f5f0' }}>
                "Prefiero decirte que no soy la indicada antes de tomar tu inversión y no poder entregarte lo que mereces."
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>);

};

// =================== SECTION 7 — METODOLOGÍA V.E.N.D.E.E. ===================
const Methodology = () => {
  const ref = React.useRef(null);
  const [drawn, setDrawn] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {if (e.isIntersecting) setDrawn(true);}, { threshold: 0.25 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const phases = [
  { letter: 'V', name: 'VISIBILIZAR', body: 'Auditoría completa: negocio, oferta, público, competencia. No publicamos sin entender primero.' },
  { letter: 'E', name: 'ESTRUCTURAR', body: 'Arquitectura de campañas adaptada a tu etapa real de negocio.' },
  { letter: 'N', name: 'NARRAR', body: 'Mensajes que conectan con las personas correctas. Copy estratégico, no genérico.' },
  { letter: 'D', name: 'DIFUNDIR', body: 'Activación y gestión táctica de las campañas. Aquí recién aparecen los anuncios.' },
  { letter: 'E', name: 'EVALUAR', body: 'Reportes que no son solo números. Son decisiones documentadas.', label: 'E.II' },
  { letter: 'E', name: 'ESCALAR', body: 'Crecimiento ordenado cuando el sistema demuestra que está listo.', label: 'E.III' }];


  return (
    <Section id="metodologia" label="07 Metodología" screen="07 Metodología" className="overflow-hidden">
      <img src="assets/pin.png" alt="" aria-hidden="true" className="absolute right-[8%] top-10 w-12 opacity-50" />
      <Container>
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <Tag>MI METODOLOGÍA</Tag>
            <h2 className="reveal h-section mt-6" style={{ fontSize: 'clamp(2.6rem, 6.5vw, 6.4rem)', color: '#f5f5f0' }}>
              El Sistema <span style={{ color: '#07e570' }}>V.E.N.D.E.E.</span><sup className="mono" style={{ fontSize: '0.35em', color: '#07e570' }}>™</sup>
            </h2>
          </div>
          <SectionIndex index={7} />
        </div>

        <p className="body-copy mt-8 md:mt-6 max-w-2xl" style={{ fontSize: '1.1rem' }}>
          Una metodología de 6 fases diseñada para construir sistemas de adquisición que funcionan,
          no campañas que se apagan cuando se acaba el presupuesto.
        </p>

        {/* Timeline */}
        <div ref={ref} className="relative mt-20">
          {/* connector line (horizontal on desktop, vertical on mobile) */}
          <svg className="hidden lg:block absolute top-[58px] left-0 w-full h-2" preserveAspectRatio="none" viewBox="0 0 100 2">
            <line className={`timeline-line ${drawn ? 'drawn' : ''}`} x1="2" y1="1" x2="98" y2="1" stroke="#07e570" strokeWidth="0.4" strokeLinecap="round" pathLength="1" />
          </svg>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-3">
            {phases.map((p, i) =>
            <div
              key={i}
              className="phase-card relative rounded-[14px] p-5 lg:p-5 flex flex-col"
              style={{
                background: '#0d0d0d',
                border: '1px solid rgba(7,229,112,0.14)',
                minHeight: 280
              }}>
              
                {/* Node dot on the line (desktop) */}
                <div
                className={`node-dot ${drawn ? 'fire' : ''} hidden lg:block absolute -top-[6px] left-6 w-3 h-3 rounded-full`}
                style={{
                  background: '#07e570',
                  boxShadow: '0 0 14px rgba(7,229,112,0.7)',
                  animationDelay: `${0.1 + i * 0.33}s`
                }} />
              

                <div className="flex items-start justify-between">
                  <div className="mono text-[0.65rem] tracking-[0.3em]" style={{ color: '#07e570' }}>
                    {p.label || `FASE.0${i + 1}`}
                  </div>
                  <span className="mono text-[0.65rem]" style={{ color: '#555550' }}>{String(i + 1).padStart(2, '0')}/06</span>
                </div>

                <div
                className="mt-4 h-display"
                style={{ fontSize: '5.4rem', color: '#07e570', lineHeight: 0.8 }}>
                
                  {p.letter}
                </div>
                <div className="h-section mt-1" style={{ fontSize: '1.2rem', color: '#f5f5f0' }}>{p.name}</div>
                <p className="body-copy mt-3" style={{ fontSize: '0.92rem', lineHeight: 1.55 }}>{p.body}</p>
              </div>
            )}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 reveal">
          {[
          ['No publicamos', 'sin auditoría'],
          ['No reportamos', 'sin decisiones'],
          ['No escalamos', 'sin sistema']].
          map(([a, b], i) =>
          <div key={i} className="flex items-center gap-4 pl-4 border-l" style={{ borderColor: 'rgba(7,229,112,0.25)' }}>
              <div className="h-section" style={{ fontSize: 'clamp(1.2rem, 2vw, 1.7rem)', color: '#f5f5f0' }}>
                <span style={{ color: '#07e570' }}>{a}</span> {b}
              </div>
            </div>
          )}
        </div>
      </Container>
    </Section>);

};

// =================== SECTION 8 — FILOSOFÍA ===================
const Philosophy = () => {
  return (
    <section
      id="filosofia"
      data-screen-label="08 Filosofía"
      className="philosophy-bg relative py-[160px] md:py-[220px] overflow-hidden">
      
      <img
        src="assets/arch-flower.png"
        alt=""
        aria-hidden="true"
        className="absolute left-1/2 top-[15%] -translate-x-1/2 w-[600px] md:w-[920px] opacity-[0.08] pointer-events-none" />
      
      <img
        src="assets/flower-6.png"
        alt=""
        aria-hidden="true"
        className="absolute right-[8%] bottom-[8%] w-[180px] opacity-30 spin-slow pointer-events-none" />
      

      <Container>
        <div className="flex items-center justify-between">
          <Tag>FILOSOFÍA DE TRABAJO</Tag>
          <SectionIndex index={8} />
        </div>

        <div className="mt-14 max-w-[26ch]">
          <blockquote
            data-anim="trigger"
            className="h-display"
            style={{
              fontSize: 'clamp(3rem, 7vw, 8rem)',
              color: '#07e570',
              fontWeight: 900,
              letterSpacing: '-0.05em',
              lineHeight: 0.9
            }}>
            
            <span style={{ opacity: 0.5 }} className="word-mat" data-style="quote"></span>
            <span className="block" style={{ height: "10px", fontSize: "50px", fontFamily: "Genos", display: "none" }}>
              <span className="word-mat" style={{ animationDelay: '0.05s', textAlign: "left", fontSize: "50px" }}></span>
              <span className="word-mat" style={{ animationDelay: '0.12s', fontSize: "50px" }}></span>
            </span>
            <span className="block" style={{ color: '#f5f5f0', textAlign: "left", height: "10px", display: "none" }}>
              <span className="word-mat" style={{ animationDelay: '0.22s', fontSize: "50px" }}></span>
              <span className="word-mat" style={{ animationDelay: '0.30s', fontSize: "50px" }}></span>
            </span>
            <span className="block">
              <span className="word-mat" style={{ animationDelay: '0.42s', fontSize: "50px" }}><span style={{ color: 'rgb(255,255,255)' }}>CADA
CAMPAÑA
DEJA</span>
<span style={{ color: 'rgb(255,255,255)' }}> INFORMACIÓN CADA MES </span>
 
CONSTRUYE
INTELIGENCIA
</span>
              <span className="word-mat" style={{ animationDelay: '0.50s', fontSize: "50px" }}>
</span>
              <span className="word-mat" style={{ animationDelay: '0.58s', fontWeight: "100", height: "10px" }}></span>
            </span>
            <span className="block" style={{ color: '#f5f5f0' }}>
              <span className="word-mat" style={{ animationDelay: '0.70s', fontSize: "70px" }}></span>
              <span className="word-mat" style={{ animationDelay: '0.78s', fontSize: "45px" }}></span>
              <span className="word-mat" style={{ animationDelay: '0.86s', fontSize: "45px" }}></span>
              <span className="word-mat" style={{ animationDelay: '0.94s', opacity: 0.5 }}></span>
            </span>
          </blockquote>
        </div>

        <div className="grid grid-cols-12 mt-16 gap-6">
          <div className="col-span-12 lg:col-span-7">
            <p data-anim="fade-up" data-delay="1.1" className="editorial" style={{ color: '#f5f5f0', fontSize: 'clamp(1.2rem, 2.2vw, 1.7rem)', fontWeight: 300, maxWidth: '38ch', letterSpacing: '0.04em' }}>
              El reporte no termina en el pasado.<br />
              Termina con las decisiones del siguiente crecimiento.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-5 flex lg:justify-end items-end">
            <div data-anim="line-grow" data-delay="1.2" className="flex items-center gap-3 mono text-[0.7rem] tracking-[0.32em] uppercase" style={{ color: '#07e570', fontSize: "9px" }}>
              <span className="w-10 h-px bg-[#07e570]" />
              MAFER GUEVARA · ESTRATEGA META ADS
            </div>
          </div>
        </div>
      </Container>
    </section>);}; // =================== SECTION 9 — TESTIMONIOS ===================
const TESTIMONIALS = [{ body: 'Antes pensaba que el problema era mi presupuesto. Después de la auditoría inicial, entendí que era mi proceso de venta.', name: 'Laura M.', role: 'Directora clínica estética', loc: 'Colombia' }, { body: 'Mis primeras campañas generaban consultas. Las de Mafer generan pacientes que llegan sabiendo qué quieren.', name: 'Dra. Fernanda R.', role: 'Psicóloga', loc: 'México' }, { body: 'Por primera vez tengo claridad sobre qué está funcionando y por qué, no veo solo números. Ahora me ayudan con mis decisiones.', name: 'Sergio V.', role: 'Gerente comercial · Importadora', loc: 'Uruguay' }, { body: 'El primer mes de trabajo fue el más incómodo porque tuve que enfrentar lo que no estaba funcionando. El cuarto mes fue el más rentable desde el 2018.', name: 'Dr. Carlos A.', role: 'Odontólogo', loc: 'Venezuela' }, { body: 'Creía que necesitaba más seguidores para tener ventas. Mafer me mostró que necesitaba un mejor sistema para convertirlos en clientes.', name: 'Valentina P.', role: 'Tienda productos personalizados', loc: 'Argentina' },
{ body: 'Nunca pensé que una estratega digital me ayudaría a entender mejor mi propio negocio.', name: 'Ana L.', role: 'Abogada', loc: 'Chile' }];


const TestimonialCard = ({ t, wob = 'wobble' }) =>
<article
  className={`${wob} rounded-[14px] p-6 md:p-7`}
  style={{
    background: 'rgba(17,17,17,0.85)',
    border: '1px solid rgba(7,229,112,0.14)',
    backdropFilter: 'blur(8px)',
    WebkitBackdropFilter: 'blur(8px)',
    boxShadow: '0 0 40px rgba(7,229,112,0.05)'
  }}>
  
    <div className="flex items-center justify-between">
      <div className="mono text-[0.65rem] tracking-[0.3em]" style={{ color: '#07e570' }}>CLIENTE · {t.loc}</div>
      <div className="text-[1.6rem] leading-none" style={{ color: '#07e570', fontFamily: 'Genos', fontWeight: 700 }}>“</div>
    </div>
    <p className="editorial mt-4" style={{ color: '#f5f5f0', fontSize: '1.1rem', fontStyle: 'italic', fontWeight: 300, lineHeight: 1.45 }}>
      {t.body}
    </p>
    <div className="mt-5 pt-4 border-t flex items-center justify-between" style={{ borderColor: 'rgba(7,229,112,0.12)' }}>
      <div>
        <div className="h-section text-[1.05rem]" style={{ color: '#f5f5f0' }}>{t.name}</div>
        <div className="body-copy text-[0.85rem]">{t.role}</div>
      </div>
      <div className="flex items-center gap-2 mono text-[0.65rem] tracking-[0.25em] uppercase" style={{ color: '#999990' }}>
        <IconDot size={6} className="text-[#07e570]" />
        {t.loc}
      </div>
    </div>
  </article>;


const Testimonials = () => {
  // Two columns; duplicate content to allow seamless loop
  const col1 = [TESTIMONIALS[0], TESTIMONIALS[2], TESTIMONIALS[4]];
  const col2 = [TESTIMONIALS[1], TESTIMONIALS[3], TESTIMONIALS[5]];
  const doubled = (arr) => [...arr, ...arr];

  return (
    <Section id="testimonios" label="09 Testimonios" screen="09 Testimonios" className="overflow-hidden">
      <img src="assets/sello.png" alt="" aria-hidden="true" className="hidden md:block absolute -left-20 top-1/3 w-24 spin-slow opacity-40 pointer-events-none" />

      <Container>
        <div className="grid grid-cols-12 gap-10 items-start">
          <div className="col-span-12 lg:col-span-5">
            <div className="flex items-center justify-between">
              <Tag>VOCES DE CLIENTES</Tag>
              <SectionIndex index={9} />
            </div>
            <h2 className="reveal h-section mt-8" style={{ fontSize: 'clamp(2.4rem, 6vw, 6rem)', color: '#f5f5f0' }}>
              Lo que dicen<br />
              quienes ya<br />
              <span style={{ color: '#07e570' }}>tienen sistema.</span>
            </h2>
            <p className="body-copy reveal mt-8 max-w-md" style={{ fontSize: '1.05rem' }}>
              No son testimonios escritos para vender.
              Son frases que se quedaron de conversaciones de trabajo.
            </p>

            <div className="reveal mt-10 flex flex-wrap items-center gap-5">
              {['Colombia', 'México', 'Uruguay', 'Venezuela', 'Argentina', 'Chile'].map((c) =>
              <span key={c} className="mono text-[0.7rem] tracking-[0.3em] uppercase" style={{ color: '#999990' }}>
                  <span style={{ color: '#07e570' }}>·</span> {c}
                </span>
              )}
            </div>

            <div className="reveal mt-12 rounded-md p-6" style={{ background: '#0d0d0d', border: '1px solid rgba(7,229,112,0.18)' }}>
              <div className="flex items-baseline gap-3">
                <div className="h-display" style={{ fontSize: '3.4rem', color: '#07e570' }}>+8</div>
                <div className="body-copy">países · industrias diversas</div>
              </div>
              <div className="hairline my-4" />
              <div className="flex items-baseline gap-3">
                <div className="h-display" style={{ fontSize: '3.4rem', color: '#f5f5f0' }}>3</div>
                <div className="body-copy">cupos abiertos por mes</div>
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-7">
            <div
              className="relative grid grid-cols-1 md:grid-cols-2 gap-5 mask-fade-y"
              style={{ height: 720 }}>
              
              <div className="overflow-hidden">
                <div className="t-col-a flex flex-col gap-5">
                  {doubled(col1).map((t, i) =>
                  <MagneticCard key={`a-${i}`} maxTilt={5}>
                      <TestimonialCard t={t} wob="wobble" />
                    </MagneticCard>
                  )}
                </div>
              </div>
              <div className="overflow-hidden mt-10 md:mt-16">
                <div className="t-col-b flex flex-col gap-5">
                  {doubled(col2).map((t, i) =>
                  <MagneticCard key={`b-${i}`} maxTilt={5}>
                      <TestimonialCard t={t} wob="wobble-rev" />
                    </MagneticCard>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>);

};

// =================== SECTION 10 — CTA FINAL ===================
const FinalCTA = () => {
  const [hover, setHover] = useState(false);
  return (
    <Section id="contacto" label="10 Conversemos" screen="10 Conversemos" className="overflow-hidden">
      <img src="assets/petals-4.png" alt="" aria-hidden="true" className="absolute -left-20 top-10 w-[280px] opacity-[0.10] spin-rev" />
      <img src="assets/flower-6.png" alt="" aria-hidden="true" className="absolute -right-10 bottom-10 w-[200px] opacity-[0.18] spin-slow" />

      <Container>
        <div className="flex flex-col items-center text-center">
          <Tag>¿LISTO PARA CONVERSAR?</Tag>

          {/* Mini Mafer */}
          <div className="mt-12 relative">
            <div className="absolute -inset-6 rounded-full" style={{ background: 'radial-gradient(circle, rgba(7,229,112,0.20), transparent 70%)' }} aria-hidden="true" />
            <img
              data-anim="drop-in"
              data-delay="0.0"
              src="assets/mini-mafer.png"
              alt="Mafer Guevara"
              className="breathe relative w-44 md:w-56 rounded-full"
              style={{ border: '1px solid rgba(7,229,112,0.35)' }}
              draggable="false" />
            
            {/* Floating chips */}
            <div data-anim="fade-up" data-delay="0.6" className="hidden md:flex absolute -left-28 top-6 items-center gap-2 px-3 py-1.5 rounded-full mono text-[0.7rem] tracking-[0.25em]" style={{ border: '1px solid rgba(7,229,112,0.25)', background: 'rgba(13,13,13,0.85)', color: '#07e570' }}>
              <IconDot size={6} /> EN LÍNEA
            </div>
            <div data-anim="fade-up" data-delay="0.75" className="hidden md:flex absolute -right-28 bottom-6 items-center gap-2 px-3 py-1.5 rounded-full mono text-[0.7rem] tracking-[0.25em]" style={{ border: '1px solid rgba(7,229,112,0.25)', background: 'rgba(13,13,13,0.85)', color: '#f5f5f0' }}>MVD, UY · GMT-3

            </div>
          </div>

          <h2 data-anim="trigger" className="h-section mt-12 max-w-[22ch]" style={{ fontSize: 'clamp(2.4rem, 5.5vw, 5.2rem)', color: '#f5f5f0' }}>
            <span className="block">
              {['Si', 'tu', 'negocio', 'ya', 'tiene', 'bases'].map((w, i) =>
              <span key={i} className="word-mask"><span className="word-inner" style={{ animationDelay: `${0.5 + i * 0.07}s` }}>{w}</span></span>
              ).reduce((acc, el, i) => i === 0 ? [el] : [...acc, ' ', el], [])}
            </span>
            <span className="block">
              {['y', 'buscas', 'crecer'].map((w, i) =>
              <span key={i} className="word-mask"><span className="word-inner" style={{ animationDelay: `${0.92 + i * 0.07}s` }}>{w}</span></span>
              ).reduce((acc, el, i) => i === 0 ? [el] : [...acc, ' ', el], [])}
              {' '}
              <span className="word-mask"><span className="word-inner italic font-light" style={{ animationDelay: '1.15s', color: '#07e570', fontStyle: 'italic', fontWeight: 300 }}>con estrategia,</span></span>
            </span>
            <span className="block">
              {['podemos', 'conversar.'].map((w, i) =>
              <span key={i} className="word-mask"><span className="word-inner" style={{ animationDelay: `${1.3 + i * 0.08}s` }}>{w}</span></span>
              ).reduce((acc, el, i) => i === 0 ? [el] : [...acc, ' ', el], [])}
            </span>
          </h2>

          <p data-anim="fade-up" data-delay="1.5" className="editorial mt-8 max-w-2xl" style={{ color: '#999990', fontSize: 'clamp(1.05rem, 1.8vw, 1.4rem)' }}>
            <span style={{ color: 'rgb(213,213,213)' }}>No prometo resultados mágicos.</span><br />
            <span style={{ color: 'rgb(227,227,217)' }}>Prometo claridad, estructura y un sistema que trabaja contigo.</span>
          </p>

          <div data-anim="scale-in" data-delay="1.7" className="mt-12">
            <a
              href="mailto:hola@maferguevara.com"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              className="cta-main inline-flex items-center gap-4 rounded-md px-10 py-5 font-bold tracking-wide"
              style={{
                background: '#07e570',
                color: '#060606',
                fontSize: '1.15rem',
                transform: hover ? 'scale(1.05)' : 'scale(1)',
                filter: hover ? 'brightness(1.06)' : 'brightness(1)',
                boxShadow: hover ? '0 0 60px rgba(7,229,112,0.55)' : '0 0 50px rgba(7,229,112,0.30)',
                transition: 'transform 0.3s cubic-bezier(0.34,1.56,0.64,1), filter 0.3s ease, box-shadow 0.3s ease'
              }}>
              
              Solicitar diagnóstico estratégico
              <IconArrow size={18} />
            </a>
          </div>

          <div data-anim="fade-up" data-delay="1.95" className="mt-5 mono text-[0.72rem] tracking-[0.25em] uppercase" style={{ color: 'rgb(209,209,200)' }}>SIN COMPROMISOS · UNA CONVERSACIÓN PARA VER SI HAY FEELLING

          </div>

          <div data-anim="fade-up" data-delay="2.1" className="mt-14 flex flex-col md:flex-row items-center gap-3 md:gap-8">
            <a href="mailto:hola@maferguevara.com" className="flex items-center gap-2 nav-link" style={{ color: '#f5f5f0' }}>
              <IconDot className="text-[#07e570]" /> hola@maferguevara.com
            </a>
            <span className="hidden md:inline" style={{ color: '#555550' }}>·</span>
            <a href="#" className="flex items-center gap-2 nav-link" style={{ color: '#f5f5f0' }}>
              <IconDot className="text-[#07e570]" /> maferguevara.com
            </a>
          </div>
        </div>
      </Container>
    </Section>);

};

Object.assign(window, { WithoutWho, Methodology, Philosophy, Testimonials, FinalCTA });