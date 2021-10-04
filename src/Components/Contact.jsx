import React, { useState } from "react";

import {
  TextField,
  Grid,
  Typography,
  Link,
  Button,
  Divider,
 
} from "@material-ui/core/";

import { makeStyles } from "@material-ui/core/styles";

import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

import Gmail from "../Assets/background_images/Gmail.png";

const Contact = ({ darkMode, matches, matchesMD, setOpenSnackBar }) => {
  const useStyles = makeStyles((theme) => ({
    notchedOutline: {
      borderColor: darkMode ? "white " : "black",
    },
    cssLabel: {
      color: darkMode ? "white " : "black",
    },
    text: {
      fontWeight: 700,
      fontSize: 36,
    },
    divider: {
      width: "80%",
      margin: "20px auto",
    },
  }));

  const [mailValue, setMailValue] = useState(null);
  const [messageValue, setMessageValue] = useState(null);

  // require("dotenv").config();
  // const nodemailer = require("nodemailer");

  // const transporter = nodemailer.createTransport({
  //   service: "gmail",
  //   auth: {
  //     user: process.env.EMAIL,
  //     pass: process.env.PASSWORD,
  //   },
  // });

  // const mailOptions = {
  //   from: mailValue,
  //   to: "dmitrykostenkoweb@gmail.com",
  //   subject: "mail send by nodejs",
  //   text: messageValue,
  // };
  // transporter.sendMail(mailOptions);

  // const send = () => {

  // };

  //////////
  const classes = useStyles();



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
            Hey! I am open to job offers and I will answer as soon as possible.
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
        <Grid
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            gap: 20,
          }}
          xs={12}
          sm={12}
          md={6}
          lg={6}
          item
        >
          <TextField
            value={mailValue}
            // onChange={(event) => setMailValue(event.target.value)}
            onChange={() => setOpenSnackBar(true)}
            label="your email"
            size="small"
            variant="outlined"
            noValidate
            autoComplete="off"
            InputLabelProps={{
              classes: {
                root: classes.cssLabel,
              },
            }}
            InputProps={{
              classes: {
                notchedOutline: classes.notchedOutline,
              },
            }}
            style={{ width: "100%", maxWidth: 300 }}
          />
          <TextField
            value={messageValue}
            // onChange={(event) => setMessageValue(event.target.value)}
            onChange={() => setOpenSnackBar(true)}
            label="message"
            // size="medium"
            multiline="true"
            variant="outlined"
            noValidate
            autoComplete="off"
            InputLabelProps={{
              classes: {
                root: classes.cssLabel,
              },
            }}
            InputProps={{
              classes: {
                notchedOutline: classes.notchedOutline,
              },
            }}
            style={{ width: "100%", maxWidth: 300, paddingBottom: 0 }}
          />
          <Button
            style={{ maxWidth: 100 }}
            size="small"
            color="primary"
            variant="contained"
            onClick={() => setOpenSnackBar(true)}
          >
            Send
          </Button>
        </Grid>
        {!matchesMD && (
          <Divider
            className={classes.divider}
            style={darkMode ? { background: "white" } : { background: "black" }}
          />
        )}
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
      </Grid>
  
    </div>
  );
};

export default Contact;
