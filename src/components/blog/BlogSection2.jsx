import React from 'react';
import { Link } from 'react-router-dom';
import BlogCardFour from '../ui/cards/BlogCardFour';
import data from '../../../public/db/blogDataFour.json'; // Adjust path based on your project structure

const BlogSection2 = () => {
    return (
        <div>
            <section className="blog-two blog-two--three blog-two--three--blog padding" id="blog-cta">
                <div className="container">
                    <div className="row">
                        {data?.map((item, index) => (
                            <BlogCardFour item={item} key={index} />
                        ))}
                    </div>
                    <ul className="styled-pagination text-center clearfix">
                        <li><Link to="#">1</Link></li>
                        <li><Link to="#">2</Link></li>
                        <li><Link to="#">3</Link></li>
                        <li className="arrow next active">
                            <Link to="#"><span className="icon-right-arrow1"></span></Link>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default BlogSection2;
