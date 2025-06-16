import React from "react";
import { Link } from "react-router-dom";


export default function Home({places}){
    return(
        <div>
            <h1>My Travel Diary 🗺️</h1>
            {/* displaying each place on homepage, as clickable link */}
            <div className='place-grid'>
            {places.map(place =>(
                <Link key={place.id} 
                to={`/places/${place.id}`} 
                style={{textDecoration: 'none', color: 'inherit'}}>
                <div className='place-card'>
                    <h2>{place.name} </h2>
                    <img src={place.image} alt={place.name}/>
                    <Link to={`/edit/${place.id}`}>
                    <button>Edit</button>
                    </Link>
                </div>
                </Link>
            ))}
            </div>
        </div>
    )
}