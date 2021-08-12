import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img, { FixedObject } from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialSlider = ({ className }) => {
  const data = useStaticQuery ( graphql`
    query TestimonialSliderQuery {
      testi_1: file(name: { eq: "testi-1" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `
  )

  // Set ImageData.
  const testi_1 = data.testi_1?.childImageSharp?.fluid


  var settings = {
    speed: 1000,
    autoplaySpeed: 5000,
    fadeIn: false,
    autoplay: true,
    dots: true,
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
    <div className="col-md-12 testimonial-slider mt-5">
      <Slider {...settings}>
          <div className="testimonial-content">
            <p className="testi-name text-center">LOREM IPSUM DOLOR</p>
            <p className="testi-content text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div className="testimonial-content">
            <p className="testi-name text-center">LOREM IPSUM DOLOR</p>
            <p className="testi-content text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div className="testimonial-content">
            <p className="testi-name text-center">LOREM IPSUM DOLOR</p>
            <p className="testi-content text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div className="testimonial-content">
            <p className="testi-name text-center">LOREM IPSUM DOLOR</p>
            <p className="testi-content text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div className="testimonial-content">
            <p className="testi-name text-center">LOREM IPSUM DOLOR</p>
            <p className="testi-content text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
      </Slider>
    </div>
  )
}

export default TestimonialSlider
