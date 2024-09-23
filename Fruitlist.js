import React from 'react';
import Fruit from './Fruit';

const Fruitlist = ({ fruits }) => {
  return (
    <div className='container'>
      <h1>Fruit List</h1>
      {fruits.map((fruit) => (
        <Fruit fruit={fruit} />
      ))}
    </div>
  );
};

export default Fruitlist;
