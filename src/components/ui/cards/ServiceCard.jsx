import { Link } from "react-router-dom"; // Use React Router DOM for navigation

const ServiceCard = ({ service }) => {
    return (
        <div className="services-three__single">
            <div className="services-three__single-img">
                <div className="inner">
                    <img src={service.image} alt={service.title} /> {/* Added alt text for better accessibility */}
                    <div className="icon-box">
                        <span className={service.iconClass}></span>
                    </div>
                </div>
            </div>

            <div className="services-three__single-content">
                <div className="services-three__single-content-inner">
                    <h2>
                        <Link to={service.link}>{service.title}</Link> {/* Use 'to' prop with React Router DOM's Link */}
                    </h2>
                    <p>{service.description}</p>
                    <div className="count-box">{service.count}</div>
                    <div className="btn-box">
                        <Link to={service.link}>
                            Read More <i className="icon-right-arrow-5"></i>
                        </Link>
                        <div className="number-box">{service.number}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
