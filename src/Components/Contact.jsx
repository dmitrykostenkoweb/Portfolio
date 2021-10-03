import React, { useState } from "react";

import { TextField, Grid, Typography, Link, Button } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";

import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

import Gmail from "../Assets/background_images/Gmail.png";

const Contact = ({ darkMode, matches }) => {
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
    email: {
      width: 300,
    },
    message: {
      width: 300,
      height: 200,
    },
  }));

  const [mailValue, setMailValue] = useState(null);
  const [messageValue, setMessageValue] = useState(null);
  console.log(messageValue);
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
            // transform: `translateY(${offsetY * 0.1}px)`,
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
      <Grid style={{ display: "flex" }} container>
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
            onChange={(event) => setMailValue(event.target.value)}
            className={classes.email}
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
          />
          <TextField
            value={messageValue}
            onChange={(event) => setMessageValue(event.target.value)}
            className={classes.message}
            label="message"
            size="medium"
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
          />
          <Button
            style={{ maxWidth: 100 }}
            size="small"
            color="primary"
            variant="contained"
            onClick={() => alert("opss...something wrong")}
          >
            Send
          </Button>
        </Grid>

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
              href="mailto:dmitrykostenkoweb@gmail.com"
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
              href="mailto:dmitrykostenkoweb@gmail.com"
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
