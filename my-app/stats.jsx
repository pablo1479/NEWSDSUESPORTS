// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);

// App.js
import React from 'react';
import { Container, AppBar, Toolbar, Typography, Button, Modal, TextField, FormControl, InputLabel, Input, FormHelperText } from '@mui/material';
import { styled } from '@mui/system';

const StyledModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

function App() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            SDSU ESports
          </Typography>
          <Button color="inherit" onClick={handleOpen}>Log In</Button>
        </Toolbar>
      </AppBar>

      <StyledModal open={open} onClose={handleClose}>
        <div>
          <Typography variant="h6" id="modal-title">Log In</Typography>
          <Typography variant="body2" id="modal-description">Enter your username and password</Typography>
          <form>
            <FormControl>
              <InputLabel htmlFor="username">Username</InputLabel>
              <Input id="username" type="text" />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input id="password" type="password" />
            </FormControl>
            <Button variant="contained" color="primary" type="submit">Log In</Button>
          </form>
        </div>
      </StyledModal>

      <Container>
        {/* Add other components here */}
      </Container>

      <footer>
        <Typography variant="body2" align="center" color="textSecondary" gutterBottom>
          &copy; 2024 SDSU ESports Team. All rights reserved.
        </Typography>
      </footer>
    </div>
  );
}

export default App;

// theme.js
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: '#f44336',
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;
