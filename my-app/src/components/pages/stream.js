import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function StreamPage() {
    const streams = [
        "caseoh_", // Already existing streamer
        "jynxzi",  // Extracted from https://m.twitch.tv/jynxzi/home
        "kaicenat",  // Extracted from https://m.twitch.tv/kaicenat/home
        "pokimane",  // Extracted from https://m.twitch.tv/pokimane/home
        "rene8808",  // Extracted from https://m.twitch.tv/rene8808
        "zilverk",  // Extracted from https://m.twitch.tv/zilverk/home
        "caseoh_streamingg",
        "thesketchreal"
    ];

    const parentDomain = "localhost"; // Change to your deployed domain when hosting the site

    return (
        <Box sx={{ padding: 2 }}>
            <Typography variant="h4" sx={{ marginBottom: 2, textAlign: 'center', color: '#D41736'}}>
                Live Twitch Streams
            </Typography>
            <Box sx={{
                display: 'grid',
                gridTemplateColumns: { sm: '1fr', md: '1fr 1fr' }, // Responsive grid layout for better visibility
                gap: 2
            }}>
                {streams.map((stream) => (
                    <Box key={stream} sx={{ width: '100%', height: 0, paddingBottom: '56.25%', position: 'relative' }}>
                        <iframe
                            title="Live Stream"
                            src={`https://player.twitch.tv/?channel=${stream}&parent=${parentDomain}`}
                            frameBorder="0"
                            allowFullScreen={true}
                            scrolling="no"
                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                        ></iframe>
                    </Box>
                ))}
            </Box>
        </Box>
    );
}

export default StreamPage;
