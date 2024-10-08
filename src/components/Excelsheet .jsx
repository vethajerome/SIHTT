import React, { useState, useEffect } from 'react';
import * as XLSX from 'xlsx';

const ExcelReader = () => {
  const [data, setData] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [result, setResult] = useState(null);

  useEffect(() => {
    const fetchExcelData = async () => {
      const response = await fetch('/public/sample_data.xlsx'); // Ensure the path is correct
      const arrayBuffer = await response.arrayBuffer();
      const workbook = XLSX.read(arrayBuffer);
      const sheetName = workbook.SheetNames[0]; // Get the first sheet name
      const sheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 }); // Get raw data for debugging
      console.log("Raw Excel Data:", jsonData); // Log raw data
      setData(jsonData); // Store the raw data
    };

    fetchExcelData();
  }, []);

  const handleSearch = () => {
    if (data.length === 0) {
      console.log("No data available."); // Check if data is loaded
      return;
    }

    // Extract headers and data
    const headers = data[0]; // First row as headers
    const rows = data.slice(1); // Data starts from the second row

    // Convert rows to objects
    const jsonData = rows.map((row) => {
      return headers.reduce((obj, header, index) => {
        obj[header] = row[index]; // Create key-value pairs
        return obj;
      }, {});
    });

    console.log("Processed JSON Data:", jsonData); // Log processed data

    const found = jsonData.find((item) => item.Name && item.Name.trim().toLowerCase() === searchName.trim().toLowerCase());
    console.log("Search Result:", found); // Log the found result
    setResult(found ? found : { Name: searchName, Age: 'Not Found', Occupation: 'Not Found', Salary: 'Not Found' });
  };

  return (
    <div>
      <div>
        <input 
          type="text" 
          placeholder="Enter Name" 
          value={searchName} 
          onChange={(e) => setSearchName(e.target.value)} 
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {result && (
        <div>
          <h3>Details:</h3>
          <p>Name: {result.Name}</p>
          <p>Age: {result.Age}</p>
          <p>Occupation: {result.Occupation}</p>
          <p>Salary: {result.Salary}</p>
        </div>
      )}
    </div>
  );
};

export default ExcelReader;
