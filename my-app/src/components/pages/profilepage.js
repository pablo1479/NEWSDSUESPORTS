import React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function ProfilePage() {
    // Sample user data
    const user = {
        name: 'John Doe',
        pictureUrl: 'https://example.com/profile-picture.jpg' // Replace with the actual URL of the user's profile picture
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 4 }}>
            {/* User Profile Picture */}
            <Avatar sx={{ width: 120, height: 120, mb: 2 }} alt={user.name} src={user.pictureUrl} />

            {/* User Name */}
            <Typography variant="h4" gutterBottom>
                {user.name}
            </Typography>

            {/* Other profile information can be added here */}
        </Box>
    );
}

export default ProfilePage;
