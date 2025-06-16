import React from "react";
import { useParams } from "react-router-dom";


export default function PlaceDetails({places}){
    // useParams() lets you access URL parameters eg /place/rome
    // it will return an object of all parameters in the current route
    const {id} = useParams();
    // find looks through places array and returns first place whose id matches the URL param
    const place = places.find((place)=> place.id === id)

    if(!place){
        return <div>Place not found.</div>
    }

    return(
        <div className='place-details'>
            <h1>{place.name}</h1>
            <div className='center-img'>
            <img src={place.image} alt={place.name} style={{maxWidth: '400px'}}/>
            </div>
            <p>{place.description}</p>
        </div>
    )
}