import "./contact.scss";
import Flipcard from "./flipcard";
import React from "react";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faGithub,
// } from "@fortawesome/free-brands-svg-icons";

const projects = [
  {
    proName: "E-commerce sweets selling website React, redux",
    description: (
      <>
        <li>
          Worked with a team to develop a web and a mobile application for an
          e-commerce platform.
        </li>
        <li>
          List products with details (price and manufacture) for users to choose
          from
        </li>
        <li>
          integrated different payment method handles gift card and personal
          message
        </li>
        <li>responsible for bug fixes and adding new modules in the web</li>
      </>
    ),
  },
  {
    proName: "React based project",
    description: (
      <>
        <li>
          Developed a clone project using React, showcasing proficiency in
          front-end development
        </li>
        <li>
          Implemented responsive UI, state management, and dynamic features for
          an engaging user experience.
        </li>
        <li>Demonstrating strong React development skills."</li>
      </>
    ),
  },
  {
    proName: "Quizz App",
    description:
      " Developed a React-based Quiz App, providing users with an engaging platform for quiz creation and participation. Implemented a responsive and  React's component-based architecture for efficient development. This project highlights my expertise in React development, front-end design, and interactive user experiences. ",
  },
  {
    proName: "DIRECTIQ",
    description: (
      <>
        <li>
          DirectIQ Offers a free email marketing platform for small businesses.
          You can embed Email Marketing Sign up forms into your posts and pages,
          without having to write a single line of code.
        </li>
        <li>
          Role & Responsibility: Back end Development which includes all
          functionality and worked on the design part of the plugins.
        </li>
      </>
    ),
  },
  {
    proName: "LINKILO",
    description: (
      <>
        <li>
          Linkilo is the internal linking tool that will save you hours every
          week, while giving your site a huge boost in search rankings. The
          Linkilo plugin creates internal links between pages and posts on your
          WordPress website fully automatically.
        </li>
        <li>
          Role & Responsibility: Customise the plugin and work on some
          functionalities by observing the code.
        </li>
      </>
    ),
  },
  {
    proName: "WP AFFILIATE MAGNET",
    description: (
      <>
        <li>
          WP Affiliate Magnet is a link management tool which allows optimising
          the links in multiple ways for enhancing your campaign URLs.
        </li>
        <li>
          Role & Responsibility: Worked on multiple functionalities and
          integrated it with Freemius.
        </li>
      </>
    ),
  },
];
const Contact = () => {
  return (
    <>
      <div className="container experience-page">
        <div className="project-zone">
          <div className="row">
            {projects.map((project, index) => (
              <Flipcard
                key={index}
                proName={project.proName}
                description={project.description}
              />
              // console.log(project.proName,"project.proName")
            ))}
          </div>
          <Link
            to="https://docs.google.com/document/d/1RKQeqbi6IAqlCBRJONERD1yZpkDiTBS9rmhxkrjPXVE/edit?usp=sharing"
            target="_blank"
            className="project-button"
          >
            <p>WordPress based Projects</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Contact;
