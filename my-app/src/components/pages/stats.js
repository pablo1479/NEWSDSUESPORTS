import React from 'react';
import { Grid, Typography, Button } from '@mui/material';

// Component for displaying team information
function Team({ name, games }) {
    return (
        <Grid container direction="column" alignItems="center" className="team">
            <Typography variant="h2">{name}</Typography>
            {/* Display game selection */}
            <Typography variant="body1">Games:</Typography>
            {games.map((game, index) => (
                <Typography key={index} variant="body2">{game}</Typography>
            ))}
            {/* Add some random elements */}
            <Button variant="contained" color="primary">Join Team</Button>
        </Grid>
    );
}

// Component for displaying the stats
function Stats({ playerName, winRate }) {
    return (
        <Grid container direction="column" alignItems="center" className="stats">
            <Typography variant="h3">{playerName}</Typography>
            <Typography variant="body1">Win Rate: {winRate}%</Typography>
            {/* Add some random elements */}
            <Button variant="outlined" color="secondary">View Profile</Button>
        </Grid>
    );
}

function App() {
    // Sample data for the stats
    const playerStats = [
        { playerName: 'Alex Rivera', winRate: 70 },
        { playerName: 'Papa Pookie', winRate: 60 },
        { playerName: 'Pookie Pablo', winRate: 80 },
        { playerName: 'Robert McLockedin', winRate: 50 }
    ];

    return (
        <div>
            <header>
                <Typography variant="h1">SDSU ESports</Typography>
            </header>

            {/* Display team information */}
            <Team name="Manshawdies" games={['Valorant', 'Overwatch 2']} />
            <Team name="Teh's Angels" games={['League of Legends', 'Smite']} />
            <Team name="Doganators" games={['Forza Horizon', 'Gran Turismo']} />
            <Team name="Astrofees" games={['Math is Fun', 'Poptropica']} />

            {/* Display stats */}
            {playerStats.map((player, index) => (
                <Stats key={index} playerName={player.playerName} winRate={player.winRate} />
            ))}

            <footer>
                <Typography>&copy; 2024 SDSU ESports Team. All rights reserved.</Typography>
            </footer>
        </div>
    );
}

export default App;







/* import React, { useState, useEffect } from 'react';
import Chart from 'chart.js/auto';
import { FormControl, InputLabel, Select, MenuItem, Grid, Typography } from '@mui/material';

// Component for displaying team information
function Team({ name, games }) {
    const [selectedGame, setSelectedGame] = useState('');

    return (
        <Grid container direction="column" alignItems="center" className="team">
            <Typography variant="h2">{name}</Typography>
            <FormControl>
                <InputLabel id={`${name.toLowerCase()}-game-select-label`}>Select a Game:</InputLabel>
                <Select
                    labelId={`${name.toLowerCase()}-game-select-label`}
                    id={`${name.toLowerCase()}-game-select`}
                    value={selectedGame}
                    onChange={(e) => setSelectedGame(e.target.value)}
                >
                    {games.map((game, index) => (
                        <MenuItem key={index} value={game}>{game}</MenuItem>
                    ))}
                </Select>
            </FormControl>
            <div id={`${name.toLowerCase()}-stats`} className="stats"></div>
        </Grid>
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
        <Grid container direction="column" alignItems="center" className="bar-graph">
            <Typography variant="h2">Win vs Loss Rates</Typography>
            <canvas id="player-stats"></canvas>
        </Grid>
    );
}

function App() {
    // Sample data for the bar graph
    const playerNames = ['Alex Rivera', 'Papa Pookie', 'Pookie Pablo', 'Robert McLockedin'];
    const winRates = [0.7, 0.6, 0.8, 0.5]; // Assuming win rates are between 0 and 1

    return (
        <div>
            <header>
                <Typography variant="h1">SDSU ESports</Typography>
            </header>

            <Team name="Manshawdies" games={['Valorant', 'Overwatch 2']} />
            <Team name="Teh's Angels" games={['League of Legends', 'Smite']} />
            <Team name="Doganators" games={['Forza Horizon', 'Gran Turismo']} />
            <Team name="Astrofees" games={['Math is Fun', 'Poptropica']} />

            <BarGraph playerNames={playerNames} winRates={winRates} />

            <footer className="">
                <Typography>&copy; 2024 SDSU ESports Team. All rights reserved.</Typography>
            </footer>
        </div>
    );
}

export default App; */
