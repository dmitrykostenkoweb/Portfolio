import React from "react";

import { NavLink as RouterLink } from "react-router-dom";

import { Grid, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  nav: {
    display: "flex",
    justifyContent: "space-around",
    gap: 20,
    alignItems: "center",
  },
}));

const Nav = ({ darkMode, matches }) => {
  const classes = useStyles();

  const activeNavStyles = {
    fontWeight: "bold",
    background: "linear-gradient(90deg, #8B5CF6 0%, #EC4899 43.9%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };
  return (
    <Grid
      className={classes.nav}
      style={
        !matches
          ? { flexDirection: "column", marginTop: 20 }
          : { flexDirection: "row" }
      }
      item
      xs={8}
    >
      <Link
        style={darkMode ? { color: "#fff" } : { color: "#000" }}
        component={RouterLink}
        exact
        to="/"
        underline="none"
        activeStyle={activeNavStyles}
      >
        About
      </Link>
      <Link
        style={darkMode ? { color: "#fff" } : { color: "#000" }}
        component={RouterLink}
        exact
        to="/portfolio"
        underline="none"
        activeStyle={activeNavStyles}
      >
        Portfolio
      </Link>
      <Link
        style={darkMode ? { color: "#fff" } : { color: "#000" }}
        component={RouterLink}
        to="/contact"
        underline="none"
        activeStyle={activeNavStyles}
      >
        Contact
      </Link>
    </Grid>
  );
};

export default Nav;
