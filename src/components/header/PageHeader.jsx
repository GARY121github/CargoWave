// Import necessary modules from React and React Router DOM
import React from 'react';
import { Link } from 'react-router-dom';

// Define the PageHeader component with title and background image as props
const PageHeader = ({ title, bgImage = "/img/background/page-header-bg.jpg" }) => {
    return (
        <section className="page-header padding">
            {/* Background image for the header */}
            <div
                className="page-header__bg"
                style={{ backgroundImage: `url(${bgImage})` }}
            ></div>
            <div className="container">
                <div className="page-header__inner text-center">
                    {/* Display the title */}
                    <h2>{title}</h2>
                    <ul className="thm-breadcrumb">
                        <li>
                            {/* Replace Next.js Link with React Router DOM Link */}
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <span className="icon-right-arrow-5"></span>
                        </li>
                        {/* Display the title and add additional text if it's a 404 page */}
                        <li>{title} {title === "404" ? "page not found" : ""}</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

// Export the PageHeader component
export default PageHeader;
