import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import './stylesheet.css'
import { addPost, getPost } from './services/datastore'
import Navigation from './components/navigation'
import Home from './components/home'
import BlogScroll from './components/blogscroll'
import BlogCarousel from './components/blogcarousel'
import Post from './components/post'
import NewPost from './components/newpost'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogcarousel" element={<BlogCarousel />} />
          <Route path="/blogscroll" element={<BlogScroll />} />
          <Route path="/posts/new" element={<NewPost />} />
          <Route path="/posts/:postId" element={<Post />} />
          <Route path="*" element={<div>Post not found</div>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
