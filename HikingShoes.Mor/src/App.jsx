import { useState } from 'react'
import IonIcon from '@reacticons/ionicons';
import Album from './components/Album.jsx';
import Header from './components/Header.jsx';
import Navbar from './components/Navbar.jsx';
import Items from './components/Items.jsx';
import Progress from './components/Progress.jsx';
import Subscribe from './components/Subscribe.jsx';



const DEFAULT_RECORDS = [
  {
      id: 1,
      category: "Lightweight",
      name: "The Rock",
      type: "For ull days hikes",
      price:  80.99,
      artworkUrl: "https://www.switchbacktravel.com/sites/default/files/image_fields/Best%20Of%20Gear%20Articles/Hiking%20and%20Backpacking/Hiking%20Boots/Salewa%20Mountain%20Trainer%20Lite%20Hiking%20Boot%20copy.jpg"
  },
  {
      id: 2,
      category: "Lightweight",
      name: "The Bear",
      type: "Half day hikes",
      price: 70.99,
      artworkUrl: "https://www.switchbacktravel.com/sites/default/files/image_fields/Best%20Of%20Gear%20Articles/Hiking%20and%20Backpacking/Hiking%20Boots/Danner%20Mountain%20600%20Leaf%20GTX%20hiking%20boot.jpg"
  },
  {
      id: 3,
      category: "Lightweight",
      name: "The Miseducation of Lauryn Hill",
      type: "Lauryn Hill",
      price: 120.99,
      artworkUrl: "https://www.switchbacktravel.com/sites/default/files/image_fields/field_imgs_inline/Scarpa%20Zodiac%20Plus%20GTX%20hiking%20boots.jpg"
  }
  ,
  {
      id: 4,
      category: "Lightweight",
      name: "The Miseducation of Lauryn Hill",
      type: "Lauryn Hill",
      price: 87.99,
      artworkUrl: "https://www.switchbacktravel.com/sites/default/files/image_fields/Best%20Of%20Gear%20Articles/Hiking%20and%20Backpacking/Hiking%20Boots/Scarpa%20Rush%20TRK%20GTX%20Hiking%20Boots.jpg"
  },
  {
      id: 5,
      category: "Lightweight",
      name: "The Miseducation of Lauryn Hill",
      type: "Lauryn Hill",
      price: 100.99,
      artworkUrl: "https://www.switchbacktravel.com/sites/default/files/image_fields/Best%20Of%20Gear%20Articles/Hiking%20and%20Backpacking/Hiking%20Boots/Hiking%20boot%20%28Keen%20Targhee%20IV%29.jpeg"
  }
  ,
  {
      id: 6,
      category: "Lightweight",
      name: "The Miseducation of Lauryn Hill",
      type: "Lauryn Hill",
      price: 240.99,
      artworkUrl: "https://www.switchbacktravel.com/sites/default/files/image_fields/Best%20Of%20Gear%20Articles/Hiking%20and%20Backpacking/Hiking%20Boots/Asolo%20Falcon%20Evo%20GV%20Hiking%20Boots%20copy.jpg"
  }
  
];

function App() {

<h1 className="text-4xl">Record Store</h1>
 
  const [records, setRecords] = useState(DEFAULT_RECORDS);

  // ability to favorite an album by tracking the id's of the albums that have been favorited in a state variable.
  const [favorites, setFavorites] = useState([]);
 
  // const toggleFavorite = (id) => {
  //     console.log(id);
  // }


  const toggleFavorite = (id) => {
 
    if(favorites.includes(id)) {
        // If it is in the array, the filter function will remove the id from the favorites array and update the state.
        setFavorites(favorites.filter((favId) => {
            return favId !== id;
        }));
        // If it is not in the array, we will add the id to the favorites array by using the spread operator to create a new array from the old array and add the new id to the end.
        // Only items that don’t match the given id remain in the list.
        // setFavorites(...) updates the state with the new list.

    } else {
        setFavorites([...favorites, id]);
    }

};


  return (
    <div>
        <Navbar/>   
        <Header/>
        <Items/>
        <div className="   p-8">
            <Progress/>
        </div>
        <Subscribe/>
      </div>

  );

}

export default App;