import React from 'react';
import { Link } from 'react-router-dom'; 
import LatestPostCard from '../ui/cards/LatestPostCard';
import posts from '../../../public/db/blogsDataTwo.json';

const LatestPost = () => {
  return (
    <section className="blog-two blog-two-padding">
      <div
        className="blog-two__pattern"
        style={{ backgroundImage: 'url(/img/pattern/blog-v2-pattern.jpg)' }}
      ></div>
      <div className="container">
        <div className="blog-two__top">
          <div className="sec-title-two">
            <div className="sub-title">
              <h5>LATEST POST</h5>
            </div>
            <h2>Get the Latest News & Blog</h2>
          </div>

          <div className="btn-box">
            <Link className="thm-btn" to="/blog">
              <span className="txt">View All Posts</span>
              <i className="icon-right-arrow"></i>
            </Link>
          </div>
        </div>

        <div className="row">
          {posts?.map((item, idx) => (
            <LatestPostCard key={idx} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestPost;
