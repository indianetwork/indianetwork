import { graphql } from 'gatsby'
import Img, { FixedObject } from 'gatsby-image'
import { Link } from 'gatsby'
import React from 'react'
import Meta from 'components/meta/meta'
import Layout from 'components/layout/layout'
import styled from 'styled-components'
import Container from 'components/pages/container'
import ContainerFluid from 'components/pages/container-fluid'
import BackgroundImage from 'gatsby-background-image'
import ButtonBlack from 'components/button/button-black'
import { Helmet } from 'react-helmet'

interface Props {
  location: Location
}

const EliteNetworkFaqPage: React.FC<Props> = ({ data, location }: Props) => {
  const meta = data.site?.meta
  const hero = data.hero?.childImageSharp?.fluid
  const hero_background = data.hero_background?.childImageSharp?.fluid

  const phoneNumber = meta.phoneNumber
  const emailAddress = meta.emailAddress
  const emailAddressUrl = "mailto:"+emailAddress
  const phoneNumberUrl = "tel:"+phoneNumber

  return (
    <Layout location={location}>
      <Helmet>
        <title>INF Visitor Insurance - Visitors Insurance & Travel Insurance</title>
        <meta name="description" content="Visitors Insurance for USA Visitors. Shop, Compare, Buy Visitor Medical Visitors Insurance to USA"/>
        <meta name="keywords" content="inf insurance, kvrao insurance, kv rao insurance, Insurance for Visitors, visitor insurance, visitors insurance, visitor medical insurance, travel medical insurance"/>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Helmet>

      <BackgroundImage
        Tag="section"
        className="elite-network-faq-hero-section-bg"
        fluid={hero_background}
        backgroundColor={`#e9f4f8`}
        alt="elite network faq hero background"
      >
        <div id="elite-network-faq-hero-section">
          <Container>
            <div className="col-lg-12">
              <h1 className="text-white text-center">
                INF Elite Travel Insurance Plan
              </h1>
              <Link to="/inf-easy-select"><button className="hero-btn"> Get a Quote </button></Link>
            </div>
          </Container>
        </div>
      </BackgroundImage>

      <section id="elite-network-faq">
        <Container>
          <div className="col-lg-12">
            <div className="elite-network-faq-container">
              <h2 className="text-blue text-center">INF Elite Travel Insurance Plan: Frequently Asked Questions</h2>

              <p className="title">Who is eligible for INF Elite Travel Insurance?</p>
              <p>Any Non-US Citizen can apply for the INF Elite Travel Insurance. This includes Green Card holders, H-1B Visa Holders, Permanent Residents, Students on F1 / F1 Visas, and those on OTP. This plan works for all age groups, from age 0 to age 99. The INF Elite Travel Insurance Plan can be used for travel to the United States or Canada.</p>

              <p className="title">When does the travel insurance start and end?</p>
              <p>The Elite Travel Insurance plan will start on the actual start of your trip including any layovers during your travel and will end once you return to your country of permanent residence.</p>

              <p className="title">Should I add my Spouse as a Dependent?</p>
              <p>If your spouse is traveling with you, they may be added as a dependent if they are eligible for the same type of coverage.</p>

              <p className="title">Is there a maximum limit for any pre-existing conditions?</p>
              <p>Yes, if you have a condition, received any medication or treatment in the last 12-months before your coverage started and you require medical treatment during your trip, there may be a $25,000 maximum for the Accident and Sickness Medical Expense Benefit with a $1,500 Deductible.</p>

              <p className="title">Why should I purchase the INF Elite Travel Insurance Plan?</p>
              <p>The INF Elite Travel Insurance plan is INF's flagship comprehensive insurance for visitors traveling to the United States. The travel insurance is designed to provide coverage for sickness and accident medical expenses, an Accidental Death and Dismemberment Benefit Emergency Medical Evacuation and Repatriation of Remains benefits while you are on your trip.</p>

              <p className="title">What area is covered under the INF Elite Travel Insurance plan?</p>
              <p>The INF Elite Travel Insurance provides coverage during your trip to the United States, Canada and Mexico. Please refer to your policy for additional information.</p>

              <p className="title">Who underwrites the Elite Travel Insurance Plan?</p>
              <p>ACE American Insurance Company, a member of the Chubb Group of companies, is the underwriter for this plan. INF only uses U.S. Based based underwriting companies to protect policy holders.</p>

              <p className="title">What is the minimum period of coverage?</p>
              <p>Once you purchase the coverage, you will be covered from the start date of your trip, which must be a minimum of 30 days and up to 364 days.</p>

              <p className="title">Are the Elite Travel Insurance Plan's Premiums Pro-Rated?</p>
              <p>Yes. For example, if you apply for 1 month and 5 days - that is the exact amount you pay for. No more, no less. Rates are based on a 30 day calendar and are prorated on that basis.</p>

              <p className="title">How do I pay for this Plan?</p>
              <p>We accept all major credit cards (Visa, Discover, MasterCard, American Express) for payment.</p>

              <p className="title">Can I renew the Elite Travel Insurance Plan?</p>
              <p>You are able to renew the Elite Travel Insurance Plan for any amount of time after the initial coverage period. We send email, text, and phone call reminders to you 1 week & 1 day before the policy expiration.</p>

              <p className="title">How do I apply for the Elite Travel Insurance Plan?</p>
              <p>We have an Online application available where you can apply for this plan. Or, you can reach us at {phoneNumber} and we will be able to help you complete the application over the phone.</p>

              <p className="title">Will this plan cover pre-existing conditions?</p>
              <p>Under the INF Elite Travel Insurance plan, pre-existing conditions may be covered according to the terms of the policy. A Preexisting Condition is defined as: “Preexisting Condition” means an illness, disease, or other condition of the Covered Person that in the 12-month period before the Covered Person’s coverage became effective under the Policy:</p>

              <ul>
                <li className="policy">first manifested itself, worsened, became acute, or exhibited symptoms that would have caused a person to seek diagnosis, care, or treatment; or</li>
                <li className="policy">required taking prescribed drugs or medicines, unless the condition for which the prescribed drug or medicine is taken remains controlled without any change in the required prescription; or</li>
                <li className="policy">was treated by a Doctor or treatment had been recommended by a Doctor</li>
              </ul>

              <p className="title">Where can I use this Plan?</p>
              <p>If you experience an accident or sickness during your trip, please seek treatment as soon possible. If you your Injury or Sickness is not an emergency, INF is associated with the First Health Provider Network, which will allow you to take advantage of a network of health care providers, which will bill the insurance company directly and could reduce your out- of- pocket expense, if any, once your deductible is met</p>

              <p className="title">​Can I cancel this plan?</p>
              <p>You are able to cancel this plan for a full refund before the start date of the coverage. Cancellation forms must be completed in writing and faxed to INF at 408-520-4967 and are subject to $25 processing fee. Application fees are non-refundable. After the policy start date, the premium is fully earned and therefore impossible to refund. Enrolled must attest they did not use INF insurance to obtain any visa nor use for any governmental purpose while canceling, and absolve INF of any liability for medical expenses while in the United States.</p>

              <p className="treatment">When seeking treatment with a First Health PPO while covered under the INF Premier plan, please make sure to say the following:"I have a short-term accident & sickness insurance plan which uses First Health PPO. Do you accept plans which work with First Health PPO?"</p>

              <p><strong>Avoid stating the following:</strong> "I have INF Visitor Accident & Sickness Insurance" or "I have Ace Insurance" or "I have INF Premier." Providers WILL NOT recognize this language, and your coverage may not be accepted.</p>
              <p className="note">NOTE: ACE American Insurance Company is not affiliated with, nor are insurance benefits provided, dependent on use of First Health Provider Network.</p>


              <p className="title">Who do I reach to out about claims questions?</p>
              <p>Anytime you visit a health care provider, even if you do not pay, we strongly suggest you fill out a <Link to="/claims">claim form</Link> so the insurance company has a record of your visit to the health care provider & will be able to pay your claim in a timely manner. </p>

              <p>Medical Bills & Receipts can be sent to the following address:</p>

                <p className="details">Administrative Concepts, Inc. (ACI)</p>
                <p className="details">994 Old Eagle School Rd., Suite 1005</p>
                <p className="details">Wayne, PA 19087-1706</p>
                <p className="details">Toll Free: 888-293-9229 (from inside the U.S.)</p>
                <p className="details">Phone: 610-293-9229 (from outside the U.S.)</p>
                <p className="details">Fax: 610-293-9299</p>
                <p className="details">Web: <a href="http://www.visit-aci.com/">http://www.visit-aci.com</a></p>
                <p className="details">EDI Payer#: 22384</p>

              <p>This information is a brief description of the important features of this insurance plan. It is not an insurance contract. Travel assistance services are provided by AXA Global Assistance and are not insured benefits. Insurance benefits are underwritten by ACE American Insurance Company. Coverage may not be available in all states or certain terms may be different where required by state law. Please see the Description of Coverage for terms and conditions. Chubb is the marketing name used to refer to subsidiaries of Chubb Limited providing insurance and related services. For a list of these subsidiaries, please visit our website at www.chubb.com.</p>

            </div>
          </div>
        </Container>
      </section>

    </Layout>
  )
}

  export default EliteNetworkFaqPage

  export const query = graphql`
    query EliteNetworkFaqPageQuery {
      site {
        meta: siteMetadata {
          title
          description
          siteUrl
          phoneNumber
          emailAddress
        }
      },
      hero_background: file(name: { eq: "why-inf-hero-bg" }) {
        childImageSharp {
          fluid(maxWidth: 1400, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
    }
  `
