import React, {useState, useEffect} from 'react'
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
import { FaAngleDoubleDown } from "@react-icons/all-files/fa/FaAngleDoubleDown";
import { FaAngleDoubleUp } from "@react-icons/all-files/fa/FaAngleDoubleUp";
import { Helmet } from 'react-helmet'

interface Props {
  data: IndexQueryQuery
  location: Location
}

const TravelerUSAPage: React.FC<Props> = ({ data, location }: Props) => {
  const meta = data.site?.meta
  const posts = data.remark.posts
  const hero = data.hero?.childImageSharp?.fluid
  const hero_background = data.hero_background?.childImageSharp?.fluid
  const infplans_big_logo = data.infplans_big_logo?.childImageSharp?.fluid
  const section2_img_right = data.section2_img_right?.childImageSharp?.fluid
  const section2_img_left = data.section2_img_left?.childImageSharp?.fluid
  const book_icon = data.book_icon?.childImageSharp?.fluid
  const book2_icon = data.book2_icon?.childImageSharp?.fluid
  const cta_bg = data.cta_bg?.childImageSharp?.fluid
  const [infBMIStatus, setInfBMIStatus] = useState(false);


  function showInfBMI() {
    setInfBMIStatus(true);
  }

  function hideInfBMI() {
    setInfBMIStatus(false);
  }

  return (
    <Layout location={location}>
      <Helmet>
        <title>Comprehensive Insurance for Visitors for USA Travelers</title>
        <meta property="og:site_name" content="INF Visitor Insurance"/>
        <meta property="og:title" content="Comprehensive Insurance for Visitors for USA Visitors traveling to the USA. The article explains comprehensive Insurance for Visitors for USA Visitors traveling to USA"/>
        <meta property="og:description" content="Cheap Best Comprehensive Insurance for Visitors, Comprehensive no deductible Insurance for Visitors, Insurance for Visitors india usa, Insurance for Visitors for usa visitors, comprehensive Insurance for Visitors, no deductible Insurance for Visitors, low cost Insurance for Visitors, visitor accident &amp; sickness insurance, travel accident &amp; sickness insurance, travel accident &amp; sickness insurance usa, visitor accident &amp; sickness insurance, visitor accident &amp; sickness insurance usa"/>
        <meta name="keywords" content="Cheap Best Comprehensive Insurance for Visitors, Comprehensive no deductible Insurance for Visitors, Insurance for Visitors india usa, Insurance for Visitors for usa visitors, comprehensive Insurance for Visitors, no deductible Insurance for Visitors, low cost Insurance for Visitors, visitor accident &amp; sickness insurance, travel accident &amp; sickness insurance, travel accident &amp; sickness insurance usa, visitor accident &amp; sickness insurance, visitor accident &amp; sickness insurance usa"/>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Helmet>
      <BackgroundImage
        Tag="section"
        className="traveler-usa-hero-section-bg"
        fluid={hero_background}
        alt="traveler usa"
      >
        <div id="traveler-usa-hero-section">
          <Container>
            <div className="col-lg-12">
              <h1 className="text-white text-center">
                INF TRAVELER USA IVAS
              </h1>
              <p className="hero-text text-white text-center">
                The INF Traveler USA IVAS is a comprehensive accident & sickness plan for visitors without known pre-existing conditions, when purchased before the start of your trip for at least 30 days and no more than 364 days, which is the Maximum Period of Coverage.
              </p>
              <Link to="/inf-easy-select"><button className="hero-btn"> Get a Quote </button></Link>
            </div>
          </Container>
        </div>
      </BackgroundImage>

      <section id="traveler-usa-section1">
        <Container>
          <div className="traveler-usa-container">
            <h2 className="text-blue text-center">INF Traveler USA International Visitor Accident & Sickness Insurance (IVAS)</h2>
            <div className="row mt-5">
              <div className="col-lg-8">
                <p className="text-black">The INF Traveler USA IVAS is a comprehensive accident & sickness plan for visitors without known pre-existing conditions, when purchased before the start of your trip for at least 30 days and no more than 364 days, which is the Maximum Period of Coverage. Traveler USA covers non-US citizens traveling to the United States, Canada or Mexico in all age groups, from age 0 to 99 years old.</p>
                {infBMIStatus ?
                  <>
                    <p>With the Traveler USA IVAS Plan - you are covered as defined in the plan, to the policy maximum, after any applicable deductibles have been met. Traveler USA IVAS will cover eligible expenses for medical appointments or follow-up appointments related to sickness and accidents that are not pre-existing conditions. Coinsurance may apply. Please see plan details for limitations due to pre-existing conditions prior to enrolling for coverage.
                    </p>
                    <p>There is no coverage for pre-existing conditions in the INF Traveler USA IVAS plan. Pre-existing condition means an illness, disease, or other condition of the Covered Person that in the 12-month period before the Covered Person’s coverage became effective under the Policy: 1. first manifested itself, worsened, became acute, or exhibited symptoms that would have caused a person to seek diagnosis, care, or treatment; or 2. required taking prescribed drugs or medicines, unless the condition for which the prescribed drug or medicine is taken remains controlled without any change in the required prescription; or 3. was treated by a Doctor or treatment had been recommended by a Doctor.</p>
                    <p>In addition to accident and sickness benefits, the INF Traveler USA IVAS program includes eligible Emergency Medical Evacuation Benefits, Repatriation of Remains Benefits, and Accidental Death and Dismemberment Benefits.</p>
                    <p>The INF Traveler USA IVAS plan utilizes the United Healthcare Options PPO Network within the United States. You may choose an in network or out of network provider or facility. However, utilizing a United Healthcare Options PPO provider or facility affords you several benefits: 1) Your Insurance is acceptable to most participating providers and facilities, 2) providers are likely to bill the IVAS insurance directly, i.e. "Direct Billing" most of the time. This means you do not have to pay the entire medical bill & wait for reimbursement per the terms of the plan, . 3) Your copays and coinsurance are lower with in-network providers and facilities. You may save money & hassle when visiting an in-network provider through United Healthcare Options PPO.</p>
                    <p>The INF Traveler USA IVAS plan is sponsored by INF* and the insurance portion of the plan is underwritten by Crum & Forster, SPC.</p>
                    <a href="javascript:void(0)" className="read-less" onClick={hideInfBMI}>READ LESS <FaAngleDoubleUp className="double-arrow-up" /></a>
                  </>
                  :
                   <a href="javascript:void(0)" className="read-more" onClick={showInfBMI}>READ MORE <FaAngleDoubleDown className="double-arrow-down" /></a>
                }
              </div>
              <div className="col-lg-4">
                <Img fluid={infplans_big_logo} className="big-logo"/>
                <h3 className="text-blue text-center">INF Traveler USA IVAS Plan</h3>
                <Link to="/inf-easy-select"  target="_blank" className="nav-link">
                  <button className="row-btn"> Click to Get a Quote </button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="traveler-usa-section2">
        <Container>
          <div className="col-lg-12">
            <h3 className="text-white text-center">As a plan member you will also have access to additional Non-Insurance Features when traveling to the USA including:</h3>
          </div>
          <div className="col-lg-12">
            <div className="row mt-5">
              <div className="col-lg-6">
                <Img fluid={section2_img_right} className="section2-img1-mobile"/>
                <ul>
                  <li className="text-white">Access to a Careington discount program at no additional cost with the INF Traveler USA International Visitor Accident & Sickness Insurance. Careington coordinates this discount program, which provides savings on Dental, Vision, Prescription, & Hearing products & services in the United States. For example, you may see savings of up to 50% for Dental procedures! For more information on benefits of the discount program, please visit our page on the Discount Card Program. This Discount card program is not an insurance product and is not insured by Crum & Forster SPC. This is not insurance.</li>
                </ul>
              </div>
              <div className="col-lg-6">
                <Img fluid={section2_img_right} className="section2-img1"/>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="row mt-5">
              <div className="col-lg-5">
                <Img fluid={section2_img_left} className="section2-img2"/>
              </div>
              <div className="col-lg-7">
                <ul>
                  <li className="text-white">As a plan member, you will be provided access to MDLive- a telehealth feature which allows plan member to access medical care from the comfort of their own home. While in the United States, MDLive allows plan member to schedule an appointment with healthcare provider that is credentialed, certified and highly trained, and typically arrange medical care within 1 hour. The doctor will video or audio chat with you and if required, send a prescription to the nearest pharmacy (note that prescriptions may require out of pocket expense if they are not eligible expenses). MDLive can be used for any non life threatening conditions. This is not an insurance product and is not insured by Crum & Forster SPC. MDLive only provides access to and helps arrange the telehealth visits. Any eligible benefits are paid under the terms of IVAS Traveler USA insurance policy.</li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="traveler-usa-section3">
        <Container>
          <div className="col-lg-12">
            <h2 className="text-blue text-center">INF Traveler USA IVAS Coverages</h2>

            <div className="traveler-coverages-tab">
              <input checked="checked" id="traveler-coverages-tab1" type="radio" name="traveler-coverages" />
              <input id="traveler-coverages-tab2" type="radio" name="traveler-coverages" />
              <nav>
                <ul>
                  <li className="traveler-coverages-tab1">
                    <label for="traveler-coverages-tab1">Inf Traveler USA IVAS Accident And <br/>Sickness Plan <br/> <span className="text-black age-title">Age 0-69</span></label>
                  </li>
                  <li className="traveler-coverages-tab2">
                    <label for="traveler-coverages-tab2">Inf Traveler USA IVAS Accident And <br/>Sickness Plan <br/> <span className="text-black age-title">Age 70-99</span></label>
                  </li>
                </ul>
              </nav>
              <section>
                <div className="traveler-coverages-tab1">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="column-tab">
                        <p className="text-white column-tab-title">Total Maximum per Accident or <br/>Sickness Expense Benefits</p>
                      </div>
                      <p className="tab-content text-black">$150,000</p>
                      <p className="tab-content text-black">$250,000</p>
                      <p className="tab-content text-black">$300,000</p>
                      <p className="tab-content text-black"></p>
                      <p className="tab-content text-black"></p>
                      <p className="tab-content text-black"></p>
                      <p className="tab-content text-black"></p>
                    </div>
                    <div className="col-lg-6">
                      <div className="column-tab">
                        <p className="text-white column-tab-title">Deductible per Accident or <br/>Sickness Expense Benefits</p>
                      </div>
                      <p className="tab-content text-black">$50</p>
                      <p className="tab-content text-black">$100</p>
                      <p className="tab-content text-black">$250</p>
                      <p className="tab-content text-black">$500</p>
                      <p className="tab-content text-black">$1,000</p>
                      <p className="tab-content text-black">$2,500</p>
                      <p className="tab-content text-black">$5,000</p>
                    </div>
                  </div>
                </div>
                <div className="traveler-coverages-tab2">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="column-tab">
                        <p className="text-white column-tab-title">Total Maximum per Accident or <br/>Sickness Expense Benefits</p>
                      </div>
                      <p className="tab-content text-black">$75,000</p>
                      <p className="tab-content text-black"></p>
                      <p className="tab-content text-black"></p>
                      <p className="tab-content text-black"></p>
                      <p className="tab-content text-black"></p>
                      <p className="tab-content text-black"></p>
                      <p className="tab-content text-black"></p>
                    </div>
                    <div className="col-lg-6">
                      <div className="column-tab">
                        <p className="text-white column-tab-title">Deductible per Accident or <br/>Sickness Expense Benefits</p>
                      </div>
                      <p className="tab-content text-black">$50</p>
                      <p className="tab-content text-black">$100</p>
                      <p className="tab-content text-black">$250</p>
                      <p className="tab-content text-black">$500</p>
                      <p className="tab-content text-black">$1,000</p>
                      <p className="tab-content text-black">$2,500</p>
                      <p className="tab-content text-black">$5,000</p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </Container>
      </section>

      <section id="traveler-usa-section4">
        <Container>
          <div className="col-lg-12">
            <h2 className="text-blue text-center">INF Traveler USA IVAS</h2>
            <h3 className="text-blue text-center subtitle">Schedule of Benefits</h3>
            <h3 className="text-black text-center">Co-Insurance With INF Traveler USA IVAS (Note: All Emergency Admissions Are Considered in-Network and Paid at 80% or 90%)</h3>
            <div className="traveler-co-insurance-tab">
              <input checked="checked" id="traveler-co-insurance-tab1" type="radio" name="traveler-co-insurance" />
              <input id="traveler-co-insurance-tab2" type="radio" name="traveler-co-insurance" />
              <nav>
                <ul>
                  <li className="traveler-co-insurance-tab1">
                    <label for="traveler-co-insurance-tab1">In-Network</label>
                  </li>
                  <li className="traveler-co-insurance-tab2">
                    <label for="traveler-co-insurance-tab2">Out-of-Network</label>
                  </li>
                </ul>
              </nav>
              <section>
                <div className="traveler-co-insurance-tab1">
                  <p className="text-black">​80% or 90% of charges up to the Total Maximum for All Accident or Sickness Expense Benefits</p>
                </div>
                <div className="traveler-co-insurance-tab2">
                  <p className="text-black">60% or 70% of the Usual and Customary Charges up to the Total Maximum for All Accident or Sickness Expense Benefits</p>
                </div>
              </section>
            </div>
          </div>
        </Container>
      </section>

      <section id="traveler-usa-section5">
        <Container>
          <div className="col-lg-12">
            <h2 className="text-blue text-center">Traveler USA Plan Description</h2>
          </div>
          <div className="col-lg-12 ">
            <div className="row mt-4 justify-content-center">
              <div className="col-lg-5 text-center">
                <h3 className="text-black">Read INF Premier Plan<br /> Description for Age 0-69  </h3>
                <Img fluid={book_icon} className="book-icon-img"/>
                <a href="https://infplans.com/policy_pdf/INF_Traveler_USA_Policy_Document_age_0_69.pdf" target="_blank">
                  <button className="read-now-btn"> Read Now </button>
                </a>
              </div>
              <div className="col-lg-5 text-center">
                <h3 className="text-black">Read INF Premier Plan<br /> Description for Age 70-99 </h3>
                <Img fluid={book2_icon} className="book-icon-img"/>
                <a href="https://infplans.com/policy_pdf/INF_Traveler_USA_Policy_Document_70_99.pdf" target="_blank">
                  <button className="read-now-btn"> Read Now </button>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <BackgroundImage
        Tag="section"
        className="traveler-usa-cta-hero-section-bg"
        fluid={cta_bg}
        alt="cta"
      >
        <div id="traveler-usa-cta-section">
          <Container>
            <div className="col-lg-12">
              <h2 className="text-white text-center">Get Coverage Now</h2>
              <Link to="/apply"><button className="buy-now-btn"> Apply Now </button></Link>
            </div>
          </Container>
        </div>
      </BackgroundImage>

      <section id="traveler-usa-section7">
        <Container>
          <div className="col-lg-12">
            <p className="text-black text-center first-paragraph">Benefits are provided for eligible Insured Persons. Terms and conditions are briefly outlined in this summary of coverage. Complete provisions pertaining to this insurance are contained in the Plan. In the event of any conflict between this summary of coverage and the Plan, the Plan will govern. The Plan is a short term limited duration Plan renewable at the option of the insurer. This is a brief description of the important features of the insurance plan. It is not a contract of insurance. The terms and conditions of coverage are set forth in the plan issued to ITA Global Trust, LTD. For a detailed plan description, exclusions, and limitations please view the plan on file with INF. This insurance is not subject to, and will not be administered as a PPACA (Patient Protection and Affordable Care Act) insurance plan. PPACA requires certain US residents and citizens obtain PPACA compliant insurance coverage. This plan is not designed to cover US residents and citizens. This Plan is not subject to guaranteed issuance or renewal. By purchasing this insurance, you become a member of the ITA Global Trust, LTD. PPO Networks are not provided by Crum & Forster, SPC</p>
          </div>
          <div className="col-lg-12">
            <div className="blue-bg text-center">
              <h3 className="text-white">Privacy Statement:</h3>
              <p className="text-white">We know that your privacy is important to you and we strive to protect the confidentiality of your non-public personal information. We do not disclose any non-public personal information about our insureds or former insureds to anyone, except as permitted or required by law. We maintain appropriate physical, electronic and procedural safeguards to ensure the security of your non-public personal information. You may obtain a detailed copy of our privacy policy by calling 408-540-3601.</p>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="white-bg text-center">
              <h3 className="text-blue">Complaints:</h3>
              <p className="text-black">In the event that you remain dissatisfied and wish to make a complaint you can do so to the Complaints team at support@infplans.com</p>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="blue-bg text-center">
              <h3 className="text-white">Data Protection:</h3>
              <p className="text-white">Please note that sensitive health and other information that you provide may be used by us, our representatives, the insurers and industry governing bodies and regulators to process your insurance, handle claims and prevent fraud. This may involve transferring information to other countries (some of which may have limited, or no data protection laws). We have taken steps to ensure your information is held securely. Where sensitive personal information relates to anyone other than you, you must obtain the explicit consent of the person to whom the information relates both to the disclosure of such information to us and its use as set out above. Information we hold will not be shared with third parties for marketing purposes. You have the right to access your personal records.</p>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="white-bg text-center">
              <h3 className="text-blue">Note:</h3>
              <p className="text-black">This insurance is not subject to and does not provide certain insurance benefits required by the United States’ Patient Protection and Affordable Care Act (“PPACA”). This coverage is not a general health insurance product, but is intended for use in the event of a sudden and unexpected event while traveling outside your home country. PPACA requires certain US citizens or US residents to obtain PPACA compliant health insurance, or “minimum essential coverage.” PPACA also requires certain employers to offer PPACA compliant insurance coverage to their employees. Tax penalties may be imposed on U.S. residents or citizens who do not maintain minimum essential coverage, and on certain employers who do not offer PPACA compliant insurance coverage to their employees. In some cases, certain individuals may be deemed to have minimum essential coverage under PPACA even if their insurance coverage does not provide all of the benefits required by PPACA. You should consult your attorney or tax professional to determine whether the policy meets any obligations you may have under PPACA.</p>
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  )
}

export default TravelerUSAPage

export const query = graphql`
  query TravelerUSAPageQuery {
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
    hero_background: file(name: { eq: "traveler-usa-hero-bg" }) {
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
    section2_img_right: file(name: { eq: "traveler-section2-img-right" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    section2_img_left: file(name: { eq: "traveler-section2-img-left" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    book_icon: file(name: { eq: "book-icon" }) {
      childImageSharp {
        fluid(maxWidth: 400, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    book2_icon: file(name: { eq: "book2-icon" }) {
      childImageSharp {
        fluid(maxWidth: 400, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    cta_bg: file(name: { eq: "cta-bg" }) {
      childImageSharp {
        fluid(maxWidth: 1400, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
  }
`
