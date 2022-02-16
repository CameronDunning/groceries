import { useState } from "react";

import { ref, push } from "firebase/database";
import { db } from "../firebase/config";

import {
  Container,
  Form,
  FormControl,
  Button,
  InputGroup,
} from "react-bootstrap";

// Simple form to add an item
const AddItem = () => {
  const [newGrocery, setNewGrocery] = useState("");

  // Add a new grocery item to firebase. By default all options are unchecked.
  const createGrocery = (event) => {
    event.preventDefault();
    if (newGrocery) {
      const groceriesRef = ref(db, "/groceries");
      push(groceriesRef, {
        grocery: newGrocery,
        regular: false,
        check1: false,
        check2: false,
      });
    }
    setNewGrocery("");
  };

  return (
    <Container>
      <Form onSubmit={(event) => createGrocery(event)}>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Add Item"
            aria-label="Add Item"
            aria-describedby="basic-addon2"
            value={newGrocery}
            onChange={(event) => {
              setNewGrocery(event.target.value);
            }}
          />
          <Button variant="primary" type="submit">
            Add Item
          </Button>
        </InputGroup>
      </Form>
    </Container>
  );
};

export default AddItem;
