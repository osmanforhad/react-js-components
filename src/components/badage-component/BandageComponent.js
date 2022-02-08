import React, { Component, Fragment } from "react";
import { Badge, Col, Container, Row } from "react-bootstrap";

class Bandagecomponent extends Component {
  render() {
    return (
      <Fragment>
        <h4 className="text-center">Badge Component</h4>
        <Container fluid={true}>
          <Row>
            <Col xl={6} lg={6} md={6} sm={12} xs={12}>
              <div>
                <Badge pill bg="primary">
                  Primary
                </Badge>{" "}
                <Badge pill bg="secondary">
                  Secondary
                </Badge>{" "}
                <Badge pill bg="success">
                  Success
                </Badge>{" "}
                <Badge pill bg="danger">
                  Danger
                </Badge>{" "}
                <Badge pill bg="warning" text="dark">
                  Warning
                </Badge>{" "}
                <Badge pill bg="info">
                  Info
                </Badge>{" "}
                <Badge pill bg="light" text="dark">
                  Light
                </Badge>{" "}
                <Badge pill bg="dark">
                  Dark
                </Badge>
              </div>
            </Col>
            <Col xl={6} lg={6} md={6} sm={12} xs={12}>
              <div>
                <p>
                  <Badge
                    pill
                    bg="primary"
                    style={{ fontsize: "18", padding: "10px" }}
                  >
                    <b className="text-black">9</b>
                    <span> Unread Message</span>
                  </Badge>
                </p>
                <Badge pill bg="secondary">
                  Secondary
                </Badge>{" "}
                <Badge pill bg="success">
                  Success
                </Badge>{" "}
                <Badge pill bg="danger">
                  Danger
                </Badge>{" "}
                <Badge pill bg="warning" text="dark">
                  Warning
                </Badge>{" "}
                <Badge pill bg="info">
                  Info
                </Badge>{" "}
                <Badge pill bg="light" text="dark">
                  Light
                </Badge>{" "}
                <Badge pill bg="dark">
                  Dark
                </Badge>
              </div>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Bandagecomponent;
