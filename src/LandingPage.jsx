import React from 'react';

const LandingPage = () => {
  return (
    <div>
      {/* Navbar */}
      <nav style={styles.navbar}>
        <h1 style={styles.title}>Water Forecasting System</h1>
        <ul style={styles.navLinks}>
          <li style={styles.navItem}>Home</li>
          <li style={styles.navItem}>Results Dashboard</li>
          <li style={styles.navItem}>Data Entry</li>
          <li style={styles.navItem}>About</li>
        </ul>
      </nav>

      {/* Landing Page Content */}
      <div style={styles.landingContent}>
        <h2>Forecasting Future Water Requirements</h2>
        <p>
          Welcome to our Water Forecasting System! This application helps you forecast future water requirements 
          and assess storage capacities in reservoirs. Utilize our dashboard to visualize trends and make informed decisions.
        </p>
        <button style={styles.button}>
          Get Started
        </button>
      </div>
    </div>
  );
};

// Styles for the Landing Page and Navbar
const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#4CAF50',
    padding: '10px 20px',
    color: 'white',
  },
  title: {
    margin: 0,
  },
  navLinks: {
    listStyleType: 'none',
    display: 'flex',
    gap: '20px',
    margin: 0,
    padding: 0,
  },
  navItem: {
    color: 'white',
    cursor: 'default', // Changes the cursor to default for non-clickable items
  },
  landingContent: {
    textAlign: 'center',
    marginTop: '50px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  }
};

export default LandingPage;
