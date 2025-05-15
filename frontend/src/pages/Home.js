import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="container">

      {/* HERO SECTION */}
      <section className="card" data-aos="fade-down">
        <h1 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>Welcome to FixFirst</h1>
        <p style={{ fontSize: "1.2rem" }}>
          India’s most reliable Pre-Purchase Property Inspection Platform. Get your property checked before buying.
        </p>
        <button style={{ marginTop: "20px" }} onClick={() => navigate('/upload')}>Book Your Inspection</button>
      </section>

      {/* WHY TRUST US */}
      <section className="card" data-aos="fade-up">
        <h2>Why Choose FixFirst?</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li>✅ Certified Inspectors across India</li>
          <li>✅ Transparent digital inspection reports</li>
          <li>✅ Instant property verification</li>
          <li>✅ Trusted by 1000+ buyers</li>
        </ul>
      </section>

      {/* FEATURES GRID */}
      <section className="card" data-aos="fade-up">
        <h2>Our Services</h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          marginTop: "20px"
        }}>
          <div className="card">
            <h3>📄 Upload Inspection Reports</h3>
            <p>Upload property inspection files securely for buyer viewing and verification.</p>
            <button onClick={() => navigate('/upload')}>Go</button>
          </div>
          <div className="card">
            <h3>🔍 Book an Inspector</h3>
            <p>Connect with licensed professionals to inspect properties near you.</p>
            <button onClick={() => navigate('/inspectors')}>Go</button>
          </div>
          <div className="card">
            <h3>🔒 Verify Properties</h3>
            <p>Ensure you're buying legal and damage-free properties with our certification.</p>
            <button onClick={() => navigate('/verify')}>Go</button>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="card" data-aos="zoom-in">
        <h2>What Our Users Say</h2>
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          marginTop: "10px"
        }}>
          <blockquote>"FixFirst helped me avoid a ₹3 lakh mistake. Highly recommend!" — Rahul, Delhi</blockquote>
          <blockquote>"Professional and quick service. Loved the digital reports!" — Sneha, Bangalore</blockquote>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        marginTop: "30px",
        padding: "20px",
        textAlign: "center",
        color: "#888",
        fontSize: "0.9rem"
      }}>
        FixFirst © 2025 | Contact: support@fixfirst.in
      </footer>

    </div>
  );
};

export default Home;
