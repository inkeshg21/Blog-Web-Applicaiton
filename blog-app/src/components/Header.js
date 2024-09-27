import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  // Simulating login status, initially set to false (not logged in)
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to toggle login status (for demo purposes)
  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#3f51b5' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My Blog
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}> {/* Added gap for spacing between buttons */}
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/posts">Posts</Button>
          <Button color="inherit" component={Link} to="/create">New Post</Button>
          <Button color="inherit" component={Link} to="/about">About</Button>
          <Button color="inherit" component={Link} to="/contact">Contact</Button>

          {/* Conditionally show Login or Profile button */}
          {isLoggedIn ? (
            <Button color="inherit" component={Link} to="/profile">Profile</Button>
          ) : (
            <Button color="inherit" onClick={handleLogin}>Login</Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
