import { Link, NavLink } from "react-router-dom";
import "./sbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";

const Sidebar = () => {
  return (
    <div>
      <div className="nav-bar">
        <Link className="logo" to="/">
          <img src="" alt="logo" />
          <img src="" alt="sublogo" />
        </Link>
        <nav>
          <NavLink eaxct="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
          </NavLink>
          <NavLink
            eaxct="true"
            activeclassname="active"
            className="about"
            to="/about"
          >
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
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
        <ul>
          <li>
            <a target="_blank" rel="noreferrer" href="/">
              <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
            </a>
          </li>
          <li>
            <a target="_blank" rel="noreferrer" href="/">
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

export default Sidebar;
