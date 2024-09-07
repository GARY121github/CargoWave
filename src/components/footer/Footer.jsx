// Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ScrollToTop from 'react-scroll-to-top';
import BrandLogo from '../ui/logo/BrandLogo'; 
import "../../assets/css/color-1.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-one footer-one--two">
      <ScrollToTop
        smooth
        top="80"
        color="white"
        style={{
          backgroundColor: "#FFD550",
          "&:hover": { backgroundColor: "#186265" }
        }}
      />
      <div
        className="footer-one__bg"
        style={{ backgroundImage: "url(/img/footer/footer-v2-bg.jpg)" }}
      ></div>
      <div className="shape1 float-bob-y">
        <img src="/img/shape/footer-v2-shape1.png" alt="Decoration Shape 1" />
      </div>
      <div className="shape2 float-bob-y">
        <img src="/img/shape/footer-v2-shape2.png" alt="Decoration Shape 2" />
      </div>
      <div className="footer-main">
        <div className="container">
          <div className="footer-main__bottom">
            <div className="row">
              {/* About Section */}
              <div
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay=".1s"
              >
                <div className="single-footer-widget footer-widget__about">
                  <div className="logo-box">
                    <Link to="/">
                      <BrandLogo imageSrc="/img/resource/logo-3.png" />
                    </Link>
                  </div>
                  <div className="footer-widget__about-inner">
                    <p className="text1">
                      Duis aute irure dolor in reprehenderit in voluptate
                      velit esse cillum dolore eu fugiat nulla pariatur.
                      Excepteur
                    </p>
                    <p className="text2">We are available</p>
                    <p className="text3">Mon-Sat: 10:00am to 07:30pm</p>

                    <div className="footer-social-link">
                      <Link to="#"><span className="icon-facebook"></span></Link>
                      <Link to="#"><span className="icon-twitter"></span></Link>
                      <Link to="#"><span className="icon-instagram"></span></Link>
                      <Link to="#"><span className="icon-linkedin"></span></Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Links Section */}
              <div
                className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="single-footer-widget footer-widget__links">
                  <div className="title">
                    <h2>Quick Links</h2>
                  </div>

                  <div className="footer-widget__links-box">
                    <ul>
                      <li><Link to="/about">Mission & Vision</Link></li>
                      <li><Link to="/pricing">Get Pricing Plan</Link></li>
                      <li><Link to="/team">Meet The Team</Link></li>
                      <li><Link to="/clients">Our Clients</Link></li>
                      <li><Link to="/careers">Available Positions</Link></li>
                      <li><Link to="/jobs">Job Application</Link></li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Our Services Section */}
              <div
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="single-footer-widget footer-widget__links services">
                  <div className="title">
                    <h2>Our Services</h2>
                  </div>

                  <div className="footer-widget__links-box">
                    <ul>
                      <li><Link to="/services/air-freight">Air Freight</Link></li>
                      <li><Link to="/services/ocean-freight">Ocean Freight</Link></li>
                      <li><Link to="/services/railway-freight">Railway Freight</Link></li>
                      <li><Link to="/services/warehousing">Warehousing</Link></li>
                      <li><Link to="/services/packaging">Packaging</Link></li>
                      <li><Link to="/services/distribution">Distribution</Link></li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Newsletter Section */}
              <div
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div className="single-footer-widget single-footer__newsletter">
                  <div className="title">
                    <h2>Newsletter</h2>
                  </div>
                  <div className="single-footer__newsletter-box">
                    <div className="single-footer__newsletter-text1">
                      <p>
                        Subscribe to our weekly newsletter to <br />
                        get information.
                      </p>
                    </div>
                    <form className="single-footer__newsletter-form">
                      <div className="single-footer__newsletter-form-input">
                        <input
                          type="email"
                          placeholder="Enter Your Email"
                          name="email"
                        />
                      </div>

                      <div className="single-footer__newsletter-btn">
                        <button className="thm-btn" type="submit">
                          <span className="txt">Subscribe Now</span>
                          <i className="icon-right-arrow"></i>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom__inner">
            <div className="copyright-text">
              <p>
                © {currentYear} <Link to="/">Translo,</Link> All Rights Reserved.
              </p>
            </div>
            <div className="copyright-menu">
              <ul>
                <li><Link to="/terms">Terms &amp; Conditions</Link></li>
                <li><Link to="/privacy">Privacy Policy</Link></li>
                <li><Link to="/support">Support</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
