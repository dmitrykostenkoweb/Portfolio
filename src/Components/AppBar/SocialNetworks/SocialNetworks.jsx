import React from "react";

import { Button, Grid, Link, Box, Popover } from "@mui/material";

// import { makeStyles } from "@mui/material/styles";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";

// const useStyles = makeStyles(() => ({
//   menuItems: {
//     display: "flex",
//     flexDirection: "row",
//     justifyContent: "space-around",
//     alignItems: "center",
//     gap: 20,
//   },
// }));

const SocialNetworks = ({ setFriendsToggle, friendsToggle }) => {
  // const classes = useStyles();


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
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        style={{ fontWeight: 700 }}
      >
        lets be friends
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
        <Box className='menuItems'>
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

export default SocialNetworks;
