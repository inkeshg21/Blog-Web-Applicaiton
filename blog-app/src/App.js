import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CreatePostPage from './pages/CreatePostPage';
import PostDetailPage from './pages/PostDetailPage';
import TagPage from './pages/TagPage';
import PostsPage from './pages/PostsPage';
import { useState } from 'react';

// function App() {
//   const [posts, setPosts] = useState([
//     { id: 1, title: 'First Post', content: 'This is my first post.', tags: ['React', 'JavaScript'], comments: [], likes: 0 },
//     { id: 2, title: 'Second Post', content: 'Here is another post.', tags: ['WebDev', 'UI/UX'], comments: [], likes: 0 },
//     { id: 3, title: 'Third Post', content: 'This is a tagged post about React.', tags: ['React', 'Frontend'], comments: [], likes: 0 },
//   ]);
  

//   const addPost = (newPost) => {
//     const postWithId = { ...newPost, id: posts.length + 1, comments: [], likes: 0 };
//     setPosts([...posts, postWithId]);
//   };

//   const updatePost = (updatedPost) => {
//     setPosts(posts.map((post) => (post.id === updatedPost.id ? updatedPost : post)));
//   };

const App = () => {
  const [posts, setPosts] = useState([]); // State to hold posts

  const addPost = (newPost) => {
    setPosts([...posts, newPost]); // Update posts state
  };

  return (
    <Router>
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<HomePage posts={posts} />} />
          <Route path="/posts" element={<PostsPage />} />
          <Route path="/create" element={<CreatePostPage addPost={addPost} />} />
          {/* <Route path="/post/:id" element={<PostDetailPage posts={posts} updatePost={updatePost} />} /> */}
          <Route path="/tag/:tag" element={<TagPage posts={posts} />} />  {/* <-- New Route for TagPage */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
