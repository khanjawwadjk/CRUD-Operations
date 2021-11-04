import React, { useState } from "react";
import { Card, Form, Row, Col, Button } from "react-bootstrap";
import "./login.css";

import UserList from "./UserList";
import "../Reducers/Data";
import { userDataReducer } from "../Reducers/Data";

const Login = () => {
  const userData = userDataReducer;
  const [users, setUSers] = useState(userData);
  console.log(users);

  const initialState = {
    name: "",
    userName: "",
  };

  const addUsers = (user) => {
    setUSers([...users, user]);
  };

  return (
    <div>
      <Card className="card1">
        <h2>CRUD with React Hooks</h2>
        <hr></hr>
        <Row>
          <Col md={6}>
            <h3>ADD USER</h3>
            <b>Name:</b>
            <Form.Control
              type="text"
              className="col1"
              onChange={(e) => console.log("form input", e.target.value)}
            ></Form.Control>
            <b>User Name:</b>
            <Form.Control
              type="text"
              className="col1"
              onChange={(e) => console.log("form input", e.target.value)}
            ></Form.Control>
            <Button className="add-btn" variant="secondary">
              Add New User
            </Button>
          </Col>
          <Col md={6}>
            <UserList users={users} />
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default Login;
