import React, { useState } from "react";

import { Popover, Button, Grid, Link, Box } from "@material-ui/core";

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
    gap: 20,
    padding: 10,
  },
}));

const LetsBeFriends = (props) => {
  const classes = useStyles();
  ///let's be friends
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  ///

  return (
    <Grid className={classes.flex} item xs={2}>
      <Button
        className={classes.menuButton}
        aria-describedby={id}
        onClick={handleClick}
      >
        let's be friends
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
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
      </Popover>
    </Grid>
  );
};

export default LetsBeFriends;
