import Reveal from "../Reveal.jsx";

export default function Closing() {
  return (
    <section className="ep-section">
      <div className="ep-wrap ep-closing">
        <Reveal>
          <div className="ep-closing-question">
            Você acha que acaba por aqui?
          </div>
        </Reveal>

        <Reveal delay={160}>
          <h2>
            Em breve,
            <br />
            <em>ainda mais novidades.</em>
          </h2>
        </Reveal>

        <Reveal delay={260}>
          <div className="ep-divider" />
        </Reveal>

        <Reveal delay={360}>
          <div className="ep-closing-brand">Etraction Partner Premium</div>
          <p className="sig">está só começando.</p>
        </Reveal>
      </div>
    </section>
  );
}
