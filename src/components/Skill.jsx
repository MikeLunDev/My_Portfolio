import React from "react";
import PropTypes from "prop-types";

const Skill = ({ skillName, skillIcon }) => {
  return (
    <div>
      <li className="list-group-item">
        <p className="mt-3">
          <i className={skillIcon} />
        </p>
        <p>{skillName}</p>
      </li>
    </div>
  );
};

Skill.propTypes = {
  skillName: PropTypes.string,
  skillIcon: PropTypes.string
  //  notaprop: PropTypes.number
};

export default Skill;
