import React, { Component, Fragment } from "react";
import { Col, Container, ListGroup, Row } from "react-bootstrap";

class ListComponent extends Component {
  render() {
    return (
      <Fragment>
        <h4 className="text-center">List Component</h4>
        <Container fluid={true}>
          <Row>
            <Col xl={3} lg={3} md={3} sm={4} xs={4}>
              <b>Basic Listing</b>
              <ListGroup>
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
              </ListGroup>
            </Col>
            <Col xl={3} lg={3} md={3} sm={4} xs={4}>
              <b>Flush Listing</b>
              <ListGroup variant="flush">
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
              </ListGroup>
            </Col>
            <Col xl={3} lg={3} md={3} sm={4} xs={4}>
              <b>Horizontal Listing</b>
              <ListGroup horizontal>
                <ListGroup.Item>This</ListGroup.Item>
                <ListGroup.Item>ListGroup</ListGroup.Item>
                <ListGroup.Item>renders</ListGroup.Item>
                <ListGroup.Item>horizontally!</ListGroup.Item>
              </ListGroup>
            </Col>
            <Col xl={3} lg={3} md={3} sm={4} xs={4}>
              <b>Contextual Listing</b>
              <ListGroup>
                <ListGroup.Item>No style</ListGroup.Item>
                <ListGroup.Item variant="primary">Primary</ListGroup.Item>
                <ListGroup.Item variant="secondary">Secondary</ListGroup.Item>
                <ListGroup.Item variant="success">Success</ListGroup.Item>
                <ListGroup.Item variant="danger">Danger</ListGroup.Item>
                <ListGroup.Item variant="warning">Warning</ListGroup.Item>
                <ListGroup.Item variant="info">Info</ListGroup.Item>
                <ListGroup.Item variant="light">Light</ListGroup.Item>
                <ListGroup.Item variant="dark">Dark</ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default ListComponent;
