import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import NavBar from '../../../navBar/NavBar';

function ListFormateur() {
    const [formateurs, setFormateurs] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        axios.get('../../data/users.json')
        .then((response) => {
            const frms = response.data.filter(f => f.role[0].idRole === "3");
            setFormateurs(frms);
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);

    const handleSearch = (event) => {
        const query = event.target.value;
        setSearchQuery(query);
        const results = formateurs.filter((formateur) => {
        return (
            formateur.lastName.toLowerCase().includes(query.toLowerCase()) ||
            formateur.firstName.toLowerCase().includes(query.toLowerCase()) ||
            formateur.cin.toLowerCase().includes(query.toLowerCase()) ||
            formateur.telephone.toLowerCase().includes(query.toLowerCase())
        );
        });
        setSearchResults(results);
    };
    
    return (
        <>
            <div className='w-full h-screen flex flex-col'>
                <NavBar />
                <div className='w-full h-full basis-11/12 flex flex-col p-4 bg-slate-300'>
                    <div className="px-4 py-2 text-3xl font-medium">
                        Liste des formateurs
                    </div>
                    <div className='p-4'>
                        <form className='flex flex-row gap-2'>
                        <input
                            type='text'
                            placeholder='chercher un formateur ...'
                            className='w-full h-10 p-4 basis-5/6 flex justify-start items-center border-2 border-solid rounded-md border-extend-secondary-color-600 focus:outline-none focus:outline-2 focus:border-extend-secondary-color text-lg'
                            value={searchQuery}
                            onChange={handleSearch}
                        />
                        </form>
                    </div>
                    <div className='w-full h-full p-4'>
                    <table className='w-full block'>
                      <thead className='w-full table'>
                        <tr className='w-full p-4 border-b-2 flex justify-start items-center'>
                            <th className='w-1/12 text-start'>N°</th>
                            <th className='w-2/12 text-start'>Nom</th>
                            <th className='w-2/12 text-start'>Prénom</th>
                            <th className='w-2/12 text-start'>Date naissance</th>
                            <th className='w-2/12 text-start'>CIN</th>
                            <th className='w-2/12 text-start'>Téléphone</th>
                            <th className='w-2/12 text-start'>Filière</th>
                            <th className='w-3/12 text-start'></th>
                        </tr>
                      </thead>
                      <tbody className='w-full h-80 block overflow-y-scroll'>
                        {
                            searchResults.length > 0 ? (
                                searchResults.map((f)=> (
                                    <tr className='w-full p-4 border-b-2 flex justify-start items-center' key={f.id}>
                                        <td className='w-2/12 text-start'>{f.lastName}</td>
                                        <td className='w-2/12 text-start'>{f.firstName}</td>
                                        <td className='w-2/12 text-start'>{f.dateNaissance}</td>
                                        <td className='w-2/12 text-start'>{f.cin}</td>
                                        <td className='w-2/12 text-start'>{f.telephone}</td>
                                        <td className='w-3/12 flex flex-row justify-center gap-2'>
                                            <Link to={`/dashboardAdmin/users/ListFormateurs/ProfilFormateur/${f.id}`} className="p-2 rounded text-sm font-medium text-tertiary-color bg-blue-600">
                                                Profil
                                            </Link>
                                            <Link to={`/dashboardAdmin/users/ListFormateurs/EditFormateur/${f.id}`} className="p-2 rounded text-sm font-medium text-tertiary-color bg-green-600">
                                                Editer
                                            </Link>                                            
                                            <Link to="" className="p-2 rounded text-sm font-medium text-tertiary-color bg-red-600">
                                                Supprimer
                                            </Link>
                                        </td>
                                    </tr>
                                ))
                            )
                            : (
                                formateurs.map((f)=> (
                                    <tr className='w-full p-4 border-b-2 flex justify-start items-center' key={f.id}>
                                        <td className='w-2/12 text-start'>{f.lastName}</td>
                                        <td className='w-2/12 text-start'>{f.firstName}</td>
                                        <td className='w-2/12 text-start'>{f.dateNaissance}</td>
                                        <td className='w-2/12 text-start'>{f.cin}</td>
                                        <td className='w-2/12 text-start'>{f.telephone}</td>
                                        <td className='w-3/12 text-start flex flex-row justify-center gap-2'>
                                            <Link to={`/dashboardAdmin/users/ListFormateurs/ProfilFormateur/${f.id}`} className="p-2 rounded text-sm font-medium text-tertiary-color bg-blue-600">
                                                Profil
                                            </Link>
                                            <Link to={`/dashboardAdmin/users/ListFormateurs/EditFormateur/${f.id}`} className="p-2 rounded text-sm font-medium text-tertiary-color bg-green-600">
                                                Editer
                                            </Link>                                           
                                            <Link to="" className="p-2 rounded text-sm font-medium text-tertiary-color bg-red-600">
                                                Supprimer
                                            </Link>
                                        </td>
                                    </tr>
                                ))
                            )
                        }
                        </tbody>
                    </table>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ListFormateur;
