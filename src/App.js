import React, { Suspense, lazy } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Blog = lazy(() => import('./components/Blog/Blog'));
const DetailBlog = lazy(() => import('./components/Blog/DetailBlog'));

function App() {
  return (
    <div className="App">
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Blog />} />
            <Route path="/blog/:id" element={<DetailBlog />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
