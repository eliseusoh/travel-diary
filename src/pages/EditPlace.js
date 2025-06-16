import React, {useState, useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function EditPlace({places, onUpdatedPlace}){
    const {id} = useParams();
    const navigate = useNavigate();

    //find the place we are editing
    const placeToEdit = places.find(place => place.id === id)

    //initialised with existing place data
    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [description, setDescription] = useState('')

    //when component mounts, populate state with place data
    useEffect(()=>{
        if(placeToEdit){
            setName(placeToEdit.name);
            setImage(placeToEdit.image);
            setDescription(placeToEdit.description);
        }
    },[placeToEdit])

    //handle form submit
    const handleUpdatedPlace = (e) =>{
        //prevent default refresh
        e.preventDefault()

        //update place data
        onUpdatedPlace(id, {name, image, description})
        //navigate back to home page after edit
        navigate('/')
    };

    if(!placeToEdit){
        return <p>Place Not Found.</p>
    }

    return(
        <div className='edit-place'>
        <form onSubmit={handleUpdatedPlace}>
            <h2>Edit Place</h2>

            <label>Name</label>
            <input
            value={name}
            onChange={e=> setName(e.target.value)}
            requried
            />
            <label>Image</label>
            <input
            value={image}
            onChange={e=>setImage(e.target.value)}
            required
            />
            <label>Description</label>
            <textarea
            value={description}
            onChange={e=> setDescription(e.target.value)}>
                required
            </textarea>

            <button type='submit'>Save</button>
        </form>
        </div>
    )
}