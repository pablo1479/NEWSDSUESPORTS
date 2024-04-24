import React from 'react';
import './statsstyles.css';
import Chart from 'chart.js/auto';

function App() {
    // Sample data for the bar graph
    const playerNames = ['Alex Rivera', 'Papa Pookie', 'Pookie Pablo', 'Robert McLockedin'];
    const winRates = [0.7, 0.6, 0.8, 0.5]; // Assuming win rates are between 0 and 1

    // Creating the bar graph using Chart.js
    React.useEffect(() => {
        const ctx = document.getElementById('player-stats');
        const myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: playerNames,
                datasets: [{
                    label: 'Win vs Loss Rates',
                    data: winRates,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }, []);

    return (
        <div>
            <header>
                <h1>SDSU ESports</h1>
            </header>

            <div className="team">
                <h2>Manshawdies</h2>
                <label htmlFor="manshawdies-game-select">Select a Game:</label>
                <select id="manshawdies-game-select" className="game-select" data-team="manshawdies">
                    <option value="game1">Valorant</option>
                    <option value="game2">Overwatch 2</option>
                </select>
                <div id="manshawdies-stats" className="stats"></div>
            </div>

            <div className="team">
                <h2>Teh's Angels</h2>
                <label htmlFor="tehs-angels-game-select">Select a Game:</label>
                <select id="tehs-angels-game-select" className="game-select" data-team="tehs-angels">
                    <option value="game1">League of Legends</option>
                    <option value="game2">Smite</option>
                </select>
                <div id="tehs-angels-stats" className="stats"></div>
            </div>

            <div className="team">
                <h2>Doganators</h2>
                <label htmlFor="doganators-game-select">Select a Game:</label>
                <select id="doganators-game-select" className="game-select" data-team="doganators">
                    <option value="game1">Forza Horizon</option>
                    <option value="game2">Gran Turismo</option>
                </select>
                <div id="doganators-stats" className="stats"></div>
            </div>

            <div className="team">
                <h2>Astrofees</h2>
                <label htmlFor="astrofees-game-select">Select a Game:</label>
                <select id="astrofees-game-select" className="game-select" data-team="astrofees">
                    <option value="game1">Math is Fun</option>
                    <option value="game2">Poptropica</option>
                </select>
                <div id="astrofees-stats" className="stats"></div>
            </div>

            {/* Bar graph section */}
            <div className="bar-graph">
                <h2>Win vs Loss Rates</h2>
                <canvas id="player-stats"></canvas>
            </div>

            <footer className="">
                <p>&copy; 2024 SDSU ESports Team. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default App;
