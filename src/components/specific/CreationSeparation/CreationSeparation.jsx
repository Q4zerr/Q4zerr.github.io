import React from "react";
import "./CreationSeparation.css";
import PropTypes from "prop-types";

const CreationSeparation = ({ description, firstWord, secondWord }) => {
  const formattedDescription = description.split("<br/>").map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));

  return (
    <div className="creation-separation">
      <div className="creation-description">
        <span className="desc">{formattedDescription}</span>
      </div>
      <div className="creation-title">
        <span className="title-first">{firstWord}</span>
        <span className="title-second">{secondWord}</span>
      </div>
    </div>
  );
};

CreationSeparation.propTypes = {
  description: PropTypes.string.isRequired,
  firstWord: PropTypes.string.isRequired,
  secondWord: PropTypes.string.isRequired,
};

export default CreationSeparation;
