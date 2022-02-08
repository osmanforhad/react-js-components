import React, { Fragment, useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import TabHome from "./tab-content/TabHome";
import TabProfile from "./tab-content/TabProfile";

const Horizontaltab = () => {
  const [key, setKey] = useState("home");
  return (
    <Fragment>
      <h4 className="text-center">Horizontal Tab</h4>
      <hr />
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="home" title="Home">
          <TabHome />
        </Tab>
        <Tab eventKey="profile" title="Profile">
          <TabProfile />
        </Tab>
        <Tab eventKey="contact" title="Contact" disabled>
          <TabHome />
        </Tab>
      </Tabs>
    </Fragment>
  );
};

export default Horizontaltab;
