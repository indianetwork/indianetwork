import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img, { FixedObject } from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft } from "@react-icons/all-files/fa/FaChevronLeft";
import { FaChevronRight } from "@react-icons/all-files/fa/FaChevronRight";

const TestimonialHomeSliderOld = ({ className }) => {
  const data = useStaticQuery ( graphql`
    query TestimonialHomeSliderOldQuery {
      quote_testimonial_img: file(name: { eq: "quote-testimonial-img" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      vijay_img: file(name: { eq: "vijay-img" }) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      testi1_img: file(name: { eq: "testi-1" }) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      testi2_img: file(name: { eq: "testi-2" }) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      testi3_img: file(name: { eq: "testi-3" }) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      testi_bg: file(name: { eq: "testi-bg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
    }
  `
  )

  // Set ImageData.
  const testi_1 = data.testi_1?.childImageSharp?.fluid
  const quote_testimonial_img = data.quote_testimonial_img?.childImageSharp?.fluid
  const vijay_img = data.vijay_img?.childImageSharp?.fluid
  const testi_bg = data.testi_bg?.childImageSharp?.fluid
  const testi1_img = data.testi1_img?.childImageSharp?.fluid
  const testi2_img = data.testi2_img?.childImageSharp?.fluid
  const testi3_img = data.testi3_img?.childImageSharp?.fluid


  var settings = {
    speed: 1000,
    autoplaySpeed: 10000,
    fadeIn: false,
    autoplay: true,
    dots: false,
    prevArrow: <FaChevronLeft />,
    nextArrow: <FaChevronRight />,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true

        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      }
    ]
  };

  return (
    <BackgroundImage
      Tag="section"
      className="testimonial-section-bg"
      fluid={testi_bg}
      alt="testimonial"
      id="testimonial-bg-section"
    >
    <div className="col-md-12 testimonial-slider">
      <Img fluid={quote_testimonial_img} className="quote-img" />
      <Slider {...settings}>
        <div className="col-lg-12">
          <div className="row">
            <div className="col-lg-3">
              <Img fluid={testi2_img} className="testi-img" />
            </div>
            <div className="col-lg-9">
              <h3 className="testi-name text-white">KUMAR</h3>
              <p className="text-white testi-content">It was a great experience working with Prakash in getting INF insurance policy done for my in-laws. He is always easily approachable and clearly explains each and every plan details which suits for our needs and complete the application process in real quick. He goes extra mile by answering any additional follow up questions anytime.</p>
              <div className="star-icons">
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="row">
            <div className="col-lg-3">
              <Img fluid={testi1_img} className="testi-img" />
            </div>
            <div className="col-lg-9">
              <h3 className="testi-name text-white">SHANTI RAM</h3>
              <p className="text-white testi-content">I had a pretty pleasant experience. I bought the elite plan for my mom who is visiting from India. She had recently had a major skin infection- but it was covered thru their UHC Doctor.. They were very responsive and helped me with all the paperwork. Praveen and Peter are the go to people if u need help.</p>
              <div className="star-icons">
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="row">
            <div className="col-lg-3">
              <Img fluid={testi3_img} className="testi-img" />
            </div>
            <div className="col-lg-9">
              <h3 className="testi-name text-white">GAURAV MALHOTRA</h3>
              <p className="text-white testi-content">I had a great experience with INF. Was working with Prakash gave me all the guidance on buying the Bmi program. They covered a Covid test for my mom who was feeling sick right after she came on her flight. Luckily she tested negative. I was happy with the overall service and cashless service. Always happy to recommend INF to friends and family!</p>
              <div className="star-icons">
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
    </BackgroundImage>
  )
}

export default TestimonialHomeSliderOld
