import React from "react";
import {
  Grid,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core/";

import { makeStyles } from "@material-ui/core/styles";
import FolderIcon from "@material-ui/icons/Folder";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  wrapper: {
    marginTop: 100,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));

const Projects = ({ projectsData }) => {
  const classes = useStyles();

  const element = projectsData.map((item) => {
    const { img, title, description, technologies } = item;

    const tech = technologies.map((item) => {
      const { title, icon } = item;
      return (
        <ListItem>
          <ListItemIcon>
            <img src={icon} alt="" />
          </ListItemIcon>
          <ListItemText primary={title} />
        </ListItem>
      );
    });

    return (
      <>
        <Grid item xs={6}>
          <img style={{ maxWidth: 500 }} src={img} alt="" />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h4">{title}</Typography>
          <Typography variant="subtitle1">{description}</Typography>

          <Grid item xs={12} md={6}>
            <Typography variant="h6" className={classes.title}>
              Technologies
            </Typography>
            <div className={classes.demo}>
              <List>{tech}</List>
            </div>
          </Grid>
        </Grid>
      </>
    );
  });

  return (
    <div className={classes.wrapper}>
      <div>
        <Typography variant="h2">Projects</Typography>
        <Typography variant="subtitle1">
          Here are few of my applications. You can find more on my github
          profile.
        </Typography>
      </div>

      <Grid container spacing={3}>
        {element}
      </Grid>
    </div>
  );
};

export default Projects;
