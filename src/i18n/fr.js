export default {
  meta: { title: "Noemi Lüthi · Portfolio" },
  nav: {
    home: "Accueil",
    about: "À propos",
    motorcycle: "Moto",
    drawings: "Dessins",
    projects: "Projets",
    contact: "Contact",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    language: "Langue",
    toLight: "Passer au mode clair",
    toDark: "Passer au mode sombre",
  },
  hero: {
    role: "Apprentie développeuse d’applications",
    cta: "Mes projets",
    phrases: [
      "Je crée des applications et des sites web.",
      "Je dessine et je fais de la moto.",
      "J’apprends quelque chose de nouveau chaque jour.",
    ],
  },
  quick: {
    more: "Voir →",
    about: { title: "À propos", text: "Qui je suis et ce qui me motive." },
    motorcycle: { title: "Moto", text: "Ma machine et ce que j’en fais." },
    drawings: { title: "Dessins", text: "Une sélection de mes travaux." },
    projects: {
      title: "Projets",
      text: "Code, applications et projets scolaires.",
    },
  },
  about: { title: "À propos de moi", subtitle: "En dehors du code" },
  progress: {
    title: "Mon apprentissage",
    lead: (title, n, total) =>
      `${title} · actuellement semestre ${n} sur ${total}`,
    aria: "Progression de l’apprentissage",
    semester: "Semestre",
    status: { done: "Terminé", active: "En cours", planned: "Prévu" },
  },
  skills: { title: "Compétences" },
  motorcycle: { title: "Ma moto", photos: "Photos" },
  drawings: {
    title: "Dessins",
    lead: "Faire glisser ou cliquer pour parcourir la sélection.",
  },
  projects: { title: "Projets" },
  contact: {
    title: "Contact",
    lead: "Une question ou l’envie de collaborer ? Écris-moi, je me réjouis de chaque message.",
  },
  footer: { imprint: "Mentions légales" },
  impressum: {
    title: "Mentions légales",
    responsibleTitle: "Responsable du contenu",
    place: "Lieu, Suisse",
    emailLabel: "E-mail",
    disclaimerTitle: "Exclusion de responsabilité",
    disclaimer:
      "Les contenus de ce site ont été élaborés avec soin. Aucune garantie ne peut toutefois être donnée quant à leur exactitude, leur exhaustivité ou leur actualité. Les exploitants des sites externes vers lesquels renvoient des liens sont seuls responsables de leur contenu.",
    privacyTitle: "Protection des données",
    privacy:
      "Ce site n’utilise ni cookies, ni outils de suivi, ni formulaires de contact. Il est fourni via GitHub Pages ; pour des raisons techniques, l’hébergeur peut traiter des données d’accès (par exemple l’adresse IP). Les polices sont servies localement. Le choix de la langue et du mode d’affichage est enregistré uniquement dans le navigateur.",
  },
};
