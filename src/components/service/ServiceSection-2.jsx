// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import required modules from Swiper
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import ServiceCard from "../ui/cards/ServiceCard"; // Adjust path according to your file structure
import { Link } from "react-router-dom"; // Use React Router DOM for navigation
import data from '../../../public/db/serviceFive.json'; // Adjust path as necessary

const ServiceSection2 = () => {
    return (
        <section className="services-three padding">
            <div
                className="services-three__bg"
                style={{ backgroundImage: "url(/img/background/services-v3-bg.jpg)" }}
            ></div>
            <div className="container">
                <div className="services-three__top">
                    <div className="sec-title-style3">
                        <div className="sub-title">
                            <div className="icon">
                                <img src="/img/icon/title-marker.png" alt="Title Marker" />
                            </div>
                            <h5>Our Services</h5>
                        </div>
                        <h2>
                            We Provide all Kinds of <br /> Logistics Service
                        </h2>
                    </div>

                    <div className="btn-box">
                        <Link className="thm-btn" to="/services"> {/* Use 'to' for React Router DOM */}
                            <span className="txt">View All Services</span>
                        </Link>
                    </div>
                </div>

                <Swiper
                    spaceBetween={30}
                    slidesPerView={3}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                    }}
                    pagination={{
                        el: "#services-three__pagination",
                        type: "bullets",
                        clickable: true,
                    }}
                    navigation={{
                        nextEl: "#team-one__swiper-button-next",
                        prevEl: "#team-one__swiper-button-prev",
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="thm-swiper__slider swiper-container mySwiper"
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        375: {
                            slidesPerView: 1,
                        },
                        575: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2
                        },
                        992: {
                            slidesPerView: 3,
                        },
                        1200: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    <div className="swiper-wrapper">
                        {data.map((service) => (
                            <SwiperSlide key={service.id} className="swiper-slide">
                                <ServiceCard service={service} />
                            </SwiperSlide>
                        ))}
                    </div>
                </Swiper>
            </div>
            {/* If we need pagination */}
            <div className="swiper-pagination" id="services-three__pagination"></div>
        </section>
    );
};

export default ServiceSection2;
