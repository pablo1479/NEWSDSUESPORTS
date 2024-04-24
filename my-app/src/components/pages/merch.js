import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import merchandiseImage from './aztec_gaming_banner.jpg'; // Ensure the image path is correct

function MerchPage() {
    // Placeholder merchandise items
    const merchandiseItems = [
        { name: "Item 1", price: 19.99, image: "item1.jpg" },
        { name: "Item 2", price: 29.99, image: "item2.jpg" },
        { name: "Item 3", price: 24.99, image: "item3.jpg" },
        // Add more items as needed USING DATABASE MYSQL
    ];

    return (
        <Box sx={{ padding: 2, textAlign: 'center' }}>
            {/* Image Section with Overlay Text */}
            <Box sx={{
                position: 'relative', // Needed for absolute positioning of the Typography within
                width: '100%',
                overflow: 'hidden'
            }}>
                <img src={merchandiseImage} alt="Merchandise" style={{ width: '50%', height: 'auto' }} />
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
                    color: '#FFFFFF',
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
                {merchandiseItems.map((item, index) => (
                    <div key={index}>
                        <img src={item.image} alt={item.name} style={{ width: '100%', height: 'auto' }} />
                        <Typography variant="body1" sx={{ fontSize: '1rem', fontWeight: 'bold', marginTop: 1 }}>
                            {item.name}
                        </Typography>
                        <Typography variant="body2" sx={{ fontSize: '0.8rem' }}>
                            ${item.price.toFixed(2)}
                        </Typography>
                    </div>
                ))}
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
                {/* Example filter options */}
                <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold', marginTop: 1 }}>
                        Price Range
                    </Typography>
                    {/* Add input sliders for price range */}
                    <input type="range" min="0" max="100" defaultValue="0" />
                    <input type="range" min="0" max="100" defaultValue="100" />
                </Box>
                {/* Example sorting options */}
                <Box sx={{ marginTop: 2 }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold', marginTop: 1 }}>
                        Sort by
                    </Typography>
                    <select>
                        <option value="name">Name</option>
                        <option value="price">Price</option>
                    </select>
                </Box>
            </Box>
        </Box>
    );
}

export default MerchPage;
