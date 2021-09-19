import axios from "axios";
import React, { useRef, useState} from "react";
import { Form, Button, Card, Alert} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

export default function Signup() {
  const firstName = useRef();
  const lastName = useRef();
  const email = useRef();
  const password = useRef();
  const passwordConf = useRef();
  const phoneNumber = useRef();
  const history = useHistory();

  const [err, setErr] = useState("");
  const [load, setLoad] = useState(false);


  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordConf.current.value !== password.current.value) {
      return setErr("Passwords don't match!");
    } else {
      const user = {
        firstName: firstName.current.value,
        lastName: lastName.current.value,
        email: email.current.value,
        phone: phoneNumber.current.value,
        password: password.current.value,
      };
      try {
        setErr("");
        setLoad(true)
        await axios.post("/auth/register", user);
        history.push("/login");
      } catch (err) {
        console.log(err);
        setErr("Failed to create account");
      }
      setLoad(false);
      console.log(user);
    }
  };

  return (
    <div
      className="position-absolute top-50 start-50 translate-middle"
      style={{ zIndex: "1" }}
    >
      <Card
        className="pt-3 pb-5 px-2"
        style={{ minWidth: "40vh", borderRadius: "20px" }}
      >
        <Card.Body>
          <h2 className="text-center mb-4">Sign up</h2>
          {err && <Alert variant="danger">{err}</Alert>}
          <Form onSubmit={handleClick}>
            <Form.Group id="firstName">
              <Form.Label>First name</Form.Label>
              <Form.Control type="name" required ref={firstName}></Form.Control>
            </Form.Group>
            <Form.Group id="LastName">
              <Form.Label>Last name</Form.Label>
              <Form.Control type="name" required ref={lastName}></Form.Control>
            </Form.Group>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" required ref={email}></Form.Control>
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" required ref={password} minLength="6"></Form.Control>
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" required ref={passwordConf} minLength="6"></Form.Control>
            </Form.Group>
            <Form.Group id="phoneNumber">
              <Form.Label>Phone number</Form.Label>
              <Form.Control type="phone" required ref={phoneNumber}></Form.Control>
            </Form.Group>
            <Button
              className="d-flex justify-content-center align-items-center w-50 mt-4 mx-auto"
              type="submit"
              disabled={load} 
            >
              Sign Up
            </Button>
          </Form>
        </Card.Body>
        <div className="w-100 text-center mt-2">
          Already have an account? <Link to="/login">Log In</Link>
        </div>
      </Card>
    </div>
  );
}
