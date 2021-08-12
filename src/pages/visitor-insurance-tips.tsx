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

const VisitorsInsuranceTipsPage: React.FC<Props> = ({ data, location }: Props) => {
  const meta = data.site?.meta
  const hero = data.hero?.childImageSharp?.fluid
  const hero_background = data.hero_background?.childImageSharp?.fluid
  const check_up_icon = data.check_up_icon?.childImageSharp?.fluid
  const medicine_icon = data.medicine_icon?.childImageSharp?.fluid
  const glasses_icon = data.glasses_icon?.childImageSharp?.fluid
  const blood_sugar_icon = data.blood_sugar_icon?.childImageSharp?.fluid
  const coat_icon = data.coat_icon?.childImageSharp?.fluid
  const slip_icon = data.slip_icon?.childImageSharp?.fluid
  const accident_icon = data.accident_icon?.childImageSharp?.fluid
  const health_meals_icon = data.health_meals_icon?.childImageSharp?.fluid
  const excercise_icon = data.excercise_icon?.childImageSharp?.fluid

  return (
    <Layout location={location}>
      <Helmet>
        <title>Visitors Insurance Tips - INF Visitor Insurance</title>
        <meta name="description" content="Why you should purchase insurance from INF and why you should feel confident in knowing INF is on your side when you need us."/>
        <meta name="keywords" content="kv rao insurance, kvrao insurance, Insurance for Visitors, visitor insurance, inf plans, inf insurance, which is the best Insurance for Visitors plan"/>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Helmet>
      <BackgroundImage
        Tag="section"
        className="visitor-insurance-tips-hero-section-bg"
        fluid={hero_background}
        backgroundColor={`#e9f4f8`}
        alt="visitor insurance faq hero background"
      >
        <div id="visitor-insurance-tips-hero-section">
          <Container>
            <div className="col-lg-12">
              <h1 className="text-white text-center">
                Insurance for Visitors Tips
              </h1>
              <Link to="/inf-easy-select"><button className="hero-btn"> Get a Quote </button></Link>
            </div>
          </Container>
        </div>
      </BackgroundImage>

      <section id="insurance-for-visitors-tips">
        <Container>
          <div className="col-lg-12 ">
            <div className="visitors-tips-container">
              <h2 className="text-blue text-center">Insurance for Visitors Tips</h2>
              <p>Traveling to the United States requires attention to detail. You must make sure you have the correct visa, your passport is up-to-date, and purchase the right visitor health insurance. It is important to have health insurance when traveling to protect against the unknown risks which can accompany you on your journey. With the rising cost of medical expenses in the United States, it is paramount to make sure you & your family are protected. Follow the tips below to ensure you stay healthy & safe during your trip to the USA.</p>
            </div>
          </div>

          <div className="col-lg-12">
            <div className="insurance-for-visitors-tips-container">
              <div className="row">
                <div className="col-lg-3">
                  <Img fluid={check_up_icon} className="tips-icon"/>
                </div>
                <div className="col-lg-9">
                  <p className="title">Get a full checkup from Your Local Doctor</p>
                  <ul>
                    <li>A physical checkup is highly recommended. You may not exhibit any pre-existing conditions, but having a doctor perform a routine check up will clear up any doubts.</li>
                    <li>Make sure to keep a copy of the doctors report & bring it with you to the United States. In case of an emergency the doctors will have your medical records, saving time and perhaps even saving your life.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-12">
            <div className="insurance-for-visitors-tips-container">
              <div className="row">
                <div className="col-lg-3">
                  <Img fluid={medicine_icon} className="tips-icon"/>
                </div>
                <div className="col-lg-9">
                  <p className="title">Pack Triple of Every Medicine</p>
                  <ul>
                    <li>We suggest packing more than double the amount of required prescription medication for your trip to the United States </li>
                    <li>We highly suggest packing prescriptions from your local doctor, which can be filled at local CVS or Walgreen pharmacy</li>
                    <li>INF Plans provide Prescription Discount Cards which can be used at over 58,000 pharmacies nationwide</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-12">
            <div className="insurance-for-visitors-tips-container">
              <div className="row">
                <div className="col-lg-3">
                  <Img fluid={glasses_icon} className="tips-icon"/>
                </div>
                <div className="col-lg-9">
                  <p className="title">Pack a few pairs of Glasses</p>
                  <ul>
                    <li>We recommend packing an extra pair or two of glasses in case one breaks during your journey to the United States ​</li>
                    <li>Most Insurance for Visitors plans do not cover vision, meaning you will have to pay out of pocket for eye-glass expenses.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-12">
            <div className="insurance-for-visitors-tips-container">
              <div className="row">
                <div className="col-lg-3">
                  <Img fluid={blood_sugar_icon} className="tips-icon"/>
                </div>
                <div className="col-lg-9">
                  <p className="title">Pack self-monitoring devices </p>
                  <ul>
                    <li>Visitors with high blood pressure or diabetes should pack self-monitoring devices to check their levels consistently </li>
                    <li>We advise to pack these supplies in carry on luggage so they are easy to reach during their travel </li>
                    <li>Checking levels consistently helps prevent larger medical problems later on during your stay</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-12">
            <div className="insurance-for-visitors-tips-container">
              <div className="row">
                <div className="col-lg-3">
                  <Img fluid={coat_icon} className="tips-icon"/>
                </div>
                <div className="col-lg-9">
                  <p className="title">Pack Proper Clothing</p>
                  <ul>
                    <li>Visitors traveling from other parts of the world often are shocked at how cold (or hot!) the United States can be </li>
                    <li>Differences in temperature and adjusting to climates take a serious toll in the body's immune system </li>
                    <li>We ask visitors or their family in the US to pack appropriate clothing to account for climate changes</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-12">
            <div className="insurance-for-visitors-tips-container">
              <div className="row">
                <div className="col-lg-3">
                  <Img fluid={slip_icon} className="tips-icon"/>
                </div>
                <div className="col-lg-9">
                  <p className="title">Be mindful of Traffic</p>
                  <ul>
                    <li>The United States has different traffic laws than your home country - it is important to be mindful of these laws while walking outside</li>
                    <li>Look both ways before crossing the road, and use crosswalks when navigating through traffic </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-12">
            <div className="insurance-for-visitors-tips-container">
              <div className="row">
                <div className="col-lg-3">
                  <Img fluid={accident_icon} className="tips-icon"/>
                </div>
                <div className="col-lg-9">
                  <p className="title">Get acquainted with Surroundings e</p>
                  <ul>
                    <li>It is important to be familiar with your surroundings. For example, how to use a gas or electric stove, dishwasher, or even which faucet is hot or cold</li>
                    <li>We ask the hosting family to instruct the visitor on how to navigate their new surroundings. </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-12">
            <div className="insurance-for-visitors-tips-container">
              <div className="row">
                <div className="col-lg-3">
                  <Img fluid={health_meals_icon} className="tips-icon"/>
                </div>
                <div className="col-lg-9">
                  <p className="title">Keep a healthy diet </p>
                  <ul>
                    <li>Traveling takes a large toll on the body's immune system. Making sure you keep a healthy diet is key to preventing any sickness from coming about </li>
                    <li>Seniors should be especially careful of what they eat- foods high in acidity or fat and jeopardize the visitors health </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-12">
            <div className="insurance-for-visitors-tips-container">
              <div className="row">
                <div className="col-lg-3">
                  <Img fluid={excercise_icon} className="tips-icon"/>
                </div>
                <div className="col-lg-9">
                  <p className="title">Keep an Active Lifestyle</p>
                  <ul>
                    <li>We advise anyone traveling, but especially seniors, to go on walks, strolls, and stay active during they trip to USA</li>
                    <li>Having an active lifestyle can prevent a major medical event from manifesting, such as a heart attack or stroke. </li>
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

export default VisitorsInsuranceTipsPage

export const query = graphql`
  query VisitorsInsuranceTipsPageQuery {
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
    check_up_icon: file(name: { eq: "check-up-icon" }) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    medicine_icon: file(name: { eq: "medicine-icon" }) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    glasses_icon: file(name: { eq: "glasses-icon" }) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    blood_sugar_icon: file(name: { eq: "blood-sugar-icon" }) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    coat_icon: file(name: { eq: "coat-icon" }) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    slip_icon: file(name: { eq: "slip-icon" }) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    accident_icon: file(name: { eq: "accident-icon" }) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    health_meals_icon: file(name: { eq: "health-meals-icon" }) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    excercise_icon: file(name: { eq: "excercise-icon" }) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
  }
`
