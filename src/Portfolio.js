import React from "react";
import Menu from "./Menu";
import { Button } from "@material-ui/core";
import "./Portfolio.css";
function Portfolio() {
  return (
    <div>
      <div className="main-menu">
        <Menu />
      </div>

      <h5 className="h5">MY| PROJECTS</h5>

      <div className="portfolio">
        <div className="portfolio-projects">
          <img src="/example.png" alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Exercitationem cum voluptate pariatur enim neque cumque, unde sint.
            Excepturi quidem similique placeat molestiae ad quae laborum?
            Veritatis modi impedit tempora aliquam.
          </p>
          <Button variant="contained">View online</Button>
          <Button variant="contained">View On Github</Button>
        </div>
        <div className="portfolio-projects">
          <img src="/example.png" alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Exercitationem cum voluptate pariatur enim neque cumque, unde sint.
            Excepturi quidem similique placeat molestiae ad quae laborum?
            Veritatis modi impedit tempora aliquam.
          </p>
          <Button variant="contained">View online</Button>
          <Button variant="contained">View On Github</Button>
        </div>
        <div className="portfolio-projects">
          <img src="/example.png" alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Exercitationem cum voluptate pariatur enim neque cumque, unde sint.
            Excepturi quidem similique placeat molestiae ad quae laborum?
            Veritatis modi impedit tempora aliquam.
          </p>
          <Button variant="contained">View online</Button>
          <Button variant="contained">View On Github</Button>
        </div>
        <div className="portfolio-projects">
          <img src="/example.png" alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Exercitationem cum voluptate pariatur enim neque cumque, unde sint.
            Excepturi quidem similique placeat molestiae ad quae laborum?
            Veritatis modi impedit tempora aliquam.
          </p>
          <Button variant="contained">View online</Button>
          <Button variant="contained">View On Github</Button>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
