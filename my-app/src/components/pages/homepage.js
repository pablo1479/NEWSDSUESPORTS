import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import esporthome from './esporthome.jpg'; // Ensure the image path is correct

function HomePage() {
    return (
        <Box sx={{ padding: 2, textAlign: 'center' }}>
            {/* Image Section with Overlay Text */}
            <Box sx={{
                position: 'relative', // Needed for absolute positioning of the Typography within
                width: '100%',
                overflow: 'hidden'
            }}>
                <img src={esporthome} alt="eSports" style={{ width: '100%', height: 'auto' }} />
                <Box sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: '#FFFFFF', // Adjusted to white for better visibility
                    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adds a dark overlay for better readability
                    padding: '1rem'
                }}>
                    <Typography variant="h2" sx={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: 1 }}>
                        Welcome to the SDSU Esports Homepage!
                    </Typography>
                    <Typography variant="h4" sx={{ fontSize: '2rem', fontWeight: 'bold' }}>
                        This is your one-stop hub for all eSports activities. Stay tuned for more updates!
                    </Typography>
                </Box>
            </Box>

            {/* Video Section */}
            <Box sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: 2,
                marginTop: 3 // Added margin-top for spacing between image and videos
            }}>
                <iframe
                    width="100%"
                    height="315"
                    src="https://www.youtube.com/embed/JE_z4tiVJQ8"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
                </iframe>
                <iframe
                    width="100%"
                    height="315"
                    src="https://www.youtube.com/embed/o3V-GvvzjE4"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
                </iframe>
                <iframe
                    width="100%"
                    height="315"
                    src="https://www.youtube.com/embed/BDP9UBOwY_c"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
                </iframe>
            </Box>

            {/* Hours Box */}
            <Box sx={{
                marginTop: 2,
                bgcolor: 'background.paper',
                padding: 2
            }}>
                <Typography variant="h6" sx={{ fontSize: '1.4rem', fontWeight: 'bold' }}>
                    Our Hours
                </Typography>
                <Typography sx={{ fontSize: '1.2rem' }}>
                    Mon - Fri: 10 AM - 6 PM<br />
                    Sat - Sun: Closed
                </Typography>
            </Box>
        </Box>
    );
}

export default HomePage;
