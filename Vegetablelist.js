import React from 'react';
import Vegetable from './Vegetable';

const Vegetablelist = ({ vegetables }) => {
  return (
    <div className='container'>
      <h1>Vegetable List</h1>
      {vegetables.map((vegetable) => (
        <Vegetable vegetable={vegetable} />
      ))}

    </div>
  );
};

export default Vegetablelist;
