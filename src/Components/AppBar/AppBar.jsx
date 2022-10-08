import React, { useState } from "react";

import SocialNetworks from "./SocialNetworks/SocialNetworks";
import Nav from "./Nav/Nav";
import ModeBtn from "./ModeBtn/ModeBtn";

import { Popover, Button, Grid, Link, Box } from "@mui/material";

// import { makeStyles } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";

// const useStyles = makeStyles(() => ({
//   container: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//
//   menuButton: {
//     fontWeight: 700,
//   },
//   menuItems: {
//     display: "flex",
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//     gap: 20,
//     padding: 10,
//   },
// }));

const MyAppBar = ({
  setValue,
  value,
  setDarkMode,
  darkMode,
  matches,
  friendsToggle,
  setFriendsToggle,
  }) => {
  // const classes = useStyles();

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
        className='container'
        container
      >
        <Box className='menuItems' sx={{ p: 2 }}>
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
      <Grid className='container' container>
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
            className='classes'
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
            <Box className='menuItems'>{appBarContentMobile}</Box>
          </Popover>
          <ModeBtn darkMode={darkMode} setDarkMode={setDarkMode} />
        </Grid>
      ) : (
        <Box className='classes'>{appBarContent}</Box>
      )}
    </React.Fragment>
  );
};
export default MyAppBar;
