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
import { Helmet } from 'react-helmet'
import IframeResizer from 'iframe-resizer-react'

interface Props {
  data: IndexQueryQuery
  location: Location
}

const RenewPage: React.FC<Props> = ({ data, location }: Props) => {
  const meta = data.site?.meta
  const posts = data.remark.posts
  const hero = data.hero?.childImageSharp?.fluid
  const hero_background = data.hero_background?.childImageSharp?.fluid
  const infplans_big_logo = data.infplans_big_logo?.childImageSharp?.fluid

  const phoneNumber = meta.phoneNumber
  const emailAddress = meta.emailAddress
  const emailAddressUrl = "mailto:"+emailAddress
  const phoneNumberUrl = "tel:"+phoneNumber
  const backendUrl = meta.backendUrl
  const extendFormUrl = backendUrl + "/memberHub/logIn/extend.php"


  return (
    <Layout location={location}>
      <Helmet>
        <title>Insurance for Visitors Extension: Extend INF Visitor Insurance Insurance | Infplans</title>
        <meta name="description" content="Extend your Insurance for Visitors Plan for INF Visitor Insurance Here"/>
        <meta name="keywords" content="how do i Extend Insurance for Visitors, Extend my Insurance for Visitors, Extend my inf plan, inf insurance, inf Insurance for Visitors"/>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Helmet>
      <BackgroundImage
        Tag="section"
        className="extend-hero-section-bg"
        fluid={hero_background}
        alt="extend"
      >
        <div id="extend-hero-section">
          <Container>
            <div className="col-lg-12">
              <h1 className="text-white text-center">
                EXTENSION
              </h1>
              <p className="hero-text text-white text-center">
                INF Plans can be Extended up to a maximum of 364 days. To extend coverage for you, please check the steps below. If you have any questions, please reach us at {phoneNumber}.
              </p>
            <a href="#extend-your-plan">  <button className="hero-btn"> Extend Your Plan </button></a>
            </div>
          </Container>
        </div>
      </BackgroundImage>

      <section id="extend-your-plan">
        <Container>
          <div className="col-lg-12" id="extend-form">
            <IframeResizer
              log
              src={extendFormUrl}
              style={{ width: '1px', minWidth: '100%', border: 'none'}}
            />
           {/*<div className="embed-container">
             <iframe src="https://sec.infplans.com/forms/extend-form.php" id="extend-form" scrolling="no"></iframe>
           </div>*/}
         </div>
          {/*}<div className="col-lg-12">
            <div className="row extend-container">
              <div className="col-lg-5">
                <Img fluid={infplans_big_logo} className="big-logo"/>
                <h3 className="text-blue text-center">INF Plan Extensions</h3>
              </div>
              <div className="col-lg-7">
                <form method="POST" action="">
                  <input type="email" id="email" name="email" placeholder="Email Address" />
                  <input type="submit" value="Next" />
                </form>
              </div>
              <div className="row mt-5">
                <div className="col-lg-12">
                  <h3 className="text-blue text-center row-title">To extend coverage please complete the following steps:</h3>
                  <ol>
                    <li>Enter email  in the Plan Member Sign In</li>
                    <li>We will send a 6-digit OTP to your email. Enter this OTP as the password.</li>
                    <li>Once you're logged in, click on 'Active Plans.'</li>
                    <li>On the right hand side of the Active Plans record will be a "Extend" Button. Click this button to Extend coverage.</li>
                  </ol>
                  </div>
              </div>
            </div> */}
        </Container>
      </section>
    </Layout>
  )
}

export default RenewPage

export const query = graphql`
  query RenewPageQuery {
    site {
      meta: siteMetadata {
        title
        description
        siteUrl
        author
        twitter
        backendUrl
        emailAddress
        phoneNumber
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
    hero_background: file(name: { eq: "extend-hero-bg" }) {
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
