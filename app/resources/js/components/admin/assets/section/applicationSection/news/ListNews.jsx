import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import NavBar from '../../../navBar/NavBar';

function ListNews() {
    const [news, setNews] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        axios.get('../../data/news.json')
        .then((response) => {
            console.log(response.data);
            setNews(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);

    const handleSearch = (event) => {
        const query = event.target.value;
        setSearchQuery(query);
        const results = news.filter((n) => {
            return (
                n.title.toLowerCase().includes(query.toLowerCase()) ||
                n.date.toLowerCase().includes(query.toLowerCase()) ||
                n.type.toLowerCase().includes(query.toLowerCase())
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
                        Liste des nouveautés
                    </div>
                    <div className='p-4'>
                        <form className='flex flex-row gap-2'>
                        <input
                            type='text'
                            placeholder='chercher une nouveauté ...'
                            className='w-full h-10 p-4 basis-5/6 flex justify-start items-center border-2 border-solid rounded-md border-extend-secondary-color-600 focus:outline-none focus:outline-2 focus:border-extend-secondary-color text-lg'
                            value={searchQuery}
                            onChange={handleSearch}
                        />                         
                            <Link to="/dashboardAdmin/application/filieres/addFiliere" className='w-full h-10 p-4 basis-1/6 flex text-sm font-medium text-tertiary-color justify-center items-center bg-primary-color rounded'>
                                Ajouter une nouveauté
                            </Link>
                        </form>
                    </div>
                    <div className='w-full h-full p-4'>
                    <table className='w-full block'>
                        <thead className='w-full table'>
                            <tr className='w-full p-4 border-b-2 flex justify-start items-center'>
                                <th className='w-1/12 text-start'>N°</th>
                                <th className='w-5/12 text-start'>Titre</th>
                                <th className='w-2/12 text-start'>Date</th>
                                <th className='w-2/12 text-start'>Type</th>
                                <th className='w-2/12 text-start'></th>
                            </tr>
                        </thead>
                        <tbody className='w-full h-80 block overflow-y-scroll'>
                        {
                            searchResults.length > 0 ? (
                                searchResults.map((n)=> (
                                    <tr className='w-full p-4 border-b-2 flex justify-start items-center' key={n.id}>
                                        <td className='w-1/12 text-start'>{n.id}</td>
                                        <td className='w-5/12 text-start'>{n.title}</td>
                                        <td className='w-2/12 text-start'>{n.date}</td>
                                        <td className='w-2/12 text-start'>{n.type}</td>
                                        <td className='w-2/12 flex flex-row gap-2'>
                                            <Link to={`/dashboardAdmin/application/news/detailsNew/${n.id}`} className="p-2 rounded text-sm font-medium text-tertiary-color bg-blue-600">
                                                Détails
                                            </Link>
                                            <Link to={`/dashboardAdmin/application/news/editNew/${n.id}`} className="p-2 rounded text-sm font-medium text-tertiary-color bg-green-600">
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
                                news.map((n)=> (
                                    <tr className='w-full p-4 border-b-2 flex justify-start items-center' key={n.id}>
                                        <td className='w-1/12 text-start'>{n.id}</td>
                                        <td className='w-5/12 text-start'>{n.title}</td>
                                        <td className='w-2/12 text-start'>{n.date}</td>
                                        <td className='w-2/12 text-start'>{n.type}</td>
                                        <td className='w-2/12 text-start flex flex-row gap-2'>
                                            <Link to={`/dashboardAdmin/application/news/detailsNew/${n.id}`} className="p-2 rounded text-sm font-medium text-tertiary-color bg-blue-600">
                                                Détails
                                            </Link>
                                            <Link to={`/dashboardAdmin/application/news/editNew/${n.id}`} className="p-2 rounded text-sm font-medium text-tertiary-color bg-green-600">
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

export default ListNews