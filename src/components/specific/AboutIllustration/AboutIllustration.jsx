import "./AboutIllustration.css";
import LanguageBox from "../LanguageBox/LanguageBox";
import CodeVoid from "../CodeVoid/CodeVoid";
/*SKILLS ICONS*/
import JSIcon from "../../../assets/images/skills/js.png";
import PythonIcon from "../../../assets/images/skills/python.png";
import ReactIcon from "../../../assets/images/skills/react.png";
import PHPIcon from "../../../assets/images/skills/php.png";
import LaravelIcon from "../../../assets/images/skills/laravel.png";
import CSharp from "../../../assets/images/skills/csharp.png";
import JavaIcon from "../../../assets/images/skills/java.png";
import BDDIcon from "../../../assets/images/skills/bdd.png";
import UnityIcon from "../../../assets/images/skills/unity.png";
/*CODE SCREEN*/
import Code1 from "../../../assets/images/code/code-1.png";
import Code2 from "../../../assets/images/code/code-2.png";
import Code3 from "../../../assets/images/code/code-3.png";
import Code4 from "../../../assets/images/code/code-4.png";
import Code5 from "../../../assets/images/code/code-5.png";
import Code6 from "../../../assets/images/code/code-6.png";
import Code7 from "../../../assets/images/code/code-7.png";

const AboutIllustration = () => {
  const codeImages = [Code1, Code2, Code3, Code4, Code5, Code6, Code7];

  return (
    <div className="about-illustration">
      <div className="hard-skills-container">
        <div className="skills-language-line">
          <LanguageBox icon={JSIcon} altText="JavaScript Icon" title="JavaScript" className="js" />
          <LanguageBox icon={PythonIcon} altText="Python Icon" title="Python" className="py" />
          <LanguageBox icon={ReactIcon} altText="React Icon" title="React" className="rc" />
        </div>
        <div className="skills-language-line">
          <LanguageBox icon={PHPIcon} altText="PHP Icon" title="PHP" className="php" />
          <LanguageBox icon={LaravelIcon} altText="Laravel Icon" title="Laravel" className="lrv" />
          <LanguageBox icon={CSharp} altText="C# Icon" title="C#" className="csharp" />
        </div>
        <div className="skills-language-line">
          <LanguageBox icon={JavaIcon} altText="Java Icon" title="Java" className="jva" />
          <LanguageBox icon={BDDIcon} altText="Database Icon" title="SQL" className="sql" />
          <LanguageBox icon={UnityIcon} altText="Unity Icon" title="Unity" className="uty" />
        </div>
      </div>
      <CodeVoid codeImages={codeImages} />
    </div>
  );
};

export default AboutIllustration;
