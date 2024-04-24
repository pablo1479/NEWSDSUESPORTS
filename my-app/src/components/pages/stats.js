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

function Apps() {
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

export  {Apps};
export  {Team};
export  {Stats};
