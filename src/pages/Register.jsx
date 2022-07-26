import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import { FaGoogle } from "react-icons/fa";

import { auth } from "../firebase/config";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        // redirect to home page
        navigate("/");
        console.log(res);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const errorMessage = (
    <Row className="d-flex justify-content-center">
      <Col className="col-lg-4">
        <div
          className="alert alert-danger"
          role="alert"
          style={styles.passwordError}
        >
          <p style={styles.passwordErrorText}>{error}</p>
        </div>
      </Col>
    </Row>
  );

  return (
    <Container>
      <div className="text-center">
        <h1>Register</h1>
      </div>
      <Form onSubmit={handleSubmit}>
        <Row className="d-flex justify-content-center">
          <Col className="col-lg-4">
            <Form.Group className="mb-3 " controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center">
          <Col className="col-lg-4">
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
        {error && errorMessage}
        <Row className="d-flex justify-content-center">
          <Col className="col-lg-4">
            <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center">
          <Col className="d-grid col-lg-4">
            <Button variant="primary mb-3" type="submit">
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
      <Row>
        <div className="text-center">
          {/* <p>or sign up with:</p>

          <Button type="button" className="btn btn-link rounded-circle mb-3">
            <FaGoogle className="light mb-1" style={{ color: "white" }} />
          </Button> */}
          <p>
            Already a member?&nbsp;
            <Link to={"/login"}>Login</Link>
          </p>
        </div>
      </Row>
    </Container>
  );
};

const styles = {
  passwordError: {
    minHeight: "30px",
    paddingTop: "2px",
    paddingBottom: "2px",
  },
  passwordErrorText: {
    marginBottom: "0px",
  },
};
