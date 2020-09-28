import React from "react";
import Menu from "./Menu";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import "./Resume.css";

function Resume() {
  return (
    <div>
      <div className="main-menu">
        <Menu />
      </div>
      <p className="para">
        I'm a performance-driven and motivated Full Stack Developer with
        extensive experience in participating in all phases of software
        development and determined to achieve extraordinary results. Possess a
        strong attention to detail, well-developed time management skills, and
        ability to complete all projects within schedule and in a timely manner.
      </p>

      <div className="resume">
        <div className="resume-body">
          <h5>EDUCATION</h5>
          <h6>TECHNICAL UNIVERSITY OF KENYA</h6>
          <p>BUSSINESS INFORMATION TECHNOLOGY</p>
          <span>2019 - to date</span>

          <h6>MORINGA SCHOOL</h6>
          <p>SOFTWARE DEVELOPMENT</p>
          <span>Febuary 2019 - June 2019</span>

          <h6>NKUBU HIGH SCHOOL</h6>
          <p>HIGHSCHOOL COURSE</p>
          <span>2015 - 2018</span>
        </div>

        <div className="resume-body">
          <h5>INTREST</h5>
          <p>
            Apart from being a web developer, I enjoy most of my time being
            outdoors. When forced indoors, I follow a number of sci-fi and
            fantasy genre movies and television shows and I spend a large amount
            of my free time exploring the latest technology advancements in the
            front-end web development world.
          </p>
        </div>
        <div className="resume-body">
          <h5>WORKFLOW</h5>
          <ul className="workflow">
            <li>
              <LabelImportantIcon />
              web, Responsive Design
            </li>
            <li>
              <LabelImportantIcon />
              Testing & Debugging
            </li>
            <li>
              <LabelImportantIcon />
              Team collaboration
            </li>
            <li>
              <LabelImportantIcon />
              Agile Development & Scrum
            </li>
          </ul>
        </div>
        <div className="resume-body">
          <h5>SKILLS</h5>
          <div className="skill">
            <div className="skill-content">
              <h6>Languange</h6>
              <ul>
                <li>
                  <CheckCircleOutlineIcon />
                  HTML
                </li>
                <li>
                  <CheckCircleOutlineIcon />
                  CSS
                </li>
                <li>
                  <CheckCircleOutlineIcon />
                  Javascript
                </li>
                <li>
                  <CheckCircleOutlineIcon />
                  Python
                </li>
              </ul>
            </div>
            <div className="skill-content">
              <h6> Framework</h6>
              <ul>
                <li>
                  <CheckCircleOutlineIcon />
                  Redux
                </li>
                <li>
                  <CheckCircleOutlineIcon />
                  Django
                </li>
                <li>
                  <CheckCircleOutlineIcon />
                  Flask
                </li>
              </ul>
            </div>
            <div className="skill-content">
              <h6>Libraries</h6>
              <ul>
                <li>
                  <CheckCircleOutlineIcon />
                  React
                </li>
                <li>
                  <CheckCircleOutlineIcon />
                  Material UI
                </li>
                <li>
                  <CheckCircleOutlineIcon />
                  Bootstrap
                </li>
              </ul>
            </div>
            <div className="skill-content">
              <h6>Tools</h6>
              <ul>
                <li>
                  <CheckCircleOutlineIcon />
                  VsCode
                </li>
                <li>
                  <CheckCircleOutlineIcon />
                  Atom
                </li>
                <li>
                  <CheckCircleOutlineIcon />
                  Figma
                </li>
              </ul>
            </div>
            <div className="skill-content">
              <h6>Platforms</h6>
              <ul>
                <li>
                  <CheckCircleOutlineIcon />
                  Windows
                </li>
                <li>
                  <CheckCircleOutlineIcon />
                  Linux
                </li>
                <li>
                  <CheckCircleOutlineIcon />
                  MaCos
                </li>
              </ul>
            </div>
            <div className="skill-content">
              <h6>Storage</h6>
              <ul>
                <li>
                  <CheckCircleOutlineIcon />
                  MySQl
                </li>
                <li>
                  <CheckCircleOutlineIcon />
                  Postgres
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="resume-body">
          <h6>Contact</h6>
          <p>Email: amiredin@yahoo.com</p>
          <p>Phone: +254757853395</p>
        </div>
      </div>
    </div>
  );
}

export default Resume;
