import React, { useEffect, useState } from 'react';
import './App.css';

function Item() {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    fetch('/products')
      .then((res) => res.json())
      .then((itemArrays) => {
        setItems(itemArrays);
      });
  }, []);

  const handleCardClick = (item) => {
    setSelectedAnimal(item);
  };

  const handleCloseClick = () => {
    setSelectedItem(null);
  };

  return (
    <div className="App">
      {items.map((item) => (
        <div key={item.id} className="animal-card">
          <div className="card" onClick={() => handleCardClick(animal)}>
            <div className="image-card">
              <img src={item.image} alt="item" />
            </div>
            <div className="text-card">
              <h2 className="animal-name">{item.name}</h2>
              <p className="animal-description">{item.description}</p>
            </div>
          </div>
        </div>
      ))}

      {selectedItem && (
        <div className="overlay" onClick={handleCloseClick}>
          <div className="zoomed-card">
            <img src={selectedItem.image} alt="animal" />
            <div className="text-card">
              <h2 className="animal-name">{selectedItem.name}</h2>
              <p className="animal-description">{selectedItem.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Item;