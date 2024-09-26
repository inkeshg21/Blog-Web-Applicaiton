import { Card, CardContent, Typography } from '@mui/material';
import CommentSection from './CommentSection';
import LikeButton from './LikeButton';
import Tagging from './Tagging';

const PostDetails = ({ post, updatePost }) => {
  const handleLike = () => {
    updatePost({ ...post, likes: post.likes + 1 });
  };

  const handleAddComment = (newComment) => {
    updatePost({ ...post, comments: [...post.comments, newComment] });
  };

  return (
    <Card sx={{ margin: '2rem 0' }}>
      <CardContent>
        <Typography variant="h3">{post.title}</Typography>
        <Typography variant="body1">{post.content}</Typography>
        <Tagging tags={post.tags} />
        <LikeButton likes={post.likes} onLike={handleLike} />
        <CommentSection comments={post.comments} addComment={handleAddComment} />
      </CardContent>
    </Card>
  );
};

export default PostDetails;
