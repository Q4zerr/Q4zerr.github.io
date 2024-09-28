import { useState } from "react";
import "./Navbar.css";
import LogoMedium from "../../../assets/images/logo_medium_white.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [checkpointText, setCheckpointText] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  // Ouverture de la navbar si le btn menu est cliqué
  const handleToggleMenu = () => {
    const newMenuState = !menuOpen;
    setMenuOpen(newMenuState);

    if (newMenuState) {
      // Menu ouvert : empêcher le scroll
      document.body.style.height = "auto";
    } else {
      // Menu fermé : autoriser le scroll
      document.body.style.height = "100vh";
    }
  };

  // Fermeture de la navbar si un lien est cliqué
  const handleLinkClick = () => {
    setMenuOpen(false);
    document.body.style.height = "100vh";
  };

  const links = [
    {
      link: "/a-propos",
      text: "À Propos",
    },
    {
      link: "/creations",
      text: "Créations",
    },
    {
      link: "/experiences",
      text: "Expériences",
    },
    {
      link: "/contact",
      text: "Contact",
    },
  ];

  return (
    <header className="navbar">
      <div className="logo-container">
        <Link to="/" className="logo-link" onClick={handleLinkClick}>
          <img src={LogoMedium} alt="Logo Medium" className="logo-img" />
        </Link>
        <div className="logo-checkpoint">
          <span>{checkpointText}</span>
        </div>
      </div>
      <div className="menu-container">
        <div className="menu-btn" onClick={handleToggleMenu}>
          <div className="btn-icon">
            <div className="btn-dot l"></div>
            <div className="btn-dot s"></div>
            <div className="btn-dot m"></div>
            <div className="btn-dot"></div>
            <div className="btn-dot s"></div>
            <div className="btn-dot"></div>
            <div className="btn-dot l"></div>
            <div className="btn-dot s"></div>
            <div className="btn-dot m"></div>
            <div className="btn-dot"></div>
            <div className="btn-dot m"></div>
            <div className="btn-dot l"></div>
            <div className="btn-dot"></div>
            <div className="btn-dot s"></div>
            <div className="btn-dot m"></div>
            <div className="btn-dot"></div>
          </div>
        </div>
        <div className={menuOpen ? "menu open" : "menu"}>
          <ul>
            {links.map((link, key) => (
              <li className="menu-item" key={key}>
                <Link to={link.link} className="menu-item-link" onClick={handleLinkClick}>
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={menuOpen ? "menu-mobile open" : "menu-mobile"}>
          <div className="mobile-container">
            <ul>
              {links.map((link, key) => (
                <li className="menu-item" key={key}>
                  <Link to={link.link} className="menu-item-link" onClick={handleLinkClick}>
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
