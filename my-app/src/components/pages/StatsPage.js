// Stats.js

import React from 'react';

const playerStats = [
  { playerName: 'Manshawdies', kills: 10, deaths: 5, assists: 8 },
  { playerName: 'Doganators', kills: 8, deaths: 3, assists: 12 },
  { playerName: 'Tehs Angels', kills: 15, deaths: 7, assists: 5 },
  { playerName: 'Astrofees', kills: 12, deaths: 6, assists: 10 },
];

const StatsPage = () => {
  return (
    <div>
      <h2>Statistics Page</h2>
      <table>
        <thead>
          <tr>
            <th>Player Name</th>
            <th>Kills</th>
            <th>Deaths</th>
            <th>Assists</th>
          </tr>
        </thead>
        <tbody>
          {playerStats.map((player, index) => (
            <tr key={index}>
              <td>{player.playerName}</td>
              <td>{player.kills}</td>
              <td>{player.deaths}</td>
              <td>{player.assists}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StatsPage;
