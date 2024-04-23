import React from 'react';
import { AppBar, Container, Grid, IconButton, Modal, Toolbar, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Iframe from 'react-iframe';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function HomePage() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            SDSU ESports
          </Typography>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <YouTubeIcon />
          </IconButton>
          <button className="btn btn-primary" onClick={handleOpen}>Log In</button>
        </Toolbar>
      </AppBar>
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        aria-labelledby="loginModalLabel"
        aria-describedby="loginModalDescription"
      >
        <div className={classes.paper}>
          <h2 id="loginModalLabel">Log In</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username:</label>
              <input type="text" className="form-control" id="username" required />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password:</label>
              <input type="password" className="form-control" id="password" required />
            </div>
            <button type="submit" className="btn btn-primary">Log In</button>
          </form>
        </div>
      </Modal>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <img src="/path/to/your/image.jpg" alt="SDSU Gaming Center" style={{ width: '70%', height: 'auto' }} />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              Welcome to the official website of the San Diego State University ESports.
            </Typography>
            {/* Add your paragraphs here */}
          </Grid>
        </Grid>
      </Container>
      {/* Add your Iframe and other content here */}
      <footer>
        <Typography variant="body2" align="center">
          &copy; 2024 SDSU ESports Team. All rights reserved.
        </Typography>
      </footer>
    </div>
  );
}

export default HomePage;
