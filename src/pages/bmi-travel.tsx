import React, {useState, useEffect} from 'react'
import { graphql, Link } from 'gatsby'
import Img, { FixedObject } from 'gatsby-image'
import { IndexQueryQuery, PostByPathQuery } from '../../types/graphql-types'
import Layout from 'components/layout/layout'
import Container from 'components/pages/container'
import BackgroundImage from 'gatsby-background-image'
import { FaAngleDoubleDown } from "@react-icons/all-files/fa/FaAngleDoubleDown";
import { FaAngleDoubleUp } from "@react-icons/all-files/fa/FaAngleDoubleUp";
import { Helmet } from 'react-helmet'
import PopupModal from 'components/Modals/PopupModal'
import BmiApplyForm from 'components/forms/bmi-apply-form'
import InfLogo from '../../content/images/inf-logo.png'

interface Props {
  data: IndexQueryQuery
  location: Location
}

const BMITravelPage: React.FC<Props> = ({ data, location }: Props) => {
  const meta = data.site?.meta
  const hero_background = data.hero_background?.childImageSharp?.fluid
  const bmi_logo = data.bmi_logo?.childImageSharp?.fluid
  const [infBMIStatus, setInfBMIStatus] = useState(false);
  const [popupModalVisible, setPopupModalVisible] = useState(false);

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
        <title>INF BMI Travel Assist Plans for Travelers with Pre-Existing Plans</title>
        <meta name="description" content="A detailed explanation of the INF Elite Accident and Sickness Insurance Plan. Insurance for Visitors covers pre-existing conditions."/>
        <meta name="keywords" content="Insurance for Visitors, visitor insurance usa, accident &amp; sickness insurance for Visitors to usa, accident &amp; sickness insurance for Visitors to usa, visitor accident &amp; sickness insurance usa, visitor accident &amp; sickness insurance, visitor insurance for parents, Insurance for Visitors for parents,best accident &amp; sickness insurance for Visitors to usa,visitors coverage insurance, best visitor insurance usa, travel insurance for usa visitors,Insurance for Visitors for parents from india,visitor insurance usa from india,Insurance for Visitors usa for parents from india"/>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Helmet>
      <BackgroundImage
        Tag="section"
        className="bmi-travel-hero-section-bg"
        fluid={hero_background}
        backgroundColor={`#e9f4f8`}
        alt="bmi travel hero background"
      >
        <div id="bmi-travel-hero-section">
          <Container>
            <div className="col-lg-12">
              <h1 className="text-white text-center">
                INF BMI TRAVEL ASSISTANCE
              </h1>
              <p className="text-white text-center hero-text">
                INF-BMI plans provide assistance for international trips with no deductible or copayments and 100% coverage to the listed maximum in the policy. INF BMI Travel Assistance covers COVID-19, some pre-existing conditions, and designed to cover one-off sicknesses for urgent care, ER, and hospitalization.               </p>
              <Link to="/bmi-apply">
                <button className="hero-btn"> Get a Quote </button>
              </Link>
            </div>
            <div className="col-lg-8"></div>
          </Container>
        </div>
      </BackgroundImage>

      <section id="bmi-travel-section-1">
       <Container>
         <div className="col-lg-12">
           <div className="bmi-travel-container">
            <h2 className="text-blue text-center">What is INF-BMI Travel Assist?</h2>
             <div className="row mt-4">
               <div className="col-lg-8">
                 <p>INF-BMI plans provide assistance for international trips with no deductible or copayments and provides coverage for full pre-existing conditions, acute onset of pre-existing conditions, and COVID-19 as per the limits in the Plan.</p>
                 <p>INF recommends enrolling in the Ultra Plus, VIP, VIP Plus- which provides comprehensive coverage for pre-existing, acute onset of pre-existing conditions, and COVID-19. INF-BMI plans can provide these innovative visitor insurance options.</p>
                 {infBMIStatus ?
                   <>
                     <p>BMI is an <strong>A-Rated, admitted and regulated American Insurance Company</strong> and been a leader in international travel assistance programs worldwide for more than 40 years. BMI has served more than 1 million happy clients worldwide. In 2016, the Ward Group ranked BMI as one of the top 50 life and health insurance companies in the United States. The American Registry of Business Excellence ranked BMI in the top 1% of America's most honored business in the industry. INF Partnered with BMI to bring the very best to our Members.</p>
                     <p>Rates for our INF-BMI Plans get much less expensive the longer you enroll. For example- 1 month of VIP+ is $512.60 while 2 months of VIP+ is $425. We strong suggest members to enroll in our new BMI Plans for at least 2 months (61 days) before switching to another INF plan.</p>
                     <a href="javascript:void(0)" className="read-less" onClick={hideInfBMI}>READ LESS <FaAngleDoubleUp className="double-arrow-up" /></a>
                   </>
                   :
                     <a href="javascript:void(0)" className="read-more" onClick={showInfBMI}>READ MORE <FaAngleDoubleDown className="double-arrow-down" /></a>
                 }
               </div>
               <div className="col-lg-4">
                  <Img fluid={bmi_logo} className="bmi-logo"/>
                  <p className="text-blue text-center sub-title"><a href="https://bmitravelassist.com/Home/Documents?doctype=3" target="_blank">INF BMI Travel Brochure</a></p>
                  <PopupModal label="Click to Get a Quote" className="inf-btn" id="bmi-travel-popup">
                    <h2 className="mb-0"> Apply for INF BMI Travel Assist </h2>
                    <img src={InfLogo} className="mb-0"/>
                    <p>INF Recommends enrolling for at least 61 days to get Best Price Discount</p>
                    <h2> INF BMI Travel Plan Application</h2>
                    <BmiApplyForm />
                  </PopupModal>
                </div>
             </div>
           </div>
         </div>

       </Container>
      </section>

     <section id="bmi-travel-section-2">
      <Container>
        <div className="col-lg-12">
          <h4 className="text-center text-white">Benefits that come with INF-BMI Plans</h4>
            <ul>
              <li className="text-white">COVID-19 Coverage.</li>
              <li className="text-white">All plans have 100% Co-Insurance (We cover 100%) and NO DEDUCTIBLE.</li>
              <li className="text-white">We make all the appointments for you- no more hassle of finding a provider who will accept you plan. We do everything on the backend to make sure it's completely cashless.</li>
              <li className="text-white">We provide all members with free Careington 500 Dental Plan ($100 value). Just send your voucher number to {emailAddress} with a request and we will issue you a dental card at no cost!</li>
            </ul>
         </div>
      </Container>
     </section>

     <section id="bmi-travel-section-3">
       <Container>
         <div className="col-lg-12">
           <div className="bmi-travel-container">
            <h2 className="text-blue text-center">COVID-19 Coverage</h2>

            <ul>
              <li>The Beneficiary must always and without exception contact the Emergency Central, <strong>Who in turn will coordinate a virtual appointment by Telemedicine.</strong></li>
              <li>According to the o pinion provided by the Medical Department, if the Beneficiary presents symptoms related to COVID-19, the Assistance Center will coordinate the relevant medical consultation, according to the safety and health protocols of each country.</li>
              <li>We will cover the expenses incurred up to the coverage limit indicated in the voucher.</li>
              <li>The following expenses will be covered under the same limit:</li>

              <ul>
                <li><strong>Hospital Expenses for COVID-19:</strong> In case of requiring hospitalization to stabilize the Beneficiary's condition.</li>
                <li><strong>Mechanical respirator fees:</strong> If the Medical Department, together with the treating doctor, considers the use of a mechanical respirator necessary, the Central will authorize and cover said expense.</li>
              </ul>
           </ul>

           <div className="blue-bg">
            <p className="text-center text-white important">**Important Notice**</p>
            <p className="text-center text-white notice">Vouchers purchased after arrival are subject to a 3-day waiting period for new sickness coverage and 15-day waiting period for COVID-19 Coverage.</p>
            <p className="text-center text-white notice">Vouchers must be extended before expiration to avoid waiting period for new sickness coverage.</p>
           </div>
          </div>
         </div>
       </Container>
     </section>

     <section id="bmi-travel-section-4">
      <Container>
        <div className="col-lg-12">
        <h3 className="text-blue text-center">BMI Plan 60 days Travel Assistance Cost</h3>

      <div className="row justify-content-center">
        <div className="col">
          <div className="column-tab">
            <p className="text-white column-tab-title">Name of the Plan</p>
          </div>
            <p className="tab-content text-black">Classico</p>
            <p className="tab-content text-black">Ultra</p>
            <p className="tab-content text-black">Ultra Plus</p>
            <p className="tab-content text-black">VIP</p>
            <p className="tab-content text-black">VIP Plus	</p>
        </div>

        <div className="col">
          <div className="column-tab">
            <p className="text-white column-tab-title">Trip Duration (60 days)</p>
          </div>
            <p className="tab-content text-black">Policy Max $10K</p>
            <p className="tab-content text-black">Policy Max: $30K</p>
            <p className="tab-content text-black">Policy Max: $60K</p>
            <p className="tab-content text-black">Policy Max: $100K</p>
            <p className="tab-content text-black">Policy Max: $250K</p>
        </div>

        <div className="col">
          <div className="column-tab">
            <p className="text-white column-tab-title ">Plan Cost (0-65)</p>
          </div>
            <p className="tab-content text-black">$151.53</p>
            <p className="tab-content text-black">$183.00</p>
            <p className="tab-content text-black">$230.26</p>
            <p className="tab-content text-black">$303.40</p>
            <p className="tab-content text-black">$425.00</p>
        </div>

        <div className="col">
          <div className="column-tab">
            <p className="text-white column-tab-title">​Plan Cost* (66-74)</p>
          </div>
            <p className="tab-content text-black">$151.89</p>
            <p className="tab-content text-black">$265.35</p>
            <p className="tab-content text-black">$417.24</p>
            <p className="tab-content text-black">$530.70</p>
            <p className="tab-content text-black">$730.17</p>
        </div>

        <div className="col">
          <div className="column-tab">
            <p className="text-white column-tab-title">​Plan Cost* (75-84)</p>
          </div>
          <p className="tab-content text-black">$455.67</p>
          <p className="tab-content text-black">$796.05</p>
          <p className="tab-content text-black">$1,251.72</p>
          <p className="tab-content text-black">$1,592.10</p>
          <p className="tab-content text-black">NA</p>
        </div>
      </div>
    </div>
        <p className="quotes">*Quotes are for 61 days to get the optimal pricing.</p>
      </Container>
     </section>

     <section id="bmi-travel-section-5">
       <Container>
       <div className="col-lg-12">
         <h3 className="text-blue text-center">Plan Options With Policy Maximums</h3>

         <div className="row">
         <div className="col-lg-6">
           <div className="column-tab">
             <p className="text-white column-tab-title">Coverage Option</p>
           </div>
           <p className="tab-content text-black">Classico</p>
           <p className="tab-content text-black">Ultra</p>
           <p className="tab-content text-black">Ultra 50</p>
           <p className="tab-content text-black">Ultra Plus</p>
           <p className="tab-content text-black">VIP</p>
           <p className="tab-content text-black">VIP Plus</p>
         </div>

         <div className="col-lg-6">
           <div className="column-tab">
             <p className="text-white column-tab-title2">Coverage Limit (No deductible / 100% coverage)</p>
           </div>
           <p className="tab-content text-black">$10,000</p>
           <p className="tab-content text-black">$30,000</p>
           <p className="tab-content text-black">$50,000</p>
           <p className="tab-content text-black">$60,000</p>
           <p className="tab-content text-black">$100,000</p>
           <p className="tab-content text-black">$250,000</p>
         </div>
         </div>
        </div>
      </Container>
     </section>

     <section id="bmi-travel-section-6">
       <Container>
        <div className="col-lg-12">
           <h3 className="text-blue text-center row-title">Pre-Existing Conditions Coverage</h3>
            <p>The coverage provided for chronic and / or pre-existing diseases includes the following eventualities:</p>
              <ul>
                <li className="conditions">Acute episode or unpredictable event</li>
                <li className="conditions">Decompensation of</li>
                  <ul>
                    <li className="conditions">A Chronic issue</li>
                    <li className="conditions">A Pre-existing diseases known</li>
                    <li className="conditions">A previously asymptomatic pre-existing condition</li>
                  </ul>
              </ul>
            </div>

            <div className="conditions-tab">
              <input checked="checked" id="conditions-tabone" type="radio" name="conditions" />
              <input id="conditions-tabtwo" type="radio" name="conditions" />
              <input id="conditions-tabthree" type="radio" name="conditions" />

              <nav>
                <ul>
                  <li className="conditions-tabone">
                    <label for="conditions-tabone">Medical Benefits | $0 Deductible Plans With 100% Coverage</label>
                  </li>
                 <li className="conditions-tabtwo">
                   <label for="conditions-tabtwo" className="title">Travel Assistance Benefits</label>
                  </li>
                  <li className="conditions-tabthree">
                    <label for="conditions-tabthree" className="title">Other Plan Benefits</label>
                   </li>
                </ul>
              </nav>

              <section>
               <div class="conditions-tabone">
                <div className="row">
                  <div className="col-lg-3">
                  <div className="column-tab">
                    <p className="text-white column-tab-title">Benefits</p>
                  </div>
                  <p className="tab-content1 text-black content-1">​Medical Assistance for Accident</p>
                  <p className="tab-content1 text-black content-2">​Medical Assistance for Illness</p>
                  <p className="tab-content1 text-black content-3">Medical Assistance in Case of Pre-Existing Medical Condition</p>
                  <p className="tab-content1 text-black content-4">Medical Assistance for COVID-19 up to 64 years old</p>
                  <p className="tab-content1 text-black content-5">​Medical Assistance for COVID-19 - 65 to 70 years old country of origin</p>
                  <p className="tab-content1 text-black content-6">​Prescription Drugs</p>
                  <p className="tab-content1 text-black content-7">​​Dental Emergency</p>
                </div>

                <div className="col">
                  <div className="column-tab">
                    <p className="text-white column-tab-title">Classico</p>
                  </div>
                  <p className="tab-content2 text-black">$10,000</p>
                  <p className="tab-content2 text-black content-2">​$10,000</p>
                  <p className="tab-content2 text-black">$300</p>
                  <p className="tab-content2 text-black">Included</p>
                  <p className="tab-content2 text-black">$0</p>
                  <p className="tab-content2 text-black content-6">Included</p>
                  <p className="tab-content2 text-black content-7">​$150</p>
                </div>

                <div className="col">
                  <div className="column-tab">
                    <p className="text-white column-tab-title">Ultra</p>
                  </div>
                  <p className="tab-content2 text-black">$30,000</p>
                  <p className="tab-content2 text-black content-2">$30,000</p>
                  <p className="tab-content2 text-black">$500</p>
                  <p className="tab-content2 text-black">Included</p>
                  <p className="tab-content2 text-black">$30,000</p>
                  <p className="tab-content2 text-black content-6">Included</p>
                  <p className="tab-content2 text-black content-7">$300</p>
                </div>

                <div className="col">
                  <div className="column-tab">
                    <p className="text-white column-tab-title">Ultra Plus</p>
                  </div>
                  <p className="tab-content2 text-black">​$60,000</p>
                  <p className="tab-content2 text-black content-2">​$60,000</p>
                  <p className="tab-content2 text-black">​$700</p>
                  <p className="tab-content2 text-black">Included</p>
                  <p className="tab-content2 text-black">$30,000</p>
                  <p className="tab-content2 text-black content-6">Included</p>
                  <p className="tab-content2 text-black content-7">$​750</p>
                </div>

                <div className="col">
                  <div className="column-tab">
                    <p className="text-white column-tab-title">VIP</p>
                  </div>
                  <p className="tab-content2 text-black">​$100,000</p>
                  <p className="tab-content2 text-black content-2">​$100,000</p>
                  <p className="tab-content2 text-black">$2,000</p>
                  <p className="tab-content2 text-black">Included</p>
                  <p className="tab-content2 text-black">$30,000</p>
                  <p className="tab-content2 text-black content-6">Included</p>
                  <p className="tab-content2 text-black content-7">$1,500</p>
                </div>

                <div className="col">
                  <div className="column-tab">
                    <p className="text-white column-tab-title">VIP Plus</p>
                  </div>
                  <p className="tab-content2 text-black">​$250,000</p>
                  <p className="tab-content2 text-black content-2">​$250,000</p>
                  <p className="tab-content2 text-black">$6,000</p>
                  <p className="tab-content2 text-black">Included</p>
                  <p className="tab-content2 text-black">$30,000</p>
                  <p className="tab-content2 text-black content-6">Included</p>
                  <p className="tab-content2 text-black content-7">$1,750</p>
                </div>
                </div>
              </div>

                <div class="conditions-tabtwo">
                <div className="row">
                  <div className="col-lg-3">
                  <div className="column-tab">
                    <p className="text-white column-tab-title">Benefits</p>
                  </div>
                  <p className="tab-content1 text-black con-1">Repatriation or Sanitary Transfer</p>
                  <p className="tab-content1 text-black con-2">​Repatriation of Mortal Remains</p>
                  <p className="tab-content1 text-black con-3">Accidental Death (up to 84 years old)*</p>
                  <p className="tab-content1 text-black con-4">Transportation of Family Member due to Hospitalization</p>
                  <p className="tab-content1 text-black con-5">​Convalescence Expense Hotel Expenses</p>
                  <p className="tab-content1 text-black con-6">Lost Documents and Personal Effects Assistance​</p>
                  <p className="tab-content1 text-black con-7">​​Return due to Death of an Immediate Family Member​</p>
                  <p className="tab-content1 text-black con-8">​​Early Return Due to Serious Disaster at Home​</p>
                  <p className="tab-content1 text-black con-9">​​Minor Escort</p>
                  <p className="tab-content1 text-black con-10">Trip Cancellation (up to 74 years old)​</p>
                </div>

                <div className="col">
                  <div className="column-tab">
                    <p className="text-white column-tab-title">Classico</p>
                  </div>
                  <p className="tab-content2 text-black">$10,000</p>
                  <p className="tab-content2 text-black">​$10,000</p>
                  <p className="tab-content2 text-black">$10,000</p>
                  <p className="tab-content2 text-black">Included</p>
                  <p className="tab-content2 text-black">$300</p>
                  <p className="tab-content2 text-black">Included</p>
                  <p className="tab-content2 text-black">Economy Ticket</p>
                  <p className="tab-content2 text-black">Economy Ticket</p>
                  <p className="tab-content2 text-black con-9">Economy Ticket</p>
                  <p className="tab-content2 text-black">N/A</p>
                </div>

                <div className="col">
                  <div className="column-tab">
                    <p className="text-white column-tab-title">Ultra</p>
                  </div>
                  <p className="tab-content2 text-black">$30,000</p>
                  <p className="tab-content2 text-black">$30,000</p>
                  <p className="tab-content2 text-black">​$10,000</p>
                  <p className="tab-content2 text-black">Included</p>
                  <p className="tab-content2 text-black">$800</p>
                  <p className="tab-content2 text-black">Included</p>
                  <p className="tab-content2 text-black">Economy Ticket</p>
                  <p className="tab-content2 text-black">Economy Ticket</p>
                  <p className="tab-content2 text-black con-9">Economy Ticket</p>
                  <p className="tab-content2 text-black">$2,000</p>
                </div>

                <div className="col">
                  <div className="column-tab">
                    <p className="text-white column-tab-title">Ultra Plus</p>
                  </div>
                  <p className="tab-content2 text-black">​$60,000</p>
                  <p className="tab-content2 text-black">​$60,000</p>
                  <p className="tab-content2 text-black">​$50,000</p>
                  <p className="tab-content2 text-black">Included</p>
                  <p className="tab-content2 text-black">$800</p>
                  <p className="tab-content2 text-black">Included</p>
                  <p className="tab-content2 text-black">Economy Ticket</p>
                  <p className="tab-content2 text-black">Economy Ticket</p>
                  <p className="tab-content2 text-black con-9">Economy Ticket</p>
                  <p className="tab-content2 text-black">$2,000</p>
                </div>

                <div className="col">
                  <div className="column-tab">
                    <p className="text-white column-tab-title">VIP</p>
                  </div>
                  <p className="tab-content2 text-black">​$100,000</p>
                  <p className="tab-content2 text-black">​​$60,000</p>
                  <p className="tab-content2 text-black">$50,000</p>
                  <p className="tab-content2 text-black">Included</p>
                  <p className="tab-content2 text-black">$2,000</p>
                  <p className="tab-content2 text-black">Included</p>
                  <p className="tab-content2 text-black">Economy Ticket</p>
                  <p className="tab-content2 text-black">Economy Ticket</p>
                  <p className="tab-content2 text-black con-9">Economy Ticket</p>
                  <p className="tab-content2 text-black">$2,000</p>
                </div>

                <div className="col">
                  <div className="column-tab">
                    <p className="text-white column-tab-title">VIP Plus</p>
                  </div>
                  <p className="tab-content2 text-black">​Included</p>
                  <p className="tab-content2 text-black">Included</p>
                  <p className="tab-content2 text-black">$100,000</p>
                  <p className="tab-content2 text-black">Included</p>
                  <p className="tab-content2 text-black">$2,200</p>
                  <p className="tab-content2 text-black">Included</p>
                  <p className="tab-content2 text-black">Economy Ticket</p>
                  <p className="tab-content2 text-black">Economy Ticket</p>
                  <p className="tab-content2 text-black con-9">Economy Ticket</p>
                  <p className="tab-content2 text-black">$2,000</p>
                </div>
                </div>
              </div>

                <div class="conditions-tabthree">
                <div className="row">
                  <div className="col-lg-3">
                  <div className="column-tab">
                    <p className="text-white column-tab-title">Benefits</p>
                  </div>
                  <p className="tab-content1 text-black benefit1">Substitution of an Executive</p>
                  <p className="tab-content1 text-black benefit2">24 Hours’ Information Line</p>
                  <p className="tab-content1 text-black benefit3">Emergency Message Transmission</p>
                  <p className="tab-content1 text-black benefit4">Fee for Transfer of Bail Bond</p>
                  <p className="tab-content1 text-black benefit5">​​Fee for Transfer of Funds</p>
                  <p className="tab-content1 text-black benefit6">Legal Assistance for Traffic Accident</p>
                  <p className="tab-content1 text-black benefit7">Total and Definitive Loss of Baggage​</p>
                  <p className="tab-content1 text-black benefit8">​​Expenses for Delay Luggage​</p>
                  <p className="tab-content1 text-black benefit9">Delayed or Cancelled Flight</p>
                  <p className="tab-content1 text-black benefit10">Theft or loss passport during a trip​</p>
                  <p className="tab-content1 text-black benefit11">Late Arrival​</p>
                </div>

                <div className="col">
                  <div className="column-tab">
                    <p className="text-white column-tab-title">Classico</p>
                  </div>
                  <p className="tab-content2 text-black benefit1">N/A</p>
                  <p className="tab-content2 text-black benefit2">​Included</p>
                  <p className="tab-content2 text-black">Included</p>
                  <p className="tab-content2 text-black benefit4">$10,000</p>
                  <p className="tab-content2 text-black benefit5">$10,000</p>
                  <p className="tab-content2 text-black">$1,000</p>
                  <p className="tab-content2 text-black">​$600</p>
                  <p className="tab-content2 text-black benefit8">​$600</p>
                  <p className="tab-content2 text-black benefit9">N/A</p>
                  <p className="tab-content2 text-black">$50</p>
                  <p className="tab-content2 text-black benefit11">$100</p>
                </div>

                <div className="col">
                  <div className="column-tab">
                    <p className="text-white column-tab-title">Ultra</p>
                  </div>
                  <p className="tab-content2 text-black benefit1">Included</p>
                  <p className="tab-content2 text-black benefit2">Included</p>
                  <p className="tab-content2 text-black">​Included</p>
                  <p className="tab-content2 text-black benefit4">$20,000</p>
                  <p className="tab-content2 text-black benefit5">$20,000</p>
                  <p className="tab-content2 text-black">$2,000</p>
                  <p className="tab-content2 text-black">$1,200</p>
                  <p className="tab-content2 text-black benefit8">​$800</p>
                  <p className="tab-content2 text-black benefit9">N/A</p>
                  <p className="tab-content2 text-black">$70</p>
                  <p className="tab-content2 text-black benefit11">$300</p>
                </div>

                <div className="col">
                  <div className="column-tab">
                    <p className="text-white column-tab-title">Ultra Plus</p>
                  </div>
                  <p className="tab-content2 text-black benefit1">Included</p>
                  <p className="tab-content2 text-black benefit2">Included</p>
                  <p className="tab-content2 text-black">​Included</p>
                  <p className="tab-content2 text-black benefit4">$20,000</p>
                  <p className="tab-content2 text-black benefit5">$20,000</p>
                  <p className="tab-content2 text-black">$2,000</p>
                  <p className="tab-content2 text-black">$1,200</p>
                  <p className="tab-content2 text-black benefit8">$1,200</p>
                  <p className="tab-content2 text-black benefit9">$150</p>
                  <p className="tab-content2 text-black">$100</p>
                  <p className="tab-content2 text-black benefit11">$450</p>
                </div>

                <div className="col">
                  <div className="column-tab">
                    <p className="text-white column-tab-title">VIP</p>
                  </div>
                  <p className="tab-content2 text-black benefit1">Included</p>
                  <p className="tab-content2 text-black benefit2">Included</p>
                  <p className="tab-content2 text-black">​Included</p>
                  <p className="tab-content2 text-black benefit4">$30,000</p>
                  <p className="tab-content2 text-black benefit5">$30,000</p>
                  <p className="tab-content2 text-black">$3,000</p>
                  <p className="tab-content2 text-black">$3,000</p>
                  <p className="tab-content2 text-black benefit8">$2,000</p>
                  <p className="tab-content2 text-black benefit9">$150</p>
                  <p className="tab-content2 text-black">$100</p>
                  <p className="tab-content2 text-black benefit11">$500</p>
                </div>

                <div className="col">
                  <div className="column-tab">
                    <p className="text-white column-tab-title">VIP Plus</p>
                  </div>
                  <p className="tab-content2 text-black benefit1">​Included</p>
                  <p className="tab-content2 text-black benefit2">Included</p>
                  <p className="tab-content2 text-black">Included</p>
                  <p className="tab-content2 text-black benefit4">$35,000</p>
                  <p className="tab-content2 text-black benefit5">$40,000</p>
                  <p className="tab-content2 text-black">$9,000</p>
                  <p className="tab-content2 text-black">$3,000</p>
                  <p className="tab-content2 text-black benefit8">​$2,000 </p>
                  <p className="tab-content2 text-black benefit9">$150</p>
                  <p className="tab-content2 text-black">$100</p>
                  <p className="tab-content2 text-black benefit11">$500</p>
                </div>
                </div>
                </div>
              </section>
              </div>
             </Container>
            </section>

      <section id="bmi-travel-section-7">
        <Container>
          <div className="col-lg-12">
            <h3 className="text-blue text-center row-title">Benefits for BMI Travel Assist</h3>

            <div className="row">
              <div className="col-lg-6">
                <div className="column-tab">
                  <p className="text-white column-tab-title">Medical Benefits</p>
                </div>
                <ul className="tab-content1 text-black">
                  <li>Medical assistance for accident or illness</li>
                  <li>Medical assistance for COVID-19</li>
                  <li>Prescription drugs</li>
                  <li>Dental emergency</li>
                  <li>​Repatriation or sanitary transfer</li>
                </ul>
              </div>

                <div className="col-lg-6">
                  <div className="column-tab">
                    <p className="text-white column-tab-title">Non-Medical Benefits</p>
                  </div>
                  <ul className="tab-content text-black">
                    <li>Accidental death</li>
                    <li>Repatriation of mortal remains</li>
                    <li>Transportation of family member due to hospitalization</li>
                    <li>Hotel expenses due to convalescence</li>
                    <li>​Late arrival</li>
                    <li>​Return due to death of family member</li>
                    <li>Early return due to serious disaster at home</li>
                    <li>​Lost or delayed luggage</li>
                    <li>Delayed or cancelled flight</li>
                    <li>Theft or loss of passport during a trip</li>
                  </ul>
              </div>
              </div>
            </div>
        </Container>
       </section>

       <section id="bmi-travel-section-8">
         <Container>
           <div className="col-lg-12">
             <h3 className="text-blue text-center">Plan Options for Visitors to USA</h3>
             <p className="text-center content">Different plan options according to the type and length of the trip, whether for business, pleasure, studies, and regardless if you travel by air, sea or land.​</p>

             <div className="options-tab">
               <input checked="checked" id="options-tabone" type="radio" name="options" />
               <input id="options-tabtwo" type="radio" name="options" />
               <input id="options-tabthree" type="radio" name="options" />
               <input id="options-tabfour" type="radio" name="options" />
               <input id="options-tabfive" type="radio" name="options" />
               <input id="options-tabsix" type="radio" name="options" />

               <nav>
                 <ul>
                   <li className="options-tabone">
                     <label for="options-tabone" className="title">Daily Plan</label>
                   </li>
                  <li className="options-tabtwo">
                    <label for="options-tabtwo" className="title">Family Plan</label>
                   </li>
                   <li className="options-tabthree">
                     <label for="options-tabthree" className="title">Student Plan</label>
                    </li>
                    <li className="options-tabfour">
                      <label for="options-tabfour" className="title">Extended Stay Plan</label>
                     </li>
                     <li className="options-tabfive">
                       <label for="options-tabfive" className="title">Multi-Trip Annual Plan</label>
                      </li>
                      <li className="options-tabsix">
                        <label for="options-tabsix" className="title">Corporate Plan</label>
                       </li>
                 </ul>
               </nav>

          <section>
            <div className="options-tabone">
            <div className="col-lg-12 plan-opt">
              <ul className="plan-options">
                <li>Offers protection for a single round trip</li>
                <li>Minimum 5 day - Maximum 90 consecutive days of travel</li>
                <li>Pay for the exact days of your trip</li>
              </ul>

              <p className="optional"><strong>Optional:</strong></p>

              <ul className="plan-options">
                <li>Expectant Mother</li>
                <li>Preexisting Condition</li>
                <li>COVID-19 for people over 70 years old</li>
              </ul>
            </div>
            </div>

            <div className="options-tabtwo">
            <div className="col-lg-12 plan-opt">
              <ul className="plan-options">
                <li>Designed for families consisting of 2 adults (spouses or not) over 21 years old</li>
                <li>Up to 3 children under 21 years of age</li>
                <li>Minimum 5 days - Maximum 90 consecutive days of travel</li>
                <li>Three people minimum purchase for this plan.</li>
              </ul>
            </div>
            </div>

            <div className="options-tabthree">
            <div className="col-lg-12 plan-opt">
              <ul className="plan-options">
                <li>Designed for international students up to 45 years old</li>
                <li>Minimum 4 months - Maximum 12 consecutive months of travel.</li>
              </ul>
            </div>
            </div>

            <div className="options-tabfour">
            <div className="col-lg-12 plan-opt">
              <ul className="plan-options">
                <li>Ideal for parents staying in the USA for long-term pleasure trips</li>
                <li>Minimum two months (60 days)</li>
                <li>Maximum one calendar year (365 consecutive days of travel).</li>
              </ul>
            </div>
            </div>

            <div className="options-tabfive">
            <div className="col-lg-12 plan-opt">
              <ul className="plan-options">
                <li>Ideal if you travel for pleasure multiple times during a calendar year </li>
                <li>Four plan options: Max. 30, 45, 60 or 90 consecutive days of travel.</li>
                <li>​Optional: COVID-19 for people over 70 years old</li>
              </ul>
            </div>
            </div>

            <div className="options-tabsix">
            <div className="col-lg-12 plan-opt">
              <ul className="plan-options">
                <li>Ideal for companies with a large number of travelers</li>
                <li>The plan is pre-purchased from 250 or more days of assistance</li>
                <li>The plan has a validity of 365 days from its purchase</li>
                <li>Self-management platform for better control and distribution of each traveler.</li>
              </ul>
            </div>
            </div>
          </section>
           </div>
          </div>
       </Container>
      </section>

      {/*<section id="bmi-travel-section-9">
        <Container>
          <div className="col-lg-12">
            <h3 className="text-blue text-center row-title">Related Articles</h3>
          </div>

          <div className="col-lg-12">
           <div className="row">
            <div className="col-lg-6">
             <h4 className="text-center">What is Full Pre-Existing<br /> Coverage?</h4>
              <Img fluid={book1_icon} className="book-icon"/>
              <button className="read-btn">Read Now</button>
             </div>
           <div className="col-lg-6">
             <h4 className="text-center">How is a Pre-Existing<br /> Condition Determined?</h4>
             <Img fluid={book2_icon} className="book-icon"/>
             <button className="read-btn">Read Now</button>
           </div>
          </div>
          </div>
        </Container>
       </section>*/}


    </Layout>
  )
}

export default BMITravelPage

export const query = graphql`
  query BMITravelPageQuery {
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
    hero_background: file(name: { eq: "bmi-travel-hero-bg" }) {
      childImageSharp {
        fluid(maxWidth: 1400, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    bmi_logo: file(name: { eq: "bmi-logo" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    book1_icon: file(name: { eq: "book1-icon" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    book2_icon: file(name: { eq: "book2-icon" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
  }
`
