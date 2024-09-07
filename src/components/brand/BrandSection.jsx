import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";

const BrandSection = () => {
    return (
        <section className="brand-one brand-one--two padding">
            <div className="big-title-box">partnerpartner</div>
            <div className="container">
                <Swiper
                    spaceBetween={30}
                    loop={true}
                    slidesPerView={5}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    className="thm-swiper__slider swiper-container mySwiper"
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 30,
                        },
                        375: {
                            slidesPerView: 1,
                            spaceBetween: 30,
                        },
                        575: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        767: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        991: {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        },
                        1199: {
                            slidesPerView: 5,
                            spaceBetween: 30,
                        },
                    }}
                >
                    <SwiperSlide className="swiper-slide">
                        <div className="img-box">
                            <img src="/img/brand/brand-v2-img1.png" alt="Brand 1" />
                        </div>
                        <div className="img-box2">
                            <img src="/img/brand/brand-v2-img1.png" alt="Brand 1" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="img-box">
                            <img src="/img/brand/brand-v2-img2.png" alt="Brand 2" />
                        </div>
                        <div className="img-box2">
                            <img src="/img/brand/brand-v2-img2.png" alt="Brand 2" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="img-box">
                            <img src="/img/brand/brand-v2-img3.png" alt="Brand 3" />
                        </div>
                        <div className="img-box2">
                            <img src="/img/brand/brand-v2-img3.png" alt="Brand 3" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="img-box">
                            <img src="/img/brand/brand-v2-img4.png" alt="Brand 4" />
                        </div>
                        <div className="img-box2">
                            <img src="/img/brand/brand-v2-img4.png" alt="Brand 4" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="img-box">
                            <img src="/img/brand/brand-v2-img5.png" alt="Brand 5" />
                        </div>
                        <div className="img-box2">
                            <img src="/img/brand/brand-v2-img5.png" alt="Brand 5" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="img-box">
                            <img src="/img/brand/brand-v2-img3.png" alt="Brand 3" />
                        </div>
                        <div className="img-box2">
                            <img src="/img/brand/brand-v2-img3.png" alt="Brand 3" />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default BrandSection;
