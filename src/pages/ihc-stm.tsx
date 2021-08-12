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

const ShortTermInsurancePage: React.FC<Props> = ({ data, location }: Props) => {
  const meta = data.site?.meta
  const posts = data.remark.posts
  const hero = data.hero?.childImageSharp?.fluid
  const hero_background = data.hero_background?.childImageSharp?.fluid

  return (
    <Layout location={location}>
      <Helmet>
        <title>INF Visitor Insurance - Visitors Insurance & Travel Insurance</title>
        <meta property="og:site_name" content="INF Visitor Insurance"/>
        <meta name="description" content="Visitors Insurance for USA Visitors. Shop, Compare, Buy Visitor Medical Visitors Insurance to USA"/>
        <meta name="keywords" content="inf insurance, kvrao insurance, kv rao insurance, Insurance for Visitors, visitor insurance, visitors insurance, visitor medical insurance, travel medical insurance"/>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Helmet>
      <BackgroundImage
        Tag="section"
        className="ihc-hero-section-bg"
        fluid={hero_background}
        alt="TeleMedicine"
      >
        <div id="ihc-hero-section">
          <Container>
            <div className="col-lg-12 text-center">
              <h1 className="text-white">
                IHC SHORT TERM INSURANCE
              </h1>
              <Link to="/inf-easy-select"><button className="hero-btn"> Apply Now </button></Link>
            </div>
          </Container>
        </div>
      </BackgroundImage>

      <section id="ihc-section-1">
        <Container>
          <div className="col-lg-12">
            <div className="ihc-container">
              <h2>
                Enroll in IHC Short Term Insurance below:
              </h2>
              <p>
                This insurance is designed for people who need medical insurance in the short term. This is great for people who are unemployed, self-employed or just need an affordable insurance that fits their budget. Contact us for more information about this plan.
              </p>
                <div className="col-lg-12">
                  <iframe src="https://quote.ihcmarketplace.com/Agent/3512712/GetQuote?product=STM" style={{ border:"0px #ffffff none" }} name="myiFrame" scrolling="no" frameborder="1" marginheight="0px" marginwidth="0px" height="800px" width="100%"></iframe>
                </div>
              <p className="mt-3">
                If you do not consent to the use of electronic transactions and electronic signatures on this site, please contact 1-800-920-7125 to receive paper copies of the application and transact with us through an alternative non-electronic method.
              </p>
              <p>
                Rates and product availability may change without notice; all quotes expire on the requested effective date.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  )
}

export default ShortTermInsurancePage

export const query = graphql`
  query ShortTermInsurancePageQuery {
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
    hero_background: file(name: { eq: "ihc-hero-bg" }) {
      childImageSharp {
        fluid(maxWidth: 1400, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
  }
`
