import { projects } from "../../data/projects";
import ProjectCard from "../ui/ProjectCard";
import { useLang } from "../../i18n/context";

export default function Projects() {
  const { t, loc } = useLang();
  return (
    <section id="projects" className="section">
      <h2>{t.projects.title}</h2>
      <div className="project-grid">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} description={loc(p.description)} />
        ))}
      </div>
    </section>
  );
}
