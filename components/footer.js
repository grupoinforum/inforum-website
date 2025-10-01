import React from 'react'
import PropTypes from 'prop-types'
import Script from 'dangerous-html/react'

const Footer = (props) => {
  return (
    <>
      <div className={`footer-footer ${props.rootClassName}`}>
        <div className="footer-content">
          <div className="footer-information">
            <div className="footer-heading"></div>
          </div>

          {/* ======= Cols ======= */}
          <div className="footer-links">
            <div className="footer-column1">
              <img
                alt={props.imageAlt}
                src="https://res.cloudinary.com/dgjtdex6w/image/upload/v1758045656/gt_jkgk6f.png"
                className="footer-image1"
              />
              <span className="footer-link">{props.link2}</span>
              <span className="footer-link">{props.link3}</span>
            </div>

            <div className="footer-column2">
              <img
                alt={props.imageAlt3}
                src="https://res.cloudinary.com/dgjtdex6w/image/upload/v1758046369/hn_m6tilt.png"
                className="footer-image2"
              />
              <span className="footer-link">{props.link23}</span>
              <span className="footer-link">{props.link33}</span>
            </div>

            <div className="footer-column3">
              <img
                alt={props.imageAlt2}
                src="https://res.cloudinary.com/dgjtdex6w/image/upload/v1758046369/rd_xupxpa.png"
                className="footer-image3"
              />
              <span className="footer-link">{props.link22}</span>
              <span className="footer-link">{props.link32}</span>
            </div>

            <div className="footer-column4">
              <img
                alt={props.imageAlt23}
                src="https://res.cloudinary.com/dgjtdex6w/image/upload/v1758046369/sv_wndlrc.png"
                className="footer-image4"
              />
              <span className="footer-link">{props.link223}</span>
              <span className="footer-link">{props.link323}</span>
            </div>

            <div className="footer-column5">
              <img
                alt={props.imageAlt22}
                src="https://res.cloudinary.com/dgjtdex6w/image/upload/v1758046369/pn_pzyolk.png"
                className="footer-image5"
              />
              <span className="footer-link">{props.link222}</span>
              <span className="footer-link">{props.link322}</span>
            </div>

            <div className="footer-column6">
              <img
                alt={props.imageAlt21}
                src="https://res.cloudinary.com/dgjtdex6w/image/upload/v1758046369/ec_ccmx7b.png"
                className="footer-image6"
              />
              <span className="footer-link">{props.link221}</span>
              <span className="footer-link">{props.link321}</span>
            </div>
          </div>
        </div>

        {/* Logo */}
        <img
          alt={props.pastedImageAlt}
          src="https://res.cloudinary.com/dgjtdex6w/image/upload/v1757699208/logo_inforum_mf3xrl.png"
          className="footer-logo"
        />

        {/* Redes sociales (SVG uniformes 24x24) */}
        <div className="footer-social">
          <Script
            html={`<style>
  .social-links {
    display: flex;
    gap: 28px;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
  .social-links a {
    display: inline-flex;
    width: 28px;
    height: 28px;
    color: #f4a624;
    transition: color .25s ease, transform .25s ease;
  }
  .social-links a:hover { color: #ffffff; transform: translateY(-1px); }
  .social-links a svg { width: 100%; height: 100%; display: block; fill: currentColor; }
</style>

<div class="social-links" aria-label="Redes sociales">
  <!-- Facebook -->
  <a href="https://www.facebook.com/InforumGroup/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 5 3.66 9.12 8.44 9.88v-6.99H8.1v-2.89h2.34V9.41c0-2.3 1.37-3.57 3.47-3.57.7 0 1.44.12 1.44.12v2.2h-.81c-.8 0-1.31.48-1.31 1.27v1.53h2.23l-.36 2.89h-1.87v6.99C18.34 21.12 22 17 22 12z"/>
    </svg>
  </a>

  <!-- LinkedIn -->
  <a href="https://gt.linkedin.com/company/inforumgroup" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.46-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.61 0 4.26 2.38 4.26 5.47v6.27zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM6.99 20.45H3.67V9h3.32v11.45z"/>
    </svg>
  </a>

  <!-- Instagram (trazo limpio) -->
  <a href="https://www.instagram.com/inforum_group/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" ry="5" fill="none" stroke="currentColor" stroke-width="1.8"/>
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="1.8"/>
      <circle cx="17.3" cy="6.7" r="1.15" fill="currentColor"/>
    </svg>
  </a>

  <!-- YouTube -->
  <a href="https://www.youtube.com/@Grupo_Inforum" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M23.5 6.2a2.98 2.98 0 0 0-2.1-2.1C19.67 3.5 12 3.5 12 3.5s-7.67 0-9.4.6A2.98 2.98 0 0 0 .5 6.2C0 7.93 0 12 0 12s0 4.07.5 5.8a2.98 2.98 0 0 0 2.1 2.1c1.73.6 9.4.6 9.4.6s7.67 0 9.4-.6a2.98 2.98 0 0 0 2.1-2.1C24 16.07 24 12 24 12s0-4.07-.5-5.8ZM9.75 15.57V8.43L15.82 12 9.75 15.57Z"/>
    </svg>
  </a>

  <!-- TikTok -->
  <a href="https://www.tiktok.com/@grupo_inforum" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12.04 2c1.21 0 2.37.36 3.34 1.04A6 6 0 0 0 18.96 4.2v3.57a9.53 9.53 0 0 1-3.54-.7v7.41c0 3.62-2.94 6.55-6.55 6.55S2.32 18.99 2.32 15.38c0-3.62 2.94-6.55 6.55-6.55.46 0 .91.05 1.34.15v3.66a3 3 0 0 0-1.34-.31c-1.66 0-3 1.35-3 3s1.34 3 3 3 3-1.35 3-3V2h3.21Z"/>
    </svg>
  </a>
</div>`}
          />
        </div>

        <span className="footer-text">{props.text}</span>
      </div>

      <style jsx>{`
        .footer-footer {
          gap: var(--dl-layout-space-threeunits);
          color: #ffffff;
          width: 100%;
          display: flex;
          position: relative;
          align-items: center;
          padding-top: var(--dl-layout-space-sixunits);
          padding-left: var(--dl-layout-space-fiveunits);
          padding-right: var(--dl-layout-space-fiveunits);
          flex-direction: column;
          padding-bottom: var(--dl-layout-space-sixunits);
          background-color: #082a49;
          font-family: 'Montserrat', system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
        }
        .footer-content {
          width: 100%;
          display: flex;
          max-width: 1200px;
          align-items: flex-start;
          flex-direction: row;
          justify-content: space-between;
        }
        .footer-information {
          gap: var(--dl-layout-space-unit);
          height: 100%;
          display: flex;
          align-items: center;
          flex-direction: column;
          justify-content: center;
        }
        .footer-heading {
          gap: var(--dl-layout-space-unit);
          flex: 0 0 auto;
          width: 100%;
          border: 2px dashed transparent;
          display: flex;
          max-width: 265px;
          align-items: flex-start;
          flex-direction: column;
          justify-content: flex-start;
        }

        /* GRID columnas */
        .footer-links {
          gap: var(--dl-layout-space-fiveunits);
          width: 1052px;
          display: grid;
          z-index: 15;
          place-items: start;
          grid-template-rows: 1fr 1fr;
          grid-template-columns: 1fr 1fr 1fr;
        }

        /* columnas */
        .footer-column1,
        .footer-column2,
        .footer-column3,
        .footer-column4,
        .footer-column5,
        .footer-column6 {
          gap: var(--dl-layout-space-unit);
          display: flex;
          align-items: flex-start;
          flex-direction: column;
          justify-content: center;
        }

        /* banderitas */
        .footer-image1,
        .footer-image2,
        .footer-image3,
        .footer-image4,
        .footer-image5,
        .footer-image6 {
          width: 30px;
          object-fit: cover;
        }

        /* texto de direcciones */
        .footer-link {
          color: rgba(255, 255, 255, 0.9);
          font-size: 14px;
          line-height: 21px;
          transition: opacity .25s ease;
        }
        .footer-link + .footer-link { margin-top: -15px; }
        .footer-link:hover { opacity: .7; }

        /* logo */
        .footer-logo { width: 150px; }

        /* bloque social */
        .footer-social { display: contents; }

        /* leyenda inferior */
        .footer-text {
          color: rgba(255, 255, 255, 0.9);
          width: 100%;
          font-size: 14px;
          max-width: 1200px;
          text-align: center;
          line-height: 21px;
        }

        .footerroot-class-name { background-color: #082a49; }

        @media (max-width: 991px) {
          .footer-footer {
            padding-top: var(--dl-layout-space-fourunits);
            padding-left: var(--dl-layout-space-threeunits);
            padding-right: var(--dl-layout-space-threeunits);
            padding-bottom: var(--dl-layout-space-fourunits);
          }
        }
        @media (max-width: 767px) {
          .footer-footer { gap: var(--dl-layout-space-twounits); }
          .footer-content {
            gap: var(--dl-layout-space-threeunits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .footer-links {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            flex-direction: column;
          }
          .footer-logo { width: 110px; }
        }
        @media (max-width: 479px) {
          .footer-links { width: 100%; flex-direction: column; }
        }
      `}</style>
    </>
  )
}

Footer.defaultProps = {
  imageAlt22: 'image',
  imageAlt: 'image',
  rootClassName: '',
  link221: '(+502) 2417-2400',
  imageAlt3: 'image',
  imageAlt2: 'image',
  link322: 'Static Website Builder',
  link32: 'Static Website Builder',
  link23: '(+502) 2417-2400',
  link222: '(+502) 2417-2400',
  imageAlt21: 'image',
  imageAlt23: 'image',
  link321: 'Static Website Builder',
  link22: '(+502) 2417-2400',
  link223: '(+502) 2417-2400',
  link323: 'Static Website Builder',
  link33: 'Static Website Builder',
  link3: 'Static Website Builder',
  pastedImageAlt: 'pastedImage',
  link2: '(+502) 2417-2400',
  text: '© 2025 Grupo Inforum. All Rights Reserved.',
}

Footer.propTypes = {
  imageAlt22: PropTypes.string,
  imageAlt: PropTypes.string,
  rootClassName: PropTypes.string,
  link221: PropTypes.string,
  imageAlt3: PropTypes.string,
  imageAlt2: PropTypes.string,
  link322: PropTypes.string,
  link32: PropTypes.string,
  link23: PropTypes.string,
  link222: PropTypes.string,
  imageAlt21: PropTypes.string,
  imageAlt23: PropTypes.string,
  link321: PropTypes.string,
  link22: PropTypes.string,
  link223: PropTypes.string,
  link323: PropTypes.string,
  link33: PropTypes.string,
  link3: PropTypes.string,
  pastedImageAlt: PropTypes.string,
  link2: PropTypes.string,
  text: PropTypes.string,
}

export default Footer
