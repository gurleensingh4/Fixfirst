import React, { useEffect, useState } from 'react';
import axios from 'axios';

const InspectorList = () => {
  const [inspectors, setInspectors] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/inspectors')
      .then(res => setInspectors(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Available Inspectors</h2>
      <ul>
        {inspectors.map(inspector => (
          <li key={inspector._id}>
            <strong>{inspector.name}</strong> ({inspector.location})<br />
            Rating: {inspector.rating}/5<br />
            Contact: {inspector.contact}<br />
            Specialization: {inspector.specialization.join(', ')}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InspectorList;
