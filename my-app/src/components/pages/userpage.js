import React from 'react';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';

export default function UserPage() {
  // Mock user data (replace with actual user data fetched from backend)
  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    avatarUrl: 'https://example.com/avatar.jpg',
    // Add more user data as needed
  };

  // Mock statistics data (replace with actual data)
  const statistics = {
    gamesPlayed: 100,
    wins: 75,
    losses: 25,
    winRate: 75,
    // Add more statistics as needed
  };

  // Function to handle profile editing
  const handleEditProfile = () => {
    // Implement logic to navigate to the profile editing page
    console.log('Editing profile...');
  };

  // Function to handle logging out
  const handleLogout = () => {
    // Implement logic to log the user out
    console.log('Logging out...');
  };

  return (
    <Container component="main" maxWidth="xs" sx={{ backgroundColor: 'white', padding: 3, borderRadius: 4 }}>
      <Avatar alt={user.name} src={user.avatarUrl} sx={{ width: 100, height: 100, marginBottom: 2 }} />
      <Typography variant="h5" component="h1" gutterBottom sx={{ color: 'red' }}>
        Welcome back, {user.name}!
      </Typography>
      <Typography variant="subtitle1" gutterBottom sx={{ color: 'red' }}>
        Email: {user.email}
      </Typography>
      <Divider sx={{ marginBottom: 2, borderColor: 'red' }} />
      <Typography variant="h6" gutterBottom sx={{ color: 'red' }}>
        Statistics
      </Typography>
      <Typography variant="body1" gutterBottom sx={{ color: 'red' }}>
        Games Played: {statistics.gamesPlayed}
      </Typography>
      <Typography variant="body1" gutterBottom sx={{ color: 'red' }}>
        Wins: {statistics.wins}
      </Typography>
      <Typography variant="body1" gutterBottom sx={{ color: 'red' }}>
        Losses: {statistics.losses}
      </Typography>
      <Typography variant="body1" gutterBottom sx={{ color: 'red' }}>
        Win Rate: {statistics.winRate}%
      </Typography>
      <Divider sx={{ marginTop: 2, marginBottom: 2, borderColor: 'red' }} />
      <Button variant="contained" onClick={handleEditProfile} fullWidth sx={{ backgroundColor: 'red', color: 'white', marginBottom: 1 }}>
        Edit Profile
      </Button>
      <Button variant="outlined" onClick={handleLogout} fullWidth sx={{ color: 'red' }}>
        Logout
      </Button>
    </Container>
  );
}
