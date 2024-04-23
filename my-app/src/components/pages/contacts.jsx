import React from 'react';
import { Container, Typography, TextField, Button, AppBar, Toolbar, IconButton, Modal, List, ListItem, ListItemText } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';
import EmailIcon from '@mui/icons-material/Email';

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

function ContactPage() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

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
          <IconButton color="inherit">
            Log In
          </IconButton>
        </Toolbar>
      </AppBar>

      <Container>
        <section id="contact">
          <Typography variant="h2">Contact Us</Typography>
          <Typography variant="body1">
            If you have any questions or feedback,
            feel free to reach out to us using the form below:
          </Typography>
          <form>
            <TextField id="name" label="Name" fullWidth required />
            <TextField id="email" label="Email" type="email" fullWidth required />
            <TextField id="message" label="Message" multiline rows={4} fullWidth required />
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </form>
        </section>

        <section>
          <Typography variant="h2">Contacts:</Typography>
          <List>
            <ListItem>
              <ListItemText primary="Robert McLintock" secondary="Robert@example.com" />
              <IconButton href="mailto:Robert@example.com">
                <EmailIcon />
              </IconButton>
            </ListItem>
            <ListItem>
              <ListItemText primary="Pablo Olivares" secondary="Pablo@example.com" />
              <IconButton href="mailto:Pablo@example.com">
                <EmailIcon />
              </IconButton>
            </ListItem>
            <ListItem>
              <ListItemText primary="Brandon Reynolds" secondary="Brandon@example.com" />
              <IconButton href="mailto:Brandon@example.com">
                <EmailIcon />
              </IconButton>
            </ListItem>
            <ListItem>
              <ListItemText primary="Alex Rivera" secondary="Alex@example.com" />
              <IconButton href="mailto:Alex@example.com">
                <EmailIcon />
              </IconButton>
            </ListItem>
          </List>
        </section>
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

      <footer>
        <Typography variant="body2">&copy; 2024 SDSU ESports Team. All rights reserved.</Typography>
      </footer>
    </div>
  );
}

export default ContactPage;
