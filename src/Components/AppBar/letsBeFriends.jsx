import React, { useState } from "react";

import { Button, Grid, Link, Box, Menu, MenuItem } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";

const useStyles = makeStyles((theme) => ({
  flex: {
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
  },
}));

const LetsBeFriends = ({ setFriendsToggle, friendsToggle }) => {
  const classes = useStyles();
  ///

  ///let's be friends
  const open = Boolean(friendsToggle);
  const handleClick = (event) => {
    setFriendsToggle(event.currentTarget);
  };
  const handleClose = () => {
    setFriendsToggle(null);
  };
  ///

  return (
    <Grid className={classes.flex} item xs={2}>
      <Button
        className={classes.menuButton}
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        let's be friends
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={friendsToggle}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Box className={classes.menuItems}>
          <MenuItem>
            <Link
              color="textPrimary"
              href="https://www.linkedin.com/in/dmitry-kostenkoweb/"
              target="blank"
            >
              <LinkedInIcon />
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              color="textPrimary"
              href="https://github.com/dmitrykostenkoweb"
              target="blank"
            >
              <GitHubIcon />
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              color="textPrimary"
              href="https://www.instagram.com/runway_fm/"
              target="blank"
            >
              <InstagramIcon />
            </Link>{" "}
          </MenuItem>
        </Box>
      </Menu>
    </Grid>
  );
};

export default LetsBeFriends;
