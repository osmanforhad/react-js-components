import React, { Component, Fragment } from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";

class CarousalComponent extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid={true}>
          <Row className="mt-1">
            <Col xl={12} lg={12} md={12} sm={12} xs={12}>
              <Carousel fade>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://cdn.pixabay.com/photo/2021/09/22/04/54/surreal-6645614_960_720.jpg"
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://cdn.pixabay.com/photo/2022/01/30/23/58/poppies-6982527_960_720.jpg"
                    height="632"
                    alt="Second slide"
                  />

                  <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://cdn.pixabay.com/photo/2022/02/01/15/36/palm-trees-6986528_960_720.jpg"
                    height="632"
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default CarousalComponent;
