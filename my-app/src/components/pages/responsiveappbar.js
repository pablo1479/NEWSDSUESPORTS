import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import logoImage from './esportslogonew.jpeg';  // Importing the logo image
import Typography from '@mui/material/Typography';  // Importing Typography
import MenuItem from '@mui/material/MenuItem';  // Importing MenuItem
import { useNavigate } from 'react-router-dom';


const pages = ['Home', 'About', 'Merch', 'Stream', 'Stats'];
const pagePaths = ['/', '/about', '/merch', '/stream', '/stats']; // Paths must correspond to pages

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const navigate = useNavigate(); // Updated to useNavigate hook

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleNavigate = (path) => {
    navigate(path);
    handleCloseNavMenu(); // Close menu upon navigation
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleLogin = () => {
    // Redirect user to Signup page when login button is clicked
    navigate('/Signup');  // Updated to use navigate
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 2, alignItems: 'center' }}>
            <img src={logoImage} alt="Logo" style={{ height: 30 }} />
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
{pages.map((page, index) => (
                <MenuItem key={page} onClick={() => handleNavigate(pagePaths[index])}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page, index) => (
              <Button
                key={page}
                onClick={() => handleNavigate(pagePaths[index])}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          {/* Log In Button */}
          <Box sx={{ flexGrow: 0 }}>
            <Button color="inherit" sx={{ my: 2, display: 'block' }} onClick={handleLogin}>
              Sign up / Log in
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
