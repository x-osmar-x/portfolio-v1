export type Lang = "es" | "en";

export type JobEntry = {
  datetime: string;
  dateLabel: string;
  locationLine: string;
  title: string;
  subtitle: string;
  body: string;
  skills?: string;
  isBreak?: boolean;
};

const jobsEs: JobEntry[] = [
  {
    datetime: "2025-02",
    dateLabel: "feb 2025 – actualidad",
    locationLine: "Estados Unidos · Remoto",
    title: "Desarrollador full stack",
    subtitle: "Freelancer · Tiempo completo",
    body: "Startup enfocada en soluciones con inteligencia artificial aplicadas a la creación y escalado de negocios.",
    skills: "MongoDB, React, entorno full stack moderno.",
  },
  {
    datetime: "2024-03",
    dateLabel: "mar 2024 – ene 2025",
    locationLine: "11 meses · EE. UU. · Remoto",
    title: "Desarrollador front-end",
    subtitle: "Path · Freelance",
    body: "Desarrollo web con componentes de inteligencia artificial.",
    skills: "Node.js, React, ecosistema front-end.",
  },
  {
    datetime: "2023-12",
    dateLabel: "dic 2023 – feb 2024",
    locationLine: "3 meses · Santa Cruz, Bolivia",
    title: "Pausa profesional",
    subtitle: "Bienestar personal",
    body: "Periodo dedicado al descanso y al equilibrio personal, con reducción de carga digital y priorización del entorno familiar.",
    isBreak: true,
  },
  {
    datetime: "2021-11",
    dateLabel: "nov 2021 – dic 2023",
    locationLine: "2 años 2 meses · Bolivia",
    title: "Consultor externo",
    subtitle: "Grupo COGNOS · Cuenta propia",
    body: "Soporte y evolución del ERP NOVUS y NOVUS NAC. Diseño e implementación de API entre el motor impositivo (facturación en línea) y NOVUS NAC; revisión de código y pruebas de integración (p. ej. Postman).",
  },
  {
    datetime: "2021-04",
    dateLabel: "abr 2021 – nov 2021",
    locationLine: "8 meses · Santa Cruz · Híbrido",
    title: "Consultor de desarrollo de software",
    subtitle: "SwissBytes Engineering GmbH · Freelance",
    body: "Soporte y mantenimiento del ERP WARA.",
    skills: "PostgreSQL, PL/SQL.",
  },
  {
    datetime: "2018-09",
    dateLabel: "sep 2018 – dic 2020",
    locationLine: "2 años 4 meses · Santa Cruz, Bolivia",
    title: "Desarrollador de software",
    subtitle: "Grupo COGNOS · Tiempo completo",
    body: "Soporte y mantenimiento de los ERP NOVUS y NOVUS NAC. Revisión de código y soporte operativo (incl. herramientas como Microsoft Excel).",
  },
  {
    datetime: "2017-07",
    dateLabel: "jul 2017 – dic 2017",
    locationLine: "6 meses · Santa Cruz, Bolivia",
    title: "Prácticas profesionales",
    subtitle: "Micrium, Soluciones Tecnológicas",
    body: "Maquetación de plantilla para contrato de bienes y servicios, coordinación con el cliente. Participación en proyecto de facturación local con certificación ante el ente tributario nacional.",
  },
];

const jobsEn: JobEntry[] = [
  {
    datetime: "2025-02",
    dateLabel: "Feb 2025 – present",
    locationLine: "United States · Remote",
    title: "Full stack developer",
    subtitle: "Freelancer · Full-time",
    body: "Startup focused on AI-driven solutions to build and scale businesses.",
    skills: "MongoDB, React, modern full stack.",
  },
  {
    datetime: "2024-03",
    dateLabel: "Mar 2024 – Jan 2025",
    locationLine: "11 months · US · Remote",
    title: "Front-end developer",
    subtitle: "Path · Freelance",
    body: "Web development with AI-assisted components.",
    skills: "Node.js, React, front-end ecosystem.",
  },
  {
    datetime: "2023-12",
    dateLabel: "Dec 2023 – Feb 2024",
    locationLine: "3 months · Santa Cruz, Bolivia",
    title: "Career break",
    subtitle: "Health & wellbeing",
    body: "Time dedicated to rest and personal balance, reducing screen time and prioritizing family.",
    isBreak: true,
  },
  {
    datetime: "2021-11",
    dateLabel: "Nov 2021 – Dec 2023",
    locationLine: "2 years 2 months · Bolivia",
    title: "External consultant",
    subtitle: "Grupo COGNOS · Self-employed",
    body: "Support and evolution of NOVUS and NOVUS NAC ERPs. API integration between the tax engine (online invoicing) and NOVUS NAC; code review and integration testing (e.g. Postman).",
  },
  {
    datetime: "2021-04",
    dateLabel: "Apr 2021 – Nov 2021",
    locationLine: "8 months · Santa Cruz · Hybrid",
    title: "Software development consultant",
    subtitle: "SwissBytes Engineering GmbH · Freelance",
    body: "Support and maintenance of the WARA ERP.",
    skills: "PostgreSQL, PL/SQL.",
  },
  {
    datetime: "2018-09",
    dateLabel: "Sep 2018 – Dec 2020",
    locationLine: "2 years 4 months · Santa Cruz, Bolivia",
    title: "Software developer",
    subtitle: "Grupo COGNOS · Full-time",
    body: "Support and maintenance of NOVUS and NOVUS NAC ERPs. Code review and operational support (incl. Microsoft Excel).",
  },
  {
    datetime: "2017-07",
    dateLabel: "Jul 2017 – Dec 2017",
    locationLine: "6 months · Santa Cruz, Bolivia",
    title: "Internship",
    subtitle: "Micrium, Soluciones Tecnológicas",
    body: "Template implementation for a goods & services contract, client-facing work. Local invoicing project certified with the national tax authority.",
  },
];

export const strings = {
  es: {
    meta: {
      title: "Osmar Barrientos · Desarrollador full stack",
      description:
        "Osmar Barrientos — desarrollador full stack. Aplicaciones web, APIs, ERPs e integraciones.",
    },
    nav: {
      home: "Inicio",
      experience: "Experiencia",
      contact: "Contacto",
      blog: "Blog — tactical × technical",
      openMenu: "Abrir menú",
      closeMenu: "Cerrar menú",
      navLabel: "Navegación",
      themeLight: "Tema claro",
      themeDark: "Tema oscuro",
      langEs: "Español",
      langEn: "English",
    },
    hero: {
      kicker: "Desarrollo de software",
      role: "Desarrollador full stack",
      bio: "Diseño e implementación de aplicaciones web, APIs e integraciones. Enfoque en código mantenible, rendimiento y alineación con objetivos de negocio.",
      github: "GitHub",
      linkedin: "LinkedIn",
      contactCta: "Contacto →",
    },
    experience: {
      kicker: "Experiencia",
      title: "Trayectoria profesional",
      intro:
        "Más de siete años en desarrollo y soporte de sistemas empresariales, con énfasis reciente en aplicaciones web, APIs e integración con plataformas de facturación y ERP.",
    },
    contact: {
      kicker: "Contacto",
      title: "¿En qué puedo ayudarte?",
      body: "Para propuestas profesionales o consultas, puedes enviarme un correo directamente o contactarme por LinkedIn. En GitHub encontrarás ejemplos de código y proyectos públicos.",
      linkedinBtn: "Perfil de LinkedIn",
      github: "GitHub",
      email: "Enviar correo",
    },
    jobs: jobsEs,
  },
  en: {
    meta: {
      title: "Osmar Barrientos · Full stack developer",
      description:
        "Osmar Barrientos — full stack developer. Web applications, APIs, ERPs and integrations.",
    },
    nav: {
      home: "Home",
      experience: "Experience",
      contact: "Contact",
      blog: "Blog — tactical × technical",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      navLabel: "Navigation",
      themeLight: "Light theme",
      themeDark: "Dark theme",
      langEs: "Español",
      langEn: "English",
    },
    hero: {
      kicker: "Software development",
      role: "Full stack developer",
      bio: "Design and delivery of web applications, APIs and integrations. Focus on maintainable code, performance and business alignment.",
      github: "GitHub",
      linkedin: "LinkedIn",
      contactCta: "Contact →",
    },
    experience: {
      kicker: "Experience",
      title: "Professional background",
      intro:
        "Seven+ years in enterprise software development and support, with recent emphasis on web apps, APIs and integration with invoicing and ERP platforms.",
    },
    contact: {
      kicker: "Contact",
      title: "How can I help?",
      body: "For professional inquiries, you can send me an email directly or reach out on LinkedIn. GitHub hosts public code samples and projects.",
      linkedinBtn: "LinkedIn profile",
      github: "GitHub",
      email: "Send email",
    },
    jobs: jobsEn,
  },
} as const;

export function getStrings(lang: Lang) {
  return strings[lang];
}

export function otherLangPath(lang: Lang): string {
  return lang === "es" ? "/en/" : "/";
}
