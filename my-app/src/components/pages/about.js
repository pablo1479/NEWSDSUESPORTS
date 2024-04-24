import React from 'react';
import './homestyles.css';
import SDSUGamingCenterImage from './SDSU Gaming Center.jpg'; // Import your image

function App() {
    return (
        <div>
            <header>
                <h1>SDSU ESports</h1>
            </header>

            <main className="container">
                <img src={SDSUGamingCenterImage} className="img-fluid rounded mx-auto d-block" alt="SDSU Gaming Center" />
                <p className="mt-3">Welcome to the official website of the San Diego State University ESports Team!</p>
            </main>
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
            <Footer />
        </div>

        
    );
}

function Footer() {
    return (
        <footer className="mt-5">
            <p>&copy; 2024 SDSU ESports Team. All rights reserved.</p>
        </footer>
    );
}

export default App;
