import Map from "../images/map.png";
import Handoff from "../images/handoff.png";
import TheHub from "../images/thehub.png";
import Tadpole from "../images/Tadpole.png";

const projects = [
  {
    title: "AIRadar",
    tech: ["D3.js", "HTML5", "CSS3", "AXIOS"],
    description:
      "D3.js and OpenSky-Api come together to display a live flight tracking map of the United States and all the flights over the country.",
    image: Map,
    url: "https://pages.git.generalassemb.ly/cgibsonmm/air_adar/",
    gitUrl: "https://git.generalassemb.ly/cgibsonmm/air_adar",
  },
  {
    title: "TheHub",
    tech: ["React.js", "HTML5", "CSS3", "Material-Ui", "Axios"],
    description:
      "Frontend React App built using Reddit Api, Youtube Api and a news api to hold in hopes to streamline your social media workflow.",
    image: TheHub,
    url: "https://the-hub.surge.sh/",
    gitUrl: "https://git.generalassemb.ly/cgibsonmm/The_Hub_APP",
  },
  {
    title: "Tadpole",
    tech: [
      "React.js",
      "HTML5",
      "CSS3",
      "Axios",
      "Node.js",
      "Express.js",
      "Postgresql",
    ],
    description:
      "A Full Stake Node, Express, PG, and React application that helps a user to tailor their own brand statement",
    image: Tadpole,
    url: "https://infinite-retreat-33183.herokuapp.com/",
    gitURL: "https://github.com/cgibsonmm/tadpole",
  },
  {
    title: "HandOff",
    tech: [
      "React.js",
      "Ruby on Rails",
      "HTML5",
      "CSS3",
      "Axios",
      "Devise",
      "Postgresql",
    ],
    description:
      "A Full Stack Ruby on Rails and React.js application built with Devise/JWT user auth and file uploading with AWS and Rails Active Storage",
    image: Handoff,
    url: "https://guarded-dawn-04702.herokuapp.com/",
    gitUrl: "https://git.generalassemb.ly/cgibsonmm/HandOFF#handoff",
  },
];

export default projects;
