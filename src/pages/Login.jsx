import React from "react";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <Container>
      <div className="text-center">
        <h1>Login</h1>
      </div>
      <Form>
        <Row className="d-flex justify-content-center">
          <Col className="col-lg-4">
            <Form.Group className="mb-3 " controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>
          </Col>
        </Row>

        <Row className="d-flex justify-content-center">
          <Col className="col-lg-4">
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Password" />
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
          <p>
            Not a member?&nbsp;
            <Link to={"/register"}>Register</Link>
          </p>
          <p>or sign up with:</p>

          <Button type="button" className="btn btn-link rounded-circle">
            <FaGoogle className="light mb-1" style={{ color: "white" }} />
          </Button>
        </div>
      </Row>
    </Container>
  );
};
