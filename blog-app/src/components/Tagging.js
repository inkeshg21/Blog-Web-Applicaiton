import { Chip } from '@mui/material';
import { Link } from 'react-router-dom';

const Tagging = ({ tags }) => {
  return (
    <div>
      {tags.map((tag, index) => (
        <Chip
          key={index}
          label={tag}
          component={Link}
          to={`/tag/${tag}`}  
          sx={{ margin: '0.5rem' }}
        />
      ))}
    </div>
  );
};

export default Tagging;
