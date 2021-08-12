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

const PremierPopup: React.FC<Props> = ({ label, primary, children, id, className, ...props }: Props) => {
   const data = useStaticQuery(graphql`
      query PremierPopupQuery {
        elite_network_img: file(name: { eq: "elite-network-img" }) {
          childImageSharp {
            fluid(maxWidth: 400, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        },
        premier_popup_logo: file(name: { eq: "premier-popup-logo" }) {
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
   const [premierCoverageVisible, setPremierCoverageVisible] = useState(true);
   const [premierBenefitsVisible, setPremierBenefitsVisible] = useState(false);
   const [premierDescriptionVisible, setPremierDescriptionVisible] = useState(false);
   const elite_network_img = data.elite_network_img?.childImageSharp?.fluid
   const premier_popup_logo = data.premier_popup_logo?.childImageSharp?.fluid
   const book_icon = data.book_icon?.childImageSharp?.fluid
   const book2_icon = data.book2_icon?.childImageSharp?.fluid

   function modalShow() {
      setPopupModalVisible(true);
   }

   function modalHide() {
      setPopupModalVisible(false);
   }


   function showCoverage() {
      setPremierCoverageVisible(true);
      setPremierBenefitsVisible(false);
      setPremierDescriptionVisible(false);
   }

   function showBenefits() {
      setPremierCoverageVisible(false);
      setPremierBenefitsVisible(true);
      setPremierDescriptionVisible(false);
   }

   function showDescription() {
      setPremierCoverageVisible(false);
      setPremierBenefitsVisible(false);
      setPremierDescriptionVisible(true);
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
                                 <Img fluid={premier_popup_logo} className="popup-logo" />
                                 <li className="nav-item"><a href="javascript:void(0)" onClick={showCoverage} id="ivas-coverage" className={premierCoverageVisible ? "nav-link small active" : "nav-link small"}>INF Premier IVAS Plan Coverages</a></li>
                                 <li className="nav-item"><a href="javascript:void(0)" onClick={showBenefits} id="ivas-insurance" className={premierBenefitsVisible ? "nav-link small active" : "nav-link small"}>INF Premier IVAS - Specific Schedule of Benefits</a></li>
                                 <li className="nav-item"><a href="javascript:void(0)" onClick={showDescription} id="ivas-description" className={premierDescriptionVisible ? "nav-link small active" : "nav-link small"}>INF Premier Plan Description</a></li>
                              </ul>
                              <div className="tab-content p-3 w-100 pb-5">
                                 <button type="button" className="close" data-dismiss="modal" onClick={modalHide}>&times;</button>
                                 <div id="ivas-coverage" className={premierCoverageVisible ? "tab-pane fade active show" : "tab-pane fade show"} role="tabpanel" aria-labelledby="ivas-coverage">
                                    <div className="tabcontent">
                                       <div className="col-lg-12 ivas-standard">
                                          <h2 className="text-blue text-center">INF Premier IVAS Plan Coverages</h2>
                                          <div className="coverages-tab">
                                             <input checked="checked" id="coverages-tabone" type="radio" name="elite-coverages" />
                                             <input id="coverages-tabtwo" type="radio" name="elite-coverages" />
                                             <nav>
                                                <ul>
                                                   <li className="coverages-tabone">
                                                      <label htmlFor="coverages-tabone">INF Premium Plan <br /> <span className="text-black age-title">Age 0-69</span></label>
                                                   </li>
                                                   <li className="coverages-tabtwo">
                                                      <label htmlFor="coverages-tabtwo">INF Premium Plan <br /> <span className="text-black age-title">Age 70-99</span></label>
                                                   </li>
                                                </ul>
                                             </nav>
                                             <section>
                                                <div className="coverages-tabone">
                                                   <p className="text-black text-center tab-row-title">$100,000 Total Maximum Per Accident or Sickness Expense Benefits</p>
                                                   <div className="row">
                                                      <div className="col-lg-4">
                                                         <div className="column-tabs">
                                                            <p className="text-white column-tab-title">Deductible Per Covered Accident or Sickness Expense</p>
                                                         </div>
                                                         <p className="tab-content text-black">$75</p>
                                                         <p className="tab-content text-black">$100</p>
                                                         <p className="tab-content text-black">$250</p>
                                                         <p className="tab-content text-black">$500</p>
                                                         <p className="tab-content text-black">$1,000</p>
                                                         <p className="tab-content text-black">$2,500</p>
                                                         <p className="tab-content text-black">$5,000</p>
                                                         <p className="tab-content1 text-black"></p>
                                                         <p className="tab-content text-black">$75</p>
                                                         <p className="tab-content text-black">$100</p>
                                                         <p className="tab-content text-black">$250</p>
                                                         <p className="tab-content text-black">$500</p>
                                                         <p className="tab-content text-black">$1,000</p>
                                                         <p className="tab-content text-black">$2,500</p>
                                                         <p className="tab-content text-black">$5,000</p>
                                                      </div>
                                                      <div className="col-lg-4">
                                                         <div className="column-tabs">
                                                            <p className="text-white column-tab-title">Maximum for Pre-Existing Conditions</p>
                                                         </div>
                                                         <p className="tab-content text-black">$20,000</p>
                                                         <p className="tab-content text-black"></p>
                                                         <p className="tab-content text-black"></p>
                                                         <p className="tab-content text-black"></p>
                                                         <p className="tab-content text-black"></p>
                                                         <p className="tab-content text-black"></p>
                                                         <p className="tab-content text-black"></p>
                                                         <p className="tab-content1 text-black"></p>
                                                         <p className="tab-content text-black">$40,000</p>
                                                         <p className="tab-content text-black"></p>
                                                         <p className="tab-content text-black"></p>
                                                         <p className="tab-content text-black"></p>
                                                         <p className="tab-content text-black"></p>
                                                         <p className="tab-content text-black"></p>
                                                         <p className="tab-content text-black"></p>
                                                      </div>
                                                      <div className="col-lg-4">
                                                         <div className="column-tabs">
                                                            <p className="text-white column-tab-title">Deductible for Pre-Existing Conditions</p>
                                                         </div>
                                                         <p className="tab-content text-black">$1,000</p>
                                                         <p className="tab-content text-black"></p>
                                                         <p className="tab-content text-black"></p>
                                                         <p className="tab-content text-black"></p>
                                                         <p className="tab-content text-black"></p>
                                                         <p className="tab-content text-black"></p>
                                                         <p className="tab-content text-black"></p>
                                                         <p className="tab-content1 text-black"></p>
                                                         <p className="tab-content text-black">$5,000</p>
                                                         <p className="tab-content text-black"></p>
                                                         <p className="tab-content text-black"></p>
                                                         <p className="tab-content text-black"></p>
                                                         <p className="tab-content text-black"></p>
                                                         <p className="tab-content text-black"></p>
                                                         <p className="tab-content text-black"></p>
                                                      </div>

                                                      <p className="text-black text-center tab-row-title">$150,000 Total Maximum Per Accident or Sickness Expense Benefits</p>
                                                      <div className="row">
                                                         <div className="col-lg-4">
                                                            <div className="column-tabs">
                                                               <p className="text-white column-tab-title">Deductible Per Covered Accident or Sickness Expense</p>
                                                            </div>
                                                            <p className="tab-content text-black">$75</p>
                                                            <p className="tab-content text-black">$100</p>
                                                            <p className="tab-content text-black">$250</p>
                                                            <p className="tab-content text-black">$500</p>
                                                            <p className="tab-content text-black">$1,000</p>
                                                            <p className="tab-content text-black">$2,500</p>
                                                            <p className="tab-content text-black">$5,000</p>
                                                            <p className="tab-content1 text-black"></p>
                                                            <p className="tab-content text-black">$75</p>
                                                            <p className="tab-content text-black">$100</p>
                                                            <p className="tab-content text-black">$250</p>
                                                            <p className="tab-content text-black">$500</p>
                                                            <p className="tab-content text-black">$1,000</p>
                                                            <p className="tab-content text-black">$2,500</p>
                                                            <p className="tab-content text-black">$5,000</p>
                                                         </div>
                                                         <div className="col-lg-4">
                                                            <div className="column-tabs">
                                                               <p className="text-white column-tab-title">Maximum for Pre-Existing Conditions</p>
                                                            </div>
                                                            <p className="tab-content text-black">$30,000</p>
                                                            <p className="tab-content text-black"></p>
                                                            <p className="tab-content text-black"></p>
                                                            <p className="tab-content text-black"></p>
                                                            <p className="tab-content text-black"></p>
                                                            <p className="tab-content text-black"></p>
                                                            <p className="tab-content text-black"></p>
                                                            <p className="tab-content1 text-black"></p>
                                                            <p className="tab-content text-black">$60,000</p>
                                                            <p className="tab-content text-black"></p>
                                                            <p className="tab-content text-black"></p>
                                                            <p className="tab-content text-black"></p>
                                                            <p className="tab-content text-black"></p>
                                                            <p className="tab-content text-black"></p>
                                                            <p className="tab-content text-black"></p>
                                                         </div>
                                                         <div className="col-lg-4">
                                                            <div className="column-tabs">
                                                               <p className="text-white column-tab-title">Deductible for Pre-Existing Conditions</p>
                                                            </div>
                                                            <p className="tab-content text-black">$1,000</p>
                                                            <p className="tab-content text-black"></p>
                                                            <p className="tab-content text-black"></p>
                                                            <p className="tab-content text-black"></p>
                                                            <p className="tab-content text-black"></p>
                                                            <p className="tab-content text-black"></p>
                                                            <p className="tab-content text-black"></p>
                                                            <p className="tab-content1 text-black"></p>
                                                            <p className="tab-content text-black">$5,000</p>
                                                            <p className="tab-content text-black"></p>
                                                            <p className="tab-content text-black"></p>
                                                            <p className="tab-content text-black"></p>
                                                            <p className="tab-content text-black"></p>
                                                            <p className="tab-content text-black"></p>
                                                            <p className="tab-content text-black"></p>
                                                         </div>
                                                      </div>
                                                   </div>
                                                </div>
                                                <div className="coverages-tabtwo">
                                                   <p className="text-black text-center tab-row-title">$100,000 Total Maximum Per Accident or Sickness Expense Benefits</p>
                                                   <div className="row">
                                                      <div className="col-lg-4">
                                                         <div className="column-tabs">
                                                            <p className="text-white column-tab-title">Deductible Per Covered Accident or Sickness Expense</p>
                                                         </div>
                                                         <p className="tab-content text-black">$250</p>
                                                         <p className="tab-content text-black">$500 </p>
                                                         <p className="tab-content text-black">$1,000</p>
                                                         <p className="tab-content text-black">$2,500</p>
                                                         <p className="tab-content text-black">$5,000</p>
                                                         <p className="tab-content1 text-black"></p>
                                                         <p className="tab-content text-black">$250</p>
                                                         <p className="tab-content text-black">$500 </p>
                                                         <p className="tab-content text-black">$1,000</p>
                                                         <p className="tab-content text-black">$2,500</p>
                                                         <p className="tab-content text-black">$5,000</p>
                                                      </div>
                                                      <div className="col-lg-4">
                                                         <div className="column-tabs">
                                                            <p className="text-white column-tab-title">Maximum for Pre-Existing Conditions</p>
                                                         </div>
                                                         <p className="tab-content text-black">$15,000</p>
                                                         <p className="tab-content text-black"></p>
                                                         <p className="tab-content text-black"></p>
                                                         <p className="tab-content text-black"></p>
                                                         <p className="tab-content text-black"></p>
                                                         <p className="tab-content1 text-black"></p>
                                                         <p className="tab-content text-black">$25,000</p>
                                                         <p className="tab-content text-black"></p>
                                                         <p className="tab-content text-black"></p>
                                                         <p className="tab-content text-black"></p>
                                                         <p className="tab-content text-black"></p>
                                                      </div>
                                                      <div className="col-lg-4">
                                                         <div className="column-tabs">
                                                            <p className="text-white column-tab-title">Deductible for Pre-Existing Conditions</p>
                                                         </div>
                                                         <p className="tab-content text-black">$1,000</p>
                                                         <p className="tab-content text-black"></p>
                                                         <p className="tab-content text-black"></p>
                                                         <p className="tab-content text-black"></p>
                                                         <p className="tab-content text-black"></p>
                                                         <p className="tab-content1 text-black"></p>
                                                         <p className="tab-content text-black">$5,000</p>
                                                         <p className="tab-content text-black"></p>
                                                         <p className="tab-content text-black"></p>
                                                         <p className="tab-content text-black"></p>
                                                         <p className="tab-content text-black"></p>
                                                      </div>
                                                   </div>
                                                </div>
                                             </section>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div id="premier-schedule-of-benefits" className={premierBenefitsVisible ? "tab-pane fade active show" : "tab-pane fade show"} role="tabpanel" aria-labelledby="ivas-benefits">
                                    <div className="tabcontent">
                                       <div className="col-lg-12 ivas-standard">
                                          <h2 className="text-blue text-center">INF Premier IVAS - Specific Schedule of Benefits</h2>
                                          <p className="text-black text-center tab-row-title">$100,000 Total Maximum Per Accident or Sickness Expense Benefits</p>
                                          <div className="ivas-in-tab">
                                             <input checked="checked" id="ivas-in-tabone" type="radio" name="ivas in benefits" />
                                             <input id="ivas-in-tabtwo" type="radio" name="ivas in benefits" />
                                             <input id="ivas-in-tabthree" type="radio" name="ivas in benefits" />
                                             <nav>
                                                <ul>
                                                   <li className="ivas-in-tabone">
                                                      <label htmlFor="ivas-in-tabone">100k Premier | Medical Out-Patient Benefits (Services Rendered Require Less Than 24 Hours Stay)<br /> Age 0-99</label>
                                                   </li>
                                                   <li className="ivas-in-tabtwo">
                                                      <label htmlFor="ivas-in-tabtwo">100k Premier  | ​Medical in-Patient Benefits (Services Rendered Require More Than 24 Hours Stay) <br /> Age 0-99</label>
                                                   </li>
                                                   <li className="ivas-in-tabthree">
                                                      <label htmlFor="ivas-in-tabthree">100k Premier | Other Covered Services <br /> Age 0-99</label>
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
                                                         <p className="tab-content text-black">Surgical Room & Supply Expenses</p>
                                                         <p className="tab-content text-black">Hospital Emergency Room</p>
                                                         <p className="tab-content text-black">Doctor Surgical Expenses</p>
                                                         <p className="tab-content text-black">Anesthetics</p>
                                                         <p className="tab-content text-black">Assistant Surgeon Expenses</p>
                                                         <p className="tab-content text-black">Doctor's Non-Surgical Treatment/Examination Expenses</p>
                                                         <p className="tab-content text-black">X-rays & Laboratory Procedures</p>
                                                         <p className="tab-content text-black">CAT Scan, PET Scan, or MRI Scan</p>
                                                         <p className="tab-content text-black">Prescription Drug Expenses</p>
                                                      </div>
                                                      <div className="col-lg-6">
                                                         <div className="column-tab">
                                                            <p className="text-white column-tab-title">Out-Patient Medical Benefits</p>
                                                         </div>
                                                         <p className="tab-content text-black">Up to $1,100 maximum</p>
                                                         <p className="tab-content text-black">Up to $500</p>
                                                         <p className="tab-content text-black">Up to $5,000 maximum</p>
                                                         <p className="tab-content text-black">Up to $1,250 maximum</p>
                                                         <p className="tab-content text-black">​Up to $1,250 maximum</p>
                                                         <p className="tab-content text-black">Up to $100 per visit; subject to 1 visit per day, up to a maximum of 10 visits</p>
                                                         <p className="tab-content text-black">Up to $650 maximum</p>
                                                         <p className="tab-content text-black">Up to $650 additional</p>
                                                         <p className="tab-content text-black">Up to $150 maximum</p>
                                                      </div>
                                                   </div>
                                                </div>
                                                <div className="ivas-in-tabtwo">
                                                   <div className="row">
                                                      <div className="col-lg-6">
                                                         <div className="column-tab">
                                                            <p className="text-white column-tab-title">Covered Medical Services</p>
                                                         </div>
                                                         <p className="tab-content text-black">Hospital Room & Board Charges</p>
                                                         <p className="tab-content text-black">Hospital Intensive Care Unit Room & Board Charges</p>
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
                                                         <p className="tab-content text-black">Charges up to $1,750 per day to a maximum of 30 days</p>
                                                         <p className="tab-content text-black">Up to an additional $750 maximum per day to a maximum of 8 Days</p>
                                                         <p className="tab-content text-black">Up to $5,000 maximum</p>
                                                         <p className="tab-content text-black">Up to $1,250 maximum</p>
                                                         <p className="tab-content text-black">Up to $1,250 maximum</p>
                                                         <p className="tab-content text-black">Up to $100 maximum a visit, 1 visit per day, up to a maximum 30 visits</p>
                                                         <p className="tab-content text-black">Up to $450 maximum</p>
                                                         <p className="tab-content text-black">Up to $1,100 maximum</p>
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
                                                         <p className="tab-content text-black">Physical & Occupational Therapy: Inpatient and Outpatient</p>
                                                         <p className="tab-content text-black">Private Duty Nurse</p>
                                                         <p className="tab-content text-black ">Pregnancy or Childbirth (Conception must occur after the actual start of the Trip)</p>
                                                      </div>
                                                      <div className="col-lg-6">
                                                         <div className="column-tab">
                                                            <p className="text-white column-tab-title">Other Benefits</p>
                                                         </div>
                                                         <p className="tab-content text-black">Up to $450 maximum</p>
                                                         <p className="tab-content text-black">Up to $1,100 maximum</p>
                                                         <p className="tab-content text-black">Up to $500</p>
                                                         <p className="tab-content text-black">Up to $1,150 maximum</p>
                                                         <p className="tab-content text-black">Up to $45 per visit max, 1 Visit per day to 12 visits maximum</p>
                                                         <p className="tab-content text-black">Up to $500 maximum</p>
                                                         <p className="tab-content text-black ">Up to $5,000 maximum</p>
                                                      </div>
                                                      <div className="column-tab additional-benefits ">
                                                         <p className="text-white column-tab-title">Additional Benefits</p>
                                                      </div>
                                                      <div className="col-lg-6">
                                                         <p className="tab-content text-black">Emergency Medical Evacuation</p>
                                                         <p className="tab-content text-black">Repatriation of Remains</p>
                                                         <p className="tab-content text-black">Accidental Death & Dismemberment</p>
                                                      </div>
                                                      <div className="col-lg-6">
                                                         <p className="tab-content text-black">Up to $20,000 maximum</p>
                                                         <p className="tab-content text-black">Up to $15,000 maximum​</p>
                                                         <p className="tab-content text-black">$25,000 Principal Sum</p>
                                                      </div>
                                                   </div>
                                                </div>
                                             </section>
                                          </div>
                                       </div>
                                       <div className="col-lg-12 mt-4 ivas-standard">
                                          <p className="text-black text-center tab-row-title">Premier $150,000 Schedule of Benefits</p>
                                          <div className="ivas-out-tab">
                                             <input checked="checked" id="ivas-out-tabone" type="radio" name="ivas out benefits" />
                                             <input id="ivas-out-tabtwo" type="radio" name="ivas out benefits" />
                                             <input id="ivas-out-tabthree" type="radio" name="ivas out benefits" />
                                             <nav>
                                                <ul>
                                                   <li className="ivas-out-tabone">
                                                      <label htmlFor="ivas-out-tabone">150k Premier | Medical in-Patient Benefits (Services Rendered Require More Than 24 Hours Stay)<br /> Age 0-69</label>
                                                   </li>
                                                   <li className="ivas-out-tabtwo">
                                                      <label htmlFor="ivas-out-tabtwo">150k Premier | Medical Out-Patient Benefits (Services Rendered Require Less Than 24 Hours Stay)<br /> Age 0-69</label>
                                                   </li>
                                                   <li className="ivas-out-tabthree">
                                                      <label htmlFor="ivas-out-tabthree">150k Premier | Other Covered Services<br /> Age 0-69</label>
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
                                                         <p className="tab-content text-black">Hospital Room & Board Charges</p>
                                                         <p className="tab-content text-black">Hospital Intensive Care Unit Room & Board Charges</p>
                                                         <p className="tab-content text-black">Doctors Surgical Expenses</p>
                                                         <p className="tab-content text-black">Anesthetics</p>
                                                         <p className="tab-content text-black">Assistant Surgeon Expenses</p>
                                                         <p className="tab-content text-black">Doctor Non-Surgical Treatment/Examination Expenses</p>
                                                         <p className="tab-content text-black">Consultation visits when requested by a Doctor</p>
                                                         <p className="tab-content text-black">Pre-Admission Tests within 14 days before hospital admission</p>
                                                      </div>
                                                      <div className="col-lg-6">
                                                         <div className="column-tab">
                                                            <p className="text-white column-tab-title">In-Patient Medical Benefits</p>
                                                         </div>
                                                         <p className="tab-content text-black">Up to $1,900 per day to a maximum of 30 days</p>
                                                         <p className="tab-content text-black">Up to an additional $850 per day to a maximum of 8 days</p>
                                                         <p className="tab-content text-black">Up to $6,000 maximum</p>
                                                         <p className="tab-content text-black">Up to $1,500 maximum</p>
                                                         <p className="tab-content text-black">Up to $1,500 maximum</p>
                                                         <p className="tab-content text-black">Up to $125 per visit, 1 visit per day, up to a maximum of 30 visits</p>
                                                         <p className="tab-content text-black">Up to $500 maximum</p>
                                                         <p className="tab-content text-black">Up to $1,200 maximum</p>
                                                      </div>
                                                   </div>
                                                </div>
                                                <div className="ivas-out-tabtwo">
                                                   <div className="row">
                                                      <div className="col-lg-6">
                                                         <div className="column-tab">
                                                            <p className="text-white column-tab-title">Covered Medical Services</p>
                                                         </div>
                                                         <p className="tab-content text-black">Surgical Room and Supply Expenses:</p>
                                                         <p className="tab-content text-black">Hospital Emergency Room</p>
                                                         <p className="tab-content text-black">Doctor Surgical Expenses</p>
                                                         <p className="tab-content text-black">Anesthetics</p>
                                                         <p className="tab-content text-black">Assistant Surgeon Expenses</p>
                                                         <p className="tab-content text-black">Doctor Non-Surgical Treatment/Examination Expenses</p>
                                                         <p className="tab-content text-black">X-rays, laboratory procedures</p>
                                                         <p className="tab-content text-black">CAT Scan, PET Scan, or MRI</p>
                                                         <p className="tab-content text-black">Prescription Drug Expenses</p>
                                                      </div>
                                                      <div className="col-lg-6">
                                                         <div className="column-tab">
                                                            <p className="text-white column-tab-title">Out-Patient Medical Benefits</p>
                                                         </div>
                                                         <p className="tab-content text-black">Up to $1,200 maximum</p>
                                                         <p className="tab-content text-black">Up to $750</p>
                                                         <p className="tab-content text-black">Up to $6,000 maximum</p>
                                                         <p className="tab-content text-black">​Up to $1,500 maximum</p>
                                                         <p className="tab-content text-black">​Up to $1,500 maximum</p>
                                                         <p className="tab-content text-black">Up to $125 per visit; subject to 1 visit per day, to a maximum of 10 visits</p>
                                                         <p className="tab-content text-black">Up to $750 maximum</p>
                                                         <p className="tab-content text-black">Up to an additional $1,000</p>
                                                         <p className="tab-content text-black">Up to $200 maximum</p>
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
                                                         <p className="tab-content text-black">Physical & Occupational Therapy: Inpatient and Outpatient</p>
                                                         <p className="tab-content text-black">Private Duty Nurse</p>
                                                         <p className="tab-content text-black ">Pregnancy or Childbirth (Conception must occur after the actual start of the Trip)</p>
                                                      </div>
                                                      <div className="col-lg-6">
                                                         <div className="column-tab">
                                                            <p className="text-white column-tab-title">Other Benefits</p>
                                                         </div>
                                                         <p className="tab-content text-black">Up to $500 maximum</p>
                                                         <p className="tab-content text-black">Up to $1,200 maximum</p>
                                                         <p className="tab-content text-black">Up to $550</p>
                                                         <p className="tab-content text-black">Up to $1,250 maximum</p>
                                                         <p className="tab-content text-black">Up to $50 per visit max, 1 Visit per day up to 12 visits maximum</p>
                                                         <p className="tab-content text-black">Up to $550 maximum</p>
                                                         <p className="tab-content text-black ">Up to $5,500 maximum</p>
                                                      </div>
                                                      <div className="column-tab additional-benefits ">
                                                         <p className="text-white column-tab-title">Additional Benefits</p>
                                                      </div>
                                                      <div className="col-lg-6">
                                                         <p className="tab-content text-black">Emergency Medical Evacuation</p>
                                                         <p className="tab-content text-black">Repatriation of Remains</p>
                                                         <p className="tab-content text-black">Accidental Death & Dismemberment</p>
                                                      </div>
                                                      <div className="col-lg-6">
                                                         <p className="tab-content text-black">Up to an additional $1,000</p>
                                                         <p className="tab-content text-black">Up to $200 maximum​</p>
                                                         <p className="tab-content text-black">$25,000 Principal Sum</p>
                                                      </div>
                                                   </div>
                                                </div>
                                             </section>
                                          </div>
                                       </div>
                                    </div>

                                 </div>
                                 <div id="ivas-description" className={premierDescriptionVisible ? "tab-pane fade active show" : "tab-pane fade show"} role="tabpanel" aria-labelledby="ivas-description">
                                    <div className="tabcontent">
                                       <div className="col-lg-12 ivas-standard">
                                          <h2 className="text-blue text-center">INF Premier Plan Description</h2>
                                       </div>
                                       <div className="col-lg-12 ">
                                          <div className="row mt-4 justify-content-center">
                                             <div className="col-lg-5 text-center">
                                                <h3 className="text-black">Read INF Premier Plan<br /> Description for Age 0-69 </h3>
                                                <Img fluid={book_icon} className="book-icon-img" />
                                                <a href="https://infplans.com/policy_pdf/INF_Premier_Policy_Document.pdf" target="_blank">                                                  <button className="read-now-btn"> Read Now </button>
                                                </a>
                                             </div>
                                             <div className="col-lg-5 text-center">
                                                <h3 className="text-black">Read INF Premier Plan<br /> Description for Age 70-99 </h3>
                                                <Img fluid={book2_icon} className="book-icon-img" />
                                                <a href="https://infplans.com/policy_pdf/INF_Premier_Policy_Document_70_99.pdf" target="_blank">                                                  <button className="read-now-btn"> Read Now </button>
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

export default PremierPopup
