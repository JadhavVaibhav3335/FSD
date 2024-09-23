import React from 'react';

const Fruit = ({ fruit }) => {
  return (
    <div className='fruit'>
      <h2>{fruit.name}</h2>
      <h5>Price: {fruit.price} .Rs</h5>
      <p className={fruit.inStock ? 'in-stock' : 'out-of-stock'}>Stock: {fruit.inStock ? 'In Stock' : 'Out of Stock'}</p>
    </div>
  );
};
export default Fruit;
