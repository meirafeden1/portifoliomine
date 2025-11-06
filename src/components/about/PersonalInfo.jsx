import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Eden" },
  { meta: "last name", metaInfo: "Abebe" },
  { meta: "Age", metaInfo: "39 Years" },
  { meta: "Nationality", metaInfo: "American" },
  { meta: "Freelance", metaInfo: "Available" },
  { meta: "Address", metaInfo: "U.S.A" },
  { meta: "phone", metaInfo: "+2025978946" },
  { meta: "Email", metaInfo: "meirafeden@hotmail.com" },
    { meta: "langages", metaInfo: "English,  Amharic" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
