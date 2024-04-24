// StatsPage.js

import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Mock data
const playerStats = [
  { playerName: 'Manshawdies', kills: 10, deaths: 5, assists: 8, damageDealt: 5000 },
  { playerName: 'Doganators', kills: 8, deaths: 3, assists: 12, damageDealt: 4500 },
  { playerName: 'Tehs Angels', kills: 15, deaths: 7, assists: 5, damageDealt: 6000 },
  { playerName: 'Astrofees', kills: 12, deaths: 6, assists: 10, damageDealt: 5500 },
];

const StatsPage = () => {
  const [sortBy, setSortBy] = useState('kills'); // State for sorting
  const [sortOrder, setSortOrder] = useState('desc'); // State for sort order

  // Function to handle sorting
  const handleSort = (criteria) => {
    if (criteria === sortBy) {
      // Toggle sort order if sorting by the same criteria
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      // Set new sort criteria
      setSortBy(criteria);
      setSortOrder('desc');
    }
  };

  // Function to sort players based on criteria and order
  const sortedPlayers = [...playerStats].sort((a, b) => {
    const multiplier = sortOrder === 'desc' ? -1 : 1;
    return multiplier * (a[sortBy] - b[sortBy]);
  });

  return (
    <div>
      <h2>Statistics Page</h2>
      {/* Bar Chart */}
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={playerStats}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="playerName" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="kills" fill="#8884d8" name="Kills" />
          <Bar dataKey="deaths" fill="#82ca9d" name="Deaths" />
          <Bar dataKey="assists" fill="#ffc658" name="Assists" />
        </BarChart>
      </ResponsiveContainer>
      {/* Player Stats Table */}
      <h3>Player Statistics</h3>
      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort('playerName')}>Player Name</th>
            <th onClick={() => handleSort('kills')}>Kills</th>
            <th onClick={() => handleSort('deaths')}>Deaths</th>
            <th onClick={() => handleSort('assists')}>Assists</th>
            <th onClick={() => handleSort('damageDealt')}>Damage Dealt</th>
          </tr>
        </thead>
        <tbody>
          {sortedPlayers.map((player, index) => (
            <tr key={index}>
              <td>{player.playerName}</td>
              <td>{player.kills}</td>
              <td>{player.deaths}</td>
              <td>{player.assists}</td>
              <td>{player.damageDealt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StatsPage;
