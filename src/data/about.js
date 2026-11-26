import { L } from "../i18n/context";

const img = (file) => `${import.meta.env.BASE_URL}images/${file}`;

export const about = {
  photo: null, // später z. B. img('me.jpg')
  images: { motorcycle: "", drawing: "" }, // optionale Bilder für die Hover-Karten
  intro: {
    de: [
      "Ich bin Noemi Jael Lüthi und mache eine Lehre als Applikationsentwicklerin. In meiner Freizeit fahre ich ",
      {
        word: "Motorrad",
        text: "Hier ein kurzer Text zu deinem Motorrad.",
        ref: "motorcycle",
      },
      " und ",
      {
        word: "zeichne",
        text: "Hier ein kurzer Text zu deinen Zeichnungen.",
        ref: "drawing",
      },
      ". Schreib hier mit eigenen Worten weiter: was dich an IT begeistert, woran du gerade arbeitest.",
    ],
    en: [
      "I’m Noemi Jael Lüthi and I’m doing an apprenticeship as an application developer. In my free time I ride a ",
      {
        word: "motorcycle",
        text: "A short text about your motorcycle goes here.",
        ref: "motorcycle",
      },
      " and ",
      {
        word: "draw",
        text: "A short text about your drawings goes here.",
        ref: "drawing",
      },
      ". Continue in your own words: what excites you about IT, what you are working on right now.",
    ],
    fr: [
      "Je suis Noemi Jael Lüthi et je fais un apprentissage de développeuse d’applications. Pendant mon temps libre, je fais de la ",
      {
        word: "moto",
        text: "Un court texte sur ta moto ici.",
        ref: "motorcycle",
      },
      " et je ",
      {
        word: "dessine",
        text: "Un court texte sur tes dessins ici.",
        ref: "drawing",
      },
      ". Continue avec tes propres mots : ce qui te passionne dans l’informatique, sur quoi tu travailles en ce moment.",
    ],
  },
  facts: [
    { label: L("Name", "Name", "Nom"), value: "Noemi Jael Lüthi" },
    {
      label: L("Ausbildung", "Apprenticeship", "Formation"),
      value: L(
        "Applikationsentwicklerin EFZ",
        "Application developer (EFZ)",
        "Développeuse d’applications CFC",
      ),
    },
    {
      label: L("Ort", "Location", "Lieu"),
      value: L("Schweiz", "Switzerland", "Suisse"),
    },
    {
      label: L("Fokus", "Focus", "Spécialité"),
      value: L("Hier dein Schwerpunkt", "Your focus here", "Ton domaine ici"),
    },
  ],
  interests: [
    {
      title: L("Motorrad", "Motorcycle", "Moto"),
      text: L(
        "Ein Satz dazu.",
        "One sentence about it.",
        "Une phrase à ce sujet.",
      ),
    },
    {
      title: L("Zeichnen", "Drawing", "Dessin"),
      text: L(
        "Ein Satz dazu.",
        "One sentence about it.",
        "Une phrase à ce sujet.",
      ),
    },
    {
      title: L("Weiteres", "More", "Autres"),
      text: L(
        "Ein Satz dazu.",
        "One sentence about it.",
        "Une phrase à ce sujet.",
      ),
    },
  ],
};

export { img };
