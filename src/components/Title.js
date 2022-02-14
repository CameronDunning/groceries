import { Container, Navbar } from "react-bootstrap";

const Title = () => {
  return (
    <Navbar className="mb-3" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <img
            alt="groceries"
            src="/groceries.svg"
            width="30"
            height="30"
            className="d-inline-block align-top filter-blue"
          />{" "}
          Groceries
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Title;
