import { Link } from "react-router-dom";
import TechText from "../../effects/TechText";
import Aurora from "../../effects/Aurora";
import "./Hero.css";

const css = (name) =>
  getComputedStyle(document.documentElement).getPropertyValue(name).trim();

export default function Hero() {
  const accent = css("--accent");
  const accentLight = css("--accent-light");

  return (
    <section id="top" className="hero-wrap">
      <div className="hero-bg" aria-hidden="true">
        <Aurora
          colorStops={[accent, accentLight, accent]}
          amplitude={1}
          blend={0.6}
          speed={0.6}
          height={0.5}
          glow={0.6}
          brightness={0.7}
        />
      </div>

      <div className="hero">
        <h1 className="sr-only">Noemi Lüthi</h1>
        <div className="hero-name">
          <TechText
            text="Noemi Lüthi"
            fontWeight={700}
            fontSize={160}
            letterSpacing={-0.04}
            align="left"
            accentColor={accentLight}
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
        <Link to="/projects" className="btn">
          Meine Projekte
        </Link>
      </div>
    </section>
  );
}
