"use client";
import { Link, useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Select from 'react-select';

// Options for language selection
const options = [
  { value: 'EN1', label: 'EN' },
  { value: 'EN2', label: 'FR' },
  { value: 'EN3', label: 'GER' },
  { value: 'EN4', label: 'BAN' },
];

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [home, setHome] = useState(false);
  const [service, setService] = useState(false);
  const [page, setPage] = useState(false);
  const [blog, setBlog] = useState(false);
  const [isOverlayActive, setIsOverlayActive] = useState(false);

  const localtion = useLocation().pathname;

  const mobileMenuOpen = () => {
    setMobileMenu(true);
    setIsOverlayActive(true);
    document.body.classList.add('disable-scroll');
  };

  const mobileMenuClose = () => {
    setMobileMenu(false);
    setIsOverlayActive(false);
    document.body.classList.remove('disable-scroll');
  };
  const serviceHandler = () => {
    setService(!service)
  }
  const pageHandler = () => {
    setPage(!page)
  }
  const initialSelected = options.find(option => option.label === 'EN');

  const [selected, setSelected] = useState(initialSelected);
  const handleChange = (selectedOption) => {
    setSelected(selectedOption);
  };
  const [scrollClassName, setScrollClassName] = useState("");
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrollClassName("sticky-menu");
      } else {
        setScrollClassName("");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Search Popup 
  const [isActive, setIsActive] = useState(false);

  const togglePopup = () => {
    setIsActive(!isActive);
    document.body.classList.toggle('locked');
  };
  function preloader() {
    // Implementation of the preloader function
  }
  if (typeof window !== 'undefined') {
    window.onload = () => {
      preloader();
    };
  }
  const divStyle = {
    overflow: 'hidden',
  }



  return (
    <header className="main-header main-header-two" style={divStyle}>
      <div id="sticky-header" className={`menu-area ${scrollClassName}`}>
        <div className="main-header-two__outer">
          <div className="logo-box-two">
            <Link href="/"><img src="/img/resource/logo-4.png" alt="Logo" /><p>US Freight Now LLC</p></Link>
          </div>

          <div className="menu-area__inner">
            <div className="mobile-nav-toggler" onClick={mobileMenuOpen}>
              <i className="fas fa-bars"></i>
            </div>

            <div className="menu-wrap">
              <nav className="menu-nav">
                <div className="main-header-two__inner">
                  <div className="main-header-two__top">
                    <div className="main-header-two__top-pattern" style={{ backgroundImage: "url(/img/pattern/header-v2-pattern.png)" }} />
                    <div className="main-header-two__top-inner">
                      <div className="main-header-two__top-left">
                        <div className="header-contact-info">
                          <ul>
                            <li>
                              <div className="icon-box">
                                <span className="icon-pin"></span>
                              </div>
                              <p>Jones Street, New York, USA</p>
                            </li>
                            <li>
                              <div className="icon-box">
                                <span className="icon-paper-plane"></span>
                              </div>
                              <p><Link href="mailto:yourmail@email.com">Info@example.com</Link></p>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="main-header-two__top-right">
                        <div className="inner">
                          <div className="header-social-links">
                            <ul>
                              <li><Link href="#"><span className="icon-facebook"></span></Link></li>
                              <li><Link href="#"><span className="icon-twitter"></span></Link></li>
                              <li><Link href="#"><span className="icon-instagram"></span></Link></li>
                              <li><Link href="#"><span className="icon-linkedin"></span></Link></li>
                            </ul>
                          </div>
                          <div className="btn-box">
                            <Link href="contact">Get a Free Quote <span className="icon-right-arrow"></span></Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="main-header-two__bottom">
                    <div className="main-header-two__bottom-left">
                      <div className="navbar-wrap main-menu">
                        <ul className="navigation">
                          <li className={localtion === '/' && "active"}>
                            <Link href="/">Home</Link>
                          </li>
                          <li className={localtion === '/about' && "active"}>
                            <Link to="/about">About</Link>
                          </li>
                          <li className={`${(localtion === '/services' || localtion === '/road-transport') && "active"}`}>
                            <Link to="/services">Services</Link>
                          </li>
                          <li className={localtion === '/team' && "active"}>
                            <Link to="/team">Team</Link>
                          </li>
                          <li className={localtion === '/contact' && "active"}>
                            <Link to="/contact">Contact</Link>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="main-header-two__bottom-right" id='header-en-container'>
                      <div className="search-box">
                        <Link href="#" className="main-menu__search search-toggler icon-magnifying-glass" onClick={togglePopup}></Link>
                      </div>

                      <div className="main-header__language-switcher">
                        <div className="select-box clearfix" id='select-box-home-two'>
                          <Select
                            className="selectmenu wide"
                            options={options}
                            value={selected}
                            onChange={setSelected}
                            styles={{
                              control: (provided) => ({
                                ...provided,
                                width: '100%',
                                height: '50px',
                                fontSize: '16px',
                                fontWeight: 500,
                                borderRadius: '4px',
                                backgroundColor: '#fff',
                                color: '#fff'
                              }),
                              option: (provided, state) => ({
                                ...provided,
                                backgroundColor: state.isSelected ? '#121213' : state.isFocused ? '#121213' : '#FF5E15',
                                color: '#ffffff',
                                cursor: 'pointer',
                              })
                            }}
                          />
                        </div>
                      </div>

                      <div className="contact-box">
                        <div className="icon-box">
                          <span className="icon-out-call"></span>
                        </div>
                        <div className="text">
                          <p><Link href="tel:123456789">+70 264 566 579</Link></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`mobile-menu ${mobileMenu ? "mobile-menu-open" : ""}`}>
            <nav className="menu-box">
              <div className={`close-btn ${mobileMenu ? "rotate" : ""}`} onClick={mobileMenuClose}>
                <i className="fas fa-times"></i>
              </div>

              <div className="menu-outer">
                <ul className="navigation">
                  <li style={{ marginTop: `${home ? "0px" : "60px"}`, zIndex: `${home ? "999" : ""}`, transition: "0.3s linear" }}>
                    <Link to="/">Home</Link>
                  </li>
                  <li className="">
                    <Link to="/about">About</Link>
                  </li>
                  <li className="">
                    <Link to="/services">Services</Link>
                  </li>
                  <li
                    style={{ marginTop: `${service ? "0px" : "0px"}`, zIndex: `${service ? "0" : "999"}`, transition: "0.3s linear" }}>
                    <Link to="/team">Team</Link>
                  </li>
                  <li style={{ marginTop: `${blog ? "0px" : "0px"}`, zIndex: "99999", transition: "0.3s linear" }}>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
              <div className="contact-info" style={{ backgroundColor: "white", zIndex: "99999" }}>
                <div className="icon-box">
                  <span className="icon-telephone-handle-silhouette"></span>
                </div>
                <p><Link href="tel:123456789">(629) 555-0129</Link></p>
              </div>
              <div className="social-links" style={{ backgroundColor: "white", zIndex: "99999" }}>
                <ul className="clearfix list-wrap" style={{ backgroundColor: "white", zIndex: "99999" }}>
                  <li><Link href="#"><i className="fab fa-facebook-f"></i></Link></li>
                  <li><Link href="#"><i className="fab fa-twitter"></i></Link></li>
                  <li><Link href="#"><i className="fab fa-instagram"></i></Link></li>
                  <li><Link href="#"><i className="fab fa-linkedin-in"></i></Link></li>
                  <li><Link href="#"><i className="fab fa-youtube"></i></Link></li>
                </ul>
              </div>
            </nav>
          </div>
          <div className={`${mobileMenu ? "menu-backdrop" : ""}`} onClick={mobileMenuClose}></div>
          {isOverlayActive && <div className="overlay" onClick={mobileMenuClose}></div>}

          {/* Search Popup */}
          <div className={`search-popup ${isActive ? 'active' : ''}`} id="home-two">
            <div className="search-popup__overlay search-toggler" onClick={togglePopup}>
              <div className="search-popup__close-icon">
                <span className="icon-plus"></span>
              </div>
            </div>
            <div className="search-popup__content">
              <form action="#">
                <label htmlFor="search" className="sr-only">Search here</label>
                <input type="text" id="search" placeholder="Search Here..." />
                <button type="submit" aria-label="search submit" className="btn-box">
                  <i className="icon-magnifying-glass"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
