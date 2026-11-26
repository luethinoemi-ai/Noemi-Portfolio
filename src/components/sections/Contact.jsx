import SocialLinks from "../ui/SocialLinks";
import { useLang } from "../../i18n/context";

export default function Contact() {
  const { t } = useLang();
  return (
    <section id="contact" className="section">
      <h2>{t.contact.title}</h2>
      <p className="section-lead">{t.contact.lead}</p>
      <SocialLinks labels />
    </section>
  );
}
