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
          <meta property="og:description" content="Description of the website" />

          {/* === Montserrat (carga de fuente) === */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap"
            rel="stylesheet"
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
                <span className="retail-heading2 thq-heading-2">
                  No es solo un sistema, es la ventaja competitiva que necesitas
                  para escalar tu negocio y maximizar tu rentabilidad en un
                  mercado cada vez más exigente.
                </span>
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
                <span className="retail-heading4 thq-heading-2">
            Además de SAP Business One, ofrecemos soluciones complementarias diseñadas específicamente para potenciar tu operación retail
                </span>
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
               
              </div>
            </div>
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
                <span className="retail-heading6 thq-heading-2">
                  <span>
                    Haz clic para ver si tu empresa es candidata a que
                    realicemos una asesoría sin costo.
                  </span>
                  <br></br>
                </span>
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
        
      </div>
      <style jsx>
        {`
/* ======== TIPOGRAFÍA GLOBAL (Montserrat) + H1 35px bold ======== */
:global(html), :global(body) {
  font-family: 'Montserrat', system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji","Segoe UI Emoji";
}
:global(h1) {
  font-family: 'Montserrat', system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji","Segoe UI Emoji" !important;
  font-size: 35px !important;
  font-weight: 700 !important;
  line-height: 1.2;
  letter-spacing: 0.01em;
}

/* —————————————————————————————————————————— */

  .retail-container10 {
    width: 100%;
    display: flex;
    min-height: 100vh;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
  .retail-link1,.retail-link2,.retail-link3,.retail-link4,.retail-link5 { display:inline-block; text-decoration:underline; }
  .retail-text100,.retail-text102,.retail-text103,.retail-text104,.retail-text105,.retail-text106 { display:inline-block; }

  /* ===== HERO (debajo del header y sin cortes) ===== */
  .retail-header30 {
    gap: var(--dl-layout-space-twounits);
    margin-top: var(--header-height, 96px);
    position: relative;
    width: 100%;
    min-height: 560px;
    overflow: hidden;
  }
  .retail-image1 {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .retail-container11 {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;               /* overlay a toda altura */
    display: flex;
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
    color: #fff;
    width: 666px;
    text-align: center;
    font-family: 'Montserrat';
  }
  .retail-text114 {
    color: #fff;
    width: 684px;
    text-align: center;
    font-family: 'Montserrat';
  }
  .retail-actions { gap: var(--dl-layout-space-unit); display:flex; align-items:flex-start; }
  .retail-button1 { font-family:'Montserrat'; border-width:0; border-radius: var(--dl-layout-radius-radius4); background-color: var(--dl-color-primary-300); }
  .retail-text115 { font-style: normal; text-align:center; font-family:'Montserrat'; font-weight:400; }
  .retail-text116 { color:#fff; text-align:center; font-family:'Montserrat'; }

  /* ===== Beneficios ===== */
  .retail-container12 { width:100%; display:flex; align-items:center; flex-direction:column; justify-content:center; }
  .retail-layout3491 { width:100%; display:flex; overflow:hidden; position:relative; align-items:center; flex-direction:column; justify-content:flex-start; background-color:#fff; }
  .retail-max-width2 { display:flex; align-items:center; flex-direction:column; }
  .retail-container13 { display:flex; max-width:600px; align-items:center; flex-direction:column; }
  .retail-heading1 { color:#082a49; font-style:normal; text-align:center; font-family:'Poppins'; font-weight:800; }
  .retail-heading2 { color:#082a49; width:788px; font-size:16px; font-style:normal; margin-top: var(--dl-layout-space-twounits); text-align:center; font-family:'Poppins'; font-weight:400; margin-bottom: var(--dl-layout-space-threeunits); }
  .retail-container14 { place-items:center; grid-template-rows: 1fr 1fr; grid-template-columns: 1fr 1fr 1fr; }

  /* tarjetas beneficios (misma altura) */
  .retail-container15,
  .retail-container16,
  .retail-container17,
  .retail-container18,
  .retail-container19 {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: var(--dl-layout-space-oneandhalfunits);
    background-color: var(--dl-color-theme-accent1);
    box-shadow: 2px 2px 4px 0px #d4d4d4;
    min-height: 360px;
  }
  .retail-image2,.retail-image3,.retail-image4,.retail-image5,.retail-image6 { height:42px; object-fit:cover; }
  .retail-text120,.retail-text125,.retail-text128,.retail-text133,.retail-text138 { color:#082a49; font-size:22px; font-style:normal; font-family:'Montserrat'; font-weight:700; line-height:1; }
  .retail-text121,.retail-text126,.retail-text131,.retail-text134,.retail-text139,.retail-text124,.retail-text127,.retail-text132,.retail-text137,.retail-text140 { font-family:'Montserrat'; }
  .retail-separator1,.retail-separator2,.retail-separator3,.retail-separator4,.retail-separator5 { width:100%; height:1px; background-color:#595959; }
  /* el último span (ROI/Ahorro) se ancla al fondo */
  .retail-container15 > span:last-of-type,
  .retail-container16 > span:last-of-type,
  .retail-container17 > span:last-of-type,
  .retail-container18 > span:last-of-type,
  .retail-container19 > span:last-of-type { margin-top:auto; }

  .retail-button2 {
    color:#fff; margin-top: var(--dl-layout-space-oneandhalfunits);
    font-family:'Montserrat'; border-width:0; margin-bottom: var(--dl-layout-space-twounits);
    background-color: var(--dl-color-primary-300);
  }

  /* ===== Video + texto ===== */
  .retail-content2 {
    width:100%; height:100%; display:flex; overflow:visible; max-width:100%; min-width:100%;
    align-self:flex-start; align-items:center; padding-left: var(--dl-layout-space-oneandhalfunits);
    padding-right: var(--dl-layout-space-oneandhalfunits); flex-direction:row; background-size:cover;
    justify-content:center; background-image:url('https://res.cloudinary.com/dgjtdex6w/image/upload/v1758739062/bg-video-retail_ugdqbu.jpg');
  }
  .retail-content3 {
    gap: var(--dl-layout-space-oneandhalfunits); width:546px; display:flex; z-index:20; align-items:flex-start;
    padding-top: var(--dl-layout-space-sixunits); padding-left: var(--dl-layout-space-twounits);
    padding-right: var(--dl-layout-space-twounits); flex-direction:column; padding-bottom: var(--dl-layout-space-sixunits);
    justify-content:center;
  }
  .retail-title1 { color:#fff; font-style:normal; font-family:'Montserrat'; }
  .retail-caption1 { color:#fff; font-size:18px; font-style:normal; font-family:'Montserrat'; font-weight:400; line-height:27px; }
  .retail-container20 { gap: var(--dl-layout-space-halfunit); flex:0 0 auto; display:grid; grid-template-rows:1fr; grid-template-columns: 1fr 1fr 1fr; }
  .retail-container21,.retail-container22,.retail-container23 { flex:1; height:auto; display:grid; padding: var(--dl-layout-space-halfunit); align-self:flex-start; }
  .retail-text149,.retail-text153,.retail-text157 { color:#fff; font-size:22px; font-style:normal; font-family:'Montserrat'; font-weight:700; line-height:1; margin-bottom:-30px; }
  .retail-text150,.retail-text154,.retail-text158 { text-align:left; font-family:'Montserrat'; }
  .retail-text151,.retail-text155,.retail-text159 { color:#fff; }
  .retail-caption2 { color:#fff; font-size:18px; font-style:normal; font-family:'Montserrat'; font-weight:400; line-height:27px; }
  .retail-container24 { flex:0 0 auto; width:auto; height:auto; display:flex; align-items:flex-start; justify-content:flex-start; }
  .retail-hero-buttons { gap: var(--dl-layout-space-unit); border:2px dashed rgba(120,120,120,.4); display:flex; z-index:15; margin-top: var(--dl-layout-space-unit); align-items:center; flex-direction:row; justify-content:center; }
  .retail-container25 { height:286px; }
  .retail-container26 { display:contents; }

  /* ===== Soluciones POS / PIM / Desarrollo ===== */
  .retail-container27 { width:100%; display:flex; align-items:center; flex-direction:column; justify-content:center; background-color:#e8efff; }
  .retail-layout3492 { width:100%; display:flex; overflow:hidden; position:relative; align-items:center; flex-direction:column; justify-content:flex-start; background-color:e8effff; }
  .retail-max-width3 { display:flex; align-items:center; flex-direction:column; }
  .retail-container28 { display:flex; max-width:600px; align-items:center; flex-direction:column; }
  .retail-heading3 { color:#082a49; font-style:normal; text-align:center; font-family:'Poppins'; font-weight:800; }
  .retail-heading4 { color:#082a49; width:788px; font-size:16px; font-style:normal; margin-top: var(--dl-layout-space-twounits); text-align:center; font-family:'Poppins'; font-weight:400; margin-bottom: var(--dl-layout-space-threeunits); }

  /* grid + alturas iguales */
  .retail-container29 {
    width: auto;
    height: auto;
    display: flex;
    align-self: center;
    align-items: stretch;     /* estira hijas a igual altura */
    justify-content: center;
    gap: var(--dl-layout-space-twounits);
  }
  .retail-container30,
  .retail-container31,
  .retail-container32 {
    flex: 1;
    height: auto;
    min-height: 440px;        /* misma altura mínima desktop */
    display: flex;
    align-self: center;
    box-shadow: 2px 2px 4px 0px #d4d4d4;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background-color: var(--dl-color-theme-accent1);
    padding: var(--dl-layout-space-twounits);
  }
  .retail-text168,.retail-text173,.retail-text180 { color:#082a49; font-size:22px; font-style:normal; font-family:'Montserrat'; font-weight:700; line-height:1; }
  .retail-text169,.retail-text172,.retail-text174,.retail-text177,.retail-text183,.retail-text186 { font-family:'Montserrat'; }
  .retail-text170,.retail-text175,.retail-text184 { color:#082a49; font-weight:700; }
  .retail-button3,.retail-button4,.retail-button5 { color:#fff; background-color:#082a49; font-family:'Montserrat'; margin-top:auto; } /* botón al fondo */

  
  .retail-container36 { width:100%; display:flex; align-items:center; flex-direction:column; justify-content:center; background-color:#e8efff; }
  .retail-layout3493 { width:100%; height:807px; display:flex; overflow:hidden; position:relative; align-items:center; flex-direction:column; justify-content:flex-start; background-color:#061c2d; }
  .retail-max-width4 { display:flex; align-items:center; flex-direction:column; }
  .retail-container37 { display:flex; max-width:600px; align-items:center; flex-direction:column; }
  .retail-heading5 { color:#fff; font-style:normal; text-align:center; font-family:'Poppins'; font-weight:800; }
  .retail-heading6 { color:#fff; width:788px; font-size:16px; font-style:normal; margin-top: var(--dl-layout-space-twounits); text-align:center; font-family:'Poppins'; font-weight:400; margin-bottom: var(--dl-layout-space-threeunits); }
  .retail-container38 { height:444px; display:flex; align-items:center; flex-direction:column; }
  .retail-container39,.retail-container40 {
    flex:1; width:100%; height:auto; display:flex; align-self:flex-start; align-items:center; flex-direction:column; justify-content:center; background-color: var(--dl-color-primary-500);
  }
  .retail-text206,.retail-text210 { color:#fff; height:31px; font-size:22px; font-style:normal; font-family:'Montserrat'; font-weight:700; line-height:1; }
  .retail-text207,.retail-text211 { color:#fff; text-align:center; font-family:'Montserrat'; }
  .retail-button7 { color:#fff; margin-top: var(--dl-layout-space-oneandhalfunits); font-family:'Montserrat'; margin-bottom: var(--dl-layout-space-twounits); background-color: var(--dl-color-primary-300); }

  /* ====== Tablet ====== */
  @media (max-width: 991px) {
    .retail-text107,.retail-text114,.retail-text116 { text-align:center; }
    .retail-max-width2,.retail-max-width3,.retail-max-width4 { flex-direction:column; }
    .retail-button2,.retail-button3,.retail-button4,.retail-button5,.retail-button6,.retail-button7 { margin-bottom: var(--dl-layout-space-twounits); }
    .retail-content2 { height:903px; flex-direction:column; }
    .retail-content3 { gap: var(--dl-layout-space-unit); flex:0 0 auto; width:832px; align-items:center; padding-top: var(--dl-layout-space-unit); padding-bottom:0; }
    .retail-caption1,.retail-caption2,.retail-caption3,.retail-caption4 { font-size:16px; text-align:center; }
    .retail-container25 { width:562px; height:100%; }

    /* grids 3→2 columnas */
    .retail-container14 { display:grid; grid-template-columns: 1fr 1fr; gap: var(--dl-layout-space-twounits); align-items:stretch; }
    .retail-container29 { display:grid; grid-template-columns: 1fr 1fr; gap: var(--dl-layout-space-twounits); }
    .retail-container30,.retail-container31,.retail-container32 { min-height: 420px; }
  }

  /* ====== Móvil ====== */
  @media (max-width: 767px) {
    .retail-header30 { margin-top: var(--header-height, 72px); min-height:520px; }
    .retail-container11 { height:100% !important; }

    .retail-text107 {
      width:100% !important; max-width:100%; padding-left:16px; padding-right:16px;
      text-align:center; font-size: clamp(28px, 9vw, 40px); line-height:1.1;
      white-space: normal; word-break: break-word;
    }
    .retail-text114 {
      width:100% !important; max-width:680px; padding-left:20px; padding-right:20px;
      font-size:16px; line-height:1.4; text-align:center;
    }
    .retail-actions { width:100%; justify-content:center; }
    .retail-button1 { max-width:90%; }

    /* grids 2→1 columna */
    .retail-container14 { display:flex; flex-direction:column; }
    .retail-container29 { display:flex; flex-direction:column; }
    .retail-container30,.retail-container31,.retail-container32 { min-height:auto; }

    .retail-content2 { height:803px; }
    .retail-content3 { width:692px; height:439px; padding-top: var(--dl-layout-space-threeunits); }
    .retail-container25 { width:563px; height:272px; align-self:center; }

    .retail-content4 { height:969px; flex-direction:column; }
    .retail-caption4 { font-family: 'Montserrat'; }
    .retail-image7 { margin-top: var(--dl-layout-space-twounits); }

    .retail-container38 { display:flex; flex-direction:column; }
    .retail-container39,.retail-container40 { width:100%; }
  }

  /* ====== Teléfonos chicos ====== */
  @media (max-width: 479px) {
    .retail-text107 { width:auto; }
    .retail-text114 { width:auto; line-height:1.35; }
    .retail-content2 { height:879px; }
    .retail-content3 {
      width:445px; height:533px; margin-top: var(--dl-layout-space-unit);
      padding-top: var(--dl-layout-space-halfunit); margin-right:0; margin-bottom: var(--dl-layout-space-threeunits);
      padding-bottom:0;
    }
    .retail-title1 { align-self:center; margin-top: var(--dl-layout-space-sixunits); padding-top:0; }
    .retail-container25 { width:479px; height:275px; }
    .retail-layout3492 { height:1396px; }

    .retail-heading4 { color:#082a49; width:100%; font-size:16px; font-style:normal; font-family:'Montserrat'; font-weight:400; }
    .retail-content4 { width:100%; height:1266px; padding-top: var(--dl-layout-space-unit); }
    .retail-content5 { width:452px; height:569px; margin-top: var(--dl-layout-space-unit); padding-top:0; margin-bottom: var(--dl-layout-space-threeunits); padding-bottom:0; }
    .retail-title2 { width:383px; align-self:center; margin-top:0; text-align:center; font-family:'Montserrat'; padding-top:0; }
    .retail-caption3 { color: var(--dl-color-gray-black); width:100%; height:100%; font-size:16px; font-style:normal; font-family:'Montserrat'; font-weight:400; line-height:24px; }
    .retail-container33 { width:436px; height:50%; align-self:center; }
    .retail-caption4 { font-size:16px; text-align:center; font-family:'Montserrat'; line-height:24px; }
    .retail-container34 { height:378px; }
    .retail-layout3493 { height:755px; }
    .retail-heading5 { width:401px; height:60px; }
    .retail-heading6 { width:400px; height:51px; }
    .retail-container38 { display:flex; flex-direction:column; }
  }
/* =========================
   OVERRIDES FINALES (safe)
   Pegar AL FINAL del <style jsx>
   ========================= */

/* 1) Titulares fluidos que NO se desbordan */
.retail-heading1,     /* ¿Por qué las empresas… */
.retail-heading3,     /* Nuestras Soluciones…  */

.retail-heading5 {    /* Solicita tu Asesoría… */
  width: 100%;
  max-width: 100%;
  padding-left: 16px;
  padding-right: 16px;
  text-align: center;
  overflow-wrap: anywhere;
  word-break: break-word;
  hyphens: auto;
  line-height: 1.12;
  font-size: clamp(28px, 5.2vw, 56px);
}

/* Caso de Éxito Real */
.retail-title1 {
  width: 100%;
  max-width: 100%;
  padding-left: 16px;
  padding-right: 16px;
  text-align: center;
  overflow-wrap: anywhere;
  word-break: break-word;
  hyphens: auto;
  line-height: 1.15;
  font-size: clamp(28px, 6.2vw, 48px);
}

/* Párrafos bajo titulares largos (evita off-canvas) */
.retail-heading2,
.retail-heading4 {
  width: 100%;
  max-width: 980px;
  padding-left: 16px;
  padding-right: 16px;
  margin-left: auto;
  margin-right: auto;
}

/* 2) Botones en tarjetas POS / PIM / Desarrollo al 100% (como Home) */
.retail-container30,
.retail-container31,
.retail-container32 {
  display: flex;
  flex-direction: column;    /* asegura que el botón pueda ir abajo */
}

.retail-button3,
.retail-button4,
.retail-button5 {
  display: block;
  width: 100%;
  align-self: stretch;       /* ocupa todo el ancho del card */
  margin-top: auto;          /* se pega al fondo del card */
  margin-left: 0;
  margin-right: 0;
  padding: 14px 20px;
  height: auto;
  border-radius: 10px;
}

/* 4) Hero estable en móvil (por si la fuente crece) */
@media (max-width: 767px) {
  .retail-header30 {
    margin-top: var(--header-height, 72px);
    min-height: 520px;
  }
  .retail-container11 { height: 100% !important; }

  .retail-text107 { /* título del hero */
    width: 100% !important;
    padding-left: 16px;
    padding-right: 16px;
    font-size: clamp(28px, 9vw, 40px);
    line-height: 1.1;
    overflow-wrap: anywhere;
    word-break: break-word;
    text-align: center;
  }
  .retail-text114 { /* párrafo hero */
    width: 100% !important;
    padding-left: 20px;
    padding-right: 20px;
    font-size: 16px;
    line-height: 1.4;
    text-align: center;
  }
  .retail-actions { width: 100%; justify-content: center; }
  .retail-button1 { max-width: 90%; }
}

/* 5) Títulos aún más contenidos en pantallas chicas */
@media (max-width: 767px) {
  .retail-heading1,
  .retail-heading3,
  .retail-title2,
  .retail-heading5 {
    font-size: clamp(26px, 8.5vw, 40px);
    line-height: 1.15;
  }
  .retail-title1 {
    font-size: clamp(24px, 8vw, 38px);
    line-height: 1.2;
  }
}
/* ================================
   OVERRIDES #2 (safe + mínimos)
   ================================ */

/* 1) Titulares sin cortes raros (no separar “empresas”) */
.retail-heading1,     /* ¿Por qué… */
.retail-heading3,     /* Nuestras Soluciones… */
.retail-heading5,     /* Solicita tu Asesoría… */
.retail-title1 {      /* Caso de Éxito Real */
  /* evita guiones y particiones agresivas */
  word-break: normal !important;
  overflow-wrap: normal !important;
  hyphens: none !important;
  /* distribuye mejor el texto en varias líneas (si el navegador lo soporta) */
  text-wrap: balance;
}

/* mantenemos tamaños fluidos definidos antes */
.retail-heading1,
.retail-heading3,
.retail-title2,
.retail-heading5 {
  line-height: 1.12;
  font-size: clamp(28px, 5.2vw, 56px);
}
.retail-title1 {
  line-height: 1.15;
  font-size: clamp(28px, 6.2vw, 48px);
}

@media (max-width: 767px) {
  .retail-heading1,
  .retail-heading3,
  .retail-title2,
  .retail-heading5 { font-size: clamp(26px, 8.5vw, 40px); line-height: 1.15; }
  .retail-title1 { font-size: clamp(24px, 8vw, 38px); line-height: 1.2; }
}

/* 2) “Caso de Éxito Real”: que NO se corte el texto
      y que el video quede bien debajo */
.retail-content2 {            /* el bloque con el fondo azul y el texto */
  height: auto !important;    /* quita alturas fijas que recortan contenido */
  padding-top: 56px;          /* aire arriba */
  padding-bottom: 40px;       /* aire antes del video */
}
.retail-caption1 {            /* párrafo largo de la cita */
  max-width: 980px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 16px;
  padding-right: 16px;
  line-height: 1.5;
}

/* Video responsivo (iframe de YouTube) */
.retail-container26 iframe {
  width: 100% !important;
  height: auto !important;
  aspect-ratio: 16/9;         /* mantiene proporción */
  display: block;
}
.retail-container25 {         /* contenedor del video */
  width: 100%;
  height: auto !important;
  margin-top: 16px;           /* separa del texto de arriba */
}

/* (Se mantienen los botones 100% ancho en POS/PIM/Desarrollo del override anterior) */
/* ================================
   OVERRIDES #3 – Caso de Éxito Real
   ================================ */

/* Contenedor de la sección (mantener centrado y sin scroll lateral) */
.retail-content2 {
  /* desktop: dos columnas centradas */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  gap: 48px;                 /* espacio entre texto y video */
  padding: 64px 24px;        /* aire arriba/abajo/lados */
  overflow-x: hidden;        /* evita “desplazamiento a la derecha” */
  height: auto !important;   /* nada de recortes por altura fija */
}

/* Columna de texto (ancho controlado y centrado) */
.retail-content3 {
  flex: 0 1 560px;
  max-width: 560px;
  align-items: center;       /* centra contenido dentro de la columna */
  text-align: center;
  padding: 0;                /* evita desplazamientos raros */
}

/* Párrafo largo de la cita (no se corta y queda centrado) */
.retail-caption1 {
  max-width: 560px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 16px;
  padding-right: 16px;
  line-height: 1.45;
  word-break: normal !important;
  overflow-wrap: normal !important;
  hyphens: none !important;
  text-wrap: balance;
}

/* Columna del video (ancho fijo y RESPONSIVE dentro) */
.retail-container25 {
  flex: 0 1 720px;           /* target ~1280x720 */
  max-width: min(100%, 720px);
  height: auto !important;
}

/* Iframe responsive (sin desbordes) */
.retail-container26 iframe {
  display: block;
  width: 100% !important;
  height: auto !important;
  aspect-ratio: 16 / 9;      /* mantiene proporción */
  border: 0;
}

/* ====== Responsive ====== */
@media (max-width: 991px) {
  .retail-content2 {
    flex-direction: column;  /* texto arriba, video abajo */
    gap: 24px;
    padding: 48px 16px;
  }
  .retail-content3,
  .retail-container25 {
    flex: 0 1 100%;
    max-width: 100%;
  }
}
/* ================================
   OVERRIDES #3.1 – Caso de Éxito (desktop)
   ================================ */

/* Contenedor de la sección: 2 columnas centradas y con ancho controlado */
.retail-content2 {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;

  max-width: 1200px;       /* límite de ancho general */
  margin: 0 auto;          /* centra el bloque en la página */
  gap: 40px;               /* espacio entre texto y video */
  padding: 64px 24px;      /* aire interno */
  height: auto !important;
  overflow-x: hidden;      /* evita scroll lateral por el iframe */
}

/* Columna de texto: izquierda y ancho fijo cómodo */
.retail-content3 {
  flex: 0 1 520px;
  max-width: 520px;
  align-items: flex-start; /* alinea contenido a la izquierda */
  text-align: left;
  padding: 0;
}

/* Aseguramos alineación a la izquierda en subtítulos y párrafos del bloque */
.retail-title1,
.retail-caption1,
.retail-caption2 {
  text-align: left;
}

/* Las mini cards (+35%, $400K, etc.) alineadas a la izquierda */
.retail-container20 {
  justify-items: start;
}

/* Columna del video: ancho que no se sale */
.retail-container25 {
  flex: 0 1 640px;               /* ancho objetivo del video */
  max-width: min(100%, 640px);   /* no excede contenedor */
  height: auto !important;
}

/* Iframe responsive y sin desbordes */
.retail-container26 iframe {
  display: block;
  width: 100% !important;
  height: auto !important;
  aspect-ratio: 16 / 9;
  border: 0;
}

/* Responsive: en ≤991px vuelve a una sola columna (texto arriba, video abajo) */
@media (max-width: 991px) {
  .retail-content2 {
    flex-direction: column;
    gap: 24px;
    padding: 48px 16px;
  }
  .retail-content3,
  .retail-container25 {
    flex: 0 1 100%;
    max-width: 100%;
  }
}
/* ================================
   OVERRIDES #3.2 – Video sin desbordar
   ================================ */

/* Sección: ancho controlado y SIN scroll lateral */
.retail-content2 {
  width: 100%;                 /* ocupa el ancho disponible */
  max-width: 1200px;           /* límite del bloque */
  margin: 0 auto;              /* centrado del bloque completo */
  box-sizing: border-box;
  overflow-x: hidden;          /* recorta cualquier sobrante interno */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  gap: 40px;
  padding: 64px 24px;
  height: auto !important;
}

/* Columna de texto: alineada a la izquierda (desktop) */
.retail-content3 {
  flex: 0 1 520px;
  max-width: 520px;
  align-items: flex-start;
  text-align: left;
  padding: 0;
}

/* Asegura alineación izquierda en todos los textos del bloque */
.retail-title1,
.retail-caption1,
.retail-caption2 {
  text-align: left;
}

/* Columna del video: NO se sale del contenedor */
.retail-container25 {
  flex: 0 1 640px;                          /* ancho objetivo del video */
  width: min(100%, 640px);                  /* nunca excede su columna */
  max-width: min(100%, calc(100vw - 64px)); /* ni la ventana (resta paddings) */
  box-sizing: border-box;
  overflow: hidden;                         /* recorta si algo intenta salir */
}

/* Wrapper del iframe (por si el Script lo envuelve) */
.retail-container26 {
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
}

/* Iframe 100% responsivo y sin desbordes */
.retail-container26 iframe {
  display: block;
  width: 100% !important;
  height: auto !important;
  aspect-ratio: 16 / 9;
  max-width: 100%;
  border: 0;
}

/* Responsive: stack en una columna sin desbordes */
@media (max-width: 991px) {
  .retail-content2 {
    flex-direction: column;
    gap: 24px;
    padding: 48px 16px;
  }
  .retail-content3,
  .retail-container25 {
    flex: 0 1 100%;
    max-width: 100%;
    width: 100%;
  }
}
/* =========================================
   Caso de Éxito – versión final y limpia
   ========================================= */

/* Sección: 2 columnas, centrada y sin desbordes */
.retail-content2{
  display:flex;
  flex-direction:row;
  align-items:flex-start;
  justify-content:center;
  gap:40px;

  width:100%;
  max-width:1200px;
  margin:0 auto;
  padding:64px 24px;
  box-sizing:border-box;

  /* evita scrollbar horizontal por contenido interno */
  overflow-x: clip;  /* (fallback moderno de hidden para evitar “pulsos”) */
  height:auto !important;
}

/* Columna de texto (izquierda en desktop) */
.retail-content3{
  flex:0 1 520px;
  max-width:520px;
  align-items:flex-start;
  text-align:left;
  padding:0;          /* quita paddings que desalineen */
}

/* Título + párrafos del bloque (alineados a la izq) */
.retail-title1,
.retail-caption1,
.retail-caption2{
  text-align:left;
}

/* Cita larga legible y sin cortes raros */
.retail-caption1{
  line-height:1.45;
  word-break:normal !important;
  overflow-wrap:normal !important;
  hyphens:none !important;
  text-wrap:balance;
}

/* Columna del video: NO se sale del contenedor */
.retail-container25{
  flex:0 1 640px;             /* ancho objetivo en desktop */
  max-width:640px;
  width:100%;
  overflow:hidden;            /* recorta si algo intenta salir */
  box-sizing:border-box;
}

/* Wrapper RESPONSIVE con técnica clásica (sin depender de aspect-ratio) */
.retail-container26{
  position:relative;
  width:100%;
  max-width:100%;
  height:0;
  padding-top:56.25%;         /* 16:9 => 9/16 = 56.25% */
  overflow:hidden;
}

/* Iframe ocupa el wrapper al 100%, sin desbordes */
.retail-container26 iframe{
  position:absolute;
  inset:0;
  width:100% !important;
  height:100% !important;
  max-width:100%;
  border:0;
  display:block;
}

/* Responsive: una sola columna sin desbordes */
@media (max-width: 991px){
  .retail-content2{
    flex-direction:column;
    gap:24px;
    padding:48px 16px;
  }
  .retail-content3,
  .retail-container25{
    flex:0 1 100%;
    max-width:100%;
    width:100%;
  }
}
/* ====== Anti-scroll horizontal solo en Retail ====== */
.retail-container10 {           /* wrapper raíz de la página */
  max-width: 100%;
  overflow-x: clip;             /* clip es más preciso que hidden */
}

/* La sección del caso de éxito y contenedores cercanos */
.retail-content2,
.retail-container25,
.retail-container26 {
  max-width: 100%;
  box-sizing: border-box;
  overflow-x: hidden;           /* por si algún hijo intenta “salirse”  */
}

/* Evita que cualquier ancho calcule más que el viewport por padding */
.retail-content2 { 
  width: 100%;
}

/* Termina de neutralizar “empujones” del iframe de YouTube */
.retail-container26 {
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 56.25%;          /* 16:9 */
  overflow: hidden;
}

.retail-container26 iframe {
  position: absolute;
  inset: 0;
  width: 100% !important;
  height: 100% !important;
  display: block;
  border: 0;
}

/* Como red de seguridad (opcional): evita barra horizontal global solo en esta ruta */
:global(body) {
  overflow-x: hidden;
}

/* ==== POS / PIM — versión compacta ==== */
.retail-container29 {
  gap: 16px; /* menos espacio entre tarjetas */
}

.retail-container30,
.retail-container31,
.retail-container32 {
  display: flex;
  flex-direction: column;
  justify-content: flex-start !important; /* nada de space-between */
  /* elige UNA de estas dos líneas según lo que prefieras */
  min-height: unset !important;           /* 1) sin altura mínima (más compacto) */
  /* min-height: 360px !important;       /* 2) igual altura pero menor que 440px */

  padding: 20px 24px !important;          /* menos aire interno */
  gap: 10px;                               /* separación corta entre elementos */
}

.retail-container30 .thq-heading-2,
.retail-container31 .thq-heading-2,
.retail-container32 .thq-heading-2 {
  margin: 0 0 8px 0;                      /* título con margen corto */
}

.retail-text169,
.retail-text174,
.retail-text172,
.retail-text177 {
  display: block;
  margin-top: 6px;                        /* subtítulo y párrafo pegados */
  line-height: 1.45;
}

.retail-button3,
.retail-button4,
.retail-button5 {
  width: 100%;
  align-self: stretch;
  margin-top: 12px !important;            /* poco espacio antes del botón */
  padding: 12px 16px;                      /* botón más contenido */
  border-radius: 10px;
}
  /* ===== Botón POS/PIM — no full width en desktop ===== */
.retail-button3,
.retail-button4,
.retail-button5 {
  display: inline-block;
  width: auto;
  align-self: center;   /* centrado dentro de la tarjeta */
  padding: 12px 28px;   /* tamaño cómodo */
  margin-top: 12px;
  border-radius: 10px;
}

/* En tablets y móviles (≤991px) que sí ocupen todo el ancho */
@media (max-width: 991px) {
  .retail-button3,
  .retail-button4,
  .retail-button5 {
    display: block;
    width: 100%;
    align-self: stretch;
  }
}
/* ===== Ajuste sección "Solicita tu Asesoría Gratuita" en mobile ===== */
@media (max-width: 767px) {
  .retail-heading5 {   /* Título */
    font-size: 26px !important;
    line-height: 1.2 !important;
    text-align: center;
    padding: 0 12px;
  }

  .retail-heading6 {   /* Párrafo */
    font-size: 15px !important;
    line-height: 1.4 !important;
    text-align: center;
    width: 100% !important;
    max-width: 90%;       /* no pegue a bordes */
    margin: 12px auto 24px auto;
    padding: 0 12px;
  }
}
/* === Caso de Éxito – KPIs apilados y centrados === */
@media (max-width: 767px) {
  .retail-container20 {
    display: flex !important;
    flex-direction: column !important;   /* apilados */
    align-items: center !important;      /* centrados horizontal */
    justify-content: center !important;  /* centrados vertical */
    gap: 12px !important;                /* espacio parejo */
    text-align: center !important;
    margin: 0 auto !important;
  }

  .retail-container21,
  .retail-container22,
  .retail-container23 {
    width: 100% !important;
    max-width: 240px !important;
    display: flex !important;
    flex-direction: column;
    align-items: center !important;
    justify-content: center !important;
    text-align: center !important;
    margin: 0 auto !important;
  }

  .retail-text149,
  .retail-text153,
  .retail-text157,
  .retail-text150,
  .retail-text154,
  .retail-text158 {
    text-align: center !important;
    margin: 0 auto !important;
  }
}
/* === Caso de Éxito – centrar TODO en mobile === */
@media (max-width: 767px) {
  .retail-title1,     /* Caso de Éxito Real */
  .retail-caption1,   /* Cita larga */
  .retail-caption2,   /* Bullets */
  .retail-container20,
  .retail-container21,
  .retail-container22,
  .retail-container23 {
    text-align: center !important;
    margin-left: auto !important;
    margin-right: auto !important;
  }

  .retail-content3 {
    align-items: center !important;
    text-align: center !important;
  }

  /* bullets bien centrados */
  .retail-caption2 {
    display: flex;
    flex-direction: column;
    align-items: center !important;
    justify-content: center !important;
    gap: 4px;
  }
}
/* === Botones: fondo #f59f11; texto blanco, Montserrat y bold === */
.retail-button1,
.retail-button2,
.retail-button3,
.retail-button4,
.retail-button5,
.retail-button7 {
  background-color: #f59f11 !important;
  color: #ffffff !important;
  font-family: 'Montserrat', system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji","Segoe UI Emoji" !important;
  font-weight: 700 !important;
  border: 0 !important;
}

/* Asegurar spans internos (si el texto va dentro de <span>) */
.retail-button1 span,
.retail-button2 span,
.retail-button3 span,
.retail-button4 span,
.retail-button5 span,
.retail-button7 span {
  color: #ffffff !important;
  font-weight: 700 !important;
  font-family: 'Montserrat', system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji","Segoe UI Emoji" !important;
}

/* Estados de interacción */
.retail-button1:hover,
.retail-button2:hover,
.retail-button3:hover,
.retail-button4:hover,
.retail-button5:hover,
.retail-button7:hover { background-color: #d98c0f !important; }

.retail-button1:active,
.retail-button2:active,
.retail-button3:active,
.retail-button4:active,
.retail-button5:active,
.retail-button7:active { background-color: #bf7a0d !important; }

.retail-button1:focus-visible,
.retail-button2:focus-visible,
.retail-button3:focus-visible,
.retail-button4:focus-visible,
.retail-button5:focus-visible,
.retail-button7:focus-visible {
  outline: 2px solid #ffffff !important;
  outline-offset: 2px !important;
}


        `}
      </style>
    </>
  )
}

export default Retail

