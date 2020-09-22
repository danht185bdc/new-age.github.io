import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../Components/Home";
import News from "../Components/News";
import Detail from "../Components/Detail";
import Contact from "../Components/Contact";

class DieuHuongURL extends Component {
  render() {
    return (
      <div>
        {/* Home */}
        <Route exact path="/">
          <Home />
        </Route>

        {/* Tin tức */}
        <Route exact path="/tin-tuc">
          <News />
        </Route>

        {/* Tin chi tiết */}
        <Route exact path="/chi-tiet">
          <Detail />
        </Route>

        {/* Contact */}
        <Route exact path="/contact">
          <Contact />
        </Route>
      </div>
    );
  }
}

export default DieuHuongURL;
