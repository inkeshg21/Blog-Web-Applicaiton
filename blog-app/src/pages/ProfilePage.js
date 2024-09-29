// src/pages/ProfilePage.js
import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Avatar,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';

const ProfilePage = () => {
  const [username, setUsername] = useState('user'); // Replace with actual user data
  const [email, setEmail] = useState('user@example.com'); // Replace with actual user data
  const [phone, setPhone] = useState('1234567890'); // Replace with actual user data
  const [country, setCountry] = useState('Nepal'); // Replace with actual user data
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [image, setImage] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  // Handle image upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  // Handle password reset
  const handlePasswordReset = () => {
    if (newPassword === confirmPassword) {
      alert('Password reset successfully!'); // Replace with real password reset logic
      setOpenDialog(false);
    } else {
      alert('Passwords do not match.');
    }
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4">User Profile</Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 3 }}>
        <Avatar
          alt="User Profile"
          src={image}
          sx={{ width: 100, height: 100, marginRight: 2 }}
        />
        <Button variant="contained" component="label">
          Upload Image
          <input type="file" hidden accept="image/*" onChange={handleImageUpload} />
        </Button>
      </Box>

      <TextField
        label="Username"
        variant="outlined"
        fullWidth
        margin="normal"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Phone Number"
        variant="outlined"
        fullWidth
        margin="normal"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <TextField
        label="Country"
        variant="outlined"
        fullWidth
        margin="normal"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      />
      <Button
        variant="outlined"
        onClick={() => setOpenDialog(true)}
        sx={{ marginTop: 2 }}
      >
        Reset Password
      </Button>

      {/* Password Reset Dialog */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Reset Password</DialogTitle>
        <DialogContent>
          <TextField
            label="New Password"
            type="password"
            fullWidth
            margin="normal"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <TextField
            label="Confirm Password"
            type="password"
            fullWidth
            margin="normal"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button onClick={handlePasswordReset}>Reset Password</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ProfilePage;
