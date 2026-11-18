import { Fragment, useEffect, useRef, useState } from "react"
import type { KeyboardEvent as ReactKeyboardEvent } from "react"
import heroVaso from "./assets/hero-vaso-presion.webp"
import heroSeparador from "./assets/hero-separador.webp"
import heroUltravioleta from "./assets/hero-inspeccion-ultravioleta.webp"
import imgRadiografia from "./assets/services/recipiente.jpg"
import imgPenetrantes from "./assets/services/liquidos-penetrantes.webp"
import imgParticulas from "./assets/services/particulas.jpg"
import imgUltrasonido from "./assets/services/ultrasonido.webp"
import imgUltrasonido2 from "./assets/services/ultrasonido-2.webp"
import imgUltrasonidoInspeccion from "./assets/services/ultrasonido-inspeccion.webp"
import imgLaboratorio from "./assets/services/laboratorio-card.webp"
import laboratorio1 from "./assets/services/laboratorio-1.webp"
import laboratorio2 from "./assets/services/laboratorio-2.webp"
import laboratorio3 from "./assets/services/laboratorio-3.webp"
import laboratorio4 from "./assets/services/laboratorio-4.webp"
import imgDrones from "./assets/services/drones.webp"
import imgVisual1 from "./assets/services/visual-1.webp"
import imgVisual2 from "./assets/services/visual-2.webp"
import prjSlug from "./assets/projects/slug-catchers.webp"
import prjCompresoras from "./assets/projects/plantas-compresoras.webp"
import prjTrampas from "./assets/projects/trampas-anelo.webp"
import prjSeparadores from "./assets/projects/separadores.webp"
import prjAeroenfriadores from "./assets/projects/aeroenfriadores.webp"
import prjAlimenticia from "./assets/projects/alimenticia.webp"
import placeholderImage from "./assets/industrial-placeholder.svg"
import iramLogo from "./assets/credentials/iram-logo.png"
import asmeLogo from "./assets/credentials/asme-logo.png"
import intiLogo from "./assets/credentials/brands/inti.png"
import carestreamLogo from "./assets/credentials/brands/carestream.png"
import magnafluxLogo from "./assets/credentials/brands/magnaflux.png"
import jcaLogo from "./assets/jca-logo.png"
import whatsappIcon from "./assets/wp-icono-01.png"

type ServiceSection = {
  title: string
  code: string
  paragraphs: string[]
}

type Service = {
  title: string
  code: string
  teaser: string
  description: string
  sections?: ServiceSection[]
  images: {
    current: string
    gallery?: { src: string; alt: string }[]
    final: string[]
  }
  status: "original"
}

type Project = {
  title: string
  code: string
  teaser: string
  description: string
  images: {
    current: string
    final: string[]
  }
  status: "pending-approval"
}

// Datos de contacto: completar cuando el cliente los confirme.
// whatsapp: solo dígitos con código de país, ej. "5491100000000".
const operatingAddress =
  "Oficial Primero Bombero José María Sánchez 1283, Quilmes, Buenos Aires, Argentina"

const contact = {
  whatsapp: "5491151619607",
  email: "Info@ndtantonelli.com.ar",
}
const whatsappHref =
  "https://api.whatsapp.com/send?phone=5491151619607&text=Hola%20JCA"

const imageAlt =
  "Instalación industrial, imagen ilustrativa provisoria pendiente de reemplazo"

const services: Service[] = [
  {
    title: "Radiografía y gammagrafía industrial",
    code: "RT / RI",
    teaser:
      "Inspección de soldaduras, piezas fundidas y componentes mediante rayos X y gammagrafía con Iridio-192.",
    description:
      "Inspección de soldaduras, piezas fundidas y componentes mediante rayos X y gammagrafía con Iridio-192. Ensayos en fabricación, montaje y mantenimiento de cañerías, recipientes a presión y equipos industriales.",
    images: {
      current: imgRadiografia,
      final: [
        "GAMMAGRAFIA INDUSTRIAL SOBRE SOLDADURA DIÁMETRO 36.jpg",
        "Radiografiado de piezas fundidas.jpg",
      ],
    },
    status: "original",
  },
  {
    title: "Ensayos de líquidos penetrantes",
    code: "LP / PT",
    teaser:
      "Inspección con líquidos penetrantes visibles y fluorescentes sobre soldaduras, piezas mecanizadas, fundiciones y componentes industriales.",
    description:
      "Inspección con líquidos penetrantes visibles y fluorescentes sobre soldaduras, piezas mecanizadas, fundiciones y componentes industriales. Aplicaciones en cañerías, recipientes, válvulas, componentes para izaje, piezas mecánicas, aportes duros de soldadura y estructuras metálicas fabricadas en acero carbono y/o acero inoxidable.",
    images: {
      current: imgPenetrantes,
      final: [
        "LIQUIDOS PENETRANTES VISIBLES SOBRE SOLDADURAS DE CAÑERIAS 1.jpg",
        "LIQUIDOS PENETRANTES FLUORESCENTES - POST EMULSIFICABLES.jpeg",
      ],
    },
    status: "original",
  },
  {
    title: "Ensayos de partículas magnetizables",
    code: "PM / MT",
    teaser:
      "Inspección de soldaduras y componentes ferromagnéticos con partículas visibles y fluorescentes.",
    description:
      "Inspección de soldaduras y componentes ferromagnéticos con partículas visibles y fluorescentes. Disponemos de técnicas mediante yugo electromagnético y banco de magnetización de 2500 A - Longitud máxima: 1500 mm, con técnicas por pasaje de corriente, conductor central y bobina.Aplicaciones en cigüeñales, ejes, engranajes, piezas forjadas, árboles de levas, bielas, cuerpo y bridas para válvulas. Desmagnetización y control de campo residual.",
    images: {
      current: imgParticulas,
      final: [
        "PARTICULAS MAGNETIZABLES VISIBLES VIA HÚMEDA CON CONTRASTE Y YUGO ELECTROMAGNETICO MAGNAFLUX Y7.png",
        "EJECUCIÓN - ENSAYO DE PARTICULAS MAGNETICAS FLUORESCENTE VIA HÚMEDA - PASEJE DE CORRIENTE - CIGUEÑAL MOTOR VOLKSWAGEN GOL.jpg",
      ],
    },
    status: "original",
  },
  {
    title: "Ensayos de ultrasonido",
    code: "UT / US",
    teaser:
      "Detección de falla en soldaduras y materiales mediante ultrasonido convencional.",
    description:
      "Detección de falla en soldaduras y materiales mediante ultrasonido convencional. Medición y mapeo de espesores en cañerías, recipientes e instalaciones, para evaluar espesores remanentes y pérdidas de material.",
    images: {
      current: imgUltrasonido,
      gallery: [
        { src: imgUltrasonido2, alt: "Ensayo de ultrasonido con palpador sobre una pieza metálica" },
        { src: imgUltrasonidoInspeccion, alt: "Inspección de una pieza industrial con equipo de ultrasonido" },
      ],
      final: [
        "Inspección por ultrasonidos detección de fallas sobre soldaduras de recipientes.jpg",
        "Mapeo de espesores.jpeg",
      ],
    },
    status: "original",
  },
  {
    title: "Laboratorio de ensayos no destructivos",
    code: "",
    teaser:
      "Ensayos de probetas y piezas especiales en laboratorio, y medición de dureza y rugosidad.",
    description:
      "Laboratorio de ensayos de probetas y piezas especiales, y medición de dureza y rugosidad.",
    sections: [
      {
        title: "Laboratorio de ensayos de probetas y piezas especiales",
        code: "",
        paragraphs: [
          "Recibimos probetas de soldadura, piezas mecanizadas, fundiciones, forjados y componentes mecánicos para inspección mediante ensayos no destructivos.",
          "Realizamos ensayos sobre probetas destinadas a la calificación de soldadores y procedimientos de soldadura, y controles de piezas durante fabricación o mantenimiento.",
          "Cada trabajo se documenta mediante un informe con identificación de las piezas, método aplicado y resultados.",
        ],
      },
      {
        title: "Medición de dureza y rugosidad",
        code: "",
        paragraphs: [
          "Controles de dureza en materiales y componentes in situ, y medición de rugosidad en superficies mecanizadas, según los requisitos del trabajo.",
        ],
      },
    ],
    images: {
      current: imgLaboratorio,
      gallery: [
        { src: laboratorio1, alt: "Control de iluminación y tiempo de ensayo sobre una probeta de soldadura" },
        { src: laboratorio2, alt: "Probeta de soldadura a tope preparada para inspección" },
        { src: laboratorio3, alt: "Probeta de soldadura en ángulo con marcas de inspección" },
        { src: laboratorio4, alt: "Inspección fluorescente de piezas bajo luz ultravioleta" },
      ],
      // Fotografías definitivas pendientes (dureza/rugosidad y laboratorio).
      final: [
        "BANCO PARA INSPECCIÓN PARTÍCULAS MAGNETIZABLES - PM - MT - CAPACIDAD 2500 A - LONGITUD ENTRE PUNTAS 1500 mm- MARCA AEROPLATA ARGENTINA S.A..png",
        "PROBETA DE SOLDADURA A TOPE ENSAYADA CON PARTICULAS MAGNETIZABLES Y GAMMAGRAFIA INDUSTRIAL.png",
      ],
    },
    status: "original",
  },
  {
    title: "Inspección visual y relevamientos con drones",
    code: "IV / VT",
    teaser:
      "Inspección visual directa e indirecta mediante boroscopio y drones.",
    description:
      "Inspección visual directa e indirecta mediante boroscopio y drones. Inspección de soldaduras, componentes e instalaciones durante fabricación, montaje y mantenimiento. Evaluación y registro de condiciones superficiales y discontinuidades visibles por inspectores de soldaduras certificados según IRAM IAS U500-169. Relevamientos visuales, fotografía y video de instalaciones industriales, techos y estructuras. Inspección de instalaciones fotovoltaicas. Relevamientos visuales y servicios de termografía mediante profesionales y equipamiento especializado, previa evaluación del alcance.",
    images: {
      current: imgDrones,
      gallery: [
        { src: imgDrones, alt: "Relevamiento aéreo con dron de una obra de cañerías industriales" },
        { src: imgVisual1, alt: "Inspección visual de cañerías e instalaciones industriales" },
        { src: imgVisual2, alt: "Inspección visual del interior de una cañería y su soldadura" },
      ],
      final: [
        "Inspección visual directa",
        "Inspección visual indirecta mediante boroscopio",
        "Relevamientos con dron",
      ],
    },
    status: "original",
  },
]

const projects: Project[] = [
  {
    title: "Fabricación de slug catchers",
    code: "01",
    teaser:
      "Inspección mediante radiografía, partículas magnetizables y ultrasonido durante la fabricación de slug catchers.",
    description:
      "Inspección mediante radiografía, partículas magnetizables y ultrasonido durante la fabricación de slug catchers.",
    images: { current: prjSlug, final: [] },
    status: "pending-approval",
  },
  {
    title: "Plantas compresoras e instalaciones de gas",
    code: "02",
    teaser:
      "Ensayos no destructivos en soldaduras de cañerías e instalaciones de plantas compresoras.",
    description:
      "Ensayos no destructivos en soldaduras de cañerías e instalaciones de plantas compresoras.",
    images: { current: prjCompresoras, final: [] },
    status: "pending-approval",
  },
  {
    title: "Trampas lanzadoras y receptoras - Añelo, 2025",
    code: "03",
    teaser:
      "Ensayos no destructivos durante la instalación de trampas lanzadoras y receptoras de scrapers en Añelo, Neuquén.",
    description:
      "Ensayos no destructivos durante la instalación de trampas lanzadoras y receptoras de scrapers en Añelo, Neuquén.",
    images: { current: prjTrampas, final: [] },
    status: "pending-approval",
  },
  {
    title: "Separadores y filtros de proceso",
    code: "04",
    teaser:
      "Inspección de soldaduras mediante radiografía y líquidos penetrantes durante la fabricación de separadores.",
    description:
      "Inspección de soldaduras mediante radiografía y líquidos penetrantes durante la fabricación de separadores.",
    images: { current: prjSeparadores, final: [] },
    status: "pending-approval",
  },
  {
    title: "Cabezales para aeroenfriadores",
    code: "05",
    teaser:
      "Inspección de cabezales para aeroenfriadores mediante líquidos penetrantes, radiografía y ultrasonido.",
    description:
      "Inspección de cabezales para aeroenfriadores mediante líquidos penetrantes, radiografía y ultrasonido.",
    images: { current: prjAeroenfriadores, final: [] },
    status: "pending-approval",
  },
  {
    title: "Equipos para la industria alimenticia",
    code: "06",
    teaser:
      "Inspección visual y líquidos penetrantes sobre soldaduras interiores de recipientes de producción alimenticia.",
    description:
      "Inspección visual y líquidos penetrantes sobre soldaduras interiores de recipientes de producción alimenticia.",
    images: { current: prjAlimenticia, final: [] },
    status: "pending-approval",
  },
]

type CredentialIcon = "certification" | "procedure" | "assistance" | "calibration" | "traceability" | "report"

type Credential = {
  text?: string
  title?: string
  details?: string[]
  icon: CredentialIcon
  brands?: Array<{
    src: string
    alt: string
    kind: "inti" | "magnaflux" | "carestream" | "iram" | "asme"
  }>
}

const credentials: Credential[] = [
  {
    text: "Personal certificado según IRAM NM-ISO 9712, niveles 1, 2 y 3, en los métodos y alcances correspondientes.",
    icon: "certification",
    brands: [
      { src: iramLogo, alt: "IRAM", kind: "iram" },
      { src: intiLogo, alt: "INTI", kind: "inti" },
    ],
  },
  {
    text: "Elaboración y aplicación de procedimientos de ensayos no destructivos, con intervención de personal Nivel 3.",
    icon: "procedure",
  },
  {
    title:
      "Asistencia técnica en END para la obtención de estampas ASME (U1) / (U2) / (R)",
    details: [
      "Elaboramos procedimientos de inspección para recipientes sometidos a presión y prácticas escritas según SNT-TC-1A.",
      "Realizamos ensayos durante y después de la fabricación o reparación de recipientes a presión.",
    ],
    icon: "assistance",
    brands: [{ src: asmeLogo, alt: "ASME", kind: "asme" }],
  },
  {
    text: "Equipos e instrumentos con calibraciones y verificaciones vigentes, según corresponda.",
    icon: "calibration",
  },
  {
    text: "Insumos de ensayo certificados y trazables por lote.",
    icon: "traceability",
    brands: [
      { src: magnafluxLogo, alt: "Magnaflux", kind: "magnaflux" },
      { src: carestreamLogo, alt: "Carestream", kind: "carestream" },
    ],
  },
  {
    text: "Informes con identificación de los componentes inspeccionados, procedimientos utilizados y resultados.",
    icon: "report",
  },
]

function ArrowIcon({ direction = "right" }: { direction?: "left" | "right" }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d={
          direction === "right"
            ? "M5 12h14m-6-6 6 6-6 6"
            : "M19 12H5m6-6-6 6 6 6"
        }
      />
    </svg>
  )
}

// Titular animado palabra por palabra; el texto completo queda accesible.
function SplitText({ text }: { text: string }) {
  return (
    <>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {text.split(" ").map((word, i) => (
          <Fragment key={i}>
            {i > 0 && " "}
            <span className="word">
              <span
                className="word-inner"
                style={{ "--i": i } as React.CSSProperties}
              >
                {word}
              </span>
            </span>
          </Fragment>
        ))}
      </span>
    </>
  )
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11Z" />
      <circle cx="12" cy="10" r="2.3" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M7 10v7M11 17v-7M11 13a3 3 0 0 1 6 0v4" />
      <circle cx="7" cy="7" r="0.5" />
    </svg>
  )
}

function CredentialMark({ icon }: { icon: CredentialIcon }) {
  const paths: Record<CredentialIcon, React.ReactNode> = {
      certification: (
        <>
          <circle cx="12" cy="8" r="5" />
          <path d="m9 8 2 2 4-4M8 12l-1 9 5-3 5 3-1-9" />
        </>
      ),
      assistance: (
        <>
          <path d="M12 3 4 6v6c0 4 4 7 8 9 4-2 8-5 8-9V6z" />
          <path d="m8 12 3 3 5-6" />
        </>
      ),
      procedure: (
        <>
          <path d="M6 3h8l4 4v14H6z" />
          <path d="M14 3v5h4M9 12h6M9 16h6" />
        </>
      ),
      calibration: (
        <>
          <path d="M5 18a8 8 0 1 1 14 0" />
          <path d="m12 13 4-4M7 18h10" />
          <circle cx="12" cy="13" r="1" />
        </>
      ),
      traceability: (
        <>
          <path d="M3 12V5h7l10 10-7 7Z" />
          <circle cx="7.5" cy="8.5" r="1.5" />
          <path d="m12 14 3 3" />
        </>
      ),
      report: (
        <>
          <path d="M8 4h8M9 2h6v4H9zM6 4H4v18h16V4h-2" />
          <path d="M8 17v-3M12 17v-6M16 17V9" />
        </>
      ),
    }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {paths[icon]}
    </svg>
  )
}

function ServiceModal({
  service,
  onClose,
}: {
  service: Service
  onClose: () => void
}) {
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const previousFocus = document.activeElement as HTMLElement | null
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    closeRef.current?.focus()

    const handleKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") onClose()
      if (event.key !== "Tab" || !dialogRef.current) return
      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'button, [href], [tabindex]:not([tabindex="-1"])',
      )
      if (!focusable.length) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = previousOverflow
      previousFocus?.focus()
    }
  }, [onClose])

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
      <div
        className="service-modal"
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button
          className="modal-close"
          ref={closeRef}
          onClick={onClose}
          aria-label="Cerrar detalle"
        >
          <span aria-hidden="true">×</span>
        </button>
        {service.images.gallery ? (
          <ImageCarousel slides={service.images.gallery} className="modal-image hero-slideshow modal-slideshow" label={`Imágenes de ${service.title}`} modal />
        ) : (
        <div className="modal-image">
          <img className="modal-image-background" src={service.images.current} alt="" aria-hidden="true" />
          <img
            className="modal-image-foreground"
            src={service.images.current}
            alt={imageAlt}
            width="800"
            height="500"
          />
        </div>
        )}
        <div className="modal-copy">
          <p className="eyebrow">Detalle del servicio</p>
          <h2 id="modal-title">{service.title}</h2>
          {service.code && <p className="modal-code">{service.code}</p>}
          {service.sections ? (
            <div className="modal-sections">
              {service.sections.map((section, index) => (
                <section className="modal-section" key={section.title}>
                  <h3>
                    <span>{String(index + 1).padStart(2, "0")}.</span>{" "}
                    {section.title}
                    {section.code && ` – ${section.code}`}
                  </h3>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </section>
              ))}
            </div>
          ) : (
            <p>{service.description}</p>
          )}
        </div>
      </div>
    </div>
  )
}

const heroSlides = [
  { src: heroVaso, alt: "Vaso de presión industrial en taller" },
  { src: heroSeparador, alt: "Separador de acero en taller industrial" },
  { src: heroUltravioleta, alt: "Inspección ultravioleta de un cigüeñal" },
]

function ImageCarousel({ slides = heroSlides, className = "hero-image hero-slideshow", label = "Inspecciones industriales", modal = false }: {
  slides?: { src: string; alt: string }[]
  className?: string
  label?: string
  modal?: boolean
}) {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  useEffect(() => {
    if (modal) return
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (motion.matches) setPaused(true)
    const onMotionChange = () => { if (motion.matches) setPaused(true) }
    motion.addEventListener("change", onMotionChange)
    return () => motion.removeEventListener("change", onMotionChange)
  }, [modal])
  useEffect(() => {
    if (paused) return
    const timer = window.setInterval(() => {
      if (!document.hidden) setActive((index) => (index + 1) % slides.length)
    }, 5000)
    return () => window.clearInterval(timer)
  }, [active, paused, slides.length])

  return (
    <div className={className} role="region" aria-roledescription="carrusel" aria-label={label}>
      {modal ? slides.map((slide, index) => (
        <div key={slide.src} className={`modal-slide${active === index ? " is-active" : ""}`} aria-hidden={active !== index}>
          <img className="modal-image-background" src={slide.src} alt="" aria-hidden="true" />
          <img className="modal-image-foreground" src={slide.src} alt={slide.alt} decoding="async" />
        </div>
      )) : slides.map((slide, index) => (
        <img
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          className={`hero-slide${active === index ? " is-active" : ""}`}
          aria-hidden={active !== index}
          fetchPriority={index === 0 ? "high" : "auto"}
          decoding="async"
        />
      ))}
      {modal ? (
        <div className="modal-slide-controls">
          <button type="button" aria-label="Imagen anterior" onClick={() => setActive((index) => (index - 1 + slides.length) % slides.length)}><span aria-hidden="true">‹</span></button>
          <button type="button" aria-label="Imagen siguiente" onClick={() => setActive((index) => (index + 1) % slides.length)}><span aria-hidden="true">›</span></button>
        </div>
      ) : <div className="hero-slide-controls">
        <div className="hero-slide-dots" aria-label="Elegir imagen">
          {slides.map((slide, index) => (
            <button
              key={slide.src}
              type="button"
              aria-label={`Ver imagen ${index + 1}: ${slide.alt}`}
              aria-current={active === index ? "true" : undefined}
              onClick={() => setActive(index)}
            ><span /></button>
          ))}
        </div>
        <button className="hero-slide-toggle" type="button" onClick={() => setPaused((value) => !value)} aria-label={paused ? "Reanudar imágenes" : "Pausar imágenes"}>
          {paused ? (
            <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M6 3.5 16 10 6 16.5Z" /></svg>
          ) : (
            <svg viewBox="0 0 20 20" aria-hidden="true"><rect x="5" y="3" width="3.5" height="14" rx="0.8" /><rect x="11.5" y="3" width="3.5" height="14" rx="0.8" /></svg>
          )}
        </button>
      </div>}
    </div>
  )
}

export default function App() {
  const [activeService, setActiveService] = useState<Service | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)

  // Navegación suave por anclas, compensada para el header fijo.
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)")
    const onClick = (event: MouseEvent) => {
      const link = (event.target as Element).closest<HTMLAnchorElement>(
        'a[href^="#"]',
      )
      const id = link?.getAttribute("href")?.slice(1)
      const target = id ? document.getElementById(id) : null
      if (!link || !target) return
      event.preventDefault()
      const headerHeight =
        document.querySelector<HTMLElement>(".site-header")?.offsetHeight ?? 0
      const y =
        id === "inicio"
          ? 0
          : target.getBoundingClientRect().top + window.scrollY - headerHeight
      window.scrollTo({ top: y, behavior: reduce.matches ? "auto" : "smooth" })
    }
    document.addEventListener("click", onClick)
    return () => document.removeEventListener("click", onClick)
  }, [])

  // Aparición suave del contenido al entrar en pantalla.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    document
      .querySelectorAll<HTMLElement>(".credentials-list li")
      .forEach((item) => item.classList.remove("reveal"))
    const items = Array.from(
      document.querySelectorAll<HTMLElement>(
        ".hero-copy > *, .section-heading, .credentials-intro > *, .service-card, .credentials-list, .project-card, .contact-intro > *, .contact-panel, .footer-main > *",
      ),
    )
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add("is-visible")
          // Tras la entrada, los hover responden sin retraso.
          window.setTimeout(
            () =>
              (entry.target as HTMLElement).style.setProperty(
                "--reveal-delay",
                "0ms",
              ),
            1200,
          )
          observer.unobserve(entry.target)
        }),
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    )
    items.forEach((el, i) => {
      el.classList.add("reveal")
      el.style.setProperty("--reveal-delay", `${(i % 3) * 90}ms`)
      observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const closeMenu = () => setMenuOpen(false)
  const scrollProjects = (direction: number) => {
    const carousel = carouselRef.current
    if (!carousel) return
    const cards = Array.from(carousel.querySelectorAll<HTMLElement>(".project-card"))
    const centered = window.matchMedia("(max-width: 767px)").matches
    const viewport = carousel.getBoundingClientRect()
    const positions = cards.map((card) => {
      const rect = card.getBoundingClientRect()
      return carousel.scrollLeft + rect.left - viewport.left -
        (centered ? (carousel.clientWidth - rect.width) / 2 : 2)
    })
    const current = positions.reduce((nearest, position, index) =>
      Math.abs(position - carousel.scrollLeft) < Math.abs(positions[nearest] - carousel.scrollLeft)
        ? index : nearest, 0)
    const next = Math.max(0, Math.min(cards.length - 1, current + direction))
    carousel.scrollTo({
      left: positions[next],
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    })
  }

  const handleCarouselKeys = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return
    event.preventDefault()
    scrollProjects(event.key === "ArrowLeft" ? -1 : 1)
  }

  return (
    <>
      <header className="site-header">
        <div className="container nav-wrap">
          <a
            className="brand brand-logo"
            href="#inicio"
            onClick={closeMenu}
            aria-label="JCA & Asociados, inicio"
          >
            <img
              src={jcaLogo}
              alt="JCA & Asociados — Ensayos no destructivos e inspecciones"
              width="384"
              height="119"
            />
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="sr-only">Abrir menú</span>
            <span />
            <span />
          </button>
          <nav
            id="main-navigation"
            className={menuOpen ? "main-nav is-open" : "main-nav"}
          >
            <a href="#inicio" onClick={closeMenu}>
              Inicio
            </a>
            <a href="#servicios" onClick={closeMenu}>
              Servicios
            </a>
            <a href="#trabajos" onClick={closeMenu}>
              Trabajos
            </a>
            <a href="#nosotros" onClick={closeMenu}>
              Nosotros
            </a>
            <a className="nav-cta" href="#contacto" onClick={closeMenu}>
              Contacto
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="stack hero" id="inicio" data-stack="80">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Inspección industrial desde 2001</p>
              <h1>
                <SplitText text="Ensayos no destructivos" />
              </h1>
              <p className="hero-lead">
                JCA &amp; Asociados brinda servicios de inspección mediante
                ensayos no destructivos a las industrias de petróleo y gas,
                nuclear y alimenticia.
              </p>
              <p className="hero-history">
                Operamos desde 2001, con la experiencia de nuestro fundador en
                ensayos no destructivos desde 1970.
              </p>
              <a className="button button-dark" href="#contacto">
                Solicitar cotización <ArrowIcon />
              </a>
            </div>
            <ImageCarousel />
          </div>
        </section>

        <section
          className="stack section services-section"
          id="servicios"
          data-stack="0"
        >
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Servicios</p>
              <h2>
                <SplitText text="Nuestros servicios" />
              </h2>
            </div>
            <div className="services-grid">
              {services.map((service) => (
                <article className="service-card" key={service.title}>
                  <div className="service-image">
                    <img
                      src={service.images.current}
                      alt={service.title}
                      width="600"
                      height="375"
                      loading="lazy"
                    />
                  </div>
                  <div className="service-copy">
                    <h3>{service.title}</h3>
                    <p>{service.teaser}</p>
                    <button
                      className="text-link"
                      onClick={() => setActiveService(service)}
                    >
                      Ver servicio <span aria-hidden="true">+</span>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="stack section credentials-section"
          id="nosotros"
          data-stack="0"
        >
          <div className="container credentials-grid">
            <div className="credentials-intro">
              <p className="eyebrow">Nuestra experiencia</p>
              <h2>
                <SplitText text="Respaldo técnico" />
              </h2>
              <p>
                Experiencia, procedimientos y recursos técnicos que respaldan
                nuestros servicios, con atención en obra, plantas industriales y
                laboratorio propio.
              </p>
            </div>
            <ul className="credentials-list">
              {credentials.map((credential) => (
                <li key={credential.title ?? credential.text}>
                  <span
                    className={`credential-mark credential-mark--${credential.icon}`}
                  >
                    <CredentialMark icon={credential.icon} />
                  </span>
                  <div className="credential-content">
                    {credential.title && <strong>{credential.title}</strong>}
                    {credential.text && <p>{credential.text}</p>}
                    {credential.details?.map((detail) => (
                      <p key={detail}>{detail}</p>
                    ))}
                    {credential.brands && (
                      <div className="credential-brands">
                        {credential.brands.map((brand) => (
                          <img
                            className={`credential-brand credential-brand--${brand.kind}`}
                            src={brand.src}
                            alt={brand.alt}
                            key={brand.alt}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          className="stack section projects-section"
          id="trabajos"
          data-stack="0"
        >
          <div className="container">
            <div className="projects-header">
              <div className="section-heading">
                <p className="eyebrow">Experiencia en campo</p>
                <h2>
                  <SplitText text="Trabajos relevantes" />
                </h2>
              </div>
              <div className="carousel-controls">
                <button
                  type="button"
                  onClick={() => scrollProjects(-1)}
                  aria-label="Ver trabajos anteriores"
                >
                  <ArrowIcon direction="left" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollProjects(1)}
                  aria-label="Ver trabajos siguientes"
                >
                  <ArrowIcon />
                </button>
              </div>
            </div>
            <div
              className="projects-carousel"
              ref={carouselRef}
              tabIndex={0}
              onKeyDown={handleCarouselKeys}
              aria-label="Trabajos relevantes"
            >
              {projects.map((project) => (
                <article className="project-card" key={project.code}>
                  <img
                    draggable={false}
                    src={project.images.current}
                    alt=""
                    width="600"
                    height="375"
                    loading="lazy"
                  />
                  <div className="project-copy">
                    <h3>{project.title}</h3>
                    <p>{project.teaser}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="stack contact-section" id="contacto" data-stack="0">
          <div className="container contact-wrap">
            <p className="eyebrow eyebrow-light contact-eyebrow">Contacto</p>
            <div className="contact-intro">
              <div className="contact-heading">
                <h2>
                  <SplitText text="Hablemos de tu proyecto" />
                </h2>
              </div>
              <div className="contact-card-main">
                <div className="contact-card-copy">
                  <p>
                    Contanos qué ensayos necesitás y en qué etapa está tu obra.
                    Te armamos una propuesta a medida.
                  </p>
                </div>
                <a
                  className="button button-light"
                  href={
                    contact.whatsapp
                      ? whatsappHref
                      : `mailto:${contact.email}?subject=Solicitud de cotización`
                  }
                  {...(contact.whatsapp
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  Solicitar cotización <ArrowIcon />
                </a>
              </div>

              <div className="contact-meta contact-row">
                <a
                  className="contact-detail contact-detail--link"
                  href={`mailto:${contact.email}`}
                >
                  <span className="contact-row__icon"><MailIcon /></span>
                  <p>
                    <span>Correo</span>
                    <strong>{contact.email}</strong>
                  </p>
                </a>
                <a
                  className="contact-detail contact-detail--link"
                  href="https://www.linkedin.com/company/jcaensayosnodestructivos/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="contact-row__icon"><LinkedInIcon /></span>
                  <p>
                    <span>LinkedIn</span>
                    <strong>JCA Ensayos No Destructivos</strong>
                  </p>
                </a>
              </div>
            </div>
            <div className="contact-panel">
              <div className="contact-map">
                <div className="contact-map__viewport">
                  <iframe
                    src={`https://www.google.com/maps?q=${encodeURIComponent(operatingAddress)}&output=embed`}
                    loading="lazy"
                    title="Ubicación de JCA & Asociados"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="contact-map__card">
                  <div>
                    <p className="contact-map__label"><PinIcon /> Base operativa</p>
                    <p className="contact-map__address">
                      Oficial Primero Bombero<br />
                      José María Sánchez 1283
                    </p>
                    <p className="contact-map__city">Quilmes, Buenos Aires</p>
                  </div>
                  <a
                    className="contact-map__directions"
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(operatingAddress)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Cómo llegar ↗
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-main">
          <div className="footer-signature">
            <a className="footer-name" href="#inicio">JCA &amp; Asociados</a>
            <p className="footer-service">Ensayos no destructivos e inspecciones</p>
          </div>
          <p className="footer-location">Quilmes, Buenos Aires, Argentina</p>
        </div>
      </footer>

      <a
        className="whatsapp-float"
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Consultar por WhatsApp"
      >
        <span
          className="whatsapp-float__icon"
          aria-hidden="true"
          style={{
            maskImage: `url(${whatsappIcon})`,
            WebkitMaskImage: `url(${whatsappIcon})`,
          }}
        />
      </a>

      {activeService && (
        <ServiceModal
          service={activeService}
          onClose={() => setActiveService(null)}
        />
      )}
    </>
  )
}
