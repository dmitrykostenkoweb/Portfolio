import React, { useState } from "react";

import { CssBaseline, Grid, Container } from "@material-ui/core/";

import { createTheme, ThemeProvider } from "@material-ui/core/styles";

import Background from "../Components/Background";
import Content from "../Components/Content/Content";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  //MY THEME
  const theme = createTheme({
    //COLORS
    palette: {
      common: !darkMode ? "#fff" : "#000",

      primary: {
        main: "#F2672E",
      },
      text: {
        primary: darkMode ? "#fff" : "#000",
      },
      background: {
        paper:
          "linear-gradient(106.51deg, rgba(255, 255, 255, 0.05) 3.44%, rgba(255, 255, 255, 0.02) 64.82%)",
      },
    },
    //FONT
    typography: {
      fontFamily: " 'Poppins', sans-serif;",
    },
  });

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Background darkMode={darkMode} />

        <Container>
          <Grid container>
            <Content
              theme={theme}
              setDarkMode={setDarkMode}
              darkMode={darkMode}
            />
          </Grid>
        </Container>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
