import Item from "./Item";
import AddItem from "./AddItem";

import Container from "react-bootstrap/Container";
import { Card, Button, Accordion, Col, Row } from "react-bootstrap";

import { useAccordionButton } from "react-bootstrap/AccordionButton";
import ItemList from "./ItemList";

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
            <ItemList title={"Non-Regular"} />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};

export default Groceries;
