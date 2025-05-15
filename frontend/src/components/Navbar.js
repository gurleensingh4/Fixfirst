import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  // Styles
  const linkStyle = {
    textDecoration: 'none',
    color: 'white',
    padding: '8px 15px',
    fontWeight: '500',
  };

  const activeLinkStyle = {
    color: '#ffd700', // gold/yellow for active link
  };

  // Get user from localStorage
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login'); // redirect to login after logout
  };

  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#0b3d91',
        padding: '10px 20px',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      {/* Company Name / Logo on Left */}
      <div style={{ color: 'white', fontSize: '1.8rem', fontWeight: '700' }}>
        FixFirst
      </div>

      {/* Nav Links on Right */}
      <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
        <NavLink
          to="/"
          style={({ isActive }) =>
            isActive ? { ...linkStyle, ...activeLinkStyle } : linkStyle
          }
          end
        >
          Home
        </NavLink>
        <NavLink
          to="/inspectors"
          style={({ isActive }) =>
            isActive ? { ...linkStyle, ...activeLinkStyle } : linkStyle
          }
        >
          Inspectors
        </NavLink>
        <NavLink
          to="/upload"
          style={({ isActive }) =>
            isActive ? { ...linkStyle, ...activeLinkStyle } : linkStyle
          }
        >
          Upload Report
        </NavLink>
        <NavLink
          to="/verify"
          style={({ isActive }) =>
            isActive ? { ...linkStyle, ...activeLinkStyle } : linkStyle
          }
        >
          Verify
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) =>
            isActive ? { ...linkStyle, ...activeLinkStyle } : linkStyle
          }
        >
          About
        </NavLink>

        {/* Auth Links */}
        {!user ? (
          <>
            <NavLink
              to="/login"
              style={({ isActive }) =>
                isActive ? { ...linkStyle, ...activeLinkStyle } : linkStyle
              }
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              style={({ isActive }) =>
                isActive ? { ...linkStyle, ...activeLinkStyle } : linkStyle
              }
            >
              Register
            </NavLink>
          </>
        ) : (
          <>
            <span style={{ color: 'white', fontWeight: '600' }}>
              Hello, {user.name}
            </span>
            <button
              onClick={handleLogout}
              style={{
                cursor: 'pointer',
                padding: '5px 10px',
                borderRadius: '4px',
                border: 'none',
                backgroundColor: '#ffd700',
                fontWeight: '600',
                color: '#0b3d91',
              }}
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
