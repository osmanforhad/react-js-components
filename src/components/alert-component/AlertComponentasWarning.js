import React, { Fragment, useState } from "react";
import { Alert, Button, Col, Container, Row } from "react-bootstrap";

const AlertComponentasWarning = () => {
  const [showAlert, setAlert] = useState(true);
  if (showAlert) {
    return (
      <Container fluid={true} className="mt-1">
        <Row>
          <Col xl={12} lg={12} md={12} sm={12} xs={12}>
            <Alert variant="danger" onClose={() => setAlert(false)} dismissible>
              <Alert.Heading>Oh snap! You got an error! osman</Alert.Heading>
              <p>
                Change this and that and try again. Duis mollis, est non commodo
                luctus, nisi erat porttitor ligula, eget lacinia odio sem nec
                elit. Cras mattis consectetur purus sit amet fermentum.
              </p>
            </Alert>
          </Col>
        </Row>
      </Container>
    );
  }
  return (
    <Fragment>
      <Container fluid={true}>
        <Row>
          <Col xl={6} lg={6} md={6} sm={12} xs={12} className="mt-1">
            <Button
              onClick={() => setAlert(true)}
              style={{ position: "absolute", marginLeft: "900px" }}
            >
              Click Here
            </Button>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default AlertComponentasWarning;
