import { Link, NavLink } from "react-router-dom";
import "./sbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../../assets/images/jinal-logo.png";

import {
  faHome,
  // faUser,
  faEnvelope,
  // faEllipsisVertical,
  faBars,
  faTerminal,
  faDiagramProject,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

const Sidebar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <div>
      <div className="nav-bar">
        <Link className="logo" to="/">
          <img src= {Logo} alt="logo" />
          {/* <img src="" alt="sublogo" /> */}
        </Link>
        <div className="menu-icon" onClick={handleShowNavbar}>
        {/* <Hamburger/> */}
        {/* <FontAwesomeIcon className="ham-menu" icon={faEllipsisVertical} color="#fff"/> */}
        <FontAwesomeIcon  icon={faBars}  className="ham-menu" color="#fff" />
        <div className={`nav-elements  ${showNavbar && "active"}`}>
        <nav>
          <NavLink eaxct="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
          </NavLink>
          <NavLink
            eaxct="true"
            activeclassname="active"
            className="skills"
            to="/skills"
          >
            <FontAwesomeIcon icon={faTerminal} color="#4d4d4e"/>
          </NavLink>
          <NavLink
            eaxct="true"
            activeclassname="active"
            className="projects"
            to="/projects"
          >
            {/* <FontAwesomeIcon icon={faUser} color="#4d4d4e" /> */}
            <FontAwesomeIcon icon={faDiagramProject} color="#4d4d4e"/>
          </NavLink>
          <NavLink
            eaxct="true"
            activeclassname="active"
            className="contact"
            to="/contact"
          >
            
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
          </NavLink>
          
        </nav>
        </div>
        </div>
        <ul>
          <li>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/jinal-patel-747938143/">
              <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
            </a>
          </li>
          <li>
            <a target="_blank" rel="noreferrer" href="https://github.com/Jinal123456789">
              <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
            </a>
          </li>
          <li>
            <a target="_blank" rel="noreferrer" href="/">
              <FontAwesomeIcon icon={faStackOverflow} color="#4d4d4e" />
            </a>
          </li>
          
        </ul>
      </div>
    </div>
  );
};
// const Hamburger = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="52"
//     height="24"
//     viewBox="0 0 52 24"
//   >
//     <g id="Group_9" data-name="Group 9" transform="translate(-294 -47)">
//       <rect
//         id="Rectangle_3"
//         data-name="Rectangle 3"
//         width="42"
//         height="4"
//         rx="2"
//         transform="translate(304 47)"
//         fill="#574c4c"
//       />
//       <rect
//         id="Rectangle_5"
//         data-name="Rectangle 5"
//         width="42"
//         height="4"
//         rx="2"
//         transform="translate(304 67)"
//         fill="#574c4c"
//       />
//       <rect
//         id="Rectangle_4"
//         data-name="Rectangle 4"
//         width="52"
//         height="4"
//         rx="2"
//         transform="translate(294 57)"
//         fill="#574c4c"
//       />
//     </g>
//   </svg>
// );


export default Sidebar;
