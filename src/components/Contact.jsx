import React from "react";

const Contact = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-6">
          <h2 className="font-anton">Michele Lunati</h2>

          <img
            src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortWaved&accessoriesType=Blank&hairColor=Black&facialHairType=BeardLight&facialHairColor=Black&clotheType=Hoodie&clotheColor=Red&eyeType=Default&eyebrowType=Default&mouthType=Smile&skinColor=Pale"
            alt="my avatar"
            className="avatar-img"
            style={{ height: "20rem", margin: "5rem auto" }}
          />
          <p className="contact-p">
            I'm a Full Stack developer with a natural inclination toward problem
            solving and backend development. Currently looking for a job. I'm
            based in Italy and avaible for relocation.
            <hr />
            <p>
              Competencies:{" "}
              <strong className="white">
                HTML, CSS, JavaScript ES6+, React, Node, MongoDB
              </strong>
            </p>
          </p>
        </div>
        <div className="col-12 col-lg-6">
          <h2 className="font-anton">Contact Me</h2>
          <ul className="list-group" style={{ margin: "10rem auto" }}>
            <li className="list-group-item">
              <p>
                <i className="fa fa-phone fa-3x" />
              </p>
              <p>
                <strong>Mobile</strong>
                <br />
                +39 3895282659
              </p>
            </li>
            <li className="list-group-item">
              <p>
                <i className="fa fa-envelope fa-3x" />
              </p>
              <p>
                <strong>Email</strong>
                <br />
                lunatimichele@gmail.com
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
