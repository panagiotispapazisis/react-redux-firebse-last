import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import SignIn from "./views/SignIn";
import SignUp from "./views/SignUp";
import ForgotPass from "./views/ForgotPass";
import About from "./views/AboutUs";
import Contact from "./views/ContactUs";
import PrivateRoute from "./components/PrivateRoute";
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { useSelector } from "react-redux";

function App() {
  const themeColor = useSelector((state) => state.themeColor.themeColor);
  const theme = createMuiTheme({
    palette: {
      type: themeColor,
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/login" component={SignIn} exact />
          <Route path="/register" component={SignUp} exact />
          <Route path="/forgot" component={ForgotPass} exact />

          <PrivateRoute path="/about">
            <About />
          </PrivateRoute>
          <PrivateRoute path="/contact">
            <Contact />
          </PrivateRoute>
          <PrivateRoute path="/">
            <Home />
          </PrivateRoute>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
