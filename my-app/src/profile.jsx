import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

function ProfilePage() {
  const classes = useStyles();

  // Simulated user data
  const userData = {
    username: 'JohnDoe',
    email: 'johndoe@example.com',
    dateJoined: '2024-04-23',
    // More user-specific data here...
  };

  return (
    <div className={classes.root}>
      <header>
        <h1>SDSU ESports</h1>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Registration</a>
            </li>
            <li>
              <a href="#">Application</a>
            </li>
            <li>
              <a href="#">Statistics</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Merchandise</a>
            </li>
            <li>
              <a href="#">Stream</a>
            </li>
            <li>
              <a href="#" className="active">Profile</a>
            </li>
            <li>
              <a href="#">Log Out</a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="container">
        <Container>
          <Typography variant="h2" gutterBottom>Welcome, {userData.username}!</Typography>
          <div>
            <Typography variant="h3">Your Profile Information</Typography>
            <Typography variant="body1">Email: {userData.email}</Typography>
            <Typography variant="body1">Member since: {userData.dateJoined}</Typography>
            {/* More user-specific data here... */}
          </div>
        </Container>
      </main>

      <footer className="mt-5">
        <Typography variant="body2">&copy; 2024 SDSU ESports Team. All rights reserved.</Typography>
      </footer>
    </div>
  );
}

ReactDOM.render(<ProfilePage />, document.getElementById('root'));
