import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

import { TextField, Grid, Button } from "@material-ui/core/";

import { makeStyles } from "@material-ui/core/styles";

const Feedback = ({ setOpenPopUp, setPopUpText, setPopUpType, darkMode }) => {
  const [redInput, setRedInput] = useState(false);
  let color = "black";
  if (darkMode) {
    color = "white";
  }

  if (redInput) {
    color = "#FF0000";
  }

  const useStyles = makeStyles((theme) => ({
    notchedOutline: {
      borderColor: color,
      boxShadow: redInput && `-3px 3px 10px ${color}`,
    },
    cssLabel: {
      color: color,
    },
    text: {
      fontWeight: 700,
      fontSize: 36,
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
          if (!inputNameValue || !inputEmailValue || !inputMassValue) {
            setRedInput(true);
            setOpenPopUp(true);
            setPopUpText("please fill out the form");
            setPopUpType("error");
          } else {
            setOpenPopUp(true);
            setPopUpText(
              "Message sent. Thanks i will contact you as soon as possible!"
            );
            setRedInput(false);
            setPopUpType("success");
            setInputNameValue("");
            setInputEmailValue("");
            setInputMassValue("");
          }
        },
        (error) => {
          console.log(error.text);
          setRedInput(true);
          setOpenPopUp(true);
          setPopUpText(
            "Sorry, but something is wrong. Please contact me in another way. Thanks"
          );
          setPopUpType("error");

          setInputNameValue("");
          setInputEmailValue("");
          setInputMassValue("");
        }
      );
  };

  return (
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
          autoComplete="on"
          value={inputEmailValue}
          onChange={(event) => {
            setInputEmailValue(event.target.value);
          }}
          size="small"
          variant="outlined"
          noValidate
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
          multiline
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
  );
};

export default Feedback;
