import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import Img, { FixedObject } from 'gatsby-image'
import Container from 'components/pages/container'
import ContainerFluid from 'components/pages/container-fluid'
import BackgroundImage from 'gatsby-background-image'
import { Link } from 'gatsby'
import IframeResizer from 'iframe-resizer-react'

const DiplomatAmericaForm = ({ action, ...props }) => {
  const data = useStaticQuery ( graphql`
    query DiplomatAmericaFormQuery {
      site {
        siteMetadata {
          backendUrl
        }
      }
    }
  `
  )
  const backendUrl = data.site.siteMetadata.backendUrl
  const diplomatAmericaUrl = backendUrl + "/insurance-application/quote.php"
  return (
    <div id="diplomat-america-form-container">
      <IframeResizer
        log
        src={diplomatAmericaUrl}
        style={{ width: '1px', minWidth: '100%', border: 'none'}}
        heightCalculationMethod= "lowestElement"
      />
    </div>
  )
}
export default DiplomatAmericaForm
