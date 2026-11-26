import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";
import { languages, useLang } from "../../i18n/context";
import { useTheme } from "../../theme/context";
import "./Navbar.css";

const routes = [
  { to: "/", key: "home" },
  { to: "/about", key: "about" },
  { to: "/motorcycle", key: "motorcycle" },
  { to: "/drawings", key: "drawings" },
  { to: "/projects", key: "projects" },
  { to: "/contact", key: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { lang, setLang, t } = useLang();
  const { theme, toggle } = useTheme();
  const close = () => setOpen(false);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const themeLabel = theme === "dark" ? t.nav.toLight : t.nav.toDark;

  return (
    <header className="navbar">
      <Link to="/" className="navbar-logo" onClick={close}>
        NL
      </Link>

      <div className="navbar-tools">
        <div className="lang" role="group" aria-label={t.nav.language}>
          {languages.map((code) => (
            <button
              key={code}
              type="button"
              className={`lang-btn ${code === lang ? "is-active" : ""}`}
              aria-pressed={code === lang}
              onClick={() => setLang(code)}
            >
              {code.toUpperCase()}
            </button>
          ))}
        </div>

        <button
          type="button"
          className="icon-btn"
          onClick={toggle}
          aria-label={themeLabel}
          title={themeLabel}
        >
          {theme === "dark" ? (
            <FaSun aria-hidden="true" />
          ) : (
            <FaMoon aria-hidden="true" />
          )}
        </button>

        <button
          type="button"
          className={`burger ${open ? "is-open" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
          aria-expanded={open}
          aria-controls="menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {open && <div className="menu-backdrop" onClick={close} />}

      <nav id="menu" className={`menu ${open ? "is-open" : ""}`}>
        <ul>
          {routes.map(({ to, key }) => (
            <li key={to}>
              <NavLink to={to} end={to === "/"} onClick={close}>
                {t.nav[key]}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
