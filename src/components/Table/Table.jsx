import React, { useEffect, useState } from "react";
import axios from "axios";

const Table = () => {
  const [users, setUsers] = useState([]);
  const [usersToDisplay, setUsersToDisplay] = useState([]);
  const [sortDirection, setSortDirection] = useState("asc");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios.get("https://randomuser.me/api/?results=30").then((response) => {
      setUsersToDisplay(response.data.results);
      setUsers(response.data.results);
    });
  }, []);

  const handleSubmit = (e) => {
        e.preventDefault();
      const filteredUsers = users.filter(user => {
          return user.phone.includes(searchTerm);
      })
      setUsersToDisplay(filteredUsers);
  }

  const handleReset = () => {
      setUsersToDisplay(users);
      setSearchTerm("");
  }

  const sortByName = () => {
    if (sortDirection === "asc") {
      sortByNameAsc();
      setSortDirection("des");
    } else {
      sortByNameDes();
      setSortDirection("asc");
    }
  };
  const sortByNameAsc = () => {
    console.log("I was clicked! Trigger sort ascending!!!");
    let tempUsers = [...users];
    const sortedUsers = tempUsers.sort((a, b) => {
      let nameA = a.name.first;
      let nameB = b.name.first;
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    });
    // console.log(sortedUsers);
    setUsersToDisplay(sortedUsers);
  };

  const sortByNameDes = () => {
    console.log("I was clicked! I am descending!!!");
    let tempUsers = [...users];
    const sortedUsers = tempUsers.sort((a, b) => {
      let nameA = a.name.first;
      let nameB = b.name.first;
      if (nameA > nameB) return -1;
      if (nameA < nameB) return 1;
      return 0;
    });
    // console.log(sortedUsers);
    setUsersToDisplay(sortedUsers);
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Enter phone number to filter by phone" name="searchTerm" value={searchTerm} onChange={(e) => {
              setSearchTerm(e.target.value);
          }}/>
          <button class="btn waves-effect waves-light">Search<i class="material-icons right">search</i></button>
          <button class="btn waves-effect waves-light" onClick={handleReset} type="button">Clear<i class="material-icons right">clear</i></button>
          </form>
      </div>
      <div>
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
            {usersToDisplay.map((user, index) => (
              <tr key={index}>
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
      </div>
    </div>
  );
};

export default Table;
