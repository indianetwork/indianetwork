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
import EyemedSlider from 'components/sliders/eyemed-slider'
import { Helmet } from 'react-helmet'
import EyeMed from '../../content/images/eyemed-individual.png';

interface Props {
  data: IndexQueryQuery
  location: Location
}

const EyemedPage: React.FC<Props> = ({ data, location }: Props) => {
  const meta = data.site?.meta
  const posts = data.remark.posts
  const hero = data.hero?.childImageSharp?.fluid
  const hero_background = data.hero_background?.childImageSharp?.fluid
  const secure_img = data.secure_img?.childImageSharp?.fluid
  const privacy_img = data.privacy_img?.childImageSharp?.fluid
  const eye_bold_img = data.eye_bold_img?.childImageSharp?.fluid
  const eye_bright_img = data.eye_bright_img?.childImageSharp?.fluid
  const eye_healthy_img = data.eye_healthy_img?.childImageSharp?.fluid

  return (
    <Layout location={location}>
      <Helmet>
        <title>Eyemed - Vision Insurance</title>
        <meta name="twitter:card" content="summary" data-react-helmet="true"/>
        <meta name="twitter:site" content="@" data-react-helmet="true"/>
        <meta property="og:title" content="Eyemed - Vision Insurance | Infplans" data-react-helmet="true"/>
        <meta property="og:type" content="website" data-react-helmet="true"/>
        <meta property="og:description" content="This website sells Insurance for Visitors for Parents. Relatives visiting USA. Full Pre-Existing Insurance for Visitors for Parents visiting USA. We cover all Pre-Existing Conditions. Insurance for Non-US Citizens Living in the USA. H1-B, K1, J1 Visa Insurance" data-react-helmet="true"/>
        <meta property="og:url" content="https://www.infplans.com/profile" data-react-helmet="true"/>
        <meta property="og:image" content="https://www.infplans.com/img/profile.jpg" data-react-helmet="true"/>
      </Helmet>
      <BackgroundImage
        Tag="section"
        className="eyemed-hero-section-bg"
        fluid={hero_background}
        backgroundColor={`#e9f4f8`}
        alt="eyemed hero background"
      >
        <div id="eyemed-hero-section">
          <Container>
            <div className="col-lg-12">
              <h1 className="text-white text-center">
                EYEMED-VISION INSURANCE
              </h1>
              <Link to="/inf-easy-select"><button className="hero-btn"> Get a Quote </button></Link>
            </div>
          </Container>
        </div>
      </BackgroundImage>

      <section id="eyemed-section-1">
        <Container>
          <div className="col-lg-6">
           <div className="col-lg-12 flipcard-col flip-card">
            <div className="flip-card-inner">
              <div className="flipcard-container flip-card-front">
              <div className="row">
                <div className="col-lg-4">
                  <Img fluid={eye_healthy_img} className="flipcard-icon" alt="Eyemed Healthy" />
                </div>
                <div className="col-lg-8">
                <h3 className="text-center">EyeMed Healthy</h3>
                </div>
              </div>
              </div>
              <div className="flipcard-container-inner flip-card-back">
              <h3 className="text-center inner-content">EyeMed Healthy</h3>
                <p className="text-center flipcard-content">An eye exam plus great discounts on glasses and contacts.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-12 flipcard-col flip-card">
            <div className="flip-card-inner">
              <div className="flipcard-container flip-card-front">
              <div className="row">
                <div className="col-lg-4">
                <Img fluid={eye_bold_img} className="flipcard-icon1" alt="Eyemed Bold" />
                </div>
                <div className="col-lg-8">
                <h3 className="text-center bold">EyeMed Bold</h3>
                </div>
              </div>
              </div>
              <div className="flipcard-container-inner flip-card-back">
              <h3 className="text-center inner-content">EyeMed Bold</h3>
              <p className="text-center flipcard-content">An eye exam, frame and lens allowance, plus great discounts on glasses and contacts.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-12 flipcard-col flip-card">
            <div className="flip-card-inner">
              <div className="flipcard-container flip-card-front">
              <div className="row">
                <div className="col-lg-4">
                <Img fluid={eye_bright_img} className="flipcard-icon2" alt="Eyemed Bright" />
                </div>
                <div className="col-lg-8">
                <h3 className="text-center bright">EyeMed Bright</h3>
                </div>
              </div>
              </div>
              <div className="flipcard-container-inner flip-card-back">
                <h3 className="text-center inner-content1">EyeMed Bright</h3>
                <p className="text-black flipcard-content">An eye exam on our highest frame and lens allowance, plus great discounts on glasses and contacts.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 text-center">
          <div className="eyemed-container">
            <img src={EyeMed} />
            <a href="https://eyemed.memberquotes.com/Quote/LandingPage/EyeMed_1?rn=000020140-207-732" target="_blank">
              <button className="get-now-btn"> Get Eyemed </button>
            </a>
          </div>
        </div>
      </Container>
    </section>

      <section id="eyemed-section-2">
        <ContainerFluid>
          <EyemedSlider />
        </ContainerFluid>
      </section>

      <section id="eyemed-section-3">
        <Container>
          <div className="col-lg-12">
          <div className="row">
            <p className="text-center eyemed-content">Your information is governed by our privacy policy. By entering your name and information above and clicking the Get Quote button, you are consenting to receive a call or emails regarding your Insurance Health, Dental, Vision, Supplement, Medicare Advantage, Medicare Supplement, and Prescription Drug Plan options (at any phone number or email address you provide) from a SASid representative or one of our licensed insurance agent business partners, and you agree such call may use an automatic telephone dialing system or an artificial or prerecorded voice to deliver messages. This agreement is not a condition of enrollment.</p>
            <p className="text-center eyemed-content">SASid, Inc. Agency CA License #0D43589. EyeMed Vision Care & Insurance Services, LLC. Agency CA License #0F30752. Shannon Kennedy, whose principal place of business is in Wisconsin, is licensed to transact insurance business in California under license number #OD43589.</p>

            {/*<div className="col-lg-6">
              <Img fluid={secure_img} className="secure-img" />
            </div>
            <div className="col-lg-6">
              <Img fluid={privacy_img} className="privacy-img" />
            </div>*/}

            <p className="text-center powered">Powered by InsuranceTPA.com</p>
            <p className="text-center eyemed-content">Underwritten by Fidelity Security Life Insurance Company and Fidelity Security Life Insurance Company of New York, and administered by First American Administrators and InsuranceTPA.com and serviced by EyeMed. Policy numbers VC-133/VCN-12; form numbers M-9157/M-9159/MN-17/MN-19.</p>
          </div>
          </div>
        </Container>
      </section>

    </Layout>
  )
}

export default EyemedPage

export const query = graphql`
  query EyemedPageQuery {
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
    hero_background: file(name: { eq: "eyemed-hero-bg" }) {
      childImageSharp {
        fluid(maxWidth: 1400, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    secure_img: file(name: { eq: "secure-img" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    privacy_img: file(name: { eq: "privacy-img" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    eye_bold_img: file(name: { eq: "eye-bold-img" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    eye_bright_img: file(name: { eq: "eye-bright-img" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    eye_healthy_img: file(name: { eq: "eye-healthy-img" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
  }
`
