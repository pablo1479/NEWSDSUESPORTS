import React from 'react';
import { AppBar, Button, Container, IconButton, Modal, Toolbar, Typography, TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
import AddIcon from '@mui/icons-material/Add';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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

function ApplicationPage() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const addMember = () => {
    // Add logic to add a new team member input field
  };

  return (
    <div className={classes.root}>
      <header>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              SDSU ESports
            </Typography>
            <IconButton color="inherit">
              Log In
            </IconButton>
          </Toolbar>
        </AppBar>
      </header>

      <Container>
        <form>
          <div className="mb-3">
            <label htmlFor="teamName" className="form-label">Team Name:</label>
            <TextField id="teamName" variant="outlined" fullWidth required />
          </div>
          {/* Add other form fields */}
          <div className="mb-3" id="teamMembers">
            <label htmlFor="teamMembers" className="form-label">Team Members:</label>
            <div className="team-member">
              <TextField variant="outlined" fullWidth placeholder="Teammate Name" />
            </div>
          </div>
          <Button variant="contained" color="primary" onClick={addMember} startIcon={<AddIcon />}>
            Add Member
          </Button>
          <Button variant="contained" color="success" type="submit">
            Submit Application
          </Button>
        </form>
      </Container>

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

      <footer className="mt-5">
        <Typography variant="body2">&copy; 2024 SDSU ESports Team. All rights reserved.</Typography>
      </footer>
    </div>
  );
}

export default ApplicationPage;
