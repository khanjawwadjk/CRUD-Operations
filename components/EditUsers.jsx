import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { addUsers, getUsers, editUsers } from "../service/API";
import { useHistory, useParams } from "react-router-dom";

//styling.............
const myStyleButtons = {
  margin: "20px",
  padding: "13px",
  width: "20%",
};
const formStyle = {
  padding: "30px",
  fontWeight: "bold",
  width: "60%",
  marginLeft: "150px",
};
const formStyle1 = {
  paddingBottom: "15px",
  marginBottom: "10px",
};
//styling ends.......

//initial variable
const initialValues = {
  name: "",
  age: "",
  phone: "",
};
const EditUsers = () => {
  const [userInitials, setUsersInitials] = useState(initialValues);

  //edit
  const { id } = useParams();

  //History variable..
  const history = useHistory();

  //Destructuring of data......
  //name in input field should be same as these  in curly brace
  const { name, age, phone } = userInitials;

  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = async () => {
    const response = await getUsers(id);
    setUsersInitials(response.data);
    // console.log("id====>", response);
  };

  const onValueChange = (e) => {
    setUsersInitials({ ...userInitials, [e.target.name]: e.target.value });
    // console.log("targeted value====>", userInitials);
  };

  const editUserDetails = async () => {
    await editUsers(id, userInitials);
    history.push("/allUsers");
  };

  const cancelEdit = () => {
    history.push("/allUsers");
  };

  return (
    <div>
      <h2>Hii from Edit Users comp</h2>

      <Form style={formStyle}>
        {/* <Form.Label>ID:</Form.Label>
        <Form.Control
          type="text"
          placeholder="ID"
          onChange={(e) => onValueChange(e)}
          name="id"
          style={formStyle1}
        ></Form.Control> */}
        <Form.Label>Entered Name:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Name"
          onChange={(e) => onValueChange(e)}
          name="name"
          value={name}
          style={formStyle1}
        ></Form.Control>
        <Form.Label>Entered Age:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Age"
          onChange={(e) => onValueChange(e)}
          name="age"
          value={age}
          style={formStyle1}
        ></Form.Control>
        <Form.Label>Entered Phone Number:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Phone"
          onChange={(e) => onValueChange(e)}
          name="phone"
          value={phone}
          style={formStyle1}
        ></Form.Control>
        <Button
          style={myStyleButtons}
          variant="secondary"
          onClick={editUserDetails}
        >
          Edit
        </Button>
        &nbsp;&nbsp;
        <Button style={myStyleButtons} variant="secondary" onClick={cancelEdit}>
          Cancel
        </Button>
      </Form>
    </div>
  );
};

export default EditUsers;
