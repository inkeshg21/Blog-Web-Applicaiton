import { useState } from 'react';
import { Button, TextField } from '@mui/material';

const PostForm = ({ onSubmit, post = {} }) => {
  const [title, setTitle] = useState(post.title || '');
  const [content, setContent] = useState(post.content || '');
  const [tags, setTags] = useState(post.tags ? post.tags.join(', ') : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, content, tags: tags.split(',') });
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Title"
        fullWidth
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        sx={{ marginBottom: '1rem' }}
      />
      <TextField
        label="Content"
        fullWidth
        multiline
        rows={5}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        sx={{ marginBottom: '1rem' }}
      />
      <TextField
        label="Tags (comma separated)"
        fullWidth
        value={tags}
        onChange={(e) => setTags(e.target.value)}
        sx={{ marginBottom: '1rem' }}
      />
      <Button variant="contained" type="submit">Submit</Button>
    </form>
  );
};

export default PostForm;
