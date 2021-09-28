import React, { useState, useEffect } from "react";

import { Grid, Typography, Button, Link } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import arrow from "../Assets/arrow-right.svg";
import Dima from "../Assets/background_images/Dima.png";

import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles((theme) => ({
  margin: {
    marginTop: 40,
  },
  wrapper: {
    padding: 40,
  },

  text: {
    fontWeight: 700,
    fontSize: 36,
  },
  frontend: {
    fontWeight: 700,
    fontSize: 36,
    background: "linear-gradient(90deg, #F59E0B 39.95%, #EF4444 77.15%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    margin: "0 4px",
  },
  developer: {
    fontWeight: 700,
    fontSize: 36,
    background: "linear-gradient(90deg, #8B5CF6 0%, #EC4899 43.9%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    margin: "0 4px",
  },
}));

const About = ({ matches }) => {
  const classes = useStyles();

  const [offsetY, setOffsetY] = useState(0);
  const handelScroll = () => {
    setOffsetY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handelScroll);
    return () => window.removeEventListener("scroll", handelScroll);
  }, []);

  let coefficient = 0.3;

  return (
    <Grid
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
      }}
      item
      xs={12}
    >
      <Grid
        style={{
          transform: `translateY(${offsetY * coefficient}px)`,
        }}
        className={classes.wrapper}
        item
        xs={12}
        sm={12}
        md={6}
        lg={6}
      >
        <Typography
          style={matches ? { fontSize: 36 } : { fontSize: 18 }}
          align="left"
          className={classes.text}
        >
          Hey! I am Dmitry Kostenko.
        </Typography>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <span
            style={matches ? { fontSize: 36 } : { fontSize: 18 }}
            className={classes.frontend}
          >
            Frontend
          </span>
          <span
            style={matches ? { fontSize: 36 } : { fontSize: 18 }}
            className={classes.developer}
          >
            Developer
          </span>
        </div>
        <Typography className={classes.margin}>
          I am very passionate about interface development while taking into
          consideration the latest trends and technologies.
        </Typography>
        <Link
        underline="none"
          rel="stylesheet"
          href="https://github.com/dmitrykostenkoweb"
          target="_blank"
        >
          <Button
            className={classes.margin}
            color="primary"
            variant="contained"
          >
            My GitHub <GitHubIcon style={{ margin: "0 10px " }} />
            <img src={arrow} alt="arrow" />
          </Button>
        </Link>
      </Grid>
      <Grid
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
        item
        xs={12}
        sm={12}
        md={6}
        lg={6}
      >
        <img style={{ width: "100%" }} src={Dima} alt="Dima" />
      </Grid>
    </Grid>
  );
};

export default About;
