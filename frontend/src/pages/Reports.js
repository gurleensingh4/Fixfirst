import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Reports() {
  const [reports, setReports] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    axios.get('http://localhost:5000/api/reports', {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => setReports(res.data))
      .catch(console.error);
  }, [token]);

  return (
    <div style={{ padding: 20 }}>
      <h2>My Inspection Reports</h2>
      <ul>
        {reports.map(r => (
          <li key={r._id}>
            <b>{r.propertyAddress}</b> - <a href={`http://localhost:5000/uploads/${r.reportFile}`} target="_blank" rel="noreferrer">View Report</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Reports;
