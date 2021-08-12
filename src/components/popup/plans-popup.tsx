import React, { useState, useEffect } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import emergence from 'emergence.js'
import Navibar from 'components/navibar/navibar'
import Footer from 'components/footer/footer'
import { siteMetadata } from '../../../gatsby-config'
import BackgroundImage from 'gatsby-background-image'
import 'modern-normalize/modern-normalize.css'
import 'prismjs/themes/prism.css'
import 'scss/gatstrap.scss'
import 'animate.css/animate.css'
import 'font-awesome/css/font-awesome.css'
import Img, { FixedObject } from 'gatsby-image'

interface Props {
  children?: React.ReactNode
  location: Location
}

const PlansPopup: React.FC<Props> = ({ children, location }: Props) => {
  const data = useStaticQuery(
    graphql`
      query {
      standard_popup_logo: file(name: { eq: "standard-popup-logo" }) {
        childImageSharp {
          fluid(maxWidth: 400, quality: 100) {
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
      }
    `
  )

  const standard_popup_logo = data.standard_popup_logo?.childImageSharp?.fluid
  const book_icon = data.book_icon?.childImageSharp?.fluid
  const [popupStatus, setPopupStatus] = useState(false);
  const [popupNumber, setPopupNumber] = useState(1);
  const [popupReady, setPopupReady] = useState(false);

  function openModal() {
    setPopupStatus(true);
    setPopupReady(true);
    setPopupNumber(1);
  }

  function closeModal() {
    setPopupStatus(false);
    setPopupNumber(0);
    setPopupReady(false);
  }

  useEffect(() => {
    emergence.init()
  })


  return (
    <div>
      {popupStatus && popupNumber == 1 && popupReady ? (
      <div class="modal fade show" id="myModal" role="dialog">
       <div class="modal-dialog modal-lg">
         <div class="modal-content">
         <div class="modal-body">
          <div class="container py-4">
             <div class="row">
                 <div class="col-md-12">
                     <div class="d-flex">
                         <ul id="tabsJustified" class="nav nav-pills flex-column">
                           <Img fluid={standard_popup_logo} className="popup-logo"/>
                             <li class="nav-item"><a href="#ivas-coverage" data-target="#ivas-coverage" data-toggle="tab" class="nav-link small active">INF Standard IVAS Coverages</a></li>
                             <li class="nav-item"><a href="#ivas-benefits" data-target="#ivas-benefits" data-toggle="tab" class="nav-link small">INF Standard IVAS Schedule of Benefits</a></li>
                             <li class="nav-item"><a href="#ivas-description" data-target="#ivas-description" data-toggle="tab" class="nav-link small">INF Standard IVAS Plan Description</a></li>
                         </ul>
                         <div class="tab-content p-3 w-100">
                           <button type="button" className="close" data-dismiss="modal" onClick={closeModal}>&times;</button>
                             <div id="ivas-coverage" class="tab-pane fade active show">
                             <div class="tabcontent">
                             <div className="col-lg-12 ivas-standard">
                               <h2 className="text-blue text-center">INF Standard IVAS Coverages</h2>
                               <p className="text-black text-center tab-row-title">*The Standard Plan has no coverage for pre-existing conditions.</p>
                               <div className="coverages-tab">
                                 <input checked="checked" id="coverages-tabone" type="radio" name="standard-coverages" />
                                 <input id="coverages-tabtwo" type="radio" name="standard-coverages" />
                                 <nav>
                                   <ul>
                                     <li className="coverages-tabone">
                                       <label for="coverages-tabone">INF Standard IVAS Plan Medical Expense Options  <br/> <span className="text-black age-title">Age 0-69</span></label>
                                     </li>
                                     <li className="coverages-tabtwo">
                                       <label for="coverages-tabtwo">INF Standard IVAS Plan Medical Expense Options <br/> <span className="text-black age-title">Age 70-99</span></label>
                                     </li>
                                   </ul>
                                 </nav>
                                 <section>
                                   <div className="coverages-tabone">
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
                                   <div className="coverages-tabtwo">
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
                             </div>
                             </div>

                             <div id="ivas-benefits" class="tab-pane fade show">
                             <div class="tabcontent">
                             <div className="col-lg-12 ivas-standard">
                             <h2 className="text-blue text-center">INF Standard IVAS Schedule of Benefits </h2>
                             <p className="text-black text-center tab-row-title">$50,000 Policy Max</p>

                               <div className="ivas-in-tab">
                                 <input checked="checked" id="ivas-in-tabone" type="radio" name="ivas in benefits" />
                                 <input id="ivas-in-tabtwo" type="radio" name="ivas in benefits" />
                                 <input id="ivas-in-tabthree" type="radio" name="ivas in benefits" />
                                 <nav>
                                   <ul>
                                     <li className="ivas-in-tabone">
                                       <label for="ivas-in-tabone">In-Patient Services</label>
                                     </li>
                                     <li className="ivas-in-tabtwo">
                                       <label for="ivas-in-tabtwo">Out-Patient Services</label>
                                     </li>
                                     <li className="ivas-in-tabthree">
                                       <label for="ivas-in-tabthree">Other Benefits</label>
                                     </li>
                                   </ul>
                                 </nav>
                                 <section>
                                   <div className="ivas-in-tabone">
                                     <div className="row">
                                       <div className="col-lg-6">
                                         <div className="column-tab">
                                           <p className="text-white column-tab-title">Covered Medical Services</p>
                                         </div>
                                         <p className="tab-content1 text-black">Hospital Room & Board</p>
                                         <p className="tab-content1 text-black">Hospital Intensive Care Unit Room & Board</p>
                                         <p className="tab-content2 text-black">Doctor Surgical Expenses</p>
                                         <p className="tab-content2 text-black">Anesthetics</p>
                                         <p className="tab-content2 text-black">Assistant Surgeon Expenses</p>
                                         <p className="tab-content3 text-black">Doctor's Non-Surgical Treatment/Examination Expenses</p>
                                         <p className="tab-content4 text-black">Consultation visits when requested by a Doctor</p>
                                         <p className="tab-content text-black">Pre-Admission Tests within 14 days before hospital admission</p>
                                       </div>
                                       <div className="col-lg-6">
                                         <div className="column-tab">
                                           <p className="text-white column-tab-title">In-Patient Medical Benefits</p>
                                         </div>
                                         <p className="tab-content text-black">Charges up to $1,300 per day maximum<br /> Up to 30 days</p>
                                         <p className="tab-content3 text-black">Up to an additional $525 maximum additional per day | Up to 8 Days</p>
                                         <p className="tab-content2 text-black">Up to $3,000 maximum</p>
                                         <p className="tab-content2 text-black">Up to $750 maximum</p>
                                         <p className="tab-content2 text-black">​Up to $750 maximum</p>
                                         <p className="tab-content3 text-black">Up to $60 maximum per visit, 1 visit per day, to 30 visits</p>
                                         <p className="tab-content1 text-black">Up to $400 maximum</p>
                                         <p className="tab-content1 text-black">Up to $1,000 maximum</p>
                                       </div>
                                     </div>
                                   </div>
                                   <div className="ivas-in-tabtwo">
                                     <div className="row">
                                       <div className="col-lg-6">
                                         <div className="column-tab">
                                           <p className="text-white column-tab-title">Covered Medical Services</p>
                                         </div>
                                         <p className="tab-content1 text-black">Surgical Room & Supply Expenses</p>
                                         <p className="tab-content1 text-black">Hospital Emergency</p>
                                         <p className="tab-content1 text-black">Doctor Surgical Expenses</p>
                                         <p className="tab-content1 text-black">Anesthetics</p>
                                         <p className="tab-content1 text-black">Assistant Surgeon Expenses</p>
                                         <p className="tab-content2 text-black">Doctor's Non-Surgical Treatment/Examination Expenses</p>
                                         <p className="tab-content1 text-black">X-rays & laboratory procedures</p>
                                         <p className="tab-content1 text-black">CAT Scan, PET Scan, or MRI</p>
                                         <p className="tab-content1 text-black">Prescription Drug Expenses</p>
                                       </div>
                                       <div className="col-lg-6">
                                         <div className="column-tab">
                                           <p className="text-white column-tab-title">Out-Patient Medical Benefits</p>
                                         </div>
                                         <p className="tab-content1 text-black">Up to $1,000 maximum</p>
                                         <p className="tab-content1 text-black">Up to $350</p>
                                         <p className="tab-content1 text-black">Up to $3,000 maximum</p>
                                         <p className="tab-content1 text-black">​Up to $750 maximum</p>
                                         <p className="tab-content1 text-black">​Up to $750 maximum</p>
                                         <p className="tab-content text-black">Up to $60 per visit maximum | 1 visit per day <br />Up to 10 visits</p>
                                         <p className="tab-content1 text-black">Up to $400 maximum</p>
                                         <p className="tab-content1 text-black">​Up to $400 additional</p>
                                         <p className="tab-content1 text-black">Up to $100 maximum</p>
                                       </div>
                                     </div>
                                   </div>
                                   <div className="ivas-in-tabthree">
                                     <div className="row">
                                       <div className="col-lg-6">
                                         <div className="column-tab">
                                           <p className="text-white column-tab-title">Covered Medical Services</p>
                                         </div>
                                         <p className="tab-content1 text-black">Ambulance Expenses</p>
                                         <p className="tab-content1 text-black">Rehabilitative Braces or Appliances</p>
                                         <p className="tab-content2 text-black">Dental Treatment (Injury )</p>
                                         <p className="tab-content1 text-black">Chemotherapy and/or Radiation Therapy</p>
                                         <p className="tab-content2 text-black">Physical & Occupational Therapy</p>
                                         <p className="tab-content1 text-black">Private Duty Nurse</p>
                                         <p className="tab-content text-black">Pregnancy or Childbirth (Conception must Occur After Trip Begins)</p>
                                       </div>
                                       <div className="col-lg-6">
                                         <div className="column-tab">
                                           <p className="text-white column-tab-title">Other Medical Benefits</p>
                                         </div>
                                         <p className="tab-content1 text-black">Up to $400 maximum</p>
                                         <p className="tab-content1 text-black">Up to $1,000 maximum</p>
                                         <p className="tab-content text-black">​Up to $450. There are no benefits for dental services for immediate relief of pain.</p>
                                         <p className="tab-content1 text-black">Up to $1,000 maximum</p>
                                         <p className="tab-content text-black">Up to $35 per visit max, 1 Visit per day to 12 visits</p>
                                         <p className="tab-content1 text-black">Up to $400 maximum</p>
                                         <p className="tab-content3 text-black">Up to $4,500 maximum</p>
                                       </div>
                                       <div className="column-tab additional-benefits">
                                         <p className="text-white column-tab-title">Additional Benefits</p>
                                       </div>
                                       <div className="col-lg-6">
                                         <p className="tab-content1 text-black">Emergency Medical Evacuation Benefit</p>
                                         <p className="tab-content1 text-black">Repatriation of Remains Benefit</p>
                                         <p className="tab-content1 text-black">Accidental Death & Dismemberment</p>
                                       </div>
                                       <div className="col-lg-6">
                                         <p className="tab-content1 text-black">$15,000 maximum</p>
                                         <p className="tab-content1 text-black">$10,000 maximum​</p>
                                         <p className="tab-content1 text-black">$25,000 Principal Sum</p>
                                       </div>
                                     </div>
                                   </div>
                                 </section>
                               </div>
                             </div>

                             <div className="col-lg-12 mt-4 ivas-standard">
                             <p className="text-black text-center tab-row-title">$100,000 Policy Max</p>

                               <div className="ivas-out-tab">
                                 <input checked="checked" id="ivas-out-tabone" type="radio" name="ivas out benefits" />
                                 <input id="ivas-out-tabtwo" type="radio" name="ivas out benefits" />
                                 <input id="ivas-out-tabthree" type="radio" name="ivas out benefits" />
                                 <nav>
                                   <ul>
                                     <li className="ivas-out-tabone">
                                       <label for="ivas-out-tabone">In-Patient Services</label>
                                     </li>
                                     <li className="ivas-out-tabtwo">
                                       <label for="ivas-out-tabtwo">Out-Patient Services</label>
                                     </li>
                                     <li className="ivas-out-tabthree">
                                       <label for="ivas-out-tabthree">Other Benefits</label>
                                     </li>
                                   </ul>
                                 </nav>
                                 <section>
                                   <div className="ivas-out-tabone">
                                     <div className="row">
                                       <div className="col-lg-6">
                                         <div className="column-tab">
                                           <p className="text-white column-tab-title">Covered Medical Services</p>
                                         </div>
                                         <p className="tab-content1 text-black">Hospital Room & Board</p>
                                         <p className="tab-content1 text-black">Hospital Intensive Care Unit Room & Board</p>
                                         <p className="tab-content2 text-black">Doctor Surgical Expenses</p>
                                         <p className="tab-content2 text-black">Anesthetics</p>
                                         <p className="tab-content2 text-black">Assistant Surgeon Expenses</p>
                                         <p className="tab-content3 text-black">Doctor's Non-Surgical Treatment/Examination Expenses</p>
                                         <p className="tab-content4 text-black">Consultation visits when requested by a Doctor</p>
                                         <p className="tab-content text-black">Pre-Admission Tests within 14 days before hospital admission</p>
                                       </div>
                                       <div className="col-lg-6">
                                         <div className="column-tab">
                                           <p className="text-white column-tab-title">In-Patient Medical Benefits</p>
                                         </div>
                                         <p className="tab-content text-black">Charges up to $1,750 per day maximum<br /> Up to 30 days</p>
                                         <p className="tab-content3 text-black">Up to an additional $750 per day <br />Up to 8 Days</p>
                                         <p className="tab-content2 text-black">Up to $5,000 maximum</p>
                                         <p className="tab-content2 text-black">Up to $1,250 maximum</p>
                                         <p className="tab-content2 text-black">Up to $1,250 maximum</p>
                                         <p className="tab-content3 text-black">Up to $100 maximum per visit, 1 visit per day, to 30 visits</p>
                                         <p className="tab-content1 text-black">Up to $450 maximum</p>
                                         <p className="tab-content1 text-black">Up to $1,100 maximum</p>
                                       </div>
                                     </div>
                                   </div>
                                   <div className="ivas-out-tabtwo">
                                     <div className="row">
                                       <div className="col-lg-6">
                                         <div className="column-tab">
                                           <p className="text-white column-tab-title">Covered Medical Services</p>
                                         </div>
                                         <p className="tab-content1 text-black">Surgical Room & Supply Expenses</p>
                                         <p className="tab-content1 text-black">Hospital Emergency</p>
                                         <p className="tab-content1 text-black">Doctor Surgical Expenses</p>
                                         <p className="tab-content1 text-black">Anesthetics</p>
                                         <p className="tab-content1 text-black">Assistant Surgeon Expenses</p>
                                         <p className="tab-content2 text-black">Doctor's Non-Surgical Treatment/Examination Expenses</p>
                                         <p className="tab-content1 text-black">X-rays & laboratory procedures</p>
                                         <p className="tab-content1 text-black">CAT Scan, PET Scan, or MRI</p>
                                         <p className="tab-content1 text-black">Prescription Drug Expenses</p>
                                       </div>
                                       <div className="col-lg-6">
                                         <div className="column-tab">
                                           <p className="text-white column-tab-title">Out-Patient Medical Benefits</p>
                                         </div>
                                         <p className="tab-content1 text-black">Up to $1,100 maximum</p>
                                         <p className="tab-content1 text-black">Up to $500</p>
                                         <p className="tab-content1 text-black">Up to $5,000 maximum</p>
                                         <p className="tab-content1 text-black">​Up to $1,250 maximum</p>
                                         <p className="tab-content1 text-black">​Up to $1,250 maximum</p>
                                         <p className="tab-content text-black">Up to $100 per visit maximum | 1 visit per day <br/>Up to 10 visits</p>
                                         <p className="tab-content1 text-black">Up to $650 maximum</p>
                                         <p className="tab-content1 text-black">Up to $650 additional</p>
                                         <p className="tab-content1 text-black">Up to $150 maximum</p>
                                       </div>
                                     </div>
                                   </div>
                                   <div className="ivas-out-tabthree">
                                     <div className="row">
                                       <div className="col-lg-6">
                                         <div className="column-tab">
                                           <p className="text-white column-tab-title">Covered Medical Services</p>
                                         </div>
                                         <p className="tab-content1 text-black">Ambulance Expenses</p>
                                         <p className="tab-content1 text-black">Rehabilitative Braces or Appliances</p>
                                         <p className="tab-content2 text-black">Dental Treatment (Injury )</p>
                                         <p className="tab-content1 text-black">Chemotherapy and/or Radiation Therapy</p>
                                         <p className="tab-content2 text-black">Physical & Occupational Therapy</p>
                                         <p className="tab-content1 text-black">Private Duty Nurse</p>
                                         <p className="tab-content text-black">Pregnancy or Childbirth (Conception must Occur After Trip Begins)</p>
                                       </div>
                                       <div className="col-lg-6">
                                         <div className="column-tab">
                                           <p className="text-white column-tab-title">Other Medical Benefits</p>
                                         </div>
                                         <p className="tab-content1 text-black">Up to $450 maximum</p>
                                         <p className="tab-content1 text-black">Up to $1,100 maximum</p>
                                         <p className="tab-content text-black">​Up to $500. There are no benefits for dental services for immediate relief of pain.</p>
                                         <p className="tab-content1 text-black">Up to $1,150 maximum</p>
                                         <p className="tab-content text-black">Up to $45 per visit max, 1 Visit per day up to 12 visits</p>
                                         <p className="tab-content1 text-black">Up to $500 maximum</p>
                                         <p className="tab-content3 text-black">Up to $5,000 maximum</p>
                                       </div>
                                       <div className="column-tab additional-benefits">
                                         <p className="text-white column-tab-title">Additional Benefits</p>
                                       </div>
                                       <div className="col-lg-6">
                                         <p className="tab-content1 text-black">Emergency Medical Evacuation Benefit</p>
                                         <p className="tab-content1 text-black">Repatriation of Remains Benefit</p>
                                         <p className="tab-content1 text-black">Accidental Death & Dismemberment</p>
                                       </div>
                                       <div className="col-lg-6">
                                         <p className="tab-content1 text-black">$20,000 maximum</p>
                                         <p className="tab-content1 text-black">$15,000 maximum​</p>
                                         <p className="tab-content1 text-black">$25,000 Principal Sum</p>
                                       </div>
                                     </div>
                                   </div>
                                 </section>
                               </div>
                             </div>

                             <div className="col-lg-12 mt-4 ivas-standard">
                             <p className="text-black text-center tab-row-title">$150,000 Policy Max</p>

                               <div className="ivas-other-tab">
                                 <input checked="checked" id="ivas-other-tabone" type="radio" name="ivas other benefits" />
                                 <input id="ivas-other-tabtwo" type="radio" name="ivas other benefits" />
                                 <input id="ivas-other-tabthree" type="radio" name="ivas other benefits" />
                                 <nav>
                                   <ul>
                                     <li className="ivas-other-tabone">
                                       <label for="ivas-other-tabone">In-Patient Services</label>
                                     </li>
                                     <li className="ivas-other-tabtwo">
                                       <label for="ivas-other-tabtwo">Out-Patient Services</label>
                                     </li>
                                     <li className="ivas-other-tabthree">
                                       <label for="ivas-other-tabthree">Other Benefits</label>
                                     </li>
                                   </ul>
                                 </nav>
                                 <section>
                                   <div className="ivas-other-tabone">
                                     <div className="row">
                                       <div className="col-lg-6">
                                         <div className="column-tab">
                                           <p className="text-white column-tab-title">Covered Medical Services</p>
                                         </div>
                                         <p className="tab-content1 text-black">Hospital Room & Board</p>
                                         <p className="tab-content1 text-black">Hospital Intensive Care Unit Room & Board</p>
                                         <p className="tab-content2 text-black">Doctor Surgical Expenses</p>
                                         <p className="tab-content2 text-black">Anesthetics</p>
                                         <p className="tab-content2 text-black">Assistant Surgeon Expenses</p>
                                         <p className="tab-content3 text-black">Doctor's Non-Surgical Treatment/Examination Expenses</p>
                                         <p className="tab-content4 text-black">Consultation visits when requested by a Doctor</p>
                                         <p className="tab-content text-black">Pre-Admission Tests within 14 days before hospital admission</p>
                                       </div>
                                       <div className="col-lg-6">
                                         <div className="column-tab">
                                           <p className="text-white column-tab-title">In-Patient Medical Benefits</p>
                                         </div>
                                         <p className="tab-content text-black">Charges up to $1,900 per day maximum<br /> Up to 30 days</p>
                                         <p className="tab-content3 text-black">Up to an additional $850 maximum per maximum additional a day | Up to 8 Days</p>
                                         <p className="tab-content2 text-black">Up to $6,000 maximum</p>
                                         <p className="tab-content2 text-black">Up to $1,500 maximum</p>
                                         <p className="tab-content2 text-black">Up to $1,500 maximum</p>
                                         <p className="tab-content3 text-black">Up to $125 maximum per visit, 1 visit per day, to 30 visits</p>
                                         <p className="tab-content1 text-black">Up to $500 maximum</p>
                                         <p className="tab-content1 text-black">Up to $1,200 maximum</p>
                                       </div>
                                     </div>
                                   </div>
                                   <div className="ivas-other-tabtwo">
                                     <div className="row">
                                       <div className="col-lg-6">
                                         <div className="column-tab">
                                           <p className="text-white column-tab-title">Covered Medical Services</p>
                                         </div>
                                         <p className="tab-content1 text-black">Surgical Room and Supply Expenses</p>
                                         <p className="tab-content1 text-black">Hospital Emergency</p>
                                         <p className="tab-content1 text-black">Doctor Surgical Expenses</p>
                                         <p className="tab-content1 text-black">Anesthetics</p>
                                         <p className="tab-content1 text-black">Assistant Surgeon Expenses</p>
                                         <p className="tab-content2 text-black">Doctor's Non-Surgical Treatment/Examination Expenses</p>
                                         <p className="tab-content1 text-black">X-rays & laboratory procedures</p>
                                         <p className="tab-content1 text-black">CAT Scan, PET Scan, or MRI</p>
                                         <p className="tab-content1 text-black">Prescription Drug Expenses</p>
                                       </div>
                                       <div className="col-lg-6">
                                         <div className="column-tab">
                                           <p className="text-white column-tab-title">Out-Patient Medical Benefits</p>
                                         </div>
                                         <p className="tab-content1 text-black">Up to $1,200 maximum</p>
                                         <p className="tab-content1 text-black">Up to $750 maximum</p>
                                         <p className="tab-content1 text-black">Up to $6,000 maximum</p>
                                         <p className="tab-content1 text-black">​Up to $1,500 maximum</p>
                                         <p className="tab-content1 text-black">​Up to $1,500 maximum</p>
                                         <p className="tab-content text-black">Up to $125 per visit maximum | 1 visit per day <br/>Up to 10 visits</p>
                                         <p className="tab-content1 text-black">Up to $750 maximum</p>
                                         <p className="tab-content1 text-black">Up to $1000 additional</p>
                                         <p className="tab-content1 text-black">Up to $200 maximum</p>
                                       </div>
                                     </div>
                                   </div>
                                   <div className="ivas-other-tabthree">
                                     <div className="row">
                                       <div className="col-lg-6">
                                         <div className="column-tab">
                                           <p className="text-white column-tab-title">Covered Medical Services</p>
                                         </div>
                                         <p className="tab-content1 text-black">Ambulance Expenses</p>
                                         <p className="tab-content1 text-black">Rehabilitative Braces or Appliances</p>
                                         <p className="tab-content2 text-black">Dental Treatment (Injury )</p>
                                         <p className="tab-content1 text-black">Chemotherapy and/or Radiation Therapy</p>
                                         <p className="tab-content2 text-black">Physical & Occupational Therapy</p>
                                         <p className="tab-content1 text-black">Private Duty Nurse</p>
                                         <p className="tab-content text-black">Pregnancy or Childbirth (Conception must Occur After Trip Begins)</p>
                                       </div>
                                       <div className="col-lg-6">
                                         <div className="column-tab">
                                           <p className="text-white column-tab-title">Other Medical Benefits</p>
                                         </div>
                                         <p className="tab-content1 text-black">Up to $500 maximum</p>
                                         <p className="tab-content1 text-black">Up to $1,200 maximum</p>
                                         <p className="tab-content text-black">​Up to $550. There are no benefits for dental services for immediate relief of pain.</p>
                                         <p className="tab-content1 text-black">Up to $1,250 maximum</p>
                                         <p className="tab-content text-black">Up to $50 per visit max, 1 Visit per day to 12 visits</p>
                                         <p className="tab-content1 text-black">Up to $550 maximum</p>
                                         <p className="tab-content3 text-black">Up to $5,500 maximum</p>
                                       </div>
                                       <div className="column-tab additional-benefits">
                                         <p className="text-white column-tab-title">Additional Benefits</p>
                                       </div>
                                       <div className="col-lg-6">
                                         <p className="tab-content1 text-black">Emergency Medical Evacuation Benefit</p>
                                         <p className="tab-content1 text-black">Repatriation of Remains Benefit</p>
                                         <p className="tab-content1 text-black">Accidental Death & Dismemberment</p>
                                         <p className="tab-content1 text-black">Intercollegiate Sports</p>
                                       </div>
                                       <div className="col-lg-6">
                                         <p className="tab-content1 text-black">$25,000 maximum</p>
                                         <p className="tab-content1 text-black">$20,000 maximum​</p>
                                         <p className="tab-content1 text-black">$25,000 Principal Sum</p>
                                         <p className="tab-content1 text-black">None</p>
                                       </div>
                                     </div>
                                   </div>
                                 </section>
                               </div>
                             </div>
                             </div>
                             <div id="ivas-description" class="tab-pane fade show">
                             <div class="tabcontent">
                             <div className="col-lg-12 ivas-standard">
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
                                   <Img fluid={book_icon} className="book-icon-img"/>
                                   <a href="https://infplans.com/policy_pdf/INF_Standard_Policy_Document_70_99.pdf" target="_blank">
                                     <button className="read-now-btn"> Read Now </button>
                                   </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      ) : (
        null
      )
      }
      <Navibar title={siteMetadata.title} location={location} />
      {children}
      <Footer title={siteMetadata.title} author={siteMetadata.author} />
    </div>
  )
}

export default PlansPopup
