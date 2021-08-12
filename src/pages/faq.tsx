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

interface Props {
  data: IndexQueryQuery
  location: Location
}

const FAQPage: React.FC<Props> = ({ data, location }: Props) => {
  const meta = data.site?.meta
  const posts = data.remark.posts
  const hero = data.hero?.childImageSharp?.fluid
  const hero_background = data.hero_background?.childImageSharp?.fluid

  return (
    <Layout location={location}>
      <Meta site={meta} title="Frequently Asked Questions about Insurance for Visitors"/>
      <BackgroundImage
        Tag="section"
        className="faqs-hero-section-bg"
        fluid={hero_background}
        alt="faqs"
      >
        <div id="faqs-hero-section">
          <Container>
            <div className="col-lg-12">
              <h1 className="text-white text-center">
                INSURANCE FOR VISITORS FAQS
              </h1>
              <Link to="/inf-easy-select"><button className="hero-btn"> Get a Quote </button></Link>
            </div>
          </Container>
        </div>
      </BackgroundImage>

    <section id="faqs-section1">
      <Container>
        <div className="col-lg-12">
          <div className="faqs-container">
            <h2 className="text-blue text-center">Frequently Asked Questions about Insurance for Visitors</h2>
              <div className="row mt-5">
                <div className="col-lg-4">
                  <div className="faqs-section1-column text-center">
                    <h4 className="faqs-section1-title">INF Visitor Insurance FAQ</h4>
                    <p className="faqs-section1-content">Learn the Basics of Insurance for Visitors</p>
                    <Link to="/visitors-insurance-faq">
                      <button className="faqs-section1-btn"> Learn More </button>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="faqs-section1-column text-center">
                    <h4 className="faqs-section1-title">How to use Insurance Visitors</h4>
                    <p className="faqs-section1-content">Learn how to properly use Insurance for Your Visitor</p>
                    <Link to="/visitors-insurance-plans">
                      <button className="faqs-section1-btn"> Learn More </button>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="faqs-section1-column text-center">
                    <h4 className="faqs-section1-title">Use the Plan Finder Tool</h4>
                    <p className="faqs-section1-content">Use our Plan Finder Tool to select the perfect plan for your family</p>
                    <Link to="/plan-finder">
                      <button className="faqs-section1-btn"> Learn More </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="row mt-5 justify-content-center">
                <div className="col-lg-4">
                  <div className="faqs-section1-column text-center">
                    <h4 className="faqs-section1-title">Health Tips for Travelers</h4>
                    <p className="faqs-section1-content">Some quick tips on how to ensure the safety of your visitors</p>
                    <Link to="/visitor-insurance-tips">
                      <button className="faqs-section1-btn"> Learn More </button>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="faqs-section1-column text-center">
                    <h4 className="faqs-section1-title">Insurance Features for Visitors</h4>
                    <p className="faqs-section1-content">Read about our plan features to help you choose the right plan.</p>
                    <Link to="/travel-insurance-for-visiting-seniors">
                      <button className="faqs-section1-btn"> Learn More </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="faqs-section2">
        <Container>
          <div className="col-lg-12">
            <h4 className="text-center text-white">Learn about INF Plans</h4>
          </div>
          <div className="col-lg-12">
            <div className="row mt-4">
              <div className="col-lg-6">
                <ul>
                  <Link to="/standard-faq">
                    <li className="text-white">INF Standard Plan - FAQ</li>
                  </Link>
                  <Link to="/premier-faq">
                    <li className="text-white">INF Premier Plan - FAQ</li>
                  </Link>
                  <Link to="/elite-network-faq">
                    <li className="text-white">INF Elite Network Plan - FAQ</li>
                  </Link>
                  <Link to="/trip-shield">
                    <li className="text-white">INF TripShield International </li>
                  </Link>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <Link to="/select-care-plan">
                    <li className="text-white">INF SelectCare Plan - FAQ</li>
                  </Link>
                  <Link to="/choice-plan">
                    <li className="text-white">INF Choice Plan - FAQ</li>
                  </Link>
                  <Link to="/advantage-plan">
                    <li className="text-white">INF Advantage Plan - FAQ</li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="faqs-section3">
        <Container>
          <div className="col-lg-12">
            <div className="faqs-container">
              <h2 className="text-blue text-center">Insurance for Visitors Topics of Interest</h2>
              <div className="col-lg-12">
                <div className="row mt-4">
                  <div className="col-lg-6">
                    <ul>
                      <a href="https://8320.infplans.com/health-insurance-for-green-card-holders.html" target="_blank">
                        <li className="text-black">Visitor Accident & Sickness Insurance for Green Card holders</li>
                      </a>
                      <a href="https://8320.infplans.com/health-insurance-for-visitors-to-usa-with-pre-existing-conditions.html" target="_blank">
                        <li className="text-black">Visitor Accident & Sickness Insurance for Visitors with USA with Pre-Existing Conditions</li>
                      </a>
                      <a href="https://8320.infplans.com/medical-insurance-for-visitors-to-USA-from-India.html" target="_blank">
                        <li className="text-black">Medical Insurance for Visitors to USA from India</li>
                      </a>
                      <a href="https://8320.infplans.com/top-tips-for-traveling-seniors.html" target="_blank">
                        <li className="text-black">Top tips for Traveling Seniors</li>
                      </a>
                      <a href="https://8320.infplans.com/tourist-health-insurance-for-usa-visa.html" target="_blank">
                        <li className="text-black">Tourist Health Insurance for USA Travel</li>
                      </a>
                      <a href="https://8320.infplans.com/travel-insurance-claim-denied.html" target="_blank">
                        <li className="text-black">How to deal with denied travel insurance claims</li>
                      </a>
                      <a href="https://8320.infplans.com/visitor-medical-insurance-for-visitors-to-usa.html" target="_blank">
                        <li className="text-black">Visitor Medical Insurance for USA Travel</li>
                      </a>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul>
                      <a href="https://8320.infplans.com/green-card-insurance-for-paremts.html" target="_blank">
                        <li className="text-black">Green Card Insurance for Parents</li>
                      </a>
                      <a href="https://8320.infplans.com/best-visitors-insurance-for-seniors.html" target="_blank">
                        <li className="text-black">Best Insurance for Visitors for Seniors</li>
                      </a>
                      <a href="https://8320.infplans.com/medical-insurance-for-green-card-holders.html" target="_blank">
                        <li className="text-black">Medical Insurance for Green Card Holders</li>
                      </a>
                      <a href="https://8320.infplans.com/top-visitors-insurance-reviews.html" target="_blank">
                        <li className="text-black">Top Insurance for Visitors Reviews </li>
                      </a>
                      <a href="https://8320.infplans.com/travel-insurance-above-80-years-of-age.html" target="_blank">
                        <li className="text-black">Travel Insurance for Visitors Above 80 years</li>
                      </a>
                      <a href="https://8320.infplans.com/travel-insurance-for-seniors-elderly.html" target="_blank">
                        <li className="text-black">Travel Insurance options for Seniors & Elderly Visitors</li>
                      </a>
                      <a href="https://8320.infplans.com/visitors-insurance-for-seniors.html" target="_blank">
                        <li className="text-black">Insurance for Visitors Options for Seniors</li>
                      </a>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="faqs-section4">
        <Container>
          <div className="col-lg-12">
            <h4 className="text-center text-white">Pre-Existing Condition Insurance for Visitors​</h4>
          </div>
          <div className="col-lg-12">
            <div className="row mt-4">
              <div className="col-lg-6">
                <ul>
                  <a href="https://8320.infplans.com/visitors-insurance.html" target="_blank">
                    <li className="text-white">Insurance for Visitors: Difference betweeen Acute Onet & Full Pre-Ex</li>
                  </a>
                  <a href="https://8320.infplans.com/cover-all-pre-existing-conditions-visitors-insurance.html" target="_blank">
                    <li className="text-white">Full Pre-Existing Insurance FAQ</li>
                  </a>
                  <a href="https://8320.infplans.com/visitors-insurance-for-pre-existing-conditions.html" target="_blank">
                    <li className="text-white">Pre-Existing Conditions: What is Covered by Insurance for Visitors?</li>
                  </a>
                  <a href="https://8320.infplans.com/acute-onset-vs-pre-existing-coverage.html" target="_blank">
                    <li className="text-white">Differences between Acute Onset & Full Pre-Existing Coverage </li>
                  </a>
                  <a href="https://8320.infplans.com/insurance-for-visitors-with-pre-existing-conditions.html" target="_blank">
                    <li className="text-white">Insurance for Visitors with Pre-Existing Conditions</li>
                  </a>
                  <a href="https://8320.infplans.com/full-pre-existing-coverage.html" target="_blank">
                    <li className="text-white">Full Pre-Existing Insurance for Visitors</li>
                  </a>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <a href="https://8320.infplans.com/acute-onset-of-pre-existing-conditions.html" target="_blank">
                    <li className="text-white">Pre-Existing Condition Coverage: What is Acute Onset?</li>
                  </a>
                  <a href="https://8320.infplans.com/visitors-coverage-with-pre-existing-conditions.html" target="_blank">
                    <li className="text-white">Pre-Existing Coverage Plans for Non-US Citizens</li>
                  </a>
                  <a href="https://8320.infplans.com/visitor-medical-insurance-pre-existing-conditions.html" target="_blank">
                    <li className="text-white">How are Pre-Existing Conditions Determined?</li>
                  </a>
                  <a href="https://8320.infplans.com/inf-vs-acute-onset-plans.html" target="_blank">
                    <li className="text-white">INF vs Acute Onset Plans</li>
                  </a>
                  <a href="https://8320.infplans.com/real-pre-existing-coverage.html" target="_blank">
                    <li className="text-white">What is "Real Pre-Existing Coverage"?</li>
                  </a>
                  <a href="https://8320.infplans.com/full-pre-existing-visitors-insurance.html" target="_blank">
                    <li className="text-white">Full Pre-Existing Insurance for Visitors Options</li>
                  </a>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="faqs-section5">
        <Container>
          <div className="col-lg-12">
            <div className="faqs-container">
              <h2 className="text-blue text-center">Frequently Asked Questions</h2>
              <div className="col-lg-12">
                <div className="row mt-4">
                  <div className="col-lg-6">
                    <ul>
                      <a href="https://8320.infplans.com/visitors-insurance-for-parents-from-india.html" target="_blank">
                        <li className="text-black">Insurance for Visitors for Parents</li>
                      </a>
                      <a href="https://8320.infplans.com/cashless-claims-visitors-insurance.html" target="_blank">
                        <li className="text-black">Which Doctor Can I Visit?</li>
                      </a>
                      <a href="https://8320.infplans.com/travel-medical-insurance-for-usa.html" target="_blank">
                        <li className="text-black">Why Should I enroll in Insurance for Visitors from the US?​</li>
                      </a>
                      <a href="https://8320.infplans.com/visitors-insurance-frequently-asked-questions.html" target="_blank">
                        <li className="text-black">What will I need to complete my Insurance for Visitors Application?</li>
                      </a>
                      <a href="https://8320.infplans.com/visitor-medical-insurance.html" target="_blank">
                        <li className="text-black">What is Visitor Medical Insurance?</li>
                      </a>
                      <a href="https://8320.infplans.com/comprehensive-limited-visitors-insurance-parents-usa.html" target="_blank">
                        <li className="text-black">Limited vs. Comprehensive</li>
                      </a>
                      <a href="https://8320.infplans.com/top-5-questions-to-ask-your-travel-insurance-provider.html" target="_blank">
                        <li className="text-black">Top 5 Reasons to ask when Purchasing Insurance for Visitors</li>
                      </a>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul>
                      <a href="https://8320.infplans.com/why-file-claims.html" target="_blank">
                        <li className="text-black">Why do I need to file a Insurance for Visitors Claim?</li>
                      </a>
                      <a href="https://8320.infplans.com/how-to-use-visitors-insurance.html" target="_blank">
                        <li className="text-black">How do I file a Insurance for Visitors Claim?</li>
                      </a>
                      <a href="https://infplans.com/dental-coverage-visitors-insurance.html" target="_blank">
                        <li className="text-black">Dental Discount Coverage Provided by Careington</li>
                      </a>
                      <a href="https://8320.infplans.com/visitor-insurance-terminology-for-parents.html" target="_blank">
                        <li className="text-black">Insurance for Visitors Terminology </li>
                      </a>
                      <a href="https://8320.infplans.com/why-inf.html" target="_blank">
                        <li className="text-black">Why INF Visitor Insurance?</li>
                      </a>
                      <a href="https://8320.infplans.com/best-visitors-insurance.html" target="_blank">
                        <li className="text-black">What is the best Insurance for Visitors?</li>
                      </a>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  )
}

export default FAQPage

export const query = graphql`
  query FAQPageQuery {
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
    hero_background: file(name: { eq: "faqs-hero-bg" }) {
      childImageSharp {
        fluid(maxWidth: 1400, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
  }
`
