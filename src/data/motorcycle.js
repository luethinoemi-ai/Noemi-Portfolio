const base = `${import.meta.env.BASE_URL}images/motorcycle/`;

const shots = [
  { file: "bike-1.jpg", title: "Titel", subtitle: "Detail oder Ort" },
  { file: "bike-2.jpg", title: "Titel", subtitle: "Detail oder Ort" },
  { file: "bike-3.jpg", title: "Titel", subtitle: "Detail oder Ort" },
  { file: "bike-4.jpg", title: "Titel", subtitle: "Detail oder Ort" },
  { file: "bike-5.jpg", title: "Titel", subtitle: "Detail oder Ort" },
  { file: "bike-6.jpg", title: "Titel", subtitle: "Detail oder Ort" },
];

export const motorcycle = {
  name: "Name deines Motorrads",
  tagline: "Ein Satz, der es beschreibt.",
  text: "Hier 2 bis 3 Sätze: warum dieses Motorrad, was du daran magst, was du daran machst.",
  image: base + "bike-1.jpg",
  specs: [
    { label: "Modell", value: "..." },
    { label: "Jahrgang", value: "..." },
    { label: "Hubraum", value: "..." },
    { label: "Leistung", value: "..." },
  ],
  photos: shots.map((p) => ({
    src: base + p.file,
    alt: p.title,
    title: p.title,
    subtitle: p.subtitle,
  })),
};
