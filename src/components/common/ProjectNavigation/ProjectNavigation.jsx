import PropTypes from "prop-types";
import "./ProjectNavigation.css";
import { Link } from "react-router-dom";

const ProjectNavigation = ({ nextProject, previousProject }) => {
  return (
    <>
      <Link to={previousProject.link} className="project-navigation-link">
        {previousProject.name}
      </Link>
      <span className="project-navigation-separator">
        <span className="project-navigation-separator-item"></span>
      </span>
      <Link to={nextProject.link} className="project-navigation-link">
        {nextProject.name}
      </Link>
    </>
  );
};

ProjectNavigation.propTypes = {
  nextProject: PropTypes.array.isRequired,
  previousProject: PropTypes.array.isRequired,
};

export default ProjectNavigation;
