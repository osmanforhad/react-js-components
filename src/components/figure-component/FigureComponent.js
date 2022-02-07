import React, { Component, Fragment } from "react";
import { Col, Container, Figure, Row } from "react-bootstrap";

class Figurecomponent extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <Row>
            <h4 className="text-center">Figure Box</h4>
            <hr />
            <Col xl={3} lg={3} md={3} sm={12} xs={12}>
              <Figure>
                <Figure.Image
                  width={271}
                  height={280}
                  alt="171x180"
                  src="https://cdn.pixabay.com/photo/2021/08/10/10/06/pinwheels-6535595_960_720.jpg"
                />
                <Figure.Caption>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </Figure.Caption>
              </Figure>
            </Col>
            <Col xl={3} lg={3} md={3} sm={12} xs={12}>
              <Figure>
                <Figure.Image
                  width={271}
                  height={280}
                  alt="171x180"
                  src="https://cdn.pixabay.com/photo/2021/07/04/19/58/sunset-6387462_960_720.jpg"
                />
                <Figure.Caption>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </Figure.Caption>
              </Figure>
            </Col>
            <Col xl={3} lg={3} md={3} sm={12} xs={12}>
              <Figure>
                <Figure.Image
                  width={271}
                  height={280}
                  alt="171x180"
                  src="https://cdn.pixabay.com/photo/2022/02/05/13/19/flowers-6994824_960_720.jpg"
                />
                <Figure.Caption>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </Figure.Caption>
              </Figure>
            </Col>
            <Col xl={3} lg={3} md={3} sm={12} xs={12}>
              <Figure>
                <Figure.Image
                  width={271}
                  height={280}
                  alt="171x180"
                  src="https://cdn.pixabay.com/photo/2021/09/13/07/57/trees-6620586_960_720.png"
                />
                <Figure.Caption>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </Figure.Caption>
              </Figure>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Figurecomponent;
