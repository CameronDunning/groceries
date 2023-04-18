import { ref, set, remove } from "firebase/database";

import { Col, Row, ListGroupItem } from "react-bootstrap";
import { FaCheckCircle, FaRedoAlt, FaTrash } from "react-icons/fa";

import { db } from "../../firebase/config";

// The actual item in the grocery list
const Grocery = ({ user, grocery, index, dataTest }) => {
  // Option to check whether an item is a regular item or not.
  const regular = () => {
    const groceriesRef = ref(db, `/groceries/${user.uid}/${grocery.id}`);
    set(groceriesRef, { ...grocery, regular: !grocery.regular });
  };

  // First checkmark. This does not move it to checked items.
  const check1 = () => {
    const groceriesRef = ref(db, `/groceries/${user.uid}/${grocery.id}`);
    set(groceriesRef, { ...grocery, check1: !grocery.check1 });
  };

  // Second checkmark. This moves it to checked items.
  const check2 = () => {
    const groceriesRef = ref(db, `/groceries/${user.uid}/${grocery.id}`);
    set(groceriesRef, { ...grocery, check2: !grocery.check2 });
  };

  // Deletes the item.
  const deleteGrocery = () => {
    const groceriesRef = ref(db, `/groceries/${user.uid}/${grocery.id}`);
    remove(groceriesRef);
  };

  return (
    <Row data-testid={dataTest}>
      <ListGroupItem style={{ background: index % 2 === 1 ? "#F6F6F6" : "" }}>
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
                  data-testid="regular"
                />
              </Col>
              <Col>
                <FaCheckCircle
                  color={grocery.check1 ? "green" : ""}
                  key="check1"
                  onClick={() => {
                    check1();
                  }}
                  data-testid="check1"
                />
              </Col>
              <Col>
                <FaCheckCircle
                  color={grocery.check2 ? "green" : ""}
                  key="check2"
                  onClick={() => {
                    check2();
                  }}
                  data-testid="check2"
                />
              </Col>
              <Col>
                <FaTrash
                  color="red"
                  onClick={() => {
                    deleteGrocery();
                  }}
                  data-testid="delete"
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
