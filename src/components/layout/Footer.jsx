import { Link } from "react-router-dom";
import SocialLinks from "../ui/SocialLinks";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <strong>Noemi Lüthi</strong>
          <p>Lernende Applikationsentwicklerin</p>
        </div>
        <SocialLinks />
        <nav className="footer-legal">
          <Link to="/impressum">Impressum</Link>
        </nav>
      </div>
      <p className="footer-copy">© {new Date().getFullYear()} Noemi Lüthi</p>
    </footer>
  );
}
