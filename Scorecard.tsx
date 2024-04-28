// App.js

import React, { useState } from "react";
import "./App.css"; // Import CSS file for styling

const Scorecard = () => {
  const [showCSK, setShowCSK] = useState(false); // State to manage CSK scorecard visibility
  const [showRCB, setShowRCB] = useState(false); // State to manage RCB scorecard visibility

  const cskPlayers = [
    { name: "RUTURAJ GAIKWAD", runs: 20, balls: 15 },
    { name: "DEVON CONWAY", runs: 25, balls: 20 },
    { name: "MS DHONI", runs: 30, balls: 25 },
    { name: "AJINKYA RAHANE", runs: 15, balls: 10 },
    { name: "SHAIK RASHEED", runs: 18, balls: 15 },
    { name: "SAMEER RIZVI", runs: 25, balls: 20 },
    { name: "AVANISH RAO ARAVELLY", runs: 23, balls: 15 }
  ];

  const rcbPlayers = [
    { name: "Faf du Plessis", runs: 25, balls: 20 },
    { name: "Glenn Maxwell", runs: 30, balls: 25 },
    { name: "Virat Kohli", runs: 25, balls: 20 },
    { name: "Rajat Patidar", runs: 20, balls: 15 },
    { name: "Anuj Rawat", runs: 15, balls: 10 },
    { name: "Dinesh Karthik", runs: 20, balls: 15 },
    { name: "Suyash Prabhudessai", runs: 18, balls: 15 }
  ];

  const handleCSKClick = () => {
    setShowCSK(!showCSK); // Toggle CSK scorecard visibility
    setShowRCB(false); // Close RCB scorecard
  };

  const handleRCBClick = () => {
    setShowRCB(!showRCB); // Toggle RCB scorecard visibility
    setShowCSK(false); // Close CSK scorecard
  };

  return (
    <div className="scorecards-container">
      
      {showCSK && (
        <div className="scorecard">
          <h2>CSK</h2>
          <table>
            <thead>
              <tr>
                <th>Batsman</th>
                <th>Runs</th>
                <th>Balls</th>
              </tr>
            </thead>
            <tbody>
              {cskPlayers.map((player, index) => (
                <tr key={index}>
                  <td>{player.name}</td>
                  <td>{player.runs}</td>
                  <td>{player.balls}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {showRCB && (
        <div className="scorecard">
          <h2>RCB</h2>
          <table>
            <thead>
              <tr>
                <th>Batsman</th>
                <th>Runs</th>
                <th>Balls</th>
              </tr>
            </thead>
            <tbody>
              {rcbPlayers.map((player, index) => (
                <tr key={index}>
                  <td>{player.name}</td>
                  <td>{player.runs}</td>
                  <td>{player.balls}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="buttons-container">
        <div>
          <button
            className={showCSK ? "active-button" : "inactive-button"}
            onClick={handleCSKClick}
            style={{ display: "inline", paddingTop: "15px", width: "100%" }}
          >
            CSK
          </button>
        </div>
        <div>
          <button
            className={showRCB ? "active-button" : "inactive-button"}
            onClick={handleRCBClick}
            style={{ display: "block", paddingTop: "15px", width: "100%" }}
          >
            RCB
          </button>
        </div>
      </div>
    </div>
  );
};

export default Scorecard;
