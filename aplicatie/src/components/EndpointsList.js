
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EndpointsList = ({ applicationId }) => {
  const [endpoints, setEndpoints] = useState([]);

  useEffect(() => {
    axios.get(`/api/applications/${applicationId}/endpoints`)
      .then(response => {
        setEndpoints(response.data);
      })
      .catch(error => {
        console.error('Error fetching endpoints:', error);
      });
  }, [applicationId]);

  return (
    <div>
      <h2>Endpoints</h2>
      <ul>
        {endpoints.map(endpoint => (
          <li key={endpoint._id}>{endpoint.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default EndpointsList;
