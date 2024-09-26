// src/components/PostList.js
import { Card, CardContent, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const PostList = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => (
        <Card key={post.id} sx={{ margin: '1rem 0' }}>
          <CardContent>
            <Typography variant="h5">{post.title}</Typography>
            <Typography variant="body2">{post.content.substring(0, 100)}...</Typography>
            <Button component={Link} to={`/post/${post.id}`}>Read More</Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default PostList;
