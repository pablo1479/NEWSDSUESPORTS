import React, { Component } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

class HomePage extends Component {
  render() {
    return (
      <Box sx={{ padding: 2 }}>
        <Typography variant="h4" gutterBottom>
          Welcome to the eSports Homepage!
        </Typography>
        <Typography variant="body1">
          This is your one-stop hub for all eSports activities. Stay tuned for more updates!
        </Typography>
      </Box>
    );
  }
}

export default HomePage;
