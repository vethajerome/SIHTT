import React, { useState } from 'react';

const PredictionSection = () => {
  const [location, setLocation] = useState('');
  const [filteredDistricts, setFilteredDistricts] = useState([]);

  const districts = [
    'Salem District, Tamil Nadu, India',
    'Chennai, Tamil Nadu, India',
    'Madurai, Tamil Nadu, India',
    'Coimbatore, Tamil Nadu, India',
    'Trichy, Tamil Nadu, India',
    'Erode, Tamil Nadu, India',
    'Tirunelveli, Tamil Nadu, India',
    'Thanjavur, Tamil Nadu, India',
    'Tiruppur, Tamil Nadu, India',
    'Vellore, Tamil Nadu, India',
    'Villupuram, Tamil Nadu, India',
    'Kanyakumari, Tamil Nadu, India',
    'Thoothukudi, Tamil Nadu, India',
    'Nagapattinam, Tamil Nadu, India',
    'Dharmapuri, Tamil Nadu, India',
    'Krishnagiri, Tamil Nadu, India',
    'Pudukkottai, Tamil Nadu, India',
    'Sivagangai, Tamil Nadu, India',
    'Cuddalore, Tamil Nadu, India',
    'Ramanathapuram, Tamil Nadu, India',
    'Virudhunagar, Tamil Nadu, India',
    'Dindigul, Tamil Nadu, India',
    'Nilgiris, Tamil Nadu, India'
  ];

  const timeRanges = [
    '2 Years',
    '5 Years',
    '10 Years',
    '15 Years',
    '20 Years'
  ];

  const handleLocationChange = (e) => {
    const inputValue = e.target.value;
    setLocation(inputValue);
    if (inputValue) {
      const filtered = districts.filter(district =>
        district.toLowerCase().includes(inputValue.toLowerCase())
      );
      setFilteredDistricts(filtered);
    } else {
      setFilteredDistricts([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setLocation(suggestion);
    setFilteredDistricts([]);
  };

  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      <img
        src="https://media.tenor.com/0zIO1cHgwCUAAAAM/janestree.gif"
        alt="background"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          position: 'absolute',
          top: 0,
          left: 0
        }}
      />
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%'
        }}
      >
        <div
          style={{
            backgroundColor: 'rgba(120, 139, 151, 0.8)',
            padding: '20px',
            borderRadius: '10px',
            display: 'inline-block',
            textAlign: 'left',
            height:'280px',
            width: '500px', // Fixed width for consistency
            boxSizing: 'border-box',
            position: 'relative' // To contain the absolute suggestions list
          }}
        >
          {/* Location Input Group */}
          <div style={{ marginBottom: '15px', position: 'relative' }}>
            <label style={{ fontSize: '18px', color: '#000' }}>Location</label>
            <input
              type="text"
              value={location}
              onChange={handleLocationChange}
              placeholder="Type a location"
              style={{
                padding: '10px',
                width: '100%',
                marginTop: '5px',
                borderRadius: '5px',
                boxSizing: 'border-box' // Ensure padding is included in width
              }}
            />
            {filteredDistricts.length > 0 && (
              <ul style={{
                listStyleType: 'none',
                padding: '0',
                margin: '5px 0 0 0',
                position: 'absolute',
                backgroundColor: '#fff',
                width: '100%',
                borderRadius: '5px',
                border: '1px solid #ccc',
                zIndex: 10,
                maxHeight: '150px',
                overflowY: 'auto',
                boxSizing: 'border-box' // Ensure padding is included in width
              }}>
                {filteredDistricts.map((district, index) => (
                  <li
                    key={index}
                    onClick={() => handleSuggestionClick(district)}
                    style={{
                      padding: '10px',
                      cursor: 'pointer',
                      borderBottom: '1px solid #eee'
                    }}
                  >
                    {district}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Time Range Select Group */}
          <div style={{ marginBottom: '15px' }}>
            <label style={{ fontSize: '18px', color: '#000' }}>Time Range</label>
            <select
              style={{
                padding: '10px',
                width: '100%',
                marginTop: '5px',
                borderRadius: '5px',
                boxSizing: 'border-box' // Ensure padding is included in width
              }}
            >
              {timeRanges.map((range, index) => (
                <option key={index} value={range}>
                  {range}
                </option>
              ))}
            </select>
          </div>
<br></br>
          {/* Predict Button */}
          <button
            style={{
              padding: '10px 20px',
              backgroundColor: '#8aa0a3',
              color: '#000',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              width: '100%', // Make button full width for consistency
              boxSizing: 'border-box'
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#7b8e8f')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#8aa0a3')}
          >
            Predict
          </button>
        </div>
      </div>
    </div>
  );
};

export default PredictionSection;