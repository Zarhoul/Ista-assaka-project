import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ListDocs() {
    const [documents, setDocuments] = useState([]);

    useEffect(() => {
        axios.get('../data/documents.json')
        .then((response) => {
            const pendingDocuments = response.data.filter(doc => doc.status === "En attente");
            setDocuments(pendingDocuments);
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);    

    return (
        <>
            <div className='w-full h-full flex flex-col basis-4/5 bg-orange-600'>
                <div className='w-full h-full flex flex-col bg-slate-300'>
                    <div className='w-full h-full flex basis-1/6 justify-start items-center p-4 text-4xl font-medium'>
                        Derniers documents reçus :
                    </div>
                    <div className='w-full p-4'>
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
                        <tbody className='w-full h-96 block overflow-y-scroll'>
                        {documents.map((d) => (
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
                            </td>
                        </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
                </div>
            </div>
            </>
        );
}

export default ListDocs;
