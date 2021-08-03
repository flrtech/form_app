import React from "react";
import Home from "./components/pages/Home";
import AddClient from "./components/pages/AddClient";
import Statistics from "./components/pages/Statistics";
import ViewAll from "./components/pages/ViewAll";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/viewall" component={ViewAll} />
          <Route path="/statistics" component={Statistics} />
          <Route path="/add" component={AddClient} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
