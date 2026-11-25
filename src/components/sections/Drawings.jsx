import { drawings } from "../../data/drawings";
import Gallery from "../ui/Gallery";

export default function Drawings() {
  return (
    <section id="drawings" className="section">
      <h2>Zeichnungen</h2>
      <p className="section-lead">
        Ziehen oder klicken, um durch die Auswahl zu blättern.
      </p>
      <Gallery items={drawings} />
    </section>
  );
}
