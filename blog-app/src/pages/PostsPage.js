import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const PostsPage = ({ posts }) => {
  return (
    <Container maxWidth="lg" sx={{ marginTop: '2rem' }}>
      <Typography variant="h4" gutterBottom>
        Posts
      </Typography>
      {posts.length === 0 ? (
        <Typography variant="body1">No posts available.</Typography>
      ) : (
        posts.map((post) => (
          <Box
            key={post.id}
            sx={{
              marginBottom: '2rem',
              border: '1px solid #ccc',
              padding: '1rem',
              borderRadius: '5px',
            }}
          >
            <Typography variant="h5">{post.title}</Typography>
            <Typography variant="body2" paragraph>
              {post.content.substring(0, 100)}... {/* Display first 100 characters */}
            </Typography>
            <Button
              component={Link}
              to={`/post/${post.id}`}
              variant="contained"
              color="primary"
            >
              Read More
            </Button>
          </Box>
        ))
      )}
    </Container>
  );
};

export default PostsPage;
