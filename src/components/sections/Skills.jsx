import { skills } from "../../data/skills";
import SkillTag from "../ui/SkillTag";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <h2>Skills</h2>
      <div className="skill-list">
        {skills.map((s) => (
          <SkillTag key={s} name={s} />
        ))}
      </div>
    </section>
  );
}
