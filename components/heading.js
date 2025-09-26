import React, { Fragment } from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Heading = (props) => {
  return (
    <>
      <header className={`heading-heading ${props.rootClassName} `}>
        <header data-thq="thq-navbar" className="heading-navbar-interactive">
          {/* LOGO (desktop) -> Home */}
          <Link href="/">
            <a aria-label="Ir a inicio">
              <img
                alt={props.imageAlt}
                src={props.imageSrc}
                className="heading-image"
              />
            </a>
          </Link>

          <div data-thq="thq-navbar-nav" className="heading-desktop-menu">
            <nav className="heading-links1">
              <span className="heading-nosotros">
                {props.text ?? (
                  <Fragment>
                    <a
                      href="https://#nosotros"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <span className="heading-text27">Nosotros</span>
                    </a>
                  </Fragment>
                )}
              </span>

              <span className="heading-soluciones">
                {props.text1 ?? (
                  <Fragment>
                    <a
                      href="https://#soluciones"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <span className="heading-text22">Soluciones</span>
                    </a>
                  </Fragment>
                )}
              </span>

              {/* Dropdown Industrias */}
              <div className="heading-container1" role="group" aria-label="Industrias">
                <span className="heading-industrias" tabIndex={0} aria-haspopup="true">
                  {props.text21 ?? (
                    <Fragment>
                      <span className="heading-text18">Industrias</span>
                    </Fragment>
                  )}
                </span>

                {/* Submenú */}
                <div className="heading-container2" aria-label="Submenú Industrias">
                  <span className="heading-retail">
                    {props.text2 ?? (
                      <Fragment>
                        <Link href="/industrias/retail">
                          <a className="heading-subitem">
                            <span className="heading-text26">Retail</span>
                          </a>
                        </Link>
                      </Fragment>
                    )}
                  </span>

                  <span className="heading-produccin">
                    {props.text22 ?? (
                      <Fragment>
                        <Link href="/industrias/produccion">
                          <a className="heading-subitem">
                            <span className="heading-text16">Producción</span>
                          </a>
                        </Link>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>

              <span className="heading-blog">
                {props.text3 ?? (
                  <Fragment>
                    <a
                      href="https://#blog"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <span className="heading-text17">Blog</span>
                    </a>
                  </Fragment>
                )}
              </span>
            </nav>

            <div className="heading-buttons1">
              <button className="heading-register button">
                <span>
                  {props.register ?? (
                    <Fragment>
                      <a
                        href="https://#contacto"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <span className="heading-text23">Contáctanos</span>
                      </a>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
          </div>

          <div data-thq="thq-burger-menu" className="heading-burger-menu">
            <svg viewBox="0 0 1024 1024" className="heading-icon10">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>

          {/* MOBILE MENU */}
          <div data-thq="thq-mobile-menu" className="heading-mobile-menu">
            <div className="heading-nav">
              <div className="heading-top">
                {/* LOGO (mobile) -> Home */}
                <Link href="/">
                  <a aria-label="Ir a inicio">
                    <img
                      alt={props.logoAlt}
                      src={props.logoSrc}
                      className="heading-logo"
                    />
                  </a>
                </Link>

                <div data-thq="thq-close-menu" className="heading-close-menu">
                  <svg viewBox="0 0 1024 1024" className="heading-icon12">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>

              <nav className="heading-links2">
                <span className="heading-text11">
                  {props.text4 ?? (
                    <Fragment>
                      <span className="heading-text19">Nosotros</span>
                    </Fragment>
                  )}
                </span>
                <span className="heading-text12">
                  {props.text5 ?? (
                    <Fragment>
                      <span className="heading-text24">Soluciones</span>
                    </Fragment>
                  )}
                </span>
                <span className="heading-text13">
                  {props.text6 ?? (
                    <Fragment>
                      <span className="heading-text25">Industrias</span>
                    </Fragment>
                  )}
                </span>
                <span className="heading-text14">
                  {props.text7 ?? (
                    <Fragment>
                      <span className="heading-text21">Blog</span>
                    </Fragment>
                  )}
                </span>
              </nav>

              <div className="heading-buttons2">
                <button className="heading-login button">
                  <span>
                    {props.login ?? (
                      <Fragment>
                        <span className="heading-text20">Contáctanos</span>
                      </Fragment>
                    )}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </header>
      </header>

      <style jsx>{`
        .heading-heading {
          width: 100%;
          display: flex;
          position: relative;
          align-items: center;
          flex-direction: column;
        }
        .heading-navbar-interactive {
          width: 100%;
          display: flex;
          align-items: center;
          padding-top: var(--dl-layout-space-twounits);
          padding-left: var(--dl-layout-space-threeunits);
          padding-right: var(--dl-layout-space-threeunits);
          padding-bottom: var(--dl-layout-space-twounits);
          justify-content: space-between;
        }
        .heading-image {
          width: var(--dl-layout-size-large);
          height: auto;
        }
        .heading-desktop-menu {
          flex: 1;
          display: flex;
          justify-content: space-between;
        }
        .heading-links1 {
          flex: 1;
          display: flex;
          align-items: center;
          flex-direction: row;
          justify-content: center;
          position: relative;
        }

        /* ---------- Dropdown Industrias (desktop) ---------- */
        .heading-container1 {
          position: relative;
          display: flex;
          align-items: flex-start;
          flex-direction: column;
        }
        .heading-industrias {
          font-family: 'Montserrat';
          margin-left: var(--dl-layout-space-twounits);
          cursor: default;
          padding: 4px 8px;
          border-radius: 6px;
        }
        .heading-container1:hover .heading-industrias {
          background-color: #dee8ff; /* Fondo azul claro al hover */
        }

        @media (min-width: 768px) {
          .heading-container2 {
            display: none;
            position: absolute;
            top: 100%; /* pegado justo debajo */
            left: 0;
            min-width: 200px;
            padding: 8px 0;
            background: #fff;
            border: 1px solid rgba(0,0,0,.08);
            border-radius: 10px;
            box-shadow: 0 8px 24px rgba(0,0,0,.12);
            flex-direction: column;
            z-index: 50;
          }
          .heading-container1:hover .heading-container2 {
            display: flex;
          }

          .heading-retail,
          .heading-produccin {
            margin-left: 0;
          }
          .heading-subitem {
            display: block;
            padding: 12px 16px;
            text-decoration: none;
          }
          .heading-subitem:hover {
            background: rgba(0,0,0,.04);
          }
          .heading-retail {
            margin-bottom: 4px; /* espacio entre items */
          }
        }

        .heading-blog { font-family: 'Montserrat'; margin-left: var(--dl-layout-space-twounits); }
        .heading-buttons1 {
          display: flex;
          align-items: center;
          flex-direction: row;
          justify-content: space-between;
        }
        .heading-register {
          color: #ffffff;
          font-family: 'Montserrat';
          background-color: #082a49;
        }
        .heading-burger-menu { display: none; }
        .heading-icon10 { width: var(--dl-layout-size-xsmall); height: var(--dl-layout-size-xsmall); }

        .heading-mobile-menu {
          top: 0px;
          left: 0px;
          width: 100%;
          height: 100vh;
          display: none;
          padding: 32px;
          z-index: 100;
          position: absolute;
          flex-direction: column;
          justify-content: space-between;
          background-color: #fff;
        }
        .heading-nav {
          display: flex;
          align-items: flex-start;
          flex-direction: column;
        }
        .heading-top {
          width: 100%;
          display: flex;
          align-items: center;
          margin-bottom: var(--dl-layout-space-threeunits);
          justify-content: space-between;
        }
        .heading-logo { height: 2rem; }
        .heading-close-menu { display: flex; align-items: center; justify-content: center; }
        .heading-icon12 { width: var(--dl-layout-size-xsmall); height: var(--dl-layout-size-xsmall); }
        .heading-links2 {
          flex: 0 0 auto;
          display: flex;
          align-self: flex-start;
          align-items: flex-start;
          flex-direction: column;
        }
        .heading-text11,
        .heading-text12,
        .heading-text13,
        .heading-text14 {
          margin-bottom: var(--dl-layout-space-unit);
        }
        .heading-buttons2 {
          width: 100%;
          display: flex;
          margin-top: var(--dl-layout-space-unit);
          align-items: center;
          flex-direction: row;
          justify-content: space-between;
        }
        .heading-login { margin-right: var(--dl-layout-space-twounits); }
      `}</style>
    </>
  )
}

Heading.defaultProps = {
  text22: undefined,
  text3: undefined,
  text21: undefined,
  text4: undefined,
  imageSrc:
    'https://res.cloudinary.com/dgjtdex6w/image/upload/v1757700413/inforum_mll3gz.png',
  login: undefined,
  logoAlt: 'image',
  text7: undefined,
  text1: undefined,
  register: undefined,
  rootClassName: '',
  text5: undefined,
  text6: undefined,
  text2: undefined,
  imageAlt: 'logo',
  text: undefined,
  logoSrc:
    'https://res.cloudinary.com/dgjtdex6w/image/upload/v1757700413/inforum_mll3gz.png',
}

Heading.propTypes = {
  text22: PropTypes.element,
  text3: PropTypes.element,
  text21: PropTypes.element,
  text4: PropTypes.element,
  imageSrc: PropTypes.string,
  login: PropTypes.element,
  logoAlt: PropTypes.string,
  text7: PropTypes.element,
  text1: PropTypes.element,
  register: PropTypes.element,
  rootClassName: PropTypes.string,
  text5: PropTypes.element,
  text6: PropTypes.element,
  text2: PropTypes.element,
  imageAlt: PropTypes.string,
  text: PropTypes.element,
  logoSrc: PropTypes.string,
}

export default Heading
