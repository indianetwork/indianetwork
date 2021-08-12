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

const DentalDiscountProgramPage: React.FC<Props> = ({ data, location }: Props) => {
  const meta = data.site?.meta
  const hero_background = data.hero_background?.childImageSharp?.fluid
  const care_pos_logo = data.care_pos_logo?.childImageSharp?.fluid
  const unoa_logo = data.unoa_logo?.childImageSharp?.fluid
  const eyemed_logo = data.eyemed_logo?.childImageSharp?.fluid

  const phoneNumber = meta.phoneNumber
  const emailAddress = meta.emailAddress
  const emailAddressUrl = "mailto:"+emailAddress
  const phoneNumberUrl = "tel:"+phoneNumber

  return (
    <Layout location={location}>
      <Helmet>
        <title>Dental Discount Program - Visitors Insurance & Travel Insurance</title>
        <meta property="og:site_name" content="INF Visitor Insurance"/>
        <meta name="description" content="Dental Coverage for Visitors to USA. Dental Insurance for Parents visiting USA. Dental Insurance for Visitors"/>
        <meta name="keywords" content="dental insurance for visiting parents, Insurance for Visitors for dental, dental Insurance for Visitors to USA, insurance for dental for tourist visitng us, visitor medical insurance, travel medical insurance"/>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Helmet>
      <BackgroundImage
        Tag="section"
        className="dental-discount-hero-section-bg"
        fluid={hero_background}
        alt="dental discount"
      >
        <div id="dental-discount-hero-section">
          <Container>
            <div className="col-lg-12">
              <h1 className="text-white text-center text-uppercase">
                Careington Non-Insurance Discount Program
              </h1>
              <Link to="/inf-easy-select">
                <button className="hero-btn"> Get a Quote </button>
              </Link>
            </div>
          </Container>
        </div>
      </BackgroundImage>

      <section id="dental-discount-section-1">
       <Container>
        <div className="col-lg-12">
          <div className="dental-discount-container">
           <h2 className="text-blue text-center">Careington Non-Insurance Discount Program when traveling to the USA.</h2>
           <p className="text-center">
             Enrollment in an INF plan includes access to a Careington discount program at no additional cost, Careington coordinates this discount program, which provides savings on Dental, Vision, Prescription, & Hearing products & services while in the USA. Services are not available in Canada or Mexico. This Discount card program is not an insurance product and is not insured by Crum & Forster SPC. It is provided by Careington. This is not insurance. Way too often someone will call the INF office and say, "I have a toothache, if I go to the dentist will this be covered?".
           </p>
            <p className="text-center">
              All INF plans come with the Careington POS Dental Discount Card for INF plan member at no cost additional to you. Keep in mind- this is not insurance but a discount card to help with the cost of dental procedures while in the United States. The Careington Dental card is simple to use. When you enroll in an INF plan- the discount card is provided in your welcome email. If you have any dental issue- simply locate one of Careington's 13,000 in-network dentists near you, and visit the dental office. The Careington Dental Plan will act as an instant savings card- affording you dental discounts on services.
            </p>
            <p className="text-center">
              Save 20% to 50% on most dental procedures including routine oral exams, unlimited cleanings, and major work such as dentures, root canals, and crowns through one of the largest dental networks nationally with a focus on neighborhood dentists.
            </p>
            <p className="text-center">
              Cosmetic dentistry such as bonding and veneers also included.
            </p>
            <p className="text-center">
              All dentists must meet highly selective credentialing standards based on education, background, license standing and other requirements.
            </p>
            <p className="text-center">
              You may visit any participating dentist on the plan and change providers at any time.
            </p>
            <p className="text-center">
              To locate a participating provider in the United States, please call {phoneNumber} or visit our INF Provider Search link to access our online provider search.
            </p>
            <p className="text-center">
              The cost of the plan includes insurance and non-insurance components.
            </p>
           </div>
         </div>
         <div className="col-lg-12">
         </div>
      </Container>
     </section>

     <section id="dental-discount-section-2">
       <Container>
         <div className="col-lg-12">
           <p className="text-black text-center"><strong>The services described in this page are not Insurance and are not affiliated with Crum & Forster SPC. This is not an Insurance product.</strong></p>
           <h2 className="text-blue text-center">Careington Dental Discount FAQ:</h2>
           <div className="dental-discount-faq1-tab">
             <input checked="checked" id="dental-discount-faq1-tab1" type="radio" name="dental-discount-faq1" />
             <input id="dental-discount-faq1-tab2" type="radio" name="dental-discount-faq1" />
             <nav>
               <ul>
                 <li className="dental-discount-faq1-tab1">
                   <label for="dental-discount-faq1-tab1">How are claims handled by the Careington Dental Discount Plan?</label>
                 </li>
                 <li className="dental-discount-faq1-tab2">
                   <label for="dental-discount-faq1-tab2">Why is it important to have access to dental discounts when visiting the United States?</label>
                 </li>
               </ul>
             </nav>
             <section>
               <div className="dental-discount-faq1-tab1">
                 <p className="text-black">The beauty of the Careington Dental Discount Plan is that there is no hassle of filing claims or filing for reimbursement from the company. Rather- the Careington card acts as a discount card or instant savings card, meaning you pay the discounted rate at participating dentists.</p>
                 <p className="text-black">For example- you visit a dental office that charges $600 for a root canal that you desperately need. If the dental office participates in the Careington Dental Discount Plan all you need to do is show your Careington Dental Discount card to the front receptionist, you will then get a discounted rate for your procedure. The discounted rate will be the price you pay. Very simple- no need to file for claims or reimbursement- depending on the procedure you can save as much as over 50% of the cost by just showing your card!</p>
               </div>
               <div className="dental-discount-faq1-tab2">
                 <p className="text-black">​Many visitors run into some sort of dental issue while outside their home country. In fact, a survey of INF Members in 2018 found that 46% of insured persons who visited the US complained of some sort of dental issue during their visit. A common question we're asked at INF is, "I can't eat anything due to this toothache! What can I do?" According to MemberBenefits.com, the average cost of a regular dental visit is going to be almost $285- let alone the cost of a tooth extraction or new dentures!</p>
               </div>
             </section>
           </div>
         </div>
       </Container>

       <Container>
         <div className="col-lg-12">
           <div className="dental-discount-faq2-tab">
             <input checked="checked" id="dental-discount-faq2-tab1" type="radio" name="dental-discount-faq2" />
             <input id="dental-discount-faq2-tab2" type="radio" name="dental-discount-faq2" />
             <input id="dental-discount-faq2-tab3" type="radio" name="dental-discount-faq2" />
             <input id="dental-discount-faq2-tab4" type="radio" name="dental-discount-faq2" />
             <nav>
               <ul>
                 <li className="dental-discount-faq2-tab1">
                   <label for="dental-discount-faq2-tab1">Careington POS Dental Discount</label>
                 </li>
                 <li className="dental-discount-faq2-tab2">
                   <label for="dental-discount-faq2-tab2">UNoA Prescription Discount Program</label>
                 </li>
                 <li className="dental-discount-faq2-tab3">
                   <label for="dental-discount-faq2-tab3">EyeMed Discount Program</label>
                 </li>
                 <li className="dental-discount-faq2-tab4">
                   <label for="dental-discount-faq2-tab4">Amplifon Hearing Discount Program</label>
                 </li>
               </ul>
             </nav>
             <section>
               <div className="dental-discount-faq2-tab1">
                 <div className="row">
                  <div className="col-lg-8">
                    <Img fluid={care_pos_logo} className="right-logo-mobile" />
                    <p className="text-left text-black tab-title">Careington POS Dental Discount</p>
                    <ul>
                      <li className="text-left text-black">Save <strong>20% to 50%</strong> on most dental procedures including routine oral exams, unlimited cleanings, and major work such as dentures, root canals, and crowns through one of the largest dental networks nationally with a focus on neighborhood dentists.</li>
                      <li className="text-left text-black">Cosmetic dentistry such as bonding and veneers also included</li>
                      <li className="text-left text-black">All dentists must meet highly selective credentialing standards based on education, background, license standing and other requirements</li>
                    </ul>
                  </div>
                  <div className="col-lg-4">
                    <Img fluid={care_pos_logo} className="right-logo" />
                  </div>
                  <div className="col-lg-12 bottom-p">
                    <ul>
                      <li className="text-left text-black">You may visit any participating dentist on the plan and change providers at any time</li>
                      <li className="text-left text-black">To locate a participating provider, please call <strong>{phoneNumber}</strong> or visit our <a href="https://inf.solutionssimplified.com" target="_blank" className="search-link">INF Provider Search</a> link to access our online provider search.</li>
                    </ul>
                  </div>
                 </div>
               </div>
               <div className="dental-discount-faq2-tab2">
                 <div className="row">
                  <div className="col-lg-7">
                    <Img fluid={unoa_logo} className="right-logo-mobile" />
                    <p className="text-left text-black tab-title">UNoA Prescription Discount Program</p>
                    <ul>
                      <li className="text-left text-black">Plan Members will have access to savings between <strong>15% to 60%</strong> off the retail price of generic drugs and 10% to 25% off the retail price of brand name drugs at over 68,000 participating pharmacies nationwide including Safeway, CVS, Duane Reade, Wal-Mart, Target, Walgreens, Rite Aid and many more.</li>
                    </ul>
                  </div>
                  <div className="col-lg-5">
                    <Img fluid={unoa_logo} className="right-logo" />
                  </div>
                  <div className="col-lg-12 bottom-p">
                    <ul>
                      <li className="text-left text-black">At the pharmacy, plan members will simply present their membership card to save on prescription drugs. Even if plan members have prescription benefits through a health insurance carrier, a comparison of costs between the two programs should be performed to determine the most savings.</li>
                    </ul>
                  </div>
                 </div>
               </div>
               <div className="dental-discount-faq2-tab3">
                 <div className="row">
                  <div className="col-lg-7">
                    <Img fluid={eyemed_logo} className="right-logo-mobile" />
                    <p className="text-left text-black tab-title">EyeMed Discount Program </p>
                    <ul>
                      <li className="text-left text-black">Regular eye exams are not good for your eye health – they’re good for your overall health, too. Annual eye exams can detect signs of serious health issues, such as diabetes and high blood pressure.</li>
                    </ul>
                  </div>
                  <div className="col-lg-5">
                    <Img fluid={eyemed_logo} className="right-logo" />
                  </div>
                  <div className="col-lg-12 bottom-p">
                    <ul>
                      <li className="text-left text-black">Plan Members save <strong>20% to 40%</strong> off the retail price of eyewear with the EyeMed Vision Care Access Plan D discount program through the Access network. Members are eligible for discounts on exams, eyeglasses and contact lenses from more than 90,000 providers nationwide including independent optometrists, ophthalmologists, opticians and leading optical retailers such as LensCrafters®, Sears Optical®, Target Optical®, JCPenney® Optical and most Pearle Vision® locations.</li>
                      <li className="text-left text-black">Plan Members can choose the doctors they want and the brands they love, like Ray-Ban®, Oakley ® and Coach ®.</li>
                    </ul>
                  </div>
                 </div>
               </div>
               <div className="dental-discount-faq2-tab4">
                <div className="row">
                 <div className="col-lg-12">
                   <p className="text-left text-black tab-title">Amplifon Hearing Discount Program</p>
                   <ul>
                     <li className="text-left text-black">Hearing aid low price guarantee: If you should find the same product at a lower price, bring us the local quote and we’ll not match it, we’ll beat it by 5%!</li>
                     <li className="text-left text-black">As a plan member, you will receive a <strong>40% discount</strong> on diagnostic services, including hearing exams.</li>
                     <li className="text-left text-black">2 years of free batteries (80 cells per hearing aid, per year)</li>
                     <li className="text-left text-black"><strong>For more information or to schedule an appointment</strong>, call toll-free <strong>1-866-211-6045</strong>. Our Patient Care Advocate will explain our program, answer any questions or schedule an appointment at any of our over 3,800 locations nationwide.</li>
                     <li className="text-left text-black">Learn more about our program at <a href="https://www.amplifonusa.com/careington" target="_blank">www.amplifonusa.com/careington</a>.</li>
                   </ul>
                 </div>
                </div>
               </div>
             </section>
           </div>
         </div>
       </Container>
     </section>
    </Layout>
  )
}

export default DentalDiscountProgramPage

export const query = graphql`
  query DentalDiscountProgramPageQuery {
    site {
      meta: siteMetadata {
        title
        description
        siteUrl
        author
        twitter
        phoneNumber
        emailAddress
      }
    },
    hero_background: file(name: { eq: "dental-discount-hero-bg-1" }) {
      childImageSharp {
        fluid(maxWidth: 1400, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    care_pos_logo: file(name: { eq: "care-pos-logo" }) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    unoa_logo: file(name: { eq: "UNOA-logo" }) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    eyemed_logo: file(name: { eq: "eyemed-logo" }) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
  }
`
