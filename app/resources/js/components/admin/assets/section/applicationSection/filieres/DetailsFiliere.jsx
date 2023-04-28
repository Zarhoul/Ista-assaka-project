import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import NavBar from '../../../navBar/NavBar';

function DetailsFiliere() {
  const [filiere, setFiliere] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios.get(`${window.location.origin}/api/filiere`)
      .then(response => {
        const filiere = response.data.data.find(f => f.idFormation === parseInt(id));
        setFiliere(filiere);
      })
      .catch(error => console.log(error));
  }, [id]);

  return (
    <>
      <div className='w-full h-screen flex flex-col'>
        <NavBar />
          <div className='w-full h-full basis-11/12 flex flex-col p-4 bg-slate-300'>
            <div className="px-4 py-2 text-3xl font-medium">
              Details du filiere : {filiere.NameFormation}
            </div>
            <div className="p-6 flex flex-row flex-wrap gap-x-20 justify-start items-center">
              <div className="w-2/5 flex flex-col gap-y-2">
                <label className='font-medium text-lg p-2'>Titre du filière :</label>
                <input type='text' value={filiere.NameFormation} disabled className='w-full p-3 border-2 border-solid rounded-md border-extend-secondary-color-600' />
              </div>
              <div className="w-2/5 flex flex-col gap-y-2">
                <label className='font-medium text-lg p-2'>Niveau :</label>
                <input type='text' value={filiere.NiveauFormation} disabled className='w-full p-3 border-2 border-solid rounded-md border-extend-secondary-color-600' />
              </div>
              <div className="w-2/5 flex flex-col gap-y-2">
                <label className='font-medium text-lg p-2'>Type :</label>
                <input type='text' value={filiere.TypeFormation} disabled className='w-full p-3 border-2 border-solid rounded-md border-extend-secondary-color-600' />
              </div>
              <div className="w-2/5 flex flex-col gap-y-2">
                <label className='font-medium text-lg p-2'>Mode :</label>
                <input type='text' value={filiere.ModeFormation} disabled className='w-full p-3 border-2 border-solid rounded-md border-extend-secondary-color-600' />
              </div>
              <div className="w-2/5 flex flex-col gap-y-2">
                <label className='font-medium text-lg p-2'>Niveau scolaire :</label>
                <input type='text' value={filiere.NiveauScolaire} disabled className='w-full p-3 border-2 border-solid rounded-md border-extend-secondary-color-600' />
              </div>
              <div className="w-2/5 flex flex-col gap-y-2">
                <label className='font-medium text-lg p-2'>Année d'étude :</label>
                <input type='text' value={filiere.AnneeEtude} disabled className='w-full p-3 border-2 border-solid rounded-md border-extend-secondary-color-600' />
              </div>
              <div className="w-2/5 flex flex-col gap-y-2">
                <label className='font-medium text-lg p-2'>Lien du filière :</label>
                <input type='text' value={filiere.url} disabled className='w-full p-3 border-2 border-solid rounded-md border-extend-secondary-color-600' />
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default DetailsFiliere;
