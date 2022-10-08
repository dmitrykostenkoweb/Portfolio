import React, { useState } from "react";

import { Route, Routes } from "react-router";


import { TransitionGroup, CSSTransition } from "react-transition-group";

import AppBar from "../AppBar/AppBar";
import About from "../About/About";
import Parallax from "../Parallax";
import Portfolio from "../Portfolio/Portfolio";
import Contact from "../Contact/Contact";
import PopUp from "../PopUp/PopUp";

import { Paper, useMediaQuery } from "@mui/material/";

import { useSpring, animated } from "react-spring";

import "./transition.css";

const Content = ({ setDarkMode, darkMode, theme }) => {
  const [navValue, setNavValue] = useState(0);
  const [friendsToggle, setFriendsToggle] = useState(null);
  const [openPopUp, setOpenPopUp] = useState(false);
  const [popUpText, setPopUpText] = useState("");
  const [popUpType, setPopUpType] = useState("");

  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.up("md"));


  ///animation
  const calc = (x, y) => [
    -(y - window.innerHeight / 10) / 400,
    (x - window.innerWidth / 10) / 400,
    1,
  ];
  const trans = (x, y, s) =>
    `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));
  const booleanTransform = Boolean(friendsToggle);
  ///
  return (
    <>
      <animated.div
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{
          transform: booleanTransform ? "none" : props.xys.to(trans),
          width: matches ? "80vw" : "90vw",
          margin: "10vh auto ",
        }}
      >
        <Paper
          style={{
            border: !darkMode ? "solid 1px rgba(0, 0, 0, 0.12)" : "",
            padding: !matches ? 5 : "",
          }}
        >
          {matchesMD && <Parallax />}
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
                  <Routes 
                  location={location}
                  >
                    <Route exact path="/">
                      <About matches={matches} />
                    </Route>
                    <Route path="/portfolio">
                      <Portfolio darkMode={darkMode} matches={matches} />
                    </Route>
                    <Route path="/contact">
                      <Contact
                        matches={matches}
                        matchesMD={matchesMD}
                        darkMode={darkMode}
                        setOpenPopUp={setOpenPopUp}
                        setPopUpText={setPopUpText}
                        setPopUpType={setPopUpType}
                      />
                    </Route>
                    <Route path="*">
                      <h2>NotFound</h2>
                    </Route>
                  </Routes>
                </CSSTransition>
              </TransitionGroup>
            )}
          />
        </Paper>
      </animated.div>
      <PopUp
        openPopUp={openPopUp}
        setOpenPopUp={setOpenPopUp}
        popUpText={popUpText}
        popUpType={popUpType}
      />
    </>
  );
};

export default Content;
