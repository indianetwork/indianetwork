import React, { Component } from 'react';
import { Link } from 'gatsby'
import { FaTimes } from "@react-icons/all-files/fa/FaTimes";
import { FaBars } from "@react-icons/all-files/fa/FaBars";

class MobileNavigation extends Component {
  constructor() {
    super();

    this.state = {
      showMenu: false,
      hideMenu: true,
    };

    this.showMenu = this.showMenu.bind(this);
    this.hideMenu = this.hideMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();
    this.setState({ showMenu: true });
  }

  hideMenu(event) {
    event.preventDefault();
    this.setState({ showMenu: false });
  }

  render() {
    return (
      <div>
        {
          this.state.showMenu
            ? (
              <button className="mobile-nav text-center" onClick={this.hideMenu}>
                <FaTimes size="21px" className="svg-icon-middle text-white"/>
              </button>
            )
            : (
              <button className="mobile-nav text-center" onClick={this.showMenu}>
                <FaBars size="21px" className="svg-icon-middle text-white"/>
              </button>
            )
        }
        {
          this.state.showMenu
            ? (
              <div
                className="menu mobile-menu"
                ref={(element) => {
                  this.dropdownMenu = element;
                }}
              >
                <div className="hidden-md-up">
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
                    <Link to="/inf-easy-select" className="nav-link">
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
                          Get A Quote
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
                    <Link to="/apply" className="nav-link">
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
                          Inf BMI Travel Plans
                        </Link>
                      </li>
                      <li
                        className={
                          location.pathname === '/'
                            ? 'nav-item active'
                            : 'nav-item'
                        }
                      >
                        <Link to="/visitors-insurance-plans" className="nav-link">
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
                    <Link to="/extend" className="nav-link">
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
                        <Link to="/diplomat-international" className="nav-link">
                          Diplomat International
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
                        <Link to="/dental-coverage-visitors-insurance" className="nav-link">
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
                </div>
              </div>
            )
            : (
              null
            )
        }
      </div>
    );
  }
}

export default MobileNavigation
