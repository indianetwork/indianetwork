import React, { useState, useEffect } from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby'
import 'components/navibar/style.scss'
import Logo from '../../../content/images/logo.png'
import Megaphone from '../../../content/images/megaphone-navi.png'
import Whatsapp from '../../../content/images/whatsapp-navi.png'
import MobileDropdown from 'components/navibar/navibar-mobile'
import { HiOutlineMailOpen } from "@react-icons/all-files/hi/HiOutlineMailOpen";

interface Props {
  title: string
  location: Location
}

const Navibar: React.FC<Props> = ({ location, title }: Props) => {
  const data = useStaticQuery ( graphql`
    query NavibarQuery {
      site {
        siteMetadata {
          backendUrl
          emailAddress
          phoneNumber
        }
      }
    }
  `
  )
  
  const phoneNumber = data.site.siteMetadata.phoneNumber
  const emailAddress = data.site.siteMetadata.emailAddress
  const emailAddressUrl = "mailto:"+emailAddress
  const phoneNumberUrl = "tel:"+phoneNumber

  const [scrolled, setScrolled] = useState("navbar navbar-expand navbar-light flex-column flex-md-row");

  // change state on scroll
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY;
      if (isScrolled > 20) {
        setScrolled("navbar navbar-expand navbar-light flex-column flex-md-row fixed");
      } else {
        setScrolled("navbar navbar-expand navbar-light flex-column flex-md-row");
      }
    };

    document.addEventListener('scroll', handleScroll, { passive: "navbar navbar-expand navbar-light flex-column flex-md-row fixed" });

    return () => {
      // clean up the event handler when the component unmounts
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  

  return (
    <>
      <div className="navibar-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              {/*<span><img src={Megaphone} className="megaphone-icon"/></span><p><strong>COVID-19</strong>: For answers to frequently asked questions, please see our <Link to="/diplomat-america#what-is-diplomat-america-plan" id="resource-page">COVID-19 Resource Page</Link></p>*/}
              {/*<span><img src={Megaphone} className="megaphone-icon"/></span><p> Email: <a href="mailto:support@infplans.com">support@infplans.com</a></p> */}
              <a href={emailAddressUrl}>
                <button id="email-button">
                  <HiOutlineMailOpen size="22" className="email-icon"/>
                  Email Us
                </button>
              </a>
            </div>
            <div className="col-lg-3">
              <span><img src={Whatsapp} className="whatsapp-icon"/></span><a href={phoneNumberUrl}><p className="text-right">Tel: {phoneNumber}</p></a>
            </div>
          </div>
        </div>
        <nav className={scrolled} id="main-navigation">
          <div className="container">
            <div className="hidden-md-up">
              <MobileDropdown />
            </div>
            <div className="col-lg-3">
              <Link className="text-center" to="/">
                <img src={Logo} id="logo" alt="infplans logo"/>
              </Link>
            </div>
            <div className="col-lg-9">
              <div className="navbar-nav-scroll hidden-md-down">
                <ul className="navbar-nav bd-navbar-nav justify-content-end">
                  <li
                    className={
                      location.pathname === '/'
                        ? 'nav-item active'
                        : 'nav-item'
                    }
                  >
                    <Link to="/" className="nav-link">
                      Home
                    </Link>
                  </li>
                  <li
                    className={
                      location.pathname === '/'
                        ? 'nav-item active nav-dropdown'
                        : 'nav-item nav-dropdown'
                    }
                  >
                    <Link to="/inf-easy-select" className="nav-link" aria-current="page">
                      Quote
                    </Link>
                    <ul className="nav-submenu">
                      <li
                        className={
                          location.pathname === '/'
                            ? 'nav-item active'
                            : 'nav-item'
                        }
                      >
                        <Link to="/visitors-insurance-quote" className="nav-link">
                          Get a Quote
                        </Link>
                      </li>
                      <li
                        className={
                          location.pathname === '/'
                            ? 'nav-item active'
                            : 'nav-item'
                        }
                      >
                        <Link to="/inf-easy-select-premiums" className="nav-link">
                          Premiums
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li
                    className={
                      location.pathname === '/'
                        ? 'nav-item active nav-dropdown'
                        : 'nav-item nav-dropdown'
                    }
                  >
                    <Link to="/apply" className="nav-link" aria-current="page">
                      Apply
                    </Link>
                    <ul className="nav-submenu">
                      <li
                        className={
                          location.pathname === '/'
                            ? 'nav-item active'
                            : 'nav-item'
                        }
                      >
                        <Link to="/bmi-apply" className="nav-link">
                          INF BMI Travel Plans
                        </Link>
                      </li>
                      <li
                        className={
                          location.pathname === '/'
                            ? 'nav-item active'
                            : 'nav-item'
                        }
                      >
                        <Link to="/apply" className="nav-link">
                          INF Plans
                        </Link>
                      </li>
                      <li
                        className={
                          location.pathname === '/'
                            ? 'nav-item active'
                            : 'nav-item'
                        }
                      >
                        <Link to="/diplomat-america" className="nav-link">
                          Diplomat America
                        </Link>
                      </li>
                      <li
                        className={
                          location.pathname === '/'
                            ? 'nav-item active'
                            : 'nav-item'
                        }
                      >
                        <Link to="/ihc-stm" className="nav-link">
                          IHC Plans
                        </Link>
                      </li>
                      <li
                        className={
                          location.pathname === '/'
                            ? 'nav-item active'
                            : 'nav-item'
                        }
                      >
                        <Link to="/diplomat-international" className="nav-link">
                          Diplomat International
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li
                    className={
                      location.pathname === '/'
                        ? 'nav-item active'
                        : 'nav-item'
                    }
                  >
                    <Link to="/extend" className="nav-link" aria-current="page">
                      Extend
                    </Link>
                  </li>

                  <li
                    className={
                      location.pathname === '/'
                        ? 'nav-item active nav-dropdown'
                        : 'nav-item nav-dropdown'
                    }
                  >
                    <Link to="/visitors-insurance-plans" className="nav-link">
                      Plans
                    </Link>
                    <ul className="nav-submenu">
                      <li
                        className={
                          location.pathname === '/'
                            ? 'nav-item active'
                            : 'nav-item'
                        }
                      >
                        <Link to="/elite-network" className="nav-link">
                          INF Elite
                        </Link>
                      </li>
                      <li
                        className={
                          location.pathname === '/'
                            ? 'nav-item active'
                            : 'nav-item'
                        }
                      >
                        <Link to="/traveler-usa" className="nav-link">
                          INF Traveler USA
                        </Link>
                      </li>
                      <li
                        className={
                          location.pathname === '/'
                            ? 'nav-item active'
                            : 'nav-item'
                        }
                      >
                        <Link to="/premier" className="nav-link">
                          INF Premier
                        </Link>
                      </li>
                      <li
                        className={
                          location.pathname === '/'
                            ? 'nav-item active'
                            : 'nav-item'
                        }
                      >
                        <Link to="/standard" className="nav-link">
                          INF Standard
                        </Link>
                      </li>
                      <li
                        className={
                          location.pathname === '/'
                            ? 'nav-item active'
                            : 'nav-item'
                        }
                      >
                        <Link to="/bmi-travel" className="nav-link">
                          INF BMI Plan (New)
                        </Link>
                      </li>
                      <li
                        className={
                          location.pathname === '/'
                            ? 'nav-item active'
                            : 'nav-item'
                        }
                      >
                        <Link to="/diplomat-america" className="nav-link">
                          Diplomat America
                        </Link>
                      </li>
                      <li
                        className={
                          location.pathname === '/'
                            ? 'nav-item active'
                            : 'nav-item'
                        }
                      >
                        <Link to="/eyemed" className="nav-link">
                          EyeMed
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li
                    className={
                      location.pathname === ''
                        ? 'nav-item active nav-dropdown'
                        : 'nav-item nav-dropdown'
                    }
                  >
                    <Link to="" className="nav-link">
                      Support
                    </Link>
                    <ul className="nav-submenu">
                      {/*<li
                        className={
                          location.pathname === '/'
                            ? 'nav-item active'
                            : 'nav-item'
                        }
                      >
                        <Link to="/faq" className="nav-link">
                          FAQ
                        </Link>
                      </li>*/}
                      <li
                        className={
                          location.pathname === '/'
                            ? 'nav-item active'
                            : 'nav-item'
                        }
                      >
                        <Link to="/claims" className="nav-link">
                          Claims
                        </Link>
                      </li>
                      <li
                        className={
                          location.pathname === '/'
                            ? 'nav-item active'
                            : 'nav-item'
                        }
                      >
                        <Link to="/plan-id-cards" className="nav-link">
                          Plan ID Cards
                        </Link>
                      </li>
                      <li
                        className={
                          location.pathname === '/'
                            ? 'nav-item active'
                            : 'nav-item'
                        }
                      >
                        <Link to="/request-a-quote" className="nav-link">
                          Request A Quote
                        </Link>
                      </li>
                      <li
                        className={
                          location.pathname === '/'
                            ? 'nav-item active'
                            : 'nav-item'
                        }
                      >
                        <Link to="/first-health-ppo" className="nav-link">
                          Provider Search
                        </Link>
                      </li>
                      <li
                        className={
                          location.pathname === '/'
                            ? 'nav-item active'
                            : 'nav-item'
                        }
                      >
                        <Link to="/contact-us" className="nav-link">
                          Contact Us
                        </Link>
                      </li>
                      <li
                        className={
                          location.pathname === '/'
                            ? 'nav-item active'
                            : 'nav-item'
                        }
                      >
                        <Link to="/telemedicine-visitors-insurance" className="nav-link">
                          TeleMedicine
                        </Link>
                      </li>
                      <li
                        className={
                          location.pathname === '/'
                            ? 'nav-item active'
                            : 'nav-item'
                        }
                      >
                        <Link to="/dental-discounts-from-inf" className="nav-link">
                          Dental Discount Program
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li
                    className={
                      location.pathname === '/'
                        ? 'nav-item active nav-dropdown'
                        : 'nav-item nav-dropdown'
                    }
                  >
                    <Link to="" className="nav-link">
                      My Account
                    </Link>
                    <ul className="nav-submenu">
                      <li
                        className={
                          location.pathname === '/'
                            ? 'nav-item active'
                            : 'nav-item'
                        }
                      >
                        <Link to="/members" className="nav-link">
                          Members
                        </Link>
                      </li>
                      <li
                        className={
                          location.pathname === '/'
                            ? 'nav-item active'
                            : 'nav-item'
                        }
                      >
                        <Link to="/producers" className="nav-link">
                          Producers
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/visitors-insurance-plans">
                      <button id="btn-1">Show Plans</button>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="navbar-nav flex-row ml-md-auto d-none d-md-flex" />
          </div>
        </nav>
      </div>
    </>
  )
}

export default Navibar
