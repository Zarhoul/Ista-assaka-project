import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import NavBar from '../../../navBar/NavBar';

function ListStagiaire() {
    const [stagiaires, setStagiaires] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        axios.get('../../data/users.json')
        .then((response) => {
            const stgs = response.data.filter(s => s.role[0].idRole === "4");
            setStagiaires(stgs);
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);

    const handleSearch = (event) => {
        const query = event.target.value;
        setSearchQuery(query);
        const results = stagiaires.filter((stagiaire) => {
        return (
            stagiaire.lastName.toLowerCase().includes(query.toLowerCase()) ||
            stagiaire.firstName.toLowerCase().includes(query.toLowerCase()) ||
            stagiaire.cin.toLowerCase().includes(query.toLowerCase()) ||
            stagiaire.telephone.toLowerCase().includes(query.toLowerCase())
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
                        Liste des stagiaires
                    </div>
                    <div className='p-4'>
                        <form className='flex flex-row gap-2'>
                        <input
                            type='text'
                            placeholder='chercher un stagiaire ...'
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
                                searchResults.map((s)=> (
                                    <tr className='w-full p-4 border-b-2 flex justify-start items-center' key={s.id}>
                                        <td className='w-2/12 text-start'>{s.lastName}</td>
                                        <td className='w-2/12 text-start'>{s.firstName}</td>
                                        <td className='w-2/12 text-start'>{s.dateNaissance}</td>
                                        <td className='w-2/12 text-start'>{s.cin}</td>
                                        <td className='w-2/12 text-start'>{s.telephone}</td>
                                        <td className='w-2/12 text-start'>{s.filiere[0].NameFormation}</td>
                                        <td className='w-3/12 flex flex-row justify-center gap-2'>
                                            <Link to={`/dashboardAdmin/users/ListStagiaires/ProfilStagiaire/${s.id}`} className="p-2 rounded text-sm font-medium text-tertiary-color bg-blue-600">
                                                Profil
                                            </Link>                                           
                                            <Link to="" className="p-2 rounded text-sm font-medium text-tertiary-color bg-red-600">
                                                Supprimer
                                            </Link>
                                        </td>
                                    </tr>
                                ))
                            )
                            : (
                                stagiaires.map((s)=> (
                                    <tr className='w-full p-4 border-b-2 flex justify-start items-center' key={s.id}>
                                        <td className='w-2/12 text-start'>{s.lastName}</td>
                                        <td className='w-2/12 text-start'>{s.firstName}</td>
                                        <td className='w-2/12 text-start'>{s.dateNaissance}</td>
                                        <td className='w-2/12 text-start'>{s.cin}</td>
                                        <td className='w-2/12 text-start'>{s.telephone}</td>
                                        <td className='w-2/12 text-start'>{s.filiere[0].NameFormation}</td>
                                        <td className='w-3/12 text-start flex flex-row justify-center gap-2'>
                                            <Link to={`/dashboardAdmin/users/ListStagiaires/ProfilStagiaire/${s.id}`} className="p-2 rounded text-sm font-medium text-tertiary-color bg-blue-600">
                                                Profil
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

export default ListStagiaire;
