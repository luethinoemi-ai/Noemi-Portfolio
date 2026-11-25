import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const links = [
  { to: "/", label: "Start" },
  { to: "/about", label: "Über mich" },
  { to: "/motorcycle", label: "Motorrad" },
  { to: "/drawings", label: "Zeichnungen" },
  { to: "/projects", label: "Projekte" },
  { to: "/contact", label: "Kontakt" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="navbar">
      <Link to="/" className="navbar-logo" onClick={close}>
        NL
      </Link>

      <button
        className={`burger ${open ? "is-open" : ""}`}
        onClick={() => setOpen(!open)}
        aria-label={open ? "Menü schliessen" : "Menü öffnen"}
        aria-expanded={open}
        aria-controls="menu"
      >
        <span />
        <span />
        <span />
      </button>

      {open && <div className="menu-backdrop" onClick={close} />}

      <nav id="menu" className={`menu ${open ? "is-open" : ""}`}>
        <ul>
          {links.map((l) => (
            <li key={l.to}>
              <NavLink to={l.to} end={l.to === "/"} onClick={close}>
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
