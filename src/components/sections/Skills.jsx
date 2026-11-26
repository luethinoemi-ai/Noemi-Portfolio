import { skills } from "../../data/skills";
import SkillTag from "../ui/SkillTag";
import { useLang } from "../../i18n/context";

export default function Skills() {
  const { t } = useLang();
  return (
    <section id="skills" className="section">
      <h2>{t.skills.title}</h2>
      <div className="skill-list">
        {skills.map((s) => (
          <SkillTag key={s} name={s} />
        ))}
      </div>
    </section>
  );
}
