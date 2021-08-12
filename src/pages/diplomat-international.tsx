 import React from 'react'
import { graphql, Link } from 'gatsby'
import { IndexQueryQuery, PostByPathQuery } from '../../types/graphql-types'
import Layout from 'components/layout/layout'
import Container from 'components/pages/container'
import BackgroundImage from 'gatsby-background-image'
import { Helmet } from 'react-helmet'
import DiplomatAmericaForm from 'components/forms/DiplomatAmericaForm'

interface Props {
  data: IndexQueryQuery
  location: Location
}

const DiplomatInternationalPage: React.FC<Props> = ({ data, location }: Props) => {
  const hero_background = data.hero_background?.childImageSharp?.fluid

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
        className="diplomat-international-hero-section-bg"
        fluid={hero_background}
        backgroundColor={`#e9f4f8`}
        alt="diplomat international hero background"
      >
        <div id="diplomat-international-hero-section">
          <Container>
            <div className="col-lg-12">
              <h1 className="text-white text-center">
                DIPLOMAT INTERNATIONAL
              </h1>
              <p className="text-white text-center hero-text">
                Diplomat International plan provides Accident & Sickness medical coverage and Accidental Death & Dismemberment (AD&D) benefits for anyone traveling, living, working or going to school outside their home country, but not to the United States.
              </p>
              <Link to="/inf-easy-select"><button className="hero-btn"> Apply Now </button></Link>
            </div>
          </Container>
        </div>
      </BackgroundImage>

    <section id="diplomat-international-section-1">
      <Container>
        <div className="col-lg-12">
         <div className="diplomat-international-container">
           <h2 className="text-blue text-center">What is the Diplomat International Plan?</h2>
            <p><strong>This plan will cover COVID-19 as a new sickness.</strong> Our Diplomat International plan provides Accident & Sickness medical coverage and Accidental Death & Dismemberment (AD&D) benefits for anyone traveling, living, working or going to school outside their home country, but not to the United States. This plan also provides Emergency Medical Evacuation & Repatriation, 24-Hour Multilingual Worldwide Assistance Services (U.S. Board Certified Physicians on staff 24/7) and much more. This plan is great for international students, business and tourists, study abroad, international exchange students, church or missionary travelers, and more. Coverage for this plan is based on a per day rate. Minimum period of coverage is <strong>5 days</strong> and the maximum period of coverage is <strong>365 days</strong>.
            </p>
         </div>
        </div>
       </Container>
      </section>

        <section id="diplomat-international-section-2">
          <Container>
          <div className="col-lg-12">
            <div className="diplomat-international-container">
             <h2 className="text-blue text-center">Who Should Purchase the Diplomat International Plan?</h2>
              <p>Travel insurance designed to cover Global Citizens traveling outside their country except to the United States. This valuable travel protection is ideal for students, business and leisure travelers, study abroad, international exchange students, tourists, holiday travelers, and church or missionary travelers. </p>
              <p>Why do you need international travel Insurance? Nationalized or government sponsored health plans rarely provide adequate medical coverage for injuries or illnesses which occur in the United States. Most travelers are unaware of how expensive medical care is in different parts of the world.</p>
           </div>
          </div>
         </Container>
        </section>

    <section id="diplomat-international-section-3">
      <Container>
        <div className="col-lg-12">
         <h4 className="text-center text-white">Diplomat International Plan Features: </h4>
        </div>
        <div className="col-lg-12 diplomat-plan">
        <div className="row mt-4">
          <div className="col-lg-6">
            <ul>
              <li className="text-white">Covers COVID-19 or Coronavirus like a New Sickness</li>
              <li className="text-white">Emergency Medical Evacuation and Repatriation: $500,000</li>
              <li className="text-white">Return of Mortal Remains: $50,000</li>
              <li className="text-white">Emergency Medical Reunion: $50,000</li>
              <li className="text-white">Return of Minor Child: $50,000</li>
              <li className="text-white">Interruption of Trip: $5,000</li>
              <li className="text-white">Loss of Baggage: $50 per article; up to a maximum of $250</li>
            </ul>
          </div>
          <div className="col-lg-6">
            <ul>
            <li className="text-white">Emergency Dental Treatment: $100</li>
            <li className="text-white">Accidental Death and Dismemberment: $25,000 (Enhanced Benefit Amounts available) with paralysis and coma, seat belt and airbag, felonious assault and home alteration and vehicle modification benefits.</li>
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
      <div className="col-lg-6">
       <ul>
         <li className="text-white">Non-U.S. Citizens visiting the U.S.</li>
       </ul>
      </div>
      <div className="col-lg-6">
       <ul>
        <li className="text-white">Parents and relatives visiting the U.S.</li>
       </ul>
      </div>
      </div>
    </div>
    </Container>
   </section>

      <section id="diplomat-international-section-4">
        <Container>
          <div className="col-lg-12">
            <h3 className="text-blue text-center row-title">Diplomat International Benefits</h3>

              <div className="international-tab">
                <input checked="checked" id="international-tabone" type="radio" name="diplomat-international" />
                <input id="international-tabtwo" type="radio" name="diplomat-international" />

                <nav>
                  <ul>
                    <li className="international-tabone">
                      <label for="international-tabone">Covered Medical Expenses (All Policies)</label>
                    </li>
                      <li className="international-tabtwo">
                      <label for="international-tabtwo">Co-Insurance</label>
                    </li>
                  </ul>
                </nav>

                <section>
                  <div className="international-tabone">
                   <div className="col-lg-12 international-expenses">
                    <div className="row">
                      <p className="text-center expenses-content">Expenses that are incurred for medical care and supplies which are: (a) necessary and customary; (b) prescribed by a Physician for the therapeutic treatment of a disablement; (c) are not excluded under the policy; (d) are not more than the Reasonable and Customary charges (as determined by the Company); and (e) are incurred within 365 days for US Citizens or 180 days for Non US Citizens from the date of the disablement will be considered.</p>
                    </div>

                  <div className="col-lg-12">
                    <ul className="medical-expenses">
                      <li>Expenses made by a Hospital for room and board, floor nursing and other services, including Expenses for professional services, except personal services of a non-medical nature, provided, however, that Expenses do not exceed the Hospital’s average charge for semi-private room and board accommodation.</li>
                      <li>Charges made for Intensive Care or Coronary Care charges and nursing services;</li>
                      <li>Expenses made for diagnosis, Treatment and surgery by a Physician.</li>
                      <li>Charges made for an operating room.</li>
                      <li>Charges made for Outpatient Treatment, same as any other Treatment covered on an  Inpatient basis. This includes ambulatory Surgical centers, Physician’s Outpatient visits/examinations, clinic care, and Surgical opinion consultations.</li>
                      <li>Expenses made for administration of anesthetics.</li>
                      <li>Expenses for medication, x-ray services, laboratory tests and services, the use of radium and radio-active isotopes, oxygen, blood transfusions, iron lungs, and medical Treatment.</li>
                      <li>Expenses for physiotherapy, if recommended by a Physician, for the Treatment of a specific Disablement and administered by a licensed physiotherapist; With regards to chiropractic care, eligible charges up to $50.00 per visit, with a maximum of 10 visits.</li>
                      <li>Dressings, drugs, and medicines that are prescribed by a Physician.</li>
                      <li>Hotel room charge, when the insured, otherwise necessarily confined in a Hospital, shall be under the care of a duly qualified  Physician in a hotel room owing to the unavailability of a  Hospital room.</li>
                    </ul>
                  </div>

                  <div className="row row-content">
                  <div className="column-tab">
                    <p className="text-white column-tab-title">Policy Medical Maximum Choices</p>
                  </div>

                  <div className="col-lg-6">
                    <p className="tab-content text-black">Plan A</p>
                    <p className="tab-content text-black">Plan B</p>
                    <p className="tab-content text-black">Plan C</p>
                    <p className="tab-content text-black">Plan D</p>
                    <p className="tab-content text-black">Plan E</p>
                  </div>

                  <div className="col-lg-6">
                    <p className="tab-content text-black">$50,000</p>
                    <p className="tab-content text-black">$100,000</p>
                    <p className="tab-content text-black">$250,000</p>
                    <p className="tab-content text-black">$500,000</p>
                    <p className="tab-content text-black">$1,000,000</p>
                  </div>

                  <div className="content-bg">
                    <p className="insurance-content">
                      Persons up to age 69 are eligible for all plans; <br />
                      Persons age 70-79 are eligible for plans A and B; <br />
                      Persons age 80+ are limited to $20,000.
                    </p>
                  </div>

                  <div className="content-bg">
                    <p className="insurance-content"><strong>Deductible Choices -</strong> $0, $50, $100, $250, $500, $1,000, $2,500, $5000 per person per policy period.</p>
                  </div>

                  <div className="content-bg">
                    <p className="insurance-content"><strong>Unexpected Recurrence of a Pre-Existing Condition (U.S. Citizens ) –</strong>  Limited coverage under Your Medical Expense Benefit is provided for Medical Expenses that result from a sudden and unforeseen recurrence of a Pre-existing Condition.</p>
                  </div>

                  <div className="content-bg">
                    <p className="insurance-content"><strong>Emergency Medical Evacuation – </strong>  Benefits are paid for Covered Expense incurred up to $500,000 for any covered Injury or Illness that requires immediate transportation from the place where You are located (due to inadequate medical facilities).</p>
                  </div>

                  <div className="content-bg">
                    <p className="insurance-content"><strong>Repatriation –</strong> If it is determined by the Assistance Company and your Physician that it is Medically Necessary for You to return to Your primary place of residence because of an unforeseen Sickness or Injury which is acute or life-threatening, the Transportation Expense incurred within 90 days from the date of the Covered Loss will be paid for Your return to Your Home Country or to a medical facility closest to Your primary place of residence.</p>
                  </div>

                  <div className="content-bg">
                    <p className="insurance-content"><strong>Return of Mortal Remains –</strong> If death occurs, Benefits will be paid for Reasonable and Customary Covered Expenses to return Your remains to Your Home Country.</p>
                  </div>

                  <div className="content-bg">
                    <p className="insurance-content"><strong>Emergency Medical Reunion –</strong> If it is determined by the Assistance Company and your Physician that it is necessary for You to have an Emergency Medical Evacuation, this Plan will arrange to bring an individual of Your choice, from Your current Home Country, to be at Your side while You are hospitalized and then accompany You during Your return home.</p>
                  </div>

                  <div className="content-bg">
                    <p className="insurance-content"><strong>Return of Minor Child(ren) –</strong> Should the Insured Person be traveling alone with a Minor Child(ren) and be hospitalized because of a covered Illness or Injury and Your Minor Child(ren) is left unattended, the Assistance Company will arrange for a one way economy fare(s) to Your current Home Country.</p>
                  </div>

                  <div className="content-bg">
                    <p className="insurance-content"><strong>In Hospital Indemnity (U.S. Citizens ) –</strong> If You are confined to a Hospital as a registered Inpatient as the result of an Illness or Injury which first occurs during Your Period of Coverage and that Illness or Injury is covered under this Plan, this plan will pay benefits up to $100 per day of confinement up to a maximum of 10 days.</p>
                  </div>

                  <div className="content-bg">
                    <p className="insurance-content"><strong>Interruption of Trip – </strong> If Your trip is interrupted due to the Death of an Immediate Family Member or serious damage to your residence, benefits will be paid up to $5,000 for the Expense of economy travel less the value of applied credit from an unused return travel ticket to return You home to Your area of principal residence.</p>
                  </div>

                  <div className="content-bg">
                    <p className="insurance-content"><strong>Loss of Baggage –</strong> This plan will reimburse You for loss, theft, or damage to Your baggage or personal effects checked with a Common Carrier, after coverage provided by a Common Carrier.</p>
                  </div>

                  <div className="content-bg">
                    <p className="insurance-content"><strong>Political and Natural Disaster Evacuation – </strong> Coverage is provided up to $50,000 if the Insured requires emergency evacuation due to situations which place him/her in Imminent Bodily Harm or due to a Natural Disaster.</p>
                  </div>

                  <div className="content-bg">
                    <p className="insurance-content"><strong>Emergency Dental Treatment (Accident) –</strong> Benefits are paid for Reasonable and Customary Expense for emergency Dental Treatment to natural teeth.</p>
                  </div>

                  <div className="content-bg">
                    <p className="insurance-content"><strong>Emergency Dental Treatment (Palliative) – </strong> Benefits are paid up to $100 for emergency Treatment for the relief of pain to natural teeth.</p>
                  </div>

                  <div className="content-bg">
                    <p className="insurance-content">*Some Exclusions Apply*</p>
                  </div>
                  </div>
                  </div>
                  </div>


                <div className="international-tabtwo">
                  <div className="col-lg-12 international-expenses">
                    <p className="text-center insurance"><strong>Accidental Death, Dismemberment, Loss of Sight, and Speech and Hearing –</strong> The amount of the Principal Sum is $25,000 (unless the Enhanced AD&D Benefit is purchased). <strong>Enhanced AD&D Benefit</strong> (If Benefit Purchased) – The Principal Sum is increased from $25,000 to the selected amount not to exceed $1,000,000 of coverage.  The Enhanced AD&D Benefit is not available to children under 18 years of age.</p>

                  <div className="content-bg">
                    <p className="insurance-content">If within 365 days after the date of a covered accident, the Insured Person’s Injury results in death or dismemberment, this Plan provides the following benefits for loss of:</p>
                  </div>

                  <div className="row justify-content-center first">
                  <div className="col-lg-6">
                    <div className="column-tab">
                      <p className="text-white column-tab-title">Description of Loss</p>
                    </div>
                    <p className="tab-content text-black">Life</p>
                    <p className="tab-content text-black">Both Hands or Both Feet or Sight of Both Eyes</p>
                    <p className="tab-content text-black">One Hand and One Foot</p>
                    <p className="tab-content text-black">Either Hand or Foot and Sight of One Eye</p>
                    <p className="tab-content text-black">Either Hand or Foot or Sight of One Eye</p>
                  </div>

                  <div className="col-lg-6">
                    <div className="column-tab">
                      <p className="text-white column-tab-title">Indemnity</p>
                    </div>
                    <p className="tab-content text-black">Principal Sum</p>
                    <p className="tab-content text-black">Principal Sum</p>
                    <p className="tab-content text-black">Principal Sum</p>
                    <p className="tab-content text-black">Principal Sum</p>
                    <p className="tab-content text-black">One-Half the Principal Sum</p>
                  </div>
              </div>

              <div className="row justify-content-center second">
              <div className="col-lg-6">
                <div className="column-tab">
                  <p className="text-white column-tab-title">Type of Paralysis (Loss)</p>
                </div>
                <p className="tab-content text-black">Quadriplegia</p>
                <p className="tab-content text-black">Paraplegia</p>
                <p className="tab-content text-black">Hemiplegia</p>
                <p className="tab-content text-black">Uniplegia	</p>
              </div>

              <div className="col-lg-6">
                <div className="column-tab">
                  <p className="text-white column-tab-title">Indemnity</p>
                </div>
                <p className="tab-content text-black">$25,000</p>
                <p className="tab-content text-black">$18,750</p>
                <p className="tab-content text-black">$12,500</p>
                <p className="tab-content text-black">$6,250</p>
              </div>
              </div>

              <div className="col-lg-12 co-insurance">
                <div className="accordion">
                  <details>
                    <summary aria-describedby="How much does Telemedicine cost?">How much does Telemedicine cost?</summary>
                    <div className="accordion-content">
                      <p className="inner-content">
                        If a covered Injury renders an Insured Person Comatose within 90 days of the date of the accident that caused the Injury, and if the Coma continues for a period of 30 consecutive days, The Company will pay a monthly benefit equal to 1% of the maximum amount.
                      </p>
                    </div>
                  </details>
                  <details>
                    <summary aria-describedby="Seat Belt and Airbag Benefit?">Seat Belt and Airbag Benefit</summary>
                    <div className="accordion-content">
                      <p className="inner-content">
                        The Company will pay a benefit if the Insured Person suffers accidental death while operating, or riding as a passenger in an Automobile and he/she was wearing a properly fastened seat belt, properly installed by a factory authorized dealer and was positioned in a seat protected by a properly functioning Supplemental Restraint System, properly installed by a factory authorized dealer that inflates on impact.
                      </p>
                    </div>
                  </details>
                  <details>
                    <summary aria-describedby="Felonious Assault Benefit">Felonious Assault Benefit</summary>
                    <div className="accordion-content">
                      <p className="inner-content">
                        The Company will pay a benefit if an Insured Person suffers one or more losses for which benefits are payable under the Accidental Dismemberment Benefit or Coma Benefit provided by the plan as a result of a Felonious Assault.
                      </p>
                    </div>
                  </details>
                  <details>
                    <summary aria-describedby="Home Alteration and Vehicle Modification">Home Alteration and Vehicle Modification</summary>
                    <div className="accordion-content">
                      <p className="inner-content">
                        The Company will pay Covered Home Alteration and Vehicle Modification Expenses that are incurred within one year after the date of the accident causing such loss(es).
                      </p>
                    </div>
                  </details>
                </div>
              </div>

                  <div className="content-bg">
                    <p className="insurance-content">*Some Exclusions Apply*</p>
                  </div>
                </div>
                </div>
               </section>
             </div>
          </div>
       </Container>
      </section>


      <section id="diplomat-international-section-5">
        <Container>
          <div className="col-lg-12">
            <h3 className="text-blue text-center row-title">Miscellaneous Information</h3>

              <div className="miscellaneous-tab">
                <input checked="checked" id="miscellaneous-tabone" type="radio" name="miscellaneous-information" />
                <input id="miscellaneous-tabtwo" type="radio" name="miscellaneous-information" />
                <input id="miscellaneous-tabthree" type="radio" name="miscellaneous-information" />
                <input id="miscellaneous-tabfour" type="radio" name="miscellaneous-information" />

                <nav>
                  <ul>
                    <li className="miscellaneous-tabone">
                      <label for="miscellaneous-tabone" className="title">Exclusions</label>
                    </li>
                      <li className="miscellaneous-tabtwo">
                      <label for="miscellaneous-tabtwo" className="title">Claims</label>
                    </li>
                    <li className="miscellaneous-tabthree">
                    <label for="miscellaneous-tabthree" className="title">Premium Refund / Cancellation</label>
                  </li>
                  <li className="miscellaneous-tabfour">
                  <label for="miscellaneous-tabfour">Accident Death & Dismemberment Benefits</label>
                </li>
                  </ul>
                </nav>

                <section>
                  <div className="miscellaneous-tabone">
                   <div className="col-lg-12 tab1">
                    <p className="document">The Plan Document does not cover any loss resulting from any of the following unless otherwise covered under the Plan Document by Additional Benefits:</p>
                      <ul>
                        <li>Suicide, attempted suicide (including drug overdose) self-destruction, attempted self-destruction or intentional self-inflicted Injury while sane or insane;</li>
                        <li>War or any act of war, declared or undeclared; unless War Risk Benefit was purchased;</li>
                        <li>An Accident which occurs while the Plan Participant is on Active Duty Service in any Armed Forces, National Guard, military, naval or air service or organized reserve corps;</li>
                        <li>Injury sustained while in the service of the armed forces of any country. When the Plan Participant enters the armed forces of any country, We will refund the unearned pro rata premium upon request;</li>
                        <li>Voluntary, active participation in a riot or insurrection;</li>
                        <li>Medical expenses resulting from a motor vehicle accident in excess of that which is payable under any other valid and collectible insurance;</li>
                        <li>Organ transplants;</li>
                        <li>Treatment for an Injury or Sickness caused by, contributed to or resulting from the Plan Participant's voluntary use of alcohol, illegal drugs or any drugs or medication that is intentionally not taken in the dosage recommended by the manufacturer or for the purpose prescribed by the Plan Participant's Physician;</li>
                        <li>Violation or in violation or attempt to violate any duly-enacted law or regulation, or commission or attempt to commit an assault or felony, or that occurs while engaged in an illegal occupation;</li>
                        <li>Eligible Expenses for which the Plan Participant would not be responsible in the absence of the Plan Document;</li>
                        <li>Treatment of acne;</li>
                        <li>Charges which are in excess of Usual and Customary charges;</li>
                        <li>Charges that are not Medically Necessary;</li>
                        <li>Charges provided at no cost to the Plan Participant;</li>
                        <li>Treatment of HIV infection, HIV related illness and AIDS (acquired immune deficiency syndrome);</li>
                        <li>Expenses incurred for treatment while in Your Home Country; except as provided under the Home Country Coverage Benefit;</li>
                        <li>Expenses incurred for an Accident or Sickness after the Benefit Period shown in the Schedule of Benefits or incurred after the termination date of coverage;</li>
                        <li>Regular health checkups; routine physical, immunizations or other examination where there are no objective indications or impairment in normal health;</li>
                        <li>Services or treatment rendered by a Physician, Registered Nurse or any other person who is employed or retained by the Participation Organization; or an Immediate family member of the Plan Participant;</li>
                        <li>Injuries paid under Workers’ Compensation, Employer’s liability laws or similar occupational benefits or while engaging in an occupation for monetary gain from sources other than the Participation Organization;</li>
                        <li>Benefits for enrolling solely for the purpose of obtaining Medical Treatment, while on a waiting list for a specific treatment, or while traveling against the advice of a Physician;</li>
                        <li>Aggravation or re-injury of a prior Injury that the Plan Participant suffered prior to his or her coverage Effective Date, unless We receive a written medical release from the Plan Participant’s Physician;</li>
                        <li>Pre-existing conditions as defined in the definitions; 24) Treatment of a hernia, including sports hernia, whether or not caused by a Covered Accident;</li>
                        <li>Pregnancy or childbirth, miscarriage; elective abortion; elective cesarean section; or any complications of any of these conditions;</li>
                        <li>Drug, treatment or procedure that either promotes or prevents conception, or prevents childbirth, including but not limited to: artificial insemination, treatment for infertility or impotency, sterilization or reversal thereof;</li>
                        <li>Charges incurred for Surgery or treatments which are, Experimental/Investigational, or for research purposes;</li>
                        <li>Expense incurred for treatment of temporomandibular joint (TMJ) disorders or craniomandibular joint dysfunction and associated myofascial pain;</li>
                        <li>Dental care or treatment other than care of sound, natural teeth and gums required on account of Injury resulting from an Accident while the Plan Participant is covered under the Plan Document, and rendered within 6 months of the Accident; unless otherwise provided by the plan document;</li>
                        <li>Eyeglasses, contact lenses, hearing aids braces, appliances, or examinations or prescriptions therefore;</li>
                        <li>Private-duty nursing services;</li>
                        <li>The cost of the Covered Person’s unused airline ticket for the transportation back to the Plan Participant’s Home Country, where an Emergency Medical Evacuation or Repatriation and/or Return of Mortal Remains benefit is provided;</li>
                        <li>For the cost of a one way airplane ticket used in the transportation back to the Plan Participant's country where an air ambulance benefit is provided and medically necessary;</li>
                        <li>Treatment paid for or furnished under any other individual or group Plan Document, or other service or medical prepayment plan arranged through the employer to the extent so furnished or paid, or under any mandatory government program or facility set up for the treatment without cost to any individual;</li>
                        <li>Ionizing radiation or contamination by radioactivity from any nuclear fuel or from any nuclear waste, from combustion of nuclear fuel, the radioactive, toxic, explosive or other hazardous properties of any nuclear assembly or nuclear component of such assembly. Exclusions Continued:</li>
                        <li>Plan Participant being exposed to the utilization of nuclear, chemical, or biological weapons of mass destruction.</li>
                        <li>Travel in or upon: (a) A snowmobile; (b) A water jet ski; (c) Any two or three wheeled motor vehicle, other than a motorcycle registered for on-road travel; (d) Any off-road motorized vehicle not requiring licensing as a motor vehicle; when used for recreation or competition. Unless Hazardous Activity Benefit is purchased.</li>
                        <li>Injury sustained while taking part in: mountaineering; hang gliding; parachuting; bungee jumping; racing by horse, motor vehicle or motorcycle; snowmobiling; motorcycle/motor scooter riding; scuba diving, involving underwater breathing apparatus; water skiing; snow skiing; spelunking; parasailing; white water rafting; surfing, unless part of a school credit course; and snowboarding. Unless Hazardous Activity Benefit is purchased.</li>
                        <li>Practice or play in any amateur, club, intramural, interscholastic, intercollegiate, sports contest or competition; Unless Athletic Sports Activity Benefit is purchased.</li>
                        <li>Practice or play in any professional or semiprofessional contest or competition;</li>
                        <li>Rest cures or custodial care;</li>
                        <li>Treatment of Mental and Nervous Disorders;</li>
                        <li>Weight reduction programs or surgical treatment of obesity or venereal disease;</li>
                        <li>Elective or Cosmetic surgery and Elective Treatment or treatment for congenital anomalies (except as specifically provided), except for reconstructive surgery on a diseased or injured part of the body (Correction of a deviated nasal septum is considered cosmetic surgery unless it results from a covered Injury or Sickness);</li>
                        <li>Travel or flight in or on any vehicle for aerial navigation, including boarding or alighting from: a) While riding as a passenger in any Aircraft not intended or licensed for the transportation of passengers; or b) While being used for any test or experimental purpose; or c) While piloting, operating, learning to operate or serving as a member of the crew thereof; or d) while traveling in any such Aircraft or device which is owned or leased by or on behalf of the Participation Organization of any subsidiary or affiliate of the Participation Organization, or by the Plan Participant or any member of his household. e) A space craft or any craft designed for navigation above or beyond the earth's atmosphere; or f) An ultralight, hang-gliding, parachuting or bungee-cord jumping. Unless Hazardous Activity Benefit is purchased. Except as a fare paying passenger on a regularly scheduled commercial airline or as a passenger in a non-scheduled, private aircraft used for business or pleasure purposes. In addition to any of the exclusions listed above, for Eligible Expenses under Trip Interruption, this Insurance also does not cover the following: 1) The Plan Participant or Traveling Companion or Traveling Companion’s family making changes to personal plans; having business or contractual obligations; being unable to obtain necessary travel documents (passports, visas, etc.); being detained or having property confiscated by customs authorities; carrier caused delays (including bad weather); 2) Prohibition or regulatory by any government; default of yacht charter companies; default of the organization from which the Plan Participant purchased their trip arrangements; 3) A Pre-Existing Condition existing prior to the Plan Participant’s departure from their Home Country. In addition to any of the exclusions listed above, for Eligible Expenses under Baggage Loss and Delay, this Insurance also does not cover the following: (1) Animals; (2) Artificial teeth or limbs, hearing aids; (3) Sunglasses, contact lenses or eyeglasses; (4) Documents of any kind, including but not limited to documents, bills, currency, deeds, evidences of debt, letters of credit, stamps, credit cards, money, notes, securities, transportation or other tickets. Jurisdiction Limitation: Coverage is not available for citizens of the United States or Australia or any travel outside the United States.</li>
                      </ul>
                  </div>
                 </div>

               <div className="miscellaneous-tabtwo">
                 <div className="col-lg-12 misc-claims">
                 <p><strong>Claim Forms –</strong> The Company, upon receipt of a written notice of claim, will furnish to the claimant such forms as are usually furnished by it for filing proofs of loss. If such forms are not furnished within 15 days after the giving of such notice, the claimant shall be deemed to have complied with the requirements of this Plan by submitting, within the time fixed in this Plan for filing proofs of loss, written proof showing the occurrence, nature and extent of the loss for which claim is made. View <Link to="/claims">Claim Forms</Link></p>
                 <p><strong>Proof of Loss –</strong> Written proof of loss must be furnished to The Company at its said office in case of claim for loss for which this plan provides any periodic payment contingent upon continuing loss within 90 days after termination of each period for which The Company is liable and in case of claim for any other loss within 90 days after the date of such loss. Failure to furnish proof within the time required shall not invalidate nor reduce any claim if it is not reasonably possible to give proof within such time, provided proof is furnished as soon as reasonably possible.</p>
                 <p><strong>Time of Payment of Claims –</strong> Indemnities payable under the plan for any loss other than loss for which the plan provides any periodic will be paid immediately upon receipt of due written proof of such loss. Subject to due written proof of loss, all accrued indemnities for loss for which the plan provides periodic payment will be paid at the expiration of each four weeks during the continuance of the period for which The Company is liable, and any balance remaining unpaid upon the termination of liability will be paid immediately upon receipt of due written proof.</p>
                 <p><strong>Payment of Claims –</strong> Indemnity for loss of life will be payable in accordance without the beneficiary designation and the provisions respecting such payment which may be prescribed herein and effective at the time of payment. If no such designation or provision is then effective, such indemnity shall be payable to the estate of the Insured Person. Any other accrued indemnities unpaid at the Insured Person’s death may, at the option of The Company, be paid either to such beneficiary or to such estate. All other indemnities will be payable to the Insured Person. If any indemnity of the policy shall be payable to the estate of an Insured Person, or to an Insured Person who is a minor or otherwise not competent to give a valid release, The Company may pay such indemnity, up to an amount not exceeding $1000 to any relative by blood or connection by marriage of the Insured Person who is deemed by The Company to be equitably entitled thereto. Any payment made by The Company in good faith pursuant to this provision shall fully discharge The Company to the extent of such payment. Subject to any written direction of the Insured Person all or a portion of any indemnities provided by this plan on account of Hospital, nursing, medical or surgical service may, at The Company’s option and unless the Insured Person requests otherwise in writing not later than at the time for filing proof of such loss, be paid directly to the Hospital or person rendering such services, but it is not required that the service be rendered by a particular Hospital or person.</p>

                 <p className="coverage">Home Country Coverage / Follow Me Home</p>
                 <p>Incidental Trips to Your Home Country: This benefit covers you for incidental trips to your Home Country (60 days per 12 months of purchased coverage or pro rata thereof – example: approximately 5 days per month of purchased coverage). Maximum benefit is reduced to $50,000 for any illness or injury occurring while on an incidental trip to your Home Country. Follow Me Home Coverage: This plan shall pay for Covered Expenses incurred in your Home Country up to $5,000 for conditions first diagnosed outside Your Home Country (Does not apply for Emergency Evacuation or Repatriation).</p>

                 <p className="coverage">War Risk Coverage</p>
                 <p>In consideration of the payment of premium calculated in the manner stated in the policy to which the rider is attached, it is hereby agreed that for additional premium the policy is amended as follows: Any Exclusion under this Plan for “declared or undeclared war or any act thereof” is waived for an Insured Person’s loss caused in whole or in part by, or resulting in whole or in part from, declared or undeclared war or any act of declared or undeclared war, subject to the following restriction: The waiver applies with respect to accidents that occur within the geographic limits or territorial waters of, or airspace above the geographic limits or territorial waters of a Designated War Risk Territory (as defined herein). War Risk Coverage in a high risk country (listed below) requires payment of an additional premium and advance notice of travel. Termination Date- War Risk Coverage ends on the earliest of: (1) the date the Policy terminates; (2) the date specified in the Company’s written notice to the Policyholder or Participating Organization of the Company’s intent to terminate War Risk Coverage (or 10 days after the date the written notice is received by the Policyholder or Participating Organization, if later).Termination of War Risk Coverage will not affect a claim for a covered loss that occurred while War Risk Coverage was in effect.</p>

                 <p><strong>War Risk Area 1</strong> (High War Risk – coverage is mandatory – covers your travels to countries in War Risk Areas 1, 2, and 3)</p>
                 <p className="places">Afghanistan, Algeria, Cameroon, Iraq, Israel, Libya, Nigeria, North Korea, Pakistan, Palestinian Territories, Russian Federation (North Caucasus Region of Russia), Saudi Arabia, Somalia, Syria, Ukraine and Yemen.</p>
                 <p><strong>War Risk Area 2</strong> (Medium War Risk – coverage is highly recommended – covers your travels to countries in War Risk Areas 2 and 3)</p>
                 <p className="places">Armenia, Azerbaijan, Bahrain, Bangladesh, Bolivia, Burma, Burundi, Central African Republic, Chad, Colombia, Dem. Republic of Congo, East Timor, Egypt, Eritrea, Haiti, India (Jammu, Kashmir and Mumbai), Indonesia, Ivory Coast, Kenya, Kyrgyzstan, Lebanon, Liberia, Mali, Mauritania, Mexico, Nepal, Niger, Oman, Papua New Guinea, Philippines, Qatar, Sierra Leone, South Sudan, Sri Lanka, Sudan, Uzbekistan, Venezuela and Zimbabwe.</p>
                 <p><strong>War Risk Area 3</strong> (Low War Risk – recommended – covers your travels to countries in War Risk Area 3)</p>
                 <p className="places">All other countries not listed in Area 1 or Area 2 locations.</p>
                 <p><strong>Country Specific Information –</strong> We provide Country Specific Information for every country of the world. For each country, you will find information like the location of the U.S. embassy and any consular offices; whether you need a visa; crime and security information; health and medical conditions; drug penalties; and localized hot spots. This is a good place to start learning about where you are going.</p>
                 <p><strong>Changes in Terms and Conditions –</strong> The terms and conditions of War Risk Coverage, including but not limited to the definition of the Designated War Risk Territory(ies), may be changed at any time to reflect conditions that, in the opinion of the Company, constitute a change in the war risk exposure of the Participating Organization or the Insured Person.</p>
                 </div>
                 </div>

                 <div className="miscellaneous-tabthree">
                 <div className="col-lg-12 misc-tabthree">
                    <p className="text-center refund">Refund of premium, less a $25 processing fee, will be considered if written request is received prior to the effective date of coverage. After that date, the premium is considered fully earned and non-refundable. Partial refunds are not available.</p>
                 </div>
                 </div>

                 <div className="miscellaneous-tabfour">
                 <div className="col-lg-12 misc-tabfour">
                    <p className="text-center purchase">Purchase up to $1,000,000 of 24-hour Accidental Death & Dismemberment coverage. Benefits and exclusions are the same as base plan.</p>
                 </div>
                 </div>
                </section>
              </div>
              </div>
            </Container>
          </section>

      <section id="diplomat-international-section-6">
        <Container>
          <div className="col-lg-12">
          <h2 className="text-blue text-center row-title">Enroll in Diplomat International Plan Below</h2>
            <DiplomatAmericaForm />
             {/*}<p className="text-center copyright">© 2021, INF Health Care Services</p> */}
          </div>
        </Container>
      </section>
    </Layout>
  )
}

export default DiplomatInternationalPage

export const query = graphql`
  query DiplomatInternationalPageQuery {
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
    hero_background: file(name: { eq: "diplomat-international-hero-bg" }) {
      childImageSharp {
        fluid(maxWidth: 1400, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
  }
`
