
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ApplicationsList = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    axios.get('/api/applications')
      .then(response => {
        setApplications(response.data);
      })
      .catch(error => {
        console.error('Error fetching applications:', error);
      });
  }, []);

  return (
    <div>
      <h2>Applications</h2>
      <ul>
        {applications.map(application => (
          <li key={application._id}>{application.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ApplicationsList;
