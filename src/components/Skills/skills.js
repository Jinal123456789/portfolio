import React from "react";
import "./skills.scss";
// import "../About/about.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faReact,
    faWordpress,
    faSquareJs,
    faHtml5,
    faGithub,
    faCss3Alt,
    faSass,
    faPhp,
    faNodeJs,
   
  } from "@fortawesome/free-brands-svg-icons";

  import {
    faDatabase,
  } from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
    return(
    <div className="container skill-page">
        <div className="text-zone">
          <h1>Skills</h1>
          <div class="skills-icon">
          <div class="icon__wrap">
          <FontAwesomeIcon icon={faReact} class="icon__img" color="#60d7f8"/>
            <p class="icon__description">Rect Js</p>
          </div>
          <div class="icon__wrap">
          <FontAwesomeIcon icon={faWordpress} class="icon__img" color="#0073aa" />
            <p class="icon__description">WordPress</p>
          </div>
          <div class="icon__wrap">
          <FontAwesomeIcon icon={faSquareJs} class="icon__img" color="#ffb400" />
            <p class="icon__description">JavaScript</p>
          </div>
          <div class="icon__wrap">
          <FontAwesomeIcon icon={faPhp} class="icon__img" color="#7377ae" />
            <p class="icon__description">PHP</p>
          </div>
          <div class="icon__wrap">
          <FontAwesomeIcon icon={faHtml5} class="icon__img" color="#fc4909" />
            <p class="icon__description">HTML</p>
          </div>
          <div class="icon__wrap">
          <FontAwesomeIcon icon={faCss3Alt} class="icon__img" color="#2196f3" />
            <p class="icon__description">CSS</p>
          </div>
          <div class="icon__wrap">
          <FontAwesomeIcon icon={faSass} class="icon__img" color="#cf649a" />
            <p class="icon__description">SASS</p>
          </div>
          <div class="icon__wrap">
          <FontAwesomeIcon icon={faGithub} class="icon__img" color="#010a13" />
            <p class="icon__description">Github</p>
          </div>
          </div>
          <h1>Familiar</h1>
          <div class="skills-icon">
          <div class="icon__wrap">
          <FontAwesomeIcon icon={faNodeJs} className="icon__img" color="#619957"/>
            <p className="icon__description">Node Js</p>
          </div>
          <div className="icon__wrap">
          <FontAwesomeIcon icon={faDatabase} className="icon__img" color="#086ee0"/>
            <p className="icon__description">SQL</p>
          </div>
          <div className="icon__wrap">
          <FontAwesomeIcon icon={faReact} className="icon__img" color="#60d7f8"/>
            <p className="icon__description">React Native</p>
          </div>
          </div>
        </div>
    </div>
    )
}

export default Skills;