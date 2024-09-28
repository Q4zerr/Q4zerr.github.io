import "./AboutContent.css";
import AboutText from "../AboutText/AboutText";
import AboutSocialMedia from "../AboutSocialMedia/AboutSocialMedia";

const AboutContent = () => {
  return (
    <div className="about-content">
      <div className="about-content-size">
        <AboutText />
        <AboutSocialMedia />
      </div>
    </div>
  );
};

export default AboutContent;
