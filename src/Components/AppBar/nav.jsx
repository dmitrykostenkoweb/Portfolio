import React from "react";
import {
  Grid,
  BottomNavigation,
  BottomNavigationAction,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  flex: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  nav: {
    display: "flex",
    justifyContent: "space-around",
    gap: 40,
    alignItems: "center",
  },
}));

const Nav = ({ darkMode, value, setValue, matches }) => {
  const classes = useStyles();

  const linksData = [
    { label: "About", href: "#about", id: 1 },
    { label: "Portfolio", href: "#contact", id: 2 },
  ];
  const links = linksData.map((link) => {
    const { label, id } = link;

    return (
      <BottomNavigationAction
        style={darkMode ? { color: "#fff" } : { color: "#000" }}
        label={label}
        key={id}
      />
    );
  });

  return (
    <Grid className={classes.flex} item xs={8}>
      <BottomNavigation
        className={classes.nav}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        {links}
      </BottomNavigation>
    </Grid>
  );
};

export default Nav;
