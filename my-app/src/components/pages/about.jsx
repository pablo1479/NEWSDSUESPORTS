import React from 'react';
import { AppBar, Container, Grid, Modal, Toolbar, Typography } from '@mui/material';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Iframe from 'react-iframe';

function AboutPage() {
    return (
        <div>
            <header>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6">
                            SDSU ESports
                        </Typography>
                        <IconButton edge="start" color="inherit">
                            <YouTubeIcon />
                        </IconButton>
                        <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#loginModal">Log In</button>
                    </Toolbar>
                </AppBar>
            </header>

            <main>
                <img src="/path/to/your/image.jpg" alt="" className="center-image" />
                <Container>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                            <div className="container p-5">
                                <div className="about-content">
                                    <Typography variant="h2">Mission Statement:</Typography>
                                    <Typography variant="body1">
                                        Our mission is to revolutionize the SDSU ESports website, crafting an immersive digital platform that reflects the dynamic spirit of esports while serving as a vital resource for San Diego State University's diverse community. 
                                        <br/><br/>
                                        By prioritizing user experience and accessibility, we aim to redefine the standard for collegiate esports websites, offering intuitive navigation, engaging content, and seamless functionality. 
                                        <br/><br/>
                                        Through our innovative design, we aspire to empower students, faculty, and enthusiasts alike, fostering a vibrant esports culture that thrives on inclusivity, connectivity, and shared passion.
                                    </Typography>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <div className="container">
                                <Typography variant="body2" className="text-black-50">Here's how we play</Typography>
                                <Iframe url="https://www.youtube.com/embed/C_jk9_10Kp4" width="500" height="450" autoplay />
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </main>

            <Modal
                id="loginModal"
                aria-labelledby="loginModalLabel"
                aria-describedby="loginModalDescription"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="loginModalLabel">Log In</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">Username:</label>
                                    <input type="text" className="form-control" id="username" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password:</label>
                                    <input type="password" className="form-control" id="password" required />
                                </div>
                                <button type="submit" className="btn btn-primary">Log In</button>
                            </form>
                        </div>
                    </div>
                </div>
            </Modal>

            <footer className="mt-5">
                <Typography variant="body2">&copy; 2024 SDSU ESports Team. All rights reserved.</Typography>
            </footer>
        </div>
    );
}

export default AboutPage;
