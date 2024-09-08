import React, { useState } from "react";
import { Link } from "react-router-dom";
import BrochureCard from "../ui/cards/BrochureCard";
import QuestionCard from "../ui/cards/QuestionCard";

const ServiceDetails = ({ title, transportType, thumbnailOne, thumbnailTwo }) => {
    const [popup, setPopup] = useState(false);

    const openPopup = () => {
        setPopup(true);
        document.body.classList.add('disable-scroll');
    };

    const closePopup = () => {
        setPopup(false);
        document.body.classList.remove('disable-scroll');
    };

    return (
        <section className="services-details-page padding" id="blog-cta">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8">
                        <div className="services-details-page__content">
                            <div className="services-details-page__content-img1">
                                <img src={thumbnailOne} alt="Service Thumbnail" />
                            </div>

                            <div className="services-details-page__content-text1">
                                <div className="top-text">
                                    <div className="icon">
                                        {(() => {
                                            switch (transportType) {
                                                case "road": return <span className="icon-road-transport mt"></span>;
                                                default: return <span className="icon-road-transport mt"></span>;
                                            }
                                        })()}
                                    </div>

                                    <div className="title">
                                        <h2>{title}</h2>
                                    </div>
                                </div>
                                <p>
                                    It is a long established fact that a reader will be distracted
                                    by the readable content of a page when looking at its layout.
                                    The point of using Lorem Ipsum is that it has a more-or-less
                                    normal distribution of letters, as opposed to using 'Content
                                    here, content here', making it look like readable English.
                                    packages and web page editors now use Lorem Ipsum as their
                                    default model.
                                </p>

                                <p>
                                    Packages and web page editors now use Lorem Ipsum as their
                                    default model textlayout. The point of using are Ipsum is that
                                    it has a more-or-less normal distribution of letters, as
                                    opposed to using 'Content here content normal distribution of
                                    letters as opposed to here making readable making.
                                </p>
                            </div>

                            <div className="services-details-page__content-text2">
                                <div className="title-box">
                                    <h2>Benefit of Service</h2>
                                    <p>
                                        Readable and Packages editors now use Lorem Ipsum as their
                                        default model textlayout. The point of using the some is
                                        that it has a more-or-less normal distribution of letters as
                                        opposed to using.
                                    </p>
                                </div>

                                <div className="row">
                                    {["Packages and Web Page Editors", "Professional and Dedicated Team", "Trusted Construction Agency"].map((text, index) => (
                                        <div className="col-xl-4 col-lg-4 col-md-4" key={index}>
                                            <div className="services-details-page__content-text2-single text-center">
                                                <div className="icon-box">
                                                    <span className="icon-checked-2"></span>
                                                </div>
                                                <div className="text">
                                                    <h4>{text}</h4>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="services-details-page__content-text3">
                                <div className="title-box">
                                    <h2>How it Works</h2>
                                    <p>
                                        Readable and Packages editors now use Lorem Ipsum as their
                                        default model textlayout. The point of using the some is
                                        that it has a more-or-less normal distribution of letters as
                                        opposed to using.
                                    </p>
                                </div>

                                {/* <div className="services-details-page__content-text3-img">
                                    <div className="shape1">
                                        <img src="/img/shape/services-details-shape1.png" alt="Shape" />
                                    </div>
                                    <div className="inner">
                                        <img src={thumbnailTwo} alt="Service Thumbnail Two" />
                                        <div className="services-details-page__content-text3-img-video">
                                            <button className="video-btn video-popup" onClick={openPopup}>
                                                <span className="txt">Play</span>
                                            </button>
                                        </div>
                                    </div>
                                </div> */}
                            </div>

                            {/* <div className="services-details-page__pagination margin-top">
                                <div className="single-box">
                                    <div className="icon-box">
                                        <span className="icon-air-transport"></span>
                                    </div>
                                    <div className="text-box">
                                        <p>
                                            <Link to="/air-transport">
                                                <span className="icon-up-right-arrow"></span> Previous
                                            </Link>
                                        </p>
                                        <h2>
                                            <Link to="/air-transport">Air Transport</Link>
                                        </h2>
                                    </div>
                                </div>

                                <div className="single-box style2">
                                    <div className="text-box">
                                        <p>
                                            <Link to="/ocean-freight">
                                                Next <span className="icon-up-right-arrow"></span>
                                            </Link>
                                        </p>
                                        <h2>
                                            <Link to="/ocean-freight">Ocean Transport</Link>
                                        </h2>
                                    </div>
                                    <div className="icon-box">
                                        <span className="icon-ocean-freight1 fs"></span>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>

                    <div className="col-xl-4">
                        <div className="sidebar">
                            <div className="sidebar__single sidebar__search wow fadeInUp" data-wow-delay=".1s">
                                <div className="title-box">
                                    <h2>Search</h2>
                                </div>
                                <form action="#" className="sidebar__search-form">
                                    <input type="search" placeholder="Search Here..." />
                                    <button type="submit">
                                        <i className="icon-magnifying-glass"></i>
                                    </button>
                                </form>
                            </div>

                            <div className="sidebar__single sidebar__services wow fadeInUp" data-wow-delay=".2s">
                                <div className="title-box">
                                    <h2>Services List</h2>
                                </div>
                                <ul className="sidebar__services-list">
                                    {["road", "air", "cargo", "ocean", "rail", "warehousing"].map((type) => (
                                        <li key={type}>
                                            <Link className={transportType === type ? "active" : ""} to={`/${type}-transport`}>
                                                {`${type.charAt(0).toUpperCase() + type.slice(1)} Transport`}
                                                <span className="icon-right-arrow-5"></span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <BrochureCard />
                            <QuestionCard />
                        </div>
                    </div>
                </div>
            </div>

            {popup && (
                <div className="popup-video popup" onClick={closePopup}>
                    <div className="video-wrapper active">
                        <iframe
                            id="youtube-video"
                            className="video"
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/6mkoGSqTqFI?si=2kJDQsAvj9HLTUCe"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                        <button className="mfp-close" onClick={closePopup}>×</button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default ServiceDetails;
