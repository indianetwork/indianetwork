import { graphql } from 'gatsby'
import Img, { FixedObject } from 'gatsby-image'
import { Link } from 'gatsby'
import React from 'react'
import Meta from 'components/meta/meta'
import Layout from 'components/layout/layout'
import styled from 'styled-components'
import Container from 'components/pages/container'
import ContainerFluid from 'components/pages/container-fluid'
import BackgroundImage from 'gatsby-background-image'
import ButtonBlack from 'components/button/button-black'

interface Props {
  location: Location
}

const ThankYouContactPage: React.FC<Props> = ({ data, location }: Props) => {
  const meta = data.site?.meta
  const hero = data.hero?.childImageSharp?.fluid
  const hero_background = data.hero_background?.childImageSharp?.fluid

  return (
    <Layout location={location}>
      <Meta site={meta} title="Thank You" />
      <BackgroundImage
        Tag="section"
        className="thank-you-hero-section-bg"
        fluid={hero_background}
        alt="thank you"
      >
        <div id="thank-you-hero-section">
          <Container>
            <div className="col-lg-12">
              <h1 className="text-white text-center">
                THANK YOU!
              </h1>
              <p className="hero-text text-white text-center">
                One of our team members will be reaching out to you shortly
              </p>
              <Link to="/"><button className="hero-btn"> Back to Home </button></Link>
            </div>
          </Container>
        </div>
      </BackgroundImage>
    </Layout>
  )
}

export default ThankYouContactPage

export const query = graphql`
  query ThankYouContactPageQuery {
    site {
      meta: siteMetadata {
        title
        description
        siteUrl
      }
    },
    hero_background: file(name: { eq: "thank-you-hero-bg" }) {
      childImageSharp {
        fluid(maxWidth: 1400, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
  }
`
