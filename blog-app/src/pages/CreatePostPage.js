// src/pages/CreatePostPage.js
import React, { useState } from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const CreatePostPage = ({ addPost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [hashtags, setHashtags] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      title,
      content,
      hashtags: hashtags.split(',').map(tag => tag.trim()), // Split hashtags by commas
      likes: 0,
      comments: []
    };
    addPost(newPost); // Call the function to add post
    navigate('/posts'); // Navigate to posts page
  };

  return (
    <Container maxWidth="md" sx={{ marginTop: '2rem' }}>
      <Typography variant="h4" gutterBottom>
        Create New Post
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField 
          label="Title" 
          variant="outlined" 
          fullWidth 
          margin="normal" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
        />
        <TextField 
          label="Content" 
          variant="outlined" 
          fullWidth 
          margin="normal" 
          multiline 
          rows={4} 
          value={content} 
          onChange={(e) => setContent(e.target.value)} 
        />
        <TextField 
          label="Hashtags (comma separated)" 
          variant="outlined" 
          fullWidth 
          margin="normal" 
          value={hashtags} 
          onChange={(e) => setHashtags(e.target.value)} 
        />
        <Button type="submit" variant="contained" color="primary">Publish</Button>
      </form>
    </Container>
  );
};

export default CreatePostPage;
