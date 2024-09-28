import "./SpecificBranchLine.css";
import PropTypes from "prop-types";

const SpecificBranchLine = ({ isLast }) => {
  return (
    <div className="line">
      {isLast ? (
        <div className="branch-rounder"></div>
      ) : (
        <>
          <div className="branch-rounder"></div>
          <div className="branch-line"></div>
        </>
      )}
    </div>
  );
};

SpecificBranchLine.propTypes = {
  isLast: PropTypes.bool,
};

export default SpecificBranchLine;
