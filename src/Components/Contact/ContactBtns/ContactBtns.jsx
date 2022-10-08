import React from "react";
import { Grid, Typography, Link, Button } from "@mui/material/";

import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const ContactBtns = () => {
  return (
    <Grid
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        gap: 20,
      }}
      xs={12}
      sm={12}
      md={6}
      lg={6}
      item
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 20,
          marginTop: 20,
        }}
      >
        <Link
          href="mailto:dmitrykostenkoweb@gmail.com"
          target="_blank"
          underline="none"
        >
          <Button color="primary" variant="contained">
            <MailOutlineIcon />
          </Button>
        </Link>
        <Typography> Contact me by email!</Typography>
      </div>
      {/* //// */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 20,
        }}
      >
        <Link
          href="https://www.linkedin.com/in/dmitry-kostenkoweb/"
          target="_blank"
          underline="none"
        >
          <Button color="primary" variant="contained">
            <LinkedInIcon />
          </Button>
        </Link>
        <Typography>Message me on LinkedIn!</Typography>
      </div>
      {/* //// */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 20,
        }}
      >
        <Link
          href="https://github.com/dmitrykostenkoweb"
          target="_blank"
          underline="none"
        >
          <Button color="primary" variant="contained">
            <GitHubIcon />
          </Button>
        </Link>
        <Typography>Look at my code!</Typography>
      </div>
      {/* //// */}
    </Grid>
  );
};

export default ContactBtns;
