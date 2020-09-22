import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <div>
        <nav
          className="navbar navbar-expand-lg navbar-light fixed-top"
          id="mainNav"
        >
          <div className="container">
            <Link className="navbar-brand js-scroll-trigger" to="/">
              React Router - News
            </Link>
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              Menu
              <i className="fas fa-bars" />
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li>
                  <NavLink className="nav-link js-scroll-trigger" to="/tintuc">
                    Tin tức
                  </NavLink>
                </li>

                <li>
                  <NavLink className="nav-link js-scroll-trigger" to="/chitiet">
                    Tin chi tiết
                  </NavLink>
                </li>

                <li>
                  <NavLink className="nav-link js-scroll-trigger" to="/contact">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
