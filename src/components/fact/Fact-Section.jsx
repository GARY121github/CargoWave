import React, { useEffect, useState } from "react";

const FactSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [AnimatedNumbers, setAnimatedNumbers] = useState(null);

    // Effect to handle visibility based on scroll position
    useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById("fact-area");
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

    // Effect to dynamically import AnimatedNumbers component only on the client side
    useEffect(() => {
        const fetchComponent = async () => {
            const module = await import("react-animated-numbers");
            setAnimatedNumbers(() => module.default);
        };
        fetchComponent();
    }, []);

    // JSX rendering
    return (
        <section className="fact-counter-two fact-counter-two--about" id="fact-area">
            <div className="container">
                <div className="row">
                    {/* Parcels Shipped Safely */}
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                        <div className="fact-counter-two__single">
                            <div className="icon-box">
                                <span className="icon-special-shipments"></span>
                                <div className="shape2">
                                    <img src="/img/shape/fact-counter-v2-shape1.png" alt="Decoration" />
                                </div>
                            </div>
                            <div className="fact-counter-two__single-inner">
                                <h2 className="count d-flex justify-content-center">
                                    <span className="plus">+</span>
                                    <span className="odometer fw-bolder">
                                        {isVisible && AnimatedNumbers && (
                                            <AnimatedNumbers
                                                animateToNumber={250000}
                                                transitions={(index) => ({
                                                    type: "spring",
                                                    duration: index + 0.3,
                                                })}
                                            />
                                        )}
                                    </span>
                                </h2>
                                <div className="text">
                                    <p>Parcels Shipped Safely</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Cities Served Worldwide */}
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInDown" data-wow-delay=".3s">
                        <div className="fact-counter-two__single">
                            <div className="icon-box">
                                <span className="icon-global-network"></span>
                                <div className="shape2">
                                    <img src="/img/shape/fact-counter-v2-shape1.png" alt="Decoration" />
                                </div>
                            </div>
                            <div className="fact-counter-two__single-inner">
                                <h2 className="count d-flex justify-content-center">
                                    <span className="plus">+</span>
                                    <span className="odometer fw-bolder">
                                        {isVisible && AnimatedNumbers && (
                                            <AnimatedNumbers
                                                animateToNumber={95000}
                                                transitions={(index) => ({
                                                    type: "spring",
                                                    duration: index + 0.3,
                                                })}
                                            />
                                        )}
                                    </span>
                                </h2>
                                <div className="text">
                                    <p>Cities Served Worldwide</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Satisfied Clients */}
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                        <div className="fact-counter-two__single">
                            <div className="icon-box">
                                <span className="icon-satisfied3"></span>
                                <div className="shape2">
                                    <img src="/img/shape/fact-counter-v2-shape1.png" alt="Decoration" />
                                </div>
                            </div>
                            <div className="fact-counter-two__single-inner">
                                <h2 className="count d-flex justify-content-center">
                                    <span className="plus">+</span>
                                    <span className="odometer fw-bolder">
                                        {isVisible && AnimatedNumbers && (
                                            <AnimatedNumbers
                                                animateToNumber={2560}
                                                transitions={(index) => ({
                                                    type: "spring",
                                                    duration: index + 0.3,
                                                })}
                                            />
                                        )}
                                    </span>
                                </h2>
                                <div className="text">
                                    <p>Satisfied Clients</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Companies We Help */}
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInDown" data-wow-delay=".3s">
                        <div className="fact-counter-two__single">
                            <div className="icon-box">
                                <span className="icon-support"></span>
                                <div className="shape2">
                                    <img src="/img/shape/fact-counter-v2-shape1.png" alt="Decoration" />
                                </div>
                            </div>
                            <div className="fact-counter-two__single-inner">
                                <h2 className="count d-flex justify-content-center">
                                    <span className="plus">+</span>
                                    <span className="odometer fw-bolder">
                                        {isVisible && AnimatedNumbers && (
                                            <AnimatedNumbers
                                                animateToNumber={1200}
                                                transitions={(index) => ({
                                                    type: "spring",
                                                    duration: index + 0.3,
                                                })}
                                            />
                                        )}
                                    </span>
                                </h2>
                                <div className="text">
                                    <p>Company We Help</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FactSection;
