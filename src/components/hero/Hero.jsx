import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import { useState } from "react";
import data from "../../../public/db/heroSliderDataTwo.json";

const Hero = () => {
    const [cde, setCurrentSlide] = useState(0);
    const [slides, setSlides] = useState([]);
    const [swiperRef, setSwiperRef] = useState(data);

    const handleSlideChange = (swiper) => {
        setCurrentSlide(swiper.realIndex);
    };

    return (
        <section className="main-slider main-slider-two">
            <Swiper
                className="swiper-container thm-swiper__slider"
                slidesPerView={1}
                loop={true}
                effect={"fade"}
                pagination={{
                    el: "#main-slider-pagination",
                    type: "bullets",
                    clickable: true,
                }}
                navigation={{
                    nextEl: "#main-slider-two__swiper-button-prev",
                    prevEl: "#main-slider-two__swiper-button-next",
                }}
                autoplay={{
                    delay: 7000,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                onSwiper={setSwiperRef}
                onSlideChange={(swiper) => handleSlideChange(swiper)}
            >
                <div className="swiper-wrapper">
                    {slides.map((slide, index) => (
                        <SwiperSlide className="swiper-slide" key={index}>
                            <div
                                className="image-layer"
                                style={{ backgroundImage: `url(${slide.imageUrl})` }}
                            ></div>
                            <div className="shape1">
                                <img src="/img/shape/slider-v2-shape1.png" alt="" />
                            </div>
                            <div className="shape2">
                                <img src="/img/shape/slider-v2-shape2.png" alt="" />
                            </div>
                            <div className="shape3">
                                <img src="/img/shape/slider-v2-shape3.png" alt="" />
                            </div>
                            <div className="shape4">
                                <img
                                    className="float-bob-x"
                                    src="/img/shape/slider-v2-shape4.png"
                                    alt=""
                                />
                            </div>
                            <div className="big-title">
                                <h2>Translo</h2>
                            </div>
                            <div className="container">
                                <div className="main-slider-two__single padding">
                                    <div className="main-slider-two__content">
                                        <div className="sub-title">
                                            <p>Logistics & Supply Chain Solutions</p>
                                        </div>
                                        <div className="title">
                                            <h2>
                                                Fast and Safety <br />
                                                Worldwide Service <br />
                                                <span>Provider</span>
                                            </h2>
                                        </div>
                                        <div className="text">
                                            <p>
                                                With more than 30 years of experience in the logistics
                                                industry <br />
                                                bibendum auctor nisi elit more consequat ipsum.
                                            </p>
                                        </div>
                                        <div className="btn-box">
                                            <Link className="thm-btn" to="#">
                                                <span className="txt">Calculate Package</span>
                                                <i className="icon-right-arrow"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </div>
                <div className="main-slider-two__wrap">
                    <div className="swiper-counter">
                        <div id="current">{cde + 1}</div>
                        <div id="total">{slides.length}</div>
                    </div>
                </div>
                <div className="swiper-nav-style1" style={{ justifyContent: "center" }}>
                    <div
                        className="swiper-button-prev"
                        id="main-slider-two__swiper-button-next"
                    >
                        <i className="icon-left-arrow-5" aria-hidden="true"></i>
                    </div>
                    <div
                        className="swiper-button-next"
                        id="main-slider-two__swiper-button-prev"
                        style={{ marginRight: "-20px" }}
                    >
                        <i className="icon-right-arrow-5" aria-hidden="true"></i>
                    </div>
                </div>
            </Swiper>
        </section>
    );
};

export default Hero;
