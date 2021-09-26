import React, { useState } from "react";

import AppBar from "./AppBar/AppBar";
import About from "./About";
import Parallax from "./Parallax";
import Portfolio from "./Portfolio";

import { Paper } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";

import { useSpring, animated } from "react-spring";

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 50,
  (x - window.innerWidth / 2) / 50,
  1.1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const useStyles = makeStyles((theme) => ({
  wrapper: {
    minHeight: 650,
    margin: "10vh 0",
    // overflow: "hidden",
  },
  paper: {
    position: "relative",
    padding: theme.spacing(2),
    width: "100%",
    background:
      "linear-gradient(106.51deg, rgba(255, 255, 255, 0.05) 3.44%, rgba(255, 255, 255, 0.02) 64.82%)",
    backdropFilter: " blur(30px)",
    borderRadius: 24,
    border: "2px solid white",

    borderImageSource:
      "linear-gradient(106.69deg, rgba(255, 255, 255, 0.25) 4.31%, rgba(255, 255, 255, 0) 45.94%, rgba(21, 28, 46, 0) 64.91%, rgba(21, 28, 46, 0.25) 100%)",
  },
}));

const Content = ({ projectsData, setDarkMode, darkMode, matches }) => {
  const classes = useStyles();
  const [navValue, setNavValue] = useState(0);
  const [portfolioNavValue, setPortfolioNavValue] = useState(0);

  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  const itemProject = projectsData.filter((item) => {
    return item.id === portfolioNavValue;
  });
  return (
    <animated.div
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}
      className={classes.wrapper}
    >
      <Paper
        style={
          !darkMode
            ? { border: "solid 1px rgba(0, 0, 0, 0.12)" }
            : { border: "" }
        }
        className={classes.paper}
      >
        <Parallax />

        <AppBar
          matches={matches}
          setDarkMode={setDarkMode}
          darkMode={darkMode}
          value={navValue}
          setValue={setNavValue}
        />
        {!navValue ? (
          <About matches={matches} />
        ) : (
          <Portfolio
            value={portfolioNavValue}
            setValue={setPortfolioNavValue}
            itemProject={itemProject}
            projectsData={projectsData}
            darkMode={darkMode}
            matches={matches}
          />
        )}
      </Paper>
    </animated.div>
  );
};

export default Content;
