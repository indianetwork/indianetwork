import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img, { FixedObject } from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LogoSlider = ({ className }) => {
  const data = useStaticQuery ( graphql`
    query LogoSliderQuery {
      traveler_logo: file(name: { eq: "traveler-logo" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cn_traveler_logo: file(name: { eq: "cn-traveler-logo" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      forbes_logo: file(name: { eq: "forbes-logo" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      itij_logo: file(name: { eq: "ITIJ-logo" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      considerable_logo: file(name: { eq: "considerable-logo" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      seattle_logo: file(name: { eq: "seattle-logo" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      telegraph_logo: file(name: { eq: "telegraph-logo" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      washington_logo: file(name: { eq: "washington-logo" }) {
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
  const traveler_logo = data.traveler_logo?.childImageSharp?.fluid
  const cn_traveler_logo = data.cn_traveler_logo?.childImageSharp?.fluid
  const forbes_logo = data.forbes_logo?.childImageSharp?.fluid
  const itij_logo = data.itij_logo?.childImageSharp?.fluid
  const considerable_logo = data.considerable_logo?.childImageSharp?.fluid
  const seattle_logo = data.seattle_logo?.childImageSharp?.fluid
  const telegraph_logo = data.telegraph_logo?.childImageSharp?.fluid
  const washington_logo = data.washington_logo?.childImageSharp?.fluid



  var settings = {
    speed: 4000,
    autoplaySpeed: 5000,
    fadeIn: false,
    autoplay: true,
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,

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
    <div className="col-md-12 logo-slider mt-4">
      <Slider {...settings}>
        <div className="logo-content">
          <Img fluid={traveler_logo} className="logo-img" />
        </div>
        <div className="logo-content">
          <Img fluid={itij_logo} className="logo-img" />
        </div>
        <div className="logo-content">
          <Img fluid={forbes_logo} className="logo-img" />
        </div>
        <div className="logo-content">
          <Img fluid={cn_traveler_logo} className="logo-img" />
        </div>
        <div className="logo-content">
          <Img fluid={traveler_logo} className="logo-img" />
        </div>
        <div className="logo-content">
          <Img fluid={considerable_logo} className="logo-img" />
        </div>
        <div className="logo-content">
          <Img fluid={seattle_logo} className="logo-img" />
        </div>
        <div className="logo-content">
          <Img fluid={telegraph_logo} className="logo-img" />
        </div>
        <div className="logo-content">
          <Img fluid={washington_logo} className="logo-img" />
        </div>
      </Slider>
    </div>
  )
}

export default LogoSlider
