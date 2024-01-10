import "./contact.scss";
import Flipcard from "./flipcard";

const projects = [
    {
        proName: "E-commerce sweets selling website React, redux",
        description : <><li>"Worked with a team to develop a web and a mobile application for an e-commerce platform."</li><li>"List products with details (price and manufacture) for users to choose from"</li><li>"integrated different payment method handles gift card and personal message"</li><li>"responsible for bug fixes and adding new modules in the web"</li></>
    },
    {
        proName: "Project : 2",
        description : " Lorem ipsum dolor sit amet, consectetur adipiscing elit nec nisl tincidunt, condimentum nibh vitae, bibendum neque.Donec vitae hendrerit arcu. "
    },
    {
        proName: "Project 3",
        description : " Lorem ipsum dolor sit amet, consectetur adipiscing elit nec nisl tincidunt, condimentum nibh vitae, bibendum neque.Donec vitae hendrerit arcu. "
    },
    {
        proName: "Project 4",
        description : " Lorem ipsum dolor sit amet, consectetur adipiscing elit nec nisl tincidunt, condimentum nibh vitae, bibendum neque.Donec vitae hendrerit arcu. "
    },
    {
        proName: "Project 5",
        description : " Lorem ipsum dolor sit amet, consectetur adipiscing elit nec nisl tincidunt, condimentum nibh vitae, bibendum neque.Donec vitae hendrerit arcu. "
    },
    {
        proName: "Project 6",
        description : " Lorem ipsum dolor sit amet, consectetur adipiscing elit nec nisl tincidunt, condimentum nibh vitae, bibendum neque.Donec vitae hendrerit arcu. "
    },
];
const Contact = () => {
  return (
    <>
      <div className="container experience-page">
        <div className="project-zone">
        <div className="row">
          {projects.map((project,index)=>(
            <Flipcard key={index}
            proName={project.proName}
            description={project.description}/>
            // console.log(project.proName,"project.proName")
          ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
