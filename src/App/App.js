import React from "react";

import { CssBaseline, Grid, Container } from "@material-ui/core/";

import AppBar from "../Components/AppBar";
import Projects from "../Components/Projects";

import miniTweeter from "../Assets/miniTweeter.jpg";

const App = (props) => {
  const projectsData = [
    {
      img: miniTweeter,
      title: " Mini Twitter",
      description:
        'A "React" application that mimics the functionality of twitter',
      technologies: [
        { title: "React", icon: "#", id: 1 },
        { title: "Reactstrap", icon: "#", id: 2 },
        { title: "Bootstrap", icon: "#", id: 3 },
        { title: "Styled components", icon: "#", id: 4 },
      ],
      id: 2,
    },

    {
      img: miniTweeter,
      title: " Mini Twitter",
      description:
        'A "React" application that mimics the functionality of twitter',
      technologies: [
        { title: "React", icon: "#", id: 1 },
        { title: "Reactstrap", icon: "#", id: 2 },
        { title: "Bootstrap", icon: "#", id: 3 },
        { title: "Styled components", icon: "#", id: 4 },
      ],
      id: 2,
    },
  ];

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar />
      <Container>
        <Grid container>
          <Grid xs={12} item>
            <Projects projectsData={projectsData} id="projects" />
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default App;
