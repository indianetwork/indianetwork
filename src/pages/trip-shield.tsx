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

const TripShieldPage: React.FC<Props> = ({ data, location }: Props) => {
  const meta = data.site?.meta
  const hero = data.hero?.childImageSharp?.fluid
  const hero_background = data.hero_background?.childImageSharp?.fluid
  const infplans_big_logo = data.infplans_big_logo?.childImageSharp?.fluid

  return (
    <Layout location={location}>
      <Helmet>
        <title>INF Visitor Insurance - Visitors Insurance &amp; Travel Insurance</title>
        <meta name="description" content="Visitors Insurance for USA Visitors. Shop, Compare, Buy Visitor Medical Visitors Insurance to USA"/>
        <meta name="keywords" content="inf insurance, kvrao insurance, kv rao insurance, Insurance for Visitors, visitor insurance, visitors insurance, visitor medical insurance, travel medical insurance"/>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Helmet>

      <BackgroundImage
        Tag="section"
        className="trip-shield-hero-section-bg"
        fluid={hero_background}
        backgroundColor={`#e9f4f8`}
        alt="trip shield hero background"
      >
        <div id="trip-shield-hero-section">
          <Container>
            <div className="col-lg-12">
              <h1 className="text-white text-center">
                INF TripShield International
              </h1>
              <p className="hero-text text-white text-center">
                INF protects the cost of your trip, covers your medical expenses, and protects your belongings — for U.S. Citizens & Residents
              </p>
              <Link to="/inf-easy-select"><button className="hero-btn"> Get a Quote </button></Link>
            </div>
          </Container>
        </div>
      </BackgroundImage>

      <section id="why-trip-shield">
        <Container>
          <div className="col-lg-12">
            <div className="trip-shield-container">
              <h2 className="text-blue text-center">Why INF TripShield?</h2>
              <p><strong>Protect Your Investment –</strong> INF TripShield provides cancellation protection for medical illnesses, the highest baggage delay benefits, and highest trip delay benefits in the industry.</p>
              <p><strong>Protect Your Medical Expenses –</strong> INF TripShield provides comprehensive, $0 copay, 100% co-insurance medical benefits while you're traveling, including the highest coverage for Acute Onset of Pre-Existing Conditions. Our plans also cover up to age 99+, with no reduction or limit on benefits! <strong>This plan meets Schengen Visa Requirements.</strong></p>
              <p><strong>Protect Your Belongings –</strong> Protect Jewelry, Watches, Video & Electronic Equipment, and all of your valuable items. INF offers the highest coverage for baggage loss and stolen baggage in the industry. Travel with confidence.</p>
            </div>
          </div>
        </Container>
      </section>

      <section id="trip-shield-overview">
        <Container>
          <div className="col-lg-12">
            <div className="trip-shield-container">
              <h2 className="text-blue text-center">INF TripShield Product Overview</h2>

              <div className="row mt-5">
                <div className="col-lg-8">
                  <p>
                    INF TripShield is a travel & travel medical plan that meets Schengen Visa Insurance requirements when purchased with a $0 Deductible. It is for <strong>US Citizens</strong> and <strong>US Residents</strong> travelling <strong>anywhere</strong> outside the United States. Rates are based on age and plan options. Coverage can be purchased for a minimum of five (5) days up to a maximum of one year.
                  </p>
                </div>

                <div className="col-lg-4">
                  <Img fluid={infplans_big_logo} className="big-logo"/>
                  <button className="tripshield-btn1">INF TripShield Brochure</button>
                  <button className="tripshield-btn2">INF TripShield Policy Document</button>
                </div>
              </div>

              <p className="title">INF TripShield has several unique features which makes it a best-in-class product, including:</p>

              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li>The highest ($25,000) Sudden Recurrence of Pre-Existing Condition coverage in the market. </li>
                    <li>The highest ($50,000) Medical Coverage for Ages 80+ </li>
                    <li>The only plan which covers Pregnancy & Childbirth</li>
                    <li><strong>No Limit on Medical Evacuation or Repatriation or Remains</strong></li>
                  </ul>
                </div>

                <div className="col-lg-6">
                  <ul>
                    <li>The highest baggage delay benefit in the market</li>
                    <li>The highest lost or stolen baggage benefit in the market</li>
                    <li>The only plan which offers Car Crash benefit for Airbag & Seatbelt</li>
                    <li>The highest benefit for Felonious Assault- if you run into trouble abroad</li>
                    <li>The highest benefit for Burial & Cremation</li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </Container>
      </section>

    </Layout>
  )
}

export default TripShieldPage

export const query = graphql`
  query TripShieldPageQuery {
    site {
      meta: siteMetadata {
        title
        description
        siteUrl
      }
    },
    hero_background: file(name: { eq: "why-inf-hero-bg" }) {
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
