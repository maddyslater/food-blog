import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { getAllPosts } from '../services/datastore'

function Blog(props) {
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
                    <div key={id}>
                        <NavLink to={"posts/${post.id}"}>
                            <h2>{post.name}</h2>
                            <h2>{post.rate}</h2>
                            <h2>{post.date}</h2>
                            <p>{post.description}</p>
                        </NavLink>
                    </div>
                )
            })}
        </div>
    )
}

export default Blog;