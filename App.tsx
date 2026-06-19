import React, { useState } from 'react';

import {
  Target,
  Users,
  Palette,
  Globe,
  ClipboardList,
  FileText,
  ChevronDown,
  ChevronRight,
  Search,
  BookOpen,
  FileQuestion,
  FolderOpen,
  ArrowRight,
  X,
} from 'lucide-react';

const DEPARTMENTS = [
  {
    id: 'pauta',
    label: 'Pauta',
    icon: Target,
    tagline: 'Meta Ads · Google Ads · Estructura de cuentas',
    manuals: [
      {
        title: 'Cómo montar una campaña en Instagram',
        steps: [
          'Verificar que el Business Manager y la cuenta publicitaria estén activos y verificados.',
          'Definir el objetivo de campaña según el embudo: tráfico, interacción, formularios o remarketing.',
          'Construir el conjunto de anuncios con segmentación (intereses vs. público abierto) según el momento de la cuenta.',
          'Subir creativos siguiendo el manual de marca del cliente — nunca piezas sin revisión previa.',
          'Configurar el píxel y los eventos de conversión antes de activar el gasto.',
          'Activar con presupuesto de prueba y revisar métricas a las 24-48 horas.',
        ],
      },
      {
        title: 'Cómo verificar el portafolio del doctor',
        steps: [
          'Confirmar con el área comercial o el cliente cuáles procedimientos están activos este mes.',
          'Revisar que las piezas de pauta reflejen únicamente servicios vigentes y aprobados.',
          'Validar precios, promociones y condiciones directamente con el doctor o su equipo — nunca asumir.',
          'Actualizar el documento de portafolio en la carpeta del cliente cada vez que haya un cambio.',
        ],
      },
      {
        title: 'Checklist antes de activar cualquier campaña nueva',
        steps: [
          'Cuenta publicitaria sin restricciones ni rechazos pendientes.',
          'Píxel instalado y disparando eventos correctamente.',
          'Creativos aprobados por el cliente y alineados al manual de marca.',
          'Segmentación validada contra el buyer persona del cliente.',
          'Presupuesto y fechas confirmadas con el área de cuentas.',
        ],
      },
    ],
    faqs: [
      {
        q: '¿Qué hago si el Business Manager no está verificado?',
        a: 'No se pueden correr campañas de conversión avanzada de forma confiable. Inicia el proceso de verificación de inmediato y, mientras tanto, usa Make como flujo alterno de captura si la cuenta lo permite.',
      },
      {
        q: '¿Cada cuánto se debe refrescar un creativo?',
        a: 'Como regla general, si un creativo lleva más de 2-3 semanas activo y el CTR empieza a caer, es momento de refrescarlo. No esperar a que el costo por resultado se dispare.',
      },
      {
        q: '¿Quién aprueba el presupuesto de una campaña nueva?',
        a: 'El área de cuentas confirma el presupuesto con el cliente antes de que pauta lo ejecute. Pauta nunca asigna presupuesto por iniciativa propia.',
      },
      {
        q: '¿Qué hacer si una campaña no tiene resultados después de 3 días?',
        a: 'Revisar segmentación, creativo y presupuesto diario antes de pausar. Documentar el diagnóstico en la tarea del cliente antes de hacer cambios grandes.',
      },
    ],
  },
  {
    id: 'comercial',
    label: 'Comercial',
    icon: Users,
    tagline: 'Calificación de leads · Seguimiento · Cierre',
    manuals: [
      {
        title: 'Cómo calificar un lead correctamente',
        steps: [
          'Confirmar interés real en el procedimiento, no solo en información general.',
          'Validar viabilidad médica básica (edad, condición general) antes de agendar.',
          'Confirmar viabilidad económica o disposición a conocer el rango de inversión.',
          'Registrar el lead como calificado solo si cumple los tres puntos anteriores.',
        ],
      },
      {
        title: 'Flujo de seguimiento de alto impacto',
        steps: [
          'Primer contacto: audio predeterminado de bienvenida + pregunta de calificación rápida.',
          'Calificación: llamada corta para confirmar interés, viabilidad y momento de decisión.',
          'Nutrición: video personalizado + pieza de antes/después relevante al caso.',
          'Objeciones: audio o llamada específica según la objeción (precio, miedo, tiempo).',
          'Cierre: llamada de cierre + confirmación escrita de la cita o procedimiento agendado.',
        ],
      },
      {
        title: 'Cómo registrar una agenda en el sistema',
        steps: [
          'Confirmar fecha, hora y tipo de cita (presencial o virtual) directamente con el paciente.',
          'Registrar el lead en la hoja de seguimiento del cliente correspondiente.',
          'Enviar confirmación por WhatsApp y/o correo con los datos de la cita.',
          "Marcar el estado como 'Agendado' y dar seguimiento un día antes para confirmar asistencia.",
        ],
      },
    ],
    faqs: [
      {
        q: '¿Qué hago si un lead no responde después de 3 intentos?',
        a: "Pasar a la categoría de 'stand by' y reintentar con una pieza de reactivación distinta (oferta, testimonio o pregunta directa) después de una semana.",
      },
      {
        q: '¿Cómo se diferencia un lead calificado de uno solo contactado?',
        a: 'Contactado significa que hubo respuesta. Calificado significa que además cumple interés real, viabilidad médica y disposición económica. No son lo mismo.',
      },
      {
        q: '¿Qué información es obligatoria antes de agendar?',
        a: 'Nombre completo, número de contacto, procedimiento de interés, y confirmación de que el paciente entiende el rango de inversión aproximado.',
      },
    ],
  },
  {
    id: 'diseno',
    label: 'Diseño',
    icon: Palette,
    tagline: 'Piezas gráficas · Manuales de marca · Producción visual',
    manuals: [
      {
        title: 'Cómo aplicar un manual de marca nuevo',
        steps: [
          'Leer el manual de marca completo antes de producir cualquier pieza.',
          'Extraer la paleta de color exacta (hex), tipografías y el sistema de logo permitido.',
          'Crear una plantilla base en Canva o Figma con los elementos fijos del manual.',
          'Validar la primera pieza con el líder de diseño antes de producir en volumen.',
        ],
      },
      {
        title: 'Checklist antes de entregar una pieza',
        steps: [
          'Colores exactos del manual de marca (no aproximados).',
          'Tipografía correcta y legible en todos los tamaños de pantalla.',
          'Logo en la posición y tamaño definidos por el manual.',
          'Texto sin errores ortográficos ni de tildes.',
          'Formato correcto según destino (feed, story, reel, impreso).',
        ],
      },
    ],
    faqs: [
      {
        q: '¿Qué hago si el cliente no tiene manual de marca?',
        a: 'Escalar al líder de diseño para construir una propuesta base antes de producir contenido regular. No producir piezas sin un sistema visual mínimo definido.',
      },
      {
        q: '¿Dónde se guardan los archivos fuente de cada cliente?',
        a: "En la carpeta de Drive del cliente, dentro de la subcarpeta 'Diseño > Fuente'. Nunca se entregan archivos editables sin autorización del líder de cuenta.",
      },
    ],
  },
  {
    id: 'web',
    label: 'Web',
    icon: Globe,
    tagline: 'Landing pages · Conversión · Mantenimiento',
    manuals: [
      {
        title: 'Cómo revisar el estado de una landing page',
        steps: [
          'Verificar que el sitio cargue correctamente en menos de 3 segundos.',
          'Confirmar que el píxel de Meta y/o Google esté instalado y disparando.',
          'Revisar que el formulario de contacto envíe los datos correctamente.',
          'Validar que la promesa de la landing coincida con el anuncio que la dirige.',
        ],
      },
      {
        title: 'Checklist mensual de mantenimiento',
        steps: [
          'Velocidad de carga (objetivo: menor a 3 segundos en móvil).',
          'Enlaces rotos o botones que no funcionan.',
          'Información de contacto y horarios actualizados.',
          'Tasa de conversión del mes registrada en el reporte del cliente.',
        ],
      },
    ],
    faqs: [
      {
        q: '¿Qué hago si la tasa de conversión de una landing cae?',
        a: 'Revisar primero velocidad de carga y consistencia del mensaje con la pauta. Si ambos están bien, proponer un ajuste de copy o estructura al líder de cuenta.',
      },
      {
        q: '¿Quién aprueba cambios estructurales en una landing?',
        a: 'El líder de cuenta junto con el cliente. Cambios de copy menores pueden hacerse directamente, pero cambios de estructura siempre requieren aprobación previa.',
      },
    ],
  },
  {
    id: 'pm',
    label: 'Project Manager',
    icon: ClipboardList,
    tagline: 'Coordinación de cuentas · Reportes · Seguimiento',
    manuals: [
      {
        title: 'Cómo estructurar el informe mensual de un cliente',
        steps: [
          'Recopilar datos de las tres áreas: pauta, comercial y contenido.',
          'Construir el análisis con foco en resultados y próximos pasos, no solo en números crudos.',
          'Aplicar el manual de marca de SAUY (negro, amarillo, blanco) a la presentación final.',
          'Revisar el informe completo antes de enviarlo al cliente.',
          'Entregar con un resumen ejecutivo claro al inicio.',
        ],
      },
      {
        title: 'Cómo manejar una cuenta en estado crítico (UCI)',
        steps: [
          'Convocar reunión con las 4 áreas: tráfico, comercial, web y contenido.',
          'Cada área llega con su diagnóstico, qué funciona, qué no, y 2 propuestas concretas.',
          'Documentar el plan de acción acordado con responsables y fechas.',
          'Dar seguimiento semanal hasta que la cuenta salga del estado crítico.',
        ],
      },
    ],
    faqs: [
      {
        q: '¿Cada cuánto se actualiza el portafolio de clientes?',
        a: 'El tablero de estado (semáforo) se actualiza semanalmente. El informe completo de cada cliente se entrega mensualmente.',
      },
      {
        q: '¿Qué hacer si un área no entrega su parte del diagnóstico a tiempo?',
        a: 'Escalar de inmediato al líder de esa área. Un diagnóstico incompleto en una cuenta crítica no es aceptable como excusa.',
      },
    ],
  },
  {
    id: 'operativos',
    label: 'Documentos Operativos',
    icon: FileText,
    tagline: 'Circulares · Políticas internas · SAUY',
    manuals: [
      {
        title: 'Cómo se publica una circular interna',
        steps: [
          'El documento debe ser aprobado por dirección antes de publicarse aquí.',
          'Se sube en formato PDF con fecha de publicación visible.',
          'Se notifica al equipo por el canal interno correspondiente.',
          'Las circulares vigentes se mantienen arriba; las vencidas se archivan pero no se eliminan.',
        ],
      },
    ],
    faqs: [
      {
        q: '¿Dónde consulto las políticas vigentes de la agencia?',
        a: 'Todas las políticas activas se mantienen en esta pestaña, ordenadas por fecha de publicación más reciente.',
      },
    ],
    documents: [
      {
        name: 'Política de uso de Drive y carpetas de cliente',
        date: 'Vigente desde Mar 2026',
      },
      {
        name: 'Protocolo de aprobación de piezas con el cliente',
        date: 'Vigente desde Abr 2026',
      },
    ],
  },
];

function ManualCard({ manual }: { manual: any }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-neutral-200 rounded-lg bg-white overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left hover:bg-neutral-50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <BookOpen size={16} className="text-neutral-400 flex-shrink-0" />
          <span className="font-medium text-neutral-900 text-sm">
            {manual.title}
          </span>
        </div>
        <ChevronDown
          size={18}
          className={`text-neutral-400 flex-shrink-0 transition-transform duration-200 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      {open && (
        <div className="px-5 pb-5 pt-1">
          <ol className="space-y-2.5">
            {manual.steps.map((step: string, i: number) => (
              <li
                key={i}
                className="flex gap-3 text-sm text-neutral-600 leading-relaxed"
              >
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-neutral-900 text-white text-xs font-semibold flex items-center justify-center mt-0.5">
                  {i + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}

function FaqItem({ faq }: { faq: any }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-neutral-200 last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start gap-3 py-4 text-left group"
      >
        <ChevronRight
          size={16}
          className={`text-amber-500 flex-shrink-0 mt-0.5 transition-transform duration-200 ${
            open ? 'rotate-90' : ''
          }`}
        />
        <span className="font-medium text-neutral-900 text-sm group-hover:text-neutral-600 transition-colors">
          {faq.q}
        </span>
      </button>
      {open && (
        <div className="pl-7 pb-4 -mt-1">
          <p className="text-sm text-neutral-600 leading-relaxed">{faq.a}</p>
        </div>
      )}
    </div>
  );
}

export default function SauyBook() {
  const [activeDept, setActiveDept] = useState('pauta');
  const [search, setSearch] = useState('');
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const dept = DEPARTMENTS.find((d) => d.id === activeDept)!;

  const filteredManuals = dept.manuals.filter(
    (m) =>
      search.trim() === '' ||
      m.title.toLowerCase().includes(search.toLowerCase())
  );

  const filteredFaqs = (dept.faqs || []).filter(
    (f) =>
      search.trim() === '' ||
      f.q.toLowerCase().includes(search.toLowerCase()) ||
      f.a.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      className="min-h-screen bg-neutral-50"
      style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
    >
      <header className="bg-neutral-900 border-b-4 border-amber-400">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-amber-400 rounded flex items-center justify-center flex-shrink-0">
              <span
                className="text-neutral-900 font-bold text-sm"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                S
              </span>
            </div>
            <div>
              <div
                className="text-white font-semibold text-sm leading-none"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                SAUYbook
              </div>
              <div className="text-neutral-400 text-xs leading-none mt-0.5 tracking-wide">
                MANUAL OPERATIVO INTERNO
              </div>
            </div>
          </div>
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
            aria-label="Abrir navegación"
          >
            {mobileNavOpen ? <X size={20} /> : <FolderOpen size={20} />}
          </button>
        </div>
      </header>

      <nav
        className={`bg-neutral-900 ${
          mobileNavOpen ? 'block' : 'hidden md:block'
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-0 py-2 md:py-0 overflow-x-auto">
            {DEPARTMENTS.map((d) => {
              const Icon = d.icon;
              const active = d.id === activeDept;
              return (
                <button
                  key={d.id}
                  onClick={() => {
                    setActiveDept(d.id);
                    setSearch('');
                    setMobileNavOpen(false);
                  }}
                  className={`flex items-center gap-2 px-4 py-3 text-xs font-medium whitespace-nowrap border-b-2 transition-colors ${
                    active
                      ? 'text-amber-400 border-amber-400'
                      : 'text-neutral-400 border-transparent hover:text-neutral-200'
                  }`}
                >
                  <Icon size={15} />
                  {d.label}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      <div className="bg-white border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-8">
          <div className="flex items-start justify-between gap-6 flex-wrap">
            <div>
              <div className="text-xs font-semibold text-amber-600 tracking-widest uppercase mb-1.5">
                Departamento
              </div>
              <h1
                className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-1.5"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                {dept.label}
              </h1>
              <p className="text-neutral-500 text-sm">{dept.tagline}</p>
            </div>
            <div className="relative w-full sm:w-72">
              <Search
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400"
              />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Buscar en este departamento..."
                className="w-full pl-9 pr-3 py-2.5 text-sm border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400"
              />
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-5 sm:px-8 py-10">
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen size={18} className="text-neutral-900" />
            <h2 className="text-lg font-semibold text-neutral-900">
              Manuales y procesos
            </h2>
          </div>
          {filteredManuals.length > 0 ? (
            <div className="space-y-3">
              {filteredManuals.map((m, i) => (
                <ManualCard key={i} manual={m} />
              ))}
            </div>
          ) : (
            <p className="text-sm text-neutral-400 italic py-6">
              No hay manuales que coincidan con la búsqueda.
            </p>
          )}
        </section>

        {(dept as any).documents && (
          <section className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <FolderOpen size={18} className="text-neutral-900" />
              <h2 className="text-lg font-semibold text-neutral-900">
                Circulares y documentos vigentes
              </h2>
            </div>
            <div className="bg-white border border-neutral-200 rounded-lg divide-y divide-neutral-100">
              {(dept as any).documents.map((doc: any, i: number) => (
                <div
                  key={i}
                  className="flex items-center justify-between px-5 py-4"
                >
                  <div className="flex items-center gap-3">
                    <FileText
                      size={16}
                      className="text-amber-500 flex-shrink-0"
                    />
                    <span className="text-sm font-medium text-neutral-800">
                      {doc.name}
                    </span>
                  </div>
                  <span className="text-xs text-neutral-400 flex-shrink-0">
                    {doc.date}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-xs text-neutral-400 mt-3">
              Pídele a Claude que agregue una nueva circular o documento cada
              vez que se publique uno.
            </p>
          </section>
        )}

        <section>
          <div className="flex items-center gap-2 mb-4">
            <FileQuestion size={18} className="text-neutral-900" />
            <h2 className="text-lg font-semibold text-neutral-900">
              Preguntas frecuentes
            </h2>
          </div>
          {filteredFaqs.length > 0 ? (
            <div className="bg-white border border-neutral-200 rounded-lg px-5">
              {filteredFaqs.map((f, i) => (
                <FaqItem key={i} faq={f} />
              ))}
            </div>
          ) : (
            <p className="text-sm text-neutral-400 italic py-6">
              No hay preguntas frecuentes que coincidan con la búsqueda.
            </p>
          )}
        </section>
      </main>

      <footer className="border-t border-neutral-200 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-6 flex items-center justify-between flex-wrap gap-3">
          <span className="text-xs text-neutral-400">
            SAUYbook — Manual operativo interno
          </span>
          <span className="text-xs text-neutral-400 flex items-center gap-1">
            ¿Falta contenido? Pídele a Claude que lo agregue{' '}
            <ArrowRight size={12} />
          </span>
        </div>
      </footer>
    </div>
  );
}
