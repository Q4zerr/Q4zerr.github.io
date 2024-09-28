import "./CodeVoid.css";
import PropTypes from "prop-types";

const CodeVoid = ({ codeImages }) => {
  return (
    <div className="code-void">
      {codeImages.map((image, index) => (
        <img key={index} src={image} alt={`Code Screen ${index + 1}`} className={`code-screen code${index + 1}`} />
      ))}
    </div>
  );
};

CodeVoid.propTypes = {
  codeImages: PropTypes.array.isRequired,
};

export default CodeVoid;
