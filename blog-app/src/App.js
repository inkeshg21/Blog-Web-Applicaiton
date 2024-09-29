import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CreatePostPage from './pages/CreatePostPage';
import PostDetailPage from './pages/PostDetailPage';
import TagPage from './pages/TagPage';
import PostsPage from './pages/PostsPage';
import ProfilePage from './pages/ProfilePage'; // Import ProfilePage
import { useState } from 'react';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Add login state here

  const addPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const updatePost = (updatedPost) => {
    setPosts(
      posts.map((post) => (post.id === updatedPost.id ? updatedPost : post))
    );
  };

  const handleLogin = () => {
    setIsLoggedIn(true); // Update login state
  };

  return (
    <Router>
      <Header onLogin={handleLogin} isLoggedIn={isLoggedIn} />
      <div className="content">
        <Routes>
          <Route path="/" element={<HomePage posts={posts} />} />
          <Route path="/posts" element={<PostsPage posts={posts} />} />
          <Route
            path="/post/:id"
            element={<PostDetailPage posts={posts} updatePost={updatePost} />}
          />
          <Route
            path="/create"
            element={
              isLoggedIn ? (
                <CreatePostPage addPost={addPost} />
              ) : (
                <div>
                  <h2>Please log in to create a new post</h2>
                </div>
              )
            }
          />
          <Route path="/tag/:tag" element={<TagPage posts={posts} />} />
          <Route path="/profile" element={<ProfilePage />} /> {/* Add this route */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
