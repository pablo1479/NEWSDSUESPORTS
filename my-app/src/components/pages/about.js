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
