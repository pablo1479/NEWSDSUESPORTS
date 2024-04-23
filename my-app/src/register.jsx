import React from 'react';
import ReactDOM from 'react-dom';
import { Container, TextField, Button, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {cd
    ,flexGrow: 1,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '300px',
    margin: 'auto',
  },
}));

function RegistrationPage() {
  const classes = useStyles();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Simulating form data submission
    const formData = {
      first_name: event.target.Fname.value,
      last_name: event.target.Lname.value,
      email: event.target.Semail.value,
      password: event.target.Pword.value,
      student_id: event.target.Sid.value,
      twitch: event.target.Twitch.value,
    };

    console.log('Form submitted:', formData);

    // Add fetch request here to submit form data to the server
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
          </ul>
        </nav>
      </header>

      <main>
        <Container>
          <form className={classes.form} onSubmit={handleSubmit}>
            <TextField id="Fname" name="Fname" label="First Name" variant="outlined" margin="normal" required />
            <TextField id="Lname" name="Lname" label="Last Name" variant="outlined" margin="normal" required />
            <TextField id="Semail" name="Semail" label="Student Email" type="email" variant="outlined" margin="normal" required />
            <TextField id="Pword" name="Pword" label="Password" type="password" variant="outlined" margin="normal" required />
            <TextField id="Sid" name="Sid" label="Student ID" variant="outlined" margin="normal" required />
            <TextField id="Twitch" name="Twitch" label="Twitch (Optional)" variant="outlined" margin="normal" />
            <Button type="submit" variant="contained" color="primary">Submit</Button>
          </form>
        </Container>
      </main>

      <footer className="mt-5">
        <Typography variant="body2">&copy; 2024 SDSU ESports Team. All rights reserved.</Typography>
      </footer>
    </div>
  );
}

ReactDOM.render(<RegistrationPage />, document.getElementById('root'));
