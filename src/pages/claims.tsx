import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import { IndexQueryQuery } from '../../types/graphql-types'
import Layout from 'components/layout/layout'
import Container from 'components/pages/container'
import BackgroundImage from 'gatsby-background-image'
import { Helmet } from 'react-helmet'
import ClaimsForm from 'components/forms/ClaimsForm';

interface Props {
  data: IndexQueryQuery
  location: Location
}

const ClaimsPage: React.FC<Props> = ({ data, location }: Props) => {
  const hero_background = data.hero_background?.childImageSharp?.fluid
  const infplans_big_logo = data.infplans_big_logo?.childImageSharp?.fluid
  const pdf_icon = data.pdf_icon?.childImageSharp?.fluid
  const submit_req_img = data.submit_req_img?.childImageSharp?.fluid
  const submit_form_img = data.submit_form_img?.childImageSharp?.fluid
  const claims_payment_img = data.claims_payment_img?.childImageSharp?.fluid

  return (
    <Layout location={location}>
      <Helmet>
        <title>Insurance for Visitors Claims Forms  - INF Visitor Insurance</title>
        <meta name="description" content="A detailed explanation of the visitor insurance claims process, how to claim travel insurance and what do to once you have received your treatment."/>
        <meta name="keywords" content="Dr Rao Visitors Coverage, Rao Insurance for Visitors, KV Rao Visitor Insurance, Rao Visitors Coverage, KV Rao Insurance, KV Rao Insurance for Visitors, India Network, India Network Insurance for Visitors, indnet, india network foundation, india health network insurance,health insurance claim process, medical insurance claim process, insurance claim procedure, travel insurance, visitor insurance, visitor insurance claim process, travel insurance claim process, Claim Process, Medical claims"/>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Helmet>
      <BackgroundImage
        Tag="section"
        className="claims-form-hero-section-bg"
        fluid={hero_background}
        backgroundColor={`#e9f4f8`}
        alt="claims form hero background"
      >
        <div id="claims-form-hero-section">
          <Container>
            <div className="col-lg-12">
              <h1 className="text-white text-center">
                CLAIMS FORM
              </h1>
              <Link to="#claim-steps"><button className="hero-btn"> File a Claim </button></Link>
            </div>
          </Container>
        </div>
      </BackgroundImage>

      <section id="claims-form-section-1">
       <Container>
        <div className="col-lg-12">
          <div className="claims-form-container">
           <h2 className="text-blue text-center">INF Claims Form</h2>
           <div className="row mt-4">
         <div className="col-lg-8">
          <p>
          Filing claims when using your insurance is needed to make sure that you are reimbursed for any eligible medical expense paid out-of-pocket. Although INF allows direct billing, it is highly advised for plan members to submit a claim form anytime they use their insurance, regardless of whether you have paid out-of-pocket. Sending in the proper paperwork and documentation may help expedite the claims and reimbursement process. Below you can find information on how to file claims for International Visitors Accident and Sickness Insurance plans:
          </p>
         </div>
          <div className="col-lg-4">
            <Img fluid={infplans_big_logo} className="big-logo"/>
            <Link to="#claims-insured-login"><button className="inf-btn"> File a Claim </button></Link>
          </div>
         </div>
         <div className="row top" id="claim-steps">
             <div className="col-lg-4 flipcard-col flip-card">
                 <div className="flip-card-inner">
                   <div className="flipcard-container flip-card-front">
                     <Img fluid={submit_form_img} className="flipcard-icon" alt="Submit Your Online Form" />
                     <h3 className="text-center">Submit Your Online <br /> Claim Form</h3>
                   </div>
                   <div className="flipcard-container-inner flip-card-back">
                   <h3 className="text-center inner-content">Submit Your Online <br /> Claim Form</h3>
                     <p className="text-center flipcard-content">Log in to your MyINF Portal & file an online claim form. Navigate to the 'Active Policies' section of the Portal, and click the 'File a Claim' option.</p>
                   </div>
                 </div>
               </div>
               <div className="col-lg-4 flipcard-col flip-card">
                 <div className="flip-card-inner">
                   <div className="flipcard-container flip-card-front">
                     <Img fluid={submit_req_img} className="flipcard-icon" alt="Submit Required Documents" />
                     <h3 className="text-center">Submit The Following <br /> Required Documents</h3>
                   </div>
                   <div className="flipcard-container-inner flip-card-back p-t-90">
                   <h3 className="text-center inner-content">Submit The Following <br /> Required Documents</h3>
                     <ul className="text-center flipcard-content">
                       <li>Completed Claim Form</li>
                       <li>Copy of all Medical Bills & Itemized Receipts</li>
                     </ul>
                   </div>
                 </div>
               </div>
               <div className="col-lg-4 flipcard-col flip-card">
                 <div className="flip-card-inner">
                   <div className="flipcard-container1 flip-card-front">
                     <Img fluid={claims_payment_img} className="flipcard-icon1" alt="Claims Payment" />
                     <h3 className="text-center">Claims Payment</h3>
                   </div>
                   <div className="flipcard-container-inner1 flip-card-back">
                     <h3 className="text-center inner-content1">Claims Payment</h3>
                     <p className="text-black flipcard-content1">After submitting your claims, the insurance company will reimburse you for your eligible medical expenses in accordance with the terms, conditions and limitations of your plan, depending on if all the documents are submitted correctly.</p>
                   </div>
               </div>
            </div>
         </div>
         </div>
        </div>
     </Container>
    </section>


     <section id="claims-insured-login">
      <ClaimsForm />
        {/*}<Container>
       <div className="col-lg-12">
         <div className="row section2-container">
           <div className="col-lg-12">
             <h2 className="text-blue text-center row-title">Claims Form</h2>
           </div>
           <div className="col-lg-12">
             <div className="row mt-5 sign-in-container">
               <div className="col-lg-5">
                 <Img fluid={infplans_big_logo} className="big-logo"/>
               </div>
               <div className="col-lg-7">
                <div className="col-lg-12">
                  <h3 className="text-blue text-center">Insured Login</h3>
                </div>
                 <form method="POST" action="">
                   <input type="email" id="email" name="email" placeholder="Email Address" />
                   <input type="submit" value="Next" />
                 </form>
             </div>
           </div>
          </div>
         </div>
        </div>
       </Container> */}
      </section>

      <section id="claims-form-section-3">
        <Container>
          <div className="col-lg-12">
            <div className="row">

              <div className="claims-info-tab">
                <input checked="checked" id="claims-info-tabone" type="radio" name="claims-info" />
                <input id="claims-info-tabtwo" type="radio" name="claims-info" />

                <nav>
                  <ul>
                    <li className="claims-info-tabone">
                      <label for="claims-info-tabone">Claim Information for INF policies</label>
                    </li>
                    <li className="claims-info-tabtwo">
                      <label for="claims-info-tabtwo">Claim Information for SRPO policies</label>
                    </li>
                  </ul>
                </nav>

                <section>
                  <div className="claims-info-tabone">
                    <div className="col-lg-12 info">
                      <div className="row">
                        <div className="col-lg-12 claims-info">
                          <h4>Claims Office Information:</h4>
                        </div>

                        <div className="col-lg-6 infor">
                          <p className="infor-content"><strong>Mail:</strong> Administrative Concepts, Inc. (ACI)</p>
                          <p className="infor-content">PO Box 4000; Collegeville, PA 19426</p>
                          <p className="infor-content"><strong>Toll Free:</strong> 888-293-9229 (from inside the U.S.)</p>
                          <p className="infor-content"><strong>Fax:</strong> 610-293-9299</p>
                        </div>

                        <div className="col-lg-6 infor">
                          <p className="infor-content"><strong>Check Claim Status:</strong> 888-293-9229</p>
                          <p className="submit-bills"><strong>Submit Bills Online:</strong>  aciclaims@visit-aci.com</p>
                          <strong className="web">Web: </strong><a href="http://www.visit-aci.com" target="_blank" className="links">http://www.visit-aci.com</a>
                          ​<p className="pay"><strong>EDI Payor#:</strong> 22384</p>
                        </div>

                        <div className="col-lg-12 download-claims">
                         <div className="row">
                          <div className="col-lg-6 pdf-download">
                            <h4 className="download text-center">
                              Download Claims Form<br /> Policy Numbers Starting with GLM
                            </h4>
                            <Img fluid={pdf_icon} className="pdf-icon"/>
                            <a href="https://infplans.com/policy_pdf/GLM_INFHealthCare_ClaimForm.pdf" target="_blank">
                              <button className="download-btn"> Download </button>
                            </a>
                          </div>

                         <div className="col-lg-6 pdf-download">
                          <h4 className="download text-center">Download Claims Form<br /> Policy Numbers Starting with INF</h4>
                          <Img fluid={pdf_icon} className="pdf-icon"/>
                          <a href="https://infplans.com/policy_pdf/INF_INFHealthCare_ClaimForm.pdf" target="_blank">
                            <button className="download-btn"> Download </button>
                          </a>
                        </div>
                       </div>
                       </div>
                      </div>
                    </div>
                  </div>

                  <div className="claims-info-tabtwo">
                    <div className="col-lg-12 information">
                      <div className="row">
                        <div className="col-lg-12 claims-info">
                         <h4>Claims Office Information:</h4>
                         </div>

                        <div className="col-lg-6 infor">
                          <p className="infor-content">WebTPA</p>
                          <p className="infor-content">PO Box 669</p>
                          <p className="infor-content">Grapevine, TX 76099-0669</p>
                          <p className="infor-content"><strong>Phone:</strong> 928-494-0112</p>
                          <p className="infor-content"><strong>Fax:</strong> 469-417-1989</p>
                        </div>

                        <div className="col-lg-6 infor">
                          <p className="submit-bills"><strong>Submit Bills Online:</strong> helpme@webtpa.com</p>
                          <strong className="web">Web: </strong><a href="http://www.visit-aci.com" target="_blank" className="links">http://www.visit-aci.com</a>
                          <p className="pay">​EDI Payor#: 22384</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="claims-form-section-4">
        <Container>
        <div className="col-lg-12">
          <h3 className="text-blue text-center row-title">Additional Claims Information</h3>

           <div class="additional-tab">
             <input checked="checked" id="additional-tabone" type="radio" name="additional-claims" />

             <nav>
               <ul>
                 <li className="additional-tabone">
                   <label for="additional-tabone">For Policies starting with INF:</label>
                 </li>
               </ul>
             </nav>

           <section>
             <div className="additional-tabone">
               <div className="col-lg-12 policies">
                   <p>All claims must be filed by completing the claim form found above in the Plan Member portal. This form should be completed by the Insured.</p>
                   <p>This form must be completed ONCE PER SICKNESS OR INJURY. The INF Claims Form for Providers should be completed by the Insured & Providers (Doctors office, Hospitals etc.).</p>
                   <p>The Insured should complete Section A. Providers should complete Section B of the form. The form can be mailed to the Insurance by the Provider's office or the Insured. Providers can also submit claims online using EDI Pay#: 22384.</p>
                </div>
             </div>
           </section>
         </div>
        </div>
       </Container>
      </section>

      <section id="claims-form-section-5">
        <Container>
          <div className="col-lg-12">
           <h3 className="text-blue text-center row-title">Claims Process FAQs</h3>

             <div class="process-tab">
               <input checked="checked" id="process-tabone" type="radio" name="process-faqs" />
               <input id="process-tabtwo" type="radio" name="process-faqs" />
               <input id="process-tabthree" type="radio" name="process-faqs" />

               <nav>
                 <ul>
                   <li className="process-tabone">
                     <label for="process-tabone">I paid for my medical care up front. How can I get reimbursed?</label>
                   </li>
                   <li className="process-tabtwo">
                     <label for="process-tabtwo">I took advantage of "Direct Billing" - do I still need to file a claim?</label>
                   </li>
                   <li className="process-tabthree">
                     <label for="process-tabthree" className="title">If I leave the country will my claims be paid?</label>
                   </li>
                 </ul>
               </nav>

              <section>
                <div className="process-tabone">
                  <div className="col-lg-12 policy">
                    <p>Simply fill out the claim form & follow the instructions, as well as providing the additional required documentation. Make sure to complete this paperwork carefully to ensure prompt payment for eligible expenses incurred.</p>
                  </div>
                </div>

                <div className="process-tabtwo">
                  <div className="col-lg-12 policy">
                    <p>Yes. We highly advise individuals to file a claim with the insurance company, regardless of whether they have paid for the medical treatment up front. This creates a record with the insurance company, and will assist the claims process. If you do not file a claim, the payment may not go through to the health care provider, causing a delay in payment. This could result in a liability for you.</p>
                  </div>
                </div>

                <div className="process-tabthree">
                  <div className="col-lg-12 policy">
                    <p>Yes, eligible claims incurred while coverage is in effect will be paid. On the claims form, you need to designate where to send the check from the insurance company.</p>
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

export default ClaimsPage

export const query = graphql`
  query ClaimsPageQuery {
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
    hero_background: file(name: { eq: "claims-hero-bg" }) {
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
    pdf_icon: file(name: { eq: "pdf-icon" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    submit_req_img: file(name: { eq: "submit-req-img" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    submit_form_img: file(name: { eq: "submit-form-img" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    claims_payment_img: file(name: { eq: "claims-payment-img" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
  }
`
