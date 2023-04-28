import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import NavBar from '../../../navBar/NavBar';

function DetailsNew() {
  const [nouveaute, setNouveaute] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios.get('../../data/news.json')
      .then(response => {
        const nouveaute = response.data.find(n => n.id === parseInt(id));
        setNouveaute(nouveaute);
      })
      .catch(error => console.log(error));
  }, [id]);

  return (
    <>
      <div className='w-full h-screen flex flex-col'>
        <NavBar />
          <div className='w-full h-full basis-11/12 flex flex-col p-4 bg-slate-300'>
            <div className="px-4 py-2 text-3xl font-medium">
              Details du nouveauté : {nouveaute.title}
            </div>
            <div className="p-6 flex flex-row flex-wrap gap-x-20 justify-start items-center">
              <div className="w-2/5 flex flex-col gap-y-2">
                <label className='font-medium text-lg p-2'>Titre du nouveauté :</label>
                <input type='text' value={nouveaute.title} disabled className='w-full p-3 border-2 border-solid rounded-md border-extend-secondary-color-600' />
              </div>
              <div className="w-2/5 flex flex-col gap-y-2">
                <label className='font-medium text-lg p-2'>Niveau :</label>
                <textarea value={nouveaute.description} disabled className='w-full p-3 border-2 border-solid rounded-md border-extend-secondary-color-600' />
              </div>
              <div className="w-2/5 flex flex-col gap-y-2">
                <label className='font-medium text-lg p-2'>Date :</label>
                <input type='text' value={nouveaute.date} disabled className='w-full p-3 border-2 border-solid rounded-md border-extend-secondary-color-600' />
              </div>
              <div className="w-2/5 flex flex-col gap-y-2">
                <label className='font-medium text-lg p-2'>Type :</label>
                <input type='text' value={nouveaute.date} disabled className='w-full p-3 border-2 border-solid rounded-md border-extend-secondary-color-600' />
              </div>
              <div className="w-2/5 flex flex-col gap-y-2">
                <label className='font-medium text-lg p-2'>Date de début :</label>
                <input type='text' value={nouveaute.dateDebut} disabled className='w-full p-3 border-2 border-solid rounded-md border-extend-secondary-color-600' />
              </div>
              <div className="w-2/5 flex flex-col gap-y-2">
                <label className='font-medium text-lg p-2'>Date de fin :</label>
                <input type='text' value={nouveaute.dateFin} disabled className='w-full p-3 border-2 border-solid rounded-md border-extend-secondary-color-600' />
              </div>
              <div className="w-2/5 flex flex-col gap-y-2">
                <label className='font-medium text-lg p-2'>Emplacement :</label>
                <input type='text' value={nouveaute.emplacement} disabled className='w-full p-3 border-2 border-solid rounded-md border-extend-secondary-color-600' />
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default DetailsNew;
