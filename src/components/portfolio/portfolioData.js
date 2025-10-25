import Image1 from "../../assets/img/portfolio/project-1.jpg";
import Image2 from "../../assets/img/portfolio/project-2.jpg";
import Image3 from "../../assets/img/portfolio/project-3.jpg";

const PortfolioData = [
  {
    id: 1,
    type: "mockup project",
    image: Image1,
    tag: ["mockup"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Website",      
        language: "HTML, CSS, Javascript, JQuery and Bootstrap",
        preview: "www.myapple.com",
        link: "https://www.envato.com/",
      },
    ],
  },
  {
    id: 2,
    type: "Amazon mockup project",
    image: Image2, 
    tag: ["mockup"], 
    delayAnimation: "100",
    modalDetails: [
      {
        project: "web application",       
        language: "REACT, NODE.JS",
        preview: "www.Amazonmine.com",
        link: "https://whimsical-smakager-fc6172.netlify.app/",
      },
    ],
  },
  {
    id: 3,
    type: "mockup project",
    image: Image3,
    tag: [],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "Website",        
        language: "REACT, NODE.JS, SQL",
        preview: "https://Evangadimine.com",
        link: "https://dulcet-tiramisu-65b951.netlify.app/home",
      },
    ],
  },
  
    ];
  


export default PortfolioData;
