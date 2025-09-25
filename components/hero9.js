import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Hero9 = (props) => {
  return (
    <>
      <div className="hero9-header30 thq-section-padding">
        <img
          alt={props.image1Alt}
          src="https://res.cloudinary.com/dgjtdex6w/image/upload/v1758731809/centro-comercial-borroso-abstracto_tqf16i.jpg"
          className="hero9-image"
        />
        <div className="hero9-container"></div>
        <div className="hero9-max-width thq-section-max-width">
          <div className="hero9-content">
            <h1 className="hero9-text10 thq-heading-1">
              {props.heading1 ?? (
                <Fragment>
                  <span className="hero9-text14">
                    <span>A</span>
                    <span>umenta tus ventas</span>
                    <br></br>
                    <span>10% en 6 meses</span>
                    <br></br>
                    <span>con SAP Business One</span>
                  </span>
                </Fragment>
              )}
            </h1>
            <p className="hero9-text11 thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="hero9-text21">
                    Optimiza inventarios, automatiza procesos y toma decisiones
                    basadas en datos reales. Miles de empresas retail ya
                    transformaron su negocio.
                  </span>
                </Fragment>
              )}
            </p>
            <div className="hero9-actions">
              <button className="hero9-button thq-button-filled">
                <span className="hero9-text12 thq-body-small">
                  {props.action1 ?? (
                    <Fragment>
                      <span className="hero9-text26">Contact Us</span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
            <p className="hero9-text13 thq-body-large">
              {props.content11 ?? (
                <Fragment>
                  <span className="hero9-text22">
                    <span>100+ empresas retail confían en nosotros</span>
                    <br></br>
                    <span>+20 años de experiencia SAP</span>
                  </span>
                </Fragment>
              )}
            </p>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .hero9-header30 {
            gap: var(--dl-layout-space-twounits);
          }
          .hero9-image {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          .hero9-container {
            top: -2px;
            left: 1px;
            width: 100%;
            height: 597px;
            display: flex;
            position: absolute;
            align-items: center;
            flex-direction: column;
            background-color: rgba(8, 42, 73, 0.48);
          }
          .hero9-max-width {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            z-index: 1;
            align-items: center;
            flex-direction: column;
          }
          .hero9-content {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .hero9-text10 {
            width: 666px;
            text-align: center;
            font-family: 'Montserrat';
          }
          .hero9-text11 {
            width: 684px;
            text-align: center;
            font-family: 'Montserrat';
          }
          .hero9-actions {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .hero9-button {
            font-family: 'Montserrat';
            border-width: 0px;
            border-radius: var(--dl-layout-radius-radius4);
            background-color: var(--dl-color-primary-300);
          }
          .hero9-text12 {
            text-align: center;
          }
          .hero9-text13 {
            text-align: center;
            font-family: 'Montserrat';
          }
          .hero9-text14 {
            color: #ffffff;
            display: inline-block;
          }
          .hero9-text21 {
            color: #ffffff;
            display: inline-block;
          }
          .hero9-text22 {
            color: rgb(255, 255, 255);
            display: inline-block;
          }
          .hero9-text26 {
            display: inline-block;
            font-family: 'Montserrat';
          }
          @media (max-width: 991px) {
            .hero9-text10 {
              text-align: center;
            }
            .hero9-text11 {
              text-align: center;
            }
            .hero9-text13 {
              text-align: center;
            }
          }
          @media (max-width: 479px) {
            .hero9-text10 {
              width: auto;
            }
            .hero9-actions {
              width: 100%;
              flex-direction: column;
            }
            .hero9-button {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Hero9.defaultProps = {
  heading1: undefined,
  content1: undefined,
  content11: undefined,
  action1: undefined,
  image1Alt: 'Custom Solutions Image',
}

Hero9.propTypes = {
  heading1: PropTypes.element,
  content1: PropTypes.element,
  content11: PropTypes.element,
  action1: PropTypes.element,
  image1Alt: PropTypes.string,
}

export default Hero9
