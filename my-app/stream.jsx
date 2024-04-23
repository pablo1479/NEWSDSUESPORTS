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
import { AppBar, Toolbar, Typography, Button, Modal, TextField, Container, Grid, Card, CardMedia, CardContent, CardActions, Link } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  appBar: {
    marginBottom: theme.spacing(4),
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    marginTop: theme.spacing(4),
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
}));

function App() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            SDSU ESports
          </Typography>
          <Button color="inherit" onClick={handleOpen}>Log In</Button>
        </Toolbar>
      </AppBar>

      <Container className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h4" component="h2" align="center" gutterBottom>
              Popular Streamers
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                className={classes.cardMedia}
                image="https://www.youtube.com/embed/bokU-oZEFos"
                title="CaseOh"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  CaseOh
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Twitch Stream: <Link href="https://www.twitch.tv/caseoh_">Caseoh_</Link>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          {/* Repeat similar structure for other streamers */}
        </Grid>
      </Container>

      <Modal open={open} onClose={handleClose} className={classes.modal}>
        <div>
          <Typography variant="h6" id="modal-title">Log In</Typography>
          <Typography variant="body2" id="modal-description">Enter your username and password</Typography>
          <form>
            <TextField id="username" label="Username" variant="outlined" margin="normal" fullWidth required />
            <TextField id="password" label="Password" type="password" variant="outlined" margin="normal" fullWidth required />
            <Button variant="contained" color="primary" type="submit">Log In</Button>
          </form>
        </div>
      </Modal>

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
