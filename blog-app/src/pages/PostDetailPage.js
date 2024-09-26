// src/pages/PostDetailPage.js
import React, { useState } from 'react';
import { Container, Typography, Box, Button, TextField } from '@mui/material';
import { useParams, Link } from 'react-router-dom';

const PostDetailPage = ({ posts }) => {
  const { id } = useParams();
  const post = posts.find((post) => post.id === parseInt(id));

  const [likes, setLikes] = useState(post.likes);
  const [comments, setComments] = useState(post.comments);
  const [commentInput, setCommentInput] = useState('');

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (commentInput) {
      setComments([...comments, commentInput]);
      setCommentInput('');
    }
  };

  if (!post) {
    return (
      <Container>
        <Typography variant="h4">Post not found</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ marginTop: '2rem' }}>
      <Typography variant="h3" gutterBottom>
        {post.title}
      </Typography>
      <Typography variant="body1" paragraph>
        {post.content}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        Hashtags: {post.hashtags.join(', ')}
      </Typography>
      <Button onClick={handleLike} variant="outlined" color="primary">
        Like {likes}
      </Button>
      <Box sx={{ marginTop: '2rem' }}>
        <Typography variant="h5" gutterBottom>Comments</Typography>
        <form onSubmit={handleCommentSubmit}>
          <TextField 
            label="Add a comment" 
            variant="outlined" 
            fullWidth 
            value={commentInput} 
            onChange={(e) => setCommentInput(e.target.value)} 
          />
          <Button type="submit" variant="contained" color="primary" sx={{ marginTop: '1rem' }}>
            Submit
          </Button>
        </form>
        {comments.map((comment, index) => (
          <Typography key={index} variant="body2" sx={{ marginTop: '1rem' }}>
            {comment}
          </Typography>
        ))}
      </Box>
      <Button component={Link} to="/posts" variant="outlined" color="primary">
        Back to Posts
      </Button>
    </Container>
  );
};

export default PostDetailPage;
