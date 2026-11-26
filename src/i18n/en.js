export default {
  meta: { title: "Noemi Lüthi · Portfolio" },
  nav: {
    home: "Home",
    about: "About me",
    motorcycle: "Motorcycle",
    drawings: "Drawings",
    projects: "Projects",
    contact: "Contact",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    language: "Language",
    toLight: "Switch to light mode",
    toDark: "Switch to dark mode",
  },
  hero: {
    role: "Apprentice application developer",
    cta: "My projects",
    phrases: [
      "I build apps and websites.",
      "I draw and ride motorcycles.",
      "I learn something new every day.",
    ],
  },
  quick: {
    more: "View →",
    about: { title: "About me", text: "Who I am and what drives me." },
    motorcycle: { title: "Motorcycle", text: "My bike and what I do with it." },
    drawings: { title: "Drawings", text: "A selection of my work." },
    projects: { title: "Projects", text: "Code, apps and school projects." },
  },
  about: { title: "About me", subtitle: "Beyond the code" },
  progress: {
    title: "My apprenticeship",
    lead: (title, n, total) => `${title} · currently semester ${n} of ${total}`,
    aria: "Apprenticeship progress",
    semester: "Semester",
    status: { done: "Completed", active: "In progress", planned: "Planned" },
  },
  skills: { title: "Skills" },
  motorcycle: { title: "My motorcycle", photos: "Photos" },
  drawings: {
    title: "Drawings",
    lead: "Drag or click to browse the selection.",
  },
  projects: { title: "Projects" },
  contact: {
    title: "Contact",
    lead: "Have a question or want to work together? Write to me, I look forward to every message.",
  },
  footer: { imprint: "Legal notice" },
  impressum: {
    title: "Legal notice",
    responsibleTitle: "Responsible for the content",
    place: "Place, Switzerland",
    emailLabel: "Email",
    disclaimerTitle: "Disclaimer",
    disclaimer:
      "The contents of this site have been created with care. However, no guarantee can be given for their accuracy, completeness or timeliness. The operators of linked external sites are solely responsible for their content.",
    privacyTitle: "Privacy",
    privacy:
      "This site does not use cookies, tracking or contact forms. It is provided via GitHub Pages; for technical reasons the hosting provider may process access data (for example the IP address). Fonts are served locally. The choice of language and display mode is stored only locally in the browser.",
  },
};
