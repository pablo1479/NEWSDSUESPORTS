import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import esporthome from './esporthome.jpg'; // Ensure the image path is correct

function HomePage() {
    return (
        <Box sx={{ padding: 2, textAlign: 'center' }}>
            <Typography variant="h3" sx={{ color: '#D41736', marginBottom: 2, fontSize: '2rem' }}>
                Welcome to the eSports Homepage!
            </Typography>
            <Typography variant="h5" sx={{ color: '#D41736', marginBottom: 3, fontSize: '1.5rem' }}>
                This is your one-stop hub for all eSports activities. Stay tuned for more updates!
            </Typography>

            {/* Image Section */}
            <Box sx={{
                width: '100%',
                overflow: 'hidden'
            }}>
                <img src={esporthome} alt="eSports" style={{ width: '100%', height: 'auto' }} />
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
                    src="https://www.youtube.com/embed/2cHbI3GVMsI"
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
                    src="https://www.youtube.com/embed/2cHbI3GVMsI"
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
                <Typography variant="h6" sx={{ fontSize: '1.2rem' }}>
                    Our Hours
                </Typography>
                <Typography>
                    Mon - Fri: 10 AM - 6 PM<br />
                    Sat - Sun: Closed
                </Typography>
            </Box>
        </Box>
    );
}

export default HomePage;
