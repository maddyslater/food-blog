import React, {useEffect, useState} from 'react'
import {NavLink, useParams} from 'react-router-dom'
import {getPost} from '../services/datastore'

function Post(props) {
    console.log("here");
    const { postId } = useParams();

    const [post, setPost] = useState({});

    console.log("here");

    useEffect(() => {
        getPost(postId, (postData) => {
            setPost(postData);
        });
    }, []);

    return (
        <div>
            <h1>WE MADE IT!</h1>
        </div>

    )
}

export default Post;