import { signOut } from "firebase/auth";
import { Col, Container, Navbar, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

import { auth } from "../firebase/config";

// Simple Navbar header
export const Nav = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth);
    navigate("/login");
  };

  return (
    <Navbar className="mb-3" bg="dark" variant="dark">
      <Container className="justify-content-between">
        <Col>
          <Link to="/" style={styles.link}>
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
          </Link>
        </Col>{" "}
        <Link to="/login" style={styles.link}>
          <Navbar.Brand>Login</Navbar.Brand>
        </Link>
        <Link to="/register" style={styles.link}>
          <Navbar.Brand>Register</Navbar.Brand>
        </Link>
        <Button onClick={handleSignOut}>Sign Out</Button>
      </Container>
    </Navbar>
  );
};

const styles = {
  link: {
    textDecoration: "none",
  },
};
