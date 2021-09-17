import React, { useContext, useRef, useState} from "react";
import { Form, Button, Card, Alert} from "react-bootstrap";
import { Link } from "react-router-dom";
import { loginCall } from "../apiCalls";
import { AuthContext } from "../context/AuthContext";
import { CircularProgress } from "@material-ui/core"


export default function Login() {
  const { user, isFetching, error, dispatch } = useContext(AuthContext);
  const email = useRef();
  const password = useRef();

  const handleClick = (e) => {
    e.preventDefault();
    try {
      loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
    } catch(err) {
      console.log(err);
    } 
  };
  console.log(user)

  return (
    <div
      id="auth"
      className="position-absolute top-50 start-50 translate-middle"
      style={{ zIndex: "1" }}
    >
      <Card
        className="pt-3 pb-5 px-2"
        style={{ minWidth: "40vh", borderRadius: "20px" }}
      >
        <Card.Body>
          <h2 className="text-center mb-4">Login</h2>
          {error && <Alert variant="danger">{"Failed to logIn"}</Alert>}
          <Form onSubmit={handleClick}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                required
                ref={email}
                placeholder="Email">
              </Form.Control>
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                required
                minLength="6"
                ref={password}
                placeholder="Password">
              </Form.Control>
            </Form.Group>
            <Button
              className="d-flex justify-content-center align-items-center w-50 mt-4 mx-auto"
              type="submit"
            >
              {isFetching ? <CircularProgress color="white" size="20px"/> : "LogIn"}
            </Button>
          </Form>
          <div className="w-100 text-center mt-2">
            <Link to="/forgot-password">ForgotPassword?</Link>
          </div>
        </Card.Body>
        <div className="w-100 text-center mt-2">
          Need an account? <Link to="/signup">Sign Up</Link>
        </div>
      </Card>
    </div>
  );
}
