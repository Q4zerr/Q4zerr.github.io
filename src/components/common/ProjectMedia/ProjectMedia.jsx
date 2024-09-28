import PropTypes from "prop-types";
import "./ProjectMedia.css";

const ProjectMedia = ({ url, altText, isVideo }) => {
  return (
    <>
      <div className="media-revealer"></div>
      <figure>
        {!isVideo ? (
          <img src={url} alt={altText} />
        ) : (
          <video autoPlay loop loading="lazy" muted preload="none">
            <source src={url} type="video/mp4" />
            Votre navigateur ne supporte pas le type de la vidéo.
          </video>
        )}
      </figure>
    </>
  );
};

ProjectMedia.propTypes = {
  url: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  isVideo: PropTypes.bool,
};

export default ProjectMedia;
