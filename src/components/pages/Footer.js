
import sdsuLogo from './sdsutrans.png';
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
// import DiscordIcon from '@mui/icons-material/Discord';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <Box component="footer" sx={{
      bgcolor: '#D41736',
      pt: 5, // Padding top inside the footer
      pb: 5, // Reduced padding bottom to bring copyright closer
      mt: 9, // Margin top for the footer
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center'
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'center', gap: 4, marginBottom: 1 }}>  
        <img src={sdsuLogo} alt="SDSU eSports Logo" style={{ height: 50 }} />
        <Box>
          Stay connected with us!
          <IconButton component="a" href="https://www.instagram.com/aztecgamingsdsu/?img_index=1" target="_blank" color="inherit">
            <InstagramIcon />
          </IconButton>
          {/* Uncomment and add link for Discord when available
          <IconButton component="a" href="#" target="_blank" color="inherit">
            <DiscordIcon />
          </IconButton> */}
          <IconButton component="a" href="https://t.co/QHcCAAOOCY" target="_blank" color="inherit">
            <SportsEsportsIcon />
          </IconButton>
          <IconButton component="a" href="https://twitter.com/Aztecgamingsdsu" target="_blank" color="inherit">
            <TwitterIcon />
          </IconButton>
        </Box>
        <Typography variant="body1" color="text.secondary">
          Mon - Fri: 10 AM - 6 PM | Sat - Sun: Closed
        </Typography>
      </Box>

      {/* Copyright positioned closer */}
      <Typography variant="body2" color="text.secondary">
        {'Copyright © '}
        <Link color="inherit" href="/">
          SDSU Esports
        </Link>
        {' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </Box>
  );
}

export default Footer;
