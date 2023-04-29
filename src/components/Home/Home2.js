import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/SantSRJ.jpeg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              As a Full Stack web developer, I have a solid knowledge base in several key technologies, including HTML, CSS, JavaScript, NodeJS, and React. My work experience has included challenging projects, working in teams and using agile methodologies and collaborative tools.
              <br />
              <br />
              Furthermore, I am a creative person with a passion for problem solving, always looking for new innovative ways to improve the quality of my work. I have held various leadership roles in the Argentine Police and Navy, which has allowed me to develop essential skills such as leadership, teamwork, problem solving and adaptability to changing situations.
              <br />
              <br />
              As a professional committed to excellence, I always strive to inspire my team to achieve the highest quality standards in their work. I am focused on continuing to learn and improve my technical and leadership skills, to continue delivering exceptional projects and leading effective teams.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="SantSRJ" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/SantSRJ"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/santiago-mendoza-722a43222/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
              <a 
                href="mailto:srjmendoza369@gmail.com" 
                className="icon-colour home-social-icons"
              >
                  <AiOutlineMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;