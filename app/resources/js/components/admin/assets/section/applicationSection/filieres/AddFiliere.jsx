import React from 'react';

import NavBar from '../../../navBar/NavBar';

function AddFiliere() {

    return (
        <>
        <div className='w-full h-full flex flex-col'>
            <NavBar />
            <div className='w-full h-full basis-11/12 flex flex-col p-4 bg-slate-300'>
                <div className="px-4 py-2 text-3xl font-medium">
                    Ajouter une nouvelle filière
                </div>
                <form className="p-6 flex flex-row flex-wrap gap-x-20 justify-start items-center">
                <div className="w-2/5 flex flex-col gap-y-2">
                <label className='font-medium text-lg p-2'>Nom du filière :</label>
                <input type='text' value="" className='w-full p-3 border-2 border-solid rounded-md border-extend-secondary-color-600' />
              </div>
              <div className="w-2/5 flex flex-col gap-y-2">
                <label className='font-medium text-lg p-2'>Niveau :</label>
                <input type='text' value="" className='w-full p-3 border-2 border-solid rounded-md border-extend-secondary-color-600' />
              </div>
              <div className="w-2/5 flex flex-col gap-y-2">
                <label className='font-medium text-lg p-2'>Type :</label>
                <input type='text' value="" className='w-full p-3 border-2 border-solid rounded-md border-extend-secondary-color-600' />
              </div>
              <div className="w-2/5 flex flex-col gap-y-2">
                <label className='font-medium text-lg p-2'>Mode :</label>
                <input type='text' value="" className='w-full p-3 border-2 border-solid rounded-md border-extend-secondary-color-600' />
              </div>
              <div className="w-2/5 flex flex-col gap-y-2">
                <label className='font-medium text-lg p-2'>Niveau scolaire :</label>
                <input type='text' value="" className='w-full p-3 border-2 border-solid rounded-md border-extend-secondary-color-600' />
              </div>
              <div className="w-2/5 flex flex-col gap-y-2">
                <label className='font-medium text-lg p-2'>Année d'étude :</label>
                <input type='text' value="" className='w-full p-3 border-2 border-solid rounded-md border-extend-secondary-color-600' />
              </div>
              <div className="w-2/5 flex flex-col gap-y-2">
                <label className='font-medium text-lg p-2'>Lien du filière :</label>
                <input type='text' value="" className='w-full p-3 border-2 border-solid rounded-md border-extend-secondary-color-600' />
              </div>
                <div className="w-full h-full py-6 flex flex-col justify-center items-start">
                    <button className=' w-24 h-12 p-4 text-sm font-medium text-tertiary-color flex flex-row gap-x-2 justify-center items-center bg-primary-color rounded'>Ajouter</button>
                </div>
                </form>
            </div>
        </div>
    </>
    );    
}

export default AddFiliere;
