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

const TravelerPopup: React.FC<Props> = ({ label, primary, children, id, className, ...props }: Props) => {
   const data = useStaticQuery(graphql`
      query TravelerPopupQuery {
        elite_network_img: file(name: { eq: "elite-network-img" }) {
          childImageSharp {
            fluid(maxWidth: 400, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        },
        traveler_popup_logo: file(name: { eq: "traveler-popup-logo" }) {
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
   const [travelerCoverageVisible, setTravelerCoverageVisible] = useState(true);
   const [travelerInsuranceVisible, setTravelerInsuranceVisible] = useState(false);
   const [travelerDescriptionVisible, setTravelerDescriptionVisible] = useState(false);
   const elite_network_img = data.elite_network_img?.childImageSharp?.fluid
   const traveler_popup_logo = data.traveler_popup_logo?.childImageSharp?.fluid
   const book_icon = data.book_icon?.childImageSharp?.fluid
   const book2_icon = data.book2_icon?.childImageSharp?.fluid

   function modalShow() {
      setPopupModalVisible(true);
   }

   function modalHide() {
      setPopupModalVisible(false);
   }


   function showCoverage() {
      setTravelerCoverageVisible(true);
      setTravelerInsuranceVisible(false);
      setTravelerDescriptionVisible(false);
   }

   function showInsurance() {
      setTravelerCoverageVisible(false);
      setTravelerInsuranceVisible(true);
      setTravelerDescriptionVisible(false);
   }

   function showDescription() {
      setTravelerCoverageVisible(false);
      setTravelerInsuranceVisible(false);
      setTravelerDescriptionVisible(true);
   }


   return (
      <>
         <button className="plan-btn" onClick={modalShow}>
            Plan Details
         </button>
         {popupModalVisible ?
            <div className="modal show plans-popup" tabindex="-1" role="dialog" id="elite-network-popup">
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
                                 <Img fluid={traveler_popup_logo} className="popup-logo" />
                                 <li className="nav-item"><a href="javascript:void(0)" onClick={showCoverage} id="ivas-coverage" className={travelerCoverageVisible ? "nav-link small active" : "nav-link small"}>INF Traveler USA IVAS Coverages</a></li>
                                 <li className="nav-item"><a href="javascript:void(0)" onClick={showInsurance} id="ivas-insurance" className={travelerInsuranceVisible ? "nav-link small active" : "nav-link small"}>INF Traveler USA IVAS</a></li>
                                 <li className="nav-item"><a href="javascript:void(0)" onClick={showDescription} id="ivas-description" className={travelerDescriptionVisible ? "nav-link small active" : "nav-link small"}>INF Traveler USA Plan Description</a></li>
                              </ul>
                              <div className="tab-content p-3 w-100 pb-5">
                                 <button type="button" className="close" data-dismiss="modal" onClick={modalHide}>&times;</button>
                                 <div id="ivas-coverage" className={travelerCoverageVisible ? "tab-pane fade active show" : "tab-pane fade show"} role="tabpanel" aria-labelledby="ivas-coverage">
                                    <div className="tabcontent">
                                       <div className="col-lg-12 ivas-standard">
                                          <h2 className="text-blue text-center">INF Traveler USA IVAS Coverages</h2>
                                          <div className="coverages-tab">
                                             <input checked="checked" id="coverages-tabone" type="radio" name="elite-coverages" />
                                             <input id="coverages-tabtwo" type="radio" name="elite-coverages" />
                                             <nav>
                                                <ul>
                                                   <li className="coverages-tabone">
                                                      <label for="coverages-tabone">INF Traveler USA IVAS Accident And <br />Sickness Plan <br /> <span className="text-black age-title">Age 0-69</span></label>
                                                   </li>
                                                   <li className="coverages-tabtwo">
                                                      <label for="coverages-tabtwo">INF Traveler USA IVAS Accident And <br />Sickness Plan <br /> <span className="text-black age-title">Age 70-99</span></label>
                                                   </li>
                                                </ul>
                                             </nav>
                                             <section>
                                                <div className="coverages-tabone">
                                                   <div className="row p-t-20">
                                                      <div className="col-lg-6">
                                                         <div className="column-tab">
                                                            <p className="text-white column-tab-title">Total Maximum per Accident or <br />Sickness Expense Benefits</p>
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
                                                            <p className="text-white column-tab-title">Deductible per Accident or <br />Sickness Expense Benefits</p>
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
                                                <div className="coverages-tabtwo">
                                                   <div className="row p-t-20">
                                                      <div className="col-lg-6">
                                                         <div className="column-tab">
                                                            <p className="text-white column-tab-title">Total Maximum per Accident or <br />Sickness Expense Benefits</p>
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
                                                            <p className="text-white column-tab-title">Deductible per Accident or <br />Sickness Expense Benefits</p>
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
                                    </div>
                                 </div>
                                 <div id="ivas-benefits" className={travelerInsuranceVisible ? "tab-pane fade active show" : "tab-pane fade show"} role="tabpanel" aria-labelledby="ivas-insurance">
                                    <div className="tabcontent">
                                       <div className="col-lg-12 ivas-standard">
                                          <h2 className="text-blue text-center">INF Traveler USA IVAS</h2>
                                          <h3 className="text-blue text-center subtitle">Schedule of Benefits</h3>
                                          <h3 className="text-black text-center">Co-Insurance With INF Traveler USA IVAS (Note: All Emergency Admissions Are Considered in-Network and Paid at 80% or 90%)</h3>
                                          <div className="ivas-in-tab">
                                             <input checked="checked" id="ivas-in-tabone" type="radio" name="ivas in benefits" />
                                             <input id="ivas-in-tabtwo" type="radio" name="ivas in benefits" />
                                             <input id="ivas-in-tabthree" type="radio" name="ivas in benefits" />
                                             <nav>
                                                <ul>
                                                   <li className="ivas-in-tabone">
                                                      <label for="ivas-in-tabone">In-Network</label>
                                                   </li>
                                                   <li className="ivas-in-tabtwo">
                                                      <label for="ivas-in-tabtwo">Out-of-Network</label>
                                                   </li>
                                                </ul>
                                             </nav>
                                             <section>
                                                <div className="ivas-in-tabone">
                                                   <p className="text-black">​80% or 90% of charges up to the Total Maximum for All Accident or Sickness Expense Benefits.</p>
                                                </div>
                                                <div className="ivas-in-tabtwo">
                                                   <p className="text-black">60% or 70% of the Usual and Customary Charges up to the Total Maximum for All Accident or Sickness Expense Benefits.</p>
                                                </div>
                                             </section>
                                          </div>
                                       </div>
                                    </div>
                                 </div>

                                 <div id="ivas-description" className={travelerDescriptionVisible ? "tab-pane fade active show" : "tab-pane fade show"} role="tabpanel" aria-labelledby="ivas-description">
                                    <div className="tabcontent">
                                       <div className="col-lg-12 ivas-standard">
                                          <h2 className="text-blue text-center">INF Traveler USA Plan Description</h2>
                                       </div>
                                       <div className="col-lg-12 ">
                                          <div className="row mt-4 justify-content-center">
                                             <div className="col-lg-5 text-center">
                                              <h3 className="text-black">Read INF Premier Plan<br /> Description for Age 0-69  </h3>
                                                <Img fluid={book_icon} className="book-icon-img" />
                                                <a href="https://infplans.com/policy_pdf/INF_Traveler_USA_Policy_Document_age_0_69.pdf" target="_blank">
                                                   <button className="read-now-btn"> Read Now </button>
                                                </a>
                                             </div>
                                             <div className="col-lg-5 text-center">
                                              <h3 className="text-black">Read INF Premier Plan<br /> Description for Age 70-99 </h3>
                                                <Img fluid={book2_icon} className="book-icon-img" />
                                                <a href="https://infplans.com/policy_pdf/INF_Traveler_USA_Policy_Document_70_99.pdf" target="_blank">
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

export default TravelerPopup
