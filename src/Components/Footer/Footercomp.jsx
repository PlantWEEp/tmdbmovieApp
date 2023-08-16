import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

function Footercomp() {
  return (
    <div className="footers">
      <div className="container">
        <div className="footer_line">
          <p>Made with ❤ by Vaishnav</p>
          <Link to="https://github.com/PlantWEEp" target="__blank">
            <span className="github">Github</span>
          </Link>
          <Link to="https://www.linkedin.com/in/your-linkedin-profile">
            <span className="github">LinkedIn</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footercomp;
