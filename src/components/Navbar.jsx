import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/ic_outline-water-drop.jpg';
import profile from '../assets/pajamas_profile.png';

const Navbar = () => {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: 'white',
      padding: '15px'
    }}>
      <div style={{ width: '40px' }}>
        <img src={logo} alt="logo" style={{ width: '50px', height: '40px' }} />
      </div>
      <ul style={{
        listStyle: 'none',
        display: 'flex',
        gap: '20px',
        margin: 0,
        padding: 0
      }}>
        <li style={{ fontSize: '16px', color: '#000', cursor: 'pointer' }}>
          <Link to="/" style={{ textDecoration: 'none', color: '#000' }}>Home</Link>
        </li>
        <li style={{ fontSize: '16px', color: '#000', cursor: 'pointer' }}>
          <Link to="/capacity" style={{ textDecoration: 'none', color: '#000' }}>Capacity</Link>
        </li>
        <li style={{ fontSize: '16px', color: '#000', cursor: 'pointer' }}>
          <Link to="/forecast" style={{ textDecoration: 'none', color: '#000' }}>Forecast</Link></li>
        <li style={{ fontSize: '16px', color: '#000', cursor: 'pointer' }}>
          <Link to="/census" style={{ textDecoration: 'none', color: '#000' }}>Census</Link></li>
        <li style={{ fontSize: '16px', color: '#000', cursor: 'pointer' }}>
          <Link to="/insights" style={{ textDecoration: 'none', color: '#000' }}>Insights</Link></li>
      </ul>
      <div style={{ width: '40px' }}>
        <img src={profile} alt="profile" style={{ width: '100%' }} />
      </div>
    </nav>
  );
};

export default Navbar;
