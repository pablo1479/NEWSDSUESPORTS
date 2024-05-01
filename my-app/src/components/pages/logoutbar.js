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

  const handleLogout = () => {
    // Add your logout logic here, e.g., clearing user session/token
    console.log("User logged out");
    navigate('/'); // Navigate to homepage or login page after logout
  };

  // Define handleCloseDialog here
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

          <Box sx={{ flexGrow: 0 }}>
            <Button
              variant="contained"
              color="primary"
              sx={{
                my: 2,
                display: 'block',
                backgroundColor: 'primary.main',
                '&:hover': {
                  backgroundColor: '#bf1230'
                },
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                py: 1.5,
                px: 3,
                fontWeight: 'bold',
                fontSize: '1rem'
              }}
              onClick={handleLogout}
            >
              Log Out
            </Button>
          </Box>
        </Toolbar>
      </Container>

      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}  // Usage of handleCloseDialog
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
          <Button onClick={handleCloseDialog} color="primary" autoFocus>  // Usage of handleCloseDialog
            Okay
          </Button>
        </DialogActions>
      </Dialog>
    </AppBar>
  );
}

export default ResponsiveAppBar;
