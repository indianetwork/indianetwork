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

  return (
    <Layout location={location}>
      <Meta site={meta} title="Plan ID Cards for INF Visitor Insurance"/>
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
                When you complete an online-enrollment of a Insurance for Visitors Plan, you will get an automated email with the Plan ID card, information, and program description.
              </p>
              <button className="hero-btn"> Get a Quote </button>
            </div>
          </Container>
        </div>
      </BackgroundImage>

      <section id="plan-id-section1">
        <Container>
          <div className="col-lg-12">
            <div className="row plan-id-container">
              <div className="col-lg-5">
                <Img fluid={infplans_big_logo} className="big-logo"/>
                <h3 className="text-blue text-center">Member Sign In</h3>
              </div>
              <div className="col-lg-7">
                <form method="POST" action="">
                  <input type="email" id="email" name="email" placeholder="Email Address" />
                  <input type="submit" value="Next" />
                </form>
              </div>
              <div className="row mt-5">
                <div className="col-lg-12">
                  <h3 className="text-blue text-center row-title">Retrieve a INF Plan ID Card, Plan Description, Visa Letter</h3>
                  <p className="text-black text-center">When you complete an online-enrollment of a Insurance for Visitors Plan, you will get an automated email with the Plan ID card, information, and program description. It is paramount that you print these documents and keep them for safe keeping. If you cannot find the email with the information regarding your Plan, you may use one of the portals before the request the information from the insurance companies.</p>
                  <p className="text-black text-center">If you have any additional questions or need help requesting Plan ID cards, please contact us at 408-540-3601 or email us at support @infplans.com</p>
                </div>
              </div>
            </div>
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
