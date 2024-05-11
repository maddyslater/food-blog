// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5A5DBrfBFlkXrgywbQVJtPc0mjMV9E5A",
  authDomain: "food-website-f527e.firebaseapp.com",
  databaseURL: "https://food-website-f527e-default-rtdb.firebaseio.com",
  projectId: "food-website-f527e",
  storageBucket: "food-website-f527e.appspot.com",
  messagingSenderId: "525631699985",
  appId: "1:525631699985:web:b5d2c210fe9dd64861c5b0",
  measurementId: "G-BBL9CQ42HG"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export const postRef = database.ref('posts');


// ADD NEW BLOG POST TO DATABASE
export const addPost = (postData) => {
    const newPostRef = postRef.push();
    const postID = newPostRef.key;
    newPostRef.set({
        id: postID,
        name: postData.name,
        date: postData.date,
        rate: postData.rate,
        description: postData.description,
    });
};

// UPDATE BLOG POST IN DATABASE
export const updatePost = (postId, postData) => {
  if (postId !== null) {
    postRef.child(postId).update(postData);
  } else {
    console.error("Error with postId:", postId);
  }
}

// DELETE BLOG POST FROM DATABASE
export const deletePost = (postId) => {
  if (postId !== null) {
    postRef.child(postId).remove();
  } else {
    console.error("Error with postId:", postId);
  }
}

// RETRIEVE ALL BLOG POSTS IN DATABASE
export const getAllPosts = (callback) => {
  postRef.on('value', (snapshot) => {
    const postsData = snapshot.val();
    callback(postsData);
  })
}

// RETRIEVE SPECIFIC POST FROM DATABSE
export const getPost = (postId, callback) => {
  console.log("Requested postID:", postId);
  postRef.child(postId).on('value', (snapshot) => {
    const postData = snapshot.val();
    callback(postData);
  })
}