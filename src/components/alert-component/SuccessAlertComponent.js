import React, { Fragment, useState } from "react";
import { Alert, Button, Col, Container, Row } from "react-bootstrap";

const Successalertcomponent = () => {
  const [show, setShow] = useState(true);
  return (
    <Fragment>
      <Container fluid={true}>
        <Row className="mt-1">
          <Col xl={12} lg={12} md={12} sm={12} xs={12}>
            <Alert show={show} variant="success">
              <Alert.Heading>How's it going?!</Alert.Heading>
              <p>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
                eget lacinia odio sem nec elit. Cras mattis consectetur purus
                sit amet fermentum.
              </p>
              <hr />
              <div className="d-flex justify-content-end">
                <Button
                  onClick={() => setShow(false)}
                  variant="outline-success"
                >
                  Close me y'all!
                </Button>
              </div>
            </Alert>

            {!show && (
              <Button
                onClick={() => setShow(true)}
                style={{ position: "absolute", marginLeft: "900px" }}
              >
                Show Alert
              </Button>
            )}
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Successalertcomponent;

// function AlertDismissible() {
//     const [show, setShow] = useState(true);

//     return (
//       <>
//         <Alert show={show} variant="success">
//           <Alert.Heading>How's it going?!</Alert.Heading>
//           <p>
//             Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
//             lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
//             fermentum.
//           </p>
//           <hr />
//           <div className="d-flex justify-content-end">
//             <Button onClick={() => setShow(false)} variant="outline-success">
//               Close me y'all!
//             </Button>
//           </div>
//         </Alert>

//         {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
//       </>
//     );
//   }

//   render(<AlertDismissible />);
