import React, { useState, useEffect } from 'react'
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
import IframeResizer from 'iframe-resizer-react'

interface Props {
  data: IndexQueryQuery
  location: Location
}

const PremiumsPage: React.FC<Props> = ({ data, location }: Props) => {
  const meta = data.site?.meta
  const posts = data.remark.posts
  const hero = data.hero?.childImageSharp?.fluid
  const hero_background = data.hero_background?.childImageSharp?.fluid
  const [firstStep,setFirstStep]= useState(true);
  const [secondStep,setSecondStep]= useState(false);
  const [thirdStep,setThirdStep]= useState(false);
  const [fourthStep,setFourthStep]= useState(false);

  const backendUrl = meta.backendUrl
  const premiumsFormUrl = backendUrl + "/forms/premiums/inf-easy-select-premiums.php"

  function showSecondStep() {
    setFirstStep(false);
    setSecondStep(true);
    setThirdStep(false);
  }
  function showThirdStep() {
    setFirstStep(false);
    setSecondStep(false);
    setThirdStep(true);
  }

  function showFourthStep() {
    setFirstStep(false);
    setSecondStep(false);
    setThirdStep(false);
    setFourthStep(true);
  }

  return (
    <Layout location={location}>
      <Helmet>
        <title>INF Plan Premiums</title>
        <meta property="og:site_name" content="INF Visitor Insurance"/>
        <meta name="description" content="This page talks about premiums for INF True Pre-Existing Coverage plans for visitors and parents traveling to the United States"/>
        <meta name="keywords" content="Dr Rao Visitors Coverage, Rao Insurance for Visitors, KV Rao Visitor Insurance, Rao Visitors Coverage, KV Rao Insurance, KV Rao Insurance for Visitors, India Network, India Network Insurance for Visitors, indnet, india network foundation, india health network insurance,pre-existing conditions, pre-existing medical conditions, visitor medical insurance, visitors medical insurance, health insurance, medical Insurance for Visitors to USA, inbound usa,health Insurance for Visitors to US, USA visitor insurance, Visitor Medical Insurance for USA visitors, Compare and review visitor insurance, Buy International Travel medical insurance and visitor Health insurance for USA, Visitor medical Insurance, Medical Insurance for Non-US Citizens,visitor medical insurance, visitors medical insurance, health insurance, medical Insurance for Visitors to USA, inbound usa, health Insurance for Visitors to US, USA visitor insurance, student medical insurance, students medical insurance, health insurance, medical insurance for international students to USA, health insurance  for students to US, USA student insurance, major medical insurance, worldwide medical insurance, health insurance, medical Insurance for Visitors outside USA, health Insurance for Visitors outside US"/>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Helmet>
      <BackgroundImage
        Tag="section"
        className="premium-hero-section-bg"
        fluid={hero_background}
        backgroundColor={`#e9f4f8`}
        alt="inf premium hero background"
      >
        <div id="premium-hero-section">
          <Container>
            <div className="col-lg-12">
            <h1 className="text-white text-center">
                PREMIUMS
              </h1>
              <Link to="/inf-easy-select">
                <button className="hero-btn"> Get a Quote </button>
              </Link>
            </div>
          </Container>
        </div>
      </BackgroundImage>

      <section id="premium-section-1">
          <IframeResizer
            log
            src={premiumsFormUrl}
            style={{ width: '1px', minWidth: '100%', border: 'none'}}
            heightCalculationMethod= "lowestElement"
          />
      </section>

      <section id="premium-section-2">
       <Container>
            <div className="col-lg-6">
              <div className="premium-container network">
                <p className="ribbon-premiums">Benefit Type</p>
                <p className="title text-center text-blue">Network</p>
                {/*}<p className="content text-center">This plan uses Preferred Provider Network (PPO). The plan pays 80 percent of the negotiated amount for covered medical expenses. For example- if you have a $10,000 bill, and network benefit may bring that down to $4000 and 80% of that $4000 will be paid by the plan ($3200) and you pay $800. This plan is recommended for anyone above 50 years of age.</p> */}
                <p className="content text-center">
                  This plan uses Preferred Provider Network (PPO). The plan pays 80 or 90 percent of the negotiated amount for covered medical expenses. For example- if you have a $10,000 bill, and network benefit may bring that down to $4000 and 80% will be paid by the plan ($3200) and you pay $800.
                </p>
              </div>
           </div>

          <div className="col-lg-6">
             <div className="premium-container fixed">
              <p className="ribbon-premiums">Benefit Type</p>
              <p className="title text-center text-blue">Fixed</p>
              <p className="content text-center">The plan will pay based off a schedule of benefits. Schedule of Benefits is a list of covered medical services. Next to each item on the list is a dollar amount (maximum benefit). The plan pays only to the listed maximum benefit. For example, your plan pays $1,900 a day for a hospital room. If the total hospital charge is $5,000 per day, the plan will pay $1,900. If the hospital charges $10,000 per day, the plan still only pays $1,900.</p>
            </div>
          </div>

          <div className="col-lg-6">
             <div className="premium-container pre-existing">
               <p className="ribbon-premiums">Coverage Type</p>
              <p className="title text-center text-blue">Pre-Existing</p>
              <p className="content text-center">
                The INF Elite & INF Premier provides coverage for Pre-Existing Conditions as defined in the plan as per policy limitations, exclusions, and maximums. These Plans may cover physician visits, labs, in-patient, out-patient, and specialist care.There is a 12 month look-back period for pre-existing conditions under these plans.
              </p>
              {/*<p className="content text-center">The INF Elite, INF Elite Short Term, INF Premier and INF Premier Short Term plans will cover pre-Existing conditions on par with new sicknesses. These Plans will cover physician visits, labs, in-patient, out-patient, and specialist care. There is no look-back period for pre-existing conditions under these plans.</p>*/}
            </div>
          </div>

          <div className="col-lg-6">
             <div className="premium-container acute">
               <p className="ribbon-premiums">Coverage Type</p>
              <p className="title text-center text-blue">Acute-onSet</p>
              <p className="content text-center">Diplomat Ameria Plan offer Acute-onset Pre-Existing conditions cover for visitors of all ages. These plans are relatively in-expesive to purchase. There is no guarantee that a typical condition will be covered. The Acute-Onset plans by nature may only cover emergency, in-patient hospitalizations related to pre-existing conditions in certain conditions. Coverage will end as soon as the patient is discharged from the hospital. Pre-Existing episodes must meet certain guidelines to be eligible for benefits to be paid out.</p>
            </div>
          </div>
     </Container>
      </section>
    </Layout>
  )
}

export default PremiumsPage

export const query = graphql`
  query PremiumsPageQuery {
    site {
      meta: siteMetadata {
        title
        description
        siteUrl
        author
        twitter
        backendUrl
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
    hero_background: file(name: { eq: "premium-hero-bg" }) {
      childImageSharp {
        fluid(maxWidth: 1400, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
  }
`
