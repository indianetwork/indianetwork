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

const WhyINFPage: React.FC<Props> = ({ data, location }: Props) => {
  const meta = data.site?.meta
  const hero = data.hero?.childImageSharp?.fluid
  const hero_background = data.hero_background?.childImageSharp?.fluid

  return (
    <Layout location={location}>
      <Helmet>
        <title>Why INF - INF Visitor Insurance</title>
        <meta name="description" content="Why you should purchase insurance from INF and why you should feel confident in knowing INF is on your side when you need us."/>
        <meta name="keywords" content="kv rao insurance, kvrao insurance, Insurance for Visitors, visitor insurance, inf plans, inf insurance, which is the best Insurance for Visitors plan"/>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Helmet>
      <BackgroundImage
        Tag="section"
        className="why-inf-hero-section-bg"
        fluid={hero_background}
        backgroundColor={`#e9f4f8`}
        alt="why inf hero background"
      >
        <div id="why-inf-hero-section">
          <Container>
            <div className="col-lg-12">
              <h1 className="text-white text-center">
                WHY INF?
              </h1>
              <Link to="/inf-easy-select"><button className="hero-btn"> Get a Quote </button></Link>
            </div>
          </Container>
        </div>
      </BackgroundImage>

      <section id="why-inf-section-1">
        <Container>
          <div className="col-lg-12">
            <div className="why-inf-container">
              <h2 className="text-blue text-center">Why Choose INF Insurance ?</h2>
              <p className="title">We Really do Care about Our Plan Members</p>
              <p>Since our founding in 1988, INF has provided innovative Insurance for Visitors options for members in the community. At INF- we really do care about our plan members. Our dedicated staff answers your calls and emails within 24 hours.</p>
              <p>Each plan participant is assigned an account manager, who will help the insured with any of their needs. Our account managers provide you with their direct WhatsApp numbers so you have someone to talk if an emergency happens during their travel.</p>
              <p>At INF, we don't give you the runaround. You can talk to the same person each time you call our office, reach the same person whenever you have a question. We are your trusted advisor when it comes to your Insurance for Visitors, and we do not take that responsibility lightly.</p>

              <p className="title">A Simpler Experience With Built-in Technology</p>
              <p>INF was molded with technology & simplicity in mind. Our easy to use site simplifies the shopping process, and provide unprecedented access to our customer support team of licensed insurance agents.</p>
              <p>Manage your policy easily using the MyINF portal. MyINF allows you to track your purchase history, Extend or apply for new coverage, manage claims, and much more! </p>

              <p className="title">Our 30 year Track Record</p>
              <p>INF has offered innovative and cost effective insurance options since 1988. Our commitment to you or your families health remains paramount in our mission to provide the best insurance options for Non-US persons traveling to the US, Canada or Mexico.</p>

              <p className="title">Expertise in Visitors Insurance</p>
              <p>Our veteran customer support team has over 200 years of combined experience in the international visitor accident & sickness insurance field. We will provide superior service to make sure you and your loved ones needs are met.</p>

              <p className="title">24 hour Customer Service</p>
              <p>We will answer your emergency requirements at any time of day. If you call us outside of normal operating hours and leave a message, our staff will return your phone call within a few hours. </p>

              <p className="title">Full Transparency</p>
              <p>We have each plan's documents and brochures readily available and easy to read. We do not have anything to hide and we will be the most transparent, trusted advisor for you and your family. </p>

              <p className="title">The Company with Patents</p>
              <p>We've heavily invested in technology to make your life easier. Our MyINF Web Portal & Quote engine are patent pending. We are dedicated to making insurance the most transparent purchase you will ever make.</p>

              <p className="title">Instant ID. Secure Purchase.</p>
              <p>Our site uses the most advanced encryption technology to protect your data & ensure you and your family never have to worry about a transaction gone wrong. Applications can be completed in less than 5 minutes! We do not ask for any medical paperwork or immigration documents.</p>

              <p className="title">Unique Plan Offerings</p>
              <p>We offer plans exclusively found on this platform. Some of our plans cover pre-existing conditions and  provides several non-insurance benefits such as Dental, Vision, Hearing, and Prescription Discounts coordinated by Careington International, and MDLive Telehealth (which are both only available in the US).</p>
              <p>These non-insurance benefits are not affiliated with Crum & Forster, SPC.</p>

            </div>
          </div>
        </Container>
      </section>

    </Layout>
  )
}

export default WhyINFPage

export const query = graphql`
  query WhyINFPageQuery {
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
  }
`
