import {React, useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { getAllPosts } from '../services/datastore'
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import '../stylesheet.css'

function BlogCarousel(props) {
    const [posts, setPosts] = useState({});

    useEffect(() => {
        getAllPosts((postsData) => {
            setPosts(postsData);
        })
    }, []);

    return (
        <div className='blog-container'>
            <h1 className="blog-title">Places we've eaten!</h1>
            <Carousel showArrows={true} infiniteLoop={true} useKeyboardArrows={true} autoPlay={true} stopOnHover={true} >
                {Object.entries(posts).map(([id, post]) => {
                    return (
                        <div key={id} >
                            {/* <NavLink className='blog-item' to={`posts/${post.id}`}> */}
                            <div className='blog-item'>
                                <h2 className="blog-item-name">{post.name}</h2>
                                <h2 className="blog-item-date">Date Eaten: {post.date}</h2>
                                <h2 className="blog-item-rate">{post.rate}/10</h2>
                                <p className="blog-item-description">Comments: {post.description}</p>
                            {/* </NavLink> */}
                            </div>
                        </div>
                )
            })}
            </Carousel>
        </div>
    )
}

export default BlogCarousel;