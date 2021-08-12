import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img, { FixedObject } from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const EyemedSlider = ({ className }) => {
  const data = useStaticQuery ( graphql`
    query EyemedSliderQuery {
      optical_logo: file(name: { eq: "optical-logo" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      contacts_logo: file(name: { eq: "contacts-logo" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      lens_logo: file(name: { eq: "lens-logo" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      vision_logo: file(name: { eq: "vision-logo" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      independent_logo: file(name: { eq: "independent-logo" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      glasses_logo: file(name: { eq: "glasses-logo" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
    }
  `
  )

  // Set ImageData.
  const optical_logo = data.optical_logo?.childImageSharp?.fluid
  const contacts_logo = data.contacts_logo?.childImageSharp?.fluid
  const lens_logo = data.lens_logo?.childImageSharp?.fluid
  const vision_logo = data.vision_logo?.childImageSharp?.fluid
  const independent_logo = data.independent_logo?.childImageSharp?.fluid
  const glasses_logo = data.glasses_logo?.childImageSharp?.fluid


  var settings = {
    speed: 4000,
    autoplaySpeed: 5000,
    fadeIn: false,
    autoplay: true,
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
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
    <div className="col-md-12 eyemed-slider mt-4">
      <Slider {...settings}>
        <div className="eyemed-content">
          <Img fluid={optical_logo} className="eyemed-logo-img" />
        </div>
        <div className="eyemed-content">
          <Img fluid={contacts_logo} className="eyemed-logo-img" />
        </div>
        <div className="eyemed-content">
          <Img fluid={lens_logo} className="eyemed-logo-img" />
        </div>
        <div className="eyemed-content">
          <Img fluid={vision_logo} className="eyemed-logo-img" />
        </div>
        <div className="eyemed-content">
          <Img fluid={independent_logo} className="eyemed-logo-img" />
        </div>
        <div className="eyemed-content">
          <Img fluid={glasses_logo} className="eyemed-logo-img" />
        </div>
      </Slider>
    </div>
  )
}

export default EyemedSlider
