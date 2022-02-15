import { Col, Row, ListGroupItem } from "react-bootstrap";

import { FaCheckCircle, FaRedoAlt, FaTrash } from "react-icons/fa";

const Grocery = ({ grocery }) => {
  console.log(grocery);
  return (
    <Row>
      <ListGroupItem>
        <Row s={6}>
          <Col s={3}>{grocery.grocery}</Col>
          <Col className="text-center" s={3}>
            <Row>
              <Col>
                <FaRedoAlt color={grocery.regular ? "green" : ""} />
              </Col>
              <Col>
                <FaCheckCircle
                  color={grocery.check1 ? "green" : ""}
                  key="check1"
                />
              </Col>
              <Col>
                <FaCheckCircle
                  color={grocery.check2 ? "green" : ""}
                  key="check2"
                />
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

export default Grocery;
