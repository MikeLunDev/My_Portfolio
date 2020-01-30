import React, { Component } from "react";
import Project from "./Project";
import { data } from "../mock/data";

class Projects extends Component {
  state = {
    projects: []
  };

  componentDidMount() {
    this.setState({
      projects: data.projects
    });
  }

  render() {
    console.log(this.state.projects);
    return (
      <div className="container">
        <div className="row" style={{ margin: "5em 1em" }}>
          {this.state.projects.map((project, index) => (
            <div className="col-xs-12 col-md-6" key={index}>
              <Project
                imgURL={project[0]}
                projectSkills={project[1]}
                liveDemoLink={project[2]}
                githubLink={project[3]}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Projects;
