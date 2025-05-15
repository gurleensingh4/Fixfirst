import React, { useEffect, useState } from 'react';

const Inspectors = () => {
  const [inspectors, setInspectors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchInspectors() {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch('http://localhost:5000/api/inspectors');
        if (!response.ok) throw new Error('Failed to fetch inspectors');
        const data = await response.json();
        setInspectors(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchInspectors();
  }, []);

  return (
    <div>
      <h1>Inspectors List</h1>
      {loading && <p>Loading...</p>}
      {error && <p style={{color: 'red'}}>Error: {error}</p>}
      {!loading && !error && inspectors.length === 0 && <p>No inspectors available.</p>}
      {!loading && !error && inspectors.map(insp => (
        <div key={insp._id} style={{border: '1px solid #ccc', padding: '10px', margin: '10px 0'}}>
          <h3>{insp.name}</h3>
          <p><strong>Experience:</strong> {insp.experience} years</p>
          <p><strong>Location:</strong> {insp.location}</p>
          <p><strong>Certifications:</strong> {insp.certifications.join(', ')}</p>
        </div>
      ))}
    </div>
  );
};

export default Inspectors;
