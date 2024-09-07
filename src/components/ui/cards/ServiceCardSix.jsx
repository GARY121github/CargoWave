import React from "react";

const ServiceCardSix = ({ item }) => {
    return (
        <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="services-three__single">
                <div className="services-three__single-img">
                    <div className="inner">
                        <img src={item?.image} alt="" />
                        <div className="icon-box">
                            <span className={item?.icon}></span>
                        </div>
                    </div>
                </div>
                <div className="services-three__single-content">
                    <div className="services-three__single-content-inner">
                        <h2>
                            <a href={item?.link}>{item?.title}</a> {/* Use <Link> if using React Router */}
                        </h2>
                        <p>{item?.description}</p>
                        <div className="count-box">{item?.count}</div>
                        <div className="btn-box">
                            <a href={item?.link}>
                                Read More <i className="icon-right-arrow-5"></i>
                            </a>
                            <div className="number-box">{item?.count}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCardSix;
