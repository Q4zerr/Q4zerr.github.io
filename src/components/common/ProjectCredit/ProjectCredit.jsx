import PropTypes from "prop-types";
import "./ProjectCredit.css";

const ProjectCredit = ({ name, role }) => {
  return (
    <>
      <span className="credit-name">{name}</span>
      <span className="credit-role">{role}</span>
    </>
  );
};

ProjectCredit.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
};

export default ProjectCredit;
