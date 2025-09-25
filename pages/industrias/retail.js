import React, { Fragment } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Heading from '../../components/heading'
import Footer from '../../components/footer'

const Retail = (props) => {
  return (
    <>
      <div className="retail-container10">
        <Head>
          <title>Retail - Finbest</title>
          <meta name="description" content="Description of the website" />
          <meta property="og:title" content="Retail - Finbest" />
          <meta
            property="og:description"
            content="Description of the website"
          />
        </Head>
        <Heading
          text={
            <Fragment>
              <a
                href="https://#nosotros"
                target="_blank"
                rel="noreferrer noopener"
                className="retail-link1"
              >
                Nosotros
              </a>
            </Fragment>
          }
          login={
            <Fragment>
              <span className="retail-text100">Contáctanos</span>
            </Fragment>
          }
          text1={
            <Fragment>
              <a
                href="https://#soluciones"
                target="_blank"
                rel="noreferrer noopener"
                className="retail-link2"
              >
                Soluciones
              </a>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="retail-text101">Retail</span>
            </Fragment>
          }
          text3={
            <Fragment>
              <a
                href="https://#blog"
                target="_blank"
                rel="noreferrer noopener"
                className="retail-link3"
              >
                Blog
              </a>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="retail-text102">Nosotros</span>
            </Fragment>
          }
          text5={
            <Fragment>
              <span className="retail-text103">Soluciones</span>
            </Fragment>
          }
          text6={
            <Fragment>
              <span className="retail-text104">Industrias</span>
            </Fragment>
          }
          text7={
            <Fragment>
              <span className="retail-text105">Blog</span>
            </Fragment>
          }
          text21={
            <Fragment>
              <span className="retail-text106">Industrias</span>
            </Fragment>
          }
          text22={
            <Fragment>
              <Link href="/industrias/produccion">
                <a className="retail-link4">Producción</a>
              </Link>
            </Fragment>
          }
          register={
            <Fragment>
              <a
                href="https://#contacto"
                target="_blank"
                rel="noreferrer noopener"
                className="retail-link5"
              >
                Contáctanos
              </a>
            </Fragment>
          }
          rootClassName="headingroot-class-name"
        ></Heading>
        <div className="retail-header30 thq-section-padding">
          <img
            alt="Custom Solutions Image"
            src="https://res.cloudinary.com/dgjtdex6w/image/upload/v1758731809/centro-comercial-borroso-abstracto_tqf16i.jpg"
            className="retail-image1"
          />
          <div className="retail-container11"></div>
          <div className="retail-max-width1 thq-section-max-width">
            <div className="retail-content1">
              <h1 className="retail-text107 thq-heading-1">
                <span className="retail-text108">Aumenta tus ventas</span>
                <br className="retail-text109"></br>
                <span className="retail-text110">10% en 6 meses</span>
                <br className="retail-text111"></br>
                <span className="retail-text112">con SAP Business One</span>
                <br></br>
              </h1>
              <p className="retail-text114 thq-body-large">
                Optimiza inventarios, automatiza procesos y toma decisiones
                basadas en datos reales. Miles de empresas retail ya
                transformaron su negocio.
              </p>
              <div className="retail-actions">
                <button className="retail-button1 thq-button-filled">
                  <span className="retail-text115 thq-body-small">
                    Solicita tu asesoría gratuita
                  </span>
                </button>
              </div>
              <p className="retail-text116 thq-body-large">
                <span>100+ empresas retail confían en nosotros</span>
                <br></br>
                <span>+20 años de experiencia SAP</span>
              </p>
            </div>
          </div>
        </div>
        <div className="retail-container12">
          <div className="retail-layout3491 thq-section-padding">
            <div className="retail-max-width2 thq-section-max-width">
              <div className="retail-container13">
                <h1 className="retail-heading1 thq-heading-2">
                  ¿Por qué las empresas retail líderes eligen SAP Business One?
                </h1>
                <h1 className="retail-heading2 thq-heading-2">
                  No es solo un sistema, es la ventaja competitiva que necesitas
                  para escalar tu negocio y maximizar tu rentabilidad en un
                  mercado cada vez más exigente.
                </h1>
              </div>
              <div className="retail-container14 thq-grid-3">
                <div className="retail-container15 thq-card">
                  <img
                    alt="image"
                    src="https://res.cloudinary.com/dgjtdex6w/image/upload/v1758825732/icons-08_amv8zv.jpg"
                    className="retail-image2"
                  />
                  <h2 className="retail-text120 thq-heading-2">
                    Reducir stock-out -30% en 90 días
                  </h2>
                  <span className="retail-text121 thq-body-small">
                    <span>
                      Elimina la pérdida de ventas por falta de inventario con
                      alertas automáticas, previsión de demanda y
                      reabastecimiento inteligente.
                    </span>
                    <br></br>
                  </span>
                  <hr className="retail-separator1"></hr>
                  <span className="retail-text124 thq-body-small">
                    ROI: Ventas recuperadas significativas.
                  </span>
                </div>
                <div className="retail-container16 thq-card">
                  <img
                    alt="image"
                    src="https://res.cloudinary.com/dgjtdex6w/image/upload/v1758825731/icons-09_hpqmso.jpg"
                    className="retail-image3"
                  />
                  <h2 className="retail-text125 thq-heading-2">
                    Mejorar rotación inventario ≥97% en 120 días
                  </h2>
                  <span className="retail-text126 thq-body-small">
                    Optimiza tu capital de trabajo con análisis ABC,
                    identificación de productos lentos y estrategias de
                    liquidación automáticas.
                  </span>
                  <hr className="retail-separator2"></hr>
                  <span className="retail-text127 thq-body-small">
                    Ahorro: Capital liberado sustancial
                  </span>
                </div>
                <div className="retail-container17 thq-card">
                  <img
                    alt="image"
                    src="https://res.cloudinary.com/dgjtdex6w/image/upload/v1758825732/icons-10_ffbxpk.jpg"
                    className="retail-image4"
                  />
                  <h2 className="retail-text128 thq-heading-2">
                    <span>Reducir tasa de retorno -10% en 90 días</span>
                    <br></br>
                  </h2>
                  <span className="retail-text131 thq-body-small">
                    Mejora la calidad del servicio con trazabilidad completa,
                    control de calidad automatizado y gestión proactiva de
                    garantías.
                  </span>
                  <hr className="retail-separator3"></hr>
                  <span className="retail-text132 thq-body-small">
                    Ahorro: Reducción en costos operativos
                  </span>
                </div>
                <div className="retail-container18 thq-card">
                  <img
                    alt="image"
                    src="https://res.cloudinary.com/dgjtdex6w/image/upload/v1758825732/icons-11_marh9p.jpg"
                    className="retail-image5"
                  />
                  <h2 className="retail-text133 thq-heading-2">
                    Decisiones basadas en datos
                  </h2>
                  <span className="retail-text134 thq-body-small">
                    <span>
                      Reportes ejecutivos en tiempo real, KPIs automatizados y
                      análisis predictivos para anticiparte a las tendencias del
                      mercado.
                    </span>
                    <br></br>
                  </span>
                  <hr className="retail-separator4"></hr>
                  <span className="retail-text137 thq-body-small">
                    Precisión: Alta confiabilidad en proyecciones
                  </span>
                </div>
                <div className="retail-container19 thq-card">
                  <img
                    alt="image"
                    src="https://res.cloudinary.com/dgjtdex6w/image/upload/v1758825732/icons-10_ffbxpk.jpg"
                    className="retail-image6"
                  />
                  <h2 className="retail-text138 thq-heading-2">
                    Control total y seguridad
                  </h2>
                  <span className="retail-text139 thq-body-small">
                    Cumplimiento fiscal automático, auditorías simplificadas y
                    seguridad empresarial con respaldos en la nube.
                  </span>
                  <hr className="retail-separator5"></hr>
                  <span className="retail-text140 thq-body-small">
                    Ahorro: Reducción en consultorías externas
                  </span>
                </div>
              </div>
            </div>
            <button type="button" className="retail-button2 button">
              Solicita tu asesoría gratuita
            </button>
          </div>
        </div>
        <div className="retail-content2">
          <div className="retail-content3">
            <h1 className="retail-title1">
              <span>Caso de Éxito Real</span>
              <br></br>
            </h1>
            <span className="retail-caption1">
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
            <div className="retail-container20">
              <div className="retail-container21 thq-card">
                <h2 className="retail-text149 thq-heading-2">+35%</h2>
                <span className="retail-text150 thq-body-small">
                  <span className="retail-text151">
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
              <div className="retail-container22 thq-card">
                <h2 className="retail-text153 thq-heading-2">$400K</h2>
                <span className="retail-text154 thq-body-small">
                  <span className="retail-text155">Mejor flujo</span>
                  <br></br>
                </span>
              </div>
              <div className="retail-container23 thq-card">
                <h2 className="retail-text157 thq-heading-2">$400K</h2>
                <span className="retail-text158 thq-body-small">
                  <span className="retail-text159">Mejor flujo</span>
                  <br></br>
                </span>
              </div>
            </div>
            <span className="retail-caption2">
              <span>- Implementación completada en 3 meses</span>
              <br></br>
              <span>- ROI recuperado en el primer año</span>
              <br></br>
              <span>- Equipo capacitado y autónomo</span>
            </span>
            <div className="retail-container24">
              <div className="retail-hero-buttons"></div>
            </div>
          </div>
          <div className="retail-container25">
            <div className="retail-container26">
              <Script
                html={`<iframe width="560" height="315" src="https://www.youtube.com/embed/WIfRhkJGbdk?si=I9z1zlVqKgatf_Hd"
  title="YouTube video player" frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`}
              ></Script>
            </div>
          </div>
        </div>
        <div className="retail-container27">
          <div className="retail-layout3492 thq-section-padding">
            <div className="retail-max-width3 thq-section-max-width">
              <div className="retail-container28">
                <h1 className="retail-heading3 thq-heading-2">
                  <span className="retail-text166">
                    Nuestras Soluciones Especializadas
                  </span>
                  <br></br>
                </h1>
                <h1 className="retail-heading4 thq-heading-2">
                  No es solo un sistema, es la ventaja competitiva que necesitas
                  para escalar tu negocio y maximizar tu rentabilidad en un
                  mercado cada vez más exigente.
                </h1>
              </div>
              <div className="retail-container29 thq-grid-3">
                <div className="retail-container30 thq-card">
                  <h2 className="retail-text168 thq-heading-2">POS</h2>
                  <span className="retail-text169 thq-body-small">
                    <span className="retail-text170">
                      Punto de Venta Inteligente
                    </span>
                    <br></br>
                  </span>
                  <span className="retail-text172 thq-body-small">
                    Sistema de punto de venta moderno, rápido y completamente
                    integrado con tu gestión empresarial. Acepta todos los
                    métodos de pago y sincroniza en tiempo real.
                  </span>
                  <button type="button" className="retail-button3 button">
                    Conocer más
                  </button>
                </div>
                <div className="retail-container31 thq-card">
                  <h2 className="retail-text173 thq-heading-2">PIM</h2>
                  <span className="retail-text174 thq-body-small">
                    <span className="retail-text175">
                      Gestión de Inventario Avanzada
                    </span>
                    <br></br>
                  </span>
                  <span className="retail-text177 thq-body-small">
                    <span>
                      Sistema especializado en gestión de productos e
                      inventarios con análisis predictivo, control de stocks
                      múltiples y optimización automática de reabastecimiento.
                    </span>
                    <br></br>
                  </span>
                  <button type="button" className="retail-button4 button">
                    Conocer más
                  </button>
                </div>
                <div className="retail-container32 thq-card">
                  <h2 className="retail-text180 thq-heading-2">
                    <span>Desarrollo</span>
                    <br></br>
                  </h2>
                  <span className="retail-text183 thq-body-small">
                    <span className="retail-text184">
                      Soluciones Personalizadas
                    </span>
                    <br></br>
                  </span>
                  <span className="retail-text186 thq-body-small">
                    Desarrollo de software a medida, integraciones
                    personalizadas y automatizaciones específicas para tu modelo
                    de negocio. Adaptamos la tecnología a tus procesos únicos.
                  </span>
                  <button type="button" className="retail-button5 button">
                    Conocer más
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="retail-content4">
          <div className="retail-content5">
            <h1 className="retail-title2">
              <span>Academia Virtual de Aprendizaje Personalizada</span>
              <br></br>
            </h1>
            <span className="retail-caption3">
              Capacita a tu equipo con nuestro programa de entrenamiento
              especializado en SAP Business One para retail.
            </span>
            <div className="retail-container33">
              <span className="retail-caption4">
                <span className="retail-text189">
                  Cursos Personalizados por Rol
                </span>
                <br className="retail-text190"></br>
                <span>
                  Contenido adaptado específicamente para gerentes, vendedores,
                  almacenistas y administradores
                </span>
                <br></br>
                <br></br>
                <span className="retail-text194">Aprendizaje Práctico</span>
                <br className="retail-text195"></br>
                <span>
                  Ejercicios con casos reales de retail y simulaciones de tu
                  propia operación
                </span>
                <br></br>
                <br></br>
                <span className="retail-text199">Certificación Oficial</span>
                <br className="retail-text200"></br>
                <span>
                  Certificados reconocidos por SAP que validan el conocimiento
                  de tu equipo
                </span>
              </span>
            </div>
          </div>
          <div className="retail-container34">
            <div className="retail-container35">
              <img
                alt="image"
                src="https://res.cloudinary.com/dgjtdex6w/image/upload/v1758739746/man-2562325_1280_dnvmyd.jpg"
                className="retail-image7"
              />
            </div>
            <button type="button" className="retail-button6 button">
              Conocer academia virtual
            </button>
          </div>
        </div>
        <div className="retail-container36">
          <div className="retail-layout3493 thq-section-padding">
            <div className="retail-max-width4 thq-section-max-width">
              <div className="retail-container37">
                <h1 className="retail-heading5 thq-heading-2">
                  <span>Solicita tu Asesoría Gratuita</span>
                  <br></br>
                </h1>
                <h1 className="retail-heading6 thq-heading-2">
                  <span>
                    Haz clic para ver si tu empresa es candidata a que
                    realicemos una asesoría sin costo.
                  </span>
                  <br></br>
                </h1>
              </div>
              <div className="retail-container38 thq-grid-3">
                <div className="retail-container39 thq-card">
                  <h2 className="retail-text206 thq-heading-2">
                    Análisis Personalizado
                  </h2>
                  <span className="retail-text207 thq-body-small">
                    <span>
                      Evaluación completa de tus procesos actuales y
                      oportunidades de mejora
                    </span>
                    <br></br>
                  </span>
                </div>
                <div className="retail-container40 thq-card">
                  <h2 className="retail-text210 thq-heading-2">
                    ⏰ Compromiso de tiempo:
                  </h2>
                  <span className="retail-text211 thq-body-small">
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
            <button type="button" className="retail-button7 button">
              Solicita tu asesoría gratuita
            </button>
          </div>
        </div>
        <Footer rootClassName="footerroot-class-name1"></Footer>
        <a href="https://play.teleporthq.io/signup" className="retail-link6">
          <div
            aria-label="Sign up to TeleportHQ"
            className="retail-container41"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 19 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="retail-icon1"
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
            <span className="retail-text214">Built in TeleportHQ</span>
          </div>
        </a>
      </div>
      <style jsx>
        {`
          .retail-container10 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .retail-link1 {
            display: inline-block;
            text-decoration: underline;
          }
          .retail-text100 {
            display: inline-block;
          }
          .retail-link2 {
            display: inline-block;
            text-decoration: underline;
          }
          .retail-text101 {
            display: inline-block;
            text-decoration: underline;
          }
          .retail-link3 {
            display: inline-block;
            text-decoration: underline;
          }
          .retail-text102 {
            display: inline-block;
          }
          .retail-text103 {
            display: inline-block;
          }
          .retail-text104 {
            display: inline-block;
          }
          .retail-text105 {
            display: inline-block;
          }
          .retail-text106 {
            display: inline-block;
          }
          .retail-link4 {
            display: inline-block;
            text-decoration: underline;
          }
          .retail-link5 {
            display: inline-block;
            text-decoration: underline;
          }
          .retail-header30 {
            gap: var(--dl-layout-space-twounits);
          }
          .retail-image1 {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          .retail-container11 {
            top: -2px;
            left: 1px;
            width: 100%;
            height: 597px;
            display: flex;
            position: absolute;
            align-items: center;
            flex-direction: column;
            background-color: rgba(8, 42, 73, 0.76);
          }
          .retail-max-width1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            z-index: 1;
            align-items: center;
            flex-direction: column;
          }
          .retail-content1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .retail-text107 {
            color: rgb(255, 255, 255);
            width: 666px;
            text-align: center;
            font-family: 'Montserrat';
          }
          .retail-text114 {
            color: #ffffff;
            width: 684px;
            text-align: center;
            font-family: 'Montserrat';
          }
          .retail-actions {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .retail-button1 {
            font-family: 'Montserrat';
            border-width: 0px;
            border-radius: var(--dl-layout-radius-radius4);
            background-color: var(--dl-color-primary-300);
          }
          .retail-text115 {
            font-style: normal;
            text-align: center;
            font-family: 'Montserrat';
            font-weight: 400;
          }
          .retail-text116 {
            color: rgb(255, 255, 255);
            text-align: center;
            font-family: 'Montserrat';
          }
          .retail-container12 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .retail-layout3491 {
            width: 100%;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
            background-color: #ffffff;
          }
          .retail-max-width2 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .retail-container13 {
            display: flex;
            max-width: 600px;
            align-items: center;
            flex-direction: column;
          }
          .retail-heading1 {
            color: rgb(8, 42, 73);
            font-style: normal;
            text-align: center;
            font-family: 'Poppins';
            font-weight: 800;
          }
          .retail-heading2 {
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
          .retail-container14 {
            place-items: center;
            grid-template-rows: 1fr 1fr;
            grid-template-columns: 1fr 1fr 1fr;
          }
          .retail-container15 {
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
          .retail-image2 {
            height: 42px;
            object-fit: cover;
          }
          .retail-text120 {
            color: rgb(8, 42, 73);
            font-size: 22px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 700;
            line-height: 1;
          }
          .retail-text121 {
            text-align: left;
            font-family: 'Montserrat';
          }
          .retail-separator1 {
            width: 100%;
            height: 1px;
            background-color: #595959;
          }
          .retail-text124 {
            text-align: left;
            font-family: 'Montserrat';
          }
          .retail-container16 {
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
          .retail-image3 {
            height: 42px;
            object-fit: cover;
          }
          .retail-text125 {
            color: rgb(8, 42, 73);
            font-size: 22px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 700;
            line-height: 1;
          }
          .retail-text126 {
            text-align: left;
            font-family: 'Montserrat';
          }
          .retail-separator2 {
            width: 100%;
            height: 1px;
            background-color: #595959;
          }
          .retail-text127 {
            text-align: left;
            font-family: 'Montserrat';
          }
          .retail-container17 {
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
          .retail-image4 {
            height: 42px;
            object-fit: cover;
          }
          .retail-text128 {
            color: rgb(8, 42, 73);
            font-size: 22px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 700;
            line-height: 1;
          }
          .retail-text131 {
            text-align: left;
            font-family: 'Montserrat';
          }
          .retail-separator3 {
            width: 100%;
            height: 1px;
            background-color: #595959;
          }
          .retail-text132 {
            text-align: left;
            font-family: 'Montserrat';
          }
          .retail-container18 {
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
          .retail-image5 {
            height: 42px;
            object-fit: cover;
          }
          .retail-text133 {
            color: rgb(8, 42, 73);
            font-size: 22px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 700;
            line-height: 1;
          }
          .retail-text134 {
            text-align: left;
            font-family: 'Montserrat';
          }
          .retail-separator4 {
            width: 100%;
            height: 1px;
            background-color: #595959;
          }
          .retail-text137 {
            text-align: left;
            font-family: 'Montserrat';
          }
          .retail-container19 {
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
          .retail-image6 {
            height: 42px;
            object-fit: cover;
          }
          .retail-text138 {
            color: rgb(8, 42, 73);
            font-size: 22px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 700;
            line-height: 1;
          }
          .retail-text139 {
            text-align: left;
            font-family: 'Montserrat';
          }
          .retail-separator5 {
            width: 100%;
            height: 1px;
            background-color: #595959;
          }
          .retail-text140 {
            text-align: left;
            font-family: 'Montserrat';
          }
          .retail-button2 {
            color: rgb(255, 255, 255);
            margin-top: var(--dl-layout-space-oneandhalfunits);
            font-family: 'Montserrat';
            border-width: 0px;
            margin-bottom: var(--dl-layout-space-twounits);
            background-color: var(--dl-color-primary-300);
          }
          .retail-content2 {
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
            background-image: url('https://res.cloudinary.com/dgjtdex6w/image/upload/v1758739062/bg-video-retail_ugdqbu.jpg');
          }
          .retail-content3 {
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
          .retail-title1 {
            color: rgb(255, 255, 255);
            font-style: normal;
            font-family: 'Montserrat';
          }
          .retail-caption1 {
            color: rgb(255, 255, 255);
            font-size: 18px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 400;
            line-height: 27px;
          }
          .retail-container20 {
            gap: var(--dl-layout-space-halfunit);
            flex: 0 0 auto;
            display: grid;
            grid-template-rows: 1fr;
            grid-template-columns: 1fr 1fr 1fr;
          }
          .retail-container21 {
            flex: 1;
            height: auto;
            display: grid;
            padding: var(--dl-layout-space-halfunit);
            align-self: flex-start;
          }
          .retail-text149 {
            color: #ffffff;
            font-size: 22px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 700;
            line-height: 1;
            margin-bottom: -30px;
          }
          .retail-text150 {
            text-align: left;
            font-family: 'Montserrat';
          }
          .retail-text151 {
            color: #ffffff;
          }
          .retail-container22 {
            flex: 1;
            height: auto;
            display: grid;
            padding: var(--dl-layout-space-halfunit);
            align-self: flex-start;
          }
          .retail-text153 {
            color: #ffffff;
            font-size: 22px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 700;
            line-height: 1;
            margin-bottom: -30px;
          }
          .retail-text154 {
            text-align: left;
            font-family: 'Montserrat';
          }
          .retail-text155 {
            color: #ffffff;
          }
          .retail-container23 {
            flex: 1;
            height: auto;
            display: grid;
            padding: var(--dl-layout-space-halfunit);
            align-self: flex-start;
          }
          .retail-text157 {
            color: #ffffff;
            font-size: 22px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 700;
            line-height: 1;
            margin-bottom: -30px;
          }
          .retail-text158 {
            text-align: left;
            font-family: 'Montserrat';
          }
          .retail-text159 {
            color: #ffffff;
          }
          .retail-caption2 {
            color: rgb(255, 255, 255);
            font-size: 18px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 400;
            line-height: 27px;
          }
          .retail-container24 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .retail-hero-buttons {
            gap: var(--dl-layout-space-unit);
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            z-index: 15;
            margin-top: var(--dl-layout-space-unit);
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .retail-container25 {
            height: 286px;
          }
          .retail-container26 {
            display: contents;
          }
          .retail-container27 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: #e8efff;
          }
          .retail-layout3492 {
            width: 100%;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
            background-color: e8effff;
          }
          .retail-max-width3 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .retail-container28 {
            display: flex;
            max-width: 600px;
            align-items: center;
            flex-direction: column;
          }
          .retail-heading3 {
            color: rgb(8, 42, 73);
            font-style: normal;
            text-align: center;
            font-family: 'Poppins';
            font-weight: 800;
          }
          .retail-heading4 {
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
          .retail-container29 {
            width: auto;
            height: auto;
            display: flex;
            align-self: center;
            align-items: center;
            justify-content: center;
          }
          .retail-container30 {
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
          .retail-text168 {
            color: rgb(8, 42, 73);
            font-size: 22px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 700;
            line-height: 1;
          }
          .retail-text169 {
            text-align: left;
            font-family: 'Montserrat';
          }
          .retail-text170 {
            color: #082a49;
            font-weight: 700;
          }
          .retail-text172 {
            text-align: center;
            font-family: 'Montserrat';
          }
          .retail-button3 {
            color: rgb(255, 255, 255);
            margin-top: var(--dl-layout-space-oneandhalfunits);
            font-family: 'Montserrat';
            margin-bottom: var(--dl-layout-space-twounits);
            background-color: rgb(8, 42, 73);
          }
          .retail-container31 {
            flex: 1;
            height: 423px;
            display: flex;
            align-self: center;
            box-shadow: 2px 2px 4px 0px #d4d4d4;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-theme-accent1);
          }
          .retail-text173 {
            color: rgb(8, 42, 73);
            font-size: 22px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 700;
            line-height: 1;
          }
          .retail-text174 {
            text-align: center;
            font-family: 'Montserrat';
          }
          .retail-text175 {
            color: #082a49;
            font-style: normal;
            font-weight: 700;
          }
          .retail-text177 {
            text-align: center;
            font-family: 'Montserrat';
          }
          .retail-button4 {
            color: rgb(255, 255, 255);
            margin-top: var(--dl-layout-space-oneandhalfunits);
            font-family: 'Montserrat';
            margin-bottom: var(--dl-layout-space-twounits);
            background-color: rgb(8, 42, 73);
          }
          .retail-container32 {
            flex: 1;
            height: 428px;
            display: flex;
            align-self: center;
            box-shadow: 2px 2px 4px 0px #d4d4d4;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-theme-accent1);
          }
          .retail-text180 {
            color: rgb(8, 42, 73);
            font-size: 22px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 700;
            line-height: 1;
          }
          .retail-text183 {
            text-align: left;
            font-family: 'Montserrat';
          }
          .retail-text184 {
            color: #082a49;
            font-style: normal;
            font-weight: 700;
          }
          .retail-text186 {
            text-align: center;
            font-family: 'Montserrat';
          }
          .retail-button5 {
            color: rgb(255, 255, 255);
            margin-top: var(--dl-layout-space-oneandhalfunits);
            font-family: 'Montserrat';
            margin-bottom: var(--dl-layout-space-twounits);
            background-color: rgb(8, 42, 73);
          }
          .retail-content4 {
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
          .retail-content5 {
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
          .retail-title2 {
            fill: #082a49;
            color: rgb(8, 42, 73);
            font-style: normal;
            font-family: 'Montserrat';
          }
          .retail-caption3 {
            fill: var(--dl-color-gray-black);
            color: var(--dl-color-gray-black);
            font-size: 18px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 400;
            line-height: 27px;
          }
          .retail-container33 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .retail-caption4 {
            fill: var(--dl-color-gray-black);
            color: var(--dl-color-gray-black);
            font-size: 18px;
            font-family: 'Montserrat';
            font-weight: 400;
            line-height: 27px;
          }
          .retail-text189 {
            color: var(--dl-color-primary-100);
            font-style: normal;
            font-weight: 700;
          }
          .retail-text190 {
            color: var(--dl-color-primary-100);
            font-style: normal;
            font-weight: 700;
          }
          .retail-text194 {
            color: var(--dl-color-primary-100);
            font-style: normal;
            font-weight: 700;
          }
          .retail-text195 {
            color: var(--dl-color-primary-100);
            font-style: normal;
            font-weight: 700;
          }
          .retail-text199 {
            color: var(--dl-color-primary-100);
            font-style: normal;
            font-weight: 700;
          }
          .retail-text200 {
            color: var(--dl-color-primary-100);
            font-style: normal;
            font-weight: 700;
          }
          .retail-container34 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .retail-container35 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .retail-image7 {
            width: 100%;
            height: 313px;
            object-fit: cover;
          }
          .retail-button6 {
            color: rgb(255, 255, 255);
            margin-top: var(--dl-layout-space-oneandhalfunits);
            font-family: 'Montserrat';
            margin-bottom: var(--dl-layout-space-twounits);
            background-color: rgb(8, 42, 73);
          }
          .retail-container36 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: #e8efff;
          }
          .retail-layout3493 {
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
          .retail-max-width4 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .retail-container37 {
            display: flex;
            max-width: 600px;
            align-items: center;
            flex-direction: column;
          }
          .retail-heading5 {
            fill: var(--dl-color-gray-white);
            color: var(--dl-color-gray-white);
            font-style: normal;
            text-align: center;
            font-family: 'Poppins';
            font-weight: 800;
          }
          .retail-heading6 {
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
          .retail-container38 {
            height: 444px;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .retail-container39 {
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
          .retail-text206 {
            fill: var(--dl-color-gray-white);
            color: var(--dl-color-gray-white);
            height: 31px;
            font-size: 22px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 700;
            line-height: 1;
          }
          .retail-text207 {
            fill: var(--dl-color-gray-white);
            color: var(--dl-color-gray-white);
            text-align: center;
            font-family: 'Montserrat';
          }
          .retail-container40 {
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
          .retail-text210 {
            fill: var(--dl-color-gray-white);
            color: var(--dl-color-gray-white);
            height: 31px;
            font-size: 22px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 700;
            line-height: 1;
          }
          .retail-text211 {
            fill: var(--dl-color-gray-white);
            color: var(--dl-color-gray-white);
            text-align: center;
            font-family: 'Montserrat';
          }
          .retail-button7 {
            color: rgb(255, 255, 255);
            margin-top: var(--dl-layout-space-oneandhalfunits);
            font-family: 'Montserrat';
            margin-bottom: var(--dl-layout-space-twounits);
            background-color: var(--dl-color-primary-300);
          }
          .retail-link6 {
            display: contents;
          }
          .retail-container41 {
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
          .retail-icon1 {
            width: 24px;
            margin-right: 4px;
          }
          .retail-text214 {
            color: white;
            font-size: 13px;
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
          }
          @media (max-width: 991px) {
            .retail-text107 {
              text-align: center;
            }
            .retail-text114 {
              text-align: center;
            }
            .retail-text116 {
              text-align: center;
            }
            .retail-max-width2 {
              flex-direction: column;
            }
            .retail-button2 {
              margin-bottom: var(--dl-layout-space-twounits);
            }
            .retail-content2 {
              height: 903px;
              flex-direction: column;
            }
            .retail-content3 {
              gap: var(--dl-layout-space-unit);
              flex: 0 0 auto;
              width: 832px;
              align-items: center;
              padding-top: var(--dl-layout-space-unit);
              margin-right: 0px;
              padding-bottom: 0px;
            }
            .retail-caption1 {
              font-size: 16px;
              text-align: center;
            }
            .retail-caption2 {
              font-size: 16px;
            }
            .retail-hero-buttons {
              width: 100%;
            }
            .retail-container25 {
              width: 562px;
              height: 100%;
            }
            .retail-max-width3 {
              flex-direction: column;
            }
            .retail-button3 {
              margin-bottom: var(--dl-layout-space-twounits);
            }
            .retail-button4 {
              margin-bottom: var(--dl-layout-space-twounits);
            }
            .retail-button5 {
              margin-bottom: var(--dl-layout-space-twounits);
            }
            .retail-content4 {
              height: 1012px;
              flex-direction: column;
            }
            .retail-content5 {
              gap: var(--dl-layout-space-unit);
              width: 819px;
              height: 50%;
              padding-top: var(--dl-layout-space-unit);
              padding-bottom: 0px;
            }
            .retail-title2 {
              text-align: center;
            }
            .retail-caption3 {
              font-size: 16px;
              text-align: center;
            }
            .retail-caption4 {
              font-size: 16px;
              text-align: center;
            }
            .retail-image7 {
              width: 539px;
              height: 360px;
            }
            .retail-button6 {
              margin-bottom: var(--dl-layout-space-twounits);
            }
            .retail-max-width4 {
              flex-direction: column;
            }
            .retail-button7 {
              margin-bottom: var(--dl-layout-space-twounits);
            }
          }
          @media (max-width: 767px) {
            .retail-container14 {
              display: flex;
              flex-direction: column;
            }
            .retail-container15 {
              width: 100%;
            }
            .retail-container16 {
              width: 100%;
            }
            .retail-container17 {
              width: 100%;
            }
            .retail-container18 {
              width: 100%;
            }
            .retail-container19 {
              width: 100%;
            }
            .retail-content2 {
              height: 803px;
            }
            .retail-content3 {
              width: 692px;
              height: 439px;
              padding-top: var(--dl-layout-space-threeunits);
            }
            .retail-caption1 {
              font-size: 16px;
              line-height: 24px;
            }
            .retail-container21 {
              width: 100%;
            }
            .retail-container22 {
              width: 100%;
            }
            .retail-container23 {
              width: 100%;
            }
            .retail-caption2 {
              font-size: 16px;
              line-height: 24px;
            }
            .retail-container25 {
              width: 563px;
              height: 272px;
              align-self: center;
            }
            .retail-heading4 {
              width: 692px;
            }
            .retail-container29 {
              display: flex;
              flex-direction: column;
            }
            .retail-container30 {
              width: 100%;
            }
            .retail-container31 {
              width: 100%;
            }
            .retail-container32 {
              width: 100%;
            }
            .retail-content4 {
              height: 969px;
            }
            .retail-caption3 {
              font-size: 16px;
              line-height: 24px;
            }
            .retail-caption4 {
              font-size: 16px;
              font-family: Montserrat;
              line-height: 24px;
            }
            .retail-text189 {
              color: var(--dl-color-primary-100);
              font-style: normal;
              font-weight: 700;
            }
            .retail-text190 {
              color: var(--dl-color-primary-100);
              font-style: normal;
              font-weight: 700;
            }
            .retail-text194 {
              color: var(--dl-color-primary-100);
              font-style: normal;
              font-weight: 700;
            }
            .retail-text195 {
              color: var(--dl-color-primary-100);
              font-style: normal;
              font-weight: 700;
            }
            .retail-text199 {
              color: var(--dl-color-primary-100);
              font-style: normal;
              font-weight: 700;
            }
            .retail-text200 {
              color: var(--dl-color-primary-100);
              font-style: normal;
              font-weight: 700;
            }
            .retail-image7 {
              margin-top: var(--dl-layout-space-twounits);
            }
            .retail-container38 {
              display: flex;
              flex-direction: column;
            }
            .retail-container39 {
              width: 100%;
            }
            .retail-container40 {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .retail-container11 {
              height: 519px;
            }
            .retail-text107 {
              width: auto;
              font-family: Montserrat;
            }
            .retail-text108 {
              line-height: 1;
            }
            .retail-text109 {
              line-height: 1;
            }
            .retail-text110 {
              line-height: 1;
            }
            .retail-text111 {
              line-height: 1;
            }
            .retail-text112 {
              line-height: 1;
            }
            .retail-text114 {
              color: rgb(255, 255, 255);
              width: 433px;
              font-family: Montserrat;
              line-height: 1.15;
            }
            .retail-actions {
              width: 100%;
              flex-direction: column;
            }
            .retail-button1 {
              width: 100%;
            }
            .retail-heading1 {
              color: rgb(8, 42, 73);
              width: 418px;
              font-style: normal;
              margin-top: var(--dl-layout-space-twounits);
              font-family: Montserrat;
              font-weight: 700;
              line-height: 1.15;
            }
            .retail-heading2 {
              color: rgb(8, 42, 73);
              width: 433px;
              font-size: 16px;
              font-style: normal;
              font-family: Montserrat;
              font-weight: 400;
            }
            .retail-container14 {
              display: flex;
              flex-direction: column;
            }
            .retail-text139 {
              font-family: Montserrat;
            }
            .retail-content2 {
              height: 879px;
            }
            .retail-content3 {
              width: 445px;
              height: 533px;
              margin-top: var(--dl-layout-space-unit);
              padding-top: var(--dl-layout-space-halfunit);
              margin-right: 0px;
              margin-bottom: var(--dl-layout-space-threeunits);
              padding-bottom: 0px;
            }
            .retail-title1 {
              align-self: center;
              margin-top: var(--dl-layout-space-sixunits);
              padding-top: 0px;
            }
            .retail-caption1 {
              align-self: center;
              font-family: Montserrat;
            }
            .retail-text154 {
              font-family: Montserrat;
            }
            .retail-text155 {
              color: #ffffff;
            }
            .retail-caption2 {
              font-size: 16px;
              font-family: Montserrat;
              line-height: 24px;
            }
            .retail-hero-buttons {
              width: 100%;
              flex-direction: column;
            }
            .retail-container25 {
              width: 479px;
              height: 275px;
            }
            .retail-layout3492 {
              height: 1396px;
            }
            .retail-heading3 {
              font-family: Poppins;
            }
            .retail-text166 {
              font-family: Montserrat;
            }
            .retail-heading4 {
              color: rgb(8, 42, 73);
              width: 100%;
              font-size: 16px;
              font-style: normal;
              font-family: Montserrat;
              font-weight: 400;
            }
            .retail-container29 {
              display: flex;
              flex-direction: column;
            }
            .retail-content4 {
              width: 100%;
              height: 1266px;
              padding-top: var(--dl-layout-space-unit);
            }
            .retail-content5 {
              width: 452px;
              height: 569px;
              margin-top: var(--dl-layout-space-unit);
              padding-top: 0px;
              margin-bottom: var(--dl-layout-space-threeunits);
              padding-bottom: 0px;
            }
            .retail-title2 {
              width: 383px;
              align-self: center;
              margin-top: 0px;
              text-align: center;
              font-family: Montserrat;
              padding-top: 0px;
            }
            .retail-caption3 {
              color: var(--dl-color-gray-black);
              width: 100%;
              height: 100%;
              font-size: 16px;
              font-style: normal;
              font-family: Montserrat;
              font-weight: 400;
              line-height: 24px;
            }
            .retail-container33 {
              width: 436px;
              height: 50%;
              align-self: center;
            }
            .retail-caption4 {
              font-size: 16px;
              font-style: normal;
              text-align: center;
              font-family: Montserrat;
              line-height: 24px;
            }
            .retail-text189 {
              color: var(--dl-color-primary-100);
              font-weight: 700;
            }
            .retail-text190 {
              color: var(--dl-color-primary-100);
              font-weight: 700;
            }
            .retail-text194 {
              color: var(--dl-color-primary-100);
              font-weight: 700;
            }
            .retail-text195 {
              color: var(--dl-color-primary-100);
              font-weight: 700;
            }
            .retail-text199 {
              color: var(--dl-color-primary-100);
              font-weight: 700;
            }
            .retail-text200 {
              color: var(--dl-color-primary-100);
              font-weight: 700;
            }
            .retail-container34 {
              height: 378px;
            }
            .retail-layout3493 {
              height: 755px;
            }
            .retail-heading5 {
              width: 401px;
              height: 60px;
            }
            .retail-heading6 {
              width: 400px;
              height: 51px;
            }
            .retail-container38 {
              display: flex;
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

export default Retail
