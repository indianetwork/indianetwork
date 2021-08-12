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

const StandardPage: React.FC<Props> = ({ data, location }: Props) => {
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

  const phoneNumber = meta.phoneNumber
  const emailAddress = meta.emailAddress
  const emailAddressUrl = "mailto:"+emailAddress
  const phoneNumberUrl = "tel:"+phoneNumber


  function showInfBMI() {
    setInfBMIStatus(true);
  }

  function hideInfBMI() {
    setInfBMIStatus(false);
  }

  return (
    <Layout location={location}>
      <Helmet>
        <title>Cost-Effective Insurance for Visitors to USA - INF Visitor Care</title>
        <meta name="description" content="INF Standard IVAS is the best low cost insurance for visitors. This plan includes dental and vision coverage, and covers urinary tract infections"/>
        <meta name="keywords" content="INF Standard IVAS, inf insurance, cheap insurance for visitors, kv rao insurance, kvrao insurance,insurance for visitors, visitor insurance usa, accident &amp; sickness insurance for visitors to usa, accident &amp; sickness insurance for visitors to usa, visitor accident &amp; sickness insurance usa, visitor accident &amp; sickness insurance, visitor insurance for parents, insurance for visitors for parents"/>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Helmet>
      <BackgroundImage
        Tag="section"
        className="standard-hero-section-bg"
        fluid={hero_background}
        alt="standard"
      >
        <div id="standard-hero-section">
          <Container>
            <div className="col-lg-12">
              <h1 className="text-white text-center">
                INF STANDARD IVAS PLAN
              </h1>
              <p className="hero-text text-white text-center">
                The INF Standard IVAS plan is an accident & sickness insurance program for plan members visiting the United States Canada, or Mexico.
             </p>
              <Link to="/inf-easy-select" className="nav-link">
                <button className="hero-btn"> Get a Quote </button>
              </Link>
            </div>
          </Container>
        </div>
      </BackgroundImage>

      <section id="standard-section1">
        <Container>
          <div className="standard-container">
            <h2 className="text-blue text-center">INF Standard International Visitor Accident & Sickness Insurance (IVAS)</h2>
            <div className="row mt-5">
              <div className="col-lg-8">
                <p className="text-black">The INF Standard IVAS plan is an accident & sickness insurance program for INF members visiting the United States Canada, or Mexico. This plan pays eligible medical expense benefits for covered expenses that result from a covered accident or sickness, as per the terms and conditions listed in the plan.</p>
                {infBMIStatus ?
                  <>
                  <p>This means eligible out-patient, specialist, urgent care, and in-patient expenses are covered by this plan for new sicknesses and accidents as defined in the plan. After the deductible has been met, coverage is provided for usual and customary charges for medically necessary covered expenses, up to the plan limits and benefit maximums. Direct Billing may be available from your provider.</p>
                  <p>There is no coverage for pre-existing conditions in the INF Standard IVAS plan. Pre-existing condition means an illness, disease, or other condition of the Covered Person that in the 12-month period before the Covered Person’s coverage became effective under the Policy: 1. first manifested itself, worsened, became acute, or exhibited symptoms that would have caused a person to seek diagnosis, care, or treatment; or 2. required taking prescribed drugs or medicines, unless the condition for which the prescribed drug or medicine is taken remains controlled without any change in the required prescription; or 3. was treated by a Doctor or treatment had been recommended by a Doctor.</p>
                  <p>In addition to accident and sickness benefits, the INF Standard IVAS program includes eligible Emergency Medical Evacuation Benefits, Repatriation of Remains Benefits, and Accidental Death and Dismemberment Benefits.</p>
                  <p>This plan is available to non-US Citizens ages 0-99 traveling to the US, Canada or Mexico when purchased before the start date of your trip for at least 30 days and no more than 364 days, which is the Maximum Period of Coverage. Enrollment can be completed Online. INF Standard IVAS plan has been offered for more than 30 years by INF as part of its commitment to providing international accident & sickness insurance to non-US Citizen who are members of the INF*.</p>
                  <p>The INF Standard IVAS plan is sponsored by INF* and the insurance portion of the plan is underwritten by Crum & Foster SPC.</p>
                <a href="javascript:void(0)" className="read-less" onClick={hideInfBMI}>READ LESS <FaAngleDoubleUp className="double-arrow-up" /></a>
              </>
              :
                <a href="javascript:void(0)" className="read-more" onClick={showInfBMI}>READ MORE <FaAngleDoubleDown className="double-arrow-down" /></a>
              }
            </div>
              <div className="col-lg-4">
                <Img fluid={infplans_big_logo} className="big-logo"/>
                <h3 className="text-blue text-center">INF Standard IVAS Plan</h3>
                <Link to="/inf-easy-select"><button className="row-btn"> Click to Get a Quote </button></Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="standard-section2">
        <Container>
          <div className="col-lg-12">
            <h3 className="text-white text-center">As a plan member you will also have access to additional Non-Insurance Features when traveling to the USA including:</h3>
          </div>
          <div className="col-lg-12">
            <div className="row mt-5">
              <div className="col-lg-6">
                <Img fluid={section2_img_right} className="section2-img1-mobile"/>
                <ul>
                  <li className="text-white">Access to a Careington discount program at no additional cost with the INF Standard International Visitor Accident & Sickness Insurance. Careington coordinates this discount program, which provides savings on Dental, Vision, Prescription, & Hearing products & services in the United States. For example, you may see savings of up to 50% for Dental procedures! For more information on benefits of the discount program, please visit our page on the Discount Card Program. This Discount card program is not an insurance product and is not insured by Crum & Forster SPC. This is not insurance.</li>
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
                  <li className="text-white">As a plan member, you will be provided access to MDLive- a telehealth feature which allows members to get medical care from the comfort of their own home. While in the United States, MDLive allows members to schedule an appointment with a healthcare provider that is credentialed, certified and highly trained, and typically arrange medical care within 1 hour. The doctor will video or audio chat with you and if required, send a prescription to the nearest pharmacy (note that prescriptions may require out of pocket expense if they are not eligible expenses). MDLive can be used for any non life threatening condition. This is not an insurance product and is not insured by Crum & Forster SPC. MDLive only provides access to and helps arrange the telehealth visits. Any eligible benefits are paid under the terms of the IVAS Standard insurance policy.</li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="standard-section3">
        <Container>
          <div className="col-lg-12">
            <h2 className="text-blue text-center">INF Standard IVAS Coverages</h2>
            <p className="text-black text-center tab-row-title">*The Standard Plan has no coverage for pre-existing conditions.</p>
            <div className="standard-coverages-tab">
              <input checked="checked" id="standard-coverages-tab1" type="radio" name="standard-coverages" />
              <input id="standard-coverages-tab2" type="radio" name="standard-coverages" />
              <nav>
                <ul>
                  <li className="standard-coverages-tab1">
                    <label for="standard-coverages-tab1">INF Standard IVAS Plan Medical Expense Options  <br/> <span className="text-black age-title">Age 0-69</span></label>
                  </li>
                  <li className="standard-coverages-tab2">
                    <label for="standard-coverages-tab2">INF Standard IVAS Plan Medical Expense Options <br/> <span className="text-black age-title">Age 70-99</span></label>
                  </li>
                </ul>
              </nav>
              <section>
                <div className="standard-coverages-tab1">
                  <p className="text-black text-center tab-row-title">$50,000 Total Maximum Per Accident or Sickness Expense Benefits</p>
                  <div className="row">
                    <div className="col-lg-10">
                      <div className="column-tab">
                        <p className="text-white column-tab-title">Deductible Per Covered Accident or Sickness Expense</p>
                      </div>
                      <p className="tab-content text-black">$75</p>
                      <p className="tab-content text-black">$100</p>
                      <p className="tab-content text-black">$250</p>
                      <p className="tab-content text-black">$500</p>
                      <p className="tab-content text-black">$1,000</p>
                      <p className="tab-content text-black">$2,500</p>
                      <p className="tab-content text-black">$5,000</p>
                    </div>
                  </div>
                  <p className="text-black text-center tab-row-title">$100,000 Maximum Per Accident or Sickness Expense Benefits</p>
                  <div className="row">
                    <div className="col-lg-10">
                      <div className="column-tab">
                        <p className="text-white column-tab-title">Deductible Per Covered Accident or Sickness Expense</p>
                      </div>
                      <p className="tab-content text-black">$75</p>
                      <p className="tab-content text-black">$100</p>
                      <p className="tab-content text-black">$250</p>
                      <p className="tab-content text-black">$500</p>
                      <p className="tab-content text-black">$1,000</p>
                      <p className="tab-content text-black">$2,500</p>
                      <p className="tab-content text-black">$5,000</p>
                    </div>
                  </div>
                  <p className="text-black text-center tab-row-title">$150,000 Maximum Per Accident or Sickness Expense Benefits</p>
                  <div className="row">
                    <div className="col-lg-10">
                      <div className="column-tab">
                        <p className="text-white column-tab-title">Deductible Per Covered Accident or Sickness Expense</p>
                      </div>
                      <p className="tab-content text-black">$75</p>
                      <p className="tab-content text-black">$100</p>
                      <p className="tab-content text-black">$250</p>
                      <p className="tab-content text-black">$500</p>
                      <p className="tab-content text-black">$1,000</p>
                      <p className="tab-content text-black">$2,500</p>
                      <p className="tab-content text-black">$5,000</p>
                    </div>
                  </div>
                </div>
                <div className="standard-coverages-tab2">
                  <p className="text-black text-center tab-row-title">$50,000 Total Maximum Per Accident or Sickness Expense Benefits</p>
                  <div className="row">
                    <div className="col-lg-10">
                      <div className="column-tab">
                        <p className="text-white column-tab-title">Deductible Per Covered Accident or Sickness Expense</p>
                      </div>
                      <p className="tab-content text-black">$250</p>
                      <p className="tab-content text-black">$500 </p>
                      <p className="tab-content text-black">$1,000</p>
                      <p className="tab-content text-black">$2,500</p>
                      <p className="tab-content text-black">$5,000</p>
                    </div>
                  </div>
                  <p className="text-black text-center tab-row-title">$100,000 Maximum Per Accident or Sickness Expense Benefits</p>
                  <div className="row">
                    <div className="col-lg-10">
                      <div className="column-tab">
                        <p className="text-white column-tab-title">Deductible Per Covered Accident or Sickness Expense</p>
                      </div>
                      <p className="tab-content text-black">$250</p>
                      <p className="tab-content text-black">$500 </p>
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

      <section id="standard-section4">
        <Container>
          <div className="col-lg-12">
          <h2 className="text-blue text-center">INF Standard IVAS Schedule of Benefits </h2>
          <p className="text-black text-center tab-row-title">$50,000 Policy Max</p>

            <div className="standard-benefits1-tab">
              <input checked="checked" id="standard-benefits1-tab1" type="radio" name="standard-benefits1" />
              <input id="standard-benefits1-tab2" type="radio" name="standard-benefits1" />
              <input id="standard-benefits1-tab3" type="radio" name="standard-benefits1" />
              <nav>
                <ul>
                  <li className="standard-benefits1-tab1">
                    <label for="standard-benefits1-tab1">In-Patient Services</label>
                  </li>
                  <li className="standard-benefits1-tab2">
                    <label for="standard-benefits1-tab2">Out-Patient Services</label>
                  </li>
                  <li className="standard-benefits1-tab3">
                    <label for="standard-benefits1-tab3">Other Benefits</label>
                  </li>
                </ul>
              </nav>
              <section>
                <div className="standard-benefits1-tab1">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="column-tab">
                        <p className="text-white column-tab-title">Covered Medical Services</p>
                      </div>
                      <p className="tab-content2 text-black">Hospital Room & Board</p>
                      <p className="tab-content2 text-black">Hospital Intensive Care Unit Room & Board</p>
                      <p className="tab-content text-black">Doctor Surgical Expenses</p>
                      <p className="tab-content text-black">Anesthetics</p>
                      <p className="tab-content text-black">Assistant Surgeon Expenses</p>
                      <p className="tab-content text-black">Doctor's Non-Surgical Treatment/Examination Expenses</p>
                      <p className="tab-content text-black">Consultation visits when requested by a Doctor</p>
                      <p className="tab-content text-black">Pre-Admission Tests within 14 days before hospital admission</p>
                    </div>
                    <div className="col-lg-6">
                      <div className="column-tab">
                        <p className="text-white column-tab-title">In-Patient Medical Benefits</p>
                      </div>
                      <p className="tab-content text-black">Charges up to $1,300 per day maximum<br /> Up to 30 days</p>
                      <p className="tab-content text-black">Up to an additional $525 maximum additional per day | Up to 8 Days</p>
                      <p className="tab-content text-black">Up to $3,000 maximum</p>
                      <p className="tab-content text-black">Up to $750 maximum</p>
                      <p className="tab-content text-black">​Up to $750 maximum</p>
                      <p className="tab-content text-black">Up to $60 maximum per visit, 1 visit per day, to 30 visits</p>
                      <p className="tab-content text-black">Up to $400 maximum</p>
                      <p className="tab-content2 text-black">Up to $1,000 maximum</p>
                    </div>
                  </div>
                </div>
                <div className="standard-benefits1-tab2">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="column-tab">
                        <p className="text-white column-tab-title">Covered Medical Services</p>
                      </div>
                      <p className="tab-content text-black">Surgical Room & Supply Expenses</p>
                      <p className="tab-content text-black">Hospital Emergency</p>
                      <p className="tab-content text-black">Doctor Surgical Expenses</p>
                      <p className="tab-content text-black">Anesthetics</p>
                      <p className="tab-content text-black">Assistant Surgeon Expenses</p>
                      <p className="tab-content text-black">Doctor's Non-Surgical Treatment/Examination Expenses</p>
                      <p className="tab-content text-black">X-rays & laboratory procedures</p>
                      <p className="tab-content text-black">CAT Scan, PET Scan, or MRI</p>
                      <p className="tab-content text-black">Prescription Drug Expenses</p>
                    </div>
                    <div className="col-lg-6">
                      <div className="column-tab">
                        <p className="text-white column-tab-title">Out-Patient Medical Benefits</p>
                      </div>
                      <p className="tab-content text-black">Up to $1,000 maximum</p>
                      <p className="tab-content text-black">Up to $350</p>
                      <p className="tab-content text-black">Up to $3,000 maximum</p>
                      <p className="tab-content text-black">​Up to $750 maximum</p>
                      <p className="tab-content text-black">​Up to $750 maximum</p>
                      <p className="tab-content text-black">Up to $60 per visit maximum | 1 visit per day <br />Up to 10 visits</p>
                      <p className="tab-content text-black">Up to $400 maximum</p>
                      <p className="tab-content text-black">​Up to $400 additional</p>
                      <p className="tab-content text-black">Up to $100 maximum</p>
                    </div>
                  </div>
                </div>
                <div className="standard-benefits1-tab3">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="column-tab">
                        <p className="text-white column-tab-title">Covered Medical Services</p>
                      </div>
                      <p className="tab-content text-black">Ambulance Expenses</p>
                      <p className="tab-content text-black">Rehabilitative Braces or Appliances</p>
                      <p className="tab-content2 text-black">Dental Treatment (Injury )</p>
                      <p className="tab-content text-black">Chemotherapy and/or Radiation Therapy</p>
                      <p className="tab-content text-black">Physical & Occupational Therapy</p>
                      <p className="tab-content text-black">Private Duty Nurse</p>
                      <p className="tab-content text-black">Pregnancy or Childbirth (Conception must Occur After Trip Begins)</p>
                    </div>
                    <div className="col-lg-6">
                      <div className="column-tab">
                        <p className="text-white column-tab-title">Other Medical Benefits</p>
                      </div>
                      <p className="tab-content text-black">Up to $400 maximum</p>
                      <p className="tab-content text-black">Up to $1,000 maximum</p>
                      <p className="tab-content text-black">​Up to $450. There are no benefits for dental services for immediate relief of pain.</p>
                      <p className="tab-content text-black">Up to $1,000 maximum</p>
                      <p className="tab-content text-black">Up to $35 per visit max, 1 Visit per day to 12 visits</p>
                      <p className="tab-content text-black">Up to $400 maximum</p>
                      <p className="tab-content2 text-black">Up to $4,500 maximum</p>
                    </div>
                    <div className="column-tab">
                      <p className="text-white column-tab-title">Additional Benefits</p>
                    </div>
                    <div className="col-lg-6">
                      <p className="tab-content text-black">Emergency Medical Evacuation Benefit</p>
                      <p className="tab-content text-black">Repatriation of Remains Benefit</p>
                      <p className="tab-content text-black">Accidental Death & Dismemberment</p>
                    </div>
                    <div className="col-lg-6">
                      <p className="tab-content text-black">$15,000 maximum</p>
                      <p className="tab-content text-black">$10,000 maximum​</p>
                      <p className="tab-content text-black">$25,000 Principal Sum</p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </Container>
        <Container>
          <div className="col-lg-12 mt-4">
          <p className="text-black text-center tab-row-title">$100,000 Policy Max</p>

            <div className="standard-benefits2-tab">
              <input checked="checked" id="standard-benefits2-tab1" type="radio" name="standard-benefits2" />
              <input id="standard-benefits2-tab2" type="radio" name="standard-benefits2" />
              <input id="standard-benefits2-tab3" type="radio" name="standard-benefits2" />
              <nav>
                <ul>
                  <li className="standard-benefits2-tab1">
                    <label for="standard-benefits2-tab1">In-Patient Services</label>
                  </li>
                  <li className="standard-benefits2-tab2">
                    <label for="standard-benefits2-tab2">Out-Patient Services</label>
                  </li>
                  <li className="standard-benefits2-tab3">
                    <label for="standard-benefits2-tab3">Other Benefits</label>
                  </li>
                </ul>
              </nav>
              <section>
                <div className="standard-benefits2-tab1">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="column-tab">
                        <p className="text-white column-tab-title">Covered Medical Services</p>
                      </div>
                      <p className="tab-content2 text-black">Hospital Room & Board</p>
                      <p className="tab-content2 text-black">Hospital Intensive Care Unit Room & Board</p>
                      <p className="tab-content text-black">Doctor Surgical Expenses</p>
                      <p className="tab-content text-black">Anesthetics</p>
                      <p className="tab-content text-black">Assistant Surgeon Expenses</p>
                      <p className="tab-content text-black">Doctor's Non-Surgical Treatment/Examination Expenses</p>
                      <p className="tab-content text-black">Consultation visits when requested by a Doctor</p>
                      <p className="tab-content text-black">Pre-Admission Tests within 14 days before hospital admission</p>
                    </div>
                    <div className="col-lg-6">
                      <div className="column-tab">
                        <p className="text-white column-tab-title">In-Patient Medical Benefits</p>
                      </div>
                      <p className="tab-content text-black">Charges up to $1,750 per day maximum<br /> Up to 30 days</p>
                      <p className="tab-content text-black">Up to an additional $750 per day <br />Up to 8 Days</p>
                      <p className="tab-content text-black">Up to $5,000 maximum</p>
                      <p className="tab-content text-black">Up to $1,250 maximum</p>
                      <p className="tab-content text-black">Up to $1,250 maximum</p>
                      <p className="tab-content text-black">Up to $100 maximum per visit, 1 visit per day, to 30 visits</p>
                      <p className="tab-content text-black">Up to $450 maximum</p>
                      <p className="tab-content2 text-black">Up to $1,100 maximum</p>
                    </div>
                  </div>
                </div>
                <div className="standard-benefits2-tab2">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="column-tab">
                        <p className="text-white column-tab-title">Covered Medical Services</p>
                      </div>
                      <p className="tab-content text-black">Surgical Room & Supply Expenses</p>
                      <p className="tab-content text-black">Hospital Emergency</p>
                      <p className="tab-content text-black">Doctor Surgical Expenses</p>
                      <p className="tab-content text-black">Anesthetics</p>
                      <p className="tab-content text-black">Assistant Surgeon Expenses</p>
                      <p className="tab-content text-black">Doctor's Non-Surgical Treatment/Examination Expenses</p>
                      <p className="tab-content text-black">X-rays & laboratory procedures</p>
                      <p className="tab-content text-black">CAT Scan, PET Scan, or MRI</p>
                      <p className="tab-content text-black">Prescription Drug Expenses</p>
                    </div>
                    <div className="col-lg-6">
                      <div className="column-tab">
                        <p className="text-white column-tab-title">Out-Patient Medical Benefits</p>
                      </div>
                      <p className="tab-content text-black">Up to $1,100 maximum</p>
                      <p className="tab-content text-black">Up to $500</p>
                      <p className="tab-content text-black">Up to $5,000 maximum</p>
                      <p className="tab-content text-black">​Up to $1,250 maximum</p>
                      <p className="tab-content text-black">​Up to $1,250 maximum</p>
                      <p className="tab-content text-black">Up to $100 per visit maximum | 1 visit per day <br/>Up to 10 visits</p>
                      <p className="tab-content text-black">Up to $650 maximum</p>
                      <p className="tab-content text-black">Up to $650 additional</p>
                      <p className="tab-content text-black">Up to $150 maximum</p>
                    </div>
                  </div>
                </div>
                <div className="standard-benefits2-tab3">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="column-tab">
                        <p className="text-white column-tab-title">Covered Medical Services</p>
                      </div>
                      <p className="tab-content text-black">Ambulance Expenses</p>
                      <p className="tab-content text-black">Rehabilitative Braces or Appliances</p>
                      <p className="tab-content2 text-black">Dental Treatment (Injury )</p>
                      <p className="tab-content text-black">Chemotherapy and/or Radiation Therapy</p>
                      <p className="tab-content text-black">Physical & Occupational Therapy</p>
                      <p className="tab-content text-black">Private Duty Nurse</p>
                      <p className="tab-content text-black">Pregnancy or Childbirth (Conception must Occur After Trip Begins)</p>
                    </div>
                    <div className="col-lg-6">
                      <div className="column-tab">
                        <p className="text-white column-tab-title">Other Medical Benefits</p>
                      </div>
                      <p className="tab-content text-black">Up to $450 maximum</p>
                      <p className="tab-content text-black">Up to $1,100 maximum</p>
                      <p className="tab-content text-black">​Up to $500. There are no benefits for dental services for immediate relief of pain.</p>
                      <p className="tab-content text-black">Up to $1,150 maximum</p>
                      <p className="tab-content text-black">Up to $45 per visit max, 1 Visit per day up to 12 visits</p>
                      <p className="tab-content text-black">Up to $500 maximum</p>
                      <p className="tab-content2 text-black">Up to $5,000 maximum</p>
                    </div>
                    <div className="column-tab">
                      <p className="text-white column-tab-title">Additional Benefits</p>
                    </div>
                    <div className="col-lg-6">
                      <p className="tab-content text-black">Emergency Medical Evacuation Benefit</p>
                      <p className="tab-content text-black">Repatriation of Remains Benefit</p>
                      <p className="tab-content text-black">Accidental Death & Dismemberment</p>
                    </div>
                    <div className="col-lg-6">
                      <p className="tab-content text-black">$20,000 maximum</p>
                      <p className="tab-content text-black">$15,000 maximum​</p>
                      <p className="tab-content text-black">$25,000 Principal Sum</p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </Container>

        <Container>
          <div className="col-lg-12 mt-4">
          <p className="text-black text-center tab-row-title">$150,000 Policy Max</p>

            <div className="standard-benefits3-tab">
              <input checked="checked" id="standard-benefits3-tab1" type="radio" name="standard-benefits3" />
              <input id="standard-benefits3-tab2" type="radio" name="standard-benefits3" />
              <input id="standard-benefits3-tab3" type="radio" name="standard-benefits3" />
              <nav>
                <ul>
                  <li className="standard-benefits3-tab1">
                    <label for="standard-benefits3-tab1">In-Patient Services</label>
                  </li>
                  <li className="standard-benefits3-tab2">
                    <label for="standard-benefits3-tab2">Out-Patient Services</label>
                  </li>
                  <li className="standard-benefits3-tab3">
                    <label for="standard-benefits3-tab3">Other Benefits</label>
                  </li>
                </ul>
              </nav>
              <section>
                <div className="standard-benefits3-tab1">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="column-tab">
                        <p className="text-white column-tab-title">Covered Medical Services</p>
                      </div>
                      <p className="tab-content2 text-black">Hospital Room & Board</p>
                      <p className="tab-content2 text-black">Hospital Intensive Care Unit Room & Board</p>
                      <p className="tab-content text-black">Doctor Surgical Expenses</p>
                      <p className="tab-content text-black">Anesthetics</p>
                      <p className="tab-content text-black">Assistant Surgeon Expenses</p>
                      <p className="tab-content text-black">Doctor's Non-Surgical Treatment/Examination Expenses</p>
                      <p className="tab-content text-black">Consultation visits when requested by a Doctor</p>
                      <p className="tab-content text-black">Pre-Admission Tests within 14 days before hospital admission</p>
                    </div>
                    <div className="col-lg-6">
                      <div className="column-tab">
                        <p className="text-white column-tab-title">In-Patient Medical Benefits</p>
                      </div>
                      <p className="tab-content text-black">Charges up to $1,900 per day maximum<br /> Up to 30 days</p>
                      <p className="tab-content text-black">Up to an additional $850 maximum per maximum additional a day | Up to 8 Days</p>
                      <p className="tab-content text-black">Up to $6,000 maximum</p>
                      <p className="tab-content text-black">Up to $1,500 maximum</p>
                      <p className="tab-content text-black">Up to $1,500 maximum</p>
                      <p className="tab-content text-black">Up to $125 maximum per visit, 1 visit per day, to 30 visits</p>
                      <p className="tab-content text-black">Up to $500 maximum</p>
                      <p className="tab-content2 text-black">Up to $1,200 maximum</p>
                    </div>
                  </div>
                </div>
                <div className="standard-benefits3-tab2">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="column-tab">
                        <p className="text-white column-tab-title">Covered Medical Services</p>
                      </div>
                      <p className="tab-content text-black">Surgical Room and Supply Expenses</p>
                      <p className="tab-content text-black">Hospital Emergency</p>
                      <p className="tab-content text-black">Doctor Surgical Expenses</p>
                      <p className="tab-content text-black">Anesthetics</p>
                      <p className="tab-content text-black">Assistant Surgeon Expenses</p>
                      <p className="tab-content text-black">Doctor's Non-Surgical Treatment/Examination Expenses</p>
                      <p className="tab-content text-black">X-rays & laboratory procedures</p>
                      <p className="tab-content text-black">CAT Scan, PET Scan, or MRI</p>
                      <p className="tab-content text-black">Prescription Drug Expenses</p>
                    </div>
                    <div className="col-lg-6">
                      <div className="column-tab">
                        <p className="text-white column-tab-title">Out-Patient Medical Benefits</p>
                      </div>
                      <p className="tab-content text-black">Up to $1,200 maximum</p>
                      <p className="tab-content text-black">Up to $750 maximum</p>
                      <p className="tab-content text-black">Up to $6,000 maximum</p>
                      <p className="tab-content text-black">​Up to $1,500 maximum</p>
                      <p className="tab-content text-black">​Up to $1,500 maximum</p>
                      <p className="tab-content text-black">Up to $125 per visit maximum | 1 visit per day <br/>Up to 10 visits</p>
                      <p className="tab-content text-black">Up to $750 maximum</p>
                      <p className="tab-content text-black">Up to $1000 additional</p>
                      <p className="tab-content text-black">Up to $200 maximum</p>
                    </div>
                  </div>
                </div>
                <div className="standard-benefits3-tab3">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="column-tab">
                        <p className="text-white column-tab-title">Covered Medical Services</p>
                      </div>
                      <p className="tab-content text-black">Ambulance Expenses</p>
                      <p className="tab-content text-black">Rehabilitative Braces or Appliances</p>
                      <p className="tab-content2 text-black">Dental Treatment (Injury )</p>
                      <p className="tab-content text-black">Chemotherapy and/or Radiation Therapy</p>
                      <p className="tab-content text-black">Physical & Occupational Therapy</p>
                      <p className="tab-content text-black">Private Duty Nurse</p>
                      <p className="tab-content text-black">Pregnancy or Childbirth (Conception must Occur After Trip Begins)</p>
                    </div>
                    <div className="col-lg-6">
                      <div className="column-tab">
                        <p className="text-white column-tab-title">Other Medical Benefits</p>
                      </div>
                      <p className="tab-content text-black">Up to $500 maximum</p>
                      <p className="tab-content text-black">Up to $1,200 maximum</p>
                      <p className="tab-content text-black">​Up to $550. There are no benefits for dental services for immediate relief of pain.</p>
                      <p className="tab-content text-black">Up to $1,250 maximum</p>
                      <p className="tab-content text-black">Up to $50 per visit max, 1 Visit per day to 12 visits</p>
                      <p className="tab-content text-black">Up to $550 maximum</p>
                      <p className="tab-content2 text-black">Up to $5,500 maximum</p>
                    </div>
                    <div className="column-tab">
                      <p className="text-white column-tab-title">Additional Benefits</p>
                    </div>
                    <div className="col-lg-6">
                      <p className="tab-content text-black">Emergency Medical Evacuation Benefit</p>
                      <p className="tab-content text-black">Repatriation of Remains Benefit</p>
                      <p className="tab-content text-black">Accidental Death & Dismemberment</p>
                      <p className="tab-content text-black">Intercollegiate Sports</p>
                    </div>
                    <div className="col-lg-6">
                      <p className="tab-content text-black">$25,000 maximum</p>
                      <p className="tab-content text-black">$20,000 maximum​</p>
                      <p className="tab-content text-black">$25,000 Principal Sum</p>
                      <p className="tab-content text-black">None</p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </Container>
      </section>

      <section id="standard-section5">
        <Container>
          <div className="col-lg-12">
            <h2 className="text-blue text-center">INF Standard IVAS Plan Description</h2>
          </div>
          <div className="col-lg-12 ">
            <div className="row mt-4 justify-content-center">
              <div className="col-lg-5 text-center">
                <h3 className="text-black">Read More for Age 0-69 </h3>
                <Img fluid={book_icon} className="book-icon-img"/>
                <a href="https://infplans.com/policy_pdf/INF_Standard_0_69_Description_of_Benefits.pdf" target="_blank">
                  <button className="read-now-btn"> Read Now </button>
                </a>
              </div>
              <div className="col-lg-5 text-center">
                <h3 className="text-black">Read More for Age 70-99 </h3>
                <Img fluid={book2_icon} className="book-icon-img"/>
                 <a href="https://infplans.com/policy_pdf/INF_Standard_Policy_Document_70_99.pdf" target="_blank">
                  <button className="read-now-btn"> Read Now </button>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <BackgroundImage
        Tag="section"
        className="standard-cta-hero-section-bg"
        fluid={cta_bg}
        alt="cta"
      >
        <div id="standard-cta-section">
          <Container>
            <div className="col-lg-12">
              <h2 className="text-white text-center">Get Coverage Now</h2>
              <Link to="/apply"><button className="buy-now-btn"> Apply Now </button></Link>
            </div>
          </Container>
        </div>
      </BackgroundImage>

      <section id="standard-section7">
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
              <p className="text-black">In the event that you remain dissatisfied and wish to make a complaint you can do so to the Complaints team at {emailAddress}</p>
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

export default StandardPage

export const query = graphql`
  query StandardPageQuery {
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
    hero_background: file(name: { eq: "standard-hero-bg" }) {
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
    section2_img_right: file(name: { eq: "standard-section2-img-right" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    section2_img_left: file(name: { eq: "standard-section2-img-left" }) {
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
