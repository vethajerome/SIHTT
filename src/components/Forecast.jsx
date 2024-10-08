import axios from 'axios';
import React, { useEffect, useState } from 'react';
import background from '../assets/WhatsApp Image 2024-10-07 at 15.36.36_56488660.jpg';

// Inline styles
const styles = {
  app: {
    textAlign: 'center',
    color: '#f8f8f8',
    backgroundImage: `url(https://images6.alphacoders.com/126/thumb-1920-1264738.jpg)`, // Set the background image
    backgroundSize: 'cover', // Cover the entire area
     // Center the image
    height: 'auto', // Make sure it covers the full height of the viewport
  },
  input: {
    padding: '.7rem 1.5rem',
    fontSize: '1.2rem',
    borderRadius: '25px',
    border: '1px solid rgba(255,255,255, 0.8)',
    background: 'rgba(255,255,255, 0.1)',
    color: '#f8f8f8',
    outline: 'none',
  },
  placeholder: {
    color: '#f8f8f8',
  },
  container: {
    maxWidth: '700px',
    height: '700px',
    margin: 'auto',
    padding: '0 1rem',
    position: 'relative',
    top: '10%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  top: {
    width: '100%',
    margin: '1rem auto',
  },
  description: {
    position: 'relative',
    right: '-90%',
    transformOrigin: '0 0',
    transform: 'rotate(269deg)',
  },
  bottom: {
    display: 'flex',
    justifyContent: 'space-evenly',
    textAlign: 'center',
    width: '100%',
    margin: '1rem auto',
    padding: '1rem',
    borderRadius: '12px',
    backgroundColor: 'rgba(255,255,255, 0.2)',
  },
  bold: {
    fontWeight: 700,
  },
};

function Forecast() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  const apiKey = '895284fb2d2c50a520ea537456963d9c';

  // Function to fetch weather data based on coordinates
  const fetchWeatherByCoords = (lat, lon) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;
    axios.get(url).then((response) => {
      setData(response.data);
      console.log(response.data);
    });
  };

  // Fetch user's current location (latitude & longitude) using Geolocation API
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        fetchWeatherByCoords(lat, lon);
      });
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }, []);

  // Search location based on user input
  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${apiKey}`;
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation('');
    }
  };

  return (
    <div style={styles.app}>
        <br></br>
      <div style={styles.search}>
        <input
          style={styles.input}
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter Location'
          color='black'
          type='text'
        />
      </div>
      <div style={styles.container}>
        <div style={styles.top}>
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
          </div>
          <div style={styles.description}>
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
          {/* Rain information */}
          <div className="rain">
            {data.rain ? <p>Rain: {data.rain['1h']} mm (last hour)</p> : <p>No Rain</p>}
          </div>
        </div>

        {data.name !== undefined && (
          <div style={styles.bottom}>
            <div className="feels">
              {data.main ? <p style={styles.bold}>{data.main.feels_like.toFixed()}°F</p> : null}
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {data.main ? <p style={styles.bold}>{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.wind ? <p style={styles.bold}>{data.wind.speed.toFixed()} MPH</p> : null}
              <p>Wind Speed</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Forecast;
