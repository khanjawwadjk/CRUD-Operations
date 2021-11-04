import React from "react";
import { Card, Form, Row, Col, Button } from "react-bootstrap";

import "./login.css";

const UserList = ({ users }) => {
  console.log(users);
  return (
    <div>
      <h3>USER's LIST</h3>
      <Card>
        <table className="tab1">
          <tr>
            <th>Name</th>
            <th>User Name</th>
            <th>Actions</th>
          </tr>
          {users.map((users) => {
            return (
              <tr>
                <td>{users.name}</td>
                <td>{users.userName}</td>
                <td>
                  <Button variant="outline-warning" className="btn2">
                    Edit
                  </Button>
                  <Button variant="outline-danger" className="btn2">
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </table>
      </Card>
    </div>
  );
};

export default UserList;
