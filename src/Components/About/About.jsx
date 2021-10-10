import React from "react";

import { Grid, Typography, Button, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

import Dima from "../../Assets/background_images/Dima.png";

import cv from "../../Assets/Junior-Frontend_Dmitry-Kostenko.pdf";

const useStyles = makeStyles((theme) => ({
  frontend: {
    fontWeight: 700,
    fontSize: 36,
    background: "linear-gradient(90deg, #F59E0B 39.95%, #EF4444 77.15%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    margin: "0 4px",
  },
  developer: {
    fontWeight: 700,
    background: "linear-gradient(90deg, #8B5CF6 0%, #EC4899 43.9%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    margin: "0 4px",
  },
}));

const About = ({ matches }) => {
  const classes = useStyles();

  return (
    <Grid className="flexCenter" item xs={12}>
      <Grid style={{ padding: 40 }} item xs={12} sm={12} md={6} lg={6}>
        <Typography
          style={{
            fontSize: matches ? 36 : 18,
            fontWeight: 700,
          }}
          align="left"
          className={classes.text}
        >
          Hey! I am Dmitry Kostenko.
        </Typography>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <span
            style={{ fontSize: matches ? 36 : 18 }}
            className={classes.frontend}
          >
            Frontend
          </span>
          <span
            style={{ fontSize: matches ? 36 : 18 }}
            className={classes.developer}
          >
            Developer
          </span>
        </div>
        <Typography style={{ marginTop: 40 }}>
          I am very passionate about interface development while taking into
          consideration the latest trends and technologies.
        </Typography>

        <Link download href={cv} underline="none">
          <Button style={{ marginTop: 40 }} color="primary" variant="contained">
            Download my CV <FileDownloadIcon style={{ margin: "0 10px " }} />
          </Button>
        </Link>
      </Grid>
      <Grid
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
        item
        xs={12}
        sm={12}
        md={6}
        lg={6}
      >
        <img style={{ width: "100%" }} src={Dima} alt="Dima" />
      </Grid>
    </Grid>
  );
};

export default About;
