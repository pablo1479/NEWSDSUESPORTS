import React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import nba2k23 from './nba2k23.jpeg';
import fifa23 from './fifa23.jpeg';
import supersmashbros from './supersmashbros.jpeg';
import ResponsiveAppBar from './logoutbar'; // Importing the navigation bar

function ProfilePage() {
    // Sample user data
    const user = {
        name: 'John Doe',
        pictureUrl: 'https://example.com/profile-picture.jpg' // Replace with the actual URL of the user's profile picture
    };

    // Sample game images
    const recentGames = [
        nba2k23,
        fifa23,
        supersmashbros
    ];

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 4 }}>
            {/* Inserting the ResponsiveAppBar at the top of the page */}
            <ResponsiveAppBar />

            {/* User Profile Picture */}
            <Avatar sx={{ width: 120, height: 120, mb: 2 }} alt={user.name} src={user.pictureUrl} />

            {/* User Name */}
            <Typography variant="h4" gutterBottom>
                {user.name}
            </Typography>

            {/* Layout Grid for Widget and Gallery */}
            <Grid container spacing={2} justifyContent="center">
                {/* Tournament Registration Widget */}
                <Grid item xs={12} md={6}>
                    <div style={{ width: '100%', overflow: 'hidden' }}>
                        <iframe
                            src="https://www.start.gg/tournament/sdsu-smash-tournament/register/embed"
                            frameBorder="0"
                            width="100%"
                            height="600"
                            allowFullScreen>
                        </iframe>
                    </div>
                </Grid>

                {/* Recent Games Gallery */}
                <Grid item xs={12} md={6}>
                    <Typography variant="h6" component="h2" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 2 }}>
                        Recent Games Played
                    </Typography>
                    <Grid container spacing={1} justifyContent="center">
                        {recentGames.map((game, index) => (
                            <Grid item xs={4} key={index}>
                                <Paper elevation={2}>
                                    <img src={game} alt={`Game ${index + 1}`} style={{ width: '100%', height: 'auto' }} />
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}

export default ProfilePage;
