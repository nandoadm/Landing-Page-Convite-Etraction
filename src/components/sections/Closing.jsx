import Reveal from "../Reveal.jsx";

export default function Closing() {
  return (
    <section className="ep-section">
      <div className="ep-wrap ep-closing">
        <Reveal>
          <h2>
            Isso não é mais um convite.
            <br />
            <em>É um acesso.</em>
          </h2>
        </Reveal>

        <Reveal delay={160}>
          <div className="ep-divider" />
        </Reveal>

        <Reveal delay={260}>
          <p className="sig">Você foi colocado nesse grupo por um motivo.</p>
        </Reveal>
      </div>
    </section>
  );
}
