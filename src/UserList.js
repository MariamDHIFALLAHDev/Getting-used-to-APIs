import React, { useState, useEffect } from "react";
import axios from "axios";

export default function UserList() {
  const [listOfUSer, setlistOfUser] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      console.log(res);
      setlistOfUser(res.data);
    });
  }, []);

  return (
    <div>
      <table className="customers">
        <tr>
          <th>Name</th>
          <th>User Name</th>
          <th>E-mail</th>
          <th>City</th>
          <th>Company</th>
        </tr>
        {listOfUSer.map((el) => (
          <tr>
            <td>{el.name}</td>
            <td>{el.username}</td>
            <td>{el.email}</td>
            <td>{el.address.city}</td>
            <td>{el.company.name}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
