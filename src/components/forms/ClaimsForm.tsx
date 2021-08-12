import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import Img, { FixedObject } from 'gatsby-image'
import Container from 'components/pages/container'
import ContainerFluid from 'components/pages/container-fluid'
import BackgroundImage from 'gatsby-background-image'
import { Link } from 'gatsby'
import IframeResizer from 'iframe-resizer-react'

const ClaimsForm = ({ action, ...props }) => {

  const data = useStaticQuery ( graphql`
    query ClaimsFormQuery {
      site {
        siteMetadata {
          title
          backendUrl
        }
      }
    }
  `
  )
  const backendUrl = data.site.siteMetadata.backendUrl
  const claimsFormUrl = backendUrl + "/memberHub/logIn/claims.php"

  return (
    <div id="claims-form-container">
      <IframeResizer
        log
        src={claimsFormUrl}
        style={{ width: '1px', minWidth: '100%', border: 'none'}}
      />
      {/*<div className="embed-container">
        <iframe src="https://sec.infplans.com/forms/claims-form.php" id="claims-form" scrolling="no"></iframe>
      </div>*/}
    </div>
  )
}
export default ClaimsForm
