import React from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./assets/styles/global.css";
import "./assets/styles/colors.css";
import Routes from "./routes";
import AppProvider from "./hooks";

const theme = createMuiTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: "#FA7268",
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#316094",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer />
      <AppProvider>
        <Routes />
      </AppProvider>
    </ThemeProvider>
  );
}

export default App;
