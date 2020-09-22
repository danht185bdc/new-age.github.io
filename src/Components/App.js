import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./../css/App.css";
import Nav from "./Nav";
import Home from "./Home";
import Footer from "./Footer";
import News from "./News";
import Detail from "./Detail";
import Contact from "./Contact";
import DieuHuongURL from "../router/DieuHuongURL";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <DieuHuongURL />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
