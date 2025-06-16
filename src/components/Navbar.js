import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <nav>
            <Link to='/' style={{marginRight:'1rem'}}>Home</Link>
            <Link to='add'>Add Place</Link>
        </nav>
    )
}