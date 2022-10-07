import React from "react";
import {BrowserRouter as Router, Route,Switch} from "react-router-dom";
// import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./components/Home";
import Contacts from "./components/Contacts";
import About from "./components/About";
import Skills from "./components/Skills";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar/Navbar";
const App =() => {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route path="/" component={Home} exact>
          <Home/>
        </Route>
        <Route path="/about" component={About} exact>
          <About/>
        </Route>
        <Route path="/skills" component={Skills} exact>
          <Skills/>
        </Route>
        <Route path="/contacts" component={Contacts} exact>
          <Contacts/>
        </Route>
        <Route path="/signup" component={Signup} exact>
          <Signup/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
