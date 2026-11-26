import SocialLinks from "../ui/SocialLinks";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <h2>Kontakt</h2>
      <p className="section-lead">
        Du hast eine Frage oder möchtest zusammenarbeiten? Schreib mir, ich
        freue mich über jede Nachricht.
      </p>
      <SocialLinks labels />
    </section>
  );
}
