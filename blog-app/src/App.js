import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CreatePostPage from './pages/CreatePostPage';
import PostDetailPage from './pages/PostDetailPage';
import TagPage from './pages/TagPage';
import PostsPage from './pages/PostsPage';
import { useState } from 'react';


const App = () => {
  const [posts, setPosts] = useState([
    // Sample posts or start with an empty array
  ]);

  const addPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const updatePost = (updatedPost) => {
    setPosts(
      posts.map((post) => (post.id === updatedPost.id ? updatedPost : post))
    );
  };

  return (
    <Router>
      <Header />
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
            element={<CreatePostPage addPost={addPost} />}
          />
          <Route path="/tag/:tag" element={<TagPage posts={posts} />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
