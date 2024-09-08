import React from 'react';
import { Link } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';

const FaqSection = () => {
    return (
        <section className="faq-one faq-one--two padding">
            <div className="big-title">
                <h2>faq</h2>
            </div>
            <div
                className="faq-one__bg"
                style={{
                    backgroundImage: "url(/img/resource/faq-v2-bg.jpg)"
                }}
            ></div>
            <div className="container">
                <div className="row">
                    {/* <!-- Start Faq One Faq--> */}
                    <div className="col-xl-6">
                        <div className="faq-one__faq">
                            <div className="sec-title-two">
                                <div className="sub-title">
                                    <h5>FAQ?</h5>
                                </div>
                                <h2>Frequently Asked Questions</h2>
                            </div>

                            <Accordion defaultActiveKey="0" className="accordion-two">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>
                                        <h2>
                                            <span>01.</span> How can I pay for your logistics services?
                                        </h2>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <span>Answer:</span>
                                        <p>
                                            To pay for logistics services, it usually depends on the company and the payment methods they offer. Typically, logistics companies provide several options for payment.
                                        </p>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>
                                        <h2>
                                            <span>02.</span> How can I track my shipments?
                                        </h2>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <span>Answer:</span>
                                        <p>
                                            Tracking your shipments is usually straightforward, and logistics companies provide multiple ways to keep you updated.
                                        </p>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>
                                        <h2>
                                            <span>03.</span> Can I specify a delivery date when ordering?
                                        </h2>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <span>Answer:</span>
                                        <p>
                                            Yes, many logistics companies and online retailers allow customers to specify a preferred delivery date, but it depends on the company and service level.
                                        </p>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>
                                        <h2>
                                            <span>04.</span> Any advice for a first-time shipper?
                                        </h2>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <span>Answer:</span>
                                        <p>
                                            Shipping for the first time can feel overwhelming, but with the right approach, it’s easy to manage.
                                        </p>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>
                    {/* <!-- End Faq One Faq--> */}

                    {/* <!-- Start Faq One Contact Info--> */}
                    <div className="col-xl-6">
                        <div
                            className="faq-one__contact-info wow fadeInRight"
                            data-wow-delay=".3s"
                        >
                            <div className="title-box">
                                <p>Let’s Talk</p>
                                <h3>You need any help? Get free consultation</h3>
                            </div>

                            <div className="faq-one__contact-info-number">
                                <div className="icon">
                                    <span className="icon-call"></span>
                                </div>

                                <div className="text">
                                    <p>Have Any Questions</p>
                                    <h3><a href="tel:123456789">(00) 112 365 489</a></h3>
                                </div>
                            </div>

                            <div className="btn-box">
                                <Link className="thm-btn" to="/contact">
                                    <span className="txt">Contact Us</span>
                                    <i className="icon-right-arrow"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* <!-- End Faq One Contact Info--> */}
                </div>
            </div>
        </section>
    );
};

export default FaqSection;
