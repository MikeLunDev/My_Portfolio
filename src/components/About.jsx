import React, { Component } from "react";
import Skill from "./Skill";
import Education from "./Education";

class About extends Component {
  state = {
    skills: [
      ["HTML5", "fab fa-html5 fa-2x"],
      ["CSS3", "fab fa-css3 fa-2x"],
      ["JavaScript", "fab fa-js fa-2x"],
      ["React", "fab fa-react fa-2x"],
      ["Node.js", "fab fa-node fa-2x"],
      ["MongoDB", "fas fa-database fa-2x"]
    ],
    educations: [
      [
        "I'm now on the other side teaching other students",
        "Tutor at strive school",
        "(12/2019 - Present)"
      ],
      [
        "Full stack course",
        "6-month strive school bootcamp",
        "(06/2019 - 12/2019)"
      ],
      [
        "Chemical engeneering / computer science",
        "Dropout",
        "(09/2016 - 06/2019)"
      ]
    ]
  };
  render() {
    return (
      <div className="container mb-5">
        <div className="row">
          <div className="col-12 col-lg-6">
            <h2 className="font-anton">My skill set</h2>
            <ul className="list-group">
              {this.state.skills.map((skill, index) => (
                <Skill
                  key={index}
                  skillName={skill[0]}
                  notaprop={22}
                  skillIcon={skill[1]}
                />
              ))}
            </ul>
          </div>
          <div className="col-12 col-lg-6">
            <h2 className="font-anton">{"Education & Working"}</h2>
            <ul className="list-group">
              {this.state.educations.map((education, index) => (
                <Education
                  key={index}
                  educationTitle={education[0]}
                  educationCampus={education[1]}
                  educationTime={education[2]}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
