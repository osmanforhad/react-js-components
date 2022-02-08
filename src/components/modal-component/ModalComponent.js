import React, { Fragment, useState } from "react";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";

const Modalcomponent = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Fragment>
      <Container fluid={true}>
        <Row className="mt-1">
          <Col xl={12} lg={12} md={12} sm={12} xs={12}>
            <Button
              variant="primary"
              onClick={handleShow}
              className="text-center"
              style={{ marginLeft: "820px" }}
            >
              Launch modal
            </Button>
          </Col>
        </Row>
      </Container>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don't even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export default Modalcomponent;
