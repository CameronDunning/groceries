import { Col, Row, ListGroupItem } from "react-bootstrap";

import { FaCheckCircle, FaRedoAlt, FaTrash } from "react-icons/fa";

const Item = () => {
  return (
    <Row>
      <ListGroupItem>
        <Row s={6}>
          <Col s={3}>Test</Col>
          <Col className="text-center" s={3}>
            <Row>
              <Col>
                <FaRedoAlt color="green" />
              </Col>
              <Col>
                <FaCheckCircle color="green" />
              </Col>
              <Col>
                <FaCheckCircle />
              </Col>
              <Col>
                <FaTrash color="red" />
              </Col>
            </Row>
          </Col>
        </Row>
      </ListGroupItem>
    </Row>
  );
};

export default Item;
