import React, { useState } from 'react';
import video from '../assets/video.mp4'; // Adjust path if necessary



const DamCapacitySearch = () => {
  const [damName, setDamName] = useState('');
  const [capacity, setCapacity] = useState('');

  const handleSearch = () => {
    // Replace with your logic to get dam capacity
    if (damName.toLowerCase() === 'bhakra dam') {
      setCapacity('1,675 million cubic meters');
    } else if (damName.toLowerCase() === 'sardar sarovar dam') {
      setCapacity('1,450 million cubic meters');
    } else {
      setCapacity('Dam not found. Please try again.');
    }
  };

  return (
    <div style={{ position: 'relative', height: '100vh' }}>
       {/* Adding the Navbar here */}
      <video
        autoPlay
        loop
        muted
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 1 }} // Keep z-index lower than navbar
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div
        style={{
          position: 'relative',
          zIndex: 1, // Keep z-index for the output box
          backgroundColor: 'rgba(255, 255, 255, 0.8)', // Box with transparency
          padding: '20px',
          borderRadius: '8px',
          maxWidth: '400px',
          margin: 'auto',
          top: '50%',
          transform: 'translateY(-50%)',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        }}
      >
        <h2 style={{ textAlign: 'center' }}>Dam Capacity Search</h2>
        <input
          type="text"
          placeholder="Enter dam name"
          value={damName}
          onChange={(e) => setDamName(e.target.value)}
          style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
        />
        <button
          onClick={handleSearch}
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: '#007BFF',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Search
        </button>
        {capacity && (
          <p style={{ textAlign: 'center', marginTop: '15px', fontWeight: 'bold' }}>
            Capacity: {capacity}
          </p>
        )}
      </div>
    </div>
  );
};

export default DamCapacitySearch;
