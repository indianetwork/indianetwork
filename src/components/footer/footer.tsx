import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import Img, { FixedObject } from 'gatsby-image'
import Container from 'components/pages/container'
import ContainerFluid from 'components/pages/container-fluid'
import BackgroundImage from 'gatsby-background-image'
import { Link } from 'gatsby'

import Logo from '../../../content/images/footer-logo.png'

const Footer = ({ className }) => {
  const data = useStaticQuery(
    graphql`
      query {
        bg: file(name: { eq: "bg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1400) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        },
        site {
          meta: siteMetadata {
            title
            description
            siteUrl
            author
            twitter
            adsense
          }
        },
      }
    `
  )
  const meta = data.site?.meta

  // Set ImageData.
  const bg = data.bg.childImageSharp.fluid

  return (
    <div>
      <div id="footer">
        <ContainerFluid>
          <div className="col-lg-3 text-left">
            <Link to="/">
              <img src={Logo} />
            </Link>
            <p className="footer-logo-content">INFPlans.com provides innovating visitor insurance options for international travelers.</p>
          </div>
          <div className="col-lg-3">
            <h4>Navigate Our Site</h4>
            <Link to="/"><p>Home</p></Link>
            <Link to="/visitors-insurance-plans"><p>Plans</p></Link>
            <Link to="/apply"><p>Apply</p></Link>
            <Link to="/extend"><p>Extend</p></Link>
          </div>
          <div className="col-lg-3">
            <h4>Our Plans</h4>
            <Link to="/standard"><p>Standard</p></Link>
            <Link to="/elite-network"><p>Elite Network</p></Link>
            <Link to="/premier"><p>Premier</p></Link>
            <Link to="/traveler-usa"><p>Traveler USA</p></Link>
            <Link to="/bmi-travel"><p>INF BMI</p></Link>
          </div>
          <div className="col-lg-3">
            <h4>About Our Company</h4>
            <Link to="/about-us"><p>About Us</p></Link>
            <Link to="/contact-us"><p>Contact Us</p></Link>
            <Link to="/why-inf"><p>Why INF?</p></Link>
          </div>
          <div className="col-md-12 text-center">
            <ul className="list-inline">
              <li className="list-inline-item">© INFPLANS {new Date().getFullYear()}</li>
              <Link to="/privacy-policy"><li className="list-inline-item">Privacy Policy</li></Link>
              <Link to="/cookies-policy"><li className="list-inline-item">Cookies Policy</li></Link>
              <Link to="/terms-of-use"><li className="list-inline-item">Terms of Use</li></Link>
            </ul>
          </div>
        </ContainerFluid>
      </div>
    </div>

  )
}

const StyledBackgroundSection = styled(Footer)`
  width: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`

export default StyledBackgroundSection
