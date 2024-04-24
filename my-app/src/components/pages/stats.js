import React, { useState, useEffect } from 'react';
import Chart from 'chart.js/auto';

// Component for displaying team information
function Team({ name, games }) {
    const [selectedGame, setSelectedGame] = useState('');

    return (
        <div className="team">
            <h2>{name}</h2>
            <label htmlFor={`${name.toLowerCase()}-game-select`}>Select a Game:</label>
            <select
                id={`${name.toLowerCase()}-game-select`}
                className="game-select"
                value={selectedGame}
                onChange={(e) => setSelectedGame(e.target.value)}
            >
                {games.map((game, index) => (
                    <option key={index} value={game}>{game}</option>
                ))}
            </select>
            <div id={`${name.toLowerCase()}-stats`} className="stats"></div>
        </div>
    );
}

// Component for displaying the bar graph
function BarGraph({ playerNames, winRates }) {
    useEffect(() => {
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

        return () => {
            // Cleanup code if needed
            myChart.destroy();
        };
    }, [playerNames, winRates]);

    return (
        <div className="bar-graph">
            <h2>Win vs Loss Rates</h2>
            <canvas id="player-stats"></canvas>
        </div>
    );
}

function App() {
    // Sample data for the bar graph
    const playerNames = ['Alex Rivera', 'Papa Pookie', 'Pookie Pablo', 'Robert McLockedin'];
    const winRates = [0.7, 0.6, 0.8, 0.5]; // Assuming win rates are between 0 and 1

    return (
        <div>
            <header>
                <h1>SDSU ESports</h1>
            </header>

            <Team name="Manshawdies" games={['Valorant', 'Overwatch 2']} />
            <Team name="Teh's Angels" games={['League of Legends', 'Smite']} />
            <Team name="Doganators" games={['Forza Horizon', 'Gran Turismo']} />
            <Team name="Astrofees" games={['Math is Fun', 'Poptropica']} />

            <BarGraph playerNames={playerNames} winRates={winRates} />

            <footer className="">
                <p>&copy; 2024 SDSU ESports Team. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default App;
