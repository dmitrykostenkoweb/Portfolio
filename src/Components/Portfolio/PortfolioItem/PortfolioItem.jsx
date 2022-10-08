import React from "react";
import {
  Grid,
  Typography,
  Link,
  Box,
  Button,
  Divider,
} from "@mui/material/";

// import { makeStyles } from "@mui/material/styles";

import Services from "../../../Services/Services";

// const useStyles = makeStyles((theme) => ({
//   title: {
//     margin: theme.spacing(4, 0, 0),
//   },
//   projectImg: {
//     maxWidth: "90%",
//     borderRadius: theme.shape.borderRadius,
//   },
// }));

const PortfolioItem = ({ matches, navValue }) => {
  // const classes = useStyles();

  const resources = new Services();

  const element = resources.getPortfolioList(navValue).map((item) => {
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
    //technologies
    const tech = technologies.map((item) => {
      const { title, icon, id } = item;
      return (
        <Box style={{ display: "flex", gap: 10, margin: "0 10px" }} key={id}>
          <img style={{ width: 30, padding: 2 }} src={icon} alt="icon" />
          <Typography>{title}</Typography>
        </Box>
      );
    });
    //
    return (
      <Grid
        style={{
          marginTop: 40,
        }}
        container
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
                padding: 20,
              }}
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
            >
              <Link
                underline="none"
                color="inherit"
                target="_blank"
                href={herokuLink}
                rel="noreferrer"
                style={{ width: "100%", height: "100%" }}
              >
                <img className='projectImg' src={img} alt="img" />
              </Link>
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
              <Typography variant="h6" className='title'>
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
  return <>{element}</>;
};

export default PortfolioItem;
