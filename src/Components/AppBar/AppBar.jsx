import React, { useState } from "react";

import SocialNetworks from "./SocialNetworks/SocialNetworks";
import Nav from "./Nav/Nav";
import ModeBtn from "./ModeBtn/ModeBtn";

import { Popover, Button, Grid, Link, Box } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  menuButton: {
    fontWeight: 700,
  },
  menuItems: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    padding: 10,
  },
}));

const MyAppBar = ({
  setValue,
  value,
  setDarkMode,
  darkMode,
  matches,
  friendsToggle,
  setFriendsToggle,
  }) => {
  const classes = useStyles();

  /// Burger
  const [anchorElBurger, setAnchorElBurger] = useState(null);
  const handleClickBurger = (event) => {
    setAnchorElBurger(event.currentTarget);
  };
  const handleCloseBurger = () => {
    setAnchorElBurger(null);
  };
  const openBurger = Boolean(anchorElBurger);
  const idBurger = openBurger ? "simple-popover" : undefined;
  ///

  const appBarContentMobile = () => {
    return (
      <Grid
        className={classes.container}
        container
      >
        <Box className={classes.menuItems} sx={{ p: 2 }}>
          <Link
            color="textPrimary"
            href="https://www.linkedin.com/in/dmitry-kostenkoweb/"
            target="blank"
          >
            <LinkedInIcon />
          </Link>
          <Link
            color="textPrimary"
            href="https://github.com/dmitrykostenkoweb"
            target="blank"
          >
            <GitHubIcon />
          </Link>
          <Link
            color="textPrimary"
            href="https://www.instagram.com/runway_fm/"
            target="blank"
          >
            <InstagramIcon />
          </Link>
        </Box>
        <Nav
          matches={matches}
          darkMode={darkMode}
          value={value}
          setValue={setValue}
        />
      </Grid>
    );
  };

  ///
  const appBarContent = () => {
    return (
      <Grid className={classes.container} container>
        <SocialNetworks
          friendsToggle={friendsToggle}
          setFriendsToggle={setFriendsToggle}
        />
        <Nav
          matches={matches}
          darkMode={darkMode}
          value={value}
          setValue={setValue}
        />
        <ModeBtn darkMode={darkMode} setDarkMode={setDarkMode} />
      </Grid>
    );
  };

  return (
    <React.Fragment>
      {!matches ? (
        <Grid style={{ display: "flex", justifyContent: "space-between" }} item>
          <Button
            className={classes.menuButton}
            aria-describedby={idBurger}
            onClick={handleClickBurger}
          >
            {!anchorElBurger && <MenuIcon />}
          </Button>
          <Popover
            id={idBurger}
            open={openBurger}
            anchorEl={anchorElBurger}
            onClose={handleCloseBurger}
            anchorOrigin={{
              vertical: "center",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <Box className={classes.menuItems}>{appBarContentMobile}</Box>
          </Popover>
          <ModeBtn darkMode={darkMode} setDarkMode={setDarkMode} />
        </Grid>
      ) : (
        <Box className={classes.menuItems}>{appBarContent}</Box>
      )}
    </React.Fragment>
  );
};
export default MyAppBar;
