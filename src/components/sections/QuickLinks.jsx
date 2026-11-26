import { Link } from "react-router-dom";
import { useLang } from "../../i18n/context";

const items = [
  { to: "/about", key: "about" },
  { to: "/motorcycle", key: "motorcycle" },
  { to: "/drawings", key: "drawings" },
  { to: "/projects", key: "projects" },
];

export default function QuickLinks() {
  const { t } = useLang();
  return (
    <section className="section quick">
      <div className="project-grid">
        {items.map(({ to, key }) => (
          <Link key={to} to={to} className="card quick-card">
            <h3>{t.quick[key].title}</h3>
            <p>{t.quick[key].text}</p>
            <span>{t.quick.more}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
