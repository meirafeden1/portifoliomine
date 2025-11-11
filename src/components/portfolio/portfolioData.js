import Image1 from "../../assets/img/portfolio/project-1.jpg";
import Image2 from "../../assets/img/portfolio/project-2.jpg";
import Image3 from "../../assets/img/portfolio/project-3.jpg";

import Image5 from "../../assets/img/portfolio/ayoutube.jpg";

import Image7 from "../../assets/img/portfolio/131net.jpg"


const PortfolioData = [
  {
    id: 1,
    type: "Apple mockup project",
    image: Image1,
    tag: ["mockup"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Website",      
        language: "HTML, CSS, Javascript, JQuery and Bootstrap",
        preview: "www.myapple.com",
        link: "https://meirafeden1.github.io/Apple-project-mine/",
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
    type: "Evangadi mockup project",
    image: Image3,
    tag: [],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "Website",        
        language: "REACT, NODE.JS, SQL",
        preview: "https://Evangadimine.com",
        link: "https://dulcet-tiramisu-65b951.netlify.app/",
      },
    ],
  },
  
   {
    id: 4,
    type: "search anything mockup project",
    image: Image5,
    tag: [],
    delayAnimation: "300",
    modalDetails: [
      {
        project: "Website",        
        language: "REACT, NODE.JS",
        preview: "https://mytubesearch.com",
        link: "https://my-tubesearch.netlify.app/",
      },
    ],
  },

      {
    id: 5,
    type: "A Netflix mockup project",
    image: Image7,
    tag: [],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "Website",        
        language: "REACT, NODE.JS",
        preview: "https://mynetflix.com",
        link: "https://meirafeden1.github.io/Netflix-project/",
      },
    ],
  },
    ];
  


export default PortfolioData;
