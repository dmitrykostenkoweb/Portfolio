import React from "react";

import donat from "../Assets/background_images/donat.png";

import { Box } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    position: "fixed",
    width: "100vw",
    height: "100%",
    // zIndex: -10,
    // background: "#000000",
    overflow: "hidden",
  },

  gradient: {
    position: "absolute",
    top: -200,
    left: -200,
    width: 720,
    height: 720,
    background:
      "linear-gradient(180deg, rgba(0, 194, 255, 0) 0%, #FF29C3 100%)",
    opacity: 0.8,
    filter: "blur(200px)",
    transform: "rotate(-17.38deg)",
  },
  gradient2: {
    position: "absolute",
    bottom: -200,
    right: -200,
    width: 600,
    height: 600,
    background:
      " linear-gradient(180deg, rgba(0, 194, 255, 0) 0%, #FF29C3 100%)",
    opacity: 0.6,
    filter: "blur(200px)",
    transform: "rotate(-17.38deg)",
  },
  donat: {
    position: "absolute",
    bottom: 30,
    right: -30,
  },
}));

const Background = ({ darkMode }) => {
  const classes = useStyles();

  return (
    <>

      <Box
        style={darkMode ? { background: "#000" } : { background: "#fff" }}
        className={classes.container}
      >
        <Box className={classes.gradient}></Box>
        <Box className={classes.gradient2}></Box>
        <img className={classes.donat} src={donat} alt="donat" />
      </Box>
    </>
  );
};

export default Background;
