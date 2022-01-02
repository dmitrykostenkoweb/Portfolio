import React from "react";

import { Grid, Typography, Divider } from "@material-ui/core/";

import Feedback from "./Feedback/Feedback";
import ContactBtns from "./ContactBtns/ContactBtns";

import Gmail from "../../Assets/background_images/laptop.png";

const Contact = ({
  darkMode,
  matches,
  matchesMD,
  setOpenPopUp,
  setPopUpText,
  setPopUpType,
}) => {
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
            Hey! Here you can send me an email and I will answer as soon as
            possible.
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
          <img src={Gmail} style={{ width: "50%" }} alt="img" />
        </Grid>
      </Grid>
      <Grid style={{ display: "flex", marginTop: 20 }} container>
        <Feedback
          setOpenPopUp={setOpenPopUp}
          setPopUpText={setPopUpText}
          setPopUpType={setPopUpType}
          darkMode={darkMode}
        />
        {!matchesMD && (
          <Divider
            style={{
              background: darkMode ? "white" : "black",
              width: "80%",
              margin: "20px auto",
            }}
          />
        )}
        <ContactBtns />
      </Grid>
    </div>
  );
};

export default Contact;
