import React, { useState } from "react";

import PropTypes from "prop-types";

import avatar from "../Assets/avatar.jpg";

import {
  AppBar,
  Toolbar,
  useScrollTrigger,
  Slide,
  Link,
  Button,
  Menu,
  MenuItem,
  Avatar,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    justifyContent: "space-between",
  },
  links: {
    maxWidth: 360,
    display: "flex",
    justifyContent: "space-around",
    flexGrow: 1,
  },
  avatar: {
    width: theme.spacing(6),
    height: theme.spacing(6),
  },

  menu: {
    marginTop: theme.spacing(8),
  },
}));

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const HideAppBar = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const classes = useStyles();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  ///
  ///
  const linksData = [
    { label: "projects", href: "#projects", id: 1 },
    { label: "about", href: "#about", id: 2 },
    { label: "contact", href: "#contact", id: 3 },
  ];
  const links = linksData.map((link) => {
    const { label, href, id } = link;

    return (
      <Link key={id} href={href} color="inherit">
        {label}
      </Link>
    );
  });

  return (
    <React.Fragment>
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar variant="dense" className={classes.wrapper}>
            <div className={classes.links}>{links}</div>
            <div>
              <Button onClick={handleClick}>
                <Avatar
                  className={classes.avatar}
                  alt="Dmitry Kostenko"
                  src={avatar}
                  variant="circular"
                />
              </Button>
              <Menu
                className={classes.menu}
                id="fade-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>
                  <Link
                    color="inherit"
                    href="https://www.linkedin.com/in/dmitry-kostenkoweb/"
                    target="blank"
                  >
                    <LinkedInIcon />
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link
                    color="inherit"
                    href="https://github.com/dmitrykostenkoweb"
                    target="blank"
                  >
                    <GitHubIcon />
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link
                    color="inherit"
                    href="https://www.instagram.com/runway_fm/"
                    target="blank"
                  >
                    <InstagramIcon />
                  </Link>
                </MenuItem>
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </React.Fragment>
  );
};

export default HideAppBar;
