import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Content = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get('http://localhost:8080/api/v1/users/list');
    setUsers(result.data);
    console.log(result.data);
  };

  return (
    <div className="container">
      <div className="py-4">
        <table className="table ">
          <thead>
            <tr>
              <th scope="col">info-success</th>
              <th scope="col">foldericon</th>
              <th scope="col">endTime</th>
              <th scope="col">owner</th>
              <th scope="col">Status & Date</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, index) => {
              return (
                <tr key={index}>
                  <td>icon-info-success</td>
                  <td>folder</td>
                  <td>{user.endTime}</td>
                  <td>{user.owner}</td>
                  <td>
                    {user.jobStatus} - {user.startTime}
                  </td>
                  {/* <td>{user.labels}</td>
                  <td>{user.name}</td>
                  <td>{user.owner}</td>
                  <td>{user.path}</td>
                  <td>{user.queuedTime}</td>
                  <td>{user.startTime}</td> */}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Content;
