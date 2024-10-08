import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import PredictionSection from './components/PredictionSection';
import DamCapacitySearch from './components/DamCapacitySearch';
import CensusSearch from './components/CensusSearch';
import Forecast from './components/Forecast';
import Insights from './components/Insights';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<PredictionSection />} />
          <Route path="/capacity" element={<DamCapacitySearch />} />
          <Route path="/census" element={<CensusSearch />} />
          <Route path="/forecast" element={<Forecast />} />
          <Route path="/insights" element={<Insights />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
