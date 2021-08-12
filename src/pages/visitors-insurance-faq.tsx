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

const VisitorsInsuranceFaqPage: React.FC<Props> = ({ data, location }: Props) => {
  const meta = data.site?.meta
  const hero = data.hero?.childImageSharp?.fluid
  const hero_background = data.hero_background?.childImageSharp?.fluid

  return (
    <Layout location={location}>
      <Helmet>
        <title>Visitor Insurance FAQ - INF Visitor Insurance</title>
        <meta name="description" content="Why you should purchase insurance from INF and why you should feel confident in knowing INF is on your side when you need us."/>
        <meta name="keywords" content="kv rao insurance, kvrao insurance, Insurance for Visitors, visitor insurance, inf plans, inf insurance, which is the best Insurance for Visitors plan"/>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Helmet>
      <BackgroundImage
        Tag="section"
        className="visitor-insurance-faq-hero-section-bg"
        fluid={hero_background}
        backgroundColor={`#e9f4f8`}
        alt="visitor insurance faq hero background"
      >
        <div id="visitor-insurance-faq-hero-section">
          <Container>
            <div className="col-lg-12">
              <h1 className="text-white text-center">
                Visitor Insurance FAQ
              </h1>
              <Link to="/inf-easy-select"><button className="hero-btn"> Get a Quote </button></Link>
            </div>
          </Container>
        </div>
      </BackgroundImage>

      <section id="insurance-for-visitors-faq">
        <Container>
          <div className="col-lg-12">
            <div className="insurance-for-visitors-faq-container">
              <h2 className="text-blue text-center">Insurance for Visitors: FAQs</h2>
              <p className="title">Why should I purchase Insurance for Visitors?</p>
              <p>The cost of medical care in the United States is continuously rising- faster than inflation or the S&P 500. Outsized medical bills cripple families for years as they struggle to pay off these large medical bills. In order to protect your family for these large financial losses, it is advisable to purchase Insurance for Visitors. We've heard horror stories of visiting families purchasing policies underwritten by foreign companies which don't pay a dime when you need it. If you purchase Insurance for Visitors from a foreign company- we strongly suggest to not waste your money and not buy Insurance for Visitors at all. </p>

              <p className="title">Why should I buy medical insurance from United States if I can buy it from my home country?</p>
              <p>There are several reasons as to why to <Link to="/travel-medical-insurance-for-usa">Purchase Insurance for Visitors from USA</Link>: </p>
              <ul>
                <li>Foreign Insurance Companies are not regulated by USA</li>
                <li>Foreign Insurance does not pay claims in dollar denomination</li>
                <li>Foreign Insurance is not accepted by US Health Care Providers</li>
                <li>Domestic Insurance Companies will Pay Claims</li>
                <li>Domestic Insurance is easy to renew</li>
                <li>You can hold Domestic Insurance Companies Accountable</li>
              </ul>
              <p>At INF Plans, we suggest if you purchase Insurance for Visitors from a <strong>Non-US Company</strong>, you are better off <strong>not buying any insurance at all.</strong> </p>

              <p className="title">Why should I buy from INF Visitor Insurance?</p>
              <p>Check this out: <Link to="/why-inf">Why INF?</Link></p>

              <p className="title">There are many plans on this website, how do I know which one is best suited for me?​</p>
              <p>At INF Plans, we've developed a Plan Finder tool to help you choose which plan best suits you & your families needs. The Plan Finder asks you a few questions, and shows you recommendations based on your needs.</p>
              <p>For more information on plan types to better inform your purchasing decision, check out the following articles: </p>
              <ul>
                <li>Difference Between Comprehensive & Limited Plans</li>
                <li>Insurance for Visitors Tips</li>
                <li>Which Visitors Travel Insurance should I buy?</li>
              </ul>

              <p className="title">Will I get better rates if I buy directly from the Provider or from any other website or agent?</p>
              <p>Yes and no. Premiums cannot be discounted in anyway to due regulations from state insurance authorities which require insurers to register premiums. This is meant to prevent unfair discrimination. That being said, some group plans are able to offer incentives to purchase insurance. For example, INF plans will provide you a $100 Amazon gift card if you book through their travel agency. Group plans are run by organizations, such as AARP or AAA. In these cases, it is the organization, not the insurance company, providing the benefit to members. </p>

              <p className="title">Can I purchase Insurance for Visitors after my visitor arrives?</p>
              <p>We highly recommend you purchase Insurance for Visitors for before you or your visitor arrive in the United States. If you purchase after arrival, the visitor is subject to special underwriting and the policy will not work for a time of 4-5 business days as the underwriter reviews the risk.  </p>

              <p className="title">I am not in USA, can I still buy it ?</p>
              <p>Yes. Because the application process is completed online, you do not have to be in the United States in order to purchase Insurance for Visitors. </p>

              <p className="title">My visitor arrived in the US a few days ago & recently became sick. Can I purchase & use this insurance?</p>
              <p>No. Although pre-existing conditions are covered by some plans (such as INF Premier or INF Elite Network), no insurance will cover anyone who is already sick. We highly advise you to purchase this insurance before your visitor comes to the United States. </p>

              <p className="title">Can I purchase this insurance for my parents?</p>
              <p>Yes. You are able to purchase insurance on behalf parents, relatives, friends, anyone who is visiting you in the United States. </p>

              <p className="title">How do I purchase insurance for multiple people?</p>
              <p>If you are applying for more than 1 couple, simply call us at 408-540-3601. We will help you apply for all of your visitors in the most cost effective manner to save on processing fees.  </p>

              <p className="title">Is there any prior medical exam needed for this insurance? </p>
              <p>No, there is no medical examination needed for any of these short-term travel medical policies. However, we do suggest getting a full check-up from your local doctor before traveling abroad for an extended amount of time.  </p>

              <p className="title">Where is INF Visitor Insurances Call Center Located?</p>
              <p>We have two call centers in the United States located in San Jose, CA & Orlando, FL. Our offices are open from:</p>
              <p>9:00 AM EST to 11:00 PM EST Monday - Friday <br/> 10:00 AM to 9:00 PM Saturday - Sunday.</p>
              <p>You can also reach us at support@infplans.com if you need immediate assistance. </p>

            </div>
          </div>
        </Container>
      </section>

    </Layout>
  )
}

export default VisitorsInsuranceFaqPage

export const query = graphql`
  query VisitorsInsuranceFaqPageQuery {
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
