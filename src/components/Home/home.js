import "./home.scss";
import "../Layout/index.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faReact } from '@fortawesome/free-solid-svg-icons'
import {
  faReact,
  faWordpress,
  faSquareJs,
  faHtml5,
  faGithub,
  faCss3Alt,
  faSass,
  faPhp,
} from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  const phoneNumber = '4372553645';
  return (
    <div className="container home-page">
      <div className="text-zone-home">
      <div className="home-section-one">
        <h1>
          Hi, <br /> I'm
          JINAL
          <br />
          </h1>
          <br />
          <br />
          <br />
          <p>
          I'm a frontend developer (for now) with a wealth of experience. I've played integral roles in both team collaborations and solo endeavors, demonstrating my ability to build websites from scratch, troubleshoot existing code issues, and actively engage in client communication, design, development, and deployment processes. Notably, I bring WordPress development skills to the table, adding an extra layer of expertise to my toolkit. Let's connect and bring your digital vision to life!
        </p>
        <h2>Frontend Developer / WordPress Developer / React Developer</h2>
        </div>
        <div className="home-section-bttn">
        <Link to={`tel:${phoneNumber}`} className="flat-button">
          Contact Me
        </Link>
        </div>
      </div>
      <div className="stage-cube-cont">
        <div className="cubespinner">
          <div className="face1">
            <FontAwesomeIcon icon={faReact} color="#60d7f8" />
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faWordpress} color="#2a2f35" />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faSquareJs} color="#ffb400" />
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faHtml5} color="#e96328" />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faPhp} color="#7377ae" />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faCss3Alt} color="#244bdd" />
          </div>
          <div className="face7">
            <FontAwesomeIcon icon={faSass} color="blue" />
          </div>
          <div className="face8">
            <FontAwesomeIcon icon={faGithub} color="red" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
