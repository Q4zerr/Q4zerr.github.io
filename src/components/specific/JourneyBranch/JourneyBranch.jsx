import { useState } from "react";
import SpecificBranch from "../SpecificBranch/SpecificBranch";
import JourneyTabs from "../JourneyTabs/JourneyTabs";
import "./JourneyBranch.css";

const JourneyBranch = () => {
  const [activeTab, setActiveTab] = useState("graduation");

  const graduationData = [
    {
      name: "Bachelor Web & Technologies",
      city: "Lyon",
      school: "WebTech Institute",
      date: "2023 - 2024",
      side: "right",
    },
    {
      name: "BTS SIO (SLAM)",
      city: "Vienne",
      school: "Lycée Ella Filtzgerald",
      date: "2021 - 2023",
      side: "left",
    },
    {
      name: "BAC STMG",
      city: "La Côte Saint André",
      school: "Hector Berlioz",
      date: "2019 - 2021",
      side: "right",
      isLast: true,
    },
  ];

  const workData = [
    {
      name: "Alternance Développeur Web",
      city: "Elixir Création - Vienne",
      date: "Septembre 2023 - Septembre 2024",
      side: "right",
    },
    {
      name: "Auto-Entrepreneur / Développeur Web",
      city: "La Côte Saint André",
      date: "Mars 2023 - Aujourd'hui",
      side: "left",
    },
    {
      name: "Développement Web & CMS - Stage",
      city: "Elixir Création - Vienne",
      date: "Janvier 2023 - Février 2023",
      side: "right",
    },
    {
      name: "SEO & Développement - Stage",
      city: "La Toile Gauloise - Lyon",
      date: "Mai 2022 - Juillet 2022",
      side: "left",
      isLast: true,
    },
  ];

  return (
    <div className="journey-container">
      <JourneyTabs activeTab={activeTab} onTabChange={setActiveTab} />
      <div className="journey-sections">
        {activeTab === "graduation" && <SpecificBranch data={graduationData} />}
        {activeTab === "work" && <SpecificBranch data={workData} />}
      </div>
    </div>
  );
};

export default JourneyBranch;
