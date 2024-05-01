import React, { useState, useEffect } from 'react';
import {
  AppBar, Box, Toolbar, IconButton, Menu, MenuItem, Button, Container, Typography,
  Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import logoImage from './aztecgaminglogo.jpeg';  // Ensure this path is correct

const pages = ['Home', 'About', 'Merch', 'Stream', 'Stats'];
const pagePaths = ['/', '/about', '/merch', '/stream', '/stats'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleNavigate = (path) => {
    navigate(path);
    handleCloseNavMenu();
    if (path === '/') { // Assuming '/' is the homepage path
      setOpenDialog(true);
    }
  };

  const handleLogin = () => {
    navigate('/Signup');
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  useEffect(() => {
    if (window.location.pathname === '/') {
      setOpenDialog(true);
    }
  }, []);

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
            
            
          <Button
  variant="contained"
  color="primary" // Ensure this uses the primary theme color
  sx={{
    my: 2,
    display: 'block',
    backgroundColor: 'primary.main', // Set this to use your theme's primary color
    '&:hover': {
      backgroundColor: '#bf1230' // Ensure this is a visible contrast or adjust as needed
    },
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)', // Optional shadow for depth
    py: 1.5, // Increase padding for a larger button
    px: 3,
    fontWeight: 'bold', // Make font bold
    fontSize: '1rem' // Increase font size
  }}
  onClick={handleLogin}
>
  Sign up / Log in
</Button>            
            
            
            
          </Box>
        </Toolbar>
      </Container>

      {/* Dialog for Homepage Alert */}
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Register/Login Required"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Register or log in to sign up for our tournament!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary" autoFocus>
            Okay
          </Button>
        </DialogActions>
      </Dialog>
    </AppBar>
  );
}

export default ResponsiveAppBar;
