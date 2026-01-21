import { DEFAULT_LANG, LANGUAGES } from "./constants";

export const languages = LANGUAGES;

export const defaultLang = DEFAULT_LANG;

export const ui = {
  en: {
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.about": "About",
    "nav.research": "Research",
    "nav.achievements": "Achievements",
    "nav.publications": "Publications",
    "nav.patents": "Patents",
    "nav.team": "Team",
    "nav.activities": "Activities",
    "nav.join": "Contact",
    "nav.news": "News",
    "nav.search": "Search",

    "search.subtitle":
      "Search through our publications, news, and team members.",

    // Hero
    "hero.viewPubs": "View Publications",
    "hero.meetTeam": "Meet the Team",
    "hero.viewResearch": "Start My Audit",
    "hero.aboutMe": "View Case Studies",

    // Services section (home)
    "section.services": "Services",
    "section.servicesViewAll": "View all",

    // About page
    "about.title": "About Me",
    "about.bio1":
      "I specialize in Web Performance Optimization (WPO), helping businesses transform their website speed into measurable SEO improvements and revenue growth. With years of experience in Core Web Vitals, page speed optimization, and technical SEO, I provide actionable strategies that deliver real business results.",
    "about.bio2":
      "My approach combines deep technical expertise with business understanding, ensuring that performance improvements translate directly into better user experience, higher search rankings, and increased conversions.",
    "about.expertise": "Areas of Expertise",
    "about.cwv": "Core Web Vitals",
    "about.cwvDesc":
      "LCP, INP, CLS optimization for better user experience and SEO rankings.",
    "about.seo": "Technical SEO",
    "about.seoDesc":
      "Performance-focused SEO strategies that improve crawlability and indexing.",
    "about.audits": "Performance Audits",
    "about.auditsDesc":
      "Comprehensive analysis to identify bottlenecks and optimization opportunities.",
    "about.implementation": "Implementation",
    "about.implementationDesc":
      "Hands-on optimization of images, JavaScript, CSS, and server configurations.",
    "about.cta": "Let's Work Together",
    "about.ctaDesc": "Interested in improving your website's performance?",
    "about.ctaButton": "Get in Touch",

    "section.selectedPubs": "Selected Publications",
    "section.viewAll": "View all",
    "section.latestNews": "Latest News",

    "achievements.title": "Research Achievements",
    "achievements.subtitle":
      "A comprehensive collection of our academic publications, intellectual property, and collective honors.",
    "achievements.papers": "Published Papers",
    "achievements.books": "Published Books",
    "achievements.softwares": "Software Copyrights",
    "achievements.patents": "Invention Patents",
    "achievements.honors": "Group Honors",
    "achievements.noPapers": "No papers listed yet.",
    "achievements.noBooks": "No books listed yet.",
    "achievements.noSoftwares": "No software copyrights listed yet.",
    "achievements.noPatents": "No patents listed yet.",
    "achievements.noHonors": "No honors listed yet.",
    "achievements.developers": "Developers:",
    "achievements.inventors": "Inventors:",
    "achievements.regNumber": "Reg. Number:",
    "achievements.date": "Date:",

    "activities.title": "Team Activities",
    "activities.subtitle":
      "Seminars, academic talks, and team building events.",

    "research.subtitle":
      "Our lab explores the frontiers of artificial intelligence, with a focus on computer vision and machine learning.",
    "research.learnMore": "Learn More",
    "research.noAreas": "No research areas defined.",

    "join.title": "Join Us",
    "join.subtitle":
      "We are always looking for motivated students to join our team. If you are interested in our research areas, please contact us!",
    "join.phd": "PhD Students",
    "join.phdDesc":
      "We are looking for PhD students with strong mathematical background and coding skills.",
    "join.phdList1": "Strong Math Foundation",
    "join.phdList2": "Proficient in Python/C++",
    "join.phdList3": "Publication record is a plus",
    "join.master": "Master Students",
    "join.masterDesc":
      "Motivated master students who want to dive deep into research are welcome.",
    "join.masterList1": "Passion for research",
    "join.masterList2": "Good programming skills",
    "join.masterList3": "Commitment to projects",
    "join.undergrad": "Undergraduates",
    "join.undergradDesc":
      "Talented undergraduates can join us for research training and internship.",
    "join.undergradList1": "Curiosity driven",
    "join.undergradList2": "Fast learner",
    "join.undergradList3": "Team player",
    "join.howToApply": "How to Apply",
    "join.applicationText":
      'Please send your CV, transcripts, and a brief statement of research interests to our Principal Investigator. Make sure to include "[Application]" in your email subject.',
    "join.sendEmail": "Send Email",

    "news.title": "News & Updates",
    "news.noNews": "No news yet.",

    "team.title": "Our Team",
    "team.subtitle":
      "Meet the researchers and students behind our innovations.",
    "team.pi": "Principal Investigator",
    "team.faculty": "Faculty",
    "team.youth_researcher": "Postdoctoral Researchers",
    "team.support": "Research Support",
    "team.professor": "Professors",
    "team.teacher": "Faculty",
    "team.postdoc_researcher": "Postdoctoral Researchers",
    "team.postdoc": "Postdoctoral Researchers",
    "team.phd": "PhD Students",
    "team.master": "Master Students",
    "team.graduate": "Graduate Students",
    "team.undergrad": "Undergraduate Students",
    "team.alumni": "Alumni",
    "team.former": "Former Member",
    "team.noMembers": "No team members found.",

    "footer.rights": "All rights reserved.",
    "footer.powered": "Powered by",

    // Audit Modal
    "audit.title": "Start Your Performance Audit",
    "audit.name": "Full Name",
    "audit.email": "Corporate Email",
    "audit.email.error": "Please enter a valid email address",
    "audit.phone": "Phone Number",
    "audit.phone.error": "Please enter a valid phone number",
    "audit.url": "What's your website URL?",
    "audit.priority": "What's your #1 priority right now?",
    "audit.priority.seo": "Improve Google rankings (SEO)",
    "audit.priority.cro": "Increase sales/conversions (CRO)",
    "audit.priority.gsc": "Fix issues flagged by Google Search Console",
    "audit.priority.mobile": "Improve mobile user experience",
    "audit.tech": "What technology is your site built on?",
    "audit.tech.select": "Select an option",
    "audit.tech.other": "Custom Stack / Other",
    "audit.budget": "What's your approximate budget this quarter?",
    "audit.budget.select": "Select an option",
    "audit.budget.low": "Under $1,000 USD",
    "audit.budget.mid": "$1,000 - $3,000 USD",
    "audit.budget.high": "Over $5,000 USD",
    "audit.submit": "Submit Request",
    "audit.success.title": "Received!",
    "audit.success.message": "I'll manually analyze your URL within the next 24 hours.",
    "audit.success.cta": "While I prepare your diagnosis, would you like to schedule a brief 15-minute call to tell me more about your business goals?",
    "audit.success.button": "Schedule Call",
    "audit.success.close": "Close",
  },
  es: {
    "nav.home": "Inicio",
    "nav.services": "Servicios",
    "nav.about": "Sobre mí",
    "nav.research": "Investigación",
    "nav.achievements": "Logros",
    "nav.publications": "Publicaciones",
    "nav.patents": "Patentes",
    "nav.team": "Equipo",
    "nav.activities": "Actividades",
    "nav.join": "Contacto",
    "nav.news": "Noticias",
    "nav.search": "Buscar",

    "search.subtitle":
      "Busque en nuestras publicaciones, noticias y miembros del equipo.",

    // Hero
    "hero.title":
      "Avanzando en la investigación de visión por computadora y aprendizaje profundo.",
    "hero.subtitle": "Somos el laboratorio Scholar-Lite.",
    "hero.viewPubs": "Ver publicaciones",
    "hero.meetTeam": "Conoce al equipo",
    "hero.viewResearch": "Ver Investigación",
    "hero.aboutMe": "Sobre mí",

    // Services section (home)
    "section.services": "Servicios",
    "section.servicesViewAll": "Ver todos",

    // About page
    "about.title": "Sobre mí",
    "about.bio1":
      "Me especializo en Web Performance Optimization (WPO), ayudando a empresas a transformar la velocidad de su sitio web en mejoras medibles de SEO y crecimiento de ingresos. Con años de experiencia en Core Web Vitals, optimización de velocidad de página y SEO técnico, proporciono estrategias accionables que entregan resultados de negocio reales.",
    "about.bio2":
      "Mi enfoque combina experiencia técnica profunda con comprensión del negocio, asegurando que las mejoras de rendimiento se traduzcan directamente en mejor experiencia de usuario, rankings de búsqueda más altos y conversiones incrementadas.",
    "about.expertise": "Áreas de Expertise",
    "about.cwv": "Core Web Vitals",
    "about.cwvDesc":
      "Optimización de LCP, INP, CLS para mejor experiencia de usuario y rankings SEO.",
    "about.seo": "SEO Técnico",
    "about.seoDesc":
      "Estrategias SEO enfocadas en rendimiento que mejoran rastreabilidad e indexación.",
    "about.audits": "Auditorías de Rendimiento",
    "about.auditsDesc":
      "Análisis completo para identificar cuellos de botella y oportunidades de optimización.",
    "about.implementation": "Implementación",
    "about.implementationDesc":
      "Optimización práctica de imágenes, JavaScript, CSS y configuraciones de servidor.",
    "about.cta": "Trabajemos Juntos",
    "about.ctaDesc": "¿Interesado en mejorar el rendimiento de tu sitio web?",
    "about.ctaButton": "Contáctame",

    "section.selectedPubs": "Publicaciones seleccionadas",
    "section.viewAll": "Ver todo",
    "section.latestNews": "Últimas noticias",
    "achievements.title": "Logros de investigación",
    "achievements.subtitle":
      "Una colección completa de nuestras publicaciones académicas, propiedad intelectual y honores colectivos.",
    "achievements.papers": "Artículos publicados",
    "achievements.books": "Libros publicados",
    "achievements.softwares": "Derechos de autor de software",
    "achievements.patents": "Patentes de invención",
    "achievements.honors": "Honores grupales",
    "achievements.noPapers": "No hay artículos listados todavía.",
    "achievements.noBooks": "No hay libros listados todavía.",
    "achievements.noSoftwares":
      "No hay derechos de autor de software listados todavía.",
    "achievements.noPatents": "No hay patentes listadas todavía.",
    "achievements.noHonors": "No hay honores listados todavía.",
    "achievements.developers": "Desarrolladores:",
    "achievements.inventors": "Inventores:",
    "achievements.regNumber": "Número de registro:",
    "achievements.date": "Fecha:",
    "activities.title": "Actividades del equipo",
    "activities.subtitle":
      "Seminarios, charlas académicas y eventos de integración.",
    "research.subtitle":
      "Nuestro laboratorio explora las fronteras de la inteligencia artificial, con un enfoque en la visión por computadora y el aprendizaje automático.",
    "research.learnMore": "Aprender más",
    "research.noAreas": "No se han definido áreas de investigación.",
    "join.title": "Únete a nosotros",
    "join.subtitle":
      "Siempre estamos buscando estudiantes motivados para unirse a nuestro equipo. Si estás interesado en nuestras áreas de investigación, ¡contáctanos!",
    "join.phd": "Estudiantes de doctorado",
    "join.phdDesc":
      "Buscamos estudiantes de doctorado con sólidos antecedentes matemáticos y habilidades de codificación.",
    "join.phdList1": "Sólida base matemática",
    "join.phdList2": "Competente en Python/C++",
    "join.phdList3": "Historial de publicaciones es una ventaja",
    "join.master": "Estudiantes de maestría",
    "join.masterDesc":
      "Los estudiantes de maestría motivados que quieran profundizar en la investigación son bienvenidos.",
    "join.masterList1": "Pasión por la investigación",
    "join.masterList2": "Buenas habilidades de programación",
    "join.masterList3": "Compromiso con los proyectos",
    "join.undergrad": "Estudiantes de pregrado",
    "join.undergradDesc":
      "Los estudiantes de pregrado talentosos pueden unirse a nosotros para capacitación en investigación y pasantías.",
    "join.undergradList1": "Impulsado por la curiosidad",
    "join.undergradList2": "Aprendiz rápido",
    "join.undergradList3": "Trabajador en equipo",
    "join.howToApply": "Cómo aplicar",
    "join.applicationText":
      'Por favor, envíe su CV, expedientes académicos y una breve declaración de intereses de investigación a nuestro Investigador Principal. Asegúrese de incluir "[Solicitud]" en el asunto de su correo electrónico.',
    "join.sendEmail": "Enviar correo electrónico",
    "news.title": "Noticias y actualizaciones",
    "news.noNews": "Aún no hay noticias.",
    "team.title": "Nuestro equipo",
    "team.subtitle":
      "Conozca a los investigadores y estudiantes detrás de nuestras innovaciones.",
    "team.pi": "Investigador Principal",
    "team.faculty": "Facultad",
    "team.youth_researcher": "Investigadores postdoctorales",
    "team.support": "Apoyo a la investigación",
    "team.professor": "Profesores",
    "team.teacher": "Facultad",
    "team.postdoc_researcher": "Investigadores posdoctorales",
    "team.postdoc": "Investigadores posdoctorales",
    "team.phd": "Estudiante de doctorado",
    "team.master": "Estudiante de maestría",
    "team.graduate": "Estudiantes graduados",
    "team.undergrad": "Estudiantes de pregrado",
    "team.alumni": "Exalumnos",
    "team.former": "Ex miembro",
    "team.noMembers": "No se encontraron miembros del equipo.",
    "footer.rights": "Todos los derechos reservados.",
    "footer.powered": "Desarrollado por",

    // Audit Modal
    "audit.title": "Inicia tu Auditoría de Rendimiento",
    "audit.name": "Nombre Completo",
    "audit.email": "Email Corporativo",
    "audit.email.error": "Por favor, introduce un email válido",
    "audit.phone": "Número de Teléfono",
    "audit.phone.error": "Por favor, introduce un número de teléfono válido",
    "audit.url": "¿Cuál es la URL de tu sitio web?",
    "audit.priority": "¿Cuál es tu prioridad número uno en este momento?",
    "audit.priority.seo": "Mejorar mi posicionamiento en Google (SEO)",
    "audit.priority.cro": "Aumentar las ventas/conversiones (CRO)",
    "audit.priority.gsc": "Solucionar problemas detectados por Google Search Console",
    "audit.priority.mobile": "Mejorar la experiencia de usuario en móviles",
    "audit.tech": "¿En qué tecnología está construida tu web?",
    "audit.tech.select": "Selecciona una opción",
    "audit.tech.other": "Stack personalizado / Otro",
    "audit.budget": "¿Qué presupuesto aproximado tienes para optimización este trimestre?",
    "audit.budget.select": "Selecciona una opción",
    "audit.budget.low": "Menos de $1,000 USD",
    "audit.budget.mid": "$1,000 - $3,000 USD",
    "audit.budget.high": "Más de $5,000 USD",
    "audit.submit": "Enviar Solicitud",
    "audit.success.title": "¡Recibido!",
    "audit.success.message": "Analizaré tu URL manualmente en las próximas 24 horas.",
    "audit.success.cta": "Mientras preparo tu diagnóstico, ¿te gustaría agendar una breve llamada de 15 minutos para contarme más sobre tus objetivos de negocio?",
    "audit.success.button": "Agendar Llamada",
    "audit.success.close": "Cerrar",
  },
} as const;

export function getLangFromUrl(url: URL) {
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}
