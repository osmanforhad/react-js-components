import React, { Component, Fragment } from "react";
import {
  Button,
  Col,
  Container,
  OverlayTrigger,
  Popover,
  Row,
} from "react-bootstrap";

class Tooltipcomponent extends Component {
  popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Popover right</Popover.Header>
      <Popover.Body>
        And here's some <strong>amazing</strong> content. It's very engaging.
        right?
      </Popover.Body>
    </Popover>
  );

  render() {
    return (
      <Fragment>
        <Container>
          <Row>
            <Col
              xl={4}
              lg={4}
              md={4}
              sm={4}
              xs={4}
              style={{ marginLeft: "600px" }}
            >
              <h4 className="text-center">TolTip Component</h4>
              <hr />
              <OverlayTrigger
                trigger="click"
                placement="right"
                overlay={this.popover}
              >
                <Button variant="success" style={{ marginLeft: "250px" }}>
                  Click me
                </Button>
              </OverlayTrigger>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Tooltipcomponent;
