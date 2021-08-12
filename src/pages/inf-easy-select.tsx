import React from 'react'
import { graphql, Link } from 'gatsby'
import { IndexQueryQuery, PostByPathQuery } from '../../types/graphql-types'
import Layout from 'components/layout/layout'
import Container from 'components/pages/container'
import BackgroundImage from 'gatsby-background-image'
import { Helmet } from 'react-helmet'
import GetAQuote from 'components/forms/GetAQuote'

interface Props {
  data: IndexQueryQuery
  location: Location
}

const InsuranceQuotePage: React.FC<Props> = ({ data, location }: Props) => {
  const hero_background = data.hero_background?.childImageSharp?.fluid

  return (
    <Layout location={location}>
      <Helmet>
        <title>INF Visitor Insurance Quote</title>
        <meta property="og:site_name" content="INF Visitor Insurance"/>
        <meta property="og:title" content="INF Visitor Insurance - Visitor Medical Travel Insurance"/>
        <meta property="og:description" content="This website sells Insurance for Visitors for Parents. Relatives visiting USA. Full Pre-Existing Insurance for Visitors for Parents visiting USA. We cover all Pre-Existing Conditions. Insurance for Non-US Citizens Living in the USA. H1-B, K1, J1 Visa Insurance."/>
        <meta name="description" content="This website sells Insurance for Visitors for Parents. Relatives visiting USA. Full Pre-Existing Insurance for Visitors for Parents visiting USA. We cover all Pre-Existing Conditions. Insurance for Non-US Citizens Living in the USA. H1-B, K1, J1 Visa Insurance."/>
        <meta name="keywords" content="Dr Rao Visitors Coverage, Rao Insurance for Visitors, KV Rao Visitor Insurance, Rao Visitors Coverage, KV Rao Insurance, KV Rao Insurance for Visitors, India Network, India Network Insurance for Visitors, indnet, india network foundation, india health network insurance,INF Visitor Insurance, INF Insurance, INF Insurance for Visitors, INF Visitor Insurance, Full Pre-Existing Coverage, Pre-Existing Visitor Insurance, Visitor accident &amp; sickness insurance for USA visitors. Compare and review visitor insurance. Buy International Travel accident &amp; sickness insurance and visitor accident &amp; sickness insurance for USA, Visitor accident &amp; sickness insurance, accident &amp; sickness insurance for Non-US Citizens,visitor accident &amp; sickness insurance, visitors accident &amp; sickness insurance, accident &amp; sickness insurance, accident &amp; sickness insurance for Visitors to USA, inbound usa, accident &amp; sickness insurance for Visitors to US, USA visitor insurance, student accident &amp; sickness insurance, students accident &amp; sickness insurance, accident &amp; sickness insurance, accident &amp; sickness insurance for international students to USA, accident &amp; sickness insurance  for students to US, USA student insurance, major accident &amp; sickness insurance, worldwide accident &amp; sickness insurance, group accident &amp; sickness insurance, accident &amp; sickness insurance for Visitors outside USA, accident &amp; sickness insurance for Visitors outside US"/>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Helmet>
      <BackgroundImage
        Tag="section"
        className="quote-hero-section-bg"
        fluid={hero_background}
        alt="quote"
      >
        <div id="quote-hero-section">
          <Container>
            <div className="col-lg-12">
              <h1 className="text-white text-center">
                GET A VISITORS INSURANCE QUOTE
              </h1>
              <p className="hero-text text-white text-center">
                The plans may cover medically necessary testing for COVID-19 in accordance with the plan terms, conditions and exclusions, while the person is in the US.
              </p>
              <Link to="#quote-section-1"><button className="hero-btn"> Get a Quote </button></Link>
            </div>
          </Container>
        </div>
      </BackgroundImage>

      <section id="quote-section-1">
        <Container>
          <div className="col-lg-12">
            <GetAQuote/>
          </div>
        </Container>
        <Container>
          <div className="col-lg-12">
            <div className="quote-container">
              <h2 className="text-center text-blue">Statement on COVID-19 Coverage</h2>
              <h3 className="text-black">Statement on COVID-19 Testing </h3>
              <p className="text-black">
                The plans may cover medically necessary testing for COVID-19 in accordance with the plan terms, conditions and exclusions, while the person is in the US. Medically necessary COVID-19 testing and screening will be covered without any cost-sharing (deductible / copay / coinsurance).
              </p>
              <p className="text-black">
                All cost-sharing for office, urgent care center, laboratory, hospital and emergency room visits will be waived when testing for COVID-19, but only to the extent such items and services relate to the furnishing or administration of such testing or to the evaluation of such individual for purposes of determining the need of such individual for such testing.
              </p>
              <h3 className="text-black">Statement on COVID-19 Treatment </h3>
              <p className="text-black">
                The plans may cover medically necessary treatment for COVID-19 in accordance with the plan terms, conditions and exclusions, while the person is in the US. COVID-19 treatment may be covered in the program as any other eligible sickness.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  )
}

export default InsuranceQuotePage

export const query = graphql`
  query InsuranceQuotePageQuery {
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
    hero_background: file(name: { eq: "quote-hero-bg" }) {
      childImageSharp {
        fluid(maxWidth: 1400, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
  }
`
