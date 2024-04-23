import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Typography, Select, MenuItem, List, ListItem, ListItemText, TextField, Button, AppBar, Toolbar, IconButton, Modal } from '@mui/material';
import { makeStyles } from '@mui/styles';
import EmailIcon from '@mui/icons-material/Email';
import YouTube from 'react-youtube';

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

function MerchPage() {
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
          <IconButton color="inherit">
            Log In
          </IconButton>
        </Toolbar>
      </AppBar>

      <Container>
        <section>
          <Typography variant="h1" component="h1">
            Merchandise
          </Typography>
          <Typography variant="body1">
            Show your team appreciation with some merch!
          </Typography>
        </section>

        <section>
          <div className="row">
            <div className="col">
              <h4>Filters</h4>
              <ul>
                <li>
                  <input type="checkbox" value="" id="flexCheckDefault" />
                  <label htmlFor="flexCheckDefault">Price</label>
                </li>
                <li>
                  <input type="checkbox" value="" id="flexCheckDefault" />
                  <label htmlFor="flexCheckDefault">Quantity</label>
                </li>
                <li>
                  <input type="checkbox" value="" id="flexCheckDefault" />
                  <label htmlFor="flexCheckDefault">Size</label>
                </li>
                <li>
                  <input type="checkbox" value="" id="flexCheckDefault" />
                  <label htmlFor="flexCheckDefault">Type</label>
                </li>
              </ul>
            </div>
            <div className="col">
              <Select defaultValue="Sort By">
                <MenuItem value="1">Price</MenuItem>
                <MenuItem value="2">Size</MenuItem>
                <MenuItem value="3">Quantity</MenuItem>
              </Select>

              <List>
                <ListItem>
                  <ListItemText primary="1. Team Manshawdies T-Shirt" secondary="$14.99 - 3 left" />
                  <EmailIcon />
                </ListItem>
                <ListItem>
                  <ListItemText primary="2. Team Doganators Pants" secondary="$20.99 - 10 left" />
                  <EmailIcon />
                </ListItem>
                <ListItem>
                  <ListItemText primary="3. Teh's Angels Hat" secondary="$15.99 - 5 left" />
                  <EmailIcon />
                </ListItem>
                <ListItem>
                  <ListItemText primary="4. Team Astrofees Key Chain" secondary="$10.00 - 7 left" />
                  <EmailIcon />
                </ListItem>
              </List>

              <h3>Use this to add more merchandise!</h3>
              <form action="/add_merchandise" method="POST">
                <TextField type="text" name="name" placeholder="Product Name" required />
                <TextField type="text" name="description" placeholder="Description" required />
                <TextField type="number" name="price" placeholder="Price" required />
                <TextField type="number" name="quantity" placeholder="Quantity" required />
                <Button type="submit">Add Merchandise</Button>
              </form>
            </div>
            <div className="col">
              <Typography variant="body2">Stay refreshed for the grind</Typography>
              <YouTube videoId="N9iAo4r5Wfg" />
            </div>
          </div>
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
          <form id="loginForm">
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username:</label>
              <input type="text" className="form-control" id="username" name="username" required />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password:</label>
              <input type="password" className="form-control" id="password" name="password" required />
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

ReactDOM.render(<MerchPage />, document.getElementById('root'));
