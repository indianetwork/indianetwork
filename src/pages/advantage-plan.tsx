import React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import Layout from 'components/layout/layout'
import Container from 'components/pages/container'
import BackgroundImage from 'gatsby-background-image'
import { Helmet } from 'react-helmet'

interface Props {
  location: Location
}

const AdvantagePlanPage: React.FC<Props> = ({ data, location }: Props) => {
  const hero_background = data.hero_background?.childImageSharp?.fluid

  return (
    <Layout location={location}>
      <Helmet>
        <title>INF Visitor Insurance - Visitors Insurance &amp; Travel Insurance</title>
        <meta name="description" content="Visitors Insurance for USA Visitors. Shop, Compare, Buy Visitor Medical Visitors Insurance to USA"/>
        <meta name="keywords" content="inf insurance, kvrao insurance, kv rao insurance, Insurance for Visitors, visitor insurance, visitors insurance, visitor medical insurance, travel medical insurance"/>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Helmet>

      <BackgroundImage
        Tag="section"
        className="advantage-plan-faq-hero-section-bg"
        fluid={hero_background}
        backgroundColor={`#e9f4f8`}
        alt="advantage plan faq hero background"
      >
        <div id="advantage-plan-faq-hero-section">
          <Container>
            <div className="col-lg-12">
              <h1 className="text-white text-center">
                INF Advantage Plan
              </h1>
              <Link to="/inf-easy-select"><button className="hero-btn"> Get a Quote </button></Link>
            </div>
          </Container>
        </div>
      </BackgroundImage>

      <section id="advantage-plan-faq">
        <Container>
          <div className="col-lg-12">
            <div className="advantage-plan-faq-container">
              <h2 className="text-blue text-center">INF Advantage Plan: Frequently Asked Questions</h2>

              <p className="title">Who is eligible for the INF Advantage Plan?</p>
              <p>Any Non-US Citizen traveling to the United States can apply for the INF Advantage Plan. This includes Green Card holders, H-1B Visa Holders, Permanent Residents, Students on F1 / F1 Visas, and those on OTP & those whose immigration status is not confirmed. This plan works for all age groups, from age 0 to age 99+.</p>

              <p className="title">Will the INF Advantage cover Travel?</p>
              <p>The Advantage Plan covers travel through any stop over. Whether you are transiting through Dubai, London, or Hong Kong, you will have coverage throughout your journey. Travel with confidence, only provided by the INF Advantage Plan.</p>

              <p className="title">Should I add my Visitors Spouse as a Dependent?</p>
              <p>If your visitors require the same Insurance for Visitors plan, you can add both of them on the same policy. When adding a dependent on to the policy, it does not diminish the coverage. Rather- both visitors will have the same policy maximum and deductible, separately. For instance, if you enroll in a $100,000 coverage plan with $250 deductible with a primary and dependent, each visitor on the policy will be covered individually up to $100,000 and have their own deductible to meet of $250.</p>

              <p className="title">Will this plan work in my area?</p>
              <p>Yes. The Advantage Plan works in all 50 states. There is no need to worry when you are traveling with an INF Plan. The Advantage Plan offers the option of using the First Health Provider Network. Find a full list of providers <a href="https://www.firsthealthinternational.com/LocateProvider/CustomPage">here.</a></p>

              <p className="title">Why should I purchase the INF Advantage Plan?</p>
              <p>The INF Advantage Plan provides affordable but durable insurance for individuals across the Nation The Advantage Plan covers major medical events and In-Patient, emergency hospitalizations for both New Accident & Sicknesses & pre-existing conditions. The Advantage Plan is the best option for individuals seeking to mitigate the risk of a large medical bill burdening your family. The Advantage Plan provides excellent coverage & will protect your family when the time comes.</p>

              <p className="title">What's the minimum enrollment for the Advantage Plan?</p>
              <p>The minimum enrollment period for this plan is 30 days. The maximum enrollment period is 300 days from the first date of enrollment.</p>

              <p className="title">Who underwrites the Advantage Plan?</p>
              <p>AXIS Insurance Company, Chicago, IL is the underwriter for the Advantage Plan. INF only uses American Underwriters to protect policy holders. INF policies are regulated by the State Insurance authority. With INF Advantage Plan, you get the peace of mind you want, with the coverage you need.</p>

              <p className="title">How do I pay for this Plan?</p>
              <p>INF accepts all major credit card for for payment (Visa, Discover, Mastercard, American Express). We also accept checks or money orders along with a paper application.</p>

              <p className="title">Are the Advantage Plan's Premiums Pro-Rated?</p>
              <p>Yes. For example, if you apply for 1 month and 5 days - that is the exact amount you pay for. No more, no less. Rates are based on a 30 day calendar and are prorated on that basis.</p>

              <p className="title">How do I apply for the Advantage Plan?</p>
              <p>INF has an online application available where you can apply for this plan. Or, you can reach INF at 408-850-2154 and they will be able to help you complete the application over the phone.</p>

              <p className="title">Can I renew the Advantage Plan?</p>
              <p>You are able to renew the Advantage Plan for any amount of time after the initial coverage period. We send email, text, and phone call reminders to you 1 week & 1 day before the policy expiration.</p>

              <p className="title">Where can I use this Plan?</p>
              <p>The Advantage Plan can be used with the First Health Provider Network option which provides access to discounted health care services from one of the largest medical networks in the U.S. No longer will you need to pay hospital bills upfront & then submit claims forms, waiting sometimes months for reimbursement. Instead, the health care provider will bill the insurance directly after applying the discounted rate.</p>

              <p className="title">Will this plan cover pre-existing conditions?</p>
              <p>The Advantage Plan does not cover pre-existing conditions. It will only cover the acute onset of a pre-existing condition.</p>

              <p className="title">​Can I cancel this plan?</p>
              <p>You are able to cancel this plan for a full refund (minus a $25 cancellation fee) before the start date of the coverage. Cancellation forms must be completed in writing and faxed to INF at 408-520-4967 or emailed to operations@infplans.com . Application fees ($15) are non-refundable. After the policy start date, the premium is fully earned.</p>
              <p>Enrolled must attest they did not use INF insurance to obtain any visa nor use for any govermental purpose while cancelling, and absolve INF of any liability for medical expenses while in the United States.</p>

              <p className="title">Who do I reach to out about claims questions?</p>
              <p>Anytime you visit a health care provider, even if you do not pay, we strongly suggest you fill out the INF <Link to="/claims">claim form</Link> so the insurance company has a record of your visit to the health care provider & will be able to pay your claim in a timely manner.</p>

              <p>Medical Bills & Receipts can be sent to the following address:</p>

                <p className="details">Administrative Concepts, Inc. (ACI)</p>
                <p className="details">994 Old Eagle School Rd., Suite 1005</p>
                <p className="details">Wayne, PA 19087-1706</p>
                <p className="details">Toll Free: 888-293-9229 (from inside the U.S.)</p>
                <p className="details">Phone: 610-293-9229 (from outside the U.S.)</p>
                <p className="details">Fax: 610-293-9299</p>
                <p className="details">Web: <a href="http://www.visit-aci.com/">http://www.visit-aci.com</a></p>
                <p className="details">EDI Payer#: 22384</p>

              <p>In the event a provider wishes to collect from policy holder directly, the second section of claim Form found at (or Standard Insurance Claims Form 1500 CMS/HCFA 1500 or UB92/UB04) should be completed by the doctor's office and submitted by policy holder to the Insurance Company for prompt processing.</p>
              <p>Failure to do so would delay the claim processing or result in denial of claims by WebTPA.</p>

              <p className="insurance-note">THIS INSURANCE DOES NOT COORDINATE WITH ANY OTHER INSURANCE PLAN. IT DOES NOT PROVIDE MAJOR MEDICAL OR COMPREHENSIVE MEDICAL COVERAGE AND IS NOT DESIGNED TO REPLACE MAJOR MEDICAL INSURANCE. FURTHER, THIS INSURANCE IS NOT MINIMUM ESSENTIAL BENEFITS AS SET FORTH UNDER THE PATIENT PROTECTION AND AFFORDABLE CARE ACT. IF YOU DON'T HAVE MINIMUM ESSENTIAL COVERAGE, YOU MAY OWE ADDITIONAL PAYMENT WITH YOUR TAXES.</p>
              <p>U.S. Insurance coverage is underwritten by AXIS Insurance Company. Coverage is subject to exclusions and limitations, and may not be available in all US states and jurisdictions. Product availability and plan design features, including eligibility requirements, descriptions of benefits, exclusions or limitations may vary depending on local country or US state laws. Full terms and conditions of coverage, including effective dates of coverage, benefits, limitations, and exclusions, are set forth in the policy.</p>

            </div>
          </div>
        </Container>
      </section>

    </Layout>
  )
}


export default AdvantagePlanPage

export const query = graphql`
  query AdvantagePlanPageQuery {
    site {
      meta: siteMetadata {
        title
        description
        siteUrl
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
