import React, { useState } from 'react';
import { 
  PieChart, 
  Pie, 
  Tooltip, 
  Legend, 
  Cell 
} from 'recharts';
import { 
  Table, 
  TableHead, 
  TableBody, 
  TableRow, 
  TableCell, 
  TableContainer, 
  Paper, 
  FormControl, 
  Select, 
  MenuItem,
  TextField,
  Button,
  Autocomplete
} from '@mui/material';

const generateRandomGames = () => {
  const games = ['Fortnite', 'COD', 'Overwatch', 'League of Legends', 'Apex Legends', 'FIFA', 'Rocket League', 'Valorant', 'Counter-Strike'];
  const randomIndex1 = Math.floor(Math.random() * games.length);
  let randomIndex2 = Math.floor(Math.random() * games.length);
  while (randomIndex2 === randomIndex1) {
    randomIndex2 = Math.floor(Math.random() * games.length);
  }
  return [`${games[randomIndex1]}     ${games[randomIndex2]}`];
};

const playerStats = [
  { playerName: 'Manshawdies', wins: 10, draws: 5, losses: 8, games: generateRandomGames() },
  { playerName: 'Doganators', wins: 8, draws: 3, losses: 12, games: generateRandomGames() },
  { playerName: 'Tehs Angels', wins: 15, draws: 7, losses: 5, games: generateRandomGames() },
  { playerName: 'Astrofees', wins: 12, draws: 6, losses: 10, games: generateRandomGames() },
];

const StatsPage = () => {
  const [sortBy, setSortBy] = useState('wins');
  const [sortOrder, setSortOrder] = useState('desc');
  const [selectedStat, setSelectedStat] = useState('wins');
  const [searchTerm, setSearchTerm] = useState('');
  const [searchedPlayer, setSearchedPlayer] = useState(null);

  const handleSort = (criteria) => {
    if (criteria === sortBy) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(criteria);
      setSortOrder('desc');
    }
  };

  const handleStatChange = (event) => {
    setSelectedStat(event.target.value);
  };

  const handleSearch = () => {
    if (!searchTerm.trim()) {
      alert('Please enter a team name.');
      return;
    }
    const player = playerStats.find(player => player.playerName.toLowerCase() === searchTerm.toLowerCase());
    setSearchedPlayer(player);
  };

  const handleInputChange = (event, value) => {
    setSearchTerm(value);
  };

  const handleClear = () => {
    setSearchTerm('');
    setSearchedPlayer(null);
  };

  const filteredOptions = playerStats.map(player => player.playerName);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh', width: '100%' }}>
      <h1>Team Statistics</h1>
      <Autocomplete
        value={searchTerm}
        onChange={handleInputChange}
        options={filteredOptions}
        renderInput={(params) => <TextField {...params} label="Search Team" variant="outlined" style={{ width: 300 }} />}
      />
      <Button variant="contained" onClick={handleSearch}>Search</Button>
      {searchedPlayer ? (
        <div style={{ marginBottom: '20px' }}>
          <h3>{searchedPlayer.playerName} Statistics</h3>
          <p>Wins: {searchedPlayer.wins}</p>
          <p>Draws: {searchedPlayer.draws}</p>
          <p>Losses: {searchedPlayer.losses}</p>
        </div>
      ) : searchTerm ? (
        <p>No such team found in the database.</p>
      ) : null}
      {searchedPlayer && (
        <div>
          <h3>Win Ratio</h3>
          <PieChart width={400} height={400}>
            <Pie
              data={[
                { name: 'Wins', value: searchedPlayer.wins },
                { name: 'Draws', value: searchedPlayer.draws },
                { name: 'Losses', value: searchedPlayer.losses }
              ]}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            >
              {['#0088FE', '#00C49F', '#FFBB28'].map((color, index) => (
                <Cell key={`cell-${index}`} fill={color} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>
      )}
    </div>
  );
};

export default StatsPage;
