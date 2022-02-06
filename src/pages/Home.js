import React, { Component, Fragment } from "react";
import { Container, Row } from "react-bootstrap";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid={true}>
          <Row>
            <h4 className="text-center">Home Page</h4>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Home;
