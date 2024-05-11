import { addPost } from '../services/datastore'
import React, { useState } from 'react'

function NewPost(props) {

    const [restaurantName, setRestaurantName] = useState('');
    const [currDate, setDate] = useState('');
    const [currRate, setRate] = useState(0);
    const [currDescription, setDesc] = useState('');

    const onRestaurantNameChange = (event) => {
        setRestaurantName(event.target.value);
    };
    const onDateChange = (event) => {
        setDate(event.target.value);
    };
    const onRateChange = (event) => {
        setRate(Number(event.target.value));
    };
    const onDescChange = (event) => {
        setDesc(event.target.value);
    };


    const submitChanges = (event) => {
        if (restaurantName === '') {
            console.error("Please enter a restaurant name!");
        } else {
            const data = {
                name: restaurantName,
                date: currDate,
                rate: currRate,
                description: currDescription,
            };
            console.log("Data to be saved", data.description);
            addPost(data);
        };
    };
            
    return (
        <div id="new-post-block">
            <label className="new-post-label" htmlFor={"RestaurantName"}>Restaurant Name:</label>
            <input 
                className="new-post-input"
                id="RestaurantName"
                type="text"
                value={restaurantName}
                onChange={onRestaurantNameChange}
            />
            
            <label className="new-post-label" htmlFor={"DateVisited"}>Date Visited: </label>
            <input 
                className="new-post-input"
                id="DateVisited"
                type="text" 
                value={currDate} 
                onChange={onDateChange}
            />

            <label className="new-post-label" htmlFor={"Rate"}>Rate out of 10: </label>
            <input 
                className="new-post-input"
                id="Rate"
                type="number"
                value={currRate}
                onChange={onRateChange }    
            />

            <label className="new-post-label" htmlFor={"Description"}>Describe your experience: </label>
            <input 
                className="new-post-input"
                id="Description"
                type="text" 
                value={currDescription}
                onChange={onDescChange}
            />

            <button id="new-post-button" onClick={submitChanges}>Submit Post!</button>
        </div>
    );
}

export default NewPost;