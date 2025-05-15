import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookInspection = () => {
  const [inspectors, setInspectors] = useState([]);
  const [form, setForm] = useState({
    propertyAddress: '',
    userName: '',
    userEmail: '',
    inspectorId: '',
    date: '',
    reportUrl: ''
  });

  useEffect(() => {
    axios.get('http://localhost:5000/api/inspectors')
      .then(res => setInspectors(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/inspections', form);
    alert("Inspection Booked!");
    setForm({
      propertyAddress: '',
      userName: '',
      userEmail: '',
      inspectorId: '',
      date: '',
      reportUrl: ''
    });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Book a Property Inspection</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Property Address" required
          value={form.propertyAddress}
          onChange={e => setForm({ ...form, propertyAddress: e.target.value })} /><br /><br />

        <input type="text" placeholder="Your Name" required
          value={form.userName}
          onChange={e => setForm({ ...form, userName: e.target.value })} /><br /><br />

        <input type="email" placeholder="Your Email" required
          value={form.userEmail}
          onChange={e => setForm({ ...form, userEmail: e.target.value })} /><br /><br />

        <select value={form.inspectorId} required
          onChange={e => setForm({ ...form, inspectorId: e.target.value })}>
          <option value="">Select Inspector</option>
          {inspectors.map(inspector => (
            <option key={inspector._id} value={inspector._id}>
              {inspector.name} - {inspector.location}
            </option>
          ))}
        </select><br /><br />

        <input type="date" required
          value={form.date}
          onChange={e => setForm({ ...form, date: e.target.value })} /><br /><br />

        <input type="url" placeholder="Report URL (if available)"
          value={form.reportUrl}
          onChange={e => setForm({ ...form, reportUrl: e.target.value })} /><br /><br />

        <button type="submit">Book Inspection</button>
      </form>
    </div>
  );
};

export default BookInspection;
