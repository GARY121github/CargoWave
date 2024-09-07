import { Link } from 'react-router-dom';

const BlogCardThree = ({ item }) => {
    return (
        <div className="blog-two__single">
            <div className="blog-two__single-img">
                <div className="overlay-img__outer">
                    <div className="name">
                        <p>{item.author}</p>
                    </div>
                    <div className="overlay-img">
                        <img src={item.image1} alt="Blog overlay" />
                    </div>
                </div>
                <div className="inner">
                    <img src={item.image2} alt="Blog" />
                </div>
            </div>
            <div className="blog-two__single-content">
                <h2>
                    <Link to={item.link}>{item.title}</Link>
                </h2>
                <ul className="meta-box">
                    <li>
                        <Link to="#">{item.category}</Link>
                    </li>
                    <li>-</li>
                    <li>{item.date}</li>
                </ul>
                <div className="btn-box">
                    <Link to={item.link}>
                        Read More <span className="icon-right-arrow-5"></span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BlogCardThree;
