import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Table, TableHead, TableBody, TableRow, TableCell, TableContainer, Paper, FormControl, Select, MenuItem } from '@mui/material';

// Function to generate random game names
const generateRandomGames = () => {
  const games = ['Fortnite', 'COD', 'Overwatch', 'League of Legends', 'Apex Legends', 'FIFA', 'Rocket League', 'Valorant', 'Counter-Strike'];
  const randomIndex1 = Math.floor(Math.random() * games.length);
  let randomIndex2 = Math.floor(Math.random() * games.length);
  // Make sure the second game is different from the first one
  while (randomIndex2 === randomIndex1) {
    randomIndex2 = Math.floor(Math.random() * games.length);
  }
  return [games[randomIndex1] + "     " + games[randomIndex2]];
};

// Mock data with added games and changed column headers
const playerStats = [
  { playerName: 'Manshawdies', wins: 10, draws: 5, losses: 8, games: generateRandomGames() },
  { playerName: 'Doganators', wins: 8, draws: 3, losses: 12, games: generateRandomGames() },
  { playerName: 'Tehs Angels', wins: 15, draws: 7, losses: 5, games: generateRandomGames() },
  { playerName: 'Astrofees', wins: 12, draws: 6, losses: 10, games: generateRandomGames() },
];

const StatsPage = () => {
  const [sortBy, setSortBy] = useState('wins'); // State for sorting
  const [sortOrder, setSortOrder] = useState('desc'); // State for sort order
  const [selectedStat, setSelectedStat] = useState('wins'); // State for selected statistic

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

  // Function to handle changing selected statistic
  const handleStatChange = (event) => {
    setSelectedStat(event.target.value);
  };

  // Function to sort players based on criteria and order
  const sortedPlayers = [...playerStats].sort((a, b) => {
    const multiplier = sortOrder === 'desc' ? -1 : 1;
    return multiplier * (a[sortBy] - b[sortBy]);
  });

  // Get table column headers dynamically based on the first player's keys
  const tableHeaders = Object.keys(playerStats[0]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', width: '100%' }}>
      <div style={{ width: '80%' }}>
        {/* Placeholder for Material-UI AppBar */}
        <h2>Statistics Page</h2>
        {/* Placeholder for Material-UI Bar Chart */}
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={playerStats}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="playerName" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey={selectedStat} fill="#8884d8" name={selectedStat === 'wins' ? 'Wins' : selectedStat === 'draws' ? 'Draws' : 'Losses'} />
          </BarChart>
        </ResponsiveContainer>
        {/* Placeholder for Material-UI Player Stats Table */}
        <h3>Player Statistics</h3>
        <TableContainer component={Paper} style={{ marginTop: '20px' }}>
          <FormControl style={{ marginBottom: '20px' }}>
            <Select value={selectedStat} onChange={handleStatChange}>
              <MenuItem value="wins">Wins</MenuItem>
              <MenuItem value="draws">Draws</MenuItem>
              <MenuItem value="losses">Losses</MenuItem>
            </Select>
          </FormControl>
          <Table sx={{ minWidth: 650 }} aria-label="player statistics">
            <TableHead>
              <TableRow>
                {tableHeaders.map((header, index) => (
                  <TableCell key={index} onClick={() => handleSort(header)} sx={{ cursor: 'pointer', backgroundColor: sortBy === header ? '#ddd' : 'transparent', fontWeight: 'bold', borderBottom: '1px solid rgba(224, 224, 224, 1)' }}>
                    {header === 'wins' ? 'Wins' : header === 'draws' ? 'Draws' : header === 'losses' ? 'Losses' : header}
                    {sortBy === header && (sortOrder === 'asc' ? ' ▲' : ' ▼')}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {sortedPlayers.map((player, index) => (
                <TableRow key={index}>
                  {tableHeaders.map((header, index) => (
                    <TableCell key={index}>{player[header]}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default StatsPage;
