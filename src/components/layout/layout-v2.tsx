import React, { useState, useEffect } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import emergence from 'emergence.js'
import Navibar from 'components/navibar/navibar'
import Footer from 'components/footer/footer'
import { siteMetadata } from '../../../gatsby-config'
import BackgroundImage from 'gatsby-background-image'
import 'modern-normalize/modern-normalize.css'
import 'prismjs/themes/prism.css'
import 'scss/gatstrap.scss'
import 'animate.css/animate.css'
import 'font-awesome/css/font-awesome.css'
import Img, { FixedObject } from 'gatsby-image'

interface Props {
  children?: React.ReactNode
  location: Location
}

const Layout: React.FC<Props> = ({ children, location }: Props) => {
  const data = useStaticQuery(
    graphql`
      query {
        popup1_img: file(name: { eq: "popup-img1" }) {
          childImageSharp {
            fluid(maxWidth: 400, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        },
        popup2_img: file(name: { eq: "popup-img2" }) {
          childImageSharp {
            fluid(maxWidth: 400, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        },
        popup3_img: file(name: { eq: "popup-img3" }) {
          childImageSharp {
            fluid(maxWidth: 400, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        },
        popup4_img: file(name: { eq: "popup-img4" }) {
          childImageSharp {
            fluid(maxWidth: 400, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        },
      }
    `
  )

  const popup1_img = data.popup1_img?.childImageSharp?.fluid
  const popup2_img = data.popup2_img?.childImageSharp?.fluid
  const popup3_img = data.popup3_img?.childImageSharp?.fluid
  const popup4_img = data.popup4_img?.childImageSharp?.fluid
  const [popupStatus, setPopupStatus] = useState(false);
  const [popupNumber, setPopupNumber] = useState(1);
  const [popupReady, setPopupReady] = useState(false);

  useEffect(
    () => {
      setTimeout(() => {
        setPopupReady(true);
      }, 3000);
    },
    // useEffect will run only one time with empty []
    // if you pass a value to array,
    // like this - [data]
    // than clearTimeout will run every time
    // this value changes (useEffect re-run)
    []
  );

  function onExitIntent() {
    setPopupStatus(true);
  }

  function closeModal() {
    setPopupStatus(false);
    setPopupNumber(0);
  }

  return (
    <div>
      <div className="exit-intent-trigger" onMouseOver={onExitIntent}></div>
      {popupStatus && popupNumber == 1 && popupReady ? (
        <div className="modal show" id="myModal" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" onClick={closeModal}>&times;</button>
              </div>
                <div className="row row-1">
                  <div className="modal-body col-lg-7">
                  <h3 className="text-center">Stay confident while you travel</h3>
                  <h2 className="text-center">We will help you get covered!</h2>
                  <form id="exit-form" method="POST" action="https://www.elformo.com/forms/5f33914b-a53b-4896-91d8-fffd02e07f8e">
                    <div className="row">
                      <div className="col-md-6 pl-0 pr-2">
                        <input type="text" name="name"  placeholder="Name" required/>
                      </div>
                      <div className="col-md-6 pr-0 pl-2">
                        <input type="tel" name="phone" placeholder="Phone" required/>
                      </div>
                    </div>
                    <input type="email" name="email" placeholder="Email" required/>
                    <textarea name="message" placeholder="Message" required></textarea>
                    <button type="input">Submit </button>
                  </form>
                  </div>
                  <div className=" col-lg-5 popup-image-container">
                  <div className="row">
                    <div className="col-md-6 pr-0">
                      <Img fluid={popup1_img} className="popup-images"/>
                    </div>
                    <div className="col-md-6 pl-0">
                      <Img fluid={popup2_img} className="popup-images"/>
                    </div>
                  </div>
                  <div className="row pt-2">
                    <div className="col-md-6 pr-0">
                      <Img fluid={popup3_img} className="popup-images"/>
                    </div>
                    <div className="col-md-6 pl-0">
                      <Img fluid={popup4_img} className="popup-images"/>
                    </div>
                  </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
      ) : (
        null
      )
      }
      <Navibar title={siteMetadata.title} location={location} />
      {children}
      <Footer title={siteMetadata.title} author={siteMetadata.author} />
    </div>
  )
}

export default Layout
