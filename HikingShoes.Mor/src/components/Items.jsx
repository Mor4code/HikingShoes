import { useState } from 'react'
import IonIcon from '@reacticons/ionicons';



const product = [
    
      {
        id: 1,
        category: "Lightweight",
        name: "The Rock",
        type: "For ull days hikes",
        price:  80.99,
       imageSrc: "https://www.switchbacktravel.com/sites/default/files/image_fields/Best%20Of%20Gear%20Articles/Hiking%20and%20Backpacking/Hiking%20Boots/Salewa%20Mountain%20Trainer%20Lite%20Hiking%20Boot%20copy.jpg",
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',

    },
    {
        id: 2,
        category: "Lightweight",
        name: "The Bear",
        type: "Half day hikes",
        price: 70.99,
       imageSrc: "https://www.switchbacktravel.com/sites/default/files/image_fields/Best%20Of%20Gear%20Articles/Hiking%20and%20Backpacking/Hiking%20Boots/Danner%20Mountain%20600%20Leaf%20GTX%20hiking%20boot.jpg",
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip.',

    },
    {
        id: 3,
        category: "Lightweight",
        name: "The Miseducation of Lauryn Hill",
        type: "Lauryn Hill",
        price: 120.99,
       imageSrc: "https://www.switchbacktravel.com/sites/default/files/image_fields/field_imgs_inline/Scarpa%20Zodiac%20Plus%20GTX%20hiking%20boots.jpg",
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.'

    }
    ,
    {
        id: 4,
        category: "Lightweight",
        name: "The Miseducation of Lauryn Hill",
        type: "Lauryn Hill",
        price: 87.99,
       imageSrc: "https://www.switchbacktravel.com/sites/default/files/image_fields/Best%20Of%20Gear%20Articles/Hiking%20and%20Backpacking/Hiking%20Boots/Scarpa%20Rush%20TRK%20GTX%20Hiking%20Boots.jpg",
    },
    {
        id: 5,
        category: "Lightweight",
        name: "The Miseducation of Lauryn Hill",
        type: "Lauryn Hill",
        price: 100.99,
        imageSrc: "https://www.switchbacktravel.com/sites/default/files/image_fields/Best%20Of%20Gear%20Articles/Hiking%20and%20Backpacking/Hiking%20Boots/Hiking%20boot%20%28Keen%20Targhee%20IV%29.jpeg",
    }
    ,
    {
        id: 6,
        category: "Lightweight",
        name: "The Miseducation of Lauryn Hill",
        type: "Lauryn Hill",
        price: 240.99,
        imageSrc: "https://www.switchbacktravel.com/sites/default/files/image_fields/Best%20Of%20Gear%20Articles/Hiking%20and%20Backpacking/Hiking%20Boots/Asolo%20Falcon%20Evo%20GV%20Hiking%20Boots%20copy.jpg",
    }



  
  ]
  
  function Items() {
    const [favorites, setFavorites] = useState([]);
  
    const toggleFavorite = (id) => {
      setFavorites((prevFavorites) =>
        prevFavorites.includes(id)
          ? prevFavorites.filter((favId) => favId !== id)
          : [...prevFavorites, id]
      );
    };
  
    return (
      <div className="mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <h2 className="sr-only">Products</h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {product.map((record) => (
            <div key={record.id} className="group relative border rounded-lg shadow-sm bg-stone-200 hover:bg-stone-300">
              <div className="relative bg-white rounded-lg">
                <img
                  alt={record.imageAlt}
                  src={record.imageSrc}
                  className="max-w-xs h-48 mx-auto rounded-lg bg-gray-200 object-contain group-hover:scale-x-[-1]"
                  />
                <button
                  className="absolute top-2 right-2 text-stone-950 text-2xl bg-opacity-10 p-1 rounded-full  hover:bg-opacity-10 hover:text-stone-950"
                  onClick={() => toggleFavorite(record.id)}
                >
                  {favorites.includes(record.id) ? <IonIcon name="heart" /> : <IonIcon name="heart-outline" />}
                </button>
              </div>
              <div className="p-4">
                <h3 className="mt-4 text-xl text-gray-700 font-semibold">{record.name}</h3>
                <p>Category: {record.category}</p>
                <p>Type: {record.type}</p>
                <p className="mt-1 text-lg font-medium text-gray-900">${record.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default Items;
  