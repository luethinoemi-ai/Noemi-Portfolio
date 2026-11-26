import { Link } from "react-router-dom";
import SocialLinks from "../ui/SocialLinks";
import { useLang } from "../../i18n/context";
import "./Footer.css";

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <strong>Noemi Lüthi</strong>
          <p>{t.hero.role}</p>
        </div>
        <SocialLinks />
        <nav className="footer-legal">
          <Link to="/impressum">{t.footer.imprint}</Link>
        </nav>
      </div>
      <p className="footer-copy">© {new Date().getFullYear()} Noemi Lüthi</p>
    </footer>
  );
}
