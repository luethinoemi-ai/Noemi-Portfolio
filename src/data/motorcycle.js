import { L } from "../i18n/context";

const base = `${import.meta.env.BASE_URL}images/motorcycle/`;

const detail = L("Detail oder Ort", "Detail or place", "Détail ou lieu");
const shots = [
  "bike-1.jpg",
  "bike-2.jpg",
  "bike-3.jpg",
  "bike-4.jpg",
  "bike-5.jpg",
  "bike-6.jpg",
];

export const motorcycle = {
  name: "Name deines Motorrads",
  tagline: L(
    "Ein Satz, der es beschreibt.",
    "One sentence that describes it.",
    "Une phrase qui la décrit.",
  ),
  text: L(
    "Hier 2 bis 3 Sätze: warum dieses Motorrad, was du daran magst, was du daran machst.",
    "Write 2 to 3 sentences here: why this bike, what you like about it, what you do with it.",
    "Écris ici 2 à 3 phrases : pourquoi cette moto, ce que tu aimes, ce que tu fais avec.",
  ),
  image: base + "bike-1.jpg",
  specs: [
    { label: L("Modell", "Model", "Modèle"), value: "..." },
    { label: L("Jahrgang", "Year", "Année"), value: "..." },
    { label: L("Hubraum", "Displacement", "Cylindrée"), value: "..." },
    { label: L("Leistung", "Power", "Puissance"), value: "..." },
  ],
  photos: shots.map((file, i) => ({
    src: base + file,
    title: L(`Titel ${i + 1}`, `Title ${i + 1}`, `Titre ${i + 1}`),
    subtitle: detail,
  })),
};
