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

const PrivacyPolicyPage: React.FC<Props> = ({ data, location }: Props) => {
  const meta = data.site?.meta
  const posts = data.remark.posts
  const hero = data.hero?.childImageSharp?.fluid
  const hero_background = data.hero_background?.childImageSharp?.fluid

  return (
    <Layout location={location}>
    <Meta site={meta} title="Privacy Policy" />
        <div id="privacy-policy-section">
          <Container>
            <div className="col-lg-12">
            <h1 className="text-white">Privacy Policy of INF Visitor Insurance, LLC</h1>
            <p className="text-white">INF Visitor Insurance, LLC operates the <a href="http://www.infplans.com/">http://www.infplans.com/</a> website, which provides Insurance for Visitors traveling to/from USA.</p>
            <p className="text-white">This page is used to inform website visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service, the INF Visitor Insurance website.</p>
            <p className="text-white">If you choose to use our Service, then you agree to the collection and use of information in relation with this policy. The Personal Information that we collect are used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.</p>
            <p className="text-white">The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is accessible at www.infplans.com, unless otherwise defined in this Privacy Policy.</p>

            <h2 className="text-white">Information Collection and Use</h2>
            <p className="text-white">For a better experience while using our Service, we may require you to provide us with certain personally identifiable information, including but not limited to your name, phone number, and postal address. The information that we collect will be used to contact or identify you.</p>

            <h2 className="text-white">Log Data</h2>
            <p className="text-white">We want to inform you that whenever you visit our Service, we collect information that your browser sends to us that is called Log Data. This Log Data may include information such as your computer’s Internet Protocol ("IP") address, browser version, pages of our Service that you visit, the time and date of your visit, the time spent on those pages, and other statistics.</p>

            <h2 className="text-white">Cookies</h2>
            <p className="text-white">Cookies are files with small amount of data that is comm used an anonymous unique identifier. These are sent to your browser from the website that you visit and are stored on your computer’s hard drive.</p>
            <p className="text-white">Our website uses these "cookies" to collection information and to improve our Service. You have the option to either accept or refuse these cookies, and know when a cookie is being sent to your computer. If you choose to refuse our cookies, you may not be able to use some portions of our Service.</p>

            <h2 className="text-white">Service Providers</h2>
            <p className="text-white">We may employ third-party companies and individuals due to the following reasons:</p>
              <ul>
                <li className="text-white">To facilitate our Service;</li>
                <li className="text-white">To provide the Service on our behalf;</li>
                <li className="text-white">To perform Service-related services; or</li>
                <li className="text-white">To assist us in analyzing how our Service is used.</li>
              </ul>
            <p className="text-white">We want to inform our Service users that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.</p>

            <h2 className="text-white">Security</h2>
            <p className="text-white">We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.</p>

            <h2 className="text-white">Links to Other Sites</h2>
            <p className="text-white">Our Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over, and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.</p>
            <p className="text-white">Children’s Privacy</p>
            <p className="text-white">Our Services do not address anyone under the age of 13. We do not knowingly collect personal identifiable information from children under 13. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to do necessary actions.</p>

            <h2 className="text-white">Changes to This Privacy Policy</h2>
            <p className="text-white">We may update our Privacy Policy from time to time. Thus, we advise you to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately, after they are posted on this page.</p>

            <h2 className="text-white">Contact Us</h2>
            <p className="text-white">If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us.</p>

           </div>
          </Container>
        </div>
    </Layout>
  )
}

export default PrivacyPolicyPage

export const query = graphql`
  query PrivacyPolicyPageQuery {
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
    hero_background: file(name: { eq: "bg" }) {
      childImageSharp {
        fluid(maxWidth: 1400, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
  }
`
