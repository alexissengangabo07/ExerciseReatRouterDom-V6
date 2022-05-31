import React from "react";
import {Link, Outlet} from "react-router-dom";

function About() {
  return (
    <div>
      <h1>About</h1>
      <nav>
        <ul>
          <li>
          <Link to="/about/service/" >Service</Link>
          </li>
          <li>
          <Link to="/about/mission/" >Mission</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default About;
