import ItemList from "./ItemList";
import Item from "./Item";

import { Container, Row, Accordion } from "react-bootstrap";

const Groceries = () => {
  return (
    <Container>
      <Accordion defaultActiveKey={["0"]} alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Groceries</Accordion.Header>
          <Accordion.Body>
            <Item />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Checked Items</Accordion.Header>
          <Accordion.Body>
            <ItemList title={"Regular"} />
            <Row className="mb-3"></Row>
            <ItemList title={"Non-Regular"} />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};

export default Groceries;
