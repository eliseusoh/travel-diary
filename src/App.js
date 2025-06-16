import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import PlaceDetails from './pages/PlaceDetails';
import Navbar from './components/Navbar';
import { useEffect, useState } from 'react';
import AddPlace from './pages/AddPlace';
import EditPlace from './pages/EditPlace';

//list of initial places
  export const initialPlaces = [
    {
        id: 'bahrain',
        name: 'Barbar, Bahrain',
        image: 'https://images.unsplash.com/photo-1547548731-e95343697eb4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFocmFpbnxlbnwwfHwwfHx8MA%3D%3D',
        description: 'The place where my family lives.'
    },
    {
        id: 'newyork',
        name: 'New York, New York',
        image: 'https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmV3JTIweW9ya3xlbnwwfHwwfHx8MA%3D%3D',
        description: 'The city that never sleeps.'
    },
    {
        id: 'london',
        name: 'London, UK',
        image: 'https://images.unsplash.com/photo-1512734099960-65a682cbfe2b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGxvbmRvbnxlbnwwfHwwfHx8MA%3D%3D',
        description: 'My home.'
    }
]

function App() {

  const [places, setPlaces] = useState(()=>{
    //getting the savedPlaces, runs on first mount 
    const savedPlaces = localStorage.getItem('places');
    //if there is something saved it'll return otherwise it'll just return those inital places
    return savedPlaces ? JSON.parse(savedPlaces) : initialPlaces;
  });

  //this hook runs everytime places changes
  //saves current places array to local storage
  useEffect(()=>{
    localStorage.setItem('places', JSON.stringify(places))
  },[places])

//taking the new place and adding it to list of places that already exists
const addNewPlace = (newPlace)=>{
  setPlaces((prevPlaces)=> [...prevPlaces, newPlace]);
};

//id is the id of place being updated and updatedPlace is object
const handleUpdatedPlace = (id, updatedPlace)=>{
  //receives current data - prevPlaces
  //iterate over each place and check if its the one we want to update based on the ID
  setPlaces(prevPlaces =>
    prevPlaces.map(place =>
      place.id === id ? {...place, ...updatedPlace} : place
    )
  );
};

  return (
    // tells app to listen to browser URL and show different pages based on it
    <Router>
      <Navbar/>
    {/* holds all individual pages */}
    <Routes>
      {/* each individual route */}
      <Route path='/' element={<Home places={places}/>} />
      <Route path='/places/:id' element={<PlaceDetails places={places}/>} />
      <Route path='/add' element={<AddPlace onAddPlace={addNewPlace}/>} />
      <Route path='/edit/:id' element ={<EditPlace places={places} onUpdatedPlace={handleUpdatedPlace}/>}/>
    </Routes>
    </Router>
  );
}

export default App;
