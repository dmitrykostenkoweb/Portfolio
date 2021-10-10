import React, { forwardRef } from "react";

import { Snackbar, IconButton } from "@material-ui/core/";
import CloseIcon from "@mui/icons-material/Close";
import MuiAlert from "@mui/material/Alert";

const PopUp = ({ openPopUp, setOpenPopUp, popUpText, popUpType }) => {
  const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const handleClosePopUp = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenPopUp(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClosePopUp}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <Snackbar
      open={openPopUp}
      autoHideDuration={6000}
      onClose={handleClosePopUp}
      action={action}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
    >
      <Alert
        onClose={handleClosePopUp}
        severity={popUpType}
        sx={{ width: "100%" }}
      >
        {popUpText}
      </Alert>
    </Snackbar>
  );
};

export default PopUp;
