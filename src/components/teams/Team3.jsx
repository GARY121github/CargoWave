import React from "react";
import { Link } from "react-router-dom";
import data from '../../../public/db/teamData.json'; // Adjust the path according to your project's structure
import TeamCardThree from "../ui/cards/TeamCardThree"; // Adjust the path accordingly

const Team3 = () => {
    return (
        <section className="team-three padding" id="blog-cta">
            <div className="container">
                <div className="row">
                    {data?.map((item, index) => (
                        <TeamCardThree item={item} key={index} />
                    ))}
                </div>
                <div className="team-three--team__bottom">
                    <div className="text-box">
                        <p>We’re Experience. Become a team member!</p>
                    </div>

                    <div className="btn-box">
                        <Link className="thm-btn" to="/contact">
                            <span className="txt">Join Our Team</span> <i className="icon-right-arrow"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team3;
