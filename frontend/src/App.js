import React, { Component } from "react";
import Volunteer from "./Components/Volunteer";
import { Route, BrowserRouter as Router } from "react-router-dom";
import VolunteerList from "./Components/VolunteerList";

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Volunteer} />
        <Route exact path="/view" component={VolunteerList} />
      </Router>
    );
  }
}

export default App;
