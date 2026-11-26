import { Link } from "react-router-dom";
import TechText from "../../effects/TechText";
import Aurora from "../../effects/Aurora";
import Typewriter from "../ui/Typewriter";
import { useLang } from "../../i18n/context";
import { useTheme } from "../../theme/context";
import "./Hero.css";

const css = (name) =>
  getComputedStyle(document.documentElement).getPropertyValue(name).trim();

export default function Hero() {
  const { lang, t } = useLang();
  const { theme } = useTheme();
  const accent = css("--accent");
  const accentLight = css("--accent-light");

  return (
    <section id="top" className="hero-wrap">
      <div className="hero-bg" aria-hidden="true">
        <Aurora
          colorStops={[accent, accentLight, accent]}
          lightMode={theme === "light"}
          amplitude={1}
          blend={0.6}
          speed={0.6}
          height={0.4}
          glow={0.4}
          brightness={0.45}
          opacity={0.7}
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
        <Typewriter key={lang} phrases={t.hero.phrases} />
        <p className="hero-role">{t.hero.role}</p>
        <Link to="/projects" className="btn">
          {t.hero.cta}
        </Link>
      </div>
    </section>
  );
}
