import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import CardComponent from "../card-component/CardComponent";
import Offcanvas from "../offcanvas-component/OffCanvas";
import Navigation from "../navigation/Navigation";

class TopNav extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <Navigation />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="card-component" element={<CardComponent />} />
            <Route path="off-canvas" element={<Offcanvas />} />
          </Routes>
        </Router>
      </Fragment>
    );
  }
}

export default TopNav;
