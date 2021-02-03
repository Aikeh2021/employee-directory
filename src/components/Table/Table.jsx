import React, { useEffect, useState } from "react";
import axios from "axios";

const Table = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://randomuser.me/api/?results=30").then((response) => {
      console.log(response.data);
      setUsers(response.data.results);
    });
  }, []);

  const sortByName = () => {
    console.log("I was clicked!");
    const sortedUsers = users.sort((a, b) => {
      let nameA = a.name.first;
      let nameB = b.name.first;
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    });
    console.log(sortedUsers);
  };

  return (
    <table className="striped">
      <thead>
        <tr>
          <th className="s2">ID</th>
          <th className="s2">Photo</th>
          <th className="s2" onClick={sortByName}>
            Name{" "}
          </th>
          <th className="s2">Email</th>
          <th className="s2">Phone Number</th>
          <th className="s2">Date of Birth (DOB)</th>
        </tr>
      </thead>

      <tbody>
        {users.map((user) => (
          <tr key={user.id.value}>
            <th className="s2">{user.id.value}</th>
            <td className="s2">
              <img src={user.picture.thumbnail} alt="User's thumbnail" />
            </td>
            <td className="s2">
              {user.name.first} {user.name.last}
            </td>
            <td className="s2">{user.email}</td>
            <td className="s2">{user.phone}</td>
            <td className="s2">{user.dob.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
