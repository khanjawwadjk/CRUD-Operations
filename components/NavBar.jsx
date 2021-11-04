import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const myStyle = {
  padding: "20px",
  fontSize: "20px",
  textDecoration: "none",
  color: "#ffffff",
};
export const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>JK's</Navbar.Brand>

        <Nav>
          <NavLink exact to="/" style={myStyle}>
            Home
          </NavLink>
          <NavLink exact to="allUsers" style={myStyle}>
            All User's
          </NavLink>
          <NavLink exact to="addUsers" style={myStyle}>
            Add User's
          </NavLink>
        </Nav>
      </Navbar>
    </>
  );
};
