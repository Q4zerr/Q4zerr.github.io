import "./CreationDetails.css";
import { motion, useIsPresent } from "framer-motion";
import PropTypes from "prop-types";
import ProjectDetails from "../../common/ProjectDetails/ProjectDetails";
import ProjectButton from "../../common/ProjectButton/ProjectButton";
import ProjectNavigation from "../../common/ProjectNavigation/ProjectNavigation";
import ProjectMedia from "../../common/ProjectMedia/ProjectMedia";
import ProjectCredit from "../../common/ProjectCredit/ProjectCredit";
import ProjectDescription from "../../common/ProjectDescription/ProjectDescription";
import ProjectPitch from "../../common/ProjectPitch/ProjectPitch";
import FadeInSection from "../../animation/FadeInSection/FadeInSection";

const CreationDetails = ({ article }) => {
  const isPresent = useIsPresent();

  return (
    <section className="creations-details-section" id="creations">
      <FadeInSection className="project-details" thresholdNumber={0.1}>
        <ProjectDetails title={article.title} technologies={article.technologies} description={article.description} imageCover={article.coverImage} />
      </FadeInSection>
      <FadeInSection className="project-specificity" thresholdNumber={0.4}>
        <ProjectPitch projectSummary={article.projectSummary} />
        <ProjectDescription client={article.clientName} year={article.year} role={article.role} technologies={article.technologiesDetails} />
      </FadeInSection>
      <FadeInSection className="project-button" thresholdNumber={0.2}>
        <ProjectButton link={article.projectLink} text={article.projectLinkText} />
      </FadeInSection>
      <FadeInSection className="project-visuals">
        <div className="visuals-container">
          {article.images.map((image, key) => (
            <FadeInSection key={key} thresholdNumber={0.3} className="visuals-media" additionalClass="loaded">
              <ProjectMedia url={image.url} altText={image.altText} isVideo={image.isVideo} />
            </FadeInSection>
          ))}
        </div>
      </FadeInSection>
      <FadeInSection className="project-credits" thresholdNumber={0.15}>
        <span className="project-credits-title">Credits</span>
        <ul className="project-credits-list">
          {article.credits.map((credit, key) => (
            <FadeInSection key={key} thresholdNumber={0.3} className="credit">
              <ProjectCredit name={credit.name} role={credit.role} />
            </FadeInSection>
          ))}
        </ul>
      </FadeInSection>
      <FadeInSection className="project-navigation" thresholdNumber={0.3}>
        <ProjectNavigation nextProject={article.nextProject} previousProject={article.previousProject} />
      </FadeInSection>
      <motion.div
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0, transition: { duration: 0.5, ease: "circOut" } }}
        exit={{ scaleY: 1, transition: { duration: 0.5, ease: "circIn" } }}
        style={{ originY: isPresent ? 0 : 1 }}
        className="privacy-screen"
      />
    </section>
  );
};

CreationDetails.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    technologiesDetails: PropTypes.arrayOf(PropTypes.string).isRequired,
    description: PropTypes.string.isRequired,
    coverImage: PropTypes.string.isRequired,
    projectSummary: PropTypes.node.isRequired,
    clientName: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    projectLink: PropTypes.string.isRequired,
    projectLinkText: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.object).isRequired,
    credits: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        role: PropTypes.string.isRequired,
      })
    ).isRequired,
    nextProject: PropTypes.shape({
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    }).isRequired,
    previousProject: PropTypes.shape({
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default CreationDetails;
