import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Button, Box, Dialog, DialogContent, DialogTitle, TextField, Typography, Menu, MenuItem } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [openAuthDialog, setOpenAuthDialog] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const loggedInStatus = localStorage.getItem('isLoggedIn');
    if (loggedInStatus) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    navigate('/');
  };

  const handleLogin = () => {
    // Dummy login logic
    if (username === 'user' && password === 'password') {
      localStorage.setItem('isLoggedIn', true);
      setIsLoggedIn(true);
      setOpenAuthDialog(false);
    } else {
      alert('Invalid credentials!');
    }
  };

  const handleSignup = () => {
    // Dummy signup logic
    if (username && password && email) {
      localStorage.setItem('isLoggedIn', true);
      setIsLoggedIn(true);
      setOpenAuthDialog(false);
    } else {
      alert('Please fill in all fields.');
    }
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: '#3f51b5' }}>
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
                <Button
                  color="inherit"
                  component={Link}
                  to="/profile" // Link to ProfilePage
                >
                  Profile
                </Button>
                {/* Other buttons */}
              </>
            ) : (
              <Button color="inherit" onClick={() => setOpenAuthDialog(true)}>Login / Signup</Button>
            )}

          </Box>
        </Toolbar>
      </AppBar>

      {/* Add some padding to the content below the fixed header */}
      <div style={{ paddingTop: '64px' }}> {/* Adjust this value based on AppBar height */}
        {/* Authentication Dialog (Login / Signup Modal) */}
        <Dialog open={openAuthDialog} onClose={() => setOpenAuthDialog(false)}>
          <DialogTitle>{isLogin ? 'Login' : 'Signup'}</DialogTitle>
          <DialogContent>
            <Typography variant="body2" gutterBottom>
              {isLogin ? 'Please login to your account' : 'Create a new account'}
            </Typography>
            {/* Username */}
            <TextField
              label="Username"
              fullWidth
              margin="normal"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {/* Email (only for Signup) */}
            {!isLogin && (
              <TextField
                label="Email"
                fullWidth
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            )}
            {/* Password */}
            <TextField
              label="Password"
              type="password"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {/* Submit Button */}
            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2 }}
              onClick={isLogin ? handleLogin : handleSignup}
            >
              {isLogin ? 'Login' : 'Signup'}
            </Button>

            {/* Toggle between Login and Signup */}
            <Box sx={{ textAlign: 'center', marginTop: 2 }}>
              <Button color="secondary" onClick={() => setIsLogin(!isLogin)}>
                {isLogin
                  ? "Don't have an account? Sign up"
                  : 'Already have an account? Login'}
              </Button>
            </Box>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default Header;
