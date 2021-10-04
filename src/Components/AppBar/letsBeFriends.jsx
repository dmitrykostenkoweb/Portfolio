import React from "react";

import { Button, Grid, Link, Box, Popover } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    fontWeight: 700,
  },
  menuItems: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    gap: 20,
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
    <Grid item xs={2}>
      <Button
        className={classes.menuButton}
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        let's be friends
      </Button>

      <Popover
        open={open}
        anchorEl={friendsToggle}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Box className={classes.menuItems}>
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
      </Popover>
    </Grid>
  );
};

export default LetsBeFriends;
