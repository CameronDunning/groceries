import Item from "./Item";

import { Col, Row, Card, Button } from "react-bootstrap";

const ItemList = ({ title }) => {
  return (
    <>
      <Row className="mb-3">
        <Col sm={12} md={8}>
          <Card.Title>{title}</Card.Title>
        </Col>
        <Col sm={12} md={4}>
          <Row>
            <Col className="text-center">
              <Button>Uncheck</Button>
            </Col>
            <Col className="text-center">
              <Button variant="danger">Clear</Button>
            </Col>
          </Row>
        </Col>
      </Row>
      <Item />
      <Item />
    </>
  );
};

export default ItemList;
