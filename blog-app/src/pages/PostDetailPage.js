import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Button, TextField } from '@mui/material';
import { useParams } from 'react-router-dom';


const PostDetailPage = ({ posts, updatePost }) => {
  const { id } = useParams();
  const post = posts.find((post) => post.id === parseInt(id));

  const [likes, setLikes] = useState(post ? post.likes : 0);
  const [comments, setComments] = useState(post ? post.comments : []);
  const [commentInput, setCommentInput] = useState('');
  const [hasLiked, setHasLiked] = useState(false);

  // Check if user has already liked the post
  useEffect(() => {
    const likedPosts = JSON.parse(localStorage.getItem('likedPosts')) || [];
    if (likedPosts.includes(post.id)) {
      setHasLiked(true);
    }
  }, [post.id]);

  if (!post) {
    return (
      <Container>
        <Typography variant="h4">Post not found</Typography>
      </Container>
    );
  }

  const handleLike = () => {
    if (!hasLiked) {
      const newLikes = likes + 1;
      setLikes(newLikes);

      // Update the post's likes
      updatePost({ ...post, likes: newLikes });

      // Mark this post as liked in localStorage
      const likedPosts = JSON.parse(localStorage.getItem('likedPosts')) || [];
      likedPosts.push(post.id);
      localStorage.setItem('likedPosts', JSON.stringify(likedPosts));

      setHasLiked(true);
    }
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (commentInput.trim() !== '') {
      const newComments = [...comments, commentInput];
      setComments(newComments);
      setCommentInput('');

      // Update the post's comments
      updatePost({ ...post, comments: newComments });
    }
  };

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
      <Box sx={{ marginTop: '1rem' }}>
        <Button
          onClick={handleLike}
          variant="contained"
          color="primary"
          disabled={hasLiked}
        >
          {hasLiked ? 'Liked' : 'Like'} ({likes})
        </Button>
      </Box>

      {/* Comment Section */}
      <Box sx={{ marginTop: '2rem' }}>
        <Typography variant="h5" gutterBottom>
          Comments
        </Typography>
        <form onSubmit={handleCommentSubmit}>
          <TextField
            label="Add a comment"
            variant="outlined"
            fullWidth
            value={commentInput}
            onChange={(e) => setCommentInput(e.target.value)}
            sx={{ marginBottom: '1rem' }}
          />
          <Button type="submit" variant="contained" color="primary">
            Submit Comment
          </Button>
        </form>
        {comments.map((comment, index) => (
          <Box key={index} sx={{ marginTop: '1rem' }}>
            <Typography variant="body2">{comment}</Typography>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default PostDetailPage;
