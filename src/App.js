import React from "react";
import Home from "./pages/Home";
import AddClient from "./pages/AddClient";
import Statistics from "./pages/Statistics";
import ViewAll from "./pages/ViewAll";
import Navbar from "./Navbar/Navbar";
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
