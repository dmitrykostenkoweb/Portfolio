import React, { useEffect, useState } from "react";
import {
  Grid,
  Typography,
  Link,
  Box,
  Button,
  Divider,
  BottomNavigation,
  BottomNavigationAction,
} from "@material-ui/core/";

import { makeStyles } from "@material-ui/core/styles";

import laptopImg from "../Assets/background_images/laptop.png";

const useStyles = makeStyles((theme) => ({
  title: {
    margin: theme.spacing(4, 0, 0),
  },
  projectImg: {
    maxWidth: "90%",
    borderRadius: theme.shape.borderRadius,
  },
  nav: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
}));

const Portfolio = ({
  itemProject,
  projectsData,
  value,
  setValue,
  darkMode,
  matches,
}) => {
  const classes = useStyles();
  const [offsetY, setOffsetY] = useState(0);
  const handelScroll = () => {
    setOffsetY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handelScroll);
    return () => window.removeEventListener("scroll", handelScroll);
  }, []);


  const navigation = projectsData.map((item) => {
    const { title, id } = item;

    return (
      <BottomNavigationAction
        label={title}
        key={id}
        style={darkMode ? { color: "#fff" } : { color: "#000" }}
      />
    );
  });

  const element = itemProject.map((item) => {
    const {
      img,
      title,
      description,
      technologies,
      herokuLink,
      githubLink,
      order,
      id,
    } = item;

    const tech = technologies.map((item) => {
      const { title, icon, id } = item;
      return (
        <Box style={{ display: "flex", gap: 10, margin: "0 10px" }} key={id}>
          <img style={{ width: 30, padding: 2 }} src={icon} alt="icon" />
          <Typography>{title}</Typography>
        </Box>
      );
    });

    return (
      <Grid
        style={{
          // transform: `translateY(${offsetY * coefficient}px)`,
          marginTop: 50,
        }}
        item
        xs={12}
        key={id}
      >
        <Grid item xs={12}>
          <Typography
            style={
              matches
                ? { fontSize: 36, fontWeight: 700 }
                : { fontSize: 18, fontWeight: 700 }
            }
            variant="h6"
          >
            {title}
          </Typography>
          <Divider variant="middle" />
          <Typography
            style={matches ? { fontSize: 18 } : { fontSize: 14 }}
            variant="subtitle1"
          >
            {description}
          </Typography>
          <Divider variant="middle" />

          <Grid container>
            <Grid
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                order: 0,
              }}
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
            >
              <img className={classes.projectImg} src={img} alt="img" />
            </Grid>

            <Grid
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "space-around",
                padding: 20,
                order: order,
              }}
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
            >
              <Typography variant="h6" className={classes.title}>
                Technologies:
              </Typography>
              <Box
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  padding: "20px 0",
                }}
              >
                {tech}
              </Box>
              <Box
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  gap: 20,
                  padding: "20px 0",
                }}
              >
                <Button
                  color="secondary"
                  variant="contained"
                  style={{
                    background:
                      "linear-gradient(90deg, #8B5CF6 0%, #EC4899 43.9%)",
                  }}
                >
                  <Link
                    underline="none"
                    color="inherit"
                    target="_blank"
                    href={herokuLink}
                    rel="noreferrer"
                  >
                    Live
                  </Link>
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  style={{
                    background:
                      "linear-gradient(90deg, #F59E0B 39.95%, #EF4444 77.15%)",
                  }}
                >
                  <Link
                    underline="none"
                    color="inherit"
                    target="_blank"
                    href={githubLink}
                    rel="noreferrer"
                  >
                    GitHub
                  </Link>
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  });

  return (
    <div style={matches ? { padding: 40 } : { padding: 10 }}>
      <Grid style={{ display: "flex" }} container>
        <Grid xs={12} sm={12} md={6} lg={6} item>
          <Typography
            style={
              matches
                ? { fontSize: 36, fontWeight: 700 }
                : { fontSize: 18, fontWeight: 700 }
            }
            align="left"
            variant="h6"
          >
            Here are few of my applications. You can find more on my github
            profile.
          </Typography>
        </Grid>
        <Grid
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transform: `translateY(${offsetY * 0.1}px)`,
          }}
          xs={12}
          sm={12}
          md={6}
          lg={6}
          item
        >
          <img src={laptopImg} style={{ width: "50%" }} alt="img" />
        </Grid>
      </Grid>

      <Grid style={{ marginTop: "5vh" }} item>
        <BottomNavigation
          className={classes.nav}
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          style={
            matches ? { flexDirection: "row" } : { flexDirection: "column" }
          }
        >
          {navigation}
        </BottomNavigation>
      </Grid>

      <Grid spacing={5} container>
        {element}
      </Grid>
    </div>
  );
};

export default Portfolio;
