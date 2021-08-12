import React from 'react'
import { graphql, Link } from 'gatsby'
import { IndexQueryQuery, PostByPathQuery } from '../../types/graphql-types'
import Meta from 'components/meta/meta'
import Layout from 'components/layout/layout'
import Container from 'components/pages/container'
import BackgroundImage from 'gatsby-background-image'

interface Props {
  data: IndexQueryQuery
  location: Location
}

const PageNotFoundPage: React.FC<Props> = ({ data, location }: Props) => {
  const meta = data.site?.meta
  const hero_background = data.hero_background?.childImageSharp?.fluid

  return (
    <Layout location={location}>
      <Meta site={meta} title="404: Not found"/>
      <BackgroundImage
        Tag="section"
        className="page-not-found-hero-section-bg"
        fluid={hero_background}
        alt="page not found"
      >
        <div id="page-not-found-hero-section">
          <Container>
            <div className="col-lg-12">
              <h1 className="text-center text-white">404: Not Found</h1>
              <p className="text-center text-white">This page doesn’t exist.</p>
            </div>
          </Container>
        </div>
      </BackgroundImage>
    </Layout>
  )
}

export default PageNotFoundPage

export const query = graphql`
  query PageNotFoundPageQuery {
    site {
      meta: siteMetadata {
        title
        description
        siteUrl
        author
        twitter
      }
    },
    hero_background: file(name: { eq: "home-hero-bg" }) {
      childImageSharp {
        fluid(maxWidth: 1400, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
  }
`
