import Reveal from "../Reveal.jsx";

export default function Experience() {
  return (
    <section className="ep-section">
      <div className="ep-wrap ep-xp">
        <Reveal>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <span className="ep-eyebrow">A experiência</span>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <h2>
            Não é sobre assistir.
            <br />
            <em>É sobre estar dentro.</em>
          </h2>
        </Reveal>

        <div className="ep-xp-grid">
          <Reveal delay={200}>
            <div className="ep-xp-block">
              <div className="num">— Dia</div>
              <h4>Meta + Google</h4>
              <p>Acesso presencial aos ambientes que influenciam o mercado digital.</p>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="ep-xp-block">
              <div className="num">— Noite</div>
              <h4>Jantar reservado</h4>
              <p>Uma mesa menor, conversas diretas e conexões entre players.</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
