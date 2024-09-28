import "./Experience.css";
import TitleSection from "../TitleSection/TitleSection";
import ExperienceCase from "../../specific/ExperienceCase/ExperienceCase";
import PHPIcon from "../../../assets/images/skills/php.png";
import ReactIcon from "../../../assets/images/skills/react.png";
import JavaScriptIcon from "../../../assets/images/skills/js.png";
import LaravelIcon from "../../../assets/images/skills/laravel.png";
import PythonIcon from "../../../assets/images/skills/python.png";
import JavaIcon from "../../../assets/images/skills/java.png";
import PhotoShopIcon from "../../../assets/images/skills/photoshop.png";
import SplineIcon from "../../../assets/images/skills/spline.png";
import PixlrIcon from "../../../assets/images/skills/pixlr.png";
import BlenderIcon from "../../../assets/images/skills/blender.png";
import FigmaIcon from "../../../assets/images/skills/figma.png";
import CSharpIcon from "../../../assets/images/skills/csharp.png";
import CanvaIcon from "../../../assets/images/skills/canva.png";
import SCSSIcon from "../../../assets/images/skills/scss.png";
import RubyIcon from "../../../assets/images/skills/ruby.png";
import PostmanIcon from "../../../assets/images/skills/postman.png";
import UnityIcon from "../../../assets/images/skills/unity.png";
import WampIcon from "../../../assets/images/skills/wamp.png";
import SQLIcon from "../../../assets/images/skills/sql.png";
import PHPMyAdminIcon from "../../../assets/images/skills/phpmyadmin.png";
import PGSQLIcon from "../../../assets/images/skills/postgresql.png";
import MYSQLIcon from "../../../assets/images/skills/mysql.png";
import WordPressIcon from "../../../assets/images/skills/wordpress.png";
import OxygenIcon from "../../../assets/images/skills/oxygen.png";
import DiviIcon from "../../../assets/images/skills/divi.png";
import ShopifyIcon from "../../../assets/images/skills/shopify.png";
import ElementorIcon from "../../../assets/images/skills/elementor.png";
import NodeJSIcon from "../../../assets/images/skills/nodejs.png";
import { motion, useIsPresent } from "framer-motion";
import { useLocation } from "react-router-dom";

const Experience = () => {
  const location = useLocation();
  const isPresent = useIsPresent();

  const experiencesData = [
    {
      title: "DEV",
      technologies: [
        {
          text: "PHP",
          alt: "PHP Icon",
          img: PHPIcon,
          gradient: "php",
        },
        {
          text: "JavaScript",
          alt: "JavaScript Icon",
          img: JavaScriptIcon,
          gradient: "js",
        },
        {
          text: "React",
          alt: "React Icon",
          img: ReactIcon,
          gradient: "react",
        },
        {
          text: "Laravel",
          alt: "Laravel Icon",
          img: LaravelIcon,
          gradient: "lrvl",
        },
        {
          text: "Python",
          alt: "Python Icon",
          img: PythonIcon,
          gradient: "py",
        },
        {
          text: "Java",
          alt: "Java Icon",
          img: JavaIcon,
          gradient: "java",
        },
        {
          text: "C#",
          alt: "C# Icon",
          img: CSharpIcon,
          gradient: "csharp",
        },
        {
          text: "SCSS",
          alt: "SCSS Icon",
          img: SCSSIcon,
          gradient: "scss",
        },
        {
          text: "Ruby",
          alt: "Ruby Icon",
          img: RubyIcon,
          gradient: "rby",
        },
        {
          text: "SQL",
          alt: "SQL Icon",
          img: SQLIcon,
          gradient: "sql",
        },
        {
          text: "Node.js",
          alt: "Node.js Icon",
          img: NodeJSIcon,
          gradient: "ndejs",
        },
      ],
    },
    {
      title: "DESIGN",
      technologies: [
        {
          text: "Figma",
          alt: "Figma Icon",
          img: FigmaIcon,
          gradient: "fgma",
        },
        {
          text: "PhotoShop",
          alt: "PhotoShop Icon",
          img: PhotoShopIcon,
          gradient: "ps",
        },
        {
          text: "Blender",
          alt: "Blender Icon",
          img: BlenderIcon,
          gradient: "blend",
        },
        {
          text: "Spline",
          alt: "Spline Icon",
          img: SplineIcon,
          gradient: "spl",
        },
        {
          text: "Pixlr",
          alt: "Pixlr Icon",
          img: PixlrIcon,
          gradient: "pixlr",
        },
        {
          text: "Canva",
          alt: "Canva Icon",
          img: CanvaIcon,
          gradient: "canva",
        },
      ],
    },
    {
      title: "OTHER",
      technologies: [
        {
          text: "Postman",
          alt: "Postman Icon",
          img: PostmanIcon,
          gradient: "pman",
        },
        {
          text: "Unity",
          alt: "Unity Icon",
          img: UnityIcon,
          gradient: "unty",
        },
        {
          text: "WampServer",
          alt: "WampServer Icon",
          img: WampIcon,
          gradient: "wmp",
        },
        {
          text: "PHPMyAdmin",
          alt: "PHPMyAdmin Icon",
          img: PHPMyAdminIcon,
          gradient: "ppadmin",
        },
        {
          text: "PostgreSQL",
          alt: "PostgreSQL Icon",
          img: PGSQLIcon,
          gradient: "pgsql",
        },
        {
          text: "MySQL",
          alt: "MySQL Icon",
          img: MYSQLIcon,
          gradient: "msql",
        },
      ],
    },
    {
      title: "CMS",
      technologies: [
        {
          text: "WordPress",
          alt: "WordPress Icon",
          img: WordPressIcon,
          gradient: "wp",
        },
        {
          text: "Oxygen Builder",
          alt: "Oxygen Builder Icon",
          img: OxygenIcon,
          gradient: "oxy",
        },
        {
          text: "Divi Builder",
          alt: "Divi Builder Icon",
          img: DiviIcon,
          gradient: "divi",
        },
        {
          text: "Shopify",
          alt: "Shopify Icon",
          img: ShopifyIcon,
          gradient: "shpfy",
        },
        {
          text: "Elementor",
          alt: "Elementor Icon",
          img: ElementorIcon,
          gradient: "elem",
        },
      ],
    },
  ];

  return (
    <section className="experience">
      <TitleSection title="Experience" headingType="h4" />
      <div className="experience-grid">
        {experiencesData.map((experience, index) => (
          <ExperienceCase key={index} title={experience.title} technologies={experience.technologies} />
        ))}
      </div>
      {location.pathname === "/experiences" ? (
        <motion.div
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0, transition: { duration: 0.5, ease: "circOut" } }}
          exit={{ scaleY: 1, transition: { duration: 0.5, ease: "circIn" } }}
          style={{ originY: isPresent ? 0 : 1 }}
          className="privacy-screen"
        />
      ) : null}
    </section>
  );
};

export default Experience;
