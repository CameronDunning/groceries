import { ref, set, remove } from "firebase/database";

import Grocery from "./Grocery";

import { Col, Row, Card, Button } from "react-bootstrap";

import { db } from "../../firebase/config";

// The container for the grocery list items.
// Includes options to uncheck (move items back to main section)
//  or clear (delete) items
const GroceryList = ({ title, groceries }) => {
  const uncheck = () => {
    groceries.forEach((grocery) => {
      const groceriesRef = ref(db, "/groceries/" + grocery.id);
      set(groceriesRef, { ...grocery, check1: false, check2: false });
    });
  };

  const clear = () => {
    groceries.forEach((grocery) => {
      const groceriesRef = ref(db, "/groceries/" + grocery.id);
      remove(groceriesRef);
    });
  };

  return (
    <>
      <Row className="mb-3">
        <Col sm={12} md={8}>
          <Card.Title>{title}</Card.Title>
        </Col>
        <Col sm={12} md={4}>
          <Row>
            <Col className="text-center">
              <Button
                onClick={() => {
                  uncheck();
                }}
              >
                Uncheck
              </Button>
            </Col>
            <Col className="text-center">
              <Button
                variant="danger"
                onClick={() => {
                  clear();
                }}
              >
                Clear
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
      {groceries &&
        groceries.map((grocery) => {
          return <Grocery grocery={grocery} key={grocery.id} />;
        })}
    </>
  );
};

export default GroceryList;
