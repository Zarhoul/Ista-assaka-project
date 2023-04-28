import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import NavBar from '../../../navBar/NavBar';

function EditNew() {
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
      <div className='w-full h-full flex flex-col'>
        <NavBar />
          <div className='w-full h-full basis-11/12 flex flex-col p-4 bg-slate-300'>
            <div className="px-4 py-2 text-3xl font-medium">
              Modifier nouveauté :
            </div>
            <div className="p-6 flex flex-row flex-wrap gap-x-20 justify-start items-center">
              <div className="w-2/5 flex flex-col gap-y-2">
                <label className='font-medium text-lg p-2'>Titre du nouveauté :</label>
                <input type='text' value="" className='w-full p-3 border-2 border-solid rounded-md border-extend-secondary-color-600' />
              </div>
              <div className="w-2/5 flex flex-col gap-y-2">
                <label className='font-medium text-lg p-2'>Description :</label>
                <textarea value="" className='w-full p-3 border-2 border-solid rounded-md border-extend-secondary-color-600' />
              </div>
              <div className="w-2/5 flex flex-col gap-y-2">
                <label className='font-medium text-lg p-2'>Date :</label>
                <input type='text' value="" className='w-full p-3 border-2 border-solid rounded-md border-extend-secondary-color-600' />
              </div>
              <div className="w-2/5 flex flex-col gap-y-2">
                <label className='font-medium text-lg p-2'>Type :</label>
                <input type='text' value="" className='w-full p-3 border-2 border-solid rounded-md border-extend-secondary-color-600' />
              </div>
              <div className="w-2/5 flex flex-col gap-y-2">
                <label className='font-medium text-lg p-2'>Date de début :</label>
                <input type='text' value="" className='w-full p-3 border-2 border-solid rounded-md border-extend-secondary-color-600' />
              </div>
              <div className="w-2/5 flex flex-col gap-y-2">
                <label className='font-medium text-lg p-2'>Date de fin :</label>
                <input type='text' value="" className='w-full p-3 border-2 border-solid rounded-md border-extend-secondary-color-600' />
              </div>
              <div className="w-2/5 flex flex-col gap-y-2">
                <label className='font-medium text-lg p-2'>Emplacement :</label>
                <input type='text' value="" className='w-full p-3 border-2 border-solid rounded-md border-extend-secondary-color-600' />
              </div>
              <div className="w-2/5 flex flex-col gap-y-2">
                <label className='font-medium text-lg p-2'>Image :</label>
                <input type='file' accept='.png,.jpg,.jpeg' value="" className='w-full p-3 border-2 border-solid rounded-md border-extend-secondary-color-600 file:border-0 file:rounded-sm file:bg-slate-500 file:text-white cursor-pointer' />
              </div>
              <div className="w-2/5 flex flex-col gap-y-2">
                <label className='font-medium text-lg p-2'>Attachements :</label>
                <input type='file' accept='.pdf,.doc,.docx' multiple value="" className='w-full p-3 border-2 border-solid rounded-md border-extend-secondary-color-600 file:border-0 file:rounded-sm file:bg-slate-500 file:text-white cursor-pointer' />
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default EditNew;
