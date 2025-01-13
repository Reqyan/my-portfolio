import React from "react";

const AboutSection = () => {
  return (
    <section id="about">
      <div className="mt-10">
        <h2 style={{ fontSize: "36px", fontWeight: "bold" }}>About me</h2>
        <div className="mt-5" style={{ fontSize: "24px" }}>
            <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
            <li>
              <strong>Area of Expertise:</strong> Informatics engineering
              student with a strong interest in networking, server
              administration, and backend programming.
            </li>
            <li>
              <strong>Passion and Enthusiasm:</strong> Excited to research and
              explore various aspects, including network system design, server
              technologies, and backend development.
            </li>
            <li>
              <strong>Academic Experience:</strong> Developed a deep
              understanding of computer networking principles, server deployment
              strategies, and backend development techniques throughout academic
              studies.
            </li>
            <li>
              <strong>Objective:</strong> Focused on creating innovative and
              efficient solutions in these fields.
            </li>
            </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
