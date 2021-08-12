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
import IframeResizer from 'iframe-resizer-react'

interface Props {
  data: IndexQueryQuery
  location: Location
}

const PlanIDCardsPage: React.FC<Props> = ({ data, location }: Props) => {
  const meta = data.site?.meta
  const posts = data.remark.posts
  const hero = data.hero?.childImageSharp?.fluid
  const hero_background = data.hero_background?.childImageSharp?.fluid
  const infplans_big_logo = data.infplans_big_logo?.childImageSharp?.fluid

  const backendUrl = meta.backendUrl
  const planIdCardsFormUrl = backendUrl + "/memberHub/logIn/plan-id-cards.php"

  return (
    <Layout location={location}>
      <Helmet>
        <title>Plan ID Cards for INF Visitor Insurance</title>
        <meta property="og:title" content="INF Plan ID Cards"/>
        <meta name="description" content="Find Insurance for Visitors Plan ID card for INF Visitor Insurance"/>
        <meta name="keywords" content="Insurance for Visitors id cards, visitor insurance, Insurance for Visitors, visitor medical insurance, travel medical insurance, INF Visitor Insurance, inf Insurance for Visitors"/>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Helmet>
      <BackgroundImage
        Tag="section"
        className="plan-id-hero-section-bg"
        fluid={hero_background}
        alt="plan id cards"
      >
        <div id="plan-id-hero-section">
          <Container>
            <div className="col-lg-12">
              <h1 className="text-white text-center">
                PLAN ID CARDS
              </h1>
              <p className="hero-text text-white text-center">
                When you complete an online-enrollment of an Insurance for Visitors Plan, you will get an automated email with the Plan ID card, information, and program description.
              </p>
              <Link to="#plan-id-cards-insured-login"><button className="hero-btn"> Retrieve an INF Plan ID Card </button></Link>
            </div>
          </Container>
        </div>
      </BackgroundImage>

      <section id="plan-id-cards-insured-login">
        <Container>
          <div className="col-lg-12" id="plan-id-cards">
            <IframeResizer
              log
              src={planIdCardsFormUrl}
              style={{ width: '1px', minWidth: '100%', border: 'none'}}
            />
            {/*<div className="embed-container">
              <iframe src="https://sec.infplans.com/forms/plan-id-cards-form.php" id="members-login-form" scrolling="no"></iframe>
            </div>*/}
          </div>
        </Container>
      </section>
    </Layout>
  )
}

export default PlanIDCardsPage

export const query = graphql`
  query PlanIDCardsPageQuery {
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
    hero_background: file(name: { eq: "plan-id-hero-bg" }) {
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
  }
`
