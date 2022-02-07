import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import AcordionComponent from "../accordion-component/AcordionComponent";
import AlertComponentasWarning from "../alert-component/AlertComponentasWarning";
import Successalertcomponent from "../alert-component/SuccessAlertComponent";
import Bandagecomponent from "../badage-component/BandageComponent";
import CardComponent from "../card-component/CardComponent";
import Offcanvas from "../card-component/OffCanvas";
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
            <Route path="acordion" element={<AcordionComponent />} />
            <Route path="/badage" element={<Bandagecomponent />} />
            <Route
              path="/warning-alert"
              element={<AlertComponentasWarning />}
            />
            <Route path="/success-alert" element={<Successalertcomponent />} />
          </Routes>
        </Router>
      </Fragment>
    );
  }
}

export default TopNav;
