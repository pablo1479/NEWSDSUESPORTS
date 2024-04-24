import React, { useState, useEffect, useRef } from 'react';
import { Grid, Typography, Button, TextField } from '@mui/material';
import Chart from 'chart.js/auto';

function Stats({ playerName, game }) {
    const [wins, setWins] = useState(0);
    const [losses, setLosses] = useState(0);
    const [winLossRatio, setWinLossRatio] = useState(0);
    const chartRef = useRef(null);

    const handleWinsChange = (event) => {
        setWins(Number(event.target.value));
    };

    const handleLossesChange = (event) => {
        setLosses(Number(event.target.value));
    };

    useEffect(() => {
        // Calculate win-loss ratio
        const ratio = wins / (wins + losses);
        setWinLossRatio(isNaN(ratio) ? 0 : ratio);

        // Update chart
        if (chartRef.current) {
            const ctx = chartRef.current.getContext('2d');
            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Wins', 'Losses'],
                    datasets: [{
                        label: 'Win vs Loss Ratio',
                        data: [wins, losses],
                        backgroundColor: [
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 99, 132, 0.2)'
                        ],
                        borderColor: [
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 99, 132, 1)'
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
        }
    }, [wins, losses]);

    return (
        <Grid container direction="column" alignItems="center" className="stats">
            <Typography variant="h3">{playerName}</Typography>
            <Typography variant="body1">Game: {game}</Typography>
            {/* Input fields for wins and losses */}
            <TextField
                type="number"
                label="Wins"
                value={wins}
                onChange={handleWinsChange}
                variant="outlined"
                style={{ marginBottom: '16px' }}
            />
            <TextField
                type="number"
                label="Losses"
                value={losses}
                onChange={handleLossesChange}
                variant="outlined"
                style={{ marginBottom: '16px' }}
            />
            {/* Canvas for the chart */}
            <canvas ref={chartRef} width="400" height="200"></canvas>
            {/* Display win-loss ratio */}
            <Typography variant="body1">Win vs Loss Ratio: {winLossRatio.toFixed(2)}</Typography>
            {/* Add some random elements */}
            <Button variant="outlined" color="secondary">View Profile</Button>
        </Grid>
    );
}

export default Stats;

