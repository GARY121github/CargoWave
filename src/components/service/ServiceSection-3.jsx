import React, { useEffect, useState } from "react";
import ServiceCardSix from "../ui/cards/ServiceCardSix";

const Services3 = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("./db/serviceDataSix.json")
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <section className="services-three services-three--services padding">
            <div className="container">
                <div className="services-three--services__top">
                    <div className="title-box">
                        <h2>We Provide all Kinds of <br /> Logistics Service</h2>
                    </div>

                    <div className="text-box">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br /> of tempor
                            incididunt ut labore et dolore magna</p>
                    </div>
                </div>
                <div className="row">
                    {data?.map((item, index) => (
                        <ServiceCardSix item={item} key={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services3;
