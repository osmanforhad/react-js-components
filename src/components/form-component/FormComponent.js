import React, { Component, Fragment } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";

class FormComponent extends Component {
  render() {
    return (
      <Fragment>
        <h4 className="text-center">Form Component</h4>
        <Container fluid={true}>
          <Row>
            <Col
              xl={4}
              lg={4}
              md={4}
              sm={12}
              xs={12}
              style={{ marginLeft: "700px" }}
            >
              <Card>
                <Card.Header className="text-center">
                  <span
                    style={{
                      color: "red",
                      fontSize: "18px",
                    }}
                  >
                    Login Panel
                  </span>
                </Card.Header>
                <Card.Body>
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                      <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                      </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                      Submit
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default FormComponent;
