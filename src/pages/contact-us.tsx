import React from 'react'
import { graphql, Link } from 'gatsby'
import Img, { FixedObject } from 'gatsby-image'
import { IndexQueryQuery, PostByPathQuery } from '../../types/graphql-types'
import Post from '../templates/post/post'
import Meta from 'components/meta/meta'
import Layout from 'components/layout/layout'
import styled from 'styled-components'
import Container from 'components/pages/container'
import ContainerFluid from 'components/pages/container-fluid'
import BackgroundImage from 'gatsby-background-image'
import ButtonBlack from 'components/button/button-black'
import {FiClock} from '@react-icons/all-files/fi/FiClock'
import {FiPhoneCall} from '@react-icons/all-files/fi/FiPhoneCall'
import {FiMail} from '@react-icons/all-files/fi/FiMail'
import { Helmet } from 'react-helmet'

interface Props {
  data: IndexQueryQuery
  location: Location
}

const ContactUsPage: React.FC<Props> = ({ data, location }: Props) => {
  const meta = data.site?.meta
  const posts = data.remark.posts
  const hero = data.hero?.childImageSharp?.fluid
  const hero_background = data.hero_background?.childImageSharp?.fluid

  const backendUrl = meta.backendUrl
  const contactFormUrl = backendUrl + "/contact/"
  const phoneNumber = meta.phoneNumber
  const emailAddress = meta.emailAddress
  const emailAddressUrl = "mailto:"+emailAddress
  const phoneNumberUrl = "tel:"+phoneNumber

  return (
    <Layout location={location}>
      <Helmet>
        <title>Contact Us about Insurance for Visitors Questions</title>
        <meta property="og:site_name" content="INF Visitor Insurance"/>
        <meta property="og:title" content="Contact Us for Insurance for Visitors Questions &amp; Needs"/>
        <meta property="og:description" content="Monday - Friday : 9:00 AM - 11:00 PM EST Saturday - Sunday : 10:00 AM - 9:00 PM EST ​ Support Via Phone: 800-490-9678 Support Via Email: support @infplans.com"/>
        <meta name="description" content="Contact INF: 800-490-9678 or email support@infplans.com "/>
        <meta name="keywords" content="travel insurance, Insurance for Visitors, visitor insurance, pre-existing medical conditions, visitor medical insurance"/>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Helmet>
      <BackgroundImage
        Tag="section"
        className="contact-hero-section-bg"
        fluid={hero_background}
        alt="contact us"
      >
        <div id="contact-hero-section">
          <Container>
            <div className="col-lg-12">
              <h1 className="text-white text-center">
                CONTACT US
              </h1>
              <Link to="/inf-easy-select"><button className="hero-btn"> Get a Quote </button></Link>
            </div>
          </Container>
        </div>
      </BackgroundImage>

      <section id="contact-section1">
        <Container>
          <div className="col-lg-12">
            <div className="row contact-container">
              <div className="col-lg-7">
                <div className="left-content">
                  <h2 className="text-blue text-center">Contact Us Today</h2>
                  <form method="POST" action={contactFormUrl}>
                    <input type="text" id="cname" name="cname" placeholder="Your Name*" />
                    <input type="email" id="cemail" name="cemail" placeholder="Your Email Address*" />
                    <input type="tel" id="cphone" name="cphone" placeholder="Your Phone Number*" />
                    <textarea id="cmsg" name="cmsg" placeholder="Your Message*" />
                    <input type="submit" name="csubmit" value="Submit" />
                  </form>
                </div>
              </div>

              <div className="col-lg-5 right-content">
                <h2 className="text-white text-center">Business Hours</h2>
                  <div className="business-hours">
                    <FiClock className="contact-icon"/><h3 className="text-white hours-subtitle">Days and Time</h3>
                    <p className="text-white">Monday - Friday : 9:00 AM - 11:00 PM EST</p>
                    <p className="text-white">Saturday - Sunday : 10:00 AM - 9:00 PM EST</p>
                  </div>

                  <div className="business-hours">
                    <FiPhoneCall className="contact-icon"/><h3 className="text-white hours-subtitle">Support Via Phone</h3>
                    <a href={phoneNumberUrl} className="links">Phone: {phoneNumber} </a>
                  </div>

                  <div className="business-hours">
                    <FiMail className="contact-icon"/><h3 className="text-white hours-subtitle">Support Via Email</h3>
                    <a href={emailAddressUrl} className="links">{emailAddress} </a>
                  </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  )
}

export default ContactUsPage

export const query = graphql`
  query ContactUsPageQuery {
    site {
      meta: siteMetadata {
        title
        description
        siteUrl
        author
        twitter
        backendUrl
        phoneNumber
        emailAddress
      }
    },
    remark: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      posts: edges {
        post: node {
          html
          frontmatter {
            layout
            title
            path
            category
            author
            tags
            description
            date(formatString: "YYYY/MM/DD")
            image {
              childImageSharp {
                fluid(maxHeight: 362) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    },
    hero_background: file(name: { eq: "contact-hero-bg" }) {
      childImageSharp {
        fluid(maxWidth: 1400, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
  }
`
