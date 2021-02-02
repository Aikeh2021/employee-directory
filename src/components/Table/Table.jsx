import React from 'react';
import { useState} from 'react';



const Table = () => {
    return (
        <table className="striped">
        <thead>
          <tr>
              <th className="s2">ID</th>
              <th className="s2">Photo</th>
              <th className="s2">Name (first and last)</th>
              <th className="s2">Email</th>
              <th className="s2">Phone Number</th>
              <th className="s2">Date of Birth (DOB)</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th className="s2">1215614321</th>
            <td className="s2"><img src="https://randomuser.me/api/portraits/thumb/men/75.jpg" alt="User's thumbnail"/></td>
            <td className="s2">Zach Effron</td>
            <td className="s2">hsm2@yahoo.com</td>
            <td className="s2">888-888-8878</td>
            <td className="s2">7/7/1989</td>
          </tr>
          <tr>
            <th className="s2">1215614321</th>
            <td className="s2"><img src="https://randomuser.me/api/portraits/thumb/men/75.jpg" alt="User's thumbnail"/></td>
            <td className="s2">Zendaya Coleman</td>
            <td className="s2">hsm@yahoo.com</td>
            <td className="s2">888-888-8878</td>
            <td className="s2">9/21/1996</td>
          </tr>
          <tr>
            <th className="s2">1215614321</th>
            <td className="s2"><img src="https://randomuser.me/api/portraits/thumb/men/75.jpg" alt="User's thumbnail"/></td>
            <td className="s2">Vanessa Hudgens</td>
            <td className="s2">hsm@yahoo.com</td>
            <td className="s2">888-888-8878</td>
            <td className="s2">9/5/1985</td>
          </tr>
        </tbody>
      </table>
            
    );
};

export default Table;