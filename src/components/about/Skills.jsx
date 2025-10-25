import React from "react";

const skillsContent = [
   { skillClass: "p25", skillPercent: "91", skillName: "Microsoft SharePoint" },
    { skillClass: "p25", skillPercent: "81", skillName: "Microsoft Power Platforms" },
        { skillClass: "p25", skillPercent: "91", skillName: "Microsoft 365" },

         { skillClass: "p25", skillPercent: "91", skillName: "Sharepoint content management" },
  { skillClass: "p25", skillPercent: "91", skillName: "HTML" },
  { skillClass: "p89", skillPercent: "77", skillName: "JAVASCRIPT" },
  { skillClass: "p90", skillPercent: "70", skillName: "CSS" },
   { skillClass: "p70", skillPercent: "71", skillName: "Bootstrap" },
  // { skillClass: "p66", skillPercent: "66", skillName: "PHP" },
  // { skillClass: "p95", skillPercent: "95", skillName: "WORDPRESS" },
  { skillClass: "p50", skillPercent: "75", skillName: "JQUERY" },
  // { skillClass: "p65", skillPercent: "65", skillName: "ANGULAR" },
  { skillClass: "p45", skillPercent: "77", skillName: "REACT" },
   { skillClass: "p70", skillPercent: "70", skillName: "node" },
   { skillClass: "p70", skillPercent: "70", skillName: "SQL" },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 ${val.skillClass}`}>
            <span>{val.skillPercent}%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
