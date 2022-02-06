import React, { Component, Fragment } from "react";
import TopNav from "./components/common/TopNav";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../src/assets/css/main-Style-File.css";
import CardComponent from "./components/card-component/CardComponent";
import { Container, Row } from "react-bootstrap";

class App extends Component {
  render() {
    return (
      <Fragment>
        <TopNav />
        <Container fluid={true} className="App">
          <Row>
            <CardComponent />
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default App;
