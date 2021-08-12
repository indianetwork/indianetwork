import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img, { FixedObject } from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft } from "@react-icons/all-files/fa/FaChevronLeft";
import { FaChevronRight } from "@react-icons/all-files/fa/FaChevronRight";

const ArticlesSlider = ({ className }) => {
  const data = useStaticQuery ( graphql`
    query ArticlesSliderQuery {
      article_img1: file(name: { eq: "article-img1" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      article_img2: file(name: { eq: "article-img2" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      article_img3: file(name: { eq: "article-img3" }) {
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
  const article_img1 = data.article_img1?.childImageSharp?.fluid
  const article_img2 = data.article_img2?.childImageSharp?.fluid
  const article_img3 = data.article_img3?.childImageSharp?.fluid


  var settings = {
    speed: 1000,
    autoplaySpeed: 5000,
    fadeIn: false,
    autoplay: true,
    dots: false,
    prevArrow: <FaChevronLeft />,
    nextArrow: <FaChevronRight />,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,

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
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true

        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 767,
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
    <div className="col-md-12 articles-slider mt-4 ">
      <Slider {...settings}>
        <div className="articles-container">
          <Img fluid={article_img1} />
          <p className="text-center article-content">Previous crises in tourism: The coronavirus is the fourth major catastrophe for travel</p>
          <p className="text-center text-primary article-name">Greg Dickinson</p>
          <button className="article-btn"> Read Article </button>
        </div>
        <div className="articles-container">
          <Img fluid={article_img2} />
          <p className="text-center article-content">A Small Travel Insurance Change That Could Save Your Next Vacation</p>
          <p className="text-center text-primary article-name">Christopher Elliott</p>
          <button className="article-btn"> Read Article </button>
        </div>
        <div className="articles-container">
          <Img fluid={article_img3} />
          <p className="text-center article-content">Need travel medical insurance? Consider these 7 scenarios</p>
          <p className="text-center text-primary article-name">Stephanie Thurrott</p>
          <button className="article-btn"> Read Article </button>
        </div>
        <div className="articles-container">
          <Img fluid={article_img1} />
          <p className="text-center article-content">Previous crises in tourism: The coronavirus is the fourth major catastrophe for travel</p>
          <p className="text-center text-primary article-name">Greg Dickinson</p>
          <button className="article-btn"> Read Article </button>
        </div>
      </Slider>
    </div>
  )
}

export default ArticlesSlider
