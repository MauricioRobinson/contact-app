import React from 'react';
import { Contacts } from './Contacts';

const Home = () => {
  return (
    <div>
      <h1 className='text-center text-2xl font-semibold mt-20'>
        Nextjs Contact App
      </h1>
      <Contacts />
    </div>
  );
};

export default Home;
