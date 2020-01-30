import React from "react";
import myAvatar from "../assets/avatar.svg";

const Main = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <img className="avatar-img" src={myAvatar} alt="my avatar" />
          <div className="banner-text">
            <h1>Software Developer</h1>
            <hr />
            <p>
              HTML5 | CSS3 | Bootstrap4| JavaScript ES6+ | React | Node.js |
              MongoDB
            </p>
          </div>
          <div className="social-links">
            <a
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/michele-lunati-dev/"
              target="_blank"
            >
              <i className="fab fa-linkedin" />
            </a>
            <a
              rel="noopener noreferrer"
              href="https://github.com/MikeLunDev"
              target="_blank"
            >
              <i className="fab fa-github" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
