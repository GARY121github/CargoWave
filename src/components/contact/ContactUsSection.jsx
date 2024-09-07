import React from 'react';
import { Link } from 'react-router-dom';

const ContactUsSection = () => {
    return (
        <section className="contact-page padding">
            <div className="shape1 float-bob-y">
                <img src="/img/shape/contact-page-shape1.png" alt="" />
            </div>
            <div className="shape2 float-bob-y">
                <img src="/img/shape/contact-page-shape2.png" alt="" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-5">
                        <div className="contact-page__contact-info">
                            <div className="sec-title-style3">
                                <div className="sub-title">
                                    <div className="icon">
                                        <img src="/img/icon/title-marker-4.png" alt="" />
                                    </div>
                                    <h5>Get In Touch</h5>
                                </div>
                                <h2>Contact Us Today</h2>
                            </div>

                            <ul>
                                <li>
                                    <div className="icon-box">
                                        <span className="icon-telephone-call"></span>
                                    </div>

                                    <div className="text-box">
                                        <p>Call Us Toll Free</p>
                                        <h2><a href="tel:123456789">+123 556 8824</a></h2>
                                    </div>
                                </li>

                                <li>
                                    <div className="icon-box">
                                        <span className="icon-location"></span>
                                    </div>

                                    <div className="text-box">
                                        <p>London Office</p>
                                        <h2>4517 Washington Ave. <br /> Manchester</h2>
                                    </div>
                                </li>

                                <li>
                                    <div className="icon-box">
                                        <span className="icon-email"></span>
                                    </div>

                                    <div className="text-box">
                                        <p>Email Us</p>
                                        <h2><a href="mailto:yourmail@email.com">translo@Support.com</a></h2>
                                    </div>
                                </li>

                                <li>
                                    <div className="icon-box">
                                        <span className="icon-time"></span>
                                    </div>

                                    <div className="text-box">
                                        <p>Opening Time</p>
                                        <h2>Thursday - Saturday <br />
                                            10am : 08pm</h2>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-xl-7">
                        <div className="contact-page__form-box">
                            <div className="title">
                                <h2>Feel free to write Us</h2>
                            </div>

                            <form id="contact-form" action="/inc/mail.php" method="POST">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                        <div className="contact-page__input-box">
                                            <input type="text" placeholder="Full Name" name="name" required />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                        <div className="contact-page__input-box">
                                            <input type="email" placeholder="Email" name="email" required />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                        <div className="contact-page__input-box">
                                            <input type="number" placeholder="Mobile" name="number" />
                                        </div>
                                    </div>

                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                        <div className="contact-page__input-box">
                                            <input type="text" placeholder="Company" name="company" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                        <div className="contact-page__input-box">
                                            <textarea name="message" placeholder="Message"></textarea>
                                        </div>
                                        <div className="contact-page__btn">
                                            <button type="submit" className="thm-btn" data-loading-text="Please wait...">
                                                <span className="txt">Send Message</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <p className="ajax-response mb-0"></p>

                            <div className="contact-page__form-box-text">
                                <p><span>Notes:</span> Packages and web page editors now use Lorem Ipsum as their default
                                    model text layout.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUsSection;
