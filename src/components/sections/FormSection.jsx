import Reveal from "../Reveal.jsx";
import Field from "../form/Field.jsx";
import RadioGroup from "../form/RadioGroup.jsx";
import { FIELDS, GOOGLE_FORM_ACTION } from "../../config/googleForm.js";

export default function FormSection() {
  return (
    <section className="ep-section" id="ep-form-anchor">
      <div className="ep-wrap ep-form-wrap">
        <Reveal>
          <div className="ep-form">
            <div className="ep-form-head">
              <span className="ep-eyebrow">RSVP</span>
              <h3>Confirme sua presença.</h3>
              <p>Leva menos de um minuto.</p>
            </div>

            <form action={GOOGLE_FORM_ACTION} method="POST" target="_blank" acceptCharset="UTF-8">
              <input type="hidden" name="fvv" value="1" />
              <input type="hidden" name="pageHistory" value="0" />
              <input type="hidden" name="partialResponse" value="[]" />
              <input type="hidden" name="fbzx" value="-1" />

              <Field label="Nome completo">
                <input
                  type="text"
                  name={FIELDS.name}
                  className="ep-input"
                  placeholder="Seu nome"
                  autoComplete="name"
                  required
                />
              </Field>

              <Field label="Empresa">
                <input
                  type="text"
                  name={FIELDS.company}
                  className="ep-input"
                  placeholder="Nome da empresa"
                  autoComplete="organization"
                  required
                />
              </Field>

              <Field label="Participa da reunião no Google Brasil?">
                <RadioGroup name={FIELDS.google} />
              </Field>

              <Field label="Participa da reunião na Meta Brasil?">
                <RadioGroup name={FIELDS.meta} />
              </Field>

              <Field label="Participa do jantar reservado?">
                <RadioGroup name={FIELDS.dinner} />
              </Field>

              <button type="submit" className="ep-submit">
                Confirmar resposta
              </button>

              <div className="ep-form-foot">Convite intransferível · Seu lugar está reservado</div>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
