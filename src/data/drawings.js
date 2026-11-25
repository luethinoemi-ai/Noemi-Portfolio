const base = `${import.meta.env.BASE_URL}images/drawings/`;

const pieces = [
  { file: "zeichnung-1.jpg", title: "Titel 1", subtitle: "Technik" },
  { file: "zeichnung-2.jpg", title: "Titel 2", subtitle: "Technik" },
  { file: "zeichnung-3.jpg", title: "Titel 3", subtitle: "Technik" },
  { file: "zeichnung-4.jpg", title: "Titel 4", subtitle: "Technik" },
  { file: "zeichnung-5.jpg", title: "Titel 5", subtitle: "Technik" },
  { file: "zeichnung-6.jpg", title: "Titel 6", subtitle: "Technik" },
];

export const drawings = pieces.map((p) => ({
  src: base + p.file,
  alt: p.title,
  title: p.title,
  subtitle: p.subtitle,
}));
