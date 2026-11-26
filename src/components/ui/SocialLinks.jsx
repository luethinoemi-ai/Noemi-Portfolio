import {
  FaGithub,
  FaInstagram,
  FaTiktok,
  FaDiscord,
  FaEnvelope,
} from "react-icons/fa";
import { socials } from "../../data/links";
import { useLang } from "../../i18n/context";

const icons = {
  github: FaGithub,
  mail: FaEnvelope,
  instagram: FaInstagram,
  tiktok: FaTiktok,
  discord: FaDiscord,
};

export default function SocialLinks({ labels = false }) {
  const { loc } = useLang(); // <-- Das hier hat gefehlt!

  return (
    <ul className={`socials ${labels ? "socials-labeled" : ""}`}>
      {socials.map(({ name: rawName, href, icon }) => {
        const name = loc(rawName);
        const Icon = icons[icon];
        const external = !href.startsWith("mailto:");

        return (
          <li key={name}>
            <a
              href={href}
              aria-label={name}
              title={name}
              {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
            >
              {Icon && <Icon aria-hidden="true" />}
              {labels && <span>{name}</span>}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
