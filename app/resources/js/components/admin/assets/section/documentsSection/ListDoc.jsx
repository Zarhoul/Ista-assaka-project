import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import NavBar from '../../navBar/NavBar';

function ListDoc() {
    const [documents, setDocuments] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        axios.get('../../data/documents.json')
        .then((response) => {
            setDocuments(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);

    const handleSearch = (event) => {
        const query = event.target.value;
        setSearchQuery(query);
        if (query === '') {
            setSearchResults(documents);
            console.log(searchResults);
        } else {
            const results = documents.filter((document) => {
            return (
                document.typeDoc.toLowerCase().includes(query.toLowerCase()) ||
                document.sendingDate.toLowerCase().includes(query.toLowerCase()) ||
                document.receiveDate.toLowerCase().includes(query.toLowerCase()) ||
                document.status.toLowerCase().includes(query.toLowerCase()) ||
                document.user[0].lastName.toLowerCase().includes(query.toLowerCase()) ||
                document.user[0].firstName.toLowerCase().includes(query.toLowerCase())
            );
            });
            setSearchResults(results);
            console.log(searchResults);
        }
    };
    

    return (
        <>
            <div className='w-full h-screen flex flex-col'>
                <NavBar />
                <div className='w-full h-full basis-11/12 flex flex-col bg-slate-300'>
                <div className='w-full h-full flex basis-1/5 justify-start items-center p-4 text-4xl font-medium'>
                    Liste des documents :
                </div>
                <div className='p-4'>
                    <form className='flex flex-row gap-2'>
                    <input
                        type='text'
                        placeholder='chercher un document ...'
                        className='w-full h-10 p-4 basis-5/6 flex justify-start items-center border-2 border-solid rounded-md border-extend-secondary-color-600 focus:outline-none focus:outline-2 focus:border-extend-secondary-color text-lg'
                        value={searchQuery}
                        onChange={handleSearch}
                    />  
                    </form>
                </div>
                <div className='w-full p-4'>
                    {searchResults.length > 0 ? (
                    <table className='w-full flex flex-col'>
                        <thead className='w-full table'>
                            <tr className='w-full p-4 border-b-2 flex justify-center items-center'>
                                <th className='basis-1/5 text-start'>Document</th>
                                <th className='basis-1/5 text-start'>Date d'envoi</th>
                                <th className='basis-1/5 text-start'>Date de réception</th>
                                <th className='basis-1/5 text-start'>Status</th>
                                <th className='basis-1/5 text-start'>Stagiaire</th>
                                <th className='basis-1/5 text-start'></th>
                            </tr>
                        </thead>
                        <tbody className='w-full h-80 block overflow-y-scroll'>
                        {searchResults.map((d) => (
                        <tr className='w-full p-4 border-b-2 flex justify-start items-center' key={d.id}>
                            <td className='basis-1/5 text-start'>{d.typeDoc}</td>
                            <td className='basis-1/5 text-start'>{d.sendingDate}</td>
                            <td className='basis-1/5 text-start'>{d.receiveDate}</td>
                            <td className='basis-1/5 text-start'>{d.status}</td>
                            <td className='basis-1/5 text-start'>{d.user[0].lastName} {d.user[0].firstName}</td>
                            <td className='basis-1/5 text-start flex flex-row justify-center gap-2'>
                            <Link to={`/dashboardAdmin/documents/details/${d.id}`} className="p-2 rounded text-sm font-medium text-tertiary-color bg-blue-600">
                                Détails
                            </Link>                                           
                            <Link to="" className="p-2 rounded text-sm font-medium text-tertiary-color bg-red-600">
                                Supprimer
                            </Link>
                            </td>
                        </tr>
                        ))}
                        </tbody>

                    </table>
                    ) : (
                    <p className='px-4 text-xl'>Aucun document trouvé!</p>
                    )}
                </div>
                </div>
            </div>
            </>
        );
}

export default ListDoc;
