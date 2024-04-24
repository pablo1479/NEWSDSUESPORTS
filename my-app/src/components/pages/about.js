import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

// Image imports
import fifa23 from './fifa23.jpeg';
import supersmashbros from './supersmashbros.jpeg';
import legendofzelda from './legendofzelda.jpeg';
import nba2k23 from './nba2k23.jpeg';
import professorImage from './dogan-modified.jpg';  // Import the image for Professor Ugur Dogan

const gameImages = [
    { src: fifa23, title: "FIFA 23" },
    { src: supersmashbros, title: "Super Smash Bros" },
    { src: legendofzelda, title: "Legend of Zelda" },
    { src: nba2k23, title: "NBA 2K23" }
];

function AboutPage() {
    // Load Twitter script dynamically
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://platform.twitter.com/widgets.js";
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <Box sx={{ padding: 4 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Box sx={{
                        padding: 2,
                        border: `4px solid #D41736`, // Thicker border
                        borderRadius: '12px', // Rounded corners
                        textAlign: 'center',
                        margin: 'auto',
                        maxWidth: '90%',
                        backgroundColor: '#fff'
                    }}>
                        <Typography variant="h4" sx={{ marginBottom: 2, color: '#D41736' }}>
                            Mission Statement
                        </Typography>
                        <Typography variant="body1">
                        The Esports Engagement Center, a collaboration among various university divisions, uses esports as a platform for educational and personal growth. Our facility supports learning and well-being through comprehensive programs like care advising, educational workshops, and extensive library services. We are dedicated to fostering both competitive and scholarly esports talents, ensuring our students have the opportunities to thrive.                        </Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: 2,
                        padding: 2,
                        border: `4px solid #D41736`,
                        borderRadius: '12px',
                        backgroundColor: '#fff'
                    }}>
                        <img src={professorImage} alt="Professor Ugur Dogan" style={{ width: 100, height: 100, marginRight: 2 }} />
                        <Typography variant="h6" sx={{ color: '#D41736' }}>
                            Sponsored by Professor Ugur Dogan
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="h4" sx={{ marginBottom: 2, textAlign: 'center', color: '#D41736' }}>
                        Stay up to date with any upcoming events with our Twitter!
                    </Typography>
                    <Box sx={{
                        height: 400,
                        overflow: 'auto',
                        textAlign: 'center',
                        borderRadius: '12px'  // Consistent rounded corners
                    }}>
                        <a className="twitter-timeline" href="https://twitter.com/aztecgamingsdsu">
                            Tweets by aztecgamingsdsu
                        </a>
                    </Box>
                </Grid>
            </Grid>

            <Typography variant="h5" sx={{ marginTop: 4, marginBottom: 2, textAlign: 'center', color: '#D41736' }}>
                Games Offered
            </Typography>
            <Grid container spacing={2}>
                {gameImages.map((game, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            borderRadius: '12px'  // Rounded corners for images
                        }}>
                            <img src={game.src} alt={game.title} style={{ width: '100%', height: 'auto', borderRadius: '12px' }} />
                            <Typography sx={{ mt: 1, color: '#D41736' }}>{game.title}</Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>

            <Typography variant="h5" sx={{ marginTop: 4, marginBottom: 2, textAlign: 'center', color: '#D41736' }}>
                Contact Us
            </Typography>
            <Box
                component="form"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    '& .MuiTextField-root': { m: 1, width: '300px' },
                    borderRadius: '12px'  // Rounded corners for form
                }}
                noValidate
                autoComplete="off"
            >
                <TextField required label="Name" variant="outlined" />
                <TextField required label="Email" variant="outlined" type="email" />
                <TextField
                    label="Feedback"
                    variant="outlined"
                    multiline
                    rows={4}
                    fullWidth
                    sx={{ m: 1, width: '300px' }}
                />
                <Button variant="contained" color="primary" sx={{ mt: 2, width: '300px', bgcolor: '#D41736', '&:hover': { bgcolor: '#bf1230' } }}>
                    Submit
                </Button>
            </Box>
        </Box>
    );
}

export default AboutPage;
