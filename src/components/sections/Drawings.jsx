import { drawings } from "../../data/drawings";
import Gallery from "../ui/Gallery";
import { useLang } from "../../i18n/context";

export default function Drawings() {
  const { t } = useLang();
  return (
    <section id="drawings" className="section">
      <h2>{t.drawings.title}</h2>
      <p className="section-lead">{t.drawings.lead}</p>
      <Gallery items={drawings} />
    </section>
  );
}
