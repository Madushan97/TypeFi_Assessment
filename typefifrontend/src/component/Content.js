import axios from 'axios';
import React, { useEffect, useState } from 'react';

import InfoIcon from '@mui/icons-material/Info';
import CheckIcon from '@mui/icons-material/Check';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';

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
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Status</th>
              <th scope="col"></th>
              <th scope="col">Start Time</th>
              <th scope="col">owner</th>
              <th scope="col">Status & End Date</th>
            </tr>
          </thead>

          <tbody>
            {}
            {users.map((user, index) => {
              // make time as mm-dd
              const endTime = user.endTime;
              const date = new Date(endTime);

              // month
              const month = date.toLocaleString('default', { month: 'long' });

              // day
              const day = date.getDate();

              return (
                <tr key={index}>
                  {/* 1 */}
                  {user.jobStatus === 'Completed' ? (
                    <td style={{ color: 'green' }}>
                      <CheckIcon />
                    </td>
                  ) : (
                    <td style={{ color: 'red' }}>
                      <InfoIcon />
                    </td>
                  )}
                  {/* 2 */}
                  {user.jobStatus === 'Completed' ? (
                    <td style={{ color: 'blue' }}>
                      <FolderCopyIcon />
                    </td>
                  ) : (
                    <td style={{ color: 'red' }}>
                      <FolderCopyIcon />
                    </td>
                  )}
                  {/* 3 */}
                  {user.jobStatus === 'Completed' ? (
                    <td style={{ color: 'blue' }}>/{user.name}</td>
                  ) : (
                    <td style={{ color: 'red' }}>/{user.name}</td>
                  )}
                  {/* 4 */}
                  {user.jobStatus === 'Completed' ? (
                    <td style={{ color: 'blue' }}>{user.owner}</td>
                  ) : (
                    <td style={{ color: 'red' }}>{user.owner}</td>
                  )}
                  {/* 5 */}
                  {user.jobStatus === 'Completed' ? (
                    <td style={{ color: 'blue' }}>
                      {user.jobStatus} on {`${month} ${day}`}
                    </td>
                  ) : (
                    <td style={{ color: 'red' }}>
                      {user.jobStatus} on {`${month} ${day}`}
                    </td>
                  )}
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
