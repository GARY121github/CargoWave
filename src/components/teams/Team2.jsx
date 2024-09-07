import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TeamCardTwo from "../ui/cards/TeamCard2";

const Team2 = ({ bgColor }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/db/teamData.json");
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setData(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <section className="team-three team-three--about padding" style={{ backgroundColor: bgColor }}>
            <div className="team-three__shape1">
                <img src="/img/shape/team-v3-shape1.png" alt="Shape decoration" />
            </div>
            <div className="container">
                <div className="team-three__top">
                    <div className="sec-title-style3">
                        <div className="sub-title">
                            <div className="icon">
                                <img src="/img/icon/title-marker-4.png" alt="Title marker" />
                            </div>
                            <h5>Team</h5>
                        </div>
                        <h2>Meet Our Staff</h2>
                    </div>
                    <div className="btn-box">
                        <Link className="thm-btn" to="/team">
                            <span className="txt">Become a Member</span>
                        </Link>
                    </div>
                </div>
                <div className="row">
                    {data.slice(0, 4).map((item, index) => (
                        <TeamCardTwo item={item} key={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team2;
