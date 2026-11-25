import { motorcycle as m } from "../../data/motorcycle";
import Gallery from "../ui/Gallery";

export default function Motorcycle() {
  return (
    <section id="motorcycle" className="section">
      <h2>Mein Motorrad</h2>
      <div className="bike">
        <img className="bike-image" src={m.image} alt={m.name} loading="lazy" />
        <div>
          <h3>{m.name}</h3>
          <p className="bike-tagline">{m.tagline}</p>
          <p>{m.text}</p>
          <dl className="about-facts bike-specs">
            {m.specs.map((s) => (
              <div key={s.label}>
                <dt>{s.label}</dt>
                <dd>{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      {m.photos.length >= 4 && (
        <>
          <h3 className="gallery-title">Fotos</h3>
          <Gallery items={m.photos} />
        </>
      )}
    </section>
  );
}
