import { Link } from 'react-router-dom';

const ProjectCardFour = ({ item }) => {
    return (
        <div className="project-three__single">
            <div className="project-three__single-img">
                <div className="inner">
                    <img
                        src={item?.image}
                        alt={item?.title || 'Project Image'}
                    />
                    <div className="overlay-content">
                        <div className="overlay-icon">
                            <span className={item?.iconClass}></span>
                        </div>
                        <div className="icon-box">
                            <Link to="/project-details">
                                <span className="icon-right-arrow-5"></span>
                            </Link>
                        </div>
                        <div className="text-box">
                            <p>Logistic</p>
                            <h2>
                                <Link to={item?.link}>
                                    {item?.title}
                                </Link>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCardFour;
