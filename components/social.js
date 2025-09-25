import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Social = (props) => {
  return (
    <>
      <div className={`social-social ${props.rootClassName} `}>
        <img
          alt="www.google.com"
          src="/pastedimage-9nha.svg"
          className="social-insider"
        />
      </div>
      <style jsx>
        {`
          .social-social {
            cursor: pointer;
            display: flex;
            padding: var(--dl-layout-space-unit);
            position: relative;
            transition: 0.3s;
            align-items: flex-start;
            padding-left: 16px;
            border-radius: var(--dl-layout-radius-radius8);
            flex-direction: column;
            padding-bottom: 16px;
            justify-content: flex-start;
            background-color: rgba(236, 233, 234, 0.2);
          }
          .social-social:hover {
            background-color: rgba(236, 233, 234, 0.6);
          }
          .social-insider {
            width: 18px;
            height: 18px;
          }

          @media (max-width: 767px) {
            .social-social {
              padding: 12px;
            }
          }
        `}
      </style>
    </>
  )
}

Social.defaultProps = {
  rootClassName: '',
}

Social.propTypes = {
  rootClassName: PropTypes.string,
}

export default Social
