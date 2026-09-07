export type Language = 'es' | 'en';

export const translations = {
  es: {
    hero: {
      tagline: "Ilustrador & Diseñador de Personajes | Anime & Manga Style",
      status: "Comisiones Abiertas",
      cta: "Pedir Comisión en VGen",
      viewCatalog: "Ver Catálogo",
    },
    gallery: {
      viewInCatalog: "🔍 Ver en Catálogo",
      itemTitle: "Ilustración",
      category: "Galería",
    },
    pricing: {
      title: "PRECIOS Y OPCIONES",
      mostRequested: "Más Solicitado",
      orderBtn: "Ordenar",
      tabs: {
        lineart: "Lineart",
        fullColor: "Full Color",
      },
      lineart: {
        icon: {
          title: "Icon / Headshot Lineart",
          price: "$10",
          description: "Líneas limpias y detalladas enfocadas en el rostro del personaje.",
          feat1: "✓ Alta resolución (300 DPI)",
          feat2: "✓ Fondo transparente o plano",
          feat3: "✓ Entrega rápida",
        },
        halfBody: {
          title: "Half Body Lineart",
          price: "$15",
          description: "Líneas definidas desde la cabeza hasta la cintura.",
          feat1: "✓ Alta resolución (300 DPI)",
          feat2: "✓ Poses y expresiones personalizadas",
          feat3: "✓ Fondo transparente o plano",
        },
        fullBody: {
          title: "Full Body Lineart",
          price: "$20",
          description: "Lineart completo de cuerpo entero con detalles finos.",
          feat1: "✓ Alta resolución (300 DPI)",
          feat2: "✓ Poses dinámicas y complejas",
          feat3: "✓ Fondo transparente o plano",
        },
      },
      fullColor: {
        icon: {
          title: "Icon / Headshot",
          price: "$20",
          description: "Enfoque desde el pecho hacia arriba a todo color.",
          feat1: "✓ Alta resolución (300 DPI)",
          feat2: "✓ Fondo simple o transparente",
          feat3: "✓ Uso personal",
        },
        halfBody: {
          title: "Half Body",
          price: "$30",
          description: "Enfoque desde los muslos/cintura hacia arriba.",
          feat1: "✓ Alta resolución (300 DPI)",
          feat2: "✓ Pose personalizada y detalles de ropa",
          feat3: "✓ Fondo simple o transparente",
        },
        fullBody: {
          title: "Full Body",
          price: "$40",
          description: "Cuerpo completo con diseño detallado.",
          feat1: "✓ Alta resolución (300 DPI)",
          feat2: "✓ Diseño completo de personaje",
          feat3: "✓ Fondo simple o transparente",
        },
      },
    },
    process: {
      title: "PROCESO CREATIVO",
      subtitle: "Pasa el cursor o desliza para ver la evolución de cada etapa",
      steps: {
        sketch: {
          tag: "Paso 1",
          title: "Boceto",
          description: "Construcción de la pose, anatomía y composición general.",
        },
        drawing: {
          tag: "Paso 2",
          title: "Lineart / Delineado",
          description: "Trazos limpios, refinamiento de detalles y formas definitivas.",
        },
        flatcolor: {
          tag: "Paso 3",
          title: "Color Base",
          description: "Paleta de colores iniciales y separación de elementos.",
        },
        fullcolor: {
          tag: "Paso 4",
          title: "Ilustración Final",
          description: "Luces, sombras, renderizado completo y efectos especiales.",
        },
      },
    },
    tos: {
      title: "Términos del Servicio (ToS)",
      deliveryTitle: "Tiempo de Entrega",
      deliveryDesc: "1 a 3 semanas dependiendo de la complejidad.",
      revisionsTitle: "Revisiones",
      revisionsDesc: "2 revisiones gratuitas durante la fase de boceto.",
      paymentsTitle: "Pagos",
      paymentsDesc: "Pago 100% por adelantado a través de VGen / PayPal.",
    },
  },
  en: {
    hero: {
      tagline: "Illustrator & Character Designer | Anime & Manga Style",
      status: "Commissions Open",
      cta: "Order Commission on VGen",
      viewCatalog: "View Catalog",
    },
    gallery: {
      viewInCatalog: "🔍 View in Catalog",
      itemTitle: "Illustration",
      category: "Gallery",
    },
    pricing: {
      title: "PRICING & OPTIONS",
      mostRequested: "Most Popular",
      orderBtn: "Order",
      tabs: {
        lineart: "Lineart",
        fullColor: "Full Color",
      },
      lineart: {
        icon: {
          title: "Icon / Headshot Lineart",
          price: "$10",
          description: "Clean, detailed lines focusing on the character's face.",
          feat1: "✓ High resolution (300 DPI)",
          feat2: "✓ Transparent or flat background",
          feat3: "✓ Fast delivery",
        },
        halfBody: {
          title: "Half Body Lineart",
          price: "$15",
          description: "Clean lineart from head to waist.",
          feat1: "✓ High resolution (300 DPI)",
          feat2: "✓ Custom poses and expressions",
          feat3: "✓ Transparent or flat background",
        },
        fullBody: {
          title: "Full Body Lineart",
          price: "$20",
          description: "Full body lineart with fine structural details.",
          feat1: "✓ High resolution (300 DPI)",
          feat2: "✓ Dynamic and complex poses",
          feat3: "✓ Transparent or flat background",
        },
      },
      fullColor: {
        icon: {
          title: "Icon / Headshot",
          price: "$20",
          description: "Full color focus from the chest up.",
          feat1: "✓ High resolution (300 DPI)",
          feat2: "✓ Simple or transparent background",
          feat3: "✓ Personal use",
        },
        halfBody: {
          title: "Half Body",
          price: "$30",
          description: "Full color focus from the thighs/waist up.",
          feat1: "✓ High resolution (300 DPI)",
          feat2: "✓ Custom pose and clothing details",
          feat3: "✓ Simple or transparent background",
        },
        fullBody: {
          title: "Full Body",
          price: "$40",
          description: "Full character design with maximum detail.",
          feat1: "✓ High resolution (300 DPI)",
          feat2: "✓ Complete character render",
          feat3: "✓ Simple or transparent background",
        },
      },
    },
    process: {
      title: "CREATIVE PROCESS",
      subtitle: "Hover or swipe to explore each stage of the artwork",
      steps: {
        sketch: {
          tag: "Step 1",
          title: "Sketch",
          description: "Pose construction, anatomy, and overall composition.",
        },
        drawing: {
          tag: "Step 2",
          title: "Lineart",
          description: "Clean linework, detail refinement, and final shapes.",
        },
        flatcolor: {
          tag: "Step 3",
          title: "Flat Colors",
          description: "Initial color palette and element separation.",
        },
        fullcolor: {
          tag: "Step 4",
          title: "Final Render",
          description: "Lighting, shadows, full rendering, and special effects.",
        },
      },
    },
    tos: {
      title: "Terms of Service (ToS)",
      deliveryTitle: "Turnaround Time",
      deliveryDesc: "1 to 3 weeks depending on complexity.",
      revisionsTitle: "Revisions",
      revisionsDesc: "2 free revisions during the sketch stage.",
      paymentsTitle: "Payments",
      paymentsDesc: "100% upfront payment via VGen / PayPal.",
    },
  },
};