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
import { Helmet } from 'react-helmet'
import DiplomatAmericaForm from 'components/forms/DiplomatAmericaForm'

interface Props {
  data: IndexQueryQuery
  location: Location
}

const DiplomatAmericaPage: React.FC<Props> = ({ data, location }: Props) => {
  const meta = data.site?.meta
  const posts = data.remark.posts
  const hero = data.hero?.childImageSharp?.fluid
  const hero_background = data.hero_background?.childImageSharp?.fluid
  const apply_right_img = data.apply_right_img?.childImageSharp?.fluid

  return (
    <Layout location={location}>
      <Helmet>
        <title>Diplomat America Application - Visitors Insurance & Travel Insurance</title>
        <meta property="og:site_name" content="INF Visitor Insurance"/>
        <meta name="description" content="Visitors Insurance for USA Visitors. Shop, Compare, Buy Visitor Medical Visitors Insurance to USA"/>
        <meta name="keywords" content="inf insurance, kvrao insurance, kv rao insurance, Insurance for Visitors, visitor insurance, visitors insurance, visitor medical insurance, travel medical insurance"/>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Helmet>
      <BackgroundImage
        Tag="section"
        className="diplomat-america-hero-section-bg"
        fluid={hero_background}
        backgroundColor={`#e9f4f8`}
        alt="diplomat america hero background"
      >
      <div id="diplomat-america-hero-section">
        <Container>
          <div className="col-lg-12">
            <h1 className="text-white text-center">
              DIPLOMAT AMERICA
            </h1>
            <p className="text-white text-center hero-text">
              Diplomat America plan provides Accident and Sickness medical coverage, Accidental Death and Dismemberment benefits, Travel Assistance for Non-U.S. citizens and Non-U.S. residents traveling to the United States.
            </p>
            <Link to="/inf-easy-select"><button className="hero-btn"> Apply Now </button></Link>
          </div>
        </Container>
      </div>
      </BackgroundImage>

      <section id="what-is-diplomat-america-plan">
        <Container>
          <div className="col-lg-12">
            <div className="diplomat-america-container">
              <h2 className="text-blue text-center">What is Diplomat America Plan?</h2>
               <p className="text-center">
                 <strong>This plan will cover COVID-19 as a new sickness.</strong> Diplomat America plan provides Accident and Sickness medical coverage, Accidental Death and Dismemberment benefits, Travel Assistance for Non-U.S. citizens and Non-U.S. residents traveling to the United States. This plan is great for international students, business and tourists, study abroad, international exchange students, church or missionary travelers, and more. Coverage for this plan is based on a per day rate. Minimum period of coverage is <strong>15 days</strong> and the maximum period of coverage is <strong>365 days.</strong>
               </p>
            </div>
          </div>
        </Container>
      </section>

     <section id="diplomat-america-section-2">
      <Container>
        <div className="col-lg-12">
          <div className="diplomat-america-container">
            <h2 className="text-blue text-center">
              Who Should Purchase the Diplomat America?
            </h2>
            <p className="text-center">
              Travel insurance designed to cover Non-U.S. Citizens and Non-U.S. Residents traveling to the United States. This valuable travel protection is ideal for students, business and leisure travelers, study abroad, international exchange students, tourists, holiday travelers, and church or missionary travelers.
            </p>
            <p className="second-content text-center">
             Why do you need international travel Insurance? Nationalized or government sponsored health plans rarely provide adequate medical coverage for injuries or illnesses which occur in the United States. Most travelers are unaware of how expensive medical care is in the United States. Not to mention, that U.S. medical facilities may not recognize insurance provided by a “foreign” insurance company and could deny services or demand up-front payment for treatment.
            </p>
          </div>
        </div>
      </Container>
     </section>

    <section id="diplomat-america-section-4">
      <Container>
        <div className="col-lg-12">
          <h4 className="text-center text-white">Diplomat America Plan Features: </h4>
        </div>

        <div className="col-lg-12">
          <div className="row mt-4">
            <div className="col-lg-6 america-content">
              <ul>
                <li className="text-white">Interruption of Trip: $5,000</li>
                <li className="text-white">Loss of Baggage: $50 per article; up to a maximum of $250</li>
                <li className="text-white">Emergency Dental Treatment: $100</li>
                <li className="text-white">Return of Minor Child: $50,000</li>
                <li className="text-white">Accidental Death and Dismemberment: $25,000 (Enhanced Benefit Amounts available) with paralysis and coma, seat belt and airbag, felonious assault and home alteration and vehicle modification benefits.</li>
              </ul>
            </div>
            <div className="col-lg-6 america-content">
              <ul>
                <li className="text-white">Covers COVID-19 or Coronavirus like a New Sickness</li>
                <li className="text-white">Emergency Medical Evacuation and Repatriation: $500,000</li>
                <li className="text-white">Return of Mortal Remains: $50,000</li>
                <li className="text-white">Emergency Medical Reunion: $50,000</li>
                <li className="text-white">Athletic & Hazardous Activity Benefit Available Political and Natural Disaster Evacuation: $50,000</li>
              </ul>
          </div>
        </div>
      </div>

        <div className="col-lg-12">
          <h4 className="text-center text-white second-title">This plan is designed for:</h4>
        </div>
        <div className="col-lg-12">
          <div className="row mt-4">
            <div className="col-lg-6 america-content">
              <ul>
                <li className="text-white">Non-U.S. Citizens visiting the U.S.</li>
              </ul>
            </div>
            <div className="col-lg-6 america-content">
              <ul>
                <li className="text-white">Parents and relatives visiting the U.S.</li>
                </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>

    <section id="diplomat-america-section-5">
      <Container>
        <div className="col-lg-12">
          <h2 className="text-blue text-center row-title">Diplomat America Benefits</h2>

          <div className="benefits-tab">
            <input checked="checked" id="benefits-tabone" type="radio" name="diplomat-america" />
            <input id="benefits-tabtwo" type="radio" name="diplomat-america" />

            <nav>
              <ul>
                <li className="benefits-tabone">
                  <label for="benefits-tabone">Covered Medical Expenses (All Policies)</label>
                </li>
                <li className="benefits-tabtwo">
                  <label for="benefits-tabtwo">Co-Insurance</label>
                </li>
              </ul>
            </nav>

           <section>
             <div className="benefits-tabone">
               <div className="col-lg-12">
                 <div className="row">
                    <p className="text-center expenses">Expenses that are specifically enumerated in the following list of charges that are incurred for medical care and supplies which are:</p>
                  </div>

                  <div className="col-lg-12 alpha-content">
                    <ul className="alpha-list">
                      <li className="alpha">(a) necessary and customary;</li>
                      <li className="alpha">(b) Prescribed by a Physician for the therapeutic treatment of a disablement;</li>
                      <li className="alpha">(c) are not excluded under the policy;</li>
                      <li className="alpha">(d) are not more than the Usual and Customary charges (as determined by the Company); and</li>
                      <li className="alpha">(e) are incurred within 180 days from the date of the Disablement will be considered.</li>
                    </ul>

                    <ul className="number-list">
                      <li>Expenses made by a Hospital for room and board, floor nursing and other services, including Expenses for professional services, except personal services of a nonmedical nature, provided, however, that Expenses do not exceed the Hospital's average charge for semiprivate room and board accommodation.</li>
                      <li>Charges made for Intensive Care or Coronary Care charges and nursing services;</li>
                      <li>Expenses made for diagnosis, Treatment and surgery by a Physician.</li>
                      <li>Charges made for an operating room.</li>
                      <li>Charges made for Outpatient Treatment, same as any other Treatment covered on an Inpatient basis. This includes ambulatory surgical centers, Physician's Outpatient visits/examinations, clinic care, and surgical opinion consultations.</li>
                      <li>Expenses made for administration of anesthetics.</li>
                      <li>Expenses for medication, x-ray services, laboratory tests and services, the use of radium and radio-active isotopes, oxygen, blood transfusions, iron lungs, and medical Treatment.</li>
                      <li>Expenses for physiotherapy, if recommended by a Physician, for the Treatment of a specific Disablement and administered by a licensed physiotherapist; With regards to chiropractic care, eligible charges up to $50.00 per visit, with a maximum of 10 visits.</li>
                      <li>Dressings, drugs, and medicines that can be obtained upon written prescription of a Physician.</li>
                      <li>Hotel room charge, when the insured, otherwise necessarily confined in a Hospital, shall be under the care of a duly qualified Physician in a hotel room owing to the unavailability of a Hospital room by reason of capacity or distance or to any other circumstances beyond the control of the insured; The charges enumerated above shall in no event include any amount in excess of the Usual and Customary charges (as determined by the Company). To determine if Expenses are Usual and Customary, the Company will consider the following: the medical care or supplies usually given and the fees usually accepted for like cases in the area. “Area” means a region large enough to get a cross section of providers or medical care or supplies. All Expenses are deemed to be incurred on the date such service is received.</li>
                    </ul>
                  </div>
                </div>
              </div>

             <div className="benefits-tabtwo">
               <div className="col-lg-12 co-insurance">
                <p className="text-center first-content">After you pay the selected deductible, the plan pays <strong>80% up to $5,000</strong> of eligible costs, then <strong>100% to the Medical Maximum.</strong> There will be an additional $250 deductible for each emergency room visit as a result of an Illness. <strong>The emergency room deductible will be waived if hospital admittance is within 12 hours of the incident.</strong></p>
                <p className="text-center"><strong>Deductible Choices:</strong> $0, $50, $100, $250, $500, $1,000, $2,500, $5,000 (per person per policy period).</p>
               </div>
             </div>
           </section>
          </div>
        </div>
      </Container>
    </section>

    <section id="diplomat-america-section-6">
      <Container>
        <div className="col-lg-12">
         <h2 className="text-blue text-center row-title">Miscellaneous Information</h2>

         <div className="info-tab">
           <input checked="checked" id="info-tabone" type="radio" name="miscellaneous-information" />
           <input id="info-tabtwo" type="radio" name="miscellaneous-information" />
           <input id="info-tabthree" type="radio" name="miscellaneous-information" />
           <input id="info-tabfour" type="radio" name="miscellaneous-information" />

           <nav>
            <ul>
              <li className="info-tabone">
                <label for="info-tabone" className="title">Exclusions</label>
              </li>
              <li className="info-tabtwo">
                <label for="info-tabtwo" className="title">Claims</label>
              </li>
              <li className="info-tabthree">
                <label for="info-tabthree" className="title">Premium Refund / Cancellation</label>
              </li>
              <li className="info-tabfour">
                <label for="info-tabfour">Accident Death & Dismemberment Benefits</label>
              </li>
            </ul>
           </nav>

           <section>
            <div class="info-tabone">
              <div className="col-lg-12 med-exp">
                <div className="row">
                  <p className="text-center plan">
                    The Plan Document does not cover any loss resulting from any of the following unless otherwise covered under the Plan Document by Additional Benefits:
                  </p>
                </div>

                <div className="col-lg-12">
                  <ul>
                    <li className="exclusions">Suicide, attempted suicide (including drug overdose) self-destruction, attempted self-destruction or intentional self-inflicted Injury while sane or insane;</li>
                    <li className="exclusions">prescribed by a Physician for the therapeutic treatment of a disablement;</li>
                    <li className="exclusions">War or any act of war, declared or undeclared; unless War Risk Benefit was purchased;</li>
                    <li className="exclusions">An Accident which occurs while the Plan Participant is on Active Duty Service in any Armed Forces, National Guard, military, naval or air service or organized reserve corps;</li>
                    <li className="exclusions">Injury sustained while in the service of the armed forces of any country. When the Plan Participant enters the armed forces of any country, We will refund the unearned pro rata premium upon request;</li>
                    <li className="exclusions">Voluntary, active participation in a riot or insurrection;</li>
                    <li className="exclusions">Medical expenses resulting from a motor vehicle accident in excess of that which is payable under any other valid and collectible insurance;</li>
                    <li className="exclusions">Organ transplants;</li>
                    <li className="exclusions">Treatment for an Injury or Sickness caused by, contributed to or resulting from the Plan Participant's voluntary use of alcohol, illegal drugs or any drugs or medication that is intentionally not taken in the dosage recommended by the manufacturer or for the purpose prescribed by the Plan Participant's Physician;</li>
                    <li className="exclusions">Violation or in violation or attempt to violate any duly-enacted law or regulation, or commission or attempt to commit an assault or felony, or that occurs while engaged in an illegal occupation;</li>
                    <li className="exclusions">Eligible Expenses for which the Plan Participant would not be responsible in the absence of the Plan Document;</li>
                    <li className="exclusions">Treatment of acne;</li>
                    <li className="exclusions">Charges which are in excess of Usual and Customary charges;</li>
                    <li className="exclusions">Charges that are not Medically Necessary;</li>
                    <li className="exclusions">Charges provided at no cost to the Plan Participant;</li>
                    <li className="exclusions">Treatment of HIV infection, HIV related illness and AIDS (acquired immune deficiency syndrome);</li>
                    <li className="exclusions">Expenses incurred for treatment while in Your Home Country; except as provided under the Home Country Coverage Benefit;</li>
                    <li className="exclusions">Expenses incurred for an Accident or Sickness after the Benefit Period shown in the Schedule of Benefits or incurred after the termination date of coverage;</li>
                    <li className="exclusions">Regular health checkups; routine physical, immunizations or other examination where there are no objective indications or impairment in normal health;</li>
                    <li className="exclusions">Services or treatment rendered by a Physician, Registered Nurse or any other person who is employed or retained by the Participation Organization; or an Immediate family member of the Plan Participant;</li>
                    <li className="exclusions">Injuries paid under Workers’ Compensation, Employer’s liability laws or similar occupational benefits or while engaging in an occupation for monetary gain from sources other than the Participation Organization;</li>
                    <li className="exclusions">Benefits for enrolling solely for the purpose of obtaining Medical Treatment, while on a waiting list for a specific treatment, or while traveling against the advice of a Physician;</li>
                    <li className="exclusions">Aggravation or re-injury of a prior Injury that the Plan Participant suffered prior to his or her coverage Effective Date, unless We receive a written medical release from the Plan Participant’s Physician;</li>
                    <li className="exclusions">Pre-existing conditions as defined in the definitions; 24) Treatment of a hernia, including sports hernia, whether or not caused by a Covered Accident;</li>
                    <li className="exclusions">Pregnancy or childbirth, miscarriage; elective abortion; elective cesarean section; or any complications of any of these conditions;</li>
                    <li className="exclusions">Drug, treatment or procedure that either promotes or prevents conception, or prevents childbirth, including but not limited to: artificial insemination, treatment for infertility or impotency, sterilization or reversal thereof;</li>
                    <li className="exclusions">Charges incurred for Surgery or treatments which are, Experimental/Investigational, or for research purposes;</li>
                    <li className="exclusions">Expense incurred for treatment of temporomandibular joint (TMJ) disorders or craniomandibular joint dysfunction and associated myofascial pain;</li>
                    <li className="exclusions">Dental care or treatment other than care of sound, natural teeth and gums required on account of Injury resulting from an Accident while the Plan Participant is covered under the Plan Document, and rendered within 6 months of the Accident; unless otherwise provided by the plan document;</li>
                    <li className="exclusions">Eyeglasses, contact lenses, hearing aids braces, appliances, or examinations or prescriptions therefore;</li>
                    <li className="exclusions">Private-duty nursing services;</li>
                    <li className="exclusions">The cost of the Covered Person’s unused airline ticket for the transportation back to the Plan Participant’s Home Country, where an Emergency Medical Evacuation or Repatriation and/or Return of Mortal Remains benefit is provided;</li>
                    <li className="exclusions">For the cost of a one way airplane ticket used in the transportation back to the Plan Participant's country where an air ambulance benefit is provided and medically necessary;</li>
                    <li className="exclusions">Treatment paid for or furnished under any other individual or group Plan Document, or other service or medical prepayment plan arranged through the employer to the extent so furnished or paid, or under any mandatory government program or facility set up for the treatment without cost to any individual;</li>
                    <li className="exclusions">Ionizing radiation or contamination by radioactivity from any nuclear fuel or from any nuclear waste, from combustion of nuclear fuel, the radioactive, toxic, explosive or other hazardous properties of any nuclear assembly or nuclear component of such assembly. Exclusions Continued:</li>
                    <li className="exclusions">Plan Participant being exposed to the utilization of nuclear, chemical, or biological weapons of mass destruction.</li>
                    <li className="exclusions">Travel in or upon: (a) A snowmobile; (b) A water jet ski; (c) Any two or three wheeled motor vehicle, other than a motorcycle registered for on-road travel; (d) Any off-road motorized vehicle not requiring licensing as a motor vehicle; when used for recreation or competition. Unless Hazardous Activity Benefit is purchased.</li>
                    <li className="exclusions">Injury sustained while taking part in: mountaineering; hang gliding; parachuting; bungee jumping; racing by horse, motor vehicle or motorcycle; snowmobiling; motorcycle/motor scooter riding; scuba diving, involving underwater breathing apparatus; water skiing; snow skiing; spelunking; parasailing; white water rafting; surfing, unless part of a school credit course; and snowboarding. Unless Hazardous Activity Benefit is purchased.</li>
                    <li className="exclusions">Practice or play in any amateur, club, intramural, interscholastic, intercollegiate, sports contest or competition; Unless Athletic Sports Activity Benefit is purchased.</li>
                    <li className="exclusions">Practice or play in any professional or semiprofessional contest or competition;</li>
                    <li className="exclusions">Rest cures or custodial care;</li>
                    <li className="exclusions">Treatment of Mental and Nervous Disorders;</li>
                    <li className="exclusions">Weight reduction programs or surgical treatment of obesity or venereal disease;</li>
                    <li className="exclusions">Elective or Cosmetic surgery and Elective Treatment or treatment for congenital anomalies (except as specifically provided), except for reconstructive surgery on a diseased or injured part of the body (Correction of a deviated nasal septum is considered cosmetic surgery unless it results from a covered Injury or Sickness);</li>
                    <li className="exclusions">Travel or flight in or on any vehicle for aerial navigation, including boarding or alighting from: a) While riding as a passenger in any Aircraft not intended or licensed for the transportation of passengers; or b) While being used for any test or experimental purpose; or c) While piloting, operating, learning to operate or serving as a member of the crew thereof; or d) while traveling in any such Aircraft or device which is owned or leased by or on behalf of the Participation Organization of any subsidiary or affiliate of the Participation Organization, or by the Plan Participant or any member of his household. e) A space craft or any craft designed for navigation above or beyond the earth's atmosphere; or f) An ultralight, hang-gliding, parachuting or bungee-cord jumping. Unless Hazardous Activity Benefit is purchased. Except as a fare paying passenger on a regularly scheduled commercial airline or as a passenger in a non-scheduled, private aircraft used for business or pleasure purposes. In addition to any of the exclusions listed above, for Eligible Expenses under Trip Interruption, this Insurance also does not cover the following: 1) The Plan Participant or Traveling Companion or Traveling Companion’s family making changes to personal plans; having business or contractual obligations; being unable to obtain necessary travel documents (passports, visas, etc.); being detained or having property confiscated by customs authorities; carrier caused delays (including bad weather); 2) Prohibition or regulatory by any government; default of yacht charter companies; default of the organization from which the Plan Participant purchased their trip arrangements; 3) A Pre-Existing Condition existing prior to the Plan Participant’s departure from their Home Country. In addition to any of the exclusions listed above, for Eligible Expenses under Baggage Loss and Delay, this Insurance also does not cover the following: (1) Animals; (2) Artificial teeth or limbs, hearing aids; (3) Sunglasses, contact lenses or eyeglasses; (4) Documents of any kind, including but not limited to documents, bills, currency, deeds, evidences of debt, letters of credit, stamps, credit cards, money, notes, securities, transportation or other tickets. Jurisdiction Limitation: Coverage is not available for citizens of the United States or Australia or any travel outside the United States.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="info-tabtwo">
              <div className="col-lg-12 company">
                <p className="text-center company-claim">
                  The Company, upon receipt of a written notice of claim, will furnish to the claimant such forms as are usually furnished by it for filing proofs of loss. If such forms are not furnished within 15 days after the giving of such notice, the claimant shall be deemed to have complied with the requirements of this Plan by submitting, within the time fixed in this Plan for filing proofs of loss, written proof showing the occurrence, nature and extent of the loss for which claim is made.
                </p>
              </div>
              <div className="row">
                <div className="col-lg-6 claims-misc">
                  <p className="claims"><strong>Claim Forms:</strong></p>
                    <ul>
                      <a href="https://infplans.com/policy_pdf/GU_Sickness.pdf">
                        <li className="claim-disease">Accident & Sickness</li>
                      </a>
                      <a href="https://infplans.com/policy_pdf/GU_Death.pdf">
                        <li className="claim-disease">Death</li>
                      </a>
                      <a href="https://infplans.com/policy_pdf/GU_ADD.pdf">
                        <li className="claim-disease">Dismemberment/Paralysis</li>
                      </a>
                      <a href="https://infplans.com/policy_pdf/GU_Baggage.pdf">
                        <li className="claim-disease">Lost Baggage</li>
                      </a>
                      <a href="https://infplans.com/policy_pdf/GU_Interruption.pdf">
                        <li className="claim-disease">Trip Interruption</li>
                      </a>
                      <a href="https://infplans.com/policy_pdf/GU_TripCancel.pdf">
                        <li className="claim-disease">Trip Cancellation/Delay</li>
                      </a>
                    </ul>
                </div>

                <div className="col-lg-6 claims-misc">
                  <p className="claims2"><strong>Claims Administrator:</strong> </p>
                  <p className="administrator">Global Claims Administration</p>
                  <p className="administrator">3195 Linwood Rd, Suite 201</p>
                  <p className="administrator">Cincinnati OH 45208</p>
                  <p className="administrator"><strong>Inside US and Canada:</strong> 800-513-2981</p>
                  <p className="administrator"><strong>Outside US and Canada:</strong> 513-533-1330</p>
                  <p className="administrator"><strong>Fax:</strong> 513-533-9416</p>
                </div>
              </div>
            </div>

            <div class="info-tabthree">
            <div className="col-lg-12 refund-prem">
                  <p className="text-center ref">Refund of premium, less a $25 processing fee, will be considered if written request is received prior to the effective date of coverage. After that date, the premium is considered fully earned and non-refundable. Partial refunds are not available.</p>
              </div>
            </div>

            <div class="info-tabfour">
              <div className="col-lg-12">
                <div className="row">
                  <p className="text-center enhanced">Enhanced AD&D Benefit Rates (Per Person / Month) *Enhanced AD&D amount and additional rate apply to age 18+</p>
                </div>

              <div className="col-lg-12">
                <div className="row mt-4">
                  <div className="col-lg-6 total">
                    <ul>
                      <li className="accident">$100,000 Total Coverage ................ $6.00</li>
                      <li className="accident">$250,000 Total Coverage .................$18.00</li>
                    </ul>
                  </div>
                  <div className="col-lg-6 total">
                    <ul>
                      <li className="accident">$750,000 Total Coverage................... $58.00</li>
                      <li className="accident">$1,000,000 Total Coverage................. $78.00</li>
                    </ul>
                  </div>
                </div>
              </div>
             </div>
            </div>
          </section>
         </div>
       </div>
     </Container>
    </section>

    <section id="diplomat-america-section-7">
      <Container>
        <div className="col-lg-12">
          <h2 className="text-blue text-center row-title">Enroll in Diplomat America Below</h2>
          <DiplomatAmericaForm />
          {/*}<p className="text-center copyright">
            © 2021, INF Health Care Services
          </p> */}
       </div>
      </Container>
    </section>
    </Layout>
  )
}

export default DiplomatAmericaPage

export const query = graphql`
  query DiplomatAmericaPageQuery {
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
    hero_background: file(name: { eq: "diplomat-america-hero-bg" }) {
      childImageSharp {
        fluid(maxWidth: 1400, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    apply_right_img: file(name: { eq: "elite-right-hero-img" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
  }
`
