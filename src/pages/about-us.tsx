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
import { Helmet } from 'react-helmet'

interface Props {
  location: Location
}

const AboutPage: React.FC<Props> = ({ data, location }: Props) => {
  const meta = data.site?.meta
  const hero_background = data.hero_background?.childImageSharp?.fluid
  const infplans_big_logo = data.infplans_big_logo?.childImageSharp?.fluid
  const phoneNumber = meta.phoneNumber
  const emailAddress = meta.emailAddress
  const emailAddressUrl = "mailto:"+emailAddress
  const phoneNumberUrl = "tel:"+phoneNumber

  return (
    <Layout location={location}>
      <Helmet>
        <title>About Us - INF Visitor Insurance</title>
        <meta property="og:site_name" content="INF Visitor Insurance"/>
        <meta name="description" content="INF Visitor Insurance: This article explains who INF Visitor Insurance is, what it stands for, and the products it offers."/>
        <meta name="keywords" content="INF visitor insurance, insurance for traveling parents, insurance for visiting parents with pre-existing conditions, visitor insurance, visitor medical insurance"/>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Helmet>
      <BackgroundImage
        Tag="section"
        className="about-hero-section-bg"
        fluid={hero_background}
        backgroundColor={`#e9f4f8`}
        alt="about hero background"
      >
        <div id="about-hero-section">
          <Container>
            <div className="col-lg-12">
              <h1 className="text-white text-center">
                ABOUT US
              </h1>
              <Link to="/inf-easy-select"><button className="hero-btn"> Get a Quote </button></Link>
            </div>
          </Container>
        </div>
      </BackgroundImage>

      <section id="about-section-1">
        <Container>
          <div className="col-lg-12">
            <div className="about-container">
              <h2 className="text-blue text-center">About INF IVAS Insurance</h2>
              <Img fluid={infplans_big_logo} className="big-logo"/>
              <p>INF is an organization that provides innovative international visitor accident and sickness (IVAS) insurance options for international travelers as well as various non insurance benefits. We provide international visitor accident & sickness insurance for visiting parents, relatives, students, and temporary workers traveling outside of their home country to the United States, Canada or Mexico. INF provides some plan options which can cover pre-existing conditions, meaning we may cover any pre-existing condition up to the stated limits.</p>
              <p>As a plan member of INF, you are able to access international visitor accident & sickness insurance, find coverage options for pre-existing medical conditions, and help ease the possible financial burden due to unforeseen medical expenses during your stay in the United States, Canada, or Mexico.</p>
              <p>INF offers insurance programs for non-US citizens.</p>
              <p>Some INF plans use United HealthCare.</p>
              <p>Most INF International Visitor Accident and Sickness plans provide coverage for pre-existing conditions. Our A-rated underwriting partners provide the strong financial support needed from an insurance company to continue offering International Visitor Accident and Sickness plans with pre-existing conditions coverage.</p>
              <p>If you have any questions about INF IVAS or our organization, please email us at {emailAddress}.</p>
            </div>
          </div>
        </Container>
      </section>

    </Layout>
  )
}

export default AboutPage

export const query = graphql`
  query AboutPageQuery {
    site {
      meta: siteMetadata {
        title
        description
        siteUrl
        author
        twitter
        emailAddress
        phoneNumber
      }
    },
    hero_background: file(name: { eq: "request-a-quote-hero-bg" }) {
      childImageSharp {
        fluid(maxWidth: 1400, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    infplans_big_logo: file(name: { eq: "infplans-big-logo" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
  }
`
