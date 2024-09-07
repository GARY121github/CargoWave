/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
// import data from './db/testimonialDataTwo.json'; // Adjust the path as needed
import data from "../../../public/db/testimonialDataTwo.json";
import { Link } from 'react-router-dom'; // Use react-router for routing

export default function Testimonials() {
    const [currentTestimonial, setCurrentTestimonial] = useState(1);

    const handleTestimonialChange = (swiper) => {
        setCurrentTestimonial(swiper.realIndex);
    };

    return (
        <section className="testimonials-two padding">
            <div className="testimonials-two__bg" style={{ backgroundImage: "url(/img/background/testimonials-v2-bg.jpg)" }}></div>
            <div className="container">
                <div className="sec-title-two">
                    <div className="sub-title">
                        <h5>Testimonials</h5>
                    </div>
                    <h2>What Our Customers Say</h2>
                </div>
                <Swiper
                    className="testimonials-two__slider"
                    loop={true}
                    navigation={{
                        nextEl: "#testimonials-two__swiper-button-next",
                        prevEl: "#testimonials-two__swiper-button-prev"
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    autoplay={{ delay: 5000 }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1200: {
                            slidesPerView: 3,
                        },
                    }}
                    slidesPerView={1}
                    spaceBetween={30}
                    onSlideChange={(swiper) => handleTestimonialChange(swiper)}
                >
                    {data.map((testimonial, index) => (
                        <SwiperSlide key={index}>
                            <div className="testimonials-two__single">
                                <div className="quote-icon">
                                    <span className="icon-quote11"></span>
                                </div>
                                <div className="testimonials-two__single-top">
                                    <div className="img-box">
                                        <img src={testimonial.image} alt="" />
                                    </div>
                                    <div className="text-box">
                                        <p>Satisfied Customer</p>
                                        <h3>{testimonial.name}</h3>
                                    </div>
                                </div>

                                <div className="testimonials-two__single-bottom">
                                    <div className="rating-box">
                                        {[...Array(5)].map((_, index) => (
                                            <Link to="#" key={index}><i className="icon-star"></i></Link>
                                        ))}
                                    </div>
                                    <div className="content-box">
                                        <h3>{testimonial.service}</h3>
                                        <p>{testimonial.content}</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="testimonials-two__wrap">
                    <div className="swiper-counter">
                        <div id="current3">{currentTestimonial + 1}</div>
                        <div id="total3">{data?.length}</div>
                    </div>
                </div>

                <div className="swiper-nav-style1">
                    <div className="swiper-button-prev" style={{ marginRight: "19px" }} id="testimonials-two__swiper-button-prev">
                        <i className="icon-left-arrow-5" aria-hidden="true"></i>
                    </div>
                    <div className="swiper-button-next" id="testimonials-two__swiper-button-next">
                        <i className="icon-right-arrow-5" aria-hidden="true"></i>
                    </div>
                </div>
            </div>

            <div className="brand-one padding margin-top">
                <div className="shape1 float-bob-x">
                    <img src="/img/shape/brand-v1-shape1.png" alt="" />
                </div>
                <div className="big-title">partner</div>
            </div>
        </section>
    );
}
