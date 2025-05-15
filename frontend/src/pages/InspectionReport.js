import React, { useEffect, useState } from 'react';
import axios from 'axios';

const InspectionReports = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/inspections')
      .then(res => setReports(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Inspection Reports</h2>
      <ul>
        {reports.map(report => (
          <li key={report._id}>
            <strong>Property:</strong> {report.propertyAddress}<br />
            <strong>Date:</strong> {new Date(report.date).toLocaleDateString()}<br />
            <strong>Inspector:</strong> {report.inspectorId.name}<br />
            <strong>Report:</strong> <a href={report.reportUrl} target="_blank" rel="noopener noreferrer">View Report</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InspectionReports;
