import { Fragment } from "react";
import { about } from "../../data/about";
import Reveal from "../ui/Reveal";
import { useLang } from "../../i18n/context";

export default function About() {
  const { t, loc } = useLang();
  return (
    <section id="about" className="section">
      <h2>{t.about.title}</h2>

      <div className={`about-top ${about.photo ? "has-photo" : ""}`}>
        {about.photo && (
          <img className="about-photo" src={about.photo} alt="Noemi Lüthi" />
        )}
        <p className="about-intro">
          {loc(about.intro).map((part, i) =>
            typeof part === "string" ? (
              <Fragment key={i}>{part}</Fragment>
            ) : (
              <Reveal
                key={i}
                text={part.text}
                image={about.images[part.ref]}
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
          <div key={loc(f.label)}>
            <dt>{loc(f.label)}</dt>
            <dd>{loc(f.value)}</dd>
          </div>
        ))}
      </dl>

      <h3 className="about-subtitle">{t.about.subtitle}</h3>
      <div className="project-grid">
        {about.interests.map((i) => (
          <article key={loc(i.title)} className="card">
            <h3>{loc(i.title)}</h3>
            <p>{loc(i.text)}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
