import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { addUsers } from "../service/API";
import { useHistory } from "react-router-dom";

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
const AddUsers = () => {
  const [userInitials, setUsersInitials] = useState(initialValues);

  //History variable..
  const history = useHistory();

  //Destructuring of data......
  //name in input field should be same as these  in curly brace
  const { name, age, phone } = userInitials;

  const onValueChange = (e) => {
    setUsersInitials({ ...userInitials, [e.target.name]: e.target.value });
    // console.log("targeted value====>", userInitials);
  };

  const addUserDetails = async () => {
    await addUsers(userInitials);

    //to push the allusers page .......
    history.push("./allUsers");
  };

  const cancelAdd = () => {
    history.push("allUsers");
  };

  return (
    <div>
      <h2>Hii from Add Users comp</h2>

      <Form style={formStyle}>
        {/* <Form.Label>ID:</Form.Label>
        <Form.Control
          type="text"
          placeholder="ID"
          onChange={(e) => onValueChange(e)}
          name="id"
          style={formStyle1}
        ></Form.Control> */}
        <Form.Label>Enter Name:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Name"
          onChange={(e) => onValueChange(e)}
          name="name"
          value={name}
          style={formStyle1}
        ></Form.Control>
        <Form.Label>Age:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Age"
          onChange={(e) => onValueChange(e)}
          name="age"
          value={age}
          style={formStyle1}
        ></Form.Control>
        <Form.Label>Phone Number:</Form.Label>
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
          onClick={addUserDetails}
        >
          Add
        </Button>
        &nbsp;&nbsp;
        <Button style={myStyleButtons} variant="secondary" onClick={cancelAdd}>
          Cancel
        </Button>
      </Form>
    </div>
  );
};

export default AddUsers;
