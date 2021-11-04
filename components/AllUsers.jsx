import React, { useEffect, useState } from "react";
import { getUsers, deleteUser } from "../service/API";
import { Button, Table } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const AllUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsersFromAPI();
  }, []);

  const getUsersFromAPI = async () => {
    const response = await getUsers();
    console.log(response.data);

    setUsers(response.data);
  };

  // const deleteRecord = async (id) => {
  //   await deleteUser(id);
  //   // await deleteUser(id.filter((_user) => _user.id !== users.id));
  //   console.log("deleted id===>", id);
  //   getUsersFromAPI();
  // };

  const deleteRecord = async (id) => {
    console.log("ID:==>", id);
    await deleteUser(id);

    getUsersFromAPI();
  };
  return (
    <div>
      <h1 style={{ padding: "30px" }}>Hii from All users component</h1>

      <Table striped bordered hover style={{ width: "70%", margin: "auto" }}>
        <thead>
          <tr>
            {/* <th>ID</th> */}
            <th>Name</th>
            <th>Age</th>
            <th>Phone No.</th>
            <th>Action's</th>
          </tr>
        </thead>
        {users.map((users) => {
          return (
            <tbody>
              <tr>
                {/* <td>{users.id}</td> */}
                <td>{users.name}</td>
                <td>{users.age}</td>
                <td>{users.phone}</td>
                <td>
                  <NavLink to={`/editUser/${users.id}`}>
                    <Button variant="secondary">Edit</Button>
                  </NavLink>
                  &nbsp;&nbsp;
                  <Button
                    variant="danger"
                    onClick={() => deleteRecord(users.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </Table>
    </div>
  );
};

export default AllUsers;
