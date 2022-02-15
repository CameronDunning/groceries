import { ref, set, remove } from "firebase/database";

import { Col, Row, ListGroupItem } from "react-bootstrap";
import { FaCheckCircle, FaRedoAlt, FaTrash } from "react-icons/fa";

import { db } from "../../firebase/config";

const Grocery = ({ grocery }) => {
  const regular = () => {
    const groceriesRef = ref(db, "/groceries/" + grocery.id);
    set(groceriesRef, { ...grocery, regular: !grocery.regular });
  };

  const check1 = () => {
    const groceriesRef = ref(db, "/groceries/" + grocery.id);
    set(groceriesRef, { ...grocery, check1: !grocery.check1 });
  };

  const check2 = () => {
    const groceriesRef = ref(db, "/groceries/" + grocery.id);
    set(groceriesRef, { ...grocery, check2: !grocery.check2 });
  };

  const deleteGrocery = () => {
    const groceriesRef = ref(db, "/groceries/" + grocery.id);
    remove(groceriesRef);
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
                    regular();
                  }}
                />
              </Col>
              <Col>
                <FaCheckCircle
                  color={grocery.check1 ? "green" : ""}
                  key="check1"
                  onClick={() => {
                    check1();
                  }}
                />
              </Col>
              <Col>
                <FaCheckCircle
                  color={grocery.check2 ? "green" : ""}
                  key="check2"
                  onClick={() => {
                    check2();
                  }}
                />
              </Col>
              <Col>
                <FaTrash
                  color="red"
                  onClick={() => {
                    deleteGrocery();
                  }}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </ListGroupItem>
    </Row>
  );
};

export default Grocery;
