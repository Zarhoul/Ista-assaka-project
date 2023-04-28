import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowUpRightCircle } from "react-icons/bs";

import NavBar from '../../navBar/NavBar';

function UsersSection() {

    return (
        <>
        <div className=' w-full h-screen flex flex-col'>
                <NavBar />
                <div className='w-full h-full basis-11/12 flex flex-col bg-slate-300'>
                    <div className='w-full h-full flex basis-1/5 justify-between items-center p-4'>
                        <div className='text-center text-4xl font-medium'>
                            Liste des utilisateurs :
                        </div>
                        <Link to="#/ListConseilleurs/AddConseilleur" className='w-full h-10 p-4 basis-1/6 flex text-sm font-medium text-tertiary-color justify-center items-center bg-primary-color rounded'>
                            Ajouter un utilisateur
                        </Link>
                    </div>
                    <div className="p-4 basis-4/5 flex flex-col justify-start gap-4">
                        <Link to="/dashboardAdmin/users/ListStagiaires" className="flex flex-row justify-between items-center p-4 bg-tertiary-color rounded">
                            <div className="text-xl font-base ">
                                Stagiaires
                            </div>
                            <BsArrowUpRightCircle className='text-3xl'/>
                        </Link>
                        <Link to="/dashboardAdmin/users/ListFormateurs" className="flex flex-row justify-between items-center p-4 bg-tertiary-color rounded">
                            <div className="text-xl font-base ">
                                Formateurs
                            </div>
                            <BsArrowUpRightCircle className='text-3xl'/>
                        </Link>
                        <Link to="/dashboardAdmin/users/ListConseilleurs" className="flex flex-row justify-between items-center p-4 bg-tertiary-color rounded">
                            <div className="text-xl font-base ">
                                Conseilleurs
                            </div>
                            <BsArrowUpRightCircle className='text-3xl'/>
                        </Link>
                    </div>
                </div>
        </div>
        </>
    )
}

export default UsersSection;



