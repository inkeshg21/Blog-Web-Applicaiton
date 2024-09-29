// src/pages/AuthPage.js
import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and signup
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Dummy login logic
    if (username === 'user' && password === 'password') {
      localStorage.setItem('isLoggedIn', true);
      navigate('/profile');
    } else {
      alert('Invalid credentials!');
    }
  };

  const handleSignup = () => {
    // Dummy signup logic
    if (username && password && email) {
      localStorage.setItem('isLoggedIn', true);
      navigate('/profile');
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        {isLogin ? 'Login' : 'Signup'}
      </Typography>

      {/* Common Username Field */}
      <TextField
        label="Username"
        fullWidth
        margin="normal"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      {/* Email Field (only for Signup) */}
      {!isLogin && (
        <TextField
          label="Email"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      )}

      {/* Password Field */}
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
        onClick={isLogin ? handleLogin : handleSignup}
        fullWidth
        sx={{ mt: 2 }}
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
    </Container>
  );
};

export default AuthPage;
