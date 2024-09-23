import React from 'react';

const Vegetable = ({ vegetable }) => {
  return (
    <div className='vegetable'> 
      <h2>{vegetable.name}</h2>
      <h5>Price: {vegetable.price} .Rs</h5>
      <p className={vegetable.inStock ? 'in-stock' : 'out-of-stock'}>Stock: {vegetable.inStock ? 'In Stock' : 'Out of Stock'}</p>
    </div>
  );
};

export default Vegetable;

