import React from 'react'
import { graphql, Link } from 'gatsby'
import Img, { FixedObject } from 'gatsby-image'
import { IndexQueryQuery, PostByPathQuery } from '../../types/graphql-types'
import Post from '../templates/post/post'
import Meta from 'components/meta/meta'
import Layout from 'components/layout/layout'
import Container from 'components/pages/container'
import ContainerFluid from 'components/pages/container-fluid'
import BackgroundImage from 'gatsby-background-image'
import ButtonBlack from 'components/button/button-black'
import { Helmet } from 'react-helmet'
import BMIApplyForm from 'components/forms/bmi-apply-form'

interface Props {
  data: IndexQueryQuery
  location: Location
}

const BMIApplyPage: React.FC<Props> = ({ data, location }: Props) => {
  const meta = data.site?.meta
  const posts = data.remark.posts
  const hero = data.hero?.childImageSharp?.fluid
  const hero_background = data.hero_background?.childImageSharp?.fluid
  const infplans_big_logo = data.infplans_big_logo?.childImageSharp?.fluid

  return (
    <Layout location={location}>
      <Helmet>
        <title>Apply for Insurance for Visitors - INF Visitor Insurance</title>
        <meta name="description" content="This page allows someone to apply for Insurance for Visitors for their visiting parents from INF Visitor Insurance"/>
        <meta name="keywords" content="apply for Insurance for Visitors, how do i apply for Insurance for Visitors, Insurance for Visitors for parents, travel accident &amp; sickness insurance"/>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Helmet>
      <BackgroundImage
        Tag="section"
        className="bmi-apply-hero-section-bg"
        fluid={hero_background}
        alt="bmi apply hero backgrounds"
      >
      <div id="bmi-apply-hero-section">
        <Container>
          <div className="col-lg-12">
            <h1 className="text-white text-center">
              APPLY
            </h1>
            <Link to="/inf-easy-select"><button className="hero-btn"> Apply Now </button></Link>
          </div>
        </Container>
      </div>
    </BackgroundImage>

    <section id="bmi-apply-section-1">
      <Container>
        <div className="col-lg-12">
          <div className="bmi-apply-container">
            <h2 className="text-blue text-center">Apply for INF BMI Travel Assist</h2>
              <Img fluid={infplans_big_logo} className="big-logo"/>
              <p className="text-center sub-title">INF Recommends enrolling for at least 61 days to get Best Price Discount</p>
              <p className="text-center">Please Read and Agree to conditions of the Travel Assist Program before applying.</p>
            <h2 className="text-blue text-center">INF BMI Travel Plan Application</h2>
            <BMIApplyForm />
          </div>
        </div>
      </Container>
    </section>
  </Layout>
 )
}

export default BMIApplyPage

export const query = graphql`
  query BMIApplyPageQuery {
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
    hero_background: file(name: { eq: "bmi-travel-assist-apply" }) {
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
