import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { Avatar, Button } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import LocationOnIcon from "@material-ui/icons/LocationOn";

function Sidebar() {
  return (
    <nav>
      <div className="nav-avatar">
        <Avatar
          className="avatar"
          alt="Amir Edin"
          src="data:image/jpeg;base64,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"
        />
        <div className="nav-bio">
          <span> Amir Edin, </span> <br />
          <span>Software Developer</span>
        </div>
      </div>
      <div className="nav-icons">
        <a href="https://www.linkedin.com/in/amiredin666859186">
          <LinkedInIcon />
        </a>

        <Link to="">
          <GitHubIcon />
        </Link>
      </div>
      <div className="nav-links">
        <LocationOnIcon /> Nairobi,Kenya
        <div className="about">
          <Link style={{ textDecoration: "none", color: "black" }} to="/">
            About Me
          </Link>
        </div>
      </div>
      <Link to="/contact" style={{ textDecoration: "none" }}>
        <Button className="button" variant="contained" color="primary">
          Email Me
        </Button>
      </Link>
    </nav>
  );
}

export default Sidebar;
