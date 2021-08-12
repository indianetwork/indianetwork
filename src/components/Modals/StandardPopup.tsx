import React, { useEffect, useState } from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { Link } from 'gatsby'
import Container from 'components/pages/container'
import Img, { FixedObject } from 'gatsby-image'

interface Props {
   children?: React.ReactNode
   label: string
   id: string
   primary: boolean
   className: string
}

const StandardPopup: React.FC<Props> = ({ label, primary, children, id, className, ...props }: Props) => {
   const data = useStaticQuery(graphql`
      query StandardPopupQuery {
        standard_img: file(name: { eq: "standard_img" }) {
          childImageSharp {
            fluid(maxWidth: 400, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        },
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
        book2_icon: file(name: { eq: "book2-icon" }) {
          childImageSharp {
            fluid(maxWidth: 400, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        },
      }
    `)
   const [popupModalVisible, setPopupModalVisible] = useState(false);
   const [standardCoverageVisible, setStandardCoverageVisible] = useState(true);
   const [standardBenefitsVisible, setStandardBenefitsVisible] = useState(false);
   const [standardDescriptionVisible, setStandardDescriptionVisible] = useState(false);
   const standard_img = data.standard_img?.childImageSharp?.fluid
   const standard_popup_logo = data.standard_popup_logo?.childImageSharp?.fluid
   const book_icon = data.book_icon?.childImageSharp?.fluid
   const book2_icon = data.book2_icon?.childImageSharp?.fluid

   function modalShow() {
      setPopupModalVisible(true);
   }

   function modalHide() {
      setPopupModalVisible(false);
   }


   function showCoverage() {
      setStandardCoverageVisible(true);
      setStandardBenefitsVisible(false);
      setStandardDescriptionVisible(false);
   }

   function showBenefits() {
      setStandardCoverageVisible(false);
      setStandardBenefitsVisible(true);
      setStandardDescriptionVisible(false);
   }

   function showDescription() {
      setStandardCoverageVisible(false);
      setStandardBenefitsVisible(false);
      setStandardDescriptionVisible(true);
   }


   return (
      <>
         <button className="plan-btn" onClick={modalShow}>
            Plan Details
         </button>
         {popupModalVisible ?
            <div className="modal show plans-popup" tabIndex="-1" role="dialog" id="elite-network-popup">
               <div className="modal-dialog" role="document">
                  <div className="modal-content">
                     <div className="modal-header">
                        {/*<button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true" onClick={modalHide} >&times;</span>
                        </button>*/}
                     </div>
                     <div className="modal-body">
                        <div id="plans-section-6">
                           <div className="d-flex">
                              <ul id="tabsJustified" className="nav nav-pills flex-column">
                                 <Img fluid={standard_popup_logo} className="popup-logo" />
                                 <li className="nav-item"><a href="javascript:void(0)" onClick={showCoverage} id="ivas-coverage" className={standardCoverageVisible ? "nav-link small active" : "nav-link small"}>INF Standard IVAS Coverages</a></li>
                                 <li className="nav-item"><a href="javascript:void(0)" onClick={showBenefits} id="ivas-benefits" className={standardBenefitsVisible ? "nav-link small active" : "nav-link small"}>INF Standard IVAS Schedule of Benefits</a></li>
                                 <li className="nav-item"><a href="javascript:void(0)" onClick={showDescription} id="ivas-description" className={standardDescriptionVisible ? "nav-link small active" : "nav-link small"}>INF Standard IVAS Plan Description</a></li>
                              </ul>
                              <div className="tab-content p-3 w-100 pb-5">
                                 <button type="button" className="close" data-dismiss="modal" onClick={modalHide}>&times;</button>
                                 <div id="ivas-coverage" className={standardCoverageVisible ? "tab-pane fade active show" : "tab-pane fade show"} role="tabpanel" aria-labelledby="ivas-coverage">
                                    <div className="tabcontent">
                                       <div className="col-lg-12 ivas-standard">
                                          <h2 className="text-blue text-center">INF Standard IVAS Coverages</h2>
                                          <p className="text-black text-center tab-row-title" style={{ fontSize: 16 }}>*The Standard Plan has no coverage for pre-existing conditions.</p>
                                          <div className="coverages-tab">
                                             <input checked="checked" id="coverages-tabone" type="radio" name="standard-coverages" />
                                             <input id="coverages-tabtwo" type="radio" name="standard-coverages" />
                                             <nav>
                                                <ul>
                                                   <li className="coverages-tabone">
                                                      <label htmlFor="coverages-tabone">INF Standard IVAS Plan Medical Expense Options  <br /> <span className="text-black age-title">Age 0-69</span></label>
                                                   </li>
                                                   <li className="coverages-tabtwo">
                                                      <label htmlFor="coverages-tabtwo">INF Standard IVAS Plan Medical Expense Options <br /> <span className="text-black age-title">Age 70-99</span></label>
                                                   </li>
                                                </ul>
                                             </nav>
                                             <section>
                                                <div className="coverages-tabone">
                                                   <p className="text-black text-center tab-row-title">$50,000 Total Maximum Per Accident or Sickness Expense Benefits</p>
                                                   <div className="row">
                                                      <div className="col-lg-10">
                                                         <div className="column-tab standard-column-tab">
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
                                                         <div className="column-tab standard-column-tab">
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
                                                         <div className="column-tab standard-column-tab">
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
                                                         <div className="column-tab standard-column-tab">
                                                            <p className="text-white column-tab-title">Deductible Per Covered Accident or Sickness Expense</p>
                                                         </div>
                                                         <p className="tab-content text-black">$250</p>
                                                         <p className="tab-content text-black">$500 </p>
                                                         <p className="tab-content text-black">$1,000</p>
                                                         <p className="tab-content text-black">$2,500</p>
                                                         <p className="tab-content text-black">$5,000</p>
                                                      </div>
                                                   </div>
                                                   <p className="text-black text-center tab-row-title standard-column-tab-title">$100,000 Maximum Per Accident or Sickness Expense Benefits</p>
                                                   <div className="row">
                                                      <div className="col-lg-10">
                                                         <div className="column-tab standard-column-tab">
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
                                 <div id="standard-schedule-of-benefits" className={standardBenefitsVisible ? "tab-pane fade active show" : "tab-pane fade show"} role="tabpanel" aria-labelledby="ivas-benefits">
                                    <div className="tabcontent">
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
                                                      <label htmlFor="ivas-in-tabone">In-Patient Services</label>
                                                   </li>
                                                   <li className="ivas-in-tabtwo">
                                                      <label htmlFor="ivas-in-tabtwo">Out-Patient Services</label>
                                                   </li>
                                                   <li className="ivas-in-tabthree">
                                                      <label htmlFor="ivas-in-tabthree">Other Benefits</label>
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
                                                         <p className="tab-content text-black">Hospital Room & Board</p>
                                                         <p className="tab-content text-black">Hospital Intensive Care Unit Room & <br />Board</p>
                                                         <p className="tab-content text-black">Doctor Surgical Expenses</p>
                                                         <p className="tab-content text-black">Anesthetics</p>
                                                         <p className="tab-content text-black">Assistant Surgeon Expenses</p>
                                                         <p className="tab-content text-black">Doctor's Non-Surgical Treatment/Examination <br />Expenses</p>
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
                                                         <p className="tab-content text-black">Up to $1,000 maximum</p>
                                                      </div>
                                                   </div>
                                                </div>
                                                <div className="ivas-in-tabtwo">
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
                                                         <p className="tab-content text-black">Doctor's Non-Surgical Treatment/Examination <br />Expenses</p>
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
                                                <div className="ivas-in-tabthree">
                                                   <div className="row">
                                                      <div className="col-lg-6">
                                                         <div className="column-tab">
                                                            <p className="text-white column-tab-title">Covered Medical Services</p>
                                                         </div>
                                                         <p className="tab-content text-black">Ambulance Expenses</p>
                                                         <p className="tab-content text-black">Rehabilitative Braces or Appliances</p>
                                                         <p className="tab-content text-black">Dental Treatment (Injury )</p>
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
                                                         <p className="tab-content text-black">Up to $4,500 maximum</p>
                                                      </div>
                                                      <div className="column-tab additional-benefits">
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
                                       <div className="col-lg-12 mt-4 ivas-standard">
                                          <p className="text-black text-center tab-row-title">$100,000 Policy Max</p>
                                          <div className="ivas-out-tab">
                                             <input checked="checked" id="ivas-out-tabone" type="radio" name="ivas out benefits" />
                                             <input id="ivas-out-tabtwo" type="radio" name="ivas out benefits" />
                                             <input id="ivas-out-tabthree" type="radio" name="ivas out benefits" />
                                             <nav>
                                                <ul>
                                                   <li className="ivas-out-tabone">
                                                      <label htmlFor="ivas-out-tabone">In-Patient Services</label>
                                                   </li>
                                                   <li className="ivas-out-tabtwo">
                                                      <label htmlFor="ivas-out-tabtwo">Out-Patient Services</label>
                                                   </li>
                                                   <li className="ivas-out-tabthree">
                                                      <label htmlFor="ivas-out-tabthree">Other Benefits</label>
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
                                                         <p className="tab-content text-black">Hospital Room & Board</p>
                                                         <p className="tab-content text-black">Hospital Intensive Care Unit Room & <br />Board</p>
                                                         <p className="tab-content text-black">Doctor Surgical Expenses</p>
                                                         <p className="tab-content text-black">Anesthetics</p>
                                                         <p className="tab-content text-black">Assistant Surgeon Expenses</p>
                                                         <p className="tab-content text-black">Doctor's Non-Surgical Treatment/Examination <br />Expenses</p>
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
                                                         <p className="tab-content text-black">Up to $1,100 maximum</p>
                                                      </div>
                                                   </div>
                                                </div>
                                                <div className="ivas-out-tabtwo">
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
                                                         <p className="tab-content text-black">Doctor's Non-Surgical Treatment/Examination <br />Expenses</p>
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
                                                         <p className="tab-content text-black">Up to $100 per visit maximum | 1 visit per day <br />Up to 10 visits</p>
                                                         <p className="tab-content text-black">Up to $650 maximum</p>
                                                         <p className="tab-content text-black">Up to $650 additional</p>
                                                         <p className="tab-content text-black">Up to $150 maximum</p>
                                                      </div>
                                                   </div>
                                                </div>
                                                <div className="ivas-out-tabthree">
                                                   <div className="row">
                                                      <div className="col-lg-6">
                                                         <div className="column-tab">
                                                            <p className="text-white column-tab-title">Covered Medical Services</p>
                                                         </div>
                                                         <p className="tab-content text-black">Ambulance Expenses</p>
                                                         <p className="tab-content text-black">Rehabilitative Braces or Appliances</p>
                                                         <p className="tab-content text-black">Dental Treatment (Injury )</p>
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
                                                         <p className="tab-content text-black">Up to $5,000 maximum</p>
                                                      </div>
                                                      <div className="column-tab additional-benefits">
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
                                       <div className="col-lg-12 mt-4 ivas-standard">
                                          <p className="text-black text-center tab-row-title">$150,000 Policy Max</p>
                                          <div className="ivas-other-tab">
                                             <input checked="checked" id="ivas-other-tabone" type="radio" name="ivas other benefits" />
                                             <input id="ivas-other-tabtwo" type="radio" name="ivas other benefits" />
                                             <input id="ivas-other-tabthree" type="radio" name="ivas other benefits" />
                                             <nav>
                                                <ul>
                                                   <li className="ivas-other-tabone">
                                                      <label htmlFor="ivas-other-tabone">In-Patient Services</label>
                                                   </li>
                                                   <li className="ivas-other-tabtwo">
                                                      <label htmlFor="ivas-other-tabtwo">Out-Patient Services</label>
                                                   </li>
                                                   <li className="ivas-other-tabthree">
                                                      <label htmlFor="ivas-other-tabthree">Other Benefits</label>
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
                                                         <p className="tab-content text-black">Hospital Room & Board</p>
                                                         <p className="tab-content text-black">Hospital Intensive Care Unit Room & <br />Board</p>
                                                         <p className="tab-content text-black">Doctor Surgical Expenses</p>
                                                         <p className="tab-content text-black">Anesthetics</p>
                                                         <p className="tab-content text-black">Assistant Surgeon Expenses</p>
                                                         <p className="tab-content text-black">Doctor's Non-Surgical Treatment/Examination <br />Expenses</p>
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
                                                         <p className="tab-content text-black">Up to $1,200 maximum</p>
                                                      </div>
                                                   </div>
                                                </div>
                                                <div className="ivas-other-tabtwo">
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
                                                         <p className="tab-content text-black">Doctor's Non-Surgical Treatment/Examination <br />Expenses</p>
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
                                                         <p className="tab-content text-black">Up to $125 per visit maximum | 1 visit per day <br />Up to 10 visits</p>
                                                         <p className="tab-content text-black">Up to $750 maximum</p>
                                                         <p className="tab-content text-black">Up to $1000 additional</p>
                                                         <p className="tab-content text-black">Up to $200 maximum</p>
                                                      </div>
                                                   </div>
                                                </div>
                                                <div className="ivas-other-tabthree">
                                                   <div className="row">
                                                      <div className="col-lg-6">
                                                         <div className="column-tab">
                                                            <p className="text-white column-tab-title">Covered Medical Services</p>
                                                         </div>
                                                         <p className="tab-content text-black">Ambulance Expenses</p>
                                                         <p className="tab-content text-black">Rehabilitative Braces or Appliances</p>
                                                         <p className="tab-content text-black">Dental Treatment (Injury )</p>
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
                                                         <p className="tab-content text-black">Up to $5,500 maximum</p>
                                                      </div>
                                                      <div className="column-tab additional-benefits">
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
                                    </div>

                                 </div>
                                 <div id="ivas-description" className={standardDescriptionVisible ? "tab-pane fade active show" : "tab-pane fade show"} role="tabpanel" aria-labelledby="ivas-description">
                                    <div className="tabcontent">
                                       <div className="col-lg-12 ivas-standard">
                                          <h2 className="text-blue text-center">INF Standard IVAS Plan Description</h2>
                                       </div>
                                       <div className="col-lg-12 ">
                                          <div className="row mt-4 justify-content-center">
                                             <div className="col-lg-5 text-center">
                                                <h3 className="text-black">Read More for Age 0-69 </h3>
                                                <Img fluid={book_icon} className="book-icon-img" />
                                                <a href="https://infplans.com/policy_pdf/INF_Standard_0_69_Description_of_Benefits.pdf" target="_blank">
                                                   <button className="read-now-btn"> Read Now </button>
                                                </a>
                                             </div>
                                             <div className="col-lg-5 text-center">
                                                <h3 className="text-black">Read More for Age 70-99 </h3>
                                                <Img fluid={book2_icon} className="book-icon-img" />
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
            :
            null
         }

      </>

   )
}

export default StandardPopup
