import { useState } from 'react';
import { TextField, Button, List, ListItem } from '@mui/material';

const CommentSection = ({ comments, addComment }) => {
  const [comment, setComment] = useState('');

  const handleAddComment = () => {
    addComment(comment);
    setComment('');
  };

  return (
    <div>
      <TextField
        label="Leave a comment"
        fullWidth
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        sx={{ marginBottom: '1rem' }}
      />
      <Button onClick={handleAddComment} variant="contained">Comment</Button>
      <List>
        {comments.map((c, index) => (
          <ListItem key={index}>{c}</ListItem>
        ))}
      </List>
    </div>
  );
};

export default CommentSection;
