const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());

const secretKey = 'your_secret_key'; // Replace this with your actual secret key

// Mock user database
const users = [
    { id: 1, username: 'user1', password: 'password1' },
    { id: 2, username: 'user2', password: 'password2' }
];

// Login route
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);

    if (!user) {
        return res.status(401).json({ message: 'Invalid username or password' });
    }

    // Create and send JWT token
    const token = jwt.sign({ username: user.username }, secretKey);
    res.json({ token });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
