import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { getAllPosts } from '../services/datastore'

function BlogScroll(props) {
    const [posts, setPosts] = useState({});

    useEffect(() => {
        getAllPosts((postsData) => {
            setPosts(postsData);
        })
    }, []);

    return (
        <div>
            {Object.entries(posts).map(([id, post]) => {
                return (
                    <div key={id} className="blog-container">
                        <div className="blog-item">
                            <h2 className="blog-item-name">{post.name}</h2>
                            <h2 className="blog-item-date">Date Eaten: {post.date}</h2>
                            <h2 className="blog-item-rate">{post.rate}/10</h2>
                            <p className="blog-item-description">Comments: {post.description}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default BlogScroll;