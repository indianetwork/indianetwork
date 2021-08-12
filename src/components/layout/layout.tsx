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
        site {
          siteMetadata {
            backendUrl
          }
        },
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
  const [modalCount,setModalCount] = useState(3);
  const backendUrl = data.site.siteMetadata.backendUrl
  const contactFormUrl = backendUrl + "/contact/"

  const decrease = () => {
   setModalCount(prevModalCount => {
     const newCount = Number(prevModalCount) - 1;
     localStorage.setItem("modalCount", newCount);
     return newCount;
   });
 };

  useEffect(
    () => {
      setTimeout(() => {
        setPopupReady(true);
      }, 5000);
      setTimeout(() => {
        setPopupStatus(true);
      }, 45000);
      const initialValue = localStorage.getItem("modalCount");
      if (initialValue) setModalCount(initialValue);
       // localStorage.clear();
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
    decrease();
  }

  function modalHide() {
    setPopupNumber(0);
    setPopupStatus(false);
    localStorage.setItem("modalCount", 0);
  }



  // console.log("Modal Count: ",modalCount);
  return (
    <div>
      { popupReady ? (
        <div className="exit-intent-trigger" onMouseOver={onExitIntent} ></div>
      ) : (
        <div className="exit-intent-trigger"></div>
      )
      }
      {popupStatus && popupNumber == 1 && popupReady && modalCount > 0 ? (
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
                  <form id="exit-form" method="POST" action={contactFormUrl}>
                    <div className="row">
                      <div className="col-md-6 pl-0 pr-2">
                        <input type="text" name="cname"  placeholder="Name" required/>
                      </div>
                      <div className="col-md-6 pr-0 pl-2">
                        <input type="tel" name="cphone" placeholder="Phone" required/>
                      </div>
                    </div>
                    <input type="email" name="cemail" placeholder="Email" required/>
                    <textarea name="cmsg" placeholder="Message" required></textarea>
                    <button type="input" name="csubmit" onClick={modalHide}>Submit </button>
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
