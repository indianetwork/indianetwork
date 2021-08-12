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

const TravelInsuranceForVisitingSeniorsPage: React.FC<Props> = ({ data, location }: Props) => {
  const meta = data.site?.meta
  const hero = data.hero?.childImageSharp?.fluid
  const hero_background = data.hero_background?.childImageSharp?.fluid
  const inf_asian_parents = data.inf_asian_parents?.childImageSharp?.fluid

  return (
    <Layout location={location}>
      <Helmet>
        <title>Travel Insurance for Visiting Seniors - INF Visitor Insurance</title>
        <meta name="description" content="Why you should purchase insurance from INF and why you should feel confident in knowing INF is on your side when you need us."/>
        <meta name="keywords" content="kv rao insurance, kvrao insurance, Insurance for Visitors, visitor insurance, inf plans, inf insurance, which is the best Insurance for Visitors plan"/>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Helmet>
      <BackgroundImage
        Tag="section"
        className="travel-insurance-for-visiting-seniors-hero-section-bg"
        fluid={hero_background}
        backgroundColor={`#e9f4f8`}
        alt="travel insurance for visiting seniors hero background"
      >
        <div id="travel-insurance-for-visiting-seniors-hero-section">
          <Container>
            <div className="col-lg-12">
              <h1 className="text-white text-center">
                Travel Insurance for Elderly
              </h1>
              <Link to="/inf-easy-select"><button className="hero-btn"> Get a Quote </button></Link>
            </div>
          </Container>
        </div>
      </BackgroundImage>

      <section id="insurance-for-senior-travelers">
        <Container>
          <div className="col-lg-12">
            <div className="insurance-for-senior-travelers-container">
              <h2 className="text-blue text-center">Best Travel Medical Insurance for Senior Travelers</h2>
              <p>Many senior enjoy their retirement by traveling the world. Often times, they visit foreign countries and experience new cultures, food, and climates. Seniors enjoy a new lease on life when they enter retirement. As you pack your bags, book your tickets, and obtain your visa for USA travel- you should remember one more item: travel medical insurance. Finding the best travel insurance for senior citizens is difficult. There are so many options- it's hard to know what the right plan for you it. We put together a guide to help you navigate travel insurance plans for seniors, and hopefully this will help visitors to the USA find the best travel health insurance for seniors.</p>
              <p>For seniors living to the United States who are above 70 years of age, it is important to find the proper medical coverage which is the best medical insurance & also economical. Newly arrived immigrants living in the United States typically invite parents or relatives over to stay with them for a longer period of time. That being said- asking your parents to travel halfway around the world at ages 70 or older is a highly risky endeavor. Although you parents may urge you not to purchase insurance and claim they have perfect health, there are many unknown factors which may affect their health during long, international flights. It is important to protect yourself & your family from any harm which may arise.</p>

              <Img fluid={inf_asian_parents} className="right-img" />
              <p className="img-title">Senior Travelers Need to Look after their Health</p>

              <p className="title">Why should I buy medical insurance from United States if I can buy it from my home country?</p>
              <p>There are several factors which influence the insurance options for seniors. Age & health are two main factors. Often, short-term medical policies for visiting senior do not offer a high amount of coverage due to the high risk of these policies and the insured's age. Due to the higher embedded risk of insuring the visitor, premiums tend to be a bit more expensive. Nevertheless, it is still possible to find coverage for these age groups. There are several plans which cover all pre-existing conditions for these age groups, regardless of the risk. </p>

              <p className="title">How to find the best travel insurance plans for seniors</p>
              <p>In order to find the best travel health insurance plan for seniors, you have to evaluate your health. Do you have pre-existing conditions, or you are you fit as a fiddle? Most insurance company say the cover "acute onset of pre-existing conditions"- but this means they don't actually cover anything pre-existing. Acute onset of pre-existing conditions means that the plan will only cover you during true emergency situations related to pre-existing conditions.</p>
              <p>Acute Onset of Pre-Existing conditions is a term that is too vague, opaque, and undefined- allowing insurance companies to deny claims left and right. Even if you think your emergency is acute onset- it can still be denied because no one have given a definition of what acute onset actually is.</p>
              <p>Most companies that cover acute onset of pre-existing conditions say they are USA travel insurance for seniors. However- most of these plans are underwritten by Non-Admitted, unregulated insurance carriers. Most Insurance for Visitors are underwritten by small carriers who are part of a larger syndicate, or based on some island in the Mediterranean! This leaves you exposed and without any consumer protections. If fact- you may need to sue your insurance carrier- as has been done in the past by former clients! Acute Onset of Pre-Existing conditions is a dangerous option if you have pre-existing conditions.</p>
              <p>If you are a traveling senior who has pre-existing conditions- you will need to enroll in Full Pre-Existing coverage plan- like the INF Elite of INF Premier Plan. These two plans cover all pre-existing conditions, have no look back period- and will cover you no matter what happens, as per the policy. Full Pre-Existing plans offer seniors traveling to USA peace of mind knowing they have solid medical coverage for emergency medical issue. INF Elite & INF Premier are underwritten by a true American underwriter: Chubb Group. Chubb is the world's largest publicly traded insurance company, rated A++ by AM Best, and is based in Philadelphia, PA.</p>

              <p className="title">Factors affecting Insurance Options for Seniors </p>
              <p>There are relatively few options for seniors in who are age 70 and older. However, we do offer a few great options which cover seniors in any scenario. INF Plans (Choice, Premier, Elite, Advantage) all provide pre-existing condition coverage and will cover these elderly age groups. These plans offer pre-existing maximums of at least $15,000, and New Accident & Sickness maximums of $100,000, which is virtually unheard of in this older age group. </p>

              <p className="title">What should I consider when purchasing health insurance for a senior?</p>
              <p>When a senior is traveling a long distance to get to the United States, there are several factors to consider when purchasing a insurance policy for them: </p>
              <ul>
                <li className="list-title">General Health Conditions</li>
                  <p>Most people traveling who are in their 70s & 80s will inherently have some sort of pre-existing condition. Although they feel healthy, almost any medical condition could potentially be traced back to a pre-existing condition. We highly recommend seniors in this age group to enroll in a visitors health insurance plan with a minimum of $10,000 in pre-existing coverage. </p>
                <li className="list-title">Activities During Senior's Visit </li>
                  <p>Many seniors like to take walks or strolls around the neighborhood, and do not like being cooped up all day  That being said, even the most mundane activities can pose a risk to a visiting seniors health. Not only are climates in the USA drastically different, but road & traffic rules are not the same in their home country. In order to protect yourself from an unknown risk of injury, it is better to have some form of insurance. We recommend seniors who will be more home-bound to purchase a limited benefit plan, while more active seniors should enroll in comprehensive programs.</p>
                <li className="list-title">Length of Visit in the United States</li>
                  <p>The longer the length of stay in the United States, the higher risk you are exposed to experiencing a major medical event. Due to the unknown certainty of a seniors health, we recommend purchasing a policy with a higher maximum to cover any potential accident or major medical event which may arise during the medium (2 months) to long (6+ months) stay. </p>
              </ul>

                <p className="title">Recommended Travel Insurance for Visiting Seniors</p>
                <p>For seniors above 70 years of age we recommend purchasing an INF Plan. These plans cover any pre-existing conditions, and provide the highest coverage maximums for seniors age 70+.  We suggest taking a look at the Elite Network Plan or the Advantage Plan- which provide comprehensive insurance for seniors above the age of 70 years. </p>
                <p>For plans designed to cover age group 70-79, please check out our article: Visitor Insurance for Visitors over 70</p>
                <p>For plans specifically design to cover age group 80-89, please check out our article: Travel Insurance for Seniors Age 80 Years and Over</p>

            </div>
          </div>
        </Container>
      </section>

    </Layout>
  )
}

export default TravelInsuranceForVisitingSeniorsPage

export const query = graphql`
  query TravelInsuranceForVisitingSeniorsPageQuery {
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
    inf_asian_parents: file(name: { eq: "inf-asian-parents" }) {
      childImageSharp {
        fluid(maxWidth: 700, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
  }
`
