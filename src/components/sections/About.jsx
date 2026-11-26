import { Fragment } from "react";
import { about } from "../../data/about";
import Reveal from "../ui/Reveal";

export default function About() {
  return (
    <section id="about" className="section">
      <h2>Über mich</h2>

      <div className={`about-top ${about.photo ? "has-photo" : ""}`}>
        {about.photo && (
          <img className="about-photo" src={about.photo} alt="Noemi Lüthi" />
        )}
        <p className="about-intro">
          {about.intro.map((part, i) =>
            typeof part === "string" ? (
              <Fragment key={i}>{part}</Fragment>
            ) : (
              <Reveal
                key={i}
                text={part.text}
                image={part.image}
                alt={part.word}
              >
                {part.word}
              </Reveal>
            ),
          )}
        </p>
      </div>

      <dl className="about-facts">
        {about.facts.map((f) => (
          <div key={f.label}>
            <dt>{f.label}</dt>
            <dd>{f.value}</dd>
          </div>
        ))}
      </dl>

      <h3 className="about-subtitle">Neben dem Code</h3>
      <div className="project-grid">
        {about.interests.map((i) => (
          <article key={i.title} className="card">
            <h3>{i.title}</h3>
            <p>{i.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
