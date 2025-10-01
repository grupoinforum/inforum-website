import React, { Fragment } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Heading from '../components/heading'
import Features23 from '../components/features23'
import Footer from '../components/footer'

const Home = (props) => {
  return (
    <>
      <div className="home-container10">
        <Head>
          <title>Finbest</title>
          <meta name="description" content="Description of the website" />
          <meta property="og:title" content="Finbest" />
          <meta property="og:description" content="Description of the website" />

          {/* Fuente para el CONTENIDO del Home (header/footer NO se tocan) */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap"
            rel="stylesheet"
          />
        </Head>

        {/* Header (no modificado) */}
        <Heading
          text={
            <Fragment>
              <a
                href="https://#nosotros"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link1"
              >
                Nosotros
              </a>
            </Fragment>
          }
          login={
            <Fragment>
              <span className="home-text10">Contáctanos</span>
            </Fragment>
          }
          text1={
            <Fragment>
              <a
                href="https://#soluciones"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link2"
              >
                Soluciones
              </a>
            </Fragment>
          }
          text2={
            <Fragment>
              <Link href="/industrias/retail">
                <a className="home-link3">Retail</a>
              </Link>
            </Fragment>
          }
          text3={
            <Fragment>
              <a
                href="https://#blog"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link4"
              >
                Blog
              </a>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="home-text11">Nosotros</span>
            </Fragment>
          }
          text5={
            <Fragment>
              <span className="home-text12">Soluciones</span>
            </Fragment>
          }
          text6={
            <Fragment>
              <span className="home-text13">Industrias</span>
            </Fragment>
          }
          text7={
            <Fragment>
              <span className="home-text14">Blog</span>
            </Fragment>
          }
          text21={
            <Fragment>
              <span className="home-text15">Industrias</span>
            </Fragment>
          }
          text22={
            <Fragment>
              <Link href="/industrias/produccion">
                <a className="home-link5">Producción</a>
              </Link>
            </Fragment>
          }
          register={
            <Fragment>
              <a
                href="https://#contacto"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link6"
              >
                Contáctanos
              </a>
            </Fragment>
          }
        ></Heading>

        {/* CONTENIDO */}
        <div className="home-hero">
          <div className="home-content10">
            <div className="home-content11">
              <h1 className="home-title1">Somos Transformación</h1>
              <span className="home-caption1">
                Grupo Inforum nace de la experiencia y visión de nuestro CEO
                Edgar Urrutia, quien con su expertise en implementaciones
                exitosas embarca en la aventura de la transformación digital de
                empresas.
              </span>
              <div className="home-hero-buttons"></div>
            </div>
            <div className="home-container11">
              <div className="home-container12">
                <Script
                  html={`<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/Eau96xNp3Ds?si=deXLNoirDAisJ1gK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`}
                ></Script>
              </div>
            </div>
          </div>
        </div>

        <div className="home-stats">
          <div id=".card" className="home-stat1">
            <span className="home-caption2">
              <span>+</span>
              <span className="home-text17">800</span>
            </span>
            <span className="home-description1">Clientes en la región</span>
          </div>
          <div className="home-container13">
            <div id=".card" className="home-stat2">
              <span className="home-caption3">+30</span>
              <span className="home-description2">
                Consultores de implementación
              </span>
            </div>
          </div>
          <div id=".card" className="card">
            <span className="home-caption4">+15</span>
            <span className="home-description3">Premios internacionales</span>
          </div>
        </div>

        <button type="button" className="home-button1 button">
          Conoce más de Grupo Inforum
        </button>

        <Features23
          button={<Fragment><span className="home-text18">Conoce más</span></Fragment>}
          button1={<Fragment><span className="home-text19">Conoce más</span></Fragment>}
          button2={<Fragment><span className="home-text20">Conoce más</span></Fragment>}
          button3={<Fragment><span className="home-text21">Conoce más</span></Fragment>}
          heading1={<Fragment><span className="home-text22">Soluciones</span></Fragment>}
          feature1Title={<Fragment><span className="home-text23">SAP Business One</span></Fragment>}
          rootClassName="features23root-class-name"
          feature1Title1={<Fragment><span className="home-text24">Mindset-U</span></Fragment>}
          feature1Title2={<Fragment><span className="home-text25">Desarrollo</span></Fragment>}
          feature1Title3={<Fragment><span className="home-text26">Infraestructura</span></Fragment>}
          feature1Description={<Fragment><span className="home-text27">Customized web design solutions tailored to meet your specific business needs.</span></Fragment>}
          feature1Description1={<Fragment><span className="home-text28">Customized web design solutions tailored to meet your specific business needs.</span></Fragment>}
          feature1Description2={<Fragment><span className="home-text29">Customized web design solutions tailored to meet your specific business needs.</span></Fragment>}
          feature1Description3={<Fragment><span className="home-text30">Customized web design solutions tailored to meet your specific business needs.</span></Fragment>}
        />

        <div className="home-features">
          <div className="home-header">
            <div className="home-heading1">
              <h2 className="home-text31">Industrias</h2>
            </div>
          </div>

          <div className="home-feature-list">
            {/* Retail */}
            <div className="home-feature1">
              <div className="home-container14">
                <div className="home-container15">
                  <Script html={`<?xml version="1.0" encoding="UTF-8"?>
<svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 76.55 78.32">
  <defs><style>.cls-1{fill:#ffffff;}</style></defs>
  <path class="cls-1" d="M73.52,70.02l-7.53-45.15c-.36-2.18-2.25-3.77-4.45-3.77h-7.01c.06-.56.09-1.13.09-1.71,0-9.03-7.32-16.35-16.35-16.35s-16.35,7.32-16.35,16.35c0,.58.03,1.15.09,1.71h-7.01c-2.21,0-4.09,1.6-4.45,3.77l-7.53,45.15c-.46,2.75,1.66,5.26,4.45,5.26h61.58c2.79,0,4.91-2.51,4.45-5.26ZM28.7,19.39c0-5.28,4.3-9.57,9.57-9.57s9.58,4.3,9.58,9.57c0,.59-.07,1.16-.17,1.71h-18.8c-.1-.56-.17-1.13-.17-1.71Z"/>
</svg>`} />
                </div>
              </div>
              <div className="home-content12">
                <span className="home-title2">Retail</span>
                <span className="home-description4">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusa</span>
                {/* Enlace activado */}
                <Link href="/industrias/retail">
                  <a className="home-button2 button" aria-label="Conoce más sobre Retail">Conoce más</a>
                </Link>
              </div>
            </div>

            {/* Producción */}
            <div className="home-feature2">
              <div className="home-container16">
                <div className="home-container17">
                  <Script html={`<?xml version="1.0" encoding="UTF-8"?>
<svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 78.87 79.11">
  <defs><style>.cls-1{fill:#fff;}</style></defs>
  <path class="cls-1" d="M51.76,51l-5.83-2.32c-.09-.7-.22-1.38-.39-2.05l4.62-4.25c.81-.75.96-1.97.36-2.89l-2.85-4.36c-.6-.92-1.77-1.27-2.78-.84l-5.79,2.49c-.54-.42-1.11-.81-1.7-1.17l.26-6.29c.05-1.1-.71-2.07-1.79-2.3l-5.09-1.07c-1.07-.22-2.15.35-2.55,1.37l-2.34,5.89c-.67.09-1.33.22-1.98.38l-4.29-4.67c-.75-.81-1.97-.96-2.89-.36l-4.36,2.85c-.92.6-1.27,1.77-.84,2.78l2.52,5.86c-.4.52-.77,1.07-1.12,1.63l-6.37-.27c-1.1-.05-2.07.71-2.3,1.79l-1.07,5.09c-.22,1.07.35,2.15,1.37,2.55l5.94,2.36c.09.66.21,1.3.36,1.94l-4.7,4.32c-.81.75-.96,1.97-.36,2.89l2.85,4.36c.6.92,1.77,1.27,2.78.84l5.85-2.52c.52.41,1.07.78,1.64,1.13l-.26,6.35c-.05,1.1.71,2.07,1.79,2.3l5.09,1.07c1.07.22,2.15-.35,2.55-1.37l2.34-5.88c.68-.09,1.35-.21,2-.37l4.28,4.65c.75.81,1.97.96,2.89.36l4.36-2.85c.92-.6,1.27-1.77.84-2.78l-2.49-5.78c.42-.54.82-1.11,1.18-1.71l6.27.26c1.1.05,2.07-.71,2.3-1.79l1.07-5.09c.22-1.07-.35-2.15-1.37-2.55ZM23.06,60.8c-3.43-1.73-5.75-5.28-5.95-9.11-.46-8.73,8.46-14.55,16.26-10.62,3.43,1.73,5.75,5.28,5.95,9.11.46,8.73-8.46,14.55-16.26,10.62Z"/>
</svg>`}/>
                </div>
              </div>
              <div className="home-content13">
                <span className="home-title3">Producción</span>
                <span className="home-description5">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusa</span>
                {/* Enlace activado */}
                <Link href="/industrias/produccion">
                  <a className="home-button3 button" aria-label="Conoce más sobre Producción">Conoce más</a>
                </Link>
              </div>
            </div>

            {/* Distribución */}
            <div className="home-feature3">
              <div className="home-container18">
                <div className="home-container19">
                  <Script html={`<?xml version="1.0" encoding="UTF-8"?>
<svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 78.32 78.32">
  <defs><style>.cls-1{fill:#fff;}</style></defs>
  <path class="cls-1" d="M76.07,14.41l-7.24-10.85c-.87-1.31-2.35-2.1-3.92-2.1H13.4c-1.58,0-3.05.79-3.92,2.1L2.25,14.41c-.52.77-.79,1.68-.79,2.61v55.13c0,2.6,2.11,4.71,4.71,4.71h65.98c2.6,0,4.71-2.11,4.71-4.71V17.02c0-.93-.28-1.84-.79-2.61ZM48.59,26.91v7.54l-9.43-7.54-9.43,7.54V15.59l2.36-11.78h14.14l2.36,11.78v11.31Z"/>
</svg>`} />
                </div>
              </div>
              <div className="home-content14">
                <span className="home-title4">Distribución</span>
                <span className="home-description6">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusa</span>
                <button type="button" className="home-button4 button">Conoce más</button>
              </div>
            </div>

            {/* Restaurantes */}
            <div className="home-feature4">
              <div className="home-container20">
                <div className="home-container21">
                  <Script html={`<?xml version="1.0" encoding="UTF-8"?>
<svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65.66 78.13">
  <defs><style>.cls-1{fill:#fff;}</style></defs>
  <g><path class="cls-1" d="M51.34,74.39c-1.9,0-3.43-1.54-3.43-3.43V28.7c0-1.9,1.54-3.43,3.43-3.43s3.43,1.54,3.43,3.43v42.26c0,1.9-1.54,3.43-3.43,3.43Z"/><ellipse class="cls-1" cx="51.1" cy="18.79" rx="9.82" ry="15.51"/></g>
  <path class="cls-1" d="M27.78,63.35h-4.13v-13.38c5.27-2.2 8.97-7.4 8.97-13.46V9.48c0-1.61-6.53-2.92-14.58-2.92s-14.58,1.31-14.58,2.92v27.02c0,6.49,4.24,11.98,10.1,13.87v12.97h-5.2c-2.7,0-4.89,2.19-4.89,4.89v1.22c0,2.7,2.19,4.89,4.89,4.89h5.2s10.1,0,10.1,0h0s4.13,0,4.13,0c2.7,0,4.89-2.19,4.89-4.89v-1.22c0-2.7-2.19-4.89-4.89-4.89Z"/>
</svg>`} />
                </div>
              </div>
              <div className="home-content15">
                <span className="home-title5">Restaurantes</span>
                <span className="home-description7">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusa</span>
                <button type="button" className="home-button5 button">Conoce más</button>
              </div>
            </div>

            {/* Servicios */}
            <div className="home-feature5">
              <div className="home-container22">
                <div className="home-container23">
                  <Script html={`<?xml version="1.0" encoding="UTF-8"?>
<svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 74.18 78.32">
  <defs><style>.cls-1{fill:#fff;}</style></defs>
  <path class="cls-1" d="M67.71,25.64c-.78,0-1.52.36-2,.98l-15.49,19.84c-.31.39-.72.69-1.2.85l-12.12,4.04 6.84-4.94c1.13-.82 1.39-2.4 .58-3.54l-2.17-3.03c-.58-.82-1.6-1.21-2.58-1.01l-18.4,3.8c-.47.1-.9 .32-.1 .66l-15.2,14.62c-1.11,1.06-1.02,2.86 .17,3.81l7.87,6.3c.38 .3 .83 .49 1.31 .54l18.42,1.99c.41 .04 .82 -.01 1.2 -.16l25.63 -10.04c.72 -.28 1.27 -.87 1.5 -1.61l9.31 -29.81c.51 -1.64 -.71 -3.3 -2.42 -3.3Z"/>
  <path class="cls-1" d="M30.39,23.74c.36 .26 .52 .73 .38 ,1.16l-2.55 ,7.84c-.31 .95 .78 ,1.75 ,1.59 ,1.16l6.67 -4.84c.36 -.26 .85 -.26 1.22 ,0l6.67 ,4.84c.81 .59 ,1.9 -.2 ,1.59 -1.16l-2.55 -7.84c-.14 -.43 .01 -.89 .38 -1.16l6.67 -4.84c.81 -.59 .39 -1.87 -.61 -1.87h-8.24c-.45 ,0 -.85 -.29 -.99 -.72l-2.55 -7.84c-.31 -.95 -1.66 -.95 -1.97 ,0l-2.55 ,7.84c-.14 ,.43 -.54 ,.72 -.99 ,.72h-8.24c-1 ,0 -1.42 ,1.28 -.61 ,1.87l6.67 ,4.84Z"/>
</svg>`} />
                </div>
              </div>
              <div className="home-content16">
                <span className="home-title6">Servicios</span>
                <span className="home-description8">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusa</span>
                <button type="button" className="home-button6 button">Conoce más</button>
              </div>
            </div>

            {/* Construcción */}
            <div className="home-feature6">
              <div className="home-container24">
                <div className="home-container25">
                  <Script html={`<?xml version="1.0" encoding="UTF-8"?>
<svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 78.32 76.66">
  <defs><style>.cls-1{fill:#fff;}</style></defs>
  <rect class="cls-1" x="36.71" y="52.06" width="29.37" height="17.13"/>
  <rect class="cls-1" x="48.95" y="30.03" width="29.37" height="17.13"/>
  <rect class="cls-1" x="14.68" y="30.03" width="29.37" height="17.13"/>
  <rect class="cls-1" y="30.03" width="9.79" height="17.13"/>
  <path class="cls-1" d="M70.98,69.19h3.67c2.03,0,3.67-1.64,3.67-3.67v-13.46h-7.34v17.13Z"/>
  <path class="cls-1" d="M31.82,8.01H4.89c-2.7,0-4.89,2.19-4.89,4.89v12.24h31.82V8.01Z"/>
  <rect class="cls-1" x="36.71" y="8.01" width="29.37" height="17.13"/>
  <path class="cls-1" d="M70.98,8.01v17.13h7.34v-13.46c0-2.03-1.64-3.67-3.67-3.67h-3.67Z"/>
</svg>`} />
                </div>
              </div>
              <div className="home-content17">
                <span className="home-title7">Construcción</span>
                <span className="home-description9">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusa</span>
                <button type="button" className="home-button7 button">Conoce más</button>
              </div>
            </div>
          </div>
        </div>

        <div className="home-sections">
          <div className="home-section">
            <div className="home-content18">
              <div className="home-heading2">
                <h2 className="home-text32">Blog</h2>
                <span className="home-text33">
                  ¡Bienvenido a nuestro blog! Explora artículos frescos y útiles
                  que te ayudarán a estar al día con las últimas tendencias,
                  consejos prácticos y noticias emocionantes en transformación
                  digital.
                  <span dangerouslySetInnerHTML={{ __html: ' ' }} />
                </span>
              </div>
              <div className="home-content19">
                <Link href="/">
                  <a className="home-link7">
                    <div className="home-get-started button">
                      <span className="home-sign-up">Leer más</span>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
            <img
              alt="image"
              src="https://res.cloudinary.com/dgjtdex6w/image/upload/v1757721496/blog_zj2snk.png"
              className="home-image"
            />
          </div>
        </div>

        {/* Footer (no modificado) */}
        <Footer
          link="Responsive Web Design"
          link2="(+502) 2417-2400"
          link3="6av 7-39 zona 10, Edificio las Brisas, oficina 302, Ciudad de Guatemala"
          header="Solutions"
          link22="+1(829) 245 3514"
          link23="(+504) 2564-7010"
          link32="C. Ing. Juan García Bonnelly No. 19, Julieta Morales, Distrito Nacional, Santo Domingo."
          link33="Nuevos Horizontes Business Center, Avenida Principal, San Pedro Sula 13001, Honduras"
          link221="(+593) 98 710 1987"
          link222="(+507) 6907 2441"
          link223="(+503) 2264 0223"
          link321="Km 5 Via a Samborondon Edificio Global Center Oficina 202"
          link322="Kenex Plaza piso 9, calle 59 con Ave. Samuel Lewis, Obarrio, Ciudad de Panamá, República de Panamá"
          link323="Torre Corporativa Millennium Plaza, nivel 6, local 3,  Colonia Escalón, San Salvador"
          rootClassName="footerroot-class-name"
        />
      </div>

      <style jsx>{`
        .home-container10 {
          width: 100%;
          display: flex;
          min-height: 100vh;
          overflow-x: hidden;
          align-items: center;
          flex-direction: column;
        }
        .home-link1, .home-link2, .home-link3, .home-link4, .home-link5, .home-link6 {
          display: inline-block;
          text-decoration: underline;
        }
        .home-text10, .home-text11, .home-text12, .home-text13, .home-text14, .home-text15 { display: inline-block; }

        /* ===== Solo CONTENIDO usa Montserrat (sin tocar header/footer) ===== */
        .home-hero,
        .home-stats,
        .home-features,
        .home-sections,
        .home-hero * ,
        .home-stats * ,
        .home-features * ,
        .home-sections * {
          font-family: 'Montserrat', sans-serif !important;
        }

        .home-hero {
          width: 100%;
          height: 506px;
          display: flex;
          align-items: center;
          flex-direction: column;
        }
        .home-content10 {
          width: 100%;
          height: 100%;
          display: flex;
          overflow: visible;
          max-width: 100%;
          min-width: 100%;
          align-self: flex-start;
          align-items: center;
          padding-left: var(--dl-layout-space-oneandhalfunits);
          padding-right: var(--dl-layout-space-oneandhalfunits);
          flex-direction: row;
          background-size: cover;
          justify-content: center;
          background-image: url('https://res.cloudinary.com/dgjtdex6w/image/upload/v1757698776/Recepcion_Inforum_usi4wp.jpg');
        }
        .home-content11 {
          gap: var(--dl-layout-space-oneandhalfunits);
          width: 467px;
          display: flex;
          z-index: 20;
          align-items: flex-start;
          padding-top: var(--dl-layout-space-sixunits);
          padding-left: var(--dl-layout-space-twounits);
          padding-right: var(--dl-layout-space-twounits);
          flex-direction: column;
          padding-bottom: var(--dl-layout-space-sixunits);
          justify-content: center;
        }
        .home-title1 { color: #fff; font-style: normal; }
        .home-caption1 { color: #fff; font-size: 18px; font-weight: 400; line-height: 27px; }
        .home-hero-buttons { gap: var(--dl-layout-space-unit); border: 2px dashed rgba(120,120,120,.4); display: flex; z-index: 15; margin-top: var(--dl-layout-space-unit); align-items: center; justify-content: center; }

        .home-container11 { height: 286px; }
        .home-container12 { display: contents; }

        .home-stats {
          width: 100%;
          height: 257px;
          display: flex;
          z-index: 10;
          max-width: 1200px;
          align-items: center;
          padding-top: var(--dl-layout-space-fiveunits);
          padding-left: var(--dl-layout-space-oneandhalfunits);
          padding-right: var(--dl-layout-space-oneandhalfunits);
          flex-direction: row;
          justify-content: center;
        }
        .home-stat1 {
          gap: var(--dl-layout-space-oneandhalfunits);
          height: 155px;
          display: flex;
          align-items: center;
          border-color: #dbdbdb;
          padding-left: var(--dl-layout-space-threeunits);
          padding-right: var(--dl-layout-space-threeunits);
          flex-direction: column;
          padding-bottom: var(--dl-layout-space-fiveunits);
          justify-content: center;
          border-right-width: 1px;
          border-bottom-width: 0;
        }
        .home-caption2 { color: #082a49; font-size: 40px; font-weight: 800; line-height: 56px; }
        .home-text17 { font-weight: 800; }
        .home-description1 { width: 100%; font-size: 18px; max-width: 350px; text-align: center; line-height: 27px; }

        .home-container13 { display: flex; flex-direction: column; align-items: center; }
        .home-stat2 {
          gap: var(--dl-layout-space-oneandhalfunits);
          height: 125px;
          display: flex;
          align-items: center;
          border-color: #dbdbdb;
          padding-left: var(--dl-layout-space-threeunits);
          padding-right: var(--dl-layout-space-threeunits);
          flex-direction: column;
          padding-bottom: var(--dl-layout-space-fiveunits);
          justify-content: center;
          border-left-width: 1px;
          border-bottom-width: 0;
        }
        .home-caption3, .home-caption4 { color: #082a49; font-size: 40px; font-weight: 800; line-height: 56px; }
        .home-description2, .home-description3 { width: 100%; font-size: 18px; max-width: 350px; text-align: center; line-height: 27px; }

        /* Botón “Conoce más de Grupo Inforum” — fuerza Montserrat */
        .home-button1 { 
          color: #fff; 
          margin-top: var(--dl-layout-space-oneandhalfunits); 
          margin-bottom: var(--dl-layout-space-twounits); 
          background-color: #082a49; 
          font-family: 'Montserrat', sans-serif !important;
        }
        .home-button1 * { font-family: 'Montserrat', sans-serif !important; }

        /* Antes: Poppins —> Ahora Montserrat en textos internos que ya pasamos por props */
        .home-text18, .home-text19, .home-text20, .home-text21 { display: inline-block; }
        .home-text22 { display: inline-block; font-weight: 800; }
        .home-text23, .home-text24, .home-text25, .home-text26, .home-text27, .home-text28, .home-text29, .home-text30 { display: inline-block; }
        .home-text24, .home-text25, .home-text26 { color: #082a49; font-weight: 700; }
        .home-text23 { color: #082a49; }

        .home-features {
          gap: var(--dl-layout-space-fiveunits);
          width: 100%;
          display: flex;
          align-items: center;
          padding: var(--dl-layout-space-sixunits) var(--dl-layout-space-oneandhalfunits);
          border-radius: 16px;
          flex-direction: column;
          background: url('https://res.cloudinary.com/dgjtdex6w/image/upload/v1757716798/bg_ekpekl.png') center/cover no-repeat;
        }
        .home-header { gap: var(--dl-layout-space-oneandhalfunits); display: flex; align-items: flex-start; flex-direction: column; }
        .home-heading1 { gap: var(--dl-layout-space-unit); width: 415px; display: flex; align-items: center; flex-direction: column; justify-content: center; }
        .home-text31 { color: #fff; width: 623px; font-size: 40px; max-width: 400px; text-align: center; font-weight: 700; line-height: 56px; }

        .home-feature-list {
          gap: var(--dl-layout-space-fourunits);
          width: 859px;
          display: flex;
          flex-wrap: wrap;
          align-self: center;
          margin-top: -60px;
          align-items: flex-start;
          flex-direction: row;
          justify-content: flex-start;
        }
        .home-feature1, .home-feature2, .home-feature3, .home-feature4, .home-feature5, .home-feature6 {
          gap: var(--dl-layout-space-twounits);
          width: 100%;
          display: flex;
          padding: var(--dl-layout-space-unit);
          position: relative;
          max-width: 240px;
          transition: .3s;
          align-items: flex-start;
          user-select: none;
          border: 1px solid rgba(0,0,0,0);
          border-radius: var(--dl-layout-radius-radius8);
          flex-direction: column;
          justify-content: flex-start;
        }
        .home-feature1:hover, .home-feature2:hover, .home-feature3:hover, .home-feature4:hover, .home-feature5:hover, .home-feature6:hover { border-color: #ade2df; }

        .home-container14, .home-container16, .home-container18, .home-container20, .home-container22, .home-container24 {
          width: var(--dl-layout-size-small);
          height: 52px;
        }
        .home-container15, .home-container17, .home-container19, .home-container21, .home-container23, .home-container25 { display: contents; }

        .home-content12, .home-content13, .home-content14, .home-content15, .home-content16, .home-content17 {
          gap: var(--dl-layout-space-unit);
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
        }
        .home-title2, .home-title3, .home-title4, .home-title5, .home-title6, .home-title7 {
          color: #fff; font-size: 20px; font-weight: 600;
        }
        .home-description4, .home-description5, .home-description6, .home-description7, .home-description8, .home-description9 {
          color: #fffdfd;
        }
        .home-button2, .home-button3, .home-button4, .home-button5, .home-button6, .home-button7 { background-color: #f59f11; }

        .home-sections { width: 100%; display: flex; max-width: 1200px; align-items: center; padding: 0 var(--dl-layout-space-oneandhalfunits); flex-direction: column; }
        .home-section { gap: var(--dl-layout-space-sixunits); width: 100%; display: flex; z-index: 10; align-items: center; padding: var(--dl-layout-space-fourunits) 0; justify-content: center; }
        .home-content18 { gap: var(--dl-layout-space-oneandhalfunits); display: flex; flex-direction: column; justify-content: center; }
        .home-heading2 { gap: var(--dl-layout-space-unit); display: flex; flex-direction: column; justify-content: center; }
        /* Blog: Montserrat bold */
        .home-text32 { color: #082a49; font-size: 40px; max-width: 535px; font-weight: 800; line-height: 56px; }
        .home-text33 { font-size: 18px; max-width: 535px; line-height: 27px; }
        .home-content19 { gap: var(--dl-layout-space-threeunits); height: 94px; display: flex; flex-direction: column; justify-content: center; }
        .home-link7 { display: contents; }
        /* Botón del Blog: Montserrat + alineado izq + 50% ancho */
        .home-get-started { 
          color: #fff; 
          background-color: #082a49; 
          font-family: 'Montserrat', sans-serif !important;
          align-self: flex-start;
          width: 50%;
        }
        .home-get-started * { font-family: 'Montserrat', sans-serif !important; }

        .home-sign-up { font-style: normal; font-weight: 500; }
        .home-image { width: 310px; height: 383px; object-fit: cover; }

        @media (max-width: 991px) {
          .home-content10 { flex-direction: column; }
          .home-content11 { gap: var(--dl-layout-space-unit); padding-top: var(--dl-layout-space-unit); padding-bottom: 0; }
          .home-caption1 { font-size: 16px; }
          .home-hero-buttons { width: 100%; }
          .home-stats { height: 424px; padding-top: var(--dl-layout-space-threeunits); flex-direction: column; }
          .home-stat1 { gap: var(--dl-layout-space-halfunit); width: 100%; height: 405px; padding-bottom: var(--dl-layout-space-threeunits); border-right-width: 0; }
          .home-caption2, .home-caption3, .home-caption4 { text-align: center; line-height: 32px; }
          .home-stat2 { gap: var(--dl-layout-space-halfunit); width: 100%; padding: var(--dl-layout-space-threeunits) 0; border-left-width: 0; }
          .home-button1 { margin-bottom: var(--dl-layout-space-twounits); }
          .home-section { border-top: 1px solid #dbdbdb; flex-direction: column; }
          .home-content18 { gap: var(--dl-layout-space-unit); }
          .home-content19 { gap: var(--dl-layout-space-twounits); }
          .home-get-started { margin-bottom: var(--dl-layout-space-twounits); }
        }
        @media (max-width: 767px) {
          .home-content10 { height: 583px; }
          .home-caption1 { font-size: 16px; line-height: 24px; }
          .home-stats { height: 419px; margin-top: var(--dl-layout-space-twounits); }
          .home-caption2, .home-caption3, .home-caption4 { font-size: 32px; }
          .home-description1, .home-description2, .home-description3 { font-size: 16px; line-height: 24px; }
          .home-features { gap: var(--dl-layout-space-threeunits); }
          .home-header { gap: var(--dl-layout-space-unit); }
          .home-text31 { font-size: 32px; line-height: 44px; }
          .home-feature-list { gap: var(--dl-layout-space-twounits); width: 100%; flex-direction: column; }
          .home-feature1, .home-feature2, .home-feature3, .home-feature4, .home-feature5, .home-feature6 { gap: var(--dl-layout-space-oneandhalfunits); max-width: 100%; }
          .home-content12, .home-content13, .home-content14, .home-content15, .home-content16, .home-content17 { gap: var(--dl-layout-space-halfunit); }
          .home-title2, .home-title3, .home-title4, .home-title5, .home-title6, .home-title7 { font-size: 18px; line-height: 27px; }
          .home-text32 { font-size: 32px; line-height: 44px; }
          .home-text33 { font-size: 16px; line-height: 24px; }
          .home-get-started { width: 60%; } /* un poco más ancho en tablets */
        }
        @media (max-width: 479px) {
          .home-content10 { height: 637px; }
          .home-content11 { height: 187px; margin-top: var(--dl-layout-space-unit); padding-top: var(--dl-layout-space-halfunit); margin-bottom: var(--dl-layout-space-threeunits); }
          .home-title1 { margin-top: var(--dl-layout-space-sixunits); }
          .home-hero-buttons { width: 100%; flex-direction: column; }
          .home-container11 { width: 479px; height: 288px; }
          .home-stats { height: 395px; margin-top: var(--dl-layout-space-fourunits); }
          /* Antes: Poppins en mobile —> Montserrat */
          .home-description3 { font-size: 18px; line-height: 27px; }
          .home-feature1, .home-feature2, .home-feature3, .home-feature4, .home-feature5, .home-feature6 { padding-top: 0; padding-bottom: 0; }
          .home-get-started { width: 100%; } /* en móvil que respire a lo ancho */
        }

        /* ===============================
           CONTENT-ONLY: ajustes hero responsivo
           =============================== */
        .home-hero { height: auto; padding-top: 32px; }
        .home-content10 { min-height: 520px; background-position: center; background-repeat: no-repeat; }
        .home-container11 { width: 100%; max-width: 960px; padding-left: 16px; padding-right: 16px; height: auto; }
        .home-container12 { display: block; position: relative; width: 100%; padding-top: 56.25%; }
        .home-container12 :global(iframe) { position: absolute; inset: 0; width: 100%; height: 100%; border: 0; display: block; border-radius: 12px; }

        @media (max-width: 991px) {
          .home-content10 { flex-direction: column; align-items: stretch; min-height: 540px; }
          .home-content11 { margin-top: 16px; padding-top: 16px; padding-left: var(--dl-layout-space-oneandhalfunits); padding-right: var(--dl-layout-space-oneandhalfunits); }
        }
        @media (max-width: 767px) {
          .home-hero { padding-top: 16px; }
          .home-content10 { min-height: 560px; padding-left: var(--dl-layout-space-unit); padding-right: var(--dl-layout-space-unit); align-items: center; }
          .home-content11 { width: 100%; max-width: 680px; margin-top: 8px; padding-top: 8px; padding-left: 0; padding-right: 0; }
          .home-title1 { font-size: 40px; line-height: 1.15; margin-bottom: 8px; }
          .home-caption1 { font-size: 16px; line-height: 24px; }
        }
        @media (max-width: 479px) {
          .home-content10 { min-height: 600px; }
          .home-title1 { font-size: 34px; }
        }

        /* Evita separaciones raras en el hero del contenido */
        .home-hero { margin-top: 0 !important; padding-top: 12px !important; }
        .home-content10, .home-container10 { margin-top: 0 !important; }
        .home-content11 { padding-top: 8px !important; }
        .home-title1 { margin-top: 0 !important; }

        /* Offset para header fijo */
.home-container10 {
  padding-top: 96px;
}

@media (max-width: 767px) {
  .home-container10 {
    padding-top: 68px;
  }
}
/* === Ajuste solo para botón Blog en responsive === */
@media (max-width: 991px) {
  .home-get-started {
    width: 100% !important;
    align-self: stretch; /* que se estire al contenedor */
    text-align: center;  /* centra el texto dentro */
    justify-content: center; /* por si es flex */
  }
}
/* Solo centra el texto dentro de los botones */
.home-button2,
.home-button3,
.home-button4,
.home-button5,
.home-button6,
.home-button7 {
  text-align: center;   /* centra el texto */
  display: inline-block; /* mantiene el ancho natural */
}

      `}</style>
    </>
  )
}

export default Home
