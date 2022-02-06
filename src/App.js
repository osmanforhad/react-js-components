import React, { Component, Fragment } from "react";
import TopNav from "./components/common/TopNav";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../src/assets/css/main-Style-File.css";
import { Container, Row } from "react-bootstrap";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid={true} className="App">
          <Row>
            <TopNav />
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default App;
