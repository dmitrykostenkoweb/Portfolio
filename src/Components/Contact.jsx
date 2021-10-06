import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

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

const Contact = ({
  darkMode,
  matches,
  matchesMD,
  setOpenSnackBar,
  setSnackBarText,
  setSnackBarType,
}) => {
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

  const classes = useStyles();
  const [inputNameValue, setInputNameValue] = useState("");
  const [inputEmailValue, setInputEmailValue] = useState("");
  const [inputMassValue, setInputMassValue] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qgt3esr",
        "template_gb8va3c",
        form.current,
        "user_Rz7a2KDLB1PzB3FzMnGmy"
      )
      .then(
        (result) => {
          console.log(result.text);
          setOpenSnackBar(true);
          setSnackBarText(
            "Message sent. Thanks i will contact you as soon as possible!"
          );
          setSnackBarType("success");
          setInputNameValue("");
          setInputEmailValue("");
          setInputMassValue("");
        },
        (error) => {
          console.log(error.text);
          setOpenSnackBar(true);
          setSnackBarText(
            "Sorry, but something is wrong. Please contact me in another way. Thanks"
          );
          setSnackBarType("error");

          setInputNameValue("");
          setInputEmailValue("");
          setInputMassValue("");
        }
      );
  };

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
        <Grid xs={12} sm={12} md={6} lg={6} item>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              gap: 20,
            }}
            ref={form}
            onSubmit={sendEmail}
          >
            <TextField
              label="your name"
              value={inputNameValue}
              onChange={(event) => {
                setInputNameValue(event.target.value);
              }}
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
              type="text"
              name="user_name"
            />
            <TextField
              label="your email"
              value={inputEmailValue}
              onChange={(event) => {
                setInputEmailValue(event.target.value);
              }}
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
              type="email"
              name="user_email"
            />
            <TextField
              label="message"
              value={inputMassValue}
              onChange={(event) => {
                setInputMassValue(event.target.value);
              }}
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
              type="text"
              name="message"
            />
            <Button
              style={{ maxWidth: 100 }}
              size="small"
              color="primary"
              variant="contained"
              type="submit"
              value="Send"
            >
              Send
            </Button>
          </form>
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
