import axios from 'axios';
import React, { useEffect, useState } from 'react';

import InfoIcon from '@mui/icons-material/Info';
import CheckIcon from '@mui/icons-material/Check';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import SearchBar from './SearchBar';

const Content = () => {
  const [users, setUsers] = useState([]);
  const [expandedRows, setExpandedRows] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get('http://localhost:8080/api/v1/users/list');
    setUsers(result.data);
    console.log(result.data);
  };

  // search function
  const handleSearch = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  // expand option
  const handleRowClick = (index) => {
    if (expandedRows.includes(index)) {
      setExpandedRows(expandedRows.filter((row) => row !== index));
    } else {
      setExpandedRows([...expandedRows, index]);
    }
  };

  const filteredUsers = users.filter((user) => {
    return user.owner.toLowerCase().includes(searchQuery);
  });

  return (
    <div className="container">
      <div className="py-4">
        <SearchBar searchQuery={searchQuery} handleSearch={handleSearch} />
        {/* search bar */}

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
            {filteredUsers.map((user, index, row) => {
              // make time as mm-dd
              const endTime = user.endTime;
              const queuedTime = user.queuedTime;
              const startedTime = user.startTime;
              const endedTime = user.endTime;

              const date = new Date(endTime);
              const qtime = new Date(queuedTime);
              const sTime = new Date(startedTime);
              const eTime = new Date(endedTime);

              const queue_time = qtime.toLocaleTimeString();
              const start_time = sTime.toLocaleTimeString();
              const end_time = eTime.toLocaleTimeString();

              // month
              const month = date.toLocaleString('default', { month: 'long' });

              // day
              const day = date.getDate();

              // year
              const year = date.getFullYear();

              return (
                <React.Fragment key={index}>
                  <tr
                    onClick={() => handleRowClick(index)}
                    style={{ cursor: 'pointer' }}
                  >
                    {/* table head  -  1 */}
                    {user.jobStatus === 'Completed' ? (
                      <td style={{ color: 'green' }}>
                        <CheckIcon />
                      </td>
                    ) : (
                      <td style={{ color: 'red' }}>
                        <InfoIcon />
                      </td>
                    )}
                    {/* table head  -  2 */}
                    {user.jobStatus === 'Completed' ? (
                      <td style={{ color: 'blue' }}>
                        <FolderCopyIcon />
                      </td>
                    ) : (
                      <td style={{ color: 'red' }}>
                        <FolderCopyIcon />
                      </td>
                    )}
                    {/* table head  -  3 */}
                    {user.jobStatus === 'Completed' ? (
                      <td style={{ color: 'blue' }}>/{user.name}</td>
                    ) : (
                      <td style={{ color: 'red' }}>/{user.name}</td>
                    )}
                    {/* table head  -  4 */}
                    {user.jobStatus === 'Completed' ? (
                      <td style={{ color: 'blue' }}>{user.owner}</td>
                    ) : (
                      <td style={{ color: 'red' }}>{user.owner}</td>
                    )}
                    {/* table head  -  5 */}
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

                  {/* expand feature */}
                  {expandedRows.includes(index) && (
                    <tr>
                      <div>
                        {user.jobStatus === 'Completed' ? (
                          <td style={{ color: 'blue' }}>Files/ {user.name}</td>
                        ) : (
                          <td style={{ color: 'red' }}>Files/ {user.name}</td>
                        )}
                      </div>

                      <div>
                        {user.jobStatus === 'Completed' ? (
                          <td style={{ color: 'blue' }}>
                            {' '}
                            <RocketLaunchIcon />({user.owner})
                          </td>
                        ) : (
                          <td style={{ color: 'red' }}>
                            {' '}
                            <RocketLaunchIcon />({user.owner})
                          </td>
                        )}
                      </div>

                      <tr>
                        <th scope="col">Status</th>
                        <th scope="col">Queued</th>
                        <th scope="col">Started Time</th>
                        <th scope="col">Ended</th>
                        <th scope="col">Duration</th>
                      </tr>
                      <tbody>
                        <td>
                          {user.jobStatus === 'Completed' ? (
                            <td style={{ color: 'blue' }}>Job success</td>
                          ) : (
                            <td style={{ color: 'red' }}>Job Error</td>
                          )}
                        </td>
                        <td>{` ${day} ${month} ${year} ${queue_time}`}</td>
                        <td>{` ${start_time} `}</td>
                        <td>{` ${end_time}`}</td>
                        <td>{user.duration}ms</td>
                      </tbody>
                    </tr>
                  )}
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Content;
