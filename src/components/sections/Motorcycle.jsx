import { motorcycle as m } from "../../data/motorcycle";
import Gallery from "../ui/Gallery";
import { useLang } from "../../i18n/context";

export default function Motorcycle() {
  const { t, loc } = useLang();
  return (
    <section id="motorcycle" className="section">
      <h2>{t.motorcycle.title}</h2>
      <div className="bike">
        <img className="bike-image" src={m.image} alt={m.name} loading="lazy" />
        <div>
          <h3>{m.name}</h3>
          <p className="bike-tagline">{loc(m.tagline)}</p>
          <p>{loc(m.text)}</p>
          <dl className="about-facts bike-specs">
            {m.specs.map((s) => (
              <div key={loc(s.label)}>
                <dt>{loc(s.label)}</dt>
                <dd>{loc(s.value)}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      {m.photos.length >= 4 && (
        <>
          <h3 className="gallery-title">{t.motorcycle.photos}</h3>
          <Gallery items={m.photos} />
        </>
      )}
    </section>
  );
}
