import React from 'react';
import { Link } from 'react-router-dom';

function FiliereCard({ NameFormation, url}) {
  return (
    <>
      <Link to={url} target='_blank' className='flex flex-col justify-between items-start w-64 h-60 border-2 border-solid rounded-md border-extend-secondary-color-600 p-6 shadow-xl hover:scale-95 transition duration-300 hover:border-extend-secondary-color'>
        <div className='font-medium text-2xl break-words whitespace-normal overflow-hidden text-text-primary-color'>{NameFormation}</div>
        <div className='font-medium text-lg text-extend-secondary-color'>Plus détails</div>
      </Link>
    </>
  );
}

export default FiliereCard;
