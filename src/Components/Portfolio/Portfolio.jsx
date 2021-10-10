import React, { useState } from "react";
import { Grid, Typography } from "@material-ui/core/";

import PortfolioNav from "./PortfolioNav/PortfolioNav";
import PortfolioItem from "./PortfolioItem/PortfolioItem";
import laptopImg from "../../Assets/background_images/laptop.png";

const Portfolio = ({ darkMode, matches }) => {
  const [navValue, setNavValue] = useState(0);

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

      <PortfolioNav
        navValue={navValue}
        setNavValue={setNavValue}
        darkMode={darkMode}
        matches={matches}
      />

      <PortfolioItem matches={matches} navValue={navValue} />
    </div>
  );
};

export default Portfolio;
