import React, { useState } from "react";
import "./App.css";
import { Grid, Paper, Switch } from "@material-ui/core";
import TodoWork from "./TodoWork";
import TodoHead from "./TodoHead";
import TodoFooter from './TodoFooter';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import "./Media.css";


function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light"
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Paper style={{ height: "92vh" }} container direction={"column"}>
        <Grid item>
          <TodoHead />
        </Grid>
        <Grid item xs={0} sm={2} />
        <Grid item container m={4} direction={"column"} xs={12} sm={12}>
          <Grid item xs={12} sm={12}>
            <TodoWork />
            <center>
              <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} color="primary" /><strong>Switch to Dark Mode</strong></center>
          </Grid>
        </Grid>
        <Grid item xs={0} sm={2} />
      </Paper>
      <TodoFooter id="foot" />
    </ThemeProvider>
  );
}

export default App;
