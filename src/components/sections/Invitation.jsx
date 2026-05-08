import Reveal from "../Reveal.jsx";

export default function Invitation() {
  return (
    <section className="ep-section">
      <div className="ep-wrap ep-invite">
        <Reveal>
          <div className="ep-card">
            <span className="corner tl" />
            <span className="corner tr" />
            <span className="corner bl" />
            <span className="corner br" />

            <div className="ep-card-label">O encontro</div>
            <h3>
              Um dia dentro do
              <br />
              Facebook Brasil e Google Brasil
            </h3>

            <div className="ep-card-grid">
              <div>
                <span className="k">Data</span>
                <span className="v gold">11 de junho</span>
              </div>
              <div>
                <span className="k">Cidade</span>
                <span className="v">São Paulo</span>
              </div>
              <div>
                <span className="k">Ano</span>
                <span className="v">MMXXVI</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
