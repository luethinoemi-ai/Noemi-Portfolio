import { apprenticeship as a } from "../../data/progress";
import { useLang } from "../../i18n/context";

export default function Progress() {
  const { t, loc } = useLang();
  const p = t.progress;
  const percent = Math.round((a.current / a.total) * 100);

  return (
    <section className="section">
      <h2>{p.title}</h2>
      <p className="section-lead">{p.lead(loc(a.title), a.current, a.total)}</p>

      <div
        className="progress"
        role="progressbar"
        aria-label={p.aria}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow={percent}
      >
        <div className="progress-bar" style={{ width: `${percent}%` }} />
      </div>

      <div className="semester-grid">
        {a.semesters.map((s) => (
          <article key={s.number} className="card">
            <h3>
              {p.semester} {s.number}
            </h3>
            <ul className="modules">
              {s.modules.map((m) => (
                <li key={m.code + s.number}>
                  <span className="module-code">{m.code}</span>
                  <span>{loc(m.name)}</span>
                  <span className={`status status-${m.status}`}>
                    {p.status[m.status]}
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
