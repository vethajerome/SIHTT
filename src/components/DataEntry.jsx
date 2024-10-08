import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const DataEntry = ({ handleDataSubmission }) => {
  const [location, setLocation] = useState("");
  const [waterUsage, setWaterUsage] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      location,
      waterUsage: parseFloat(waterUsage),
    };

    handleDataSubmission(formData);
    history.push("/dashboard");
  };

  return (
    <div>
      <h2>Water Usage Data Entry</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Location:
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Water Usage (in liters):
          <input
            type="number"
            value={waterUsage}
            onChange={(e) => setWaterUsage(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Submit Data</button>
      </form>
    </div>
  );
};

export default DataEntry;
