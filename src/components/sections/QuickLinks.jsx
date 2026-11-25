import { Link } from "react-router-dom";

const items = [
  {
    to: "/about",
    title: "Über mich",
    text: "Wer ich bin und was mich antreibt.",
  },
  {
    to: "/motorcycle",
    title: "Motorrad",
    text: "Meine Maschine und was ich daran mache.",
  },
  {
    to: "/drawings",
    title: "Zeichnungen",
    text: "Eine Auswahl meiner Arbeiten.",
  },
  { to: "/projects", title: "Projekte", text: "Code, Apps und Schulprojekte." },
];

export default function QuickLinks() {
  return (
    <section className="section quick">
      <div className="project-grid">
        {items.map((i) => (
          <Link key={i.to} to={i.to} className="card quick-card">
            <h3>{i.title}</h3>
            <p>{i.text}</p>
            <span>Ansehen →</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
