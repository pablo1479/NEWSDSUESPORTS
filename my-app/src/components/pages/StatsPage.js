import React, { useState } from 'react';
import { 
  PieChart, 
  Pie, 
  Tooltip, 
  Legend, 
  Cell 
} from 'recharts';
import { 
  TextField,
  Button,
  Autocomplete
} from '@mui/material';

const StatsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchedPlayer, setSearchedPlayer] = useState(null);

  const handleSearch = () => {
    if (!searchTerm.trim()) {
      alert('Please enter a team name.');
      return;
    }

    fetch(`/playerstats/search/?search_term=${encodeURIComponent(searchTerm)}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Player not found');
        }
      })
      .then(data => {
        if (data.error) {
          alert(data.error); // Show error message if player not found
          setSearchedPlayer(null);
        } else {
          setSearchedPlayer(data);
        }
      })
      .catch(error => {
        console.error('Error searching for player:', error);
        setSearchedPlayer(null);
      });
  };

  const generateRandomGames = () => {
    const games = ['Fortnite', 'COD', 'Overwatch', 'League of Legends', 'Apex Legends', 'FIFA', 'Rocket League', 'Valorant', 'Counter-Strike'];
    const randomIndex1 = Math.floor(Math.random() * games.length);
    let randomIndex2 = Math.floor(Math.random() * games.length);
    while (randomIndex2 === randomIndex1) {
      randomIndex2 = Math.floor(Math.random() * games.length);
    }
    return [`${games[randomIndex1]}     ${games[randomIndex2]}`];
  };

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      minHeight: '100vh', 
      padding: '20px', 
      backgroundColor: '#f0f0f0' 
    }}>
      <h1 style={{ marginBottom: '20px' }}>Team Statistics</h1>
      <Autocomplete
        value={searchTerm}
        onChange={(event, value) => setSearchTerm(value)}
        options={[]}
        renderInput={(params) => <TextField {...params} label="Search Team" variant="outlined" style={{ marginBottom: '20px', width: '300px' }} />}
      />
      <Button variant="contained" onClick={handleSearch} style={{ marginBottom: '20px' }}>Search</Button>
      {searchedPlayer ? (
        <div style={{ marginBottom: '20px' }}>
          <h3>{searchedPlayer.playerName} Statistics</h3>
          <p>Wins: {searchedPlayer.wins}</p>
          <p>Draws: {searchedPlayer.draws}</p>
          <p>Losses: {searchedPlayer.losses}</p>
        </div>
      ) : searchTerm ? (
        <p style={{ marginBottom: '20px', color: 'red' }}>No such team found in the database.</p>
      ) : null}
      {searchedPlayer && (
        <div style={{ marginBottom: '20px' }}>
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
