import { L } from "../i18n/context";

const base = `${import.meta.env.BASE_URL}images/drawings/`;

const pieces = [
  {
    file: "zeichnung-1.jpg",
    title: L("Titel 1", "Title 1", "Titre 1"),
    subtitle: L("Technik", "Technique", "Technique"),
  },
  {
    file: "zeichnung-2.jpg",
    title: L("Titel 2", "Title 2", "Titre 2"),
    subtitle: L("Technik", "Technique", "Technique"),
  },
  {
    file: "zeichnung-3.jpg",
    title: L("Titel 3", "Title 3", "Titre 3"),
    subtitle: L("Technik", "Technique", "Technique"),
  },
  {
    file: "zeichnung-4.jpg",
    title: L("Titel 4", "Title 4", "Titre 4"),
    subtitle: L("Technik", "Technique", "Technique"),
  },
  {
    file: "zeichnung-5.jpg",
    title: L("Titel 5", "Title 5", "Titre 5"),
    subtitle: L("Technik", "Technique", "Technique"),
  },
  {
    file: "zeichnung-6.jpg",
    title: L("Titel 6", "Title 6", "Titre 6"),
    subtitle: L("Technik", "Technique", "Technique"),
  },
];

export const drawings = pieces.map((p) => ({
  src: base + p.file,
  title: p.title,
  subtitle: p.subtitle,
}));
