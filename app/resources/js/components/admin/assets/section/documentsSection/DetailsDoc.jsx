import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import NavBar from '../../navBar/NavBar';

function DetailsDoc() {
    const [document, setDocument] = useState({});
    const { id } = useParams();

    useEffect(() => {
        axios.get('../../data/documents.json')
        .then(response => {
            setDocument(response.data);
            console.log(document);
        })
        .catch(error => console.log(error));
    }, [id]);

    return (
        <>
        <div className='w-full h-fit flex flex-col'>
            <NavBar />
            <div className='w-full h-full basis-11/12 flex flex-col p-4 bg-slate-300'>
                <div className="px-4 py-2 text-3xl font-medium">
                    Détails du document : {document.typeDoc}
                </div>
                <form className="p-6 flex flex-col gap-x-20 justify-start items-center">
                    <div className="flex flex-row flex-wrap gap-x-20">
                        <div className="w-2/5 flex flex-col gap-y-2">
                            <label className='font-medium text-lg p-2'>Type document :</label>
                            <input type='text' disabled value={document.typeDoc} className='w-full p-3 border-2 border-solid rounded-md border-extend-secondary-color-600' />
                        </div>
                        <div className="w-2/5 flex flex-col gap-y-2">
                            <label className='font-medium text-lg p-2'>Description :</label>
                            <textarea disabled value={document.description} className='w-full p-3 border-2 border-solid rounded-md border-extend-secondary-color-600' />
                        </div>
                        <div className="w-2/5 flex flex-col gap-y-2">
                            <label className='font-medium text-lg p-2'>Date d'envoi :</label>
                            <input type='text' disabled value={document.sendingDate} className='w-full p-3 border-2 border-solid rounded-md border-extend-secondary-color-600' />
                        </div>
                        <div className="w-2/5 flex flex-col gap-y-2">
                            <label className='font-medium text-lg p-2'>Date de réception :</label>
                            <input type='text' disabled value={document.receiveDate} className='w-full p-3 border-2 border-solid rounded-md border-extend-secondary-color-600' />
                        </div>
                        <div className="w-2/5 flex flex-col gap-y-2">
                            <label className='font-medium text-lg p-2'>Status du document :</label>
                            <input type='text' disabled value={document.status} className='w-full p-3 border-2 border-solid rounded-md border-extend-secondary-color-600' />
                        </div>
                    </div>
                    <div className="w-full py-6 text-3xl font-medium before:">
                        Détails du stagiaire :
                    </div>
                    <div className="flex flex-row flex-wrap gap-x-20">
                        <div className="w-2/5 flex flex-col gap-y-2">
                            <label className='font-medium text-lg p-2'>Nom :</label>
                            <input type='text' disabled value={document.user?.[0]?.lastName} className='w-full p-3 border-2 border-solid rounded-md border-extend-secondary-color-600' />
                        </div>
                        <div className="w-2/5 flex flex-col gap-y-2">
                            <label className='font-medium text-lg p-2'>Prénom :</label>
                            <input type='text' disabled value={document.user?.[0]?.firstName} className='w-full p-3 border-2 border-solid rounded-md border-extend-secondary-color-600' />
                        </div>
                        <div className="w-2/5 flex flex-col gap-y-2">
                            <label className='font-medium text-lg p-2'>Date de naissance :</label>
                            <input type='text' disabled value={document.user?.[0]?.dateNaissance} className='w-full p-3 border-2 border-solid rounded-md border-extend-secondary-color-600' />
                        </div>
                        <div className="w-2/5 flex flex-col gap-y-2">
                            <label className='font-medium text-lg p-2'>CIN :</label>
                            <input type='text' disabled value={document.user?.[0]?.cin} className='w-full p-3 border-2 border-solid rounded-md border-extend-secondary-color-600' />
                        </div>
                        <div className="w-2/5 flex flex-col gap-y-2">
                            <label className='font-medium text-lg p-2'>Email :</label>
                            <input type='text' disabled value={document.user?.[0]?.email} className='w-full p-3 border-2 border-solid rounded-md border-extend-secondary-color-600' />
                        </div>
                        <div className="w-2/5 flex flex-col gap-y-2">
                            <label className='font-medium text-lg p-2'>Addresse :</label>
                            <input type='text' disabled value={document.user?.[0]?.address} className='w-full p-3 border-2 border-solid rounded-md border-extend-secondary-color-600' />
                        </div>
                        <div className="w-2/5 flex flex-col gap-y-2">
                            <label className='font-medium text-lg p-2'>Téléphone :</label>
                            <input type='text' disabled value={document.user?.[0]?.telephone} className='w-full p-3 border-2 border-solid rounded-md border-extend-secondary-color-600' />
                        </div>
                        <div className="w-2/5 flex flex-col gap-y-2">
                            <label className='font-medium text-lg p-2'>Filière :</label>
                            <input type='text' disabled value={document.user?.[0]?.filiere[0].NameFormation} className='w-full p-3 border-2 border-solid rounded-md border-extend-secondary-color-600' />
                        </div>
                    </div>
                    <div className="w-full flex flex-row flex-wrap justify-start gap-x-20">
                        <div className="w-full h-full py-10 flex flex-row gap-2 justify-start items-end">
                            <button className=' w-24 h-12 p-4 text-lg font-medium text-tertiary-color flex flex-row gap-x-2 justify-center items-center bg-blue-600 rounded'>Accepter</button>
                            <button className=' w-24 h-12 p-4 text-lg font-medium text-tertiary-color flex flex-row gap-x-2 justify-center items-center bg-red-600 rounded'>Refuser</button>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    </>
    );    
}

export default DetailsDoc;