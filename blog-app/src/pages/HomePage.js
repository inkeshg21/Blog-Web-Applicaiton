// src/pages/HomePage.js
import React from 'react';
import { Container, Typography, Button, Grid, Box } from '@mui/material';

const HomePage = () => {
  return (
    <Container maxWidth="lg" sx={{ marginTop: '2rem' }}>
      {/* Hero Section */}
      <Box sx={{ textAlign: 'center', marginBottom: '4rem' }}>
        <Typography variant="h3" gutterBottom>
          Create Your Blog Today!
        </Typography>
        <Typography variant="h6" paragraph>
          Join our community of writers and share your thoughts with the world.
        </Typography>
        <Button variant="contained" color="primary" href="/create">
          Start Writing
        </Button>
      </Box>

      {/* Features Section */}
      <Typography variant="h4" gutterBottom align="center">
        Why Choose Us?
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Box sx={{ textAlign: 'center', padding: '1rem' }}>
            <Typography variant="h5" gutterBottom>
              Easy to Use
            </Typography>
            <Typography>
              Our platform is user-friendly and easy to navigate. Create your blog with just a few clicks!
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box sx={{ textAlign: 'center', padding: '1rem' }}>
            <Typography variant="h5" gutterBottom>
              Customizable
            </Typography>
            <Typography>
              Personalize your blog with various themes and layouts to suit your style.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box sx={{ textAlign: 'center', padding: '1rem' }}>
            <Typography variant="h5" gutterBottom>
              Engage with Your Audience
            </Typography>
            <Typography>
              Connect with readers through comments, likes, and social sharing options.
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {/* Call to Action Section */}
      <Box sx={{ textAlign: 'center', margin: '4rem 0' }}>
        <Typography variant="h4" gutterBottom>
          Ready to Start Your Blogging Journey?
        </Typography>
        <Button variant="contained" color="primary" href="/create">
          Create Your First Post
        </Button>
      </Box>
    </Container>
  );
};

export default HomePage;
