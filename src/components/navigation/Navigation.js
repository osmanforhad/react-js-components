import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";

class Navigation extends Component {
  render() {
    return (
      <Fragment>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container fluid>
            <Navbar.Brand as={Link} to="/">
              Navbar scroll
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <NavDropdown
                  title="Component Archive"
                  id="navbarScrollingDropdown"
                >
                  <NavDropdown.Item as={Link} to="/card-component">
                    Card Component
                  </NavDropdown.Item>

                  <NavDropdown.Item as={Link} to="/off-canvas">
                    Off Canvas
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/acordion">
                    Accordion
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/warning-alert">
                    Warning Alert
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/success-alert">
                    Success Alert
                  </NavDropdown.Item>

                  <NavDropdown.Item as={Link} to="/bred-crumb">
                    Breadcrumb
                  </NavDropdown.Item>

                  <NavDropdown.Item as={Link} to="/carousal">
                    Carousal Component
                  </NavDropdown.Item>

                  <NavDropdown.Item as={Link} to="/figure">
                    Figure Box
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/list">
                    List Component
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/modal">
                    Modal Component
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item>Something else here</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link disabled>Link</Nav.Link>
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Fragment>
    );
  }
}

export default Navigation;
