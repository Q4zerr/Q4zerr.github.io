import "./Journey.css";
import TitleSection from "../TitleSection/TitleSection";
import JourneyBranch from "../../specific/JourneyBranch/JourneyBranch";
import JourneyDecoration from "../../specific/JourneyDecoration/JourneyDecoration";

const Journey = () => {
  return (
    <section className="journey">
      <TitleSection title="Parcours" headingType="h2" />
      <JourneyBranch />
      <JourneyDecoration />
    </section>
  );
};

export default Journey;
