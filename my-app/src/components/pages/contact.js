import React from 'react';

function App() {
    return (
        <div>
            <header>
                <h1>SDSU ESports</h1>
            </header>

            <section id="contact">
                <h2>Contact Us</h2>
                
                <p>
                    If you have any questions or feedback, 
                    feel free to reach out to us using the form below:</p>
                
                <form action="#" method="post">
                    <label htmlFor="name">Name:</label><br />
                    <input type="text" id="name" name="name" required /><br />
                    <label htmlFor="email">Email:</label><br />
                    <input type="email" id="email" name="email" required /><br />
                    <label htmlFor="message">Message:</label><br />
                    <textarea id="message" name="message" rows="4" required></textarea><br />
                    <input type="submit" value="Submit" />
                </form>
                
                <h2>Contacts:</h2>
                <ul>
                    <li>Name: Robert McLintock, Email: Robert@example.com</li>
                    <li>Name: Pablo Olivares, Email: Pablo@example.com</li>
                    <li>Name: Brandon Reynolds, Email: Brandon@example.com</li>
                    <li>Name: Alex Rivera, Email: Alex@example.com</li>
                </ul>
            </section>

            <footer>
                <p>&copy; 2024 SDSU eSports Team. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default App;
