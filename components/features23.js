import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Features23 = (props) => {
  return (
    <>
      <div
        className={`features23-layout349 thq-section-padding ${props.rootClassName} `}
      >
        <div className="features23-max-width thq-section-max-width">
          <div className="features23-container1">
            <h1 className="features23-heading thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="features23-text26">Soluciones</span>
                </Fragment>
              )}
            </h1>
          </div>

          <div className="features23-container2 thq-grid-3">
            {/* Card 1 */}
            <div className="features23-container3 thq-card">
              <h2 className="features23-text10 thq-heading-2">
                {props.feature1Title ?? (
                  <Fragment>
                    <span className="features23-text33">SAP Business One</span>
                  </Fragment>
                )}
              </h2>
              <span className="features23-text11 thq-body-small">
                {props.feature1Description ?? (
                  <Fragment>
                    <span className="features23-text28">
                      Customized web design solutions tailored to meet your
                      specific business needs.
                    </span>
                  </Fragment>
                )}
              </span>
              <button type="button" className="features23-button1 button">
                <span>
                  {props.button ?? (
                    <Fragment>
                      <span className="features23-text22">Conoce más</span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>

            {/* Card 2 */}
            <div className="features23-container4 thq-card">
              <h2 className="features23-text12 thq-heading-2">
                {props.feature1Title3 ?? (
                  <Fragment>
                    <span className="features23-text31">Infraestructura</span>
                  </Fragment>
                )}
              </h2>
              <span className="features23-text14 thq-body-small">
                {props.feature1Description3 ?? (
                  <Fragment>
                    <span className="features23-text25">
                      Customized web design solutions tailored to meet your
                      specific business needs.
                    </span>
                  </Fragment>
                )}
              </span>
              <button type="button" className="features23-button2 button">
                <span>
                  {props.button3 ?? (
                    <Fragment>
                      <span className="features23-text32">Conoce más</span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>

            {/* Card 3 */}
            <div className="features23-container5 thq-card">
              <h2 className="features23-text13 thq-heading-2">
                {props.feature1Title2 ?? (
                  <Fragment>
                    <span className="features23-text29">Desarrollo</span>
                  </Fragment>
                )}
              </h2>
              <span className="features23-text17 thq-body-small">
                {props.feature1Description2 ?? (
                  <Fragment>
                    <span className="features23-text23">
                      Customized web design solutions tailored to meet your
                      specific business needs.
                    </span>
                  </Fragment>
                )}
              </span>
              <button type="button" className="features23-button3 button">
                <span>
                  {props.button2 ?? (
                    <Fragment>
                      <span className="features23-text24">Conoce más</span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>

            {/* Card 4 */}
            <div className="features23-container6 thq-card">
              <h2 className="features23-text15 thq-heading-2">
                {props.feature1Title1 ?? (
                  <Fragment>
                    <span className="features23-text30">Mindset-U</span>
                  </Fragment>
                )}
              </h2>
              <span className="features23-text20 thq-body-small">
                {props.feature1Description1 ?? (
                  <Fragment>
                    <span className="features23-text34">
                      Customized web design solutions tailored to meet your
                      specific business needs.
                    </span>
                  </Fragment>
                )}
              </span>
              <button type="button" className="features23-button4 button">
                <span>
                  {props.button1 ?? (
                    <Fragment>
                      <span className="features23-text27">Conoce más</span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* ===== TIPOGRAFÍA GLOBAL DEL COMPONENTE ===== */
        .features23-layout349,
        .features23-layout349 * {
          font-family: 'Montserrat', sans-serif !important;
        }

        .features23-layout349 {
          gap: var(--dl-layout-space-twounits);
          display: flex;
          overflow: hidden;
          position: relative;
          align-items: flex-start;
          padding-top: var(--dl-layout-space-threeunits);
          flex-direction: row;
          justify-content: center;
          background-color: #e8efff;
        }
        .features23-max-width {
          gap: var(--dl-layout-space-threeunits);
          display: flex;
          align-items: center;
          flex-direction: column;
        }
        .features23-container1 {
          gap: var(--dl-layout-space-unit);
          display: flex;
          max-width: 600px;
          align-items: center;
          flex-direction: column;
        }
        .features23-heading {
          color: #082a49;
          font-style: normal;
          text-align: center;
          font-weight: 700;
        }

        .features23-container2 {
          place-items: center;
          grid-template-columns: 1fr 1fr;
        }

        .features23-container3,
        .features23-container4,
        .features23-container5,
        .features23-container6 {
          flex: 1;
          height: auto;
          display: flex;
          align-self: flex-start;
          box-shadow: 2px 2px 4px 0px #d4d4d4;
          align-items: flex-start;
          flex-direction: column;
          justify-content: center;
          background-color: var(--dl-color-theme-accent1);
        }

        /* TITULARES TARJETAS */
        .features23-text10,
        .features23-text12,
        .features23-text13,
        .features23-text15 {
          font-style: normal;
          font-weight: 700;
          color: #082a49;
        }

        /* DESCRIPCIONES */
        .features23-text11,
        .features23-text14,
        .features23-text17,
        .features23-text20 {
          text-align: left;
          font-weight: 400;
        }

        /* BOTONES (desktop sin cambios) */
        .features23-button1,
        .features23-button2,
        .features23-button3,
        .features23-button4 {
          color: #fff;
          margin-top: var(--dl-layout-space-oneandhalfunits);
          margin-bottom: 0;
          background-color: rgb(8, 42, 73);
          text-align: center; /* asegura texto centrado */
        }

        /* Textos internos */
        .features23-text22,
        .features23-text24,
        .features23-text27,
        .features23-text32 {
          display: inline-block;
          font-weight: 500;
        }
        .features23-text23,
        .features23-text25,
        .features23-text28,
        .features23-text34 {
          display: inline-block;
          font-weight: 400;
        }
        .features23-text26 { display: inline-block; font-weight: 800; }
        .features23-text29,
        .features23-text30,
        .features23-text31,
        .features23-text33 {
          color: #082a49;
          display: inline-block;
          font-weight: 700;
        }

        @media (max-width: 991px) {
          .features23-max-width { flex-direction: column; }
          .features23-container1 { margin-bottom: var(--dl-layout-space-threeunits); }
          .features23-button1,
          .features23-button2,
          .features23-button3,
          .features23-button4 {
            margin-bottom: var(--dl-layout-space-twounits);
          }
          .features23root-class-name { align-content: center; }
        }

        /* ===== Responsive (tablet/móvil): botón ancho y texto centrado ===== */
        @media (max-width: 767px) {
          .features23-container1 { margin-bottom: var(--dl-layout-space-oneandhalfunits); }
          .features23-container2 { display: flex; flex-direction: column; }
          .features23-container3,
          .features23-container4,
          .features23-container5,
          .features23-container6 { width: 100%; }

          .features23-button1,
          .features23-button2,
          .features23-button3,
          .features23-button4 {
            display: block;
            width: 100%;         /* ocupa todo el ancho de la tarjeta */
            max-width: 100%;
            text-align: center;  /* centra el texto del botón */
            margin-left: 0;
            margin-right: 0;
          }
        }

        @media (max-width: 479px) {
          .features23-max-width { gap: var(--dl-layout-space-oneandhalfunits); }
          .features23-container2 { display: flex; flex-direction: column; }
        }
      `}</style>
    </>
  )
}

Features23.defaultProps = {
  button: undefined,
  feature1Description2: undefined,
  button2: undefined,
  feature1Description3: undefined,
  rootClassName: '',
  heading1: undefined,
  button1: undefined,
  feature1Description: undefined,
  feature1Title2: undefined,
  feature1Title1: undefined,
  feature1Title3: undefined,
  button3: undefined,
  feature1Title: undefined,
  feature1Description1: undefined,
}

Features23.propTypes = {
  button: PropTypes.element,
  feature1Description2: PropTypes.element,
  button2: PropTypes.element,
  feature1Description3: PropTypes.element,
  rootClassName: PropTypes.string,
  heading1: PropTypes.element,
  button1: PropTypes.element,
  feature1Description: PropTypes.element,
  feature1Title2: PropTypes.element,
  feature1Title1: PropTypes.element,
  feature1Title3: PropTypes.element,
  button3: PropTypes.element,
  feature1Title: PropTypes.element,
  feature1Description1: PropTypes.element,
}

export default Features23
