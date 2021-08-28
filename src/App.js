import "./App.css";
import Home from "./Components/home/Home";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import RequestPage from "./Components/RequestPage";
import SentRequests from "./Components/SentRequests";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signin from "./Components/Signin";
import Landing from "./Components/Landing";
import Signup from "./Components/signup/Signup";
import Request from "./Components/Request";
import Errorpage from "./Components/Errorpage";
import Success from "./Components/Success";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/landing" exact>
          <Landing />
        </Route>
        <Route path="/login" exact>
          <Signin />
        </Route>
        <Route path="/signup" exact>
          <Signup />
        </Route>
        <Route path="/request" exact>
          <Request />
        </Route>
        <Route path="/errorpage" exact>
          <Errorpage />
        </Route>
        <Route path="/success" exact>
          <Success />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
