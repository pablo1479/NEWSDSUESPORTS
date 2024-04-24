import React from 'react';
import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import Responsiveappbar from './responsiveappbar'; 
import { styled } from '@mui/material/styles';




const MyComponent = styled('div')(({ theme }) => ({
    color: theme.palette.primary.main,
  }));


function HomePage() {
    return (
      <>



  
  <MyComponent>This text should be in the primary color.</MyComponent>
        <Box sx={{ padding: 2 }}>
          <div style={{ color: '#D41736' }}>Welcome to the eSports Homepage!</div>
          <div style={{ color: '#D41736' }}>This is your one-stop hub for all eSports activities. Stay tuned for more updates!</div>
        </Box>
      </>
    );
}

  export default HomePage;