import "./AboutSocialMedia.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const AboutSocialMedia = () => {
  return (
    <div className="about-social-bar">
      <div className="about-social-canvas">
        <a href="https://github.com/Q4zerr" className="btn-social" target="_blank">
          <p>
            <FontAwesomeIcon icon={faGithub} size="1x" />
          </p>
          <div className="btn-social-background"></div>
        </a>
        <div className="btn-social-glow"></div>
        <span className="btn-social-info">Github</span>
      </div>
      <div className="about-social-canvas">
        <a href="https://www.instagram.com/tanguy.av/" className="btn-social" target="_blank">
          <p>
            <FontAwesomeIcon icon={faInstagram} size="1x" />
          </p>
          <div className="btn-social-background"></div>
        </a>
        <div className="btn-social-glow"></div>
        <span className="btn-social-info">Instagram</span>
      </div>
      <div className="about-social-canvas">
        <a href="https://www.linkedin.com/in/tanguy-avet/" className="btn-social" target="_blank">
          <p>
            <FontAwesomeIcon icon={faLinkedinIn} size="1x" />
          </p>
          <div className="btn-social-background"></div>
        </a>
        <div className="btn-social-glow"></div>
        <span className="btn-social-info">LinkedIn</span>
      </div>
    </div>
  );
};

export default AboutSocialMedia;
