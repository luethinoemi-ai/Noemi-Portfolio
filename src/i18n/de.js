export default {
  meta: { title: "Noemi Lüthi · Portfolio" },
  nav: {
    home: "Start",
    about: "Über mich",
    motorcycle: "Motorrad",
    drawings: "Zeichnungen",
    projects: "Projekte",
    contact: "Kontakt",
    openMenu: "Menü öffnen",
    closeMenu: "Menü schliessen",
    language: "Sprache",
    toLight: "Zum hellen Modus wechseln",
    toDark: "Zum dunklen Modus wechseln",
  },
  hero: {
    role: "Lernende Applikationsentwicklerin",
    cta: "Meine Projekte",
    phrases: [
      "Ich baue Apps und Webseiten.",
      "Ich zeichne und fahre Motorrad.",
      "Ich lerne jeden Tag etwas Neues.",
    ],
  },
  quick: {
    more: "Ansehen →",
    about: { title: "Über mich", text: "Wer ich bin und was mich antreibt." },
    motorcycle: {
      title: "Motorrad",
      text: "Meine Maschine und was ich daran mache.",
    },
    drawings: { title: "Zeichnungen", text: "Eine Auswahl meiner Arbeiten." },
    projects: { title: "Projekte", text: "Code, Apps und Schulprojekte." },
  },
  about: { title: "Über mich", subtitle: "Neben dem Code" },
  progress: {
    title: "Meine Lehre",
    lead: (title, n, total) => `${title} · aktuell Semester ${n} von ${total}`,
    aria: "Fortschritt der Lehre",
    semester: "Semester",
    status: { done: "Abgeschlossen", active: "Läuft", planned: "Geplant" },
  },
  skills: { title: "Skills" },
  motorcycle: { title: "Mein Motorrad", photos: "Fotos" },
  drawings: {
    title: "Zeichnungen",
    lead: "Ziehen oder klicken, um durch die Auswahl zu blättern.",
  },
  projects: { title: "Projekte" },
  contact: {
    title: "Kontakt",
    lead: "Du hast eine Frage oder möchtest zusammenarbeiten? Schreib mir, ich freue mich über jede Nachricht.",
  },
  footer: { imprint: "Impressum" },
  impressum: {
    title: "Impressum",
    responsibleTitle: "Verantwortlich für den Inhalt",
    place: "Ort, Schweiz",
    emailLabel: "E-Mail",
    disclaimerTitle: "Haftungsausschluss",
    disclaimer:
      "Die Inhalte dieser Seite wurden sorgfältig erstellt. Für Richtigkeit, Vollständigkeit und Aktualität kann jedoch keine Gewähr übernommen werden. Für Inhalte verlinkter externer Seiten sind ausschliesslich deren Betreiber verantwortlich.",
    privacyTitle: "Datenschutz",
    privacy:
      "Diese Seite verwendet keine Cookies, kein Tracking und keine Kontaktformulare. Sie wird über GitHub Pages bereitgestellt, dabei kann der Hosting-Anbieter technisch bedingt Zugriffsdaten (zum Beispiel die IP-Adresse) verarbeiten. Schriftarten werden lokal ausgeliefert. Die Auswahl von Sprache und Darstellung wird ausschliesslich lokal im Browser gespeichert.",
  },
};
