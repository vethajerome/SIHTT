import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const ResultsDashboard = ({ forecastData }) => {
  if (!forecastData) {
    return <div>No forecast data available. Please submit the form first.</div>;
  }

  return (
    <div>
      <h2>Forecast Results</h2>
      <LineChart
        width={600}
        height={300}
        data={forecastData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="predictedWaterUsage" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </div>
  );
};

export default ResultsDashboard;
