import {
  Form,
  Button,
  InputGroup,
  FormControl,
  Container,
} from "react-bootstrap";

const AddItem = () => {
  return (
    <Container>
      <Form>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Add Item"
            aria-label="Add Item"
            aria-describedby="basic-addon2"
          />
          <Button variant="primary" id="button-addon2">
            Add Item
          </Button>
        </InputGroup>
      </Form>
    </Container>
  );
};

export default AddItem;
