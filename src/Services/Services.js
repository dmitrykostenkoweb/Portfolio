import miniTweeter from "../Assets/miniTweeter.jpg";
import toDo from "../Assets/toDo.jpg";
import portfolio from "../Assets/portfolio.jpg";
import movieApp from "../Assets/movie-app.jpg";

import logoReact from "../Assets/projects_icons/react.svg";
import logoReactstrap from "../Assets/projects_icons/reactstrap.svg";
import logoBootstrap from "../Assets/projects_icons/bootstrap.svg";
import logoStyledComponents from "../Assets/projects_icons/styled-components.svg";
import logoJson from "../Assets/projects_icons/json.svg";
import logoScss from "../Assets/projects_icons/sass.svg";
import logoAxios from "../Assets/projects_icons/axios.svg";
import logoMaterialUI from "../Assets/projects_icons/material-ui.svg";
import logoReactSpring from "../Assets/projects_icons/react-spring.svg";
import logoEmailjs from "../Assets/projects_icons/emailjs.svg";
import logoNuxt from '../Assets/projects_icons/nuxt.svg'

const projectsData = [
  {
    img: movieApp,
    title: "Movie App",
    description: "Application that shows the latest movies",
    technologies: [
      { title: "NuxtJs", icon: logoNuxt, id: 1 },
      { title: " Material UI", icon: logoMaterialUI, id: 2 },
      { title: "react-spring", icon: logoReactSpring, id: 3 },
      { title: "EmailJs", icon: logoEmailjs, id: 4 },
    ],
    herokuLink: "https://dmitrykostenko.herokuapp.com/",
    githubLink: "https://github.com/dmitrykostenkoweb/Portfolio",
    order: 1,
    id: 0,
  },
  {
    img: portfolio,
    title: "My portfolio site",
    description: "Site where you can find my projects and their description",
    technologies: [
      { title: "React", icon: logoReact, id: 1 },
      { title: " Material UI", icon: logoMaterialUI, id: 2 },
      { title: "react-spring", icon: logoReactSpring, id: 3 },
      { title: "EmailJs", icon: logoEmailjs, id: 4 },
    ],
    herokuLink: "https://dmitrykostenko.herokuapp.com/",
    githubLink: "https://github.com/dmitrykostenkoweb/Portfolio",
    order: -1,
    id: 1,
  },
  {
    img: toDo,
    title: "ToDo App",
    description:
      "Handy application for tasks and sorting them by folders.The application has the ability to create folders with tasks and set a color for them. All data is written to the json-server.",
    technologies: [
      { title: "React", icon: logoReact, id: 1 },
      { title: "json-server", icon: logoJson, id: 2 },
      { title: "SCSS", icon: logoScss, id: 3 },
      { title: "AXIOS", icon: logoAxios, id: 4 },
    ],
    herokuLink: "https://kost-todo.herokuapp.com",
    githubLink: "https://github.com/dmitrykostenkoweb/toDo",
    order: 1,
    id: 2,
  },
  {
    img: miniTweeter,
    title: "Mini Twitter",
    description:
      'A "React" application that mimics the functionality of twitter',
    technologies: [
      { title: "React", icon: logoReact, id: 1 },
      { title: "Reactstrap", icon: logoReactstrap, id: 2 },
      { title: "Bootstrap", icon: logoBootstrap, id: 3 },
      { title: "Styled components", icon: logoStyledComponents, id: 4 },
    ],
    herokuLink: "https://kost-mini-twitter.herokuapp.com/",
    githubLink: "https://github.com/dmitrykostenkoweb/twitter",
    order: -1,
    id: 3,
  },
];

class Services {
  getData = () => {
    return projectsData;
  };

  getPortfolioList = (value) => {
    const item = projectsData.filter((item) => {
      return item.id === value;
    });
    return item;
  };
}

export default Services;
