import React, { useState } from 'react';
import axios from 'axios';

function UploadReport() {
  const [propertyAddress, setPropertyAddress] = useState('');
  const [file, setFile] = useState(null);

  const token = localStorage.getItem('token');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      alert('Please upload a report file');
      return;
    }
    const formData = new FormData();
    formData.append('propertyAddress', propertyAddress);
    formData.append('reportFile', file);

    try {
      await axios.post('http://localhost:5000/api/reports', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        }
      });
      alert('Report uploaded');
      setPropertyAddress('');
      setFile(null);
    } catch (err) {
      alert(err.response?.data?.error || 'Upload failed');
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Upload Inspection Report</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Property Address"
          value={propertyAddress}
          onChange={e => setPropertyAddress(e.target.value)}
          required
        /><br /><br />
        <input
          type="file"
          accept=".pdf,.doc,.docx,.jpg,.png"
          onChange={e => setFile(e.target.files[0])}
          required
        /><br /><br />
        <button type="submit">Upload Report</button>
      </form>
    </div>
  );
}

export default UploadReport;
