import SkillTag from "./SkillTag";

export default function ProjectCard({ title, description, tech, github }) {
  return (
    <article className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="skill-list">
        {tech.map((t) => (
          <SkillTag key={t} name={t} />
        ))}
      </div>
      {github && (
        <a href={github} target="_blank" rel="noreferrer">
          GitHub →
        </a>
      )}
    </article>
  );
}
