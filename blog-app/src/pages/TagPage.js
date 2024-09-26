import { useParams } from 'react-router-dom';
import PostList from '../components/PostList';

const TagPage = ({ posts }) => {
  const { tag } = useParams();  // <-- Get tag from URL parameters

  const filteredPosts = posts.filter(post => post.tags.includes(tag));

  return (
    <div>
      <h1>Posts tagged with "{tag}"</h1>
      {filteredPosts.length > 0 ? (
        <PostList posts={filteredPosts} />
      ) : (
        <p>No posts found for this tag.</p>
      )}
    </div>
  );
};

export default TagPage;
