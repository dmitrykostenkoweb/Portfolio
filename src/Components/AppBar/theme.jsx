import React from "react";

import moon from "../../Assets/moon.svg";
import sun from "../../Assets/sun.svg";
import { Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  flex: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const Theme = ({ darkMode, setDarkMode }) => {
  const classes = useStyles();

  return (
    <Grid className={classes.flex} item xs={2}>
      <Button onClick={() => setDarkMode(!darkMode)}>
        <img src={darkMode ? moon : sun} alt="moon/sun" />
      </Button>
    </Grid>
  );
};

export default Theme;
