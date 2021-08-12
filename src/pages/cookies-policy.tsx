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

const CookiesPolicyPage: React.FC<Props> = ({ data, location }: Props) => {
  const meta = data.site?.meta
  const posts = data.remark.posts
  const hero = data.hero?.childImageSharp?.fluid
  const hero_background = data.hero_background?.childImageSharp?.fluid

  const phoneNumber = meta.phoneNumber
  const emailAddress = meta.emailAddress

  return (
    <Layout location={location}>
    <Meta site={meta} title="Cookies Policy" />
      <div id="cookies-policy">
        <Container>
          <div className="col-lg-12">

          <h1 className="text-white">
            Cookies Policy for INF Visitor Insurance
          </h1>

          <p className="text-white">
            This Cookies Policy explains what Cookies are and how We use them. You should read this policy so You can understand what type of cookies We use, or the information We collect using Cookies and how that information is used. This Cookies Policy has been created with the help of the Cookies Policy Generator.
          </p>
          <p className="text-white">
            Cookies do not typically contain any information that personally identifies a user, but personal information that we store about You may be linked to the information stored in and obtained from Cookies. For further information on how We use, store and keep your personal data secure, see our Privacy Policy.
          </p>
          <p className="text-white">
            We do not store sensitive personal information, such as mailing addresses, account passwords, etc. in the Cookies We use.
          </p>

          <h2 className="text-white">
            Interpretation and Definitions
          </h2>

          <h3 className="text-white">
            Interpretation
          </h3>

          <p className="text-white">
            The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
          </p>

          <h3 className="text-white">
            Definitions
          </h3>

          <p className="text-white">
            For the purposes of this Cookies Policy:
          </p>

            <ul>
              <li className="text-white purpose"><strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Cookies Policy) refers to INF Visitor Insurance, United States.</li>
              <li className="text-white purpose"><strong>Cookies</strong> means small files that are placed on Your computer, mobile device or any other device by a website, containing details of your browsing history on that website among its many uses.</li>
              <li className="text-white purpose"><strong>Website</strong> refers to INF Visitor Insurance, accessible from infplans.com</li>
              <li className="text-white purpose"><strong>You</strong> means the individual accessing or using the Website, or a company, or any legal entity on behalf of which such individual is accessing or using the Website, as applicable.</li>
            </ul>

          <h2 className="text-white">
            The use of the Cookies
          </h2>

          <h3 className="text-white">
            Type of Cookies We Use
          </h3>

          <p className="text-white">
            Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies remain on your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close your web browser.
          </p>
          <p className="text-white">
            We use both session and persistent Cookies for the purposes set out below:
          </p>

          <ul>
            <li className="text-white"><strong>Necessary / Essential Cookies</strong></li>
            <li className="text-white types-content">Type: Session Cookies</li>
            <li className="text-white types-content">Administered by: Us</li>
            <li className="text-white types-content">Purpose: These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts. Without these Cookies, the services that You have asked for cannot be provided, and We only use these Cookies to provide You with those services.</li>
          </ul>
          <ul>
            <li className="text-white"><strong>Functionality Cookies</strong></li>
            <li className="text-white types-content">Type: Persistent Cookies</li>
            <li className="text-white types-content">Administered by: Us</li>
            <li className="text-white types-content">Purpose: These Cookies allow us to remember choices You make when You use the Website, such as remembering your login details or language preference. The purpose of these Cookies is to provide You with a more personal experience and to avoid You having to re-enter your preferences every time You use the Website.</li>
          </ul>

          <h3 className="text-white">
            Your Choices Regarding Cookies
          </h3>

          <p className="text-white">
            If You prefer to avoid the use of Cookies on the Website, first You must disable the use of Cookies in your browser and then delete the Cookies saved in your browser associated with this website. You may use this option for preventing the use of Cookies at any time.
          </p>
          <p className="text-white">
            If You do not accept Our Cookies, You may experience some inconvenience in your use of the Website and some features may not function properly.
          </p>

          <p className="text-white">
            For any other web browser, please visit your web browser's official web pages.
          </p>

          <h3 className="text-white">
            More Information about Cookies
          </h3>

          <p className="text-white">
            You can learn more about cookies: Cookies: What Do They Do?.
          </p>

          <h3 className="text-white">
            Contact Us
          </h3>

          <p className="text-white">
            If you have any questions about this Cookies Policy, You can contact us:
          </p>

          <ul>
            <li className="text-white contact">By email: {emailAddress}</li>
            <li className="text-white contact">By visiting this page on our website: infplans.com</li>
            <li className="text-white contact">By phone number: {phoneNumber}</li>
          </ul>
          </div>
        </Container>
      </div>
  </Layout>
 )
}

export default CookiesPolicyPage

export const query = graphql`
  query CookiesPolicyPageQuery {
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
