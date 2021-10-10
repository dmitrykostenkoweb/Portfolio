import React from "react";

import moon from "../../../Assets/moon.svg";
import sun from "../../../Assets/sun.svg";
import { Button, Grid } from "@material-ui/core";

const ModeBtn = ({ darkMode, setDarkMode }) => {
  return (
    <Grid className="flexCenter" item xs={2}>
      <Button onClick={() => setDarkMode(!darkMode)}>
        <img src={darkMode ? moon : sun} alt="moon/sun" />
      </Button>
    </Grid>
  );
};

export default ModeBtn;
