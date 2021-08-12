import React from 'react'
import { graphql, Link } from 'gatsby'
import { IndexQueryQuery, PostByPathQuery } from '../../types/graphql-types'
import Layout from 'components/layout/layout'
import Container from 'components/pages/container'
import BackgroundImage from 'gatsby-background-image'
import { Helmet } from 'react-helmet'
import IframeResizer from 'iframe-resizer-react'

interface Props {
  data: IndexQueryQuery
  location: Location
}

const MembersPage: React.FC<Props> = ({ data, location }: Props) => {
  const meta = data.site?.meta
  const hero_background = data.hero_background?.childImageSharp?.fluid

  const backendUrl = meta.backendUrl
  const membersLoginFormUrl = backendUrl + "/memberHub/logIn/"

  return (
    <Layout location={location}>
      <Helmet>
        <title>MyINF Member Portal</title>
        <meta name="description" content="Manage your entire Insurance for Visitors policy from MyINF Portal"/>
        <meta name="keywords" content="Dr Rao Visitors Coverage, Rao Insurance for Visitors, KV Rao Visitor Insurance, Rao Visitors Coverage, KV Rao Insurance, KV Rao Insurance for Visitors, India Network, India Network Insurance for Visitors, indnet, india network foundation, india health network insurance,INF Visitor Insurance, INF Insurance, INF Insurance for Visitors, INF Visitor Insurance"/>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Helmet>
      <BackgroundImage
        Tag="section"
        className="members-hero-section-bg"
        fluid={hero_background}
        alt="members"
      >
        <div id="members-hero-section">
          <Container>
            <div className="col-lg-12">
              <h1 className="text-white text-center">
                INSURED PORTAL
              </h1>
            <Link to="#insured-login"><button className="hero-btn"> Sign In </button></Link>
            </div>
          </Container>
        </div>
      </BackgroundImage>

      <section id="members-section1">
        <Container>
          <div className="col-lg-12" id="insured-login">
            <IframeResizer
              log
              src={membersLoginFormUrl}
              style={{ width: '1px', minWidth: '100%', border: 'none'}}
            />
          </div>
        </Container>
      </section>
    </Layout>
  )
}

export default MembersPage

export const query = graphql`
  query MembersPageQuery {
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
    hero_background: file(name: { eq: "members-hero-bg" }) {
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
