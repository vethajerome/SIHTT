import React from 'react';

// Inline styles for the Insights component
const styles = {
  container: {
    padding: '20px',
    maxWidth: '1200px',
    margin: 'auto',
    backgroundColor: '#121212', // Dark background
    borderRadius: '12px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.5)',
    color: '#f8f8f8', // Light text color
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#ffffff', // Header color
  },
  insightCard: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '15px',
    margin: '10px 0',
    borderRadius: '8px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // Slightly lighter background for cards
    boxShadow: '0 2px 5px rgba(255, 255, 255, 0.2)', // Light shadow for card
  },
  insightTitle: {
    fontSize: '1.5rem',
    fontWeight: '600',
    color: '#e0e0e0', // Lighter title color
  },
  insightValue: {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#1e90ff', // Emphasized color for values
  },
};

const Insights = () => {
  // Sample data for insights
  const insightsData = [
    { title: 'Total Users', value: '1,200' },
    { title: 'Active Sessions', value: '345' },
    { title: 'Feedback Score', value: '4.8/5' },
    { title: 'New Registrations', value: '75' },
  ];

  return (
    <div color='blue'>
        <br></br>
    <div style={styles.container}>
        
      <h1 style={styles.header}>Insights Dashboard</h1>
      {insightsData.map((insight, index) => (
        <div key={index} style={styles.insightCard}>
          <span style={styles.insightTitle}>{insight.title}</span>
          <span style={styles.insightValue}>{insight.value}</span>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Insights;
