import React from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Footer = (props) => {
  return (
    <>
      <div className={`footer-footer ${props.rootClassName} `}>
        <div className="footer-content">
          <div className="footer-information">
            <div className="footer-heading"></div>
          </div>
          <div className="footer-links">
            <div className="footer-column1">
              <img
                alt={props.imageAlt}
                src="https://res.cloudinary.com/dgjtdex6w/image/upload/v1758045656/gt_jkgk6f.png"
                className="footer-image1"
              />
              <span className="footer-link10">{props.link2}</span>
              <span className="footer-link11">{props.link3}</span>
            </div>
            <div className="footer-column2">
              <img
                alt={props.imageAlt3}
                src="https://res.cloudinary.com/dgjtdex6w/image/upload/v1758046369/hn_m6tilt.png"
                className="footer-image2"
              />
              <span className="footer-link12">{props.link23}</span>
              <span className="footer-link13">{props.link33}</span>
            </div>
            <div className="footer-column3">
              <img
                alt={props.imageAlt2}
                src="https://res.cloudinary.com/dgjtdex6w/image/upload/v1758046369/rd_xupxpa.png"
                className="footer-image3"
              />
              <span className="footer-link14">{props.link22}</span>
              <span className="footer-link15">{props.link32}</span>
            </div>
            <div className="footer-column4">
              <img
                alt={props.imageAlt23}
                src="https://res.cloudinary.com/dgjtdex6w/image/upload/v1758046369/sv_wndlrc.png"
                className="footer-image4"
              />
              <span className="footer-link16">{props.link223}</span>
              <span className="footer-link17">{props.link323}</span>
            </div>
            <div className="footer-column5">
              <img
                alt={props.imageAlt22}
                src="https://res.cloudinary.com/dgjtdex6w/image/upload/v1758046369/pn_pzyolk.png"
                className="footer-image5"
              />
              <span className="footer-link18">{props.link222}</span>
              <span className="footer-link19">{props.link322}</span>
            </div>
            <div className="footer-column6">
              <img
                alt={props.imageAlt21}
                src="https://res.cloudinary.com/dgjtdex6w/image/upload/v1758046369/ec_ccmx7b.png"
                className="footer-image6"
              />
              <span className="footer-link20">{props.link221}</span>
              <span className="footer-link21">{props.link321}</span>
            </div>
          </div>
        </div>
        <img
          alt={props.pastedImageAlt}
          src="https://res.cloudinary.com/dgjtdex6w/image/upload/v1757699208/logo_inforum_mf3xrl.png"
          className="footer-pasted-image"
        />
        <div>
          <div className="footer-container2">
            <Script
              html={`<style>
  .social-links {
    display: flex;
    gap: 28px;              /* más aire entre íconos */
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;        /* por si se reduce el ancho */
  }

  .social-links a {
    display: inline-flex;
    width: 28px;            /* caja uniforme */
    height: 28px;
    color: #f59f11;            /* TODOS los SVG blancos */
  }

  .social-links a svg {
    width: 100%;
    height: 100%;
    display: block;         /* elimina espacios raros */
    fill: currentColor;     /* hereda el color del padre */
  }

  .social-links a:hover {
    opacity: .85;
    transform: translateY(-1px);
    transition: transform .2s ease, opacity .2s ease;
  }
</style>

<div class="social-links">
  <!-- Facebook -->
  <a href="https://www.facebook.com/InforumGroup/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M22 12.07C22 6.48 17.52 2 11.93 2 6.35 2 1.86 6.48 1.86 12.07c0 5.02 3.66 9.18 8.44 9.93v-7.02H7.93v-2.91h2.37V9.41c0-2.34 1.39-3.64 3.52-3.64.71 0 1.62.13 1.62.13v2.24h-.91c-1 0-1.31.62-1.31 1.26v1.52h2.23l-.36 2.91h-1.87V22c4.78-.75 8.44-4.91 8.44-9.93Z"/>
    </svg>
  </a>

  <!-- LinkedIn -->
  <a href="https://gt.linkedin.com/company/inforumgroup" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.329-.027-3.036-1.85-3.036-1.853 0-2.136 1.447-2.136 2.942v5.663H9.354V9h3.413v1.561h.049c.476-.9 1.64-1.85 3.374-1.85 3.61 0 4.257 2.377 4.257 5.468v6.273zM5.337 7.433a2.062 2.062 0 1 1 0-4.123 2.062 2.062 0 0 1 0 4.123zM6.998 20.452H3.67V9h3.328v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.73v20.54C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.27V1.73C24 .774 23.2 0 22.225 0z"/>
    </svg>
  </a>

  <!-- Instagram -->
  <a href="https://www.instagram.com/inforum_group/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5Zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5Zm5.5-.88a1.13 1.13 0 1 1-2.26 0 1.13 1.13 0 0 1 2.26 0Z"/>
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
</div>
`}
            ></Script>
          </div>
        </div>
        <span className="footer-text">{props.text}</span>
      </div>
      <style jsx>
        {`
          .footer-footer {
            gap: var(--dl-layout-space-threeunits);
            color: white;
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
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            max-width: 265px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .footer-links {
            gap: var(--dl-layout-space-fiveunits);
            width: 1052px;
            display: grid;
            z-index: 15;
            place-items: center;
            grid-template-rows: 1fr 1fr;
            grid-template-columns: 1fr 1fr 1fr;
          }
          .footer-column1 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .footer-image1 {
            width: 30px;
            object-fit: cover;
          }
          .footer-link10 {
            color: rgb(196, 196, 196);
            cursor: pointer;
            font-size: 14px;
            transition: 0.3s;
            line-height: 21px;
          }
          .footer-link10:hover {
            color: rgba(196, 196, 196, 0.5);
          }
          .footer-link11 {
            color: rgb(196, 196, 196);
            cursor: pointer;
            font-size: 14px;
            margin-top: -15px;
            transition: 0.3s;
            line-height: 21px;
          }
          .footer-link11:hover {
            color: rgba(196, 196, 196, 0.5);
          }
          .footer-column2 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .footer-image2 {
            width: 30px;
            object-fit: cover;
          }
          .footer-link12 {
            color: rgb(196, 196, 196);
            cursor: pointer;
            font-size: 14px;
            transition: 0.3s;
            line-height: 21px;
          }
          .footer-link12:hover {
            color: rgba(196, 196, 196, 0.5);
          }
          .footer-link13 {
            color: rgb(196, 196, 196);
            cursor: pointer;
            font-size: 14px;
            margin-top: -15px;
            transition: 0.3s;
            line-height: 21px;
          }
          .footer-link13:hover {
            color: rgba(196, 196, 196, 0.5);
          }
          .footer-column3 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .footer-image3 {
            width: 30px;
            object-fit: cover;
          }
          .footer-link14 {
            color: rgb(196, 196, 196);
            cursor: pointer;
            font-size: 14px;
            transition: 0.3s;
            line-height: 21px;
          }
          .footer-link14:hover {
            color: rgba(196, 196, 196, 0.5);
          }
          .footer-link15 {
            color: rgb(196, 196, 196);
            cursor: pointer;
            font-size: 14px;
            margin-top: -15px;
            transition: 0.3s;
            line-height: 21px;
          }
          .footer-link15:hover {
            color: rgba(196, 196, 196, 0.5);
          }
          .footer-column4 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .footer-image4 {
            width: 30px;
            object-fit: cover;
          }
          .footer-link16 {
            color: rgb(196, 196, 196);
            cursor: pointer;
            font-size: 14px;
            transition: 0.3s;
            line-height: 21px;
          }
          .footer-link16:hover {
            color: rgba(196, 196, 196, 0.5);
          }
          .footer-link17 {
            color: rgb(196, 196, 196);
            cursor: pointer;
            font-size: 14px;
            margin-top: -15px;
            transition: 0.3s;
            line-height: 21px;
          }
          .footer-link17:hover {
            color: rgba(196, 196, 196, 0.5);
          }
          .footer-column5 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .footer-image5 {
            width: 30px;
            object-fit: cover;
          }
          .footer-link18 {
            color: rgb(196, 196, 196);
            cursor: pointer;
            font-size: 14px;
            transition: 0.3s;
            line-height: 21px;
          }
          .footer-link18:hover {
            color: rgba(196, 196, 196, 0.5);
          }
          .footer-link19 {
            color: rgb(196, 196, 196);
            cursor: pointer;
            font-size: 14px;
            margin-top: -15px;
            transition: 0.3s;
            line-height: 21px;
          }
          .footer-link19:hover {
            color: rgba(196, 196, 196, 0.5);
          }
          .footer-column6 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .footer-image6 {
            width: 30px;
            object-fit: cover;
          }
          .footer-link20 {
            color: rgb(196, 196, 196);
            cursor: pointer;
            font-size: 14px;
            transition: 0.3s;
            line-height: 21px;
          }
          .footer-link20:hover {
            color: rgba(196, 196, 196, 0.5);
          }
          .footer-link21 {
            color: rgb(196, 196, 196);
            cursor: pointer;
            font-size: 14px;
            margin-top: -15px;
            transition: 0.3s;
            line-height: 21px;
          }
          .footer-link21:hover {
            color: rgba(196, 196, 196, 0.5);
          }
          .footer-pasted-image {
            width: 150px;
          }
          .footer-container2 {
            display: contents;
          }
          .footer-text {
            color: rgb(196, 196, 196);
            width: 100%;
            font-size: 14px;
            max-width: 1200px;
            text-align: center;
            line-height: 21px;
          }
          .footerroot-class-name {
            background-color: #082a49;
          }

          @media (max-width: 991px) {
            .footer-footer {
              padding-top: var(--dl-layout-space-fourunits);
              padding-left: var(--dl-layout-space-threeunits);
              padding-right: var(--dl-layout-space-threeunits);
              padding-bottom: var(--dl-layout-space-fourunits);
            }
          }
          @media (max-width: 767px) {
            .footer-footer {
              gap: var(--dl-layout-space-twounits);
            }
            .footer-content {
              gap: var(--dl-layout-space-threeunits);
              flex-direction: column;
              justify-content: flex-start;
            }
            .footer-information {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .footer-heading {
              gap: var(--dl-layout-space-halfunit);
            }
            .footer-links {
              gap: var(--dl-layout-space-oneandhalfunits);
              width: 100%;
              flex-direction: column;
            }
            .footer-pasted-image {
              width: 100px;
            }
          }
          @media (max-width: 479px) {
            .footer-links {
              width: 100%;
              flex-direction: column;
            }
          }
        `}
      </style>
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
