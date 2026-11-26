const img = (file) => `${import.meta.env.BASE_URL}images/${file}`;

export const about = {
  photo: null, // später z. B. img('me.jpg'), Datei in public/images/ ablegen
  intro: [
    "Ich bin Noemi Jael Lüthi und mache eine Lehre als Applikationsentwicklerin. In meiner Freizeit fahre ich ",
    {
      word: "Motorrad",
      text: "Hier ein kurzer Text zu deinem Motorrad.",
      image: "",
    },
    " und ",
    {
      word: "zeichne",
      text: "Hier ein kurzer Text zu deinen Zeichnungen.",
      image: "",
    },
    ". Schreib hier mit eigenen Worten weiter: was dich an IT begeistert, woran du gerade arbeitest.",
  ],
  facts: [
    { label: "Name", value: "Noemi Jael Lüthi" },
    { label: "Ausbildung", value: "Applikationsentwicklerin EFZ" },
    { label: "Ort", value: "Schweiz" },
    { label: "Fokus", value: "Hier dein Schwerpunkt" },
  ],
  interests: [
    { title: "Motorrad", text: "Ein Satz dazu." },
    { title: "Zeichnen", text: "Ein Satz dazu." },
    { title: "Weiteres", text: "Ein Satz dazu." },
  ],
};

export { img };
