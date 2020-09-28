import React from "react";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import DeveloperBoardIcon from "@material-ui/icons/DeveloperBoard";
import CodeIcon from "@material-ui/icons/Code";
import Menu from "./Menu";

import "./Main.css";

function Main() {
  return (
    <div className="main">
      <div className="main-menu">
        <Menu />
      </div>

      <h4>What I' do</h4>
      <div className="main-body">
        <div className="main__bodyContent">
          <h5>
            {" "}
            <CodeIcon /> Frontend Development
          </h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia
            doloremque minima ex non soluta optio sequi quidem corrupti
            repudiandae quae, velit deserunt saepe fuga itaque dolore distinctio
            amet dolorem eos!
          </p>
        </div>
        <div className="main__bodyContent">
          <h5>
            <DeveloperBoardIcon />
            Backend Development
          </h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia
            doloremque minima ex non soluta optio sequi quidem corrupti
            repudiandae quae, velit deserunt saepe fuga itaque dolore distinctio
            amet dolorem eos!
          </p>
        </div>

        <div className="main__bodyContent">
          <h5>
            <PhoneAndroidIcon /> Mobile Responsive
          </h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia
            doloremque minima ex non soluta optio sequi quidem corrupti
            repudiandae quae, velit deserunt saepe fuga itaque dolore distinctio
            amet dolorem eos!
          </p>
        </div>
        <div className="main__bodyContent">
          <h5>
            {" "}
            <SupervisorAccountIcon />
            Support
          </h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia
            doloremque minima ex non soluta optio sequi quidem corrupti
            repudiandae quae, velit deserunt saepe fuga itaque dolore distinctio
            amet dolorem eos!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;
