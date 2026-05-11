import Reveal from "../Reveal.jsx";

const GOOGLE_IMG =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV61uPpAYRVYh9zderaModm_U6QBF_BPi7LA&s";

const META_IMG =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPGLKRAyZk41LqJV0whR2usf89Ja5UZF4KTw&s";

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

        <Reveal delay={180}>
          <p className="ep-xp-intro">
            Você agora faz parte do ecossistema da Etraction — onde apenas
            clientes selecionados foram escolhidos. A Etraction te convida a
            passar um dia inteiro de conteúdo exclusivo, networking e acesso às
            novidades com o time de especialistas dentro do Meta e Google Brasil.
          </p>
        </Reveal>

        <div className="ep-xp-grid ep-xp-grid--3">
          <Reveal delay={260}>
            <div className="ep-xp-block ep-xp-block--img">
              <div
                className="ep-xp-block-bg"
                style={{ backgroundImage: `url('${GOOGLE_IMG}')` }}
              />
              <div className="ep-xp-block-content">
                <div className="num">— Manhã</div>
                <h4>Google Brasil</h4>
                <p>
                  Acesso presencial ao ambiente que molda o mercado de busca e
                  performance digital no Brasil.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={380}>
            <div className="ep-xp-block ep-xp-block--img">
              <div
                className="ep-xp-block-bg"
                style={{ backgroundImage: `url('${META_IMG}')` }}
              />
              <div className="ep-xp-block-content">
                <div className="num">— Tarde</div>
                <h4>Meta Brasil</h4>
                <p>
                  Conteúdo exclusivo com especialistas que definem o futuro das
                  mídias sociais e e-commerce.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={500}>
            <div className="ep-xp-block">
              <div className="ep-xp-block-content">
                <div className="num">— Noite</div>
                <h4>Jantar reservado</h4>
                <p>
                  Uma experiência gastronômica exclusiva com os clientes —
                  networking sobre negócios, performance e e-commerce.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
