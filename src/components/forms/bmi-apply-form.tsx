import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import Img, { FixedObject } from 'gatsby-image'
import Container from 'components/pages/container'
import ContainerFluid from 'components/pages/container-fluid'
import BackgroundImage from 'gatsby-background-image'
import { Link } from 'gatsby'
import IframeResizer from 'iframe-resizer-react'

const BmiApplyForm = ({ action, ...props }) => {
  
  const data = useStaticQuery ( graphql`
    query BMIApplyQuery {
      site {
        siteMetadata {
          backendUrl
        }
      }
    }
  `
  )
  const backendUrl = data.site.siteMetadata.backendUrl
  const bmiApplyFormUrl = backendUrl + "/bmi-travel/index.php"

  return (
    <div id="bmi-apply-form-container">
      <IframeResizer
        log
        src={bmiApplyFormUrl}
        style={{ width: '1px', minWidth: '100%', minHeight: '680px',border: 'none'}}
        heightCalculationMethod= "lowestElement"
        scrolling="auto"
      />
      {/*<div className="embed-container">
        <iframe src="https://sec.infplans.com/forms/bmi-travel-plan-application.php" id="bmi-apply-form" scrolling="no"></iframe>
      </div>*/}
    </div>
  )
}
export default BmiApplyForm

