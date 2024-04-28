import React from 'react';
import statsImage from './images/stats.jpg';

const data = {
  rcb: {
    matchesPlayed: 32,
    won: 21,
    lost: 10,
    noResult: 1,
    highestScore: 226,
    lowestScore: 82
  },
  csk: {
    matchesPlayed: 32,
    won: 21,
    lost: 10,
    noResult: 1,
    highestScore: 218,
    lowestScore: 70
  }
};

const Stats: React.FC = () => {
  return (
    <>
      <h1>Stats</h1>
      <div style={{ textAlign: 'center' }}>
        <img src={statsImage} alt="Stats" style={{ maxWidth: '100%', maxHeight: '400px' }} />
      </div>
      
      <table>
        <thead>
          <tr>
            <th>Statistic</th>
            <th>RCB</th>
            <th>CSK</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Matches Played</td>
            <td>{data.rcb.matchesPlayed}</td>
            <td>{data.csk.matchesPlayed}</td>
          </tr>
          <tr>
            <td>Won</td>
            <td>{data.rcb.won}</td>
            <td>{data.csk.won}</td>
          </tr>
          <tr>
            <td>Lost</td>
            <td>{data.rcb.lost}</td>
            <td>{data.csk.lost}</td>
          </tr>
          <tr>
            <td>No Result</td>
            <td>{data.rcb.noResult}</td>
            <td>{data.csk.noResult}</td>
          </tr>
          <tr>
            <td>Highest Score</td>
            <td>{data.rcb.highestScore}</td>
            <td>{data.csk.highestScore}</td>
          </tr>
          <tr>
            <td>Lowest Score</td>
            <td>{data.rcb.lowestScore}</td>
            <td>{data.csk.lowestScore}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Stats;
