import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminVerify = () => {
  const [inspectors, setInspectors] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    fetchInspectors();
  }, []);

  const fetchInspectors = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/admin/inspectors/unverified', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setInspectors(res.data);
    } catch (err) {
      alert('Failed to fetch inspectors');
    }
  };

  const verifyInspector = async (id) => {
    try {
      await axios.post(`http://localhost:5000/api/admin/inspectors/verify/${id}`, {}, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert('Inspector verified!');
      fetchInspectors();
    } catch (err) {
      alert('Failed to verify inspector');
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Unverified Inspectors</h2>
      {inspectors.length === 0 && <p>No unverified inspectors</p>}
      <ul>
        {inspectors.map(ins => (
          <li key={ins._id}>
            {ins.name} ({ins.email}) &nbsp;
            <button onClick={() => verifyInspector(ins._id)}>Verify</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminVerify;