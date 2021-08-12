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

const ProducersPage: React.FC<Props> = ({ data, location }: Props) => {
  const meta = data.site?.meta
  const posts = data.remark.posts
  const hero = data.hero?.childImageSharp?.fluid
  const hero_background = data.hero_background?.childImageSharp?.fluid
  const infplans_big_logo = data.infplans_big_logo?.childImageSharp?.fluid

  const backendUrl = meta.backendUrl
  const producersLoginFormUrl = backendUrl + "/producers/logIn/"

  return (
    <Layout location={location}>
      <Helmet>
        <title>Producers - INF Visitor Insurance</title>
        <meta name="description" content="INF Producer Log In "/>
        <meta name="keywords" content="Insurance for Visitors, INF producer Login, INF Producer Area"/>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Helmet>
      <BackgroundImage
        Tag="section"
        className="producers-hero-section-bg"
        fluid={hero_background}
        alt="producers"
      >
        <div id="producers-hero-section">
          <Container>
            <div className="col-lg-12">
              <h1 className="text-white text-center">
                PRODUCERS
              </h1>
              <Link to="#producer-login"><button className="hero-btn"> Sign In </button></Link>
            </div>
          </Container>
        </div>
      </BackgroundImage>

      <section id="producers-section1">
        <Container>
          <div className="col-lg-12" id="producer-login">
            <IframeResizer
              log
              src={producersLoginFormUrl}
              style={{ width: '1px', minWidth: '100%', border: 'none'}}
            />
          </div>
        </Container>
      </section>
    </Layout>
  )
}

export default ProducersPage

export const query = graphql`
  query ProducersPageQuery {
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
    hero_background: file(name: { eq: "producers-hero-bg" }) {
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
