import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Features4 = (props) => {
  return (
    <>
      <div className="features4-layout301 thq-section-padding">
        <div className="features4-max-width thq-section-max-width">
          <h2 className="features4-text10 thq-heading-2">
            {props.sectionTitle ?? (
              <Fragment>
                <span className="features4-text23">Features</span>
              </Fragment>
            )}
          </h2>
          <div className="features4-row thq-grid-auto-300">
            <div className="features4-feature1">
              <img
                alt={props.feature1ImageAlt}
                src={props.feature1ImageSrc}
                className="thq-img-ratio-4-3"
              />
              <div className="features4-content1 thq-flex-column">
                <div className="features4-section-title1 thq-flex-column">
                  <h3 className="features4-title1 thq-heading-3">
                    {props.feature1Title ?? (
                      <Fragment>
                        <span className="features4-text18">Web Design</span>
                      </Fragment>
                    )}
                  </h3>
                  <span className="features4-description1 thq-body-small">
                    {props.feature1Description ?? (
                      <Fragment>
                        <span className="features4-text21">
                          Professional and customized web design services
                          tailored to your needs.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="features4-action5 thq-flex-row">
                  <button className="thq-button-flat">
                    <span className="thq-body-small">
                      {props.feature1Button ?? (
                        <Fragment>
                          <span className="features4-text20">Learn More</span>
                        </Fragment>
                      )}
                    </span>
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M426 256l256 256-256 256-60-60 196-196-196-196z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="features4-feature2">
              <img
                alt={props.feature2ImageAlt}
                src={props.feature2ImageSrc}
                className="thq-img-ratio-4-3"
              />
              <div className="features4-content2 thq-flex-column">
                <div className="features4-section-title2 thq-flex-column">
                  <strong className="features4-title2 thq-heading-3">
                    {props.feature2Title ?? (
                      <Fragment>
                        <span className="features4-text13">Prototyping</span>
                      </Fragment>
                    )}
                  </strong>
                  <span className="features4-description2 thq-body-small">
                    {props.feature2Description ?? (
                      <Fragment>
                        <span className="features4-text11">
                          Interactive prototyping to visualize and refine your
                          ideas before development.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="features4-action6 thq-flex-row">
                  <button className="thq-button-flat">
                    <span className="thq-body-small">
                      {props.feature2Button ?? (
                        <Fragment>
                          <span className="features4-text17">
                            Discover More
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M426 256l256 256-256 256-60-60 196-196-196-196z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="features4-feature3">
              <img
                alt={props.feature3ImageAlt}
                src={props.feature3ImageSrc}
                className="thq-img-ratio-4-3"
              />
              <div className="features4-content3 thq-flex-column">
                <div className="features4-section-title3 thq-flex-column">
                  <strong className="features4-title3 thq-heading-3">
                    {props.feature3Title ?? (
                      <Fragment>
                        <span className="features4-text14">
                          Static Site Generator
                        </span>
                      </Fragment>
                    )}
                  </strong>
                  <span className="features4-description3 thq-body-small">
                    {props.feature3Description ?? (
                      <Fragment>
                        <span className="features4-text12">
                          Efficient static site generation for fast and secure
                          websites.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="features4-action7 thq-flex-row">
                  <button className="thq-button-flat">
                    <span className="thq-body-small">
                      {props.feature3Button ?? (
                        <Fragment>
                          <span className="features4-text19">Explore Now</span>
                        </Fragment>
                      )}
                    </span>
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M426 256l256 256-256 256-60-60 196-196-196-196z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="features4-feature4">
              <img
                alt={props.feature4ImageAlt}
                src={props.feature4ImageSrc}
                className="thq-img-ratio-4-3"
              />
              <div className="features4-content4 thq-flex-column">
                <div className="features4-section-title4 thq-flex-column">
                  <strong className="features4-title4 thq-heading-3">
                    {props.feature4Title ?? (
                      <Fragment>
                        <span className="features4-text15">
                          Financial Services
                        </span>
                      </Fragment>
                    )}
                  </strong>
                  <span className="features4-description4 thq-body-small">
                    {props.feature4Description ?? (
                      <Fragment>
                        <span className="features4-text22">
                          Comprehensive financial solutions to support your
                          business growth.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="features4-action8 thq-flex-row">
                  <button className="thq-button-flat">
                    <span className="thq-body-small">
                      {props.feature4Button ?? (
                        <Fragment>
                          <span className="features4-text16">Get Started</span>
                        </Fragment>
                      )}
                    </span>
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M426 256l256 256-256 256-60-60 196-196-196-196z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .features4-layout301 {
            gap: var(--dl-layout-space-fiveunits);
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
          }
          .features4-max-width {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .features4-text10 {
            text-align: center;
          }
          .features4-row {
            width: 100%;
          }
          .features4-feature1 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: auto;
            display: flex;
            overflow: hidden;
            max-width: 600px;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .features4-content1 {
            align-self: stretch;
            align-items: center;
          }
          .features4-section-title1 {
            align-self: stretch;
            align-items: center;
          }
          .features4-title1 {
            text-align: center;
          }
          .features4-description1 {
            text-align: center;
          }
          .features4-action5 {
            align-self: stretch;
            align-items: stretch;
            justify-content: center;
          }
          .features4-feature2 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: auto;
            display: flex;
            overflow: hidden;
            max-width: 600px;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .features4-content2 {
            align-self: stretch;
            align-items: center;
          }
          .features4-section-title2 {
            align-self: stretch;
            align-items: center;
          }
          .features4-title2 {
            text-align: center;
          }
          .features4-description2 {
            text-align: center;
          }
          .features4-action6 {
            align-self: stretch;
            align-items: stretch;
            justify-content: center;
          }
          .features4-feature3 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: auto;
            display: flex;
            overflow: hidden;
            max-width: 600px;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .features4-content3 {
            align-self: stretch;
            align-items: center;
          }
          .features4-section-title3 {
            align-self: stretch;
            align-items: center;
          }
          .features4-title3 {
            text-align: center;
          }
          .features4-description3 {
            text-align: center;
          }
          .features4-action7 {
            align-self: stretch;
            align-items: stretch;
            justify-content: center;
          }
          .features4-feature4 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: auto;
            display: flex;
            overflow: hidden;
            max-width: 600px;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .features4-content4 {
            align-self: stretch;
            align-items: center;
          }
          .features4-section-title4 {
            align-self: stretch;
            align-items: center;
          }
          .features4-title4 {
            text-align: center;
          }
          .features4-description4 {
            text-align: center;
          }
          .features4-action8 {
            align-self: stretch;
            align-items: stretch;
            justify-content: center;
          }
          .features4-text11 {
            display: inline-block;
          }
          .features4-text12 {
            display: inline-block;
          }
          .features4-text13 {
            display: inline-block;
          }
          .features4-text14 {
            display: inline-block;
          }
          .features4-text15 {
            display: inline-block;
          }
          .features4-text16 {
            display: inline-block;
          }
          .features4-text17 {
            display: inline-block;
          }
          .features4-text18 {
            display: inline-block;
          }
          .features4-text19 {
            display: inline-block;
          }
          .features4-text20 {
            display: inline-block;
          }
          .features4-text21 {
            display: inline-block;
          }
          .features4-text22 {
            display: inline-block;
          }
          .features4-text23 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .features4-row {
              width: auto;
              align-items: center;
              flex-direction: column;
            }
            .features4-feature1 {
              width: 100%;
            }
            .features4-feature2 {
              width: 100%;
            }
            .features4-feature3 {
              width: 100%;
            }
            .features4-feature4 {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .features4-text10 {
              text-align: center;
            }
          }
          @media (max-width: 479px) {
            .features4-max-width {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

Features4.defaultProps = {
  feature2ImageAlt: 'Prototyping Image',
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1633892798304-851c3c69abbd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1NzcwODg4NXw&ixlib=rb-4.1.0&q=80&w=1080',
  feature2Description: undefined,
  feature3Description: undefined,
  feature2Title: undefined,
  feature3Title: undefined,
  feature4Title: undefined,
  feature4ImageSrc:
    'https://images.unsplash.com/photo-1618044619888-009e412ff12a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1NzcwODg4NHw&ixlib=rb-4.1.0&q=80&w=1080',
  feature1ImageAlt: 'Web Design Image',
  feature3ImageAlt: 'Static Site Generator Image',
  feature4Button: undefined,
  feature2Button: undefined,
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1699627769029-eded3a26c575?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1NzcwODg4NXw&ixlib=rb-4.1.0&q=80&w=1080',
  feature1Title: undefined,
  feature4ImageAlt: 'Financial Services Image',
  feature3Button: undefined,
  feature1Button: undefined,
  feature1Description: undefined,
  feature4Description: undefined,
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1703817855495-718f7e1d7f6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1NzcwODg4NXw&ixlib=rb-4.1.0&q=80&w=1080',
  sectionTitle: undefined,
}

Features4.propTypes = {
  feature2ImageAlt: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
  feature2Description: PropTypes.element,
  feature3Description: PropTypes.element,
  feature2Title: PropTypes.element,
  feature3Title: PropTypes.element,
  feature4Title: PropTypes.element,
  feature4ImageSrc: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  feature4Button: PropTypes.element,
  feature2Button: PropTypes.element,
  feature1ImageSrc: PropTypes.string,
  feature1Title: PropTypes.element,
  feature4ImageAlt: PropTypes.string,
  feature3Button: PropTypes.element,
  feature1Button: PropTypes.element,
  feature1Description: PropTypes.element,
  feature4Description: PropTypes.element,
  feature3ImageSrc: PropTypes.string,
  sectionTitle: PropTypes.element,
}

export default Features4
