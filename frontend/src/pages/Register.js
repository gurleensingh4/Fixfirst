import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', {
        name,
        email,
        password,
      });
      alert('Registration successful. Please login.');
      navigate('/login');
    } catch (error) {
      // Show error details for debugging
      alert(
        error.response?.data?.error ||
        error.response?.data?.message ||
        'Registration failed. Try again.'
      );
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px' }}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full Name"
          required
          value={name}
          onChange={e => setName(e.target.value)}
          style={{ display: 'block', width: '100%', marginBottom: '15px', padding: '8px' }}
        />
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
          style={{ display: 'block', width: '100%', marginBottom: '15px', padding: '8px' }}
        />
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={e => setPassword(e.target.value)}
          style={{ display: 'block', width: '100%', marginBottom: '15px', padding: '8px' }}
        />
        <button type="submit" style={{ padding: '10px 15px' }}>Register</button>
      </form>
    </div>
  );
}

export default Register;
