// new component called Album that will display the card we've been working on
import React from 'react';
import IonIcon from '@reacticons/ionicons';


// Since the state of the favorites is stored in the App component, we need to pass the favorites state to the Album component as a prop
const Album = ({ record, favorites, toggleFavorite }) => {
    return (
        <div className="bg-gray-200 rounded-lg shadow-md overflow-hidden transform">
            <img src={record.artworkUrl} className="w-full h-64 object-fill" />
            <div className="p-2">
                <p className="font-semibold"> {record.name}</p> <p> Category: {record.category}</p> Type: {record.type}
                <p>Price: ${record.price.toFixed(2)}</p>
                <button className="text-red-600 " onClick={() => toggleFavorite(record.id)}>
                {favorites.includes(record.id) ? <IonIcon name="heart" /> : <IonIcon name="heart-outline" />}
                </button>
            </div>
        </div>
        );
    };
     
    export default Album;