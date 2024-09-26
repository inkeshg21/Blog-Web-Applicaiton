// src/pages/PostsPage.js
import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const PostsPage = ({ posts }) => {
  return (
    <Container maxWidth="lg" sx={{ marginTop: '2rem' }}>
      <Typography variant="h4" gutterBottom>
        Posts
      </Typography>
      {posts.map((post) => (
        <Box key={post.id} sx={{ marginBottom: '2rem', border: '1px solid #ccc', padding: '1rem', borderRadius: '5px' }}>
          <Typography variant="h5">
            <Link to={`/post/${post.id}`} style={{ textDecoration: 'none', color: '#3f51b5' }}>
              {post.title}
            </Link>
          </Typography>
          <Typography variant="body2" paragraph>
            {post.content}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Hashtags: {post.hashtags.join(', ')}
          </Typography>
        </Box>
      ))}
    </Container>
  );
};

export default PostsPage;
