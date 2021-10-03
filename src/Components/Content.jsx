import React, { useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AppBar from "./AppBar/AppBar";
import About from "./About";
import Parallax from "./Parallax";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

import { Paper, useMediaQuery } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";

import { useSpring, animated } from "react-spring";

const calc = (x, y) => [
  -(y - window.innerHeight / 10) / 400,
  (x - window.innerWidth / 10) / 400,
  1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const useStyles = makeStyles((theme) => ({
  wrapper: {
    margin: "10vh 0",
    width: "100%",
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

const Content = ({ projectsData, setDarkMode, darkMode, matches, theme }) => {
  const classes = useStyles();
  const [navValue, setNavValue] = useState(0);
  const [portfolioNavValue, setPortfolioNavValue] = useState(0);
  const [friendsToggle, setFriendsToggle] = useState(null);
  const booleanTransform = Boolean(friendsToggle);

  const matchesParallax = useMediaQuery(theme.breakpoints.up("md"));

  // console.log(booleanTransform);
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  const itemProject = projectsData.filter((item) => {
    return item.id === portfolioNavValue;
  });

  return (
    <Router>
      <animated.div
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={
          booleanTransform
            ? { transform: "none" }
            : { transform: props.xys.interpolate(trans) }
        }
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
          {matchesParallax && <Parallax />}
          <AppBar
            matches={matches}
            setDarkMode={setDarkMode}
            darkMode={darkMode}
            value={navValue}
            setValue={setNavValue}
            friendsToggle={friendsToggle}
            setFriendsToggle={setFriendsToggle}
          />
          <Route
            render={({ location }) => (
              <TransitionGroup>
                <CSSTransition
                  key={location.key}
                  timeout={300}
                  classNames="fade"
                >
                  <Switch location={location}>
                    <Route exact path="/">
                      <About matches={matches} />
                    </Route>
                    <Route path="/portfolio">
                      <Portfolio
                        value={portfolioNavValue}
                        setValue={setPortfolioNavValue}
                        itemProject={itemProject}
                        projectsData={projectsData}
                        darkMode={darkMode}
                        matches={matches}
                      />
                    </Route>
                    <Route path="/contact">
                      <Contact matches={matches} darkMode={darkMode} />
                    </Route>
                    <Route path="*">
                      <div>NotFound</div>
                    </Route>
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            )}
          />
        </Paper>
      </animated.div>
    </Router>
  );
};

export default Content;
