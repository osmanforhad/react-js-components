import React, { Component, Fragment } from "react";
import {
  Card,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";

class CardComponent extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid={true}>
          <Row>
            <Col xl={3} lg={3} md={3} sm={12} xs={12}>
              <Card style={{ width: "18rem" }} className="card-bg-style">
                <Card.Img
                  variant="top"
                  src="https://cdn.pixabay.com/photo/2021/12/01/18/17/cat-6838844_960_720.jpg"
                  className="card-image-style"
                />
                <Card.Body>
                  <Card.Title className="card-title-style">
                    Title Here
                  </Card.Title>
                  <Card.Text>
                    <b className="card-description-indicator-style">
                      Description:
                    </b>
                    <span className="card-description-text-style">
                      &nbsp;Some quick example text to build on the card title
                      and make up the bulk of the card's content.
                    </span>
                  </Card.Text>
                </Card.Body>
                <h6 className="item-title-list-style">Items List</h6>
                <ListGroup className="list-group-flush item-list-style">
                  <ListGroupItem variant="success" className="item-style">
                    <span name="list-item">
                      <i class="fas fa-hand-point-right"></i>
                      Al-Manar Group
                    </span>
                  </ListGroupItem>
                  <ListGroupItem variant="secondary" className="item-style">
                    <span name="list-item">
                      <i class="fas fa-hand-point-right"></i>
                      Family Food
                    </span>
                  </ListGroupItem>
                  <ListGroupItem variant="success" className="item-style">
                    <span name="list-item">
                      <i class="fas fa-hand-point-right"></i>
                      Intigsol Limited
                    </span>
                  </ListGroupItem>
                </ListGroup>
                <Card.Body>
                  <Card.Link
                    href="https://al-manargroup.com/"
                    className="hyper-link-style"
                  >
                    AlManar Group
                  </Card.Link>
                  <span className="horizontal-divider-style">||</span>
                  <Card.Link
                    href="https://intigsol.com/"
                    className="hyper-link-style"
                  >
                    Intigsol Limited
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col xl={3} lg={3} md={3} sm={12} xs={12}>
              <Card style={{ width: "18rem" }} className="card-bg-style">
                <Card.Img
                  variant="top"
                  src="https://cdn.pixabay.com/photo/2021/12/02/02/59/mountains-6839521_960_720.jpg"
                  className="card-image-style"
                />
                <Card.Body>
                  <Card.Title className="card-title-style">
                    Title Here
                  </Card.Title>
                  <Card.Text>
                    <b className="card-description-indicator-style">
                      Description:
                    </b>
                    <span className="card-description-text-style">
                      &nbsp;Some quick example text to build on the card title
                      and make up the bulk of the card's content.
                    </span>
                  </Card.Text>
                </Card.Body>
                <h6 className="item-title-list-style">Items List</h6>
                <ListGroup className="list-group-flush item-list-style">
                  <ListGroupItem variant="success" className="item-style">
                    <span name="list-item">
                      <i class="fas fa-hand-point-right"></i>
                      Al-Manar Group
                    </span>
                  </ListGroupItem>
                  <ListGroupItem variant="secondary" className="item-style">
                    <span name="list-item">
                      <i class="fas fa-hand-point-right"></i>
                      Family Food
                    </span>
                  </ListGroupItem>
                  <ListGroupItem variant="success" className="item-style">
                    <span name="list-item">
                      <i class="fas fa-hand-point-right"></i>
                      Intigsol Limited
                    </span>
                  </ListGroupItem>
                </ListGroup>
                <Card.Body className="card-body-style">
                  <Card.Link
                    href="https://al-manargroup.com/"
                    className="hyper-link-style"
                  >
                    AlManar Group
                  </Card.Link>
                  <span className="horizontal-divider-style">||</span>
                  <Card.Link
                    href="https://intigsol.com/"
                    className="hyper-link-style"
                  >
                    Intigsol Limited
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col xl={3} lg={3} md={3} sm={12} xs={12}>
              <Card style={{ width: "18rem" }} className="card-bg-style">
                <Card.Img
                  variant="top"
                  src="https://cdn.pixabay.com/photo/2014/12/08/11/49/couple-560783_960_720.jpg"
                  className="card-image-style"
                />
                <Card.Body>
                  <Card.Title className="card-title-style">
                    Title Here
                  </Card.Title>
                  <Card.Text>
                    <b className="card-description-indicator-style">
                      Description:
                    </b>
                    <span className="card-description-text-style">
                      &nbsp;Some quick example text to build on the card title
                      and make up the bulk of the card's content.
                    </span>
                  </Card.Text>
                </Card.Body>
                <h6 className="item-title-list-style">Items List</h6>
                <ListGroup className="list-group-flush item-list-style">
                  <ListGroupItem variant="success" className="item-style">
                    <span name="list-item">
                      <i class="fas fa-hand-point-right"></i>
                      Al-Manar Group
                    </span>
                  </ListGroupItem>
                  <ListGroupItem variant="secondary" className="item-style">
                    <span name="list-item">
                      <i class="fas fa-hand-point-right"></i>
                      Family Food
                    </span>
                  </ListGroupItem>
                  <ListGroupItem variant="success" className="item-style">
                    <span name="list-item">
                      <i class="fas fa-hand-point-right"></i>
                      Intigsol Limited
                    </span>
                  </ListGroupItem>
                </ListGroup>
                <Card.Body>
                  <Card.Link
                    href="https://al-manargroup.com/"
                    className="hyper-link-style"
                  >
                    AlManar Group
                  </Card.Link>
                  <span className="horizontal-divider-style">||</span>
                  <Card.Link
                    href="https://intigsol.com/"
                    className="hyper-link-style"
                  >
                    Intigsol Limited
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col xl={3} lg={3} md={3} sm={12} xs={12}>
              <Card style={{ width: "18rem" }} className="card-bg-style">
                <Card.Img
                  variant="top"
                  src="https://cdn.pixabay.com/photo/2012/03/01/01/45/baby-20374_960_720.jpg"
                  className="card-image-style"
                />
                <Card.Body>
                  <Card.Title className="card-title-style">
                    Title Here
                  </Card.Title>
                  <Card.Text>
                    <b className="card-description-indicator-style">
                      Description:
                    </b>
                    <span className="card-description-text-style">
                      &nbsp;Some quick example text to build on the card title
                      and make up the bulk of the card's content.
                    </span>
                  </Card.Text>
                </Card.Body>
                <h6 className="item-title-list-style">Items List</h6>
                <ListGroup className="list-group-flush item-list-style">
                  <ListGroupItem variant="success" className="item-style">
                    <span name="list-item">
                      <i class="fas fa-hand-point-right"></i>
                      Al-Manar Group
                    </span>
                  </ListGroupItem>
                  <ListGroupItem variant="secondary" className="item-style">
                    <span name="list-item">
                      <i class="fas fa-hand-point-right"></i>
                      Family Food
                    </span>
                  </ListGroupItem>
                  <ListGroupItem variant="success" className="item-style">
                    <span name="list-item">
                      <i class="fas fa-hand-point-right"></i>
                      Intigsol Limited
                    </span>
                  </ListGroupItem>
                </ListGroup>
                <Card.Body className="card-body-style">
                  <Card.Link
                    href="https://al-manargroup.com/"
                    className="hyper-link-style"
                  >
                    AlManar Group
                  </Card.Link>
                  <span className="horizontal-divider-style">||</span>
                  <Card.Link
                    href="https://intigsol.com/"
                    className="hyper-link-style"
                  >
                    Intigsol Limited
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default CardComponent;
