import "./SpecificBranch.css";
import PropTypes from "prop-types";
import SpecificBranchObject from "../SpecificBranchObject/SpecificBranchObject";
import SpecificBranchLine from "../SpecificBranchLine/SpecificBranchLine";

const SpecificBranch = ({ data }) => {
  return (
    <div className="journey-branch">
      {data.map((value, key) => (
        <div key={key} className="journey-branch-data">
          {value.side === "right" ? (
            <>
              <div></div>
              <SpecificBranchLine isLast={value.isLast} />
              <SpecificBranchObject name={value.name} city={value.city} school={value.school} date={value.date} />
            </>
          ) : (
            <>
              <SpecificBranchObject name={value.name} city={value.city} school={value.school} date={value.date} />
              <SpecificBranchLine isLast={value.isLast} />
            </>
          )}
        </div>
      ))}
    </div>
  );
};

SpecificBranch.propTypes = {
  data: PropTypes.array.isRequired,
};

export default SpecificBranch;
