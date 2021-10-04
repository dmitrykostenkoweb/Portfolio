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
    zIndex: 100,
  },
}));

const Nav = ({ darkMode, value, setValue, matches }) => {
  const classes = useStyles();
  console.log(matches);
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
        activeStyle={{
          fontWeight: "bold",
          background: "linear-gradient(90deg, #8B5CF6 0%, #EC4899 43.9%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        About
      </Link>
      <Link
        style={darkMode ? { color: "#fff" } : { color: "#000" }}
        component={RouterLink}
        exact
        to="/portfolio"
        underline="none"
        activeStyle={{
          fontWeight: "bold",
          background: "linear-gradient(90deg, #F59E0B 39.95%, #EF4444 77.15%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Portfolio
      </Link>
      <Link
        style={darkMode ? { color: "#fff" } : { color: "#000" }}
        component={RouterLink}
        to="/contact"
        underline="none"
        activeStyle={{
          fontWeight: "bold",
          background: "linear-gradient(90deg, #8B5CF6 0%, #EC4899 43.9%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Contact
      </Link>
    </Grid>
  );
};

export default Nav;
