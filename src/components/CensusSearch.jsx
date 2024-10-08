// import React, { useState, useEffect } from "react";
// import video2 from "../assets/video2.mp4"; // Adjust the path based on your folder structure
// import * as XLSX from "xlsx";

// const CensusSearch = () => {
//   const [location, setLocation] = useState("");
//   const [population, setPopulation] = useState(null);
//   const [error, setError] = useState(null);
//   const [excelData, setExcelData] = useState([]);

//   // Load the Excel file when the component mounts
//   useEffect(() => {
//     fetch("/excelsheet/sample_data.xlsx")
//       .then((response) => response.arrayBuffer())
//       .then((data) => {
//         const workbook = XLSX.read(data, { type: "array" });
//         const sheetName = workbook.SheetNames[0];
//         const sheet = workbook.Sheets[sheetName];
//         const jsonData = XLSX.utils.sheet_to_json(sheet);
//         setExcelData(jsonData);
//       })
//       .catch((error) => {
//         console.error("Error loading Excel file:", error);
//       });
//   }, []);

//   const handleSearch = () => {
//     const result = excelData.find(
//       (row) => row.Location.toLowerCase() === location.toLowerCase()
//     );
//     if (result) {
//       setPopulation(result.Population);
//       setError(null);
//     } else {
//       setPopulation(null);
//       setError("Could not find population data for the specified location.");
//     }
//   };

//   return (
//     <div style={{ position: "relative", height: "100vh" }}>
//       <video
//         autoPlay
//         loop
//         muted
//         style={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: "100%",
//           objectFit: "cover",
//           zIndex: 1, // Keep z-index lower than navbar
//         }}
//       >
//         <source src={video2} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//       <div
//         style={{
//           position: "relative",
//           zIndex: 2, // Keep z-index for the output box above the video
//           backgroundColor: "rgba(255, 255, 255, 0.8)", // Box with transparency
//           padding: "30px",
//           borderRadius: "10px",
//           maxWidth: "400px",
//           margin: "auto",
//           top: "50%",
//           transform: "translateY(-50%)",
//           boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
//           textAlign: "center",
//         }}
//       >
//         <h1>Census Data Search</h1>
//         <input
//           type="text"
//           value={location}
//           onChange={(e) => setLocation(e.target.value)}
//           placeholder="Enter location in India"
//           style={{
//             padding: "10px",
//             width: "300px",
//             margin: "10px 0",
//             border: "1px solid #ccc",
//             borderRadius: "4px",
//           }}
//         />
//         <button
//           onClick={handleSearch}
//           style={{
//             padding: "10px 20px",
//             cursor: "pointer",
//             backgroundColor: "#4CAF50",
//             color: "white",
//             border: "none",
//             borderRadius: "5px",
//           }}
//         >
//           Search
//         </button>

//         {error && <p style={{ color: "red" }}>{error}</p>}
//         {population !== null && (
//           <div style={{ marginTop: "20px" }}>
//             <h2>
//               Population of {location}: {population}
//             </h2>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// // Exporting the CensusSearch component
// export default CensusSearch;

import React, { useState, useEffect } from "react";
import video2 from "../assets/video2.mp4"; // Adjust the path based on your folder structure
import * as XLSX from "xlsx";

const CensusSearch = () => {
  const [location, setLocation] = useState("");
  const [population, setPopulation] = useState(null);
  const [error, setError] = useState(null);
  const [excelData, setExcelData] = useState([]);

  // Load the Excel file when the component mounts
  useEffect(() => {
    fetch("/excelsheet/sample_data.xlsx")
      .then((response) => response.arrayBuffer())
      .then((data) => {
        const workbook = XLSX.read(data, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(sheet);
        setExcelData(jsonData);
      })
      .catch((error) => {
        console.error("Error loading Excel file:", error);
      });
  }, []);

  const handleSearch = () => {
    const result = excelData.find(
      (row) => row.Location.toLowerCase() === location.toLowerCase()
    );
    if (result) {
      setPopulation(result.Population);
      setError(null);
    } else {
      setPopulation(null);
      setError("Could not find population data for the specified location.");
    }
  };

  return (
    <div style={styles.container}>
      <nav style={styles.navbar}>
        <h1 style={styles.navTitle}>Census Data</h1>
      </nav>
      <video autoPlay loop muted style={styles.video}>
        <source src={video2} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div style={styles.searchBox}>
        <h2 style={styles.title}>Census Data Search</h2>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter location in India"
          style={styles.input}
        />
        <button onClick={handleSearch} style={styles.button}>
          Search
        </button>

        {error && <p style={styles.error}>{error}</p>}
        {population !== null && (
          <div style={styles.result}>
            <h3>
              Population of {location}: {population}
            </h3>
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    position: "relative",
    overflow: "hidden",
  },
  navbar: {
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    padding: "10px",
    textAlign: "center",
    position: "absolute",
    zIndex: 3,
  },
  navTitle: {
    margin: 0,
    fontSize: "1.5em",
  },
  video: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: 1,
  },
  searchBox: {
    position: "relative",
    zIndex: 2,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    padding: "20px",
    borderRadius: "10px",
    width: "90%",
    maxWidth: "400px",
    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
    textAlign: "center",
  },
  title: {
    fontSize: "1.5em",
    margin: "0 0 15px",
  },
  input: {
    padding: "10px",
    width: "100%",
    margin: "10px 0",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  button: {
    padding: "10px 20px",
    cursor: "pointer",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    width: "100%", // Full width for better usability
  },
  error: {
    color: "red",
  },
  result: {
    marginTop: "20px",
  },
};

// Adding media queries for responsive design
const responsiveStyles = `
  @media (max-width: 600px) {
    .navTitle {
      font-size: 1.2em; // Decrease navbar title font size for mobile
    }
    .title {
      font-size: 1.2em; // Decrease search title font size
    }
    .searchBox {
      width: 90%; // Adjust search box width for mobile
      padding: 15px; // Reduce padding for mobile
    }
    .input, .button {
      padding: 8px; // Reduce padding for input and button
    }
    .video {
      object-fit: cover; // Keep video cover on smaller screens
    }
  }
`;

// Exporting the CensusSearch component
export default CensusSearch;
