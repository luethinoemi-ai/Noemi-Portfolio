import { apprenticeship as a } from "../../data/progress";

const label = { done: "Abgeschlossen", active: "Läuft", planned: "Geplant" };

export default function Progress() {
  const percent = Math.round((a.current / a.total) * 100);

  return (
    <section className="section">
      <h2>Meine Lehre</h2>
      <p className="section-lead">
        {a.title} · aktuell Semester {a.current} von {a.total}
      </p>

      <div
        className="progress"
        role="progressbar"
        aria-label="Fortschritt der Lehre"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow={percent}
      >
        <div className="progress-bar" style={{ width: `${percent}%` }} />
      </div>

      <div className="semester-grid">
        {a.semesters.map((s) => (
          <article key={s.label} className="card">
            <h3>{s.label}</h3>
            <ul className="modules">
              {s.modules.map((m) => (
                <li key={m.code + m.name}>
                  <span className="module-code">{m.code}</span>
                  <span>{m.name}</span>
                  <span className={`status status-${m.status}`}>
                    {label[m.status]}
                  </span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
