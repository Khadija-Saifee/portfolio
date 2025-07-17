import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Khadija Saifee </span>
            from <span className="purple"> Indore, India.</span>
            <br />
            I am currently employed as an intern at SiyaTech Ventures.
            <br />
            I am currently persuing my Bachelor's Degree in Computer Science and Business Systems from Medicaps University
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Designing
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Better Live Your Life!"{" "}
          </p>
          <footer className="blockquote-footer">SZA</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
