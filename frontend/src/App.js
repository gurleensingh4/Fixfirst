import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Inspectors from './pages/Inspectors';
import About from './pages/About';
import UploadReport from './pages/UploadReport'; // <-- Import the UploadReport component
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inspectors" element={<Inspectors />} />
          <Route path="/about" element={<About />} />
          <Route path="/upload" element={<UploadReport />} />
          <Route path="/book" element={<Inspectors />} />
          <Route path="/verify" element={<UploadReport />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
