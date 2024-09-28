import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Dialog, TextField, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { Link } from 'react-router-dom';
import '../styles/Header.css'; // Ensure the correct path to your CSS file

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Authentication state
  const [openLoginDialog, setOpenLoginDialog] = useState(false); // State to control login modal
  const [username, setUsername] = useState(''); // Username for login
  const [password, setPassword] = useState(''); // Password for login

  // Open login modal
  const handleLoginClick = () => {
    setOpenLoginDialog(true);
  };

  // Close login modal
  const handleCloseLogin = () => {
    setOpenLoginDialog(false);
  };

  // Handle login
  const handleLogin = () => {
    if (username === 'user' && password === 'password') { // Simple check (replace with real authentication)
      setIsLoggedIn(true);
    }
    setOpenLoginDialog(false); // Close login modal after login
  };

  // Handle logout
  const handleLogout = () => {
    setIsLoggedIn(false); // Reset the logged in state
    setUsername('');
    setPassword('');
  };

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: 'primary' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/posts">Posts</Button>
            <Button color="inherit" component={Link} to="/create">New Post</Button>
            <Button color="inherit" component={Link} to="/about">About</Button>
            <Button color="inherit" component={Link} to="/contact">Contact</Button>
          </Box>
          <Box>
            {isLoggedIn ? (
              <>
                <Button color="inherit" component={Link} to="/profile">Profile</Button>
                <Button color="inherit" onClick={handleLogout}>Logout</Button>
              </>
            ) : (
              <>
                <Button color="inherit" onClick={handleLoginClick}>Login</Button>
                <Button variant="contained" color="primary" sx={{ marginLeft: 2 }}>Get Started</Button>
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Login Dialog */}
      <Dialog open={openLoginDialog} onClose={handleCloseLogin}>
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter your login credentials:
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Username"
            type="text"
            fullWidth
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Password"
            type="password"
            fullWidth
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseLogin}>Cancel</Button>
          <Button onClick={handleLogin}>Login</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Header;
