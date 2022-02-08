import React, { Component, Fragment } from "react";
import { Breadcrumb } from "react-bootstrap";

class Breadcrumbcomponent extends Component {
  render() {
    return (
      <Fragment>
        <h4 className="text-center">Breadcrumb Component</h4>
        <Breadcrumb>
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
            About
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Data</Breadcrumb.Item>/{" "}
        </Breadcrumb>
      </Fragment>
    );
  }
}

export default Breadcrumbcomponent;
