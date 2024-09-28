import PropTypes from "prop-types";
import "./ProjectPitch.css";

const ProjectPitch = ({ projectSummary }) => {
  return <div className="project-details-pitch">{projectSummary}</div>;
};

ProjectPitch.propTypes = {
  projectSummary: PropTypes.node.isRequired,
};

export default ProjectPitch;
