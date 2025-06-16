import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

//recieve onAddPlace as prop from App.js
//we are calling the onAddPlace function when user submits form
export default function AddPlace({onAddPlace}){

    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [description, setDescription] = useState('')

    //getting function to use furthur down - navigate('/')
    const navigate = useNavigate()

    const handleSubmit = (e) =>{
        //preventing default refresh when form is submitted
        e.preventDefault()

        //want to use the county name as the unique ID in URL
        const generateIdFromTitle = (name) =>{
            return name.trim().toLowerCase().replace(/\s+/g,'-');
        }

        //build an object representing a single place
        const newPlace = {
            //gives us a unique ID from above
            id: generateIdFromTitle(name),
            name,
            image,
            description
        };

        //calling the function passing in the new place
        onAddPlace(newPlace);
        //navigates back to homepage once added
        navigate('/')
    };

    return(
        <div className='add-place'>
            <h1>Add a New Place</h1>
            <form onSubmit={handleSubmit}>
                <input
                type='text'
                placeholder="Destination"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                />
                <input
                type='text'
                placeholder="Image URL"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                required
                />
                <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required>
                    </textarea>
                    <button type='submit'>Add Place</button>
            </form>
        </div>
    )




}