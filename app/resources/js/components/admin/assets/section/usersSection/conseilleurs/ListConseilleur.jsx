import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import NavBar from '../../../navBar/NavBar';

function ListConseilleur() {
    const [conseilleurs, setConseilleurs] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        axios.get('../../data/users.json')
        .then((response) => {
            const cons = response.data.filter(c => c.role[0].idRole === "2");
            setConseilleurs(cons);
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);

    const handleSearch = (event) => {
        const query = event.target.value;
        setSearchQuery(query);
        const results = conseilleurs.filter((conseiller) => {
        return (
            conseiller.lastName.toLowerCase().includes(query.toLowerCase()) ||
            conseiller.firstName.toLowerCase().includes(query.toLowerCase()) ||
            conseiller.cin.toLowerCase().includes(query.toLowerCase()) ||
            conseiller.telephone.toLowerCase().includes(query.toLowerCase())
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
                        Liste des conseilleurs
                    </div>
                    <div className='p-4'>
                        <form className='flex flex-row gap-2'>
                        <input
                            type='text'
                            placeholder='chercher un conseilleur ...'
                            className='w-full h-10 p-4 basis-5/6 flex justify-start items-center border-2 border-solid rounded-md border-extend-secondary-color-600 focus:outline-none focus:outline-2 focus:border-extend-secondary-color text-lg'
                            value={searchQuery}
                            onChange={handleSearch}
                        />                           
                        </form>
                    </div>
                    <div className='w-full p-4'>
                    <table className='w-full flex flex-col'>
                        <tr className='w-full p-4 border-b-2 flex justify-center items-center'>
                            <th className='basis-1/5 text-start'>Nom</th>
                            <th className='basis-1/5 text-start'>Prénom</th>
                            <th className='basis-1/5 text-start'>CIN</th>
                            <th className='basis-1/5 text-start'>Téléphone</th>
                            <th className='basis-1/5 text-start'></th>
                        </tr>
                        {
                            searchResults.length > 0 ? (
                                searchResults.map((c)=> (
                                    <tr className='w-full p-4 border-b-2 flex justify-start items-center' key={c.id}>
                                        <td className='basis-1/5 text-start'>{c.lastName}</td>
                                        <td className='basis-1/5 text-start'>{c.firstName}</td>
                                        <td className='basis-1/5 text-start'>{c.cin}</td>
                                        <td className='basis-1/5 text-start'>{c.telephone}</td>
                                        <td className='basis-1/5 text-start flex flex-row justify-center gap-2'>
                                            <Link to={`/dashboardAdmin/users/ListConseilleurs/ProfilConseilleur/${c.id}`} className="p-2 rounded text-sm font-medium text-tertiary-color bg-blue-600">
                                                Profil
                                            </Link>
                                            <Link to={`/dashboardAdmin/users/ListConseilleurs/EditConseilleur/${c.id}`} className="p-2 rounded text-sm font-medium text-tertiary-color bg-green-600">
                                                Editer
                                            </Link>                                            
                                            <Link to="#/ListConseilleurs/1" className="p-2 rounded text-sm font-medium text-tertiary-color bg-red-600">
                                                Supprimer
                                            </Link>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                conseilleurs.map((c)=> (
                                    <tr className='w-full p-4 border-b-2 flex justify-start items-center' key={c.id}>
                                        <td className='basis-1/5 text-start'>{c.lastName}</td>
                                        <td className='basis-1/5 text-start'>{c.firstName}</td>
                                        <td className='basis-1/5 text-start'>{c.cin}</td>
                                        <td className='basis-1/5 text-start'>{c.telephone}</td>
                                        <td className='basis-1/5 text-start flex flex-row justify-center gap-2'>
                                            <Link to={`/dashboardAdmin/users/ListConseilleurs/ProfilConseilleur/${c.id}`} className="p-2 rounded text-sm font-medium text-tertiary-color bg-blue-600">
                                                Profil
                                            </Link>
                                            <Link to={`/dashboardAdmin/users/ListConseilleurs/EditConseilleur/${c.id}`} className="p-2 rounded text-sm font-medium text-tertiary-color bg-green-600">
                                                Editer
                                            </Link>                                           
                                            <Link to="#/ListConseilleurs/1" className="p-2 rounded text-sm font-medium text-tertiary-color bg-red-600">
                                                Supprimer
                                            </Link>
                                        </td>
                                    </tr>
                                ))
                            )
                        }
                    </table>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ListConseilleur;
