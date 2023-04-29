import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import dogs from "../../Assets/Projects/dogs.jpg";
import comidas from "../../Assets/Projects/ConLoQueTengo.jpg";
import apolo from "../../Assets/Projects/Apolo.jpg";
import ram from "../../Assets/Projects/RaM.jpg";
import vitality from "../../Assets/Projects/Vitality.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={apolo}
              isBlog={false}
              title="Apolo Barbershop"
              description="Website of a professional barbershop, allows direct contact with its owner to make personalized appointments and adds the detail of the location in order to facilitate the actual location of the place and the means of transport to arrive. It also has images of the different types of cuts that can be requested and the techniques used in each one, as well as views of the place.
              The site is built with Javascript to control the image carousel, HTML5, CSS3 and BootstrapWebsite of a professional barbershop, allows direct contact with its owner to make personalized appointments and adds the detail of the location in order to facilitate the actual location of the place and the means of transport to arrive. It also has images of the different types of cuts that can be requested and the techniques used in each one, as well as views of the place.
              The site is built with Javascript to control the image carousel, HTML5, CSS3 and Bootstrap"
              ghLink="https://github.com/SantSRJ/santsrj.github.io"
              demoLink="https://santsrj.github.io/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vitality}
              isBlog={false}
              title="Vitality Medical Group"
              description="Demo of the final project carried out in a group for the Henry platform, where the agile scrum methodology was applied and technologies and libraries such as React, Redux, Node, Express, SQL, Sequalizee, PostgreSQL, Auth0, MaterialUI, Vite, Mercado Libre API were used. , among others.

              Vitality Medical Group is an application that allows the user to manage medical data and patient appointments online, including medical records, prescriptions, and payments. Users will be able to access their medical information, schedule appointments and make secure payments for medical services. It also has an administrator dashboard that allows you to modify the roles of the people who interact with the application, modify the analysis or medical database, among many other things."
              ghLink="https://github.com/SantSRJ/PF-Vitality-Medical-Group"
              demoLink="https://vitality-medical-group.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={comidas}
              isBlog={false}
              title="Con lo que tengo"
              description="This app was the final work of the initial Web Design course given by the UTN within the framework of the Argentina Programa 4.0 project. The app consists of a web page that consumes data from the spoonocular api and that allows filtering recipes by name, redirecting the user to the source page of each recipe and downloading a pdf with the main information of the selected item. It also has two types of forms, one for consultation and another for adding a recipe. We work with the following technologies: Javascript, HTML5, CSS3 and the following libraries: JSpdf and validateJS."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://fancy-mousse-c66e99.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dogs}
              isBlog={false}
              title="PI-Dogs"
              description="Individual project carried out in the Soy Henry bootcamp. It deals with a REST API that brings information from more than 200 dog breeds. In addition, search and ordering filters can be applied as well as the possibility of creating a new breed.
              I used the following technologies: Javascript, React, Redux, NodeJs, ExpressJs, Sequelize, PostgreSQL, HTML5 and CSS3."
              ghLink="https://github.com/SantSRJ/PI-Dogs"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ram}
              isBlog={false}
              title="Rick and Morty"
              description="REST API made in the I'm Henry bootcamp. It brings information on more than 200 characters from the Rick and Morty series. In addition, you can apply search and ordering filters as well as select your favorite characters from a separate list.
              I used the following technologies: Javascript, React, Redux, HTML5 and CSS3."
              ghLink="https://github.com/SantSRJ/rick_and_morty"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
