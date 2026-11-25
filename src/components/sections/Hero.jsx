import TechText from "../../effects/TechText";
import "./Hero.css";
import { Link } from "react-router-dom";

const accent = getComputedStyle(document.documentElement)
  .getPropertyValue("--accent-light")
  .trim();

export default function Hero() {
  return (
    <section id="top" className="hero">
      <p className="hero-kicker">Hallo, ich bin</p>
      <h1 className="sr-only">Noemi Lüthi</h1>
      <Link to="/projects" className="btn">
        Meine Projekte
      </Link>
      <div className="hero-name">
        <TechText
          text="Noemi Lüthi"
          fontWeight={700}
          fontSize={160}
          letterSpacing={-0.04}
          align="left"
          accentColor={accent}
          reveal="letter"
          dashLength={4}
          dashGap={2}
          specks={15}
          intro="none"
          clickKick
          guides={false}
        />
      </div>
      <p className="hero-role">Lernende Applikationsentwicklerin</p>
      <a href="#projects" className="btn">
        Meine Projekte
      </a>
    </section>
  );
}
