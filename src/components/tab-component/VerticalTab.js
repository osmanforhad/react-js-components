import React from "react";
import { Col, Nav, Row, Tab } from "react-bootstrap";
import TabHome from "./tab-content/TabHome";
import TabProfile from "./tab-content/TabProfile";

const VerticalTab = () => {
  return (
    <div>
      <h4 className="text-center">Vertical Tab</h4>
      <hr />
      <Tab.Container id="left-tabs-example" defaultActiveKey="home">
        <Row>
          <Col sm={2}>
            <Nav variant="pills" className="flex-column cursor-style">
              <Nav.Item>
                <Nav.Link eventKey="home">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="profile">Profile</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={10}>
            <Tab.Content>
              <Tab.Pane eventKey="home">
                <TabHome />
              </Tab.Pane>
              <Tab.Pane eventKey="profile">
                <TabProfile />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};

export default VerticalTab;
