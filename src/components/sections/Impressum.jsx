import { socials } from "../../data/links";
import { useLang } from "../../i18n/context";

const email = socials
  .find((s) => s.icon === "mail")
  ?.href.replace("mailto:", "");

export default function Impressum() {
  const { t } = useLang();
  const i = t.impressum;
  return (
    <section className="section legal">
      <h2>{i.title}</h2>

      <h3>{i.responsibleTitle}</h3>
      <p>
        Noemi Jael Lüthi
        <br />
        {i.place}
        <br />
        {i.emailLabel}: <a href={`mailto:${email}`}>{email}</a>
      </p>

      <h3>{i.disclaimerTitle}</h3>
      <p>{i.disclaimer}</p>

      <h3>{i.privacyTitle}</h3>
      <p>{i.privacy}</p>
    </section>
  );
}
