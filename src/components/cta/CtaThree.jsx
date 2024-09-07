import React from 'react';
import { Link } from 'react-router-dom';

const CtaThree = () => {
    return (
        <section className="cta-two style3 style4">
            <div className="container">
                <div className="cta-two__inner">
                    <div className="shape1">
                        <img src="/img/shape/cta-v3-shape1.png" alt="Shape 1" />
                    </div>
                    <div className="shape2">
                        <img src="/img/shape/cta-v3-shape2.png" alt="Shape 2" />
                    </div>
                    <div className="shape3 float-bob-x">
                        <img src="/img/shape/cta-v3-shape3.png" alt="Shape 3" />
                    </div>
                    <div className="cta-two__inner-box">
                        <div className="sec-title-style3">
                            <div className="sub-title">
                                <div className="icon">
                                    <img src="/img/icon/title-marker-3.png" alt="Title Marker" />
                                </div>
                                <h5>Get in touch</h5>
                            </div>
                            <h2>
                                Looking for the best logistics <br />
                                transport services
                            </h2>
                        </div>

                        <div className="btn-box">
                            <Link className="thm-btn" to="/contact">
                                <span className="txt">Request a Quote</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CtaThree;
