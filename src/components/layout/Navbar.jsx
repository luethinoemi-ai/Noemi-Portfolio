import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <a href="#top" className="navbar-logo">
        NL
      </a>
      <ul>
        <li>
          <a href="#about">Über mich</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projekte</a>
        </li>
        <li>
          <a href="#contact">Kontakt</a>
        </li>
      </ul>
    </nav>
  );
}
