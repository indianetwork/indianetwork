import React from 'react'
import { graphql, Link } from 'gatsby'
import Img, { FixedObject } from 'gatsby-image'
import { IndexQueryQuery, PostByPathQuery } from '../../types/graphql-types'
import Meta from 'components/meta/meta'
import Layout from 'components/layout/layout'
import Container from 'components/pages/container'
import ContainerFluid from 'components/pages/container-fluid'
import BackgroundImage from 'gatsby-background-image'
import { FaLongArrowAltRight } from "@react-icons/all-files/fa/FaLongArrowAltRight";
import TestimonialHomeSlider from 'components/sliders/testimonial-slider'
import LogoSlider from 'components/sliders/logo-slider'
import ArticlesSlider from 'components/sliders/articles-slider'
import { Helmet } from 'react-helmet'
import HomeForm from 'components/HomeForm'
import GetAQuote from 'components/forms/GetAQuote'
{/* import OGImage from '../../content/images/logo.png'*/}

interface Props {
  data: IndexQueryQuery
  location: Location
}

const HomePage: React.FC<Props> = ({ data, location }: Props) => {
  const meta = data.site?.meta
  const hero_background = data.hero_background?.childImageSharp?.fluid
  const international_health_protection = data.international_health_protection?.childImageSharp?.fluid
  const travel_insurance = data.travel_insurance?.childImageSharp?.fluid
  const covers_preexisting_conditions = data.covers_preexisting_conditions?.childImageSharp?.fluid
  const trustpilot_background = data.trustpilot_background?.childImageSharp?.fluid
  const trustpilot_stars = data.trustpilot_stars?.childImageSharp?.fluid
  const trustpilot_logo = data.trustpilot_logo?.childImageSharp?.fluid
  const non_us_citizen = data.non_us_citizen?.childImageSharp?.fluid
  const green_card_holder = data.green_card_holder?.childImageSharp?.fluid
  const student_or_scholar = data.student_or_scholar?.childImageSharp?.fluid
  const permanent_resident = data.permanent_resident?.childImageSharp?.fluid
  const built_with_technology = data.built_with_technology?.childImageSharp?.fluid
  const over_30_year_track_record = data.over_30_year_track_record?.childImageSharp?.fluid
  const expert_in_visitor_insurance = data.expert_in_visitor_insurance?.childImageSharp?.fluid
  const customer_service = data.customer_service?.childImageSharp?.fluid
  const full_transparency = data.full_transparency?.childImageSharp?.fluid
  const company_with_patents = data.company_with_patents?.childImageSharp?.fluid
  const exclusive_plan_offerings = data.exclusive_plan_offerings?.childImageSharp?.fluid
  const no_paperworks = data.permanent_resident?.childImageSharp?.fluid
  const unique_plans_color_bg = data.unique_plans_color_bg?.childImageSharp?.fluid
  const unique_plans_bg = data.unique_plans_bg?.childImageSharp?.fluid
  const home_divider_img = data.home_divider_img?.childImageSharp?.fluid
  const bottom_icon1 = data.bottom_icon1?.childImageSharp?.fluid
  const bottom_icon2 = data.bottom_icon2?.childImageSharp?.fluid
  const bottom_icon3 = data.bottom_icon3?.childImageSharp?.fluid
  const bottom_icon4 = data.bottom_icon4?.childImageSharp?.fluid


  return (
    <Layout location={location}>
      <Helmet>
        <title>INF Visitor Insurance - Visitors Insurance & Travel Insurance</title>
        <meta property="og:site_name" content="INF Visitor Insurance"/>
        <meta property="og:title" content="INF Visitor Insurance - Visitors Insurance & Travel Insurance"/>
        <meta name="description" content="Visitors Insurance for USA Visitors. Shop, Compare, Buy Visitor Medical Visitors Insurance to USA"/>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Helmet>
      <BackgroundImage
        Tag="section"
        className="home-hero-section-bg"
        fluid={hero_background}
        alt="Find the righ  t coverage for your trip"
        id="home-hero-section-background"
      >
        <div id="home-hero-section">
          <Container>
            <div className="col-lg-12">
              <h1 className="text-white text-center">
                FIND THE RIGHT COVERAGE <br />FOR YOUR TRIP
              </h1>
            </div>
          </Container>
          <GetAQuote />
        </div>

      </BackgroundImage>
      <div id="home-services-section">
        <ContainerFluid>
          <div className="col-lg-4 service-column text-center">
            <div className="service-icon">
              <Img fluid={international_health_protection} alt="International Health Protection" />
            </div>
            <h3 className="text-black">International Accident & Sickness</h3>
            <p>We provide international visitor accident & sickness insurance for visiting parents, relatives, students, and temporary workers traveling outside of their home country to the United States, Canada or Mexico.</p>
          </div>
          <div className="col-lg-4 service-column text-center">
            <div className="service-icon">
              <Img fluid={travel_insurance} alt="Travel Insurance"/>
            </div>
            <h3 className="text-black">International Travel Assistance </h3>
            <p>You are able to access travel assistance benefits, find coverage options for pre-existing medical conditions, and help ease the possible financial burden due to unforeseen medical expenses during your stay in the United States, Canada, Mexico, Doha, Costa Rica, or any country Worldwide.</p>
          </div>
          <div className="col-lg-4 service-column text-center">
            <div className="service-icon">
              <Img fluid={covers_preexisting_conditions} alt="Covers Pre Existing Conditions" />
            </div>
            <h3 className="text-black">We may cover Pre-Existing Conditions</h3>
            <p>Our A-rated underwriting partners provide the strong financial support needed from an insurance company to continue offering some International Visitor Accident and Sickness plans with pre-existing conditions coverage.</p>
          </div>
        </ContainerFluid>
      </div>
      <BackgroundImage
        Tag="section"
        className="trustpilot-section"
        fluid={trustpilot_background}
        alt="trustpilot review"
        id="truspilot-section-background"
      >
        <div id="trustpilot-section">
          <Container>
            <div className="col-lg-6">
              <h3 className="text-white text-center">
                Our customers say
              </h3>
              <h2 className="text-white text-center">
                EXCELLENT
              </h2>
              <div className="trustpilot-stars">
                <Img fluid={trustpilot_stars} alt="trustpilot stars" />
              </div>
              <h4 className="text-white text-center mt-15"><strong>4.9</strong> out of 5 on <strong>196</strong> reviews</h4>
              <div className="trustpilot-logo">
                <Img fluid={trustpilot_logo} alt="trustpilot" />
              </div>
            </div>
          </Container>
        </div>
      </BackgroundImage>
      <div id="what-describes-you">
        <ContainerFluid>
          <div className="col-lg-4 bg-blue">
            <h2 className="text-white">
              What best <br />describes you?
            </h2>
            <p className="text-white subtitle">
              Select the plan that you are <br />looking for
            </p>
          </div>
          <div className="col-lg-8">
            <div className="row">
                <div className="col-lg-6 bg-white">
                  <Link to="/visitors-insurance-plans">
                    <div className="what-describes-you-icon">
                      <Img fluid={non_us_citizen} alt="Non US Citizen" />
                    </div>
                    <p className="text-center column-title">Non-US Citizen</p>
                  </Link>
                </div>
              <div className="col-lg-6 bg-lightgray">
                <Link to="/visitors-insurance-plans">
                  <div className="what-describes-you-icon">
                    <Img fluid={green_card_holder} alt="Green Card Holder" />
                  </div>
                  <p className="text-center column-title">Green Card Holder</p>
                </Link>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 bg-lightgray">
                <Link to="/visitors-insurance-plans">
                  <div className="what-describes-you-icon">
                    <Img fluid={student_or_scholar} alt="Student or Scholar on J-1, F-1, M-1, or Q-1 Visa"/>
                  </div>
                  <p className="text-center column-title">Student or Scholar on <br />J-1, F-1, M-1, or Q-1 Visa</p>
                </Link>
              </div>
              <div className="col-lg-6 bg-white">
                <Link to="/visitors-insurance-plans">
                  <div className="what-describes-you-icon">
                    <Img fluid={permanent_resident} alt="Permanent Resident" />
                  </div>
                  <p className="text-center column-title">Permanent Resident</p>
                </Link>
              </div>
            </div>
          </div>
        </ContainerFluid>
      </div>
      <section id="why-choose-inf-insurance">
        <Container>
          <div className="col-lg-12 mb-20 mt-20">
            <p className="text-center subtitle">We Really Do Care About Our Plan Members</p>
            <h2 className="text-center text-primary">
              Why Choose INF Insurance?
            </h2>
          </div>
          <div className="col-lg-3 why-choose-inf-icon-container">
            <div className="why-choose-inf-icons">
              <Img fluid={built_with_technology}
                alt="Built in Technology & With Simplicity"
                style={{ maxHeight: '55px' }}
                imgStyle={{ objectFit: 'contain' }}
              />
            </div >
            <p className="column-title">A Simpler Experience With Built-in Technology</p>
          </div>
          <div className="col-lg-3 why-choose-inf-icon-container">
            <div className="why-choose-inf-icons">
              <Img fluid={over_30_year_track_record}
                alt="Our 30 year Track Record"
                style={{ maxHeight: '55px' }}
                imgStyle={{ objectFit: 'contain' }}
              />
            </div>
            <p className="column-title">Our 30 Year<br /> Track Record</p>
          </div>
          <div className="col-lg-3 why-choose-inf-icon-container">
            <div className="why-choose-inf-icons">
              <Img
                fluid={expert_in_visitor_insurance}
                  alt="Expertise in Visitors Insurance"
                  style={{ maxHeight: '55px' }}
                  imgStyle={{ objectFit: 'contain' }}
                />
            </div>
            <p className="column-title">Expertise in Visitors<br /> Insurance</p>
          </div>
          <div className="col-lg-3 why-choose-inf-icon-container">
            <div className="why-choose-inf-icons">
              <Img fluid={customer_service}
                alt="24-hour Customer Service"
                style={{ maxHeight: '55px' }}
                imgStyle={{ objectFit: 'contain' }}
              />
            </div>
            <p className="column-title">24-hour Customer<br /> Service</p>
          </div>
          <div className="col-lg-3 why-choose-inf-icon-container">
            <div className="why-choose-inf-icons">
              <Img fluid={full_transparency}
                alt="Full Transparency"
                style={{ maxHeight: '55px' }}
                imgStyle={{ objectFit: 'contain' }}
              />
            </div>
            <p className="column-title">Full<br /> Transparency</p>
          </div>
          <div className="col-lg-3 why-choose-inf-icon-container">
            <div className="why-choose-inf-icons">
              <Img fluid={company_with_patents}
                alt="The Company with Patents"
                style={{ maxHeight: '55px' }}
                imgStyle={{ objectFit: 'contain' }}
              />
            </div>
            <p className="column-title">The Company<br /> with Patents</p>
          </div>
          <div className="col-lg-3 why-choose-inf-icon-container">
            <div className="why-choose-inf-icons">
              <Img fluid={exclusive_plan_offerings}
                alt="Exclusive Plan Offerings"
                style={{ maxHeight: '55px' }}
                imgStyle={{ objectFit: 'contain' }}
              />
            </div>
            <p className="column-title">Exclusive Plan<br /> Offerings</p>
          </div>
          <div className="col-lg-3 why-choose-inf-icon-container">
            <div className="why-choose-inf-icons">
              <Img fluid={no_paperworks}
                alt="No paperwork. Instant ID. Secure Purchase"
                style={{ maxHeight: '55px' }}
                imgStyle={{ objectFit: 'contain' }}
              />
            </div>
            <p className="column-title">No Paperwork. Instant<br /> ID. Secure Purchase</p>
          </div>
          <div className="col-lg-12 text-center mt-30 mb-20">
            <Link to="/why-inf">
              <button className="btn btn-main">
                Learn More
              </button>
            </Link>
          </div>
        </Container>
      </section>
      <div id="unique-plans-for-travel">
        <ContainerFluid>
          <BackgroundImage
            Tag="div"
            className="col-lg-7"
            fluid={unique_plans_bg}
            alt="unique-plans"
            id=""
          >
          </BackgroundImage>
          <BackgroundImage
            Tag="div"
            className="col-lg-5"
            fluid={unique_plans_color_bg}
            alt="unique-plans"
            id="unique-plans-column-2"
          >
            <h3 className="text-white">
              Unique Plans For Your Travel
            </h3>
            <ul className="text-white">
              <li>
                Plans may have pre-existing conditions coverage*
              </li>
              <li>
                Coverage to non-US Citizens traveling to the US, Canada or Mexico
              </li>
              <li>
                Emergency Medical Evacuation Benefits
              </li>
              <li>
                Accidental Death and Dismemberment Benefits
              </li>
              <li>
                COVID-19 treated as any other sickness
              </li>
            </ul>
            <Link to="/inf-easy-select">
              <button className="btn btn-white mt-15">
                Get a Quote
              </button>
            </Link>
          </BackgroundImage>
        </ContainerFluid>
      </div>

      <section id="members-producers">
        <Container>
          <div className="col-lg-6">
            <div className="members-producers-column text-center">
              {/*<h3 className="text-primary">Members</h3> */}
              <h3 className="text-primary">Insureds</h3>
              <p>
                Access the Insured Portal to Download Plan ID cards, File Claims, and access other features
              </p>
              <Link to="/members" className="service-link">Click here to view Insured Portal <FaLongArrowAltRight className="right-arrow" /></Link>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="members-producers-column text-center">
              <h3 className="text-primary">Producers</h3>
              <p>
                Manage your producer profile, generate reports, and access other tools to build your business with INF
              </p>
              <Link to="/producers" className="service-link">Click here to access Producer Portal <FaLongArrowAltRight className="right-arrow" /></Link>
            </div>
          </div>
        </Container>
      </section>
{/*
      <section id="home-articles-slider-section">
        <Container>
          <div className="col-lg-12">
          <h2 className="text-center text-primary">Travel Related Articles</h2>
            <ArticlesSlider />
          </div>
        </Container>
      </section>
*/}
      <section id="home-logo-slider-section">
        <ContainerFluid>
          <div className="col-lg-12">
          <h2 className="text-center text-white">Featured In</h2>
            <LogoSlider />
          </div>
        </ContainerFluid>
      </section>

      <section id="home-testimonial-section">
        <ContainerFluid>
          <div className="col-lg-4 text-right left-content">
            <h2 className="text-black">What Our Clients Have To Say</h2>
            <Img fluid={home_divider_img} className="testimonial-divider"/>
            <p className="testimonial-subtitle">We pride ourselves on offering quality products and top notch service.</p>
          </div>
          <div className="col-lg-8 right-content">
            <TestimonialHomeSlider />
          </div>
        </ContainerFluid>
      </section>

      <section id="home-bottom-flipcard-section">
        <ContainerFluid>
          <div className="col-lg-3 flipcard-col flip-card">
            <div className="flip-card-inner">
              <div className="flipcard-container flip-card-front">
                <Img fluid={bottom_icon1} className="flipcard-icon" alt="Extend Your Policy" />
                <h3 className="text-center">Extend Your <br />Plan</h3>
                {/*<h3 className="text-center">Extend Your <br />Policy</h3> */}
              </div>
              <div className="flipcard-container-inner flip-card-back">
                <h3 className="text-center">Extend Your <br />Plan</h3>
                {/*}<h3 className="text-center">Extend Your <br />Policy</h3> */}
                <p className="text-black flipcard-content">
                  Extend Your Plan to <br /> Continue Coverage
                </p>
                <Link to="/extend" className="nav-link">
                  <button className="flipcard-btn"> Extend Plan </button>
                  {/*<button className="flipcard-btn"> Find A Provider </button> */}
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3 flipcard-col flip-card">
            <div className="flip-card-inner">
              <div className="flipcard-container flip-card-front">
                <Img fluid={bottom_icon2} className="flipcard-icon" alt="Policy Docs & ID Cards" />
                <h3 className="text-center">Policy Docs & <br />ID Cards</h3>
              </div>
              <div className="flipcard-container-inner flip-card-back">
                <h3 className="text-center">Policy Docs & <br />ID Cards</h3>
                <p className="text-black flipcard-content">
                  How to obtain Plan <br />Documents
                </p>
                <Link to="/plan-id-cards" className="nav-link">
                  <button className="flipcard-btn"> Retrieve Documents </button>
                  {/*<button className="flipcard-btn"> Find A Provider </button> */}
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3 flipcard-col flip-card">
            <div className="flip-card-inner">
              <div className="flipcard-container flip-card-front">
                <Img fluid={bottom_icon3} className="flipcard-icon" alt="Doctors & Hospitals" />
                <h3 className="text-center">Doctors & <br />Hospitals</h3>
              </div>
              <div className="flipcard-container-inner flip-card-back flip-card-doctors">
                <h3 className="text-center">Doctors & <br />Hospitals</h3>
                <p className="text-black flipcard-content">Find an In-Network Health Care <br /> Provider Nearby</p>
                <Link to="/first-health-ppo" className="nav-link">
                  <button className="flipcard-btn"> Find A Provider </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3 flipcard-col flip-card">
            <div className="flip-card-inner">
              <div className="flipcard-container flip-card-front">
                <Img fluid={bottom_icon4} className="flipcard-icon" alt="Claims" />
                <h3 className="text-center">File a <br /> Claim</h3>
              </div>
              <div className="flipcard-container-inner flip-card-back">
                <h3 className="text-center">File a <br /> Claim</h3>
                <p className="text-black flipcard-content">
                  Streamlined Claims <br />Process
                </p>
                <Link to="/claims" className="nav-link">
                  <button className="flipcard-btn">File a Claim </button>
                  {/*<button className="flipcard-btn"> Find A Provider </button> */}
                </Link>
              </div>
            </div>
          </div>
        </ContainerFluid>
      </section>
    </Layout>
  )
}

export default HomePage

export const query = graphql`
  query HomePageQuery {
    site {
      meta: siteMetadata {
        title
        description
        siteUrl
        author
        twitter
      }
    },
    hero_background: file(name: { eq: "home-hero-bg" }) {
      childImageSharp {
        fluid(maxWidth: 1400, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    international_health_protection: file(name: { eq: "international-health-protection-icon" }) {
      childImageSharp {
        fluid(maxWidth: 200, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    travel_insurance: file(name: { eq: "travel-insurance-icon" }) {
      childImageSharp {
        fluid(maxWidth: 200, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    covers_preexisting_conditions: file(name: { eq: "covers-preexisting-conditions-icon" }) {
      childImageSharp {
        fluid(maxWidth: 200, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    trustpilot_background: file(name: { eq: "trustpilot-reviews-bg" }) {
      childImageSharp {
        fluid(maxWidth: 1400, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    trustpilot_stars: file(name: { eq: "trustpilot-stars" }) {
      childImageSharp {
        fluid(maxWidth: 400, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    trustpilot_logo: file(name: { eq: "trustpilot-logo" }) {
      childImageSharp {
        fluid(maxWidth: 400, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    non_us_citizen: file(name: { eq: "non-us-citizen-icon" }) {
      childImageSharp {
        fluid(maxWidth: 100, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    green_card_holder: file(name: { eq: "green-card-holder-icon" }) {
      childImageSharp {
        fluid(maxWidth: 100, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    student_or_scholar: file(name: { eq: "student-or-scholar-icon" }) {
      childImageSharp {
        fluid(maxWidth: 100, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    permanent_resident: file(name: { eq: "permanent-resident-icon" }) {
      childImageSharp {
        fluid(maxWidth: 150, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    built_with_technology: file(name: { eq: "built-with-technology-icon" }) {
      childImageSharp {
        fluid(maxWidth: 150, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    over_30_year_track_record: file(name: { eq: "over-30-year-track-record-icon" }) {
      childImageSharp {
        fluid(maxWidth: 150, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    expert_in_visitor_insurance: file(name: { eq: "expert-in-visitor-insurance-icon" }) {
      childImageSharp {
        fluid(maxWidth: 150, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    customer_service: file(name: { eq: "24-hour-customer-service-icon" }) {
      childImageSharp {
        fluid(maxWidth: 150, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    full_transparency: file(name: { eq: "full-transparency-icon" }) {
      childImageSharp {
        fluid(maxWidth: 150, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    company_with_patents: file(name: { eq: "company-with-patents-icon" }) {
      childImageSharp {
        fluid(maxWidth: 150, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    exclusive_plan_offerings: file(name: { eq: "exclusive-plan-offerings-icon" }) {
      childImageSharp {
        fluid(maxWidth: 150, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    no_paperworks: file(name: { eq: "no-paperworks-icon" }) {
      childImageSharp {
        fluid(maxWidth: 150, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    unique_plans_color_bg: file(name: { eq: "unique-plans-color-bg" }) {
      childImageSharp {
        fluid(maxWidth: 700, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    unique_plans_bg: file(name: { eq: "unique-plans-bg" }) {
      childImageSharp {
        fluid(maxWidth: 700, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    home_divider_img: file(name: { eq: "home-divider-img" }) {
      childImageSharp {
        fluid(maxWidth: 200, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    bottom_icon1: file(name: { eq: "bottom-icon1" }) {
      childImageSharp {
        fluid(maxWidth: 150, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    bottom_icon2: file(name: { eq: "bottom-icon2" }) {
      childImageSharp {
        fluid(maxWidth: 150, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    bottom_icon3: file(name: { eq: "bottom-icon3" }) {
      childImageSharp {
        fluid(maxWidth: 150, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    bottom_icon4: file(name: { eq: "bottom-icon4" }) {
      childImageSharp {
        fluid(maxWidth: 150, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
  }
`
