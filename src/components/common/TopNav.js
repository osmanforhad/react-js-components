import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import AcordionComponent from "../accordion-component/AcordionComponent";
import AlertComponentasWarning from "../alert-component/AlertComponentasWarning";
import Successalertcomponent from "../alert-component/SuccessAlertComponent";
import Bandagecomponent from "../badage-component/BandageComponent";
import BreadcrumbComponent from "../breadcrumb-component/BreadcrumbComponent";
import CardComponent from "../card-component/CardComponent";
import Offcanvas from "../offcanvas-component/OffCanvas";
import CarousalComponent from "../carousal-component/CarousalComponent";
import Figurecomponent from "../figure-component/FigureComponent";
import Listcomponent from "../list-component/ListComponent";
import Modalcomponent from "../modal-component/ModalComponent";
import Navigation from "../navigation/Navigation";
import Horizontaltab from "../tab-component/HorizontalTab";
import VerticalTab from "../tab-component/VerticalTab";
import Tablecomponent from "../table-component/TableComponent";
import TooltipComponent from "../tooltip-component/TooltipComponent";

import SpinnerComponent from "../spinner-component/SpinnerComponent";
import FormComponent from "../form-component/FormComponent";

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
            <Route path="/bred-crumb" element={<BreadcrumbComponent />} />
            <Route path="/carousal" element={<CarousalComponent />} />
            <Route path="/figure" element={<Figurecomponent />} />
            <Route path="/list" element={<Listcomponent />} />
            <Route path="/modal" element={<Modalcomponent />} />
            <Route path="/table-component" element={<Tablecomponent />} />
            <Route path="/horizontal-tab" element={<Horizontaltab />} />
            <Route path="/vertical-tab" element={<VerticalTab />} />
            <Route path="/tooltip" element={<TooltipComponent />} />
            <Route path="/spinner" element={<SpinnerComponent />} />
            <Route path="/form" element={<FormComponent />} />
          </Routes>
        </Router>
      </Fragment>
    );
  }
}

export default TopNav;
