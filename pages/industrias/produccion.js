import React, { Fragment } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Heading from '../../components/heading'
import Footer from '../../components/footer'

const Produccin = (props) => {
  return (
    <>
      <div className="produccin-container10">
        <Head>
          <title>Produccin - Finbest</title>
          <meta name="description" content="Description of the website" />
          <meta property="og:title" content="Produccin - Finbest" />
          <meta
            property="og:description"
            content="Description of the website"
          />
        </Head>
        <Heading
          text={
            <Fragment>
              <span className="produccin-text100">Nosotros</span>
            </Fragment>
          }
          login={
            <Fragment>
              <span className="produccin-text101">Contáctanos</span>
            </Fragment>
          }
          text1={
            <Fragment>
              <a
                href="https://#soluciones"
                target="_blank"
                rel="noreferrer noopener"
                className="produccin-link1"
              >
                Soluciones
              </a>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="produccin-text102">Retail</span>
            </Fragment>
          }
          text3={
            <Fragment>
              <a
                href="https://#blog"
                target="_blank"
                rel="noreferrer noopener"
                className="produccin-link2"
              >
                Blog
              </a>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="produccin-text103">Nosotros</span>
            </Fragment>
          }
          text5={
            <Fragment>
              <span className="produccin-text104">Soluciones</span>
            </Fragment>
          }
          text6={
            <Fragment>
              <span className="produccin-text105">Industrias</span>
            </Fragment>
          }
          text7={
            <Fragment>
              <span className="produccin-text106">Blog</span>
            </Fragment>
          }
          text21={
            <Fragment>
              <span className="produccin-text107">Industrias</span>
            </Fragment>
          }
          text22={
            <Fragment>
              <Link href="/industrias/produccion">
                <a className="produccin-link3">Producción</a>
              </Link>
            </Fragment>
          }
          register={
            <Fragment>
              <a
                href="https://#contacto"
                target="_blank"
                rel="noreferrer noopener"
                className="produccin-link4"
              >
                Contáctanos
              </a>
            </Fragment>
          }
          rootClassName="headingroot-class-name4"
        ></Heading>
        <div className="produccin-header30 thq-section-padding">
          <img
            alt="Custom Solutions Image"
            src="https://res.cloudinary.com/dgjtdex6w/image/upload/v1758826836/crystal-kwok-xD5SWy7hMbw-unsplash_eqd2gf.jpg"
            className="produccin-image1"
          />
          <div className="produccin-container11"></div>
          <div className="produccin-max-width1 thq-section-max-width">
            <div className="produccin-content1">
              <h1 className="produccin-text108 thq-heading-1">
                <span>Optimiza tu producción</span>
                <br className="produccin-text110"></br>
                <span>hasta en un 15%</span>
                <br className="produccin-text112"></br>
                <span>con SAP Business One</span>
                <br></br>
              </h1>
              <p className="produccin-text115 thq-body-large">
                <span>
                  Maximiza el rendimiento de cada lote, reduce tiempos de ciclo
                  y elimina desperdicios. Empresas manufactureras líderes ya
                  transformaron su operación.
                </span>
                <br></br>
              </p>
              <div className="produccin-actions">
                <button className="produccin-button1 thq-button-filled">
                  <span className="produccin-text118 thq-body-small">
                    Solicita tu asesoría gratuita
                  </span>
                </button>
              </div>
              <p className="produccin-text119 thq-body-large">
                <span>80+ empresas de producción confían en nosotros</span>
                <br></br>
                <span>+20 años de experiencia SAP</span>
              </p>
            </div>
          </div>
        </div>
        <div className="produccin-container12">
          <div className="produccin-layout3491 thq-section-padding">
            <div className="produccin-max-width2 thq-section-max-width">
              <div className="produccin-container13">
                <h1 className="produccin-heading1 thq-heading-2">
                  ¿Por qué las empresas de producción líderes eligen SAP
                  Business One?
                </h1>
                <h1 className="produccin-heading2 thq-heading-2">
                  Controla cada variable de tu proceso productivo con la
                  plataforma ERP más robusta del mercado. Optimiza recursos,
                  reduce desperdicios y maximiza tu rentabilidad.
                </h1>
              </div>
              <div className="produccin-container14 thq-grid-3">
                <div className="produccin-container15 thq-card">
                  <img
                    alt="image"
                    src="https://res.cloudinary.com/dgjtdex6w/image/upload/v1758825732/icons-08_amv8zv.jpg"
                    className="produccin-image2"
                  />
                  <h2 className="produccin-text123 thq-heading-2">
                    Mejorar rendimiento por lote 3-5% en 120 días
                  </h2>
                  <span className="produccin-text124 thq-body-small">
                    <span>
                      Optimiza formulaciones, controla variables críticas y
                      reduce desperdicios con monitoreo en tiempo real de cada
                      proceso productivo.
                    </span>
                    <br></br>
                  </span>
                  <hr className="produccin-separator1"></hr>
                  <span className="produccin-text127 thq-body-small">
                    ROI: Mayor aprovechamiento de materias primas
                  </span>
                </div>
                <div className="produccin-container16 thq-card">
                  <img
                    alt="image"
                    src="https://res.cloudinary.com/dgjtdex6w/image/upload/v1758825731/icons-09_hpqmso.jpg"
                    className="produccin-image3"
                  />
                  <h2 className="produccin-text128 thq-heading-2">
                    Reducir tiempos de ciclo -15% en 90-120 días
                  </h2>
                  <span className="produccin-text129 thq-body-small">
                    Acelera tus procesos con planificación MRP avanzada,
                    programación automática y optimización de secuencias de
                    producción.
                  </span>
                  <hr className="produccin-separator2"></hr>
                  <span className="produccin-text130 thq-body-small">
                    Ahorro: Mayor throughput y capacidad productiva
                  </span>
                </div>
                <div className="produccin-container17 thq-card">
                  <img
                    alt="image"
                    src="https://res.cloudinary.com/dgjtdex6w/image/upload/v1758825732/icons-10_ffbxpk.jpg"
                    className="produccin-image4"
                  />
                  <h2 className="produccin-text131 thq-heading-2">
                    <span>
                      Reducir tiempo ocioso línea producción en 120 días
                    </span>
                    <br></br>
                  </h2>
                  <span className="produccin-text134 thq-body-small">
                    Elimina paros no programados con mantenimiento predictivo,
                    balanceo de líneas y gestión proactiva de cuellos de
                    botella.
                  </span>
                  <hr className="produccin-separator3"></hr>
                  <span className="produccin-text135 thq-body-small">
                    Ahorro: Máximo aprovechamiento de activos
                  </span>
                </div>
                <div className="produccin-container18 thq-card">
                  <img
                    alt="image"
                    src="https://res.cloudinary.com/dgjtdex6w/image/upload/v1758825732/icons-11_marh9p.jpg"
                    className="produccin-image5"
                  />
                  <h2 className="produccin-text136 thq-heading-2">
                    Control total de calidad
                  </h2>
                  <span className="produccin-text137 thq-body-small">
                    <span>
                      Asegura consistencia con controles estadísticos,
                      trazabilidad completa y gestión automática de no
                      conformidades.
                    </span>
                    <br></br>
                  </span>
                  <hr className="produccin-separator4"></hr>
                  <span className="produccin-text140 thq-body-small">
                    Precisión: Cumplimiento normativo garantizado
                  </span>
                </div>
                <div className="produccin-container19 thq-card">
                  <img
                    alt="image"
                    src="https://res.cloudinary.com/dgjtdex6w/image/upload/v1758825732/icons-10_ffbxpk.jpg"
                    className="produccin-image6"
                  />
                  <h2 className="produccin-text141 thq-heading-2">
                    Visibilidad operacional completa
                  </h2>
                  <span className="produccin-text142 thq-body-small">
                    Dashboards ejecutivos en tiempo real, análisis de OEE y
                    reportes de productividad para toma de decisiones
                    informadas.
                  </span>
                  <hr className="produccin-separator5"></hr>
                  <span className="produccin-text143 thq-body-small">
                    Ahorro: Optimización continua de procesos
                  </span>
                </div>
              </div>
            </div>
            <button type="button" className="produccin-button2 button">
              Solicita tu asesoría gratuita
            </button>
          </div>
        </div>
        <div className="produccin-content2">
          <div className="produccin-content3">
            <h1 className="produccin-title1">
              <span>Caso de Éxito Real</span>
              <br></br>
            </h1>
            <span className="produccin-caption1">
              <span>
                &quot;En solo 8 meses aumentamos nuestras ventas 35%, redujimos
                inventario muerto en 60% y mejoramos nuestro flujo de caja en
                $400,000. SAP Business One nos dio el control total que
                necesitábamos para crecer de manera sostenible.&quot;
              </span>
              <br></br>
              <span>- María González</span>
              <br></br>
              <br></br>
              <span>CEO, RetailMax (Facturación: $2.5M anuales)</span>
            </span>
            <div className="produccin-container20">
              <div className="produccin-container21 thq-card">
                <h2 className="produccin-text152 thq-heading-2">+35%</h2>
                <span className="produccin-text153 thq-body-small">
                  <span className="produccin-text154">
                    Ventas
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                </span>
              </div>
              <div className="produccin-container22 thq-card">
                <h2 className="produccin-text156 thq-heading-2">$400K</h2>
                <span className="produccin-text157 thq-body-small">
                  <span className="produccin-text158">Mejor flujo</span>
                  <br></br>
                </span>
              </div>
              <div className="produccin-container23 thq-card">
                <h2 className="produccin-text160 thq-heading-2">$400K</h2>
                <span className="produccin-text161 thq-body-small">
                  <span className="produccin-text162">Mejor flujo</span>
                  <br></br>
                </span>
              </div>
            </div>
            <span className="produccin-caption2">
              <span>- Implementación completada en 3 meses</span>
              <br></br>
              <span>- ROI recuperado en el primer año</span>
              <br></br>
              <span>- Equipo capacitado y autónomo</span>
            </span>
            <div className="produccin-container24">
              <div className="produccin-hero-buttons"></div>
            </div>
          </div>
          <div className="produccin-container25">
            <div className="produccin-container26">
              <Script
                html={`<iframe width="560" height="315" src="https://www.youtube.com/embed/WIfRhkJGbdk?si=I9z1zlVqKgatf_Hd"
  title="YouTube video player" frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`}
              ></Script>
            </div>
          </div>
        </div>
        <div className="produccin-container27">
          <div className="produccin-layout3492 thq-section-padding">
            <div className="produccin-max-width3 thq-section-max-width">
              <div className="produccin-container28">
                <h1 className="produccin-heading3 thq-heading-2">
                  <span className="produccin-text169">
                    Nuestras Soluciones Especializadas
                  </span>
                  <br></br>
                </h1>
                <h1 className="produccin-heading4 thq-heading-2">
                  Además de SAP Business One, ofrecemos soluciones
                  complementarias diseñadas específicamente para maximizar tu
                  eficiencia productiva
                </h1>
              </div>
              <div className="produccin-container29 thq-grid-3">
                <div className="produccin-container30 thq-card">
                  <span className="produccin-text171 thq-body-small">
                    <span className="produccin-text172">
                      Sistema de Producción Avanzada
                    </span>
                    <br></br>
                  </span>
                  <span className="produccin-text174 thq-body-small">
                    Sistema de punto de venta moderno, rápido y completamente
                    integrado con tu gestión empresarial. Acepta todos los
                    métodos de pago y sincroniza en tiempo real.
                  </span>
                  <button type="button" className="produccin-button3 button">
                    Conocer más
                  </button>
                </div>
                <div className="produccin-container31 thq-card">
                  <span className="produccin-text175 thq-body-small">
                    <span>Sistema de Gestión de Almacén (WMS)</span>
                    <br></br>
                  </span>
                  <span className="produccin-text178 thq-body-small">
                    Control preciso de materias primas, productos en proceso y
                    terminados con trazabilidad completa y optimización
                    automática.
                  </span>
                  <button type="button" className="produccin-button4 button">
                    Conocer más
                  </button>
                </div>
                <div className="produccin-container32 thq-card">
                  <span className="produccin-text179 thq-body-small">
                    <span className="produccin-text180">
                      Nuestras soluciones SaaS
                    </span>
                    <br></br>
                  </span>
                  <span className="produccin-text182 thq-body-small">
                    Plataformas en la nube para monitoreo remoto, análisis
                    predictivo y gestión de múltiples plantas con acceso desde
                    cualquier dispositivo.
                  </span>
                  <button type="button" className="produccin-button5 button">
                    Conocer más
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="produccin-content4">
          <div className="produccin-content5">
            <h1 className="produccin-title2">
              <span>Academia Virtual de Manufactura</span>
              <br></br>
            </h1>
            <span className="produccin-caption3">
              Capacita a tu equipo con nuestro programa de entrenamiento
              especializado en SAP Business One para producción.
            </span>
            <div className="produccin-container33">
              <span className="produccin-caption4">
                <span className="produccin-text185">
                  Metodologías Lean y Six Sigma
                </span>
                <br className="produccin-text186"></br>
                <span>
                  Certificaciones en metodologías de mejora continua aplicadas a
                  SAP Business One
                </span>
                <br className="produccin-text188"></br>
                <br className="produccin-text189"></br>
                <span className="produccin-text190">
                  Simulaciones de Planta
                </span>
                <br className="produccin-text191"></br>
                <span>
                  Entrenamientos con réplicas digitales de procesos productivos
                  reales
                </span>
                <br className="produccin-text193"></br>
                <br className="produccin-text194"></br>
                <span className="produccin-text195">
                  Certificación MRP Avanzado
                </span>
                <br className="produccin-text196"></br>
                <span>
                  Dominio completo de planificación de materiales y programación
                  de producción
                </span>
              </span>
            </div>
          </div>
          <div className="produccin-container34">
            <div className="produccin-container35">
              <img
                alt="image"
                src="https://res.cloudinary.com/dgjtdex6w/image/upload/v1758739746/man-2562325_1280_dnvmyd.jpg"
                className="produccin-image7"
              />
            </div>
            <button type="button" className="produccin-button6 button">
              Conocer academia virtual
            </button>
          </div>
        </div>
        <div className="produccin-container36">
          <div className="produccin-layout3493 thq-section-padding">
            <div className="produccin-max-width4 thq-section-max-width">
              <div className="produccin-container37">
                <h1 className="produccin-heading5 thq-heading-2">
                  <span>Solicita tu Asesoría Gratuita</span>
                  <br></br>
                </h1>
                <h1 className="produccin-heading6 thq-heading-2">
                  <span>
                    Haz clic para ver si tu empresa es candidata a que
                    realicemos una asesoría sin costo.
                  </span>
                  <br></br>
                </h1>
              </div>
              <div className="produccin-container38 thq-grid-3">
                <div className="produccin-container39 thq-card">
                  <h2 className="produccin-text202 thq-heading-2">
                    Análisis Personalizado
                  </h2>
                  <span className="produccin-text203 thq-body-small">
                    <span>
                      Evaluación completa de tus procesos actuales y
                      oportunidades de mejora
                    </span>
                    <br></br>
                  </span>
                </div>
                <div className="produccin-container40 thq-card">
                  <h2 className="produccin-text206 thq-heading-2">
                    ⏰ Compromiso de tiempo:
                  </h2>
                  <span className="produccin-text207 thq-body-small">
                    <span>
                      Te pediremos una primera sesión de 30min en caso tu
                      empresa califique para presentarnos y conocer mejor tus
                      necesidades.
                    </span>
                    <br></br>
                  </span>
                </div>
              </div>
            </div>
            <button type="button" className="produccin-button7 button">
              Solicita tu asesoría gratuita
            </button>
          </div>
        </div>
        <Footer rootClassName="footerroot-class-name5"></Footer>
        <a href="https://play.teleporthq.io/signup" className="produccin-link5">
          <div
            aria-label="Sign up to TeleportHQ"
            className="produccin-container41"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 19 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="produccin-icon1"
            >
              <path
                d="M9.1017 4.64355H2.17867C0.711684 4.64355 -0.477539 5.79975 -0.477539 7.22599V13.9567C-0.477539 15.3829 0.711684 16.5391 2.17867 16.5391H9.1017C10.5687 16.5391 11.7579 15.3829 11.7579 13.9567V7.22599C11.7579 5.79975 10.5687 4.64355 9.1017 4.64355Z"
                fill="#B23ADE"
              ></path>
              <path
                d="M10.9733 12.7878C14.4208 12.7878 17.2156 10.0706 17.2156 6.71886C17.2156 3.3671 14.4208 0.649963 10.9733 0.649963C7.52573 0.649963 4.73096 3.3671 4.73096 6.71886C4.73096 10.0706 7.52573 12.7878 10.9733 12.7878Z"
                fill="#FF5C5C"
              ></path>
              <path
                d="M17.7373 13.3654C19.1497 14.1588 19.1497 15.4634 17.7373 16.2493L10.0865 20.5387C8.67402 21.332 7.51855 20.6836 7.51855 19.0968V10.5141C7.51855 8.92916 8.67402 8.2807 10.0865 9.07221L17.7373 13.3654Z"
                fill="#2874DE"
              ></path>
            </svg>
            <span className="produccin-text210">Built in TeleportHQ</span>
          </div>
        </a>
      </div>
      <style jsx>
        {`
          .produccin-container10 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .produccin-text100 {
            display: inline-block;
          }
          .produccin-text101 {
            display: inline-block;
          }
          .produccin-link1 {
            display: inline-block;
            text-decoration: underline;
          }
          .produccin-text102 {
            display: inline-block;
            text-decoration: underline;
          }
          .produccin-link2 {
            display: inline-block;
            text-decoration: underline;
          }
          .produccin-text103 {
            display: inline-block;
          }
          .produccin-text104 {
            display: inline-block;
          }
          .produccin-text105 {
            display: inline-block;
          }
          .produccin-text106 {
            display: inline-block;
          }
          .produccin-text107 {
            display: inline-block;
          }
          .produccin-link3 {
            display: inline-block;
            text-decoration: underline;
          }
          .produccin-link4 {
            display: inline-block;
            text-decoration: underline;
          }
          .produccin-header30 {
            gap: var(--dl-layout-space-twounits);
          }
          .produccin-image1 {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          .produccin-container11 {
            top: -2px;
            left: -1px;
            width: 100%;
            height: 100%;
            display: flex;
            position: absolute;
            align-items: center;
            flex-direction: column;
            background-color: rgba(8, 42, 73, 0.76);
          }
          .produccin-max-width1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            z-index: 1;
            align-items: center;
            flex-direction: column;
          }
          .produccin-content1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .produccin-text108 {
            color: rgb(255, 255, 255);
            width: 666px;
            text-align: center;
            font-family: 'Montserrat';
          }
          .produccin-text115 {
            color: rgb(255, 255, 255);
            width: 684px;
            text-align: center;
            font-family: 'Montserrat';
          }
          .produccin-actions {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .produccin-button1 {
            font-family: 'Montserrat';
            border-width: 0px;
            border-radius: var(--dl-layout-radius-radius4);
            background-color: var(--dl-color-primary-300);
          }
          .produccin-text118 {
            font-style: normal;
            text-align: center;
            font-family: 'Montserrat';
            font-weight: 400;
          }
          .produccin-text119 {
            color: rgb(255, 255, 255);
            text-align: center;
            font-family: 'Montserrat';
          }
          .produccin-container12 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .produccin-layout3491 {
            width: 100%;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
            background-color: #ffffff;
          }
          .produccin-max-width2 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .produccin-container13 {
            display: flex;
            max-width: 600px;
            align-items: center;
            flex-direction: column;
          }
          .produccin-heading1 {
            color: rgb(8, 42, 73);
            font-style: normal;
            text-align: center;
            font-family: 'Poppins';
            font-weight: 800;
          }
          .produccin-heading2 {
            color: rgb(8, 42, 73);
            width: 788px;
            font-size: 16px;
            font-style: normal;
            margin-top: var(--dl-layout-space-twounits);
            text-align: center;
            font-family: 'Poppins';
            font-weight: 400;
            margin-left: 0px;
            padding-top: 0fUnit;
            margin-right: 0px;
            margin-bottom: var(--dl-layout-space-threeunits);
          }
          .produccin-container14 {
            place-items: center;
            grid-template-rows: 1fr 1fr;
            grid-template-columns: 1fr 1fr 1fr;
          }
          .produccin-container15 {
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
          .produccin-image2 {
            height: 42px;
            object-fit: cover;
          }
          .produccin-text123 {
            color: rgb(8, 42, 73);
            font-size: 22px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 700;
            line-height: 1;
          }
          .produccin-text124 {
            text-align: left;
            font-family: 'Montserrat';
          }
          .produccin-separator1 {
            width: 100%;
            height: 1px;
            background-color: #595959;
          }
          .produccin-text127 {
            text-align: left;
            font-family: 'Montserrat';
          }
          .produccin-container16 {
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
          .produccin-image3 {
            height: 42px;
            object-fit: cover;
          }
          .produccin-text128 {
            color: rgb(8, 42, 73);
            font-size: 22px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 700;
            line-height: 1;
          }
          .produccin-text129 {
            text-align: left;
            font-family: 'Montserrat';
          }
          .produccin-separator2 {
            width: 100%;
            height: 1px;
            background-color: #595959;
          }
          .produccin-text130 {
            text-align: left;
            font-family: 'Montserrat';
          }
          .produccin-container17 {
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
          .produccin-image4 {
            height: 42px;
            object-fit: cover;
          }
          .produccin-text131 {
            color: rgb(8, 42, 73);
            font-size: 22px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 700;
            line-height: 1;
          }
          .produccin-text134 {
            text-align: left;
            font-family: 'Montserrat';
          }
          .produccin-separator3 {
            width: 100%;
            height: 1px;
            background-color: #595959;
          }
          .produccin-text135 {
            text-align: left;
            font-family: 'Montserrat';
          }
          .produccin-container18 {
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
          .produccin-image5 {
            height: 42px;
            object-fit: cover;
          }
          .produccin-text136 {
            color: rgb(8, 42, 73);
            font-size: 22px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 700;
            line-height: 1;
          }
          .produccin-text137 {
            text-align: left;
            font-family: 'Montserrat';
          }
          .produccin-separator4 {
            width: 100%;
            height: 1px;
            background-color: #595959;
          }
          .produccin-text140 {
            text-align: left;
            font-family: 'Montserrat';
          }
          .produccin-container19 {
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
          .produccin-image6 {
            height: 42px;
            object-fit: cover;
          }
          .produccin-text141 {
            color: rgb(8, 42, 73);
            font-size: 22px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 700;
            line-height: 1;
          }
          .produccin-text142 {
            text-align: left;
            font-family: 'Montserrat';
          }
          .produccin-separator5 {
            width: 100%;
            height: 1px;
            background-color: #595959;
          }
          .produccin-text143 {
            text-align: left;
            font-family: 'Montserrat';
          }
          .produccin-button2 {
            color: rgb(255, 255, 255);
            margin-top: var(--dl-layout-space-oneandhalfunits);
            font-family: 'Montserrat';
            border-width: 0px;
            margin-bottom: var(--dl-layout-space-twounits);
            background-color: var(--dl-color-primary-300);
          }
          .produccin-content2 {
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
            background-image: url('https://res.cloudinary.com/dgjtdex6w/image/upload/v1758826990/simon-kadula-8gr6bObQLOI-unsplash_irqbiw.jpg');
          }
          .produccin-content3 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 546px;
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
          .produccin-title1 {
            color: rgb(255, 255, 255);
            font-style: normal;
            font-family: 'Montserrat';
          }
          .produccin-caption1 {
            color: rgb(255, 255, 255);
            font-size: 18px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 400;
            line-height: 27px;
          }
          .produccin-container20 {
            gap: var(--dl-layout-space-halfunit);
            flex: 0 0 auto;
            display: grid;
            grid-template-rows: 1fr;
            grid-template-columns: 1fr 1fr 1fr;
          }
          .produccin-container21 {
            flex: 1;
            height: auto;
            display: grid;
            padding: var(--dl-layout-space-halfunit);
            align-self: flex-start;
          }
          .produccin-text152 {
            color: #ffffff;
            font-size: 22px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 700;
            line-height: 1;
            margin-bottom: -30px;
          }
          .produccin-text153 {
            text-align: left;
            font-family: 'Montserrat';
          }
          .produccin-text154 {
            color: #ffffff;
          }
          .produccin-container22 {
            flex: 1;
            height: auto;
            display: grid;
            padding: var(--dl-layout-space-halfunit);
            align-self: flex-start;
          }
          .produccin-text156 {
            color: #ffffff;
            font-size: 22px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 700;
            line-height: 1;
            margin-bottom: -30px;
          }
          .produccin-text157 {
            text-align: left;
            font-family: 'Montserrat';
          }
          .produccin-text158 {
            color: #ffffff;
          }
          .produccin-container23 {
            flex: 1;
            height: auto;
            display: grid;
            padding: var(--dl-layout-space-halfunit);
            align-self: flex-start;
          }
          .produccin-text160 {
            color: #ffffff;
            font-size: 22px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 700;
            line-height: 1;
            margin-bottom: -30px;
          }
          .produccin-text161 {
            text-align: left;
            font-family: 'Montserrat';
          }
          .produccin-text162 {
            color: #ffffff;
          }
          .produccin-caption2 {
            color: rgb(255, 255, 255);
            font-size: 18px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 400;
            line-height: 27px;
          }
          .produccin-container24 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .produccin-hero-buttons {
            gap: var(--dl-layout-space-unit);
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            z-index: 15;
            margin-top: var(--dl-layout-space-unit);
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .produccin-container25 {
            height: 286px;
          }
          .produccin-container26 {
            display: contents;
          }
          .produccin-container27 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: #e8efff;
          }
          .produccin-layout3492 {
            width: 100%;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
            background-color: e8effff;
          }
          .produccin-max-width3 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .produccin-container28 {
            display: flex;
            max-width: 600px;
            align-items: center;
            flex-direction: column;
          }
          .produccin-heading3 {
            color: rgb(8, 42, 73);
            font-style: normal;
            text-align: center;
            font-family: 'Poppins';
            font-weight: 800;
          }
          .produccin-heading4 {
            color: rgb(8, 42, 73);
            width: 788px;
            font-size: 16px;
            font-style: normal;
            margin-top: var(--dl-layout-space-twounits);
            text-align: center;
            font-family: 'Poppins';
            font-weight: 400;
            margin-left: 0px;
            padding-top: 0fUnit;
            margin-right: 0px;
            margin-bottom: var(--dl-layout-space-threeunits);
          }
          .produccin-container29 {
            width: auto;
            height: auto;
            display: flex;
            align-self: center;
            align-items: center;
            justify-content: center;
          }
          .produccin-container30 {
            flex: 1;
            height: auto;
            display: flex;
            align-self: center;
            box-shadow: 2px 2px 4px 0px #d4d4d4;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-theme-accent1);
          }
          .produccin-text171 {
            text-align: center;
            font-family: 'Montserrat';
          }
          .produccin-text172 {
            color: var(--dl-color-primary-100);
            font-style: normal;
            font-weight: 700;
          }
          .produccin-text174 {
            text-align: center;
            font-family: 'Montserrat';
          }
          .produccin-button3 {
            color: rgb(255, 255, 255);
            margin-top: var(--dl-layout-space-oneandhalfunits);
            font-family: 'Montserrat';
            margin-bottom: var(--dl-layout-space-twounits);
            background-color: rgb(8, 42, 73);
          }
          .produccin-container31 {
            flex: 1;
            height: auto;
            display: flex;
            align-self: center;
            box-shadow: 2px 2px 4px 0px #d4d4d4;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-theme-accent1);
          }
          .produccin-text175 {
            fill: var(--dl-color-primary-100);
            color: var(--dl-color-primary-100);
            font-style: normal;
            text-align: center;
            font-family: 'Montserrat';
            font-weight: 700;
          }
          .produccin-text178 {
            text-align: center;
            font-family: 'Montserrat';
          }
          .produccin-button4 {
            color: rgb(255, 255, 255);
            margin-top: var(--dl-layout-space-oneandhalfunits);
            font-family: 'Montserrat';
            margin-bottom: var(--dl-layout-space-twounits);
            background-color: rgb(8, 42, 73);
          }
          .produccin-container32 {
            flex: 1;
            height: auto;
            display: flex;
            align-self: center;
            box-shadow: 2px 2px 4px 0px #d4d4d4;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-theme-accent1);
          }
          .produccin-text179 {
            text-align: center;
            font-family: 'Montserrat';
          }
          .produccin-text180 {
            font-style: normal;
            font-weight: 700;
          }
          .produccin-text182 {
            text-align: center;
            font-family: 'Montserrat';
          }
          .produccin-button5 {
            color: rgb(255, 255, 255);
            margin-top: var(--dl-layout-space-oneandhalfunits);
            font-family: 'Montserrat';
            margin-bottom: var(--dl-layout-space-twounits);
            background-color: rgb(8, 42, 73);
          }
          .produccin-content4 {
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
            justify-content: center;
          }
          .produccin-content5 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 546px;
            height: 608px;
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
          .produccin-title2 {
            fill: #082a49;
            color: rgb(8, 42, 73);
            font-style: normal;
            font-family: 'Montserrat';
          }
          .produccin-caption3 {
            fill: var(--dl-color-gray-black);
            color: var(--dl-color-gray-black);
            font-size: 18px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 400;
            line-height: 27px;
          }
          .produccin-container33 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .produccin-caption4 {
            fill: var(--dl-color-gray-black);
            color: var(--dl-color-gray-black);
            font-size: 18px;
            font-family: 'Montserrat';
            font-weight: 400;
            line-height: 27px;
          }
          .produccin-text185 {
            color: var(--dl-color-primary-100);
            font-style: normal;
            font-weight: 700;
          }
          .produccin-text186 {
            color: var(--dl-color-primary-100);
            font-style: normal;
            font-weight: 700;
          }
          .produccin-text188 {
            color: var(--dl-color-primary-100);
            font-style: normal;
            font-weight: 700;
          }
          .produccin-text189 {
            color: var(--dl-color-primary-100);
            font-style: normal;
            font-weight: 700;
          }
          .produccin-text190 {
            color: var(--dl-color-primary-100);
            font-style: normal;
            font-weight: 700;
          }
          .produccin-text191 {
            color: var(--dl-color-primary-100);
            font-style: normal;
            font-weight: 700;
          }
          .produccin-text193 {
            color: var(--dl-color-primary-100);
            font-style: normal;
            font-weight: 700;
          }
          .produccin-text194 {
            color: var(--dl-color-primary-100);
            font-style: normal;
            font-weight: 700;
          }
          .produccin-text195 {
            color: var(--dl-color-primary-100);
            font-style: normal;
            font-weight: 700;
          }
          .produccin-text196 {
            color: var(--dl-color-primary-100);
            font-style: normal;
            font-weight: 700;
          }
          .produccin-container34 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .produccin-container35 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .produccin-image7 {
            width: 100%;
            height: 313px;
            object-fit: cover;
          }
          .produccin-button6 {
            color: rgb(255, 255, 255);
            margin-top: var(--dl-layout-space-oneandhalfunits);
            font-family: 'Montserrat';
            margin-bottom: var(--dl-layout-space-twounits);
            background-color: rgb(8, 42, 73);
          }
          .produccin-container36 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: #e8efff;
          }
          .produccin-layout3493 {
            width: 100%;
            height: 807px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
            background-color: #061c2d;
          }
          .produccin-max-width4 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .produccin-container37 {
            display: flex;
            max-width: 600px;
            align-items: center;
            flex-direction: column;
          }
          .produccin-heading5 {
            fill: var(--dl-color-gray-white);
            color: var(--dl-color-gray-white);
            font-style: normal;
            text-align: center;
            font-family: 'Poppins';
            font-weight: 800;
          }
          .produccin-heading6 {
            fill: var(--dl-color-gray-white);
            color: var(--dl-color-gray-white);
            width: 788px;
            font-size: 16px;
            font-style: normal;
            margin-top: var(--dl-layout-space-twounits);
            text-align: center;
            font-family: 'Poppins';
            font-weight: 400;
            margin-left: 0px;
            padding-top: 0fUnit;
            margin-right: 0px;
            margin-bottom: var(--dl-layout-space-threeunits);
          }
          .produccin-container38 {
            height: 444px;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .produccin-container39 {
            flex: 1;
            width: 100%;
            height: auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-primary-500);
          }
          .produccin-text202 {
            fill: var(--dl-color-gray-white);
            color: var(--dl-color-gray-white);
            height: 31px;
            font-size: 22px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 700;
            line-height: 1;
          }
          .produccin-text203 {
            fill: var(--dl-color-gray-white);
            color: var(--dl-color-gray-white);
            text-align: center;
            font-family: 'Montserrat';
          }
          .produccin-container40 {
            flex: 1;
            width: 100%;
            height: auto;
            display: flex;
            align-self: flex-start;
            margin-top: 0px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-primary-500);
          }
          .produccin-text206 {
            fill: var(--dl-color-gray-white);
            color: var(--dl-color-gray-white);
            height: 31px;
            font-size: 22px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 700;
            line-height: 1;
          }
          .produccin-text207 {
            fill: var(--dl-color-gray-white);
            color: var(--dl-color-gray-white);
            text-align: center;
            font-family: 'Montserrat';
          }
          .produccin-button7 {
            color: rgb(255, 255, 255);
            margin-top: var(--dl-layout-space-oneandhalfunits);
            font-family: 'Montserrat';
            margin-bottom: var(--dl-layout-space-twounits);
            background-color: var(--dl-color-primary-300);
          }
          .produccin-link5 {
            display: contents;
          }
          .produccin-container41 {
            right: 50px;
            border: 1px solid #ffffff5c;
            bottom: 30px;
            display: flex;
            z-index: 22;
            position: fixed;
            box-shadow: 5px 5px 10px 0px rgba(31, 31, 31, 0.4);
            min-height: auto;
            align-items: center;
            padding-top: 8px;
            padding-left: 12px;
            border-radius: 8px;
            padding-right: 12px;
            padding-bottom: 8px;
            backdrop-filter: blur(6px);
            background-color: rgba(41, 41, 41, 0.41);
          }
          .produccin-icon1 {
            width: 24px;
            margin-right: 4px;
          }
          .produccin-text210 {
            color: white;
            font-size: 13px;
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
          }
          @media (max-width: 991px) {
            .produccin-text108 {
              text-align: center;
            }
            .produccin-text115 {
              text-align: center;
            }
            .produccin-text119 {
              text-align: center;
            }
            .produccin-max-width2 {
              flex-direction: column;
            }
            .produccin-button2 {
              margin-bottom: var(--dl-layout-space-twounits);
            }
            .produccin-content2 {
              height: 903px;
              flex-direction: column;
            }
            .produccin-content3 {
              gap: var(--dl-layout-space-unit);
              flex: 0 0 auto;
              width: 832px;
              align-items: center;
              padding-top: var(--dl-layout-space-unit);
              margin-right: 0px;
              padding-bottom: 0px;
            }
            .produccin-caption1 {
              font-size: 16px;
              text-align: center;
            }
            .produccin-caption2 {
              font-size: 16px;
            }
            .produccin-hero-buttons {
              width: 100%;
            }
            .produccin-container25 {
              width: 562px;
              height: 100%;
            }
            .produccin-max-width3 {
              flex-direction: column;
            }
            .produccin-button3 {
              margin-bottom: var(--dl-layout-space-twounits);
            }
            .produccin-button4 {
              margin-bottom: var(--dl-layout-space-twounits);
            }
            .produccin-button5 {
              margin-bottom: var(--dl-layout-space-twounits);
            }
            .produccin-content4 {
              height: 1012px;
              flex-direction: column;
            }
            .produccin-content5 {
              gap: var(--dl-layout-space-unit);
              width: 819px;
              height: 50%;
              padding-top: var(--dl-layout-space-unit);
              padding-bottom: 0px;
            }
            .produccin-title2 {
              text-align: center;
            }
            .produccin-caption3 {
              font-size: 16px;
              text-align: center;
            }
            .produccin-caption4 {
              font-size: 16px;
              text-align: center;
            }
            .produccin-image7 {
              width: 539px;
              height: 360px;
            }
            .produccin-button6 {
              margin-bottom: var(--dl-layout-space-twounits);
            }
            .produccin-max-width4 {
              flex-direction: column;
            }
            .produccin-button7 {
              margin-bottom: var(--dl-layout-space-twounits);
            }
          }
          @media (max-width: 767px) {
            .produccin-container14 {
              display: flex;
              flex-direction: column;
            }
            .produccin-container15 {
              width: 100%;
            }
            .produccin-container16 {
              width: 100%;
            }
            .produccin-container17 {
              width: 100%;
            }
            .produccin-container18 {
              width: 100%;
            }
            .produccin-container19 {
              width: 100%;
            }
            .produccin-content2 {
              height: 803px;
            }
            .produccin-content3 {
              width: 692px;
              height: 439px;
              padding-top: var(--dl-layout-space-threeunits);
            }
            .produccin-caption1 {
              font-size: 16px;
              line-height: 24px;
            }
            .produccin-container21 {
              width: 100%;
            }
            .produccin-container22 {
              width: 100%;
            }
            .produccin-container23 {
              width: 100%;
            }
            .produccin-caption2 {
              font-size: 16px;
              line-height: 24px;
            }
            .produccin-container25 {
              width: 563px;
              height: 272px;
              align-self: center;
            }
            .produccin-heading4 {
              width: 692px;
            }
            .produccin-container29 {
              display: flex;
              flex-direction: column;
            }
            .produccin-container30 {
              width: 100%;
            }
            .produccin-container31 {
              width: 100%;
            }
            .produccin-container32 {
              width: 100%;
            }
            .produccin-content4 {
              height: 969px;
            }
            .produccin-caption3 {
              font-size: 16px;
              line-height: 24px;
            }
            .produccin-caption4 {
              font-size: 16px;
              font-family: Montserrat;
              line-height: 24px;
            }
            .produccin-text186 {
              color: var(--dl-color-primary-100);
              font-style: normal;
              font-weight: 700;
            }
            .produccin-text188 {
              color: var(--dl-color-primary-100);
              font-style: normal;
              font-weight: 700;
            }
            .produccin-text189 {
              color: var(--dl-color-primary-100);
              font-style: normal;
              font-weight: 700;
            }
            .produccin-text191 {
              color: var(--dl-color-primary-100);
              font-style: normal;
              font-weight: 700;
            }
            .produccin-text193 {
              color: var(--dl-color-primary-100);
              font-style: normal;
              font-weight: 700;
            }
            .produccin-text194 {
              color: var(--dl-color-primary-100);
              font-style: normal;
              font-weight: 700;
            }
            .produccin-text196 {
              color: var(--dl-color-primary-100);
              font-style: normal;
              font-weight: 700;
            }
            .produccin-image7 {
              margin-top: var(--dl-layout-space-twounits);
            }
            .produccin-container38 {
              display: flex;
              flex-direction: column;
            }
            .produccin-container39 {
              width: 100%;
            }
            .produccin-container40 {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .produccin-container11 {
              height: 519px;
            }
            .produccin-text108 {
              width: auto;
              font-family: Montserrat;
            }
            .produccin-text110 {
              line-height: 1;
            }
            .produccin-text112 {
              line-height: 1;
            }
            .produccin-text115 {
              color: rgb(255, 255, 255);
              width: 433px;
              font-family: Montserrat;
              line-height: 1.15;
            }
            .produccin-actions {
              width: 100%;
              flex-direction: column;
            }
            .produccin-button1 {
              width: 100%;
            }
            .produccin-heading1 {
              color: rgb(8, 42, 73);
              width: 418px;
              font-style: normal;
              margin-top: var(--dl-layout-space-twounits);
              font-family: Montserrat;
              font-weight: 700;
              line-height: 1.15;
            }
            .produccin-heading2 {
              color: rgb(8, 42, 73);
              width: 433px;
              font-size: 16px;
              font-style: normal;
              font-family: Montserrat;
              font-weight: 400;
            }
            .produccin-container14 {
              display: flex;
              flex-direction: column;
            }
            .produccin-text142 {
              font-family: Montserrat;
            }
            .produccin-content2 {
              height: 879px;
            }
            .produccin-content3 {
              width: 445px;
              height: 533px;
              margin-top: var(--dl-layout-space-unit);
              padding-top: var(--dl-layout-space-halfunit);
              margin-right: 0px;
              margin-bottom: var(--dl-layout-space-threeunits);
              padding-bottom: 0px;
            }
            .produccin-title1 {
              align-self: center;
              margin-top: var(--dl-layout-space-sixunits);
              padding-top: 0px;
            }
            .produccin-caption1 {
              align-self: center;
              font-family: Montserrat;
            }
            .produccin-text157 {
              font-family: Montserrat;
            }
            .produccin-text158 {
              color: #ffffff;
            }
            .produccin-caption2 {
              font-size: 16px;
              font-family: Montserrat;
              line-height: 24px;
            }
            .produccin-hero-buttons {
              width: 100%;
              flex-direction: column;
            }
            .produccin-container25 {
              width: 479px;
              height: 275px;
            }
            .produccin-layout3492 {
              height: 1396px;
            }
            .produccin-heading3 {
              font-family: Poppins;
            }
            .produccin-text169 {
              font-family: Montserrat;
            }
            .produccin-heading4 {
              color: rgb(8, 42, 73);
              width: 100%;
              font-size: 16px;
              font-style: normal;
              font-family: Montserrat;
              font-weight: 400;
            }
            .produccin-container29 {
              display: flex;
              flex-direction: column;
            }
            .produccin-content4 {
              width: 100%;
              height: 1266px;
              padding-top: var(--dl-layout-space-unit);
            }
            .produccin-content5 {
              width: 452px;
              height: 569px;
              margin-top: var(--dl-layout-space-unit);
              padding-top: 0px;
              margin-bottom: var(--dl-layout-space-threeunits);
              padding-bottom: 0px;
            }
            .produccin-title2 {
              width: 383px;
              align-self: center;
              margin-top: 0px;
              text-align: center;
              font-family: Montserrat;
              padding-top: 0px;
            }
            .produccin-caption3 {
              color: var(--dl-color-gray-black);
              width: 100%;
              height: 100%;
              font-size: 16px;
              font-style: normal;
              font-family: Montserrat;
              font-weight: 400;
              line-height: 24px;
            }
            .produccin-container33 {
              width: 436px;
              height: 50%;
              align-self: center;
            }
            .produccin-caption4 {
              font-size: 16px;
              font-style: normal;
              text-align: center;
              font-family: Montserrat;
              line-height: 24px;
            }
            .produccin-text186 {
              color: var(--dl-color-primary-100);
              font-weight: 700;
            }
            .produccin-text188 {
              color: var(--dl-color-primary-100);
              font-weight: 700;
            }
            .produccin-text189 {
              color: var(--dl-color-primary-100);
              font-weight: 700;
            }
            .produccin-text191 {
              color: var(--dl-color-primary-100);
              font-weight: 700;
            }
            .produccin-text193 {
              color: var(--dl-color-primary-100);
              font-weight: 700;
            }
            .produccin-text194 {
              color: var(--dl-color-primary-100);
              font-weight: 700;
            }
            .produccin-text196 {
              color: var(--dl-color-primary-100);
              font-weight: 700;
            }
            .produccin-container34 {
              height: 378px;
            }
            .produccin-layout3493 {
              height: 755px;
            }
            .produccin-heading5 {
              width: 401px;
              height: 60px;
            }
            .produccin-heading6 {
              width: 400px;
              height: 51px;
            }
            .produccin-container38 {
              display: flex;
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

export default Produccin
