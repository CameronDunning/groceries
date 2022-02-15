import { set, ref } from "firebase/database";

import { Col, Row, ListGroupItem } from "react-bootstrap";
import { FaCheckCircle, FaRedoAlt, FaTrash } from "react-icons/fa";

import { db } from "../../firebase/config";

const Grocery = ({ grocery }) => {
  const regular = (grocery) => {
    const groceriesRef = ref(db, "/groceries/" + grocery.id);
    set(groceriesRef, { ...grocery, regular: !grocery.regular });
  };

  const check1 = (grocery) => {
    const groceriesRef = ref(db, "/groceries/" + grocery.id);
    set(groceriesRef, { ...grocery, check1: !grocery.check1 });
  };

  const check2 = (grocery) => {
    const groceriesRef = ref(db, "/groceries/" + grocery.id);
    set(groceriesRef, { ...grocery, check2: !grocery.check2 });
  };

  return (
    <Row>
      <ListGroupItem>
        <Row s={6}>
          <Col s={3}>{grocery.grocery}</Col>
          <Col className="text-center" s={3}>
            <Row>
              <Col>
                <FaRedoAlt
                  color={grocery.regular ? "green" : ""}
                  onClick={() => {
                    regular(grocery);
                  }}
                />
              </Col>
              <Col>
                <FaCheckCircle
                  color={grocery.check1 ? "green" : ""}
                  key="check1"
                  onClick={() => {
                    check1(grocery);
                  }}
                />
              </Col>
              <Col>
                <FaCheckCircle
                  color={grocery.check2 ? "green" : ""}
                  key="check2"
                  onClick={() => {
                    check2(grocery);
                  }}
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
