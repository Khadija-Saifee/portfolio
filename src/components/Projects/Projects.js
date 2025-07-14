import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Foodie"
              description=" A responsive and visually engaging fast food restaurant website built using HTML, CSS, and JavaScript. It features an interactive menu, smooth navigation, and a clean layout designed to showcase food items and attract customers."
              ghLink="https://github.com/Khadija-Saifee/foodweb"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Shopping Website"
              description="This is a simple shopping cart project built using ReactJS, React Router, JavaScript, HTML, and Tailwind CSS. It fetches products from the Fake Store API and displays them in a user-friendly format. Users can add or remove products from the cart, adjust quantities, and view the total price with a discount applied."
              ghLink="https://github.com/Khadija-Saifee/shopping"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Blinkit Clone"
              description=" A front-end clone of the Blinkit grocery delivery platform built using React, JavaScript, HTML, and CSS. It includes features like dynamic product listings, category-based navigation, and seamless routing using React Router to simulate a real-world shopping experience."
              ghLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="TO=DO List"
              description=" A simple and efficient task management application built using React, JavaScript, HTML, and CSS. It allows users to add, delete, and mark tasks as completed, with a clean user interface and real-time updates through React state management."
              ghLink=""
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Portfolio"
              description="A personal portfolio built using React, HTML, CSS, and JavaScript to showcase projects, skills, and contact information. It features a responsive design, smooth navigation, and dynamic components for a modern and interactive user experience."
              ghLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
