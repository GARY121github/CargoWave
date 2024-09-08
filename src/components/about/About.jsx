import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "wowjs/css/libs/animate.css";
import CircleText from '../ui/circle/CircleText';

const About = () => {
    const [popup, setPopup] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [AnimatedNumbers, setAnimatedNumbers] = useState(null);

    useEffect(() => {
        import('wowjs').then(WOW => {
            const wow = new WOW.WOW();
            wow.init();
        });
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById("about-two");
            if (section) {
                const rect = section.getBoundingClientRect();
                const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;
                setIsVisible(isVisible);
            }
        };
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        const fetchComponent = async () => {
            const module = await import("react-animated-numbers");
            setAnimatedNumbers(() => module.default);
        };
        fetchComponent();
    }, []);

    const openPopup = () => {
        setPopup(true);
        setIsActive(true);
        document.body.classList.add('disable-scroll');
    };

    const closePopup = () => {
        setPopup(false);
        setIsActive(false);
        document.body.classList.remove('disable-scroll');
    };

    return (
        <section className="about-two padding" id="about-two">
            <div className="shape1 float-bob-x">
                <img src="/img/shape/about-v2-shape1.png" alt="" />
            </div>
            <div className="container">
                <div className="row">
                    {/* Start About Two Img */}
                    <div className="col-xl-6">
                        <div className="about-two__img">
                            <div
                                className="about-two__experience-box text-center wow fadeInLeft"
                                data-wow-delay={"0ms"}
                                data-wow-duration={"1500ms"}
                            >
                                <div
                                    className="about-two__experience-box-bg"
                                    style={{
                                        backgroundImage: "url(/img/about/about-v2-img2-.jpg)"
                                    }}
                                ></div>
                                <div className="inner">
                                    <h2 className="count d-flex text-center">
                                        <span className="odometer" data-count="30" style={{ marginLeft: "15px" }}>
                                            {isVisible && AnimatedNumbers && <AnimatedNumbers
                                                animateToNumber={30}
                                                transitions={(index) => ({
                                                    type: "spring",
                                                    duration: index + 0.8,
                                                })}
                                            />}
                                        </span>
                                        <span className="plus">+</span>
                                    </h2>
                                    <div className="text">
                                        <p>
                                            Year of <br />
                                            Experience
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="about-two__img1">
                                <img src="/img/about/about-v2-img1.jpg" alt="" />
                            </div>

                            <div
                                className="about-two__video wow fadeInRight"
                                data-wow-delay={"0ms"}
                                data-wow-duration={"1500ms"}
                            >
                                <div
                                    className="about-two__video-bg"
                                    style={{
                                        backgroundImage: "url(/img/about/about-v2-img3-.jpg)"
                                    }}
                                ></div>
                                <div className="about-two__video-box">
                                    <div className="round-text">
                                        <CircleText />
                                    </div>
                                    <a
                                        className="about-two__video-icon video-popup"
                                        onClick={openPopup}
                                        style={{ zIndex: "9999999" }}
                                    >
                                        <span className="icon-play-button-arrowhead"></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="about-two__content">
                            <div className="sec-title-two">
                                <div className="sub-title">
                                    <h5>About Company</h5>
                                </div>
                                <h2>
                                    Digital & Trusted Transport <br />
                                    Logistic Company
                                </h2>
                            </div>

                            {/* <div className="about-two__content-text">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                    do eiusmod of tempor incididunt ut labore et dolore magna
                                    aliqua. Quis ipsum suspend ultrices gravida risus commodo
                                    viverra maecenas.
                                </p>
                            </div> */}

                            <div className="about-two__content-list">
                                <ul>
                                    <li>
                                        <div className="icon-box">
                                            <span className="icon-check-marked-1"></span>
                                        </div>
                                        <p>Day-to-day fleet management</p>
                                    </li>

                                    <li>
                                        <div className="icon-box">
                                            <span className="icon-check-marked-1"></span>
                                        </div>
                                        <p>Day-to-day fleet management</p>
                                    </li>
                                </ul>
                            </div>

                            <div className="about-two__content-bottom">
                                <div className="btn-box">
                                    <Link className="thm-btn" to="/about">
                                        <span className="txt">Read More</span>
                                        <i className="icon-right-arrow"></i>
                                    </Link>
                                </div>
                                <div className="author-box">
                                    <div className="img-box">
                                        <img src="/img/about/about-v2-img4-.jpg" alt="" />
                                    </div>

                                    <div className="text-box">
                                        <h3>Rebecca Tylor</h3>
                                        <p>CEO - Founder</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className={`popup-video ${popup ? "popup" : "popdown"}`}
                onClick={closePopup}
            >
                <div className={`video-wrapper ${isActive ? 'active' : ''}`}>
                    <iframe
                        id="youtube-video"
                        className="video"
                        width="100%"
                        height="100%"
                        src={popup ? "https://www.youtube.com/embed/6mkoGSqTqFI?si=2kJDQsAvj9HLTUCe" : ""}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                    <button className="mfp-close" onClick={closePopup}>×</button>
                </div>
            </div>
        </section>
    );
}

export default About;
