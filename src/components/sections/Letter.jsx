import Reveal from "../Reveal.jsx";

export default function Letter() {
  return (
    <section className="ep-section">
      <div className="ep-wrap ep-letter">
        <Reveal>
          <div className="ep-letter-title">Uma carta para você</div>
        </Reveal>
        <Reveal delay={120}>
          <p>Existe um momento em que o jogo muda.</p>
        </Reveal>
        <Reveal delay={240}>
          <p>E algumas mesas simplesmente não estão disponíveis para todos.</p>
        </Reveal>
        <Reveal delay={320}>
          <div className="dots">· · ·</div>
        </Reveal>
        <Reveal delay={400}>
          <p>A gente presta atenção nisso.</p>
        </Reveal>
        <Reveal delay={500}>
          <p>Entre muitos, poucos chegam nesse ponto.</p>
        </Reveal>
        <Reveal delay={680}>
          <div className="arrived">Você chegou.</div>
        </Reveal>
      </div>
    </section>
  );
}
