import React from "react";

const experienceContent = [
  {
    year: "   2021 - Present",
    position: " software engineer",
    compnayName: "Insperity Inc",
    details: `sharepoint Developer (online) and web developer`,
  },
  {
    year: "2015- 2021",
    position: " sharepoint Developer",
    compnayName: "siltek Inc",
    details: `sharepoint developer on-premise`,
  },
  // {
  //   year: "2005 - 2013",
  //   position: "Consultant",
  //   compnayName: "Videohive",
  //   details: `Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur
  //       elit, sed do eiusmod tempor duntt`,
  // },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
