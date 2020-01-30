import React from "react";
import PropTypes from "prop-types";

const Project = ({ imgURL, projectSkills, liveDemoLink, githubLink }) => {
  return (
    <div className="col">
      <div className="card" style={{ minWidth: "18rem", margin: "1rem 0" }}>
        {!imgURL.includes("loom") ? (
          <img
            className="card-img-top project-img-size"
            src={imgURL}
            alt="project details"
          />
        ) : (
          <div
            style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}
          >
            <iframe
              src={imgURL}
              frameborder="0"
              webkitallowfullscreen
              mozallowfullscreen
              allowfullscreen
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%"
              }}
            ></iframe>
          </div>
        )}
        <ul className="list-group list-group-flush">
          {projectSkills &&
            projectSkills.map((skill, index) => (
              <li className="list-group-item" key={index}>
                {skill}
              </li>
            ))}
        </ul>
        <div className="card-body">
          <a
            href={liveDemoLink}
            className="card-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-chrome" />
            LiveDemo
          </a>
          <a
            href={githubLink}
            className="card-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github" />
            Github Repo
          </a>
        </div>
      </div>
    </div>
  );
};

Project.propTypes = {
  imgURL: PropTypes.string,
  projectSkills: PropTypes.array,
  liveDemoLink: PropTypes.string,
  githubLink: PropTypes.string
};

export default Project;
