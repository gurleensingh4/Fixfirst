import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Certificates() {
  const [certs, setCerts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/certificates')
      .then(res => setCerts(res.data))
      .catch(console.error);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Property Certificates</h2>
      <ul>
        {certs.map(c => (
          <li key={c._id}>
            <b>{c.propertyAddress}</b> - Certified by {c.inspector?.name || 'Unknown'} on {new Date(c.certificationDate).toLocaleDateString()}
            <br />
            Notes: {c.notes}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Certificates;
