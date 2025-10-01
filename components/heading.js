import React, { Fragment, useState } from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'

const Heading = (props) => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false)

  return (
    <>
      <header className={`heading-heading ${props.rootClassName}`}>
        <header data-thq="thq-navbar" className="heading-navbar-interactive">
          {/* LOGO -> Home */}
          <Link href="/">
            <a aria-label="Ir a inicio">
              <img
                alt={props.imageAlt}
                src={props.imageSrc}
                className="heading-image"
              />
            </a>
          </Link>

          {/* DESKTOP NAV */}
          <div data-thq="thq-navbar-nav" className="heading-desktop-menu">
            <nav className="heading-links1">
              <span className="heading-item">
                <a href="/#nosotros" className="heading-link">Nosotros</a>
              </span>

              <span className="heading-item">
                <a href="/#soluciones" className="heading-link">Soluciones</a>
              </span>

              {/* INDUSTRIAS (Dropdown desktop) */}
              <div className="heading-container1" role="group" aria-label="Industrias">
                <span className="heading-industrias">Industrias</span>
                <div className="heading-container2" aria-label="Submenú Industrias">
                  <span className="heading-retail">
                    <Link href="/industrias/retail">
                      <a className="heading-subitem">Retail</a>
                    </Link>
                  </span>
                  <span className="heading-produccin">
                    <Link href="/industrias/produccion">
                      <a className="heading-subitem">Producción</a>
                    </Link>
                  </span>
                </div>
              </div>

              <span className="heading-item">
                <a href="/#blog" className="heading-link">Blog</a>
              </span>
            </nav>

            <div className="heading-buttons1">
              <button className="heading-register button">
                <span>
                  <a href="/#contacto" className="heading-cta">Contáctanos</a>
                </span>
              </button>
            </div>
          </div>

          {/* BURGER (Mobile) */}
          <button
            className="heading-burger-menu"
            aria-label="Abrir menú"
            onClick={() => setMobileOpen(true)}
          >
            <svg viewBox="0 0 1024 1024" className="heading-icon10">
              <path d="M128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </button>

          {/* MOBILE MENU (overlay) */}
          {mobileOpen && (
            <div className="heading-mobile-menu" role="dialog" aria-modal="true">
              <div className="heading-nav">
                <div className="heading-top">
                  <Link href="/">
                    <a aria-label="Ir a inicio" onClick={() => setMobileOpen(false)}>
                      <img
                        alt={props.logoAlt}
                        src={props.logoSrc}
                        className="heading-logo"
                      />
                    </a>
                  </Link>

                  <button
                    className="heading-close-menu"
                    aria-label="Cerrar menú"
                    onClick={() => setMobileOpen(false)}
                  >
                    <svg viewBox="0 0 1024 1024" className="heading-icon12">
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </button>
                </div>

                {/* Links mobile */}
                <nav className="heading-links2">
                  <a href="/#nosotros" className="mobile-link" onClick={() => setMobileOpen(false)}>
                    Nosotros
                  </a>
                  <a href="/#soluciones" className="mobile-link" onClick={() => setMobileOpen(false)}>
                    Soluciones
                  </a>

                  {/* Industrias (colapsable mobile) */}
                  <button
                    className="mobile-link mobile-collapse-trigger"
                    onClick={() => setMobileIndustriesOpen(v => !v)}
                    aria-expanded={mobileIndustriesOpen}
                  >
                    Industrias
                    <span className={`chev ${mobileIndustriesOpen ? 'open' : ''}`}>▾</span>
                  </button>
                  {mobileIndustriesOpen && (
                    <div className="mobile-submenu">
                      <Link href="/industrias/retail">
                        <a className="mobile-subitem" onClick={() => setMobileOpen(false)}>
                          Retail
                        </a>
                      </Link>
                      <Link href="/industrias/produccion">
                        <a className="mobile-subitem" onClick={() => setMobileOpen(false)}>
                          Producción
                        </a>
                      </Link>
                    </div>
                  )}

                  <a href="/#blog" className="mobile-link" onClick={() => setMobileOpen(false)}>
                    Blog
                  </a>
                </nav>

                <a href="/#contacto" className="mobile-cta" onClick={() => setMobileOpen(false)}>
                  Contáctanos
                </a>
              </div>
            </div>
          )}
        </header>
      </header>

      <style jsx>{`
        .heading-heading {
          width: 100%;
          display: flex;
          position: fixed; /* fijo arriba */
          top: 0;
          left: 0;
          z-index: 9999; /* encima de todo */
          background: #fff;
          box-shadow: 0 2px 6px rgba(0,0,0,.08);
          align-items: center;
          flex-direction: column;
        }
        .heading-navbar-interactive {
          width: 100%;
          display: flex;
          align-items: center;
          padding: var(--dl-layout-space-twounits) var(--dl-layout-space-threeunits);
          justify-content: space-between;
        }
        .heading-image { width: var(--dl-layout-size-large); height: auto; }

        /* ===== Desktop nav ===== */
        .heading-desktop-menu {
          flex: 1;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .heading-links1 {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: var(--dl-layout-space-twounits);
          font-family: 'Montserrat';
        }
        .heading-item { display: inline-flex; }
        .heading-link, .heading-industrias {
          text-decoration: none;
          color: inherit;
          padding: 6px 12px;
          border-radius: 6px;
          cursor: pointer;
        }
        .heading-link:hover,
        .heading-industrias:hover {
          background: #dee8ff;
        }

        /* ===== Dropdown Industrias (desktop) ===== */
        .heading-container1 {
          position: relative;
          display: flex;
          flex-direction: column;
          user-select: none;
        }
        .heading-container1:hover .heading-industrias {
          background: #dee8ff;
        }
        .heading-container2 {
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          min-width: 220px;
          background: #fff;
          border: 1px solid rgba(0,0,0,.08);
          border-radius: 10px;
          box-shadow: 0 8px 24px rgba(0,0,0,.12);
          flex-direction: column;
          z-index: 50;
          text-align: center;
          font-family: 'Montserrat';
          padding: 8px 0;
        }
        .heading-container1:hover .heading-container2 { display: flex; }
        .heading-subitem {
          display: block;
          padding: 12px 16px;
          text-decoration: none;
          color: inherit;
          border-radius: 6px;
          margin: 2px 8px;
        }
        .heading-subitem:hover { background: #dee8ff; }
        .heading-retail { margin-bottom: 8px; }
        .heading-produccin { margin-top: 8px; }

        .heading-buttons1 { display: flex; align-items: center; }
        .heading-register {
          color: #fff;
          font-family: 'Montserrat';
          background-color: #082a49;
          border-radius: 8px;
          padding: 10px 16px;
        }
        .heading-cta { color: #fff; text-decoration: none; }

        /* ===== Burger button (hidden on desktop) ===== */
        .heading-burger-menu {
          display: none;
          background: transparent;
          border: 0;
          padding: 8px;
          border-radius: 8px;
        }
        .heading-icon10 { width: 24px; height: 24px; }

        /* ===== Mobile overlay ===== */
        .heading-mobile-menu {
          position: fixed;
          inset: 0;
          background: #ffffff;
          z-index: 10000;
          display: flex;
          padding: 24px;
        }
        .heading-nav {
          display: flex;
          flex-direction: column;
          width: 100%;
        }
        .heading-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
        }
        .heading-logo { height: 32px; }
        .heading-close-menu {
          background: transparent;
          border: 0;
          padding: 6px;
          border-radius: 8px;
        }
        .heading-icon12 { width: 22px; height: 22px; }

        .heading-links2 {
          display: flex;
          flex-direction: column;
          font-family: 'Montserrat';
          gap: 8px;
          margin-top: 8px;
        }
        .mobile-link {
          text-decoration: none;
          color: inherit;
          padding: 12px 14px;
          border-radius: 8px;
          background: #f7f8fa;
        }
        .mobile-link:hover { background: #dee8ff; }
        .mobile-collapse-trigger {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border: 0;
          background: #f7f8fa;
          cursor: pointer;
          font: inherit;
        }
        .chev { transition: transform .2s ease; }
        .chev.open { transform: rotate(180deg); }

        .mobile-submenu {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin: 6px 0 12px 0;
          padding-left: 6px;
        }
        .mobile-subitem {
          text-decoration: none;
          color: inherit;
          padding: 10px 12px;
          border-radius: 6px;
          background: #f7f8fa;
          text-align: left;
        }
        .mobile-subitem:hover { background: #dee8ff; }

        .mobile-cta {
          margin-top: 16px;
          text-decoration: none;
          display: inline-block;
          background: #082a49;
          color: #fff;
          padding: 12px 16px;
          border-radius: 10px;
          text-align: center;
          font-family: 'Montserrat';
        }

        /* ===== Breakpoints ===== */
        @media (max-width: 767px) {
          .heading-desktop-menu { display: none; }
          .heading-burger-menu { display: inline-flex; }
          .heading-navbar-interactive {
            padding: var(--dl-layout-space-unit) var(--dl-layout-space-twounits);
          }
          .heading-image { width: 160px; }
        }
      `}</style>
    </>
  )
}

Heading.defaultProps = {
  imageSrc: 'https://res.cloudinary.com/dgjtdex6w/image/upload/v1757700413/inforum_mll3gz.png',
  imageAlt: 'logo',
  logoAlt: 'image',
  logoSrc: 'https://res.cloudinary.com/dgjtdex6w/image/upload/v1757700413/inforum_mll3gz.png',
  rootClassName: ''
}

Heading.propTypes = {
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  logoAlt: PropTypes.string,
  logoSrc: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Heading
