import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import axios from "axios";

const ViewUser = () => {

  const [users, setUser] = useState([]);
  useEffect(() => {
    loadUsers();
  }, []);
  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3003/users");
    setUser(result.data);
  };

  return (
    <div>
      <Navbar/>
      <div className="container">
        <div className="py-4">
          <h2>Other Users</h2>
          <table className="table border shadow">
            <thead className="thead-dark-bg">
              <tr>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email Address</th>
                <th scope="col">EID</th>
                <th scope="col">Birth Date</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr>
                  <th scope="row">{user.firstName}</th>
                  <td>{user.lastName}</td>
                  <td>{user.emailAddress}</td>
                  <td>{user.eid}</td>
                  <td>{user.birthDate}</td>
                  <td>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </div>
    </div>
  
  );
};

export default ViewUser;
