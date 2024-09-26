// src/components/Footer.js
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Box 
      sx={{ 
        backgroundColor: '#f5f5f5', 
        padding: '2rem 0', 
        textAlign: 'center',
        marginTop: 'auto'
      }}
    >
      <Typography variant="h6" gutterBottom>
        Stay Connected
      </Typography>
      <Box sx={{ marginBottom: '1rem' }}>
        <Button component={Link} to="/about" sx={{ margin: '0 0.5rem' }}>About</Button>
        <Button component={Link} to="/contact" sx={{ margin: '0 0.5rem' }}>Contact</Button>
        <Button component={Link} to="/privacy" sx={{ margin: '0 0.5rem' }}>Privacy Policy</Button>
      </Box>
      <Typography variant="body2" color="textSecondary">
        © {new Date().getFullYear()} My Blog. All rights reserved.
      </Typography>
      <Box sx={{ marginTop: '1rem' }}>
        <Typography variant="body2" color="textSecondary">
          Follow us on:
        </Typography>
        {/* You can add icons for social media links here */}
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 0.5rem' }}>
          Twitter
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 0.5rem' }}>
          Facebook
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 0.5rem' }}>
          Instagram
        </a>
      </Box>
    </Box>
  );
};

export default Footer;
