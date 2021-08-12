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

interface Props {
  data: IndexQueryQuery
  location: Location
}

const VisitorInsuranceQuotePage: React.FC<Props> = ({ data, location }: Props) => {
  const meta = data.site?.meta
  const posts = data.remark.posts
  const hero = data.hero?.childImageSharp?.fluid
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
        className="get-a-quote-hero-section-bg"
        fluid={hero_background}
        alt="get a quote"
      >
        <div id="get-a-quote-hero-section">
          <Container>
            <div className="col-lg-12">
              <h1 className="text-white text-center">
                GET A VISITORS INSURANCE QUOTE
              </h1>
              <p className="hero-text text-white text-center">
                INF has provided insurance options for millions of travelers since 1988. Built during the early-ages of the internet, INF has always been a technology first company.
              </p>
              <Link to="/inf-easy-select">
                <button className="hero-btn"> Get a Quote </button>
              </Link>
            </div>
          </Container>
        </div>
      </BackgroundImage>

      <section id="get-a-quote-section-1">
        <Container>
          <div className="col-lg-12">
            <h2 className="text-center text-blue">Why choose INF Insurance? </h2>
            <p className="text-black text-center">
              INF has provided insurance options for millions of travelers since 1988. Built during the early-ages of the internet, INF has always been a technology first company. INF was the first company to allow insurance applications Online and over fax, and the first company to incorporate technology into their claims process. INF uses technology to bring better products, services, and customer experience to travelers across the globe.
            </p>
          </div>
        </Container>
      </section>
    </Layout>
  )
}

export default VisitorInsuranceQuotePage

export const query = graphql`
  query VisitorInsuranceQuotePageQuery {
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
    hero_background: file(name: { eq: "get-a-quote-hero-bg" }) {
      childImageSharp {
        fluid(maxWidth: 1400, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
  }
`
