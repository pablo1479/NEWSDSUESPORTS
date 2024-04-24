import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import merchandiseImage from './aztec_gaming_banner.jpg'; // Ensure the image path is correct

function MerchPage() {
    return (
        <Box sx={{ padding: 2, textAlign: 'center' }}>
            {/* Image Section with Overlay Text */}
            <Box sx={{
                position: 'relative', // Needed for absolute positioning of the Typography within
                width: '100%',
                overflow: 'hidden'
            }}>
                { <img src={merchandiseImage} alt="Merchandise" style={{ width: '50%', height: 'auto' }} />}
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
                    color: '#000000', // Adjusted to white for better visibility
                    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adds a dark overlay for better readability
                    padding: '1rem'
                }}>
                    <Typography variant="h2" sx={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: 1 }}>
                        Welcome to the Merchandise Page!
                    </Typography>
                    <Typography variant="h4" sx={{ fontSize: '2rem', fontWeight: 'bold' }}>
                        Explore our collection of merchandise. Check out our latest products!
                    </Typography>
                </Box>
            </Box>

            {/* Merchandise Items */}
            <Box sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: 2,
                marginTop: 3 // Added margin-top for spacing between image and merchandise items
            }}>
                {/* Insert merchandise items here */}
                {/* Example:
                <div>
                    <img src={itemImage} alt="Item" style={{ width: '100%', height: 'auto' }} />
                    <Typography variant="body1" sx={{ fontSize: '1rem', fontWeight: 'bold', marginTop: 1 }}>
                        Item Name
                    </Typography>
                    <Typography variant="body2" sx={{ fontSize: '0.8rem' }}>
                        $XX.XX
                    </Typography>
                </div>
                */}
            </Box>

            {/* Filters and Sorting Options */}
            <Box sx={{
                marginTop: 2,
                bgcolor: 'background.paper',
                padding: 2
            }}>
                <Typography variant="h6" sx={{ fontSize: '1.4rem', fontWeight: 'bold' }}>
                    Filter & Sort
                </Typography>
                {/* Insert filter and sorting options here */}
            </Box>
        </Box>
    );
}

export default MerchPage;
