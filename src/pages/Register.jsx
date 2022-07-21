import React from "react";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Register = () => {
  return (
    <Container>
      <div className="text-center">
        <h1>Register</h1>
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
            Already a member?&nbsp;
            <Link to={"/login"}>Login</Link>
          </p>
        </div>
      </Row>
    </Container>
  );
};
