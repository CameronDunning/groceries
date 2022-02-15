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

const AddItem = () => {
  const [newGrocery, setNewGrocery] = useState("");

  const createGrocery = async () => {
    const groceries = ref(db, "/groceries");
    push(groceries, {
      grocery: newGrocery,
      regular: false,
      check1: false,
      check2: false,
    });
  };

  return (
    <Container>
      <Form>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Add Item"
            aria-label="Add Item"
            aria-describedby="basic-addon2"
            onChange={(event) => {
              setNewGrocery(event.target.value);
            }}
          />
          <Button variant="primary" onClick={createGrocery}>
            Add Item
          </Button>
        </InputGroup>
      </Form>
    </Container>
  );
};

export default AddItem;
