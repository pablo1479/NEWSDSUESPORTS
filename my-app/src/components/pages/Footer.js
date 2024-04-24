// File: Footer.js
import sdsuLogo from './sdsulogo.jpeg';
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
// import DiscordIcon from '@mui/icons-material/Discord';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports'; // Assuming you use this for Twitch
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', py: 3, mt: 4, textAlign: 'center' }}>
      <Typography variant="body2" color="text.secondary" gutterBottom>
        <img src={sdsuLogo} alt="eSports Logo" style={{ height: 50 }} />
      </Typography>
      <Box>
        Stay connected with us!
        <IconButton component="a" href="https://www.instagram.com/aztecgamingsdsu/?img_index=1" target="_blank" color="black">
          <InstagramIcon />
        </IconButton>
        <IconButton component="a" href="https://discord.gg/SjtybMqvu9" target="_blank" color="black">
          {/* <DiscordIcon /> */}
        </IconButton>
        <IconButton component="a" href="https://t.co/QHcCAAOOCY" target="_blank" color="black">
          <SportsEsportsIcon />
        </IconButton>
        Mon - Fri: 10 AM - 6 PM<br />
              Sat - Sun: Closed
      </Box>
      <Typography variant="body2" color="text.secondary" align="center">
   {'Copyright © '}
   <Link color="black" href="/">
     SDSU Esports
   </Link>{' '}
   {new Date().getFullYear()}
   {'.'}
 </Typography>
    </Box>
  );
}

export default Footer;