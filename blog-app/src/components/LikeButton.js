import { useState } from 'react';
import { Button } from '@mui/material';

const LikeButton = () => {
  const [likes, setLikes] = useState(0);

  return (
    <Button onClick={() => setLikes(likes + 1)}>
      👍 {likes} Likes
    </Button>
  );
};

export default LikeButton;
