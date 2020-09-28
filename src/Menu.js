import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import "./Menu.css";
function Menu() {
  const [menu, setMenu] = useState(false);
  const props = useSpring({
    opacity: menu ? 1 : 0,
    backgroundColor: menu ? "orange" : "yellow",
  });
  const ShowMenu = () => setMenu(!menu);
  return (
    <div className="menu">
      <div className="menu-header">
        <animated.div className="menu-link" style={props}>
          <Link className="link" to="/portfolio">
            Portfolio
          </Link>
          <Link className="link" to="/resume">
            Resume
          </Link>
        </animated.div>

        <MenuIcon className="menu-icon" onClick={ShowMenu} />
      </div>
    </div>
  );
}

export default Menu;
