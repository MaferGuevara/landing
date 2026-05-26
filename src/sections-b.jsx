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
        className="absolute -bottom-20 -left-20 w-[200px] sm:w-[300px] opacity-[0.08] spin-rev pointer-events-none" />
      

      <Container>
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-7">
            <ul className="flex flex-col">
              {items.map((t, i) =>
              <li
                key={i}
                className="flex items-start gap-5 py-5 border-t"
                style={{ borderColor: 'rgba(7,229,112,0.10)' }}>
                
                  <span className="mt-1 inline-flex items-center justify-center" style={{ color: '#999990' }}>
                    <IconX size={26} />
                  </span>
                  <span style={{ color: '#f5f5f0', fontSize: 'clamp(1.15rem, 1.8vw, 1.45rem)', lineHeight: 1.35, fontWeight: 400 }}>
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
            <h2 className="h-section mt-8" style={{ fontSize: 'clamp(2.4rem, 6vw, 6rem)', color: '#f5f5f0' }}>
              No es <br />
              <span style={{ color: '#07e570' }}>para todos.</span><br />
              <em className="italic font-light" style={{ color: 'rgb(255,255,255)' }}>Y eso está bien.</em>
            </h2>

            <div className="mt-10 rounded-md p-7" style={{ background: '#0d0d0d', border: '1px solid rgba(7,229,112,0.18)' }}>
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
            <h2 className="h-section mt-6" style={{ fontSize: 'clamp(2.6rem, 6.5vw, 6.4rem)', color: '#f5f5f0' }}>
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
            <line className="timeline-line drawn" x1="2" y1="1" x2="98" y2="1" stroke="#07e570" strokeWidth="0.4" strokeLinecap="round" pathLength="1" />
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
                className={`node-dot hidden lg:block absolute -top-[6px] left-6 w-3 h-3 rounded-full`}
                style={{
                  background: '#07e570',
                  boxShadow: '0 0 14px rgba(7,229,112,0.7)'
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

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
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
      className="relative py-[160px] md:py-[220px] overflow-hidden">
      
      <img
        src="assets/arch-flower.png"
        alt=""
        aria-hidden="true"
        className="absolute left-1/2 top-[15%] -translate-x-1/2 w-[400px] sm:w-[600px] md:w-[920px] opacity-[0.06] sm:opacity-[0.08] pointer-events-none" />
      
      <img
        src="assets/flower-6.png"
        alt=""
        aria-hidden="true"
        className="absolute right-[4%] sm:right-[8%] bottom-[8%] w-[120px] sm:w-[180px] opacity-25 spin-slow pointer-events-none" />
      

      <Container>
        <div className="flex items-center justify-between">
          <Tag>FILOSOFÍA DE TRABAJO</Tag>
          <SectionIndex index={8} />
        </div>

        <div className="mt-14 max-w-[26ch]">
          <blockquote
            className="h-display philosophy-static"
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
            <p className="editorial" style={{ color: '#f5f5f0', fontSize: 'clamp(1.2rem, 2.2vw, 1.7rem)', fontWeight: 300, maxWidth: '38ch', letterSpacing: '0.04em' }}>
              El reporte no termina en el pasado.<br />
              Termina con las decisiones del siguiente crecimiento.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-5 flex lg:justify-end items-end">
            <div className="flex items-center gap-3 mono text-[0.7rem] tracking-[0.32em] uppercase" style={{ color: '#07e570', fontSize: "9px" }}>
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
            <h2 className="h-section mt-8" style={{ fontSize: 'clamp(2.4rem, 6vw, 6rem)', color: '#f5f5f0' }}>
              Lo que dicen<br />
              quienes ya<br />
              <span style={{ color: '#07e570' }}>tienen sistema.</span>
            </h2>
            <p className="body-copy mt-8 max-w-md" style={{ fontSize: '1.05rem' }}>
              No son testimonios escritos para vender.
              Son frases que se quedaron de conversaciones de trabajo.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-5">
              {['Colombia', 'México', 'Uruguay', 'Venezuela', 'Argentina', 'Chile'].map((c) =>
              <span key={c} className="mono text-[0.7rem] tracking-[0.3em] uppercase" style={{ color: '#999990' }}>
                  <span style={{ color: '#07e570' }}>·</span> {c}
                </span>
              )}
            </div>

            <div className="mt-12 rounded-md p-6" style={{ background: '#0d0d0d', border: '1px solid rgba(7,229,112,0.18)' }}>
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
// Country code list — flag emoji, name (ES), dial code, iso2
const COUNTRY_CODES = [
  { iso: 'AR', name: 'Argentina', code: '+54', flag: '🇦🇷' },
  { iso: 'BO', name: 'Bolivia', code: '+591', flag: '🇧🇴' },
  { iso: 'BR', name: 'Brasil', code: '+55', flag: '🇧🇷' },
  { iso: 'CA', name: 'Canadá', code: '+1', flag: '🇨🇦' },
  { iso: 'CL', name: 'Chile', code: '+56', flag: '🇨🇱' },
  { iso: 'CO', name: 'Colombia', code: '+57', flag: '🇨🇴' },
  { iso: 'CR', name: 'Costa Rica', code: '+506', flag: '🇨🇷' },
  { iso: 'CU', name: 'Cuba', code: '+53', flag: '🇨🇺' },
  { iso: 'DO', name: 'República Dominicana', code: '+1', flag: '🇩🇴' },
  { iso: 'EC', name: 'Ecuador', code: '+593', flag: '🇪🇨' },
  { iso: 'SV', name: 'El Salvador', code: '+503', flag: '🇸🇻' },
  { iso: 'ES', name: 'España', code: '+34', flag: '🇪🇸' },
  { iso: 'US', name: 'Estados Unidos', code: '+1', flag: '🇺🇸' },
  { iso: 'GT', name: 'Guatemala', code: '+502', flag: '🇬🇹' },
  { iso: 'HN', name: 'Honduras', code: '+504', flag: '🇭🇳' },
  { iso: 'MX', name: 'México', code: '+52', flag: '🇲🇽' },
  { iso: 'NI', name: 'Nicaragua', code: '+505', flag: '🇳🇮' },
  { iso: 'PA', name: 'Panamá', code: '+507', flag: '🇵🇦' },
  { iso: 'PY', name: 'Paraguay', code: '+595', flag: '🇵🇾' },
  { iso: 'PE', name: 'Perú', code: '+51', flag: '🇵🇪' },
  { iso: 'PR', name: 'Puerto Rico', code: '+1', flag: '🇵🇷' },
  { iso: 'UY', name: 'Uruguay', code: '+598', flag: '🇺🇾' },
  { iso: 'VE', name: 'Venezuela', code: '+58', flag: '🇻🇪' },
  { iso: 'DE', name: 'Alemania', code: '+49', flag: '🇩🇪' },
  { iso: 'FR', name: 'Francia', code: '+33', flag: '🇫🇷' },
  { iso: 'GB', name: 'Reino Unido', code: '+44', flag: '🇬🇧' },
  { iso: 'IT', name: 'Italia', code: '+39', flag: '🇮🇹' },
  { iso: 'PT', name: 'Portugal', code: '+351', flag: '🇵🇹' },
  { iso: 'NL', name: 'Países Bajos', code: '+31', flag: '🇳🇱' },
  { iso: 'BE', name: 'Bélgica', code: '+32', flag: '🇧🇪' },
  { iso: 'CH', name: 'Suiza', code: '+41', flag: '🇨🇭' },
  { iso: 'AT', name: 'Austria', code: '+43', flag: '🇦🇹' },
  { iso: 'IE', name: 'Irlanda', code: '+353', flag: '🇮🇪' },
  { iso: 'SE', name: 'Suecia', code: '+46', flag: '🇸🇪' },
  { iso: 'NO', name: 'Noruega', code: '+47', flag: '🇳🇴' },
  { iso: 'DK', name: 'Dinamarca', code: '+45', flag: '🇩🇰' },
  { iso: 'FI', name: 'Finlandia', code: '+358', flag: '🇫🇮' },
  { iso: 'PL', name: 'Polonia', code: '+48', flag: '🇵🇱' },
  { iso: 'AU', name: 'Australia', code: '+61', flag: '🇦🇺' },
  { iso: 'NZ', name: 'Nueva Zelanda', code: '+64', flag: '🇳🇿' },
  { iso: 'JP', name: 'Japón', code: '+81', flag: '🇯🇵' },
  { iso: 'KR', name: 'Corea del Sur', code: '+82', flag: '🇰🇷' },
  { iso: 'CN', name: 'China', code: '+86', flag: '🇨🇳' },
  { iso: 'IN', name: 'India', code: '+91', flag: '🇮🇳' },
  { iso: 'ID', name: 'Indonesia', code: '+62', flag: '🇮🇩' },
  { iso: 'TR', name: 'Turquía', code: '+90', flag: '🇹🇷' },
  { iso: 'IL', name: 'Israel', code: '+972', flag: '🇮🇱' },
  { iso: 'AE', name: 'Emiratos Árabes Unidos', code: '+971', flag: '🇦🇪' },
  { iso: 'SA', name: 'Arabia Saudita', code: '+966', flag: '🇸🇦' },
  { iso: 'ZA', name: 'Sudáfrica', code: '+27', flag: '🇿🇦' },
  { iso: 'EG', name: 'Egipto', code: '+20', flag: '🇪🇬' },
  { iso: 'MA', name: 'Marruecos', code: '+212', flag: '🇲🇦' }
];

// Country code dropdown — searchable by name or code
const CountryCodeSelect = ({ value, onChange, focused, setFocused }) => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const wrapRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onDocClick = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false);
    };
    const onEsc = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('mousedown', onDocClick);
    document.addEventListener('keydown', onEsc);
    setTimeout(() => inputRef.current && inputRef.current.focus(), 50);
    return () => {
      document.removeEventListener('mousedown', onDocClick);
      document.removeEventListener('keydown', onEsc);
    };
  }, [open]);

  const q = query.trim().toLowerCase();
  const filtered = q
    ? COUNTRY_CODES.filter((c) =>
        c.name.toLowerCase().includes(q) || c.code.toLowerCase().includes(q) || c.iso.toLowerCase().includes(q)
      )
    : COUNTRY_CODES;

  const isFocused = focused === 'whatsapp-cc';

  return (
    <div ref={wrapRef} className="relative" style={{ flexShrink: 0 }}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        onFocus={() => setFocused('whatsapp-cc')}
        onBlur={() => setFocused(null)}
        className="inline-flex items-center gap-2 h-full"
        style={{
          background: 'rgba(13,13,13,0.85)',
          border: `1px solid ${isFocused || open ? '#07e570' : 'rgba(7,229,112,0.18)'}`,
          color: '#f5f5f0',
          fontFamily: 'Genos, sans-serif',
          fontSize: '1.05rem',
          fontWeight: 400,
          borderRadius: 8,
          padding: '14px 14px',
          cursor: 'pointer',
          outline: 'none',
          minWidth: 110,
          transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
          boxShadow: isFocused || open ? '0 0 0 4px rgba(7,229,112,0.10)' : 'none'
        }}
        aria-haspopup="listbox"
        aria-expanded={open}>
        <span style={{ fontSize: '1.25rem', lineHeight: 1 }}>{value.flag}</span>
        <span style={{ color: '#f5f5f0', fontWeight: 500 }}>{value.code}</span>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ marginLeft: 2, transition: 'transform 0.2s ease', transform: open ? 'rotate(180deg)' : 'none', color: '#07e570' }}>
          <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      </button>

      {open &&
      <div
        className="absolute z-50 mt-2 left-0"
        style={{
          width: 320,
          maxWidth: '90vw',
          background: 'rgba(10,10,10,0.98)',
          border: '1px solid rgba(7,229,112,0.25)',
          borderRadius: 10,
          boxShadow: '0 20px 60px rgba(0,0,0,0.6), 0 0 30px rgba(7,229,112,0.08)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          overflow: 'hidden'
        }}
        role="listbox">
        <div style={{ padding: '12px 12px 0 12px' }}>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar país o +código"
            style={{
              width: '100%',
              background: 'rgba(13,13,13,0.95)',
              border: '1px solid rgba(7,229,112,0.20)',
              color: '#f5f5f0',
              fontFamily: 'Genos, sans-serif',
              fontSize: '1rem',
              padding: '10px 14px',
              borderRadius: 7,
              outline: 'none'
            }} />
        </div>
        <ul
          style={{
            maxHeight: 280,
            overflowY: 'auto',
            margin: 0,
            padding: '8px 6px 8px 6px',
            listStyle: 'none'
          }}>
          {filtered.length === 0 ?
          <li style={{ padding: '14px 12px', color: '#999990', fontSize: '0.95rem', textAlign: 'center' }}>Sin resultados</li> :
          filtered.map((c) => {
            const selected = c.iso === value.iso;
            return (
              <li key={c.iso}>
                <button
                  type="button"
                  onClick={() => { onChange(c); setOpen(false); setQuery(''); }}
                  className="w-full flex items-center gap-3"
                  style={{
                    background: selected ? 'rgba(7,229,112,0.10)' : 'transparent',
                    border: 'none',
                    color: '#f5f5f0',
                    fontFamily: 'Genos, sans-serif',
                    fontSize: '1rem',
                    padding: '10px 12px',
                    borderRadius: 6,
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'background 0.15s ease'
                  }}
                  onMouseEnter={(e) => { if (!selected) e.currentTarget.style.background = 'rgba(7,229,112,0.06)'; }}
                  onMouseLeave={(e) => { if (!selected) e.currentTarget.style.background = 'transparent'; }}
                  role="option"
                  aria-selected={selected}>
                  <span style={{ fontSize: '1.25rem', lineHeight: 1 }}>{c.flag}</span>
                  <span style={{ flex: 1 }}>{c.name}</span>
                  <span className="mono" style={{ color: '#07e570', fontSize: '0.85rem' }}>{c.code}</span>
                </button>
              </li>);
          })}
        </ul>
      </div>
      }
    </div>);

};

// Simple styled dropdown (single select) — dark themed
const StyledSelect = ({ id, value, onChange, options, placeholder, focused, setFocused, focusKey }) => {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);
  useEffect(() => {
    if (!open) return;
    const onDocClick = (e) => { if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false); };
    const onEsc = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('mousedown', onDocClick);
    document.addEventListener('keydown', onEsc);
    return () => {
      document.removeEventListener('mousedown', onDocClick);
      document.removeEventListener('keydown', onEsc);
    };
  }, [open]);
  const isFocused = focused === focusKey || open;
  return (
    <div ref={wrapRef} className="relative">
      <button
        type="button"
        id={id}
        onClick={() => setOpen((v) => !v)}
        onFocus={() => setFocused(focusKey)}
        onBlur={() => setFocused(null)}
        className="w-full inline-flex items-center justify-between gap-3"
        style={{
          background: 'rgba(13,13,13,0.85)',
          border: `1px solid ${isFocused ? '#07e570' : 'rgba(7,229,112,0.18)'}`,
          color: value ? '#f5f5f0' : 'rgba(245,245,240,0.32)',
          fontFamily: 'Genos, sans-serif',
          fontSize: '1.05rem',
          fontWeight: value ? 400 : 300,
          letterSpacing: '0.01em',
          borderRadius: 8,
          padding: '14px 18px',
          cursor: 'pointer',
          outline: 'none',
          textAlign: 'left',
          transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
          boxShadow: isFocused ? '0 0 0 4px rgba(7,229,112,0.10)' : 'none'
        }}
        aria-haspopup="listbox"
        aria-expanded={open}>
        <span style={{ flex: 1, whiteSpace: 'normal', lineHeight: 1.3 }}>{value || placeholder}</span>
        <svg width="14" height="14" viewBox="0 0 12 12" fill="none" style={{ flexShrink: 0, transition: 'transform 0.2s ease', transform: open ? 'rotate(180deg)' : 'none', color: '#07e570' }}>
          <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      </button>
      {open &&
      <ul
        className="absolute z-50 mt-2 left-0 right-0"
        style={{
          background: 'rgba(10,10,10,0.98)',
          border: '1px solid rgba(7,229,112,0.25)',
          borderRadius: 10,
          boxShadow: '0 20px 60px rgba(0,0,0,0.6), 0 0 30px rgba(7,229,112,0.08)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          listStyle: 'none',
          margin: 0,
          padding: 6,
          maxHeight: 320,
          overflowY: 'auto'
        }}
        role="listbox">
        {options.map((opt) => {
          const selected = opt === value;
          return (
            <li key={opt}>
              <button
                type="button"
                onClick={() => { onChange(opt); setOpen(false); }}
                className="w-full"
                style={{
                  background: selected ? 'rgba(7,229,112,0.10)' : 'transparent',
                  border: 'none',
                  color: '#f5f5f0',
                  fontFamily: 'Genos, sans-serif',
                  fontSize: '1rem',
                  padding: '10px 14px',
                  borderRadius: 6,
                  cursor: 'pointer',
                  textAlign: 'left',
                  display: 'block',
                  transition: 'background 0.15s ease'
                }}
                onMouseEnter={(e) => { if (!selected) e.currentTarget.style.background = 'rgba(7,229,112,0.06)'; }}
                onMouseLeave={(e) => { if (!selected) e.currentTarget.style.background = 'transparent'; }}
                role="option"
                aria-selected={selected}>
                {opt}
              </button>
            </li>);
        })}
      </ul>
      }
    </div>);
};

const FinalCTA = () => {
  const [hover, setHover] = useState(false);
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [country, setCountry] = useState(COUNTRY_CODES.find((c) => c.iso === 'UY') || COUNTRY_CODES[0]);
  const [instagram, setInstagram] = useState('');
  const [salesStatus, setSalesStatus] = useState('');
  const [budget, setBudget] = useState('');
  const [focused, setFocused] = useState(null);

  const SALES_OPTIONS = [
    'Sí, de forma constante',
    'Sí, pero podría vender más',
    'No, todavía estamos en etapa de validación'
  ];
  const BUDGET_OPTIONS = [
    'Entre USD 350 y USD 700',
    'Entre USD 701 y USD 1.500',
    'Entre USD 1.501 y USD 3.000',
    'Más de USD 3.000'
  ];

  const goNext = (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !whatsapp.trim()) return;
    setStep(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!instagram.trim() || !salesStatus || !budget) return;
    const subject = encodeURIComponent('Solicitud de diagnóstico estratégico');
    const body = encodeURIComponent(
      `Hola Mafer,\n\nMe gustaría agendar un diagnóstico estratégico.\n\nNombre y Apellido: ${name}\nCorreo: ${email}\nWhatsApp: ${country.code} ${whatsapp} (${country.name})\nInstagram: ${instagram}\n\n¿Genera ventas digitales actualmente?\n→ ${salesStatus}\n\nPresupuesto mensual en publicidad:\n→ ${budget}\n\n— Enviado desde maferguevara.com`
    );
    window.location.href = `mailto:hola@maferguevara.com?subject=${subject}&body=${body}`;
  };

  const fieldStyle = (key) => ({
    background: 'rgba(13,13,13,0.85)',
    border: `1px solid ${focused === key ? '#07e570' : 'rgba(7,229,112,0.18)'}`,
    color: '#f5f5f0',
    fontFamily: 'Genos, sans-serif',
    fontSize: '1.05rem',
    fontWeight: 400,
    letterSpacing: '0.01em',
    borderRadius: 8,
    padding: '14px 18px',
    width: '100%',
    outline: 'none',
    transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
    boxShadow: focused === key ? '0 0 0 4px rgba(7,229,112,0.10)' : 'none'
  });

  return (
    <Section id="contacto" label="10 Conversemos" screen="10 Conversemos" className="overflow-hidden">
      <img src="assets/petals-4.png" alt="" aria-hidden="true" className="absolute -left-20 top-10 w-[180px] sm:w-[280px] opacity-[0.10] spin-rev pointer-events-none" />
      <img src="assets/flower-6.png" alt="" aria-hidden="true" className="absolute -right-10 bottom-10 w-[140px] sm:w-[200px] opacity-[0.18] spin-slow pointer-events-none" />

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

          {/* Diagnostic request form */}
          <form
            onSubmit={step === 1 ? goNext : handleSubmit}
            className="mt-12 w-full max-w-[520px] text-left"
            style={{ display: 'flex', flexDirection: 'column', gap: 14 }}
          >
            {/* Step indicator */}
            <div className="flex items-center gap-3 mb-2">
              <div className="mono text-[0.62rem] tracking-[0.32em] uppercase" style={{ color: '#07e570' }}>PASO {step} / 2</div>
              <div className="flex-1 h-px relative" style={{ background: 'rgba(7,229,112,0.18)' }}>
                <div
                  className="absolute left-0 top-0 h-px"
                  style={{ background: '#07e570', width: step === 1 ? '50%' : '100%', boxShadow: '0 0 8px rgba(7,229,112,0.6)', transition: 'width 0.4s cubic-bezier(0.16,1,0.3,1)' }}
                />
              </div>
              {step === 2 && (
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="mono text-[0.62rem] tracking-[0.28em] uppercase"
                  style={{ color: '#999990', background: 'transparent', border: 'none', cursor: 'pointer', padding: 0 }}>
                  ← Atrás
                </button>
              )}
            </div>

            {step === 1 && (
            <>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="cta-name" className="mono text-[0.65rem] tracking-[0.28em] uppercase" style={{ color: '#07e570' }}>
                Nombre y Apellido
              </label>
              <input
                id="cta-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                onFocus={() => setFocused('name')}
                onBlur={() => setFocused(null)}
                placeholder="Ej. María Fernanda Guevara"
                style={fieldStyle('name')}
                autoComplete="name"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="cta-email" className="mono text-[0.65rem] tracking-[0.28em] uppercase" style={{ color: '#07e570' }}>
                Tu mejor correo
              </label>
              <input
                id="cta-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setFocused('email')}
                onBlur={() => setFocused(null)}
                placeholder="nombre@tuempresa.com"
                style={fieldStyle('email')}
                autoComplete="email"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="cta-whatsapp" className="mono text-[0.65rem] tracking-[0.28em] uppercase" style={{ color: '#07e570' }}>
                WhatsApp
              </label>
              <div className="flex gap-2 items-stretch">
                <CountryCodeSelect value={country} onChange={setCountry} focused={focused} setFocused={setFocused} />
                <input
                  id="cta-whatsapp"
                  type="tel"
                  required
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  onFocus={() => setFocused('whatsapp')}
                  onBlur={() => setFocused(null)}
                  placeholder="55 1234 5678"
                  style={{ ...fieldStyle('whatsapp'), flex: 1, minWidth: 0 }}
                  autoComplete="tel-national"
                />
              </div>
            </div>
            </>
            )}

            {step === 2 && (
            <>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="cta-instagram" className="mono text-[0.65rem] tracking-[0.28em] uppercase" style={{ color: '#07e570' }}>
                Tu usuario de Instagram
              </label>
              <input
                id="cta-instagram"
                type="text"
                required
                value={instagram}
                onChange={(e) => setInstagram(e.target.value)}
                onFocus={() => setFocused('instagram')}
                onBlur={() => setFocused(null)}
                placeholder="@maferguevara.digitalads"
                style={fieldStyle('instagram')}
                autoComplete="off"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="cta-sales" className="mono text-[0.65rem] tracking-[0.28em] uppercase" style={{ color: '#07e570' }}>
                ¿Tu negocio genera ventas digitales actualmente?
              </label>
              <StyledSelect
                id="cta-sales"
                value={salesStatus}
                onChange={setSalesStatus}
                options={SALES_OPTIONS}
                placeholder="Selecciona una opción"
                focused={focused}
                setFocused={setFocused}
                focusKey="sales"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="cta-budget" className="mono text-[0.65rem] tracking-[0.28em] uppercase" style={{ color: '#07e570' }}>
                Presupuesto mensual disponible en publicidad
              </label>
              <StyledSelect
                id="cta-budget"
                value={budget}
                onChange={setBudget}
                options={BUDGET_OPTIONS}
                placeholder="Selecciona un rango"
                focused={focused}
                setFocused={setFocused}
                focusKey="budget"
              />
            </div>
            </>
            )}

            <div className="mt-4 flex justify-center">
              <button
                type="submit"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                className="cta-main inline-flex items-center gap-4 rounded-md px-8 md:px-10 py-5 font-bold tracking-wide"
                style={{
                  background: '#07e570',
                  color: '#060606',
                  fontSize: '1.1rem',
                  border: 'none',
                  cursor: 'pointer',
                  transform: hover ? 'scale(1.04)' : 'scale(1)',
                  filter: hover ? 'brightness(1.06)' : 'brightness(1)',
                  boxShadow: hover ? '0 0 60px rgba(7,229,112,0.55)' : '0 0 50px rgba(7,229,112,0.30)',
                  transition: 'transform 0.3s cubic-bezier(0.34,1.56,0.64,1), filter 0.3s ease, box-shadow 0.3s ease',
                  fontFamily: 'Genos, sans-serif'
                }}>
                {step === 1 ? 'Continuar' : 'Solicitar diagnóstico estratégico'}
                <IconArrow size={18} />
              </button>
            </div>
          </form>

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