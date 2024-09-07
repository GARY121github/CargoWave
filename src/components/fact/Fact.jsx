import React, { useEffect, useState } from "react";

const Fact = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [AnimatedNumbers, setAnimatedNumbers] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById("fact-counter");
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

    return (
        <section className="fact-counter-two padding-bottom" id="fact-counter">
            <div className="shape1 float-bob-y">
                <img src="/img/shape/counter-v2-shape1.png" alt="Decorative shape" />
            </div>
            <div className="container">
                <div className="row">
                    {[
                        { count: 250000, text: "Parcels Shipped Safely", icon: "icon-special-shipments" },
                        { count: 95000, text: "Cities Served Worldwide", icon: "icon-global-network" },
                        { count: 2560, text: "Satisfied Clients", icon: "icon-satisfied3" },
                        { count: 1200, text: "Company We Help", icon: "icon-support" },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className={`col-xl-3 col-lg-6 col-md-6 wow fadeIn${index % 2 === 0 ? 'Up' : 'Down'}`}
                            data-wow-delay=".3s"
                        >
                            <div className="fact-counter-two__single">
                                <div className="icon-box">
                                    <span className={item.icon}></span>
                                </div>
                                <div className="fact-counter-two__single-inner">
                                    <h2 className="count d-flex">
                                        <span className="plus">+</span>
                                        <span className="odometer" data-count={item.count}>
                                            {isVisible && AnimatedNumbers && (
                                                <AnimatedNumbers
                                                    animateToNumber={item.count}
                                                    transitions={(index) => ({
                                                        type: "spring",
                                                        duration: index + 0.3,
                                                    })}
                                                />
                                            )}
                                        </span>
                                    </h2>
                                    <div className="text">
                                        <p>{item.text}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Fact;
