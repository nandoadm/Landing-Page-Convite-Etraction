import Reveal from "../Reveal.jsx";

export default function Hero({ onContinue }) {
  return (
    <section className="ep-hero" id="hero">
      <div className="ep-hero-inner">
        <Reveal>
          <span className="ep-eyebrow">Convite pessoal</span>
        </Reveal>

        <Reveal delay={120}>
          <h1>
            Nem todo mundo
            <br />
            vai entender
            <br />
            <em>essa mensagem.</em>
          </h1>
        </Reveal>

        <Reveal delay={240}>
          <p className="ep-hero-sub">Porque ela não é pra todo mundo.</p>
        </Reveal>

        <Reveal delay={320}>
          <div className="ep-hero-title">
            <h2>Você agora é Etraction Partner Premium.</h2>
          </div>
        </Reveal>

        <Reveal delay={360}>
          <div className="ep-hero-meta">
            <span>11 junho 2026</span>
            <span className="sep" />
            <span>São Paulo</span>
            <span className="sep" />
            <span>Meta · Google</span>
          </div>
        </Reveal>

        <Reveal delay={500}>
          <button className="ep-hero-cta" onClick={onContinue} type="button">
            Continuar
            <span className="arrow" />
          </button>
        </Reveal>
      </div>
    </section>
  );
}
