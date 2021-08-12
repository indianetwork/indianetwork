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
import { Helmet } from 'react-helmet'
import IframeResizer from 'iframe-resizer-react'

interface Props {
  data: IndexQueryQuery
  location: Location
}

const ApplyPage: React.FC<Props> = ({ data, location }: Props) => {
  const meta = data.site?.meta
  const posts = data.remark.posts
  const hero = data.hero?.childImageSharp?.fluid
  const hero_background = data.hero_background?.childImageSharp?.fluid
  const infplans_big_logo = data.infplans_big_logo?.childImageSharp?.fluid
  const apply_right_img = data.apply_right_img?.childImageSharp?.fluid

  const backendUrl = meta.backendUrl
  const applyFormUrl = backendUrl + "/applicationForm/index.php?agentno=1000000"

  return (
    <Layout location={location}>
      <Helmet>
        <title>Apply for Insurance for Visitors - INF Visitor Insurance</title>
        <meta name="description" content="This page allows someone to apply for Insurance for Visitors for their visiting parents from INF Visitor Insurance"/>
        <meta name="keywords" content="apply for Insurance for Visitors, how do i apply for Insurance for Visitors, Insurance for Visitors for parents, travel medical insurance"/>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Helmet>
      <BackgroundImage
        Tag="section"
        className="apply-hero-section-bg"
        fluid={hero_background}
        alt="apply hero background"
      >
        <div id="apply-hero-section">
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

      <section id="apply-section-1">
        <Container>
          <div className="col-lg-12" id="apply-page-form">
            <IframeResizer
              log
              src={applyFormUrl}
              style={{ width: '1px', minWidth: '100%',  border: 'none'}}
              heightCalculationMethod= "lowestElement"
              scrolling= "no"
            />
           </div>
          {/*}<div className="col-lg-12">
            <div className="apply-container">
              <h2 className="text-blue text-center">Apply for INF Visitor Insurance</h2>
                <Img fluid={infplans_big_logo} className="big-logo"/>
                <p className="text-center sub-content">Insurance is offered to persons traveling on a limited duration trip (364 days or less) to the US, Canada or Mexico.</p>
                <p className="note">Please note that INF Premier and Elite plans require minimum 90 days enrollment; and Standard and Traveler USA require minimum 30 days enrollment.</p>
                <div class="apply-tab">
                  <input checked="checked" id="apply-tabone" type="radio" name="apply" />
                  <input id="apply-tabtwo" type="radio" name="apply" />
                  <nav>
                    <ul>
                      <li className="apply-tabone">
                        <label for="apply-tabone">Plan Description</label>
                      </li>
                      <li className="apply-tabtwo">
                        <label for="apply-tabtwo">Discount Services</label>
                      </li>
                    </ul>
                  </nav>
                  <section>
                    <div className="apply-tabone">
                      <div className="col-lg-12">
                        <p>The INF Traveler USA IVAS is a comprehensive accident & sickness plan for visitors without known pre-existing conditions when purchased before the start of your trip for at least 30 days and no more than 364 days, which is the Maximum Period of Coverage. Traveler USA covers non-US citizens traveling to the United States, Canada or Mexico in all age groups, from age 0 to 99 years old.</p>
                        <div className="row">
                          <div className="col-lg-6">
                            <p className="overview text-blue text-center">Plan Overview</p>
                            <button class="read-btn">Read More</button>
                          </div>
                          <div className="col-lg-6">
                            <p className="summary text-blue text-center">Summary of Benefits</p>
                            <button class="download-btn">Download Summary</button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="apply-tabtwo">
                     <div className="col-lg-12">
                        <p>The INF Traveler USA IVAS is a comprehensive accident & sickness plan for visitors without known pre-existing conditions when purchased before the start of your trip for at least 30 days and no more than 364 days, which is the Maximum Period of Coverage. Traveler USA covers non-US citizens traveling to the United States, Canada or Mexico in all age groups, from age 0 to 99 years old.</p>
                        <div className="row">
                          <div className="col-lg-6">
                            <p className="overview text-blue text-center">Plan Overview</p>
                            <button class="read-btn">Read More</button>
                          </div>
                          <div className="col-lg-6">
                            <p className="summary text-blue text-center">Summary of Benefits</p>
                            <button class="download-btn">Download Summary</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div> */}
        </Container>
      </section>

    {/*}  <section id="apply-section-2">
        <Container>
          <div className="col-lg-12">
            <div className="apply-container">
              <div className="row">
                <div className="col-lg-7">
                  <h2 className="text-blue">
                    Lorem Ipsum Dolor
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                  <Link to="/inf-easy-select"><button className="get-apply-btn"> Get a Quote </button></Link>
                </div>
                <div className="col-lg-5">
                  <Img fluid={apply_right_img} className="apply-right-img"/>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section> */}
    </Layout>
  )
}

export default ApplyPage

export const query = graphql`
  query ApplyPageQuery {
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
    hero_background: file(name: { eq: "thank-you-hero-bg" }) {
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
    apply_right_img: file(name: { eq: "elite-right-hero-img" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
  }
`
