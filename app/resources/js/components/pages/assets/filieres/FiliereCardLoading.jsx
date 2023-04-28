import React from 'react';
import { Link } from 'react-router-dom';

function FiliereCardLoading() {
  return (
    <>
      <Link target='_blank' className='bg-gray-300 flex flex-col justify-between items-start w-64 h-60 rounded-md p-6 gap-4 animate-pulse'>
        <div className='bg-gray-400 w-full p-6 animate-pulse'></div>
        <div className='bg-gray-400 w-1/2 p-2 animate-pulse'></div>
      </Link>
    </>
  );
}

export default FiliereCardLoading;
