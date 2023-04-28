import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowUpRightCircle } from "react-icons/bs";
import NavBar from '../../navBar/NavBar';


function ApplicationSection() {
    return (
        <>
        <div className=' w-full h-screen flex flex-col'>
                <NavBar />
                <div className='w-full h-full basis-11/12 flex flex-col bg-slate-300'>
                    <div className='w-full h-full flex basis-1/5 justify-start items-center p-4 text-4xl font-medium'>
                        Contenu du site web :
                    </div>
                    <div className="p-4 basis-4/5 flex flex-col justify-start gap-4">
                        <Link to="/dashboardAdmin/application/filieres" className="flex flex-row justify-between items-center p-4 bg-tertiary-color rounded">
                            <div className="text-xl font-base ">
                                Filières
                            </div>
                            <BsArrowUpRightCircle className='text-3xl'/>
                        </Link>
                        <Link to="/dashboardAdmin/application/news" className="flex flex-row justify-between items-center p-4 bg-tertiary-color rounded">
                            <div className="text-xl font-base ">
                                Nouveautés
                            </div>
                            <BsArrowUpRightCircle className='text-3xl'/>
                        </Link>
                        <Link to="/dashboardAdmin/application/infos" className="flex flex-row justify-between items-center p-4 bg-tertiary-color rounded">
                            <div className="text-xl font-base ">
                                Infos
                            </div>
                            <BsArrowUpRightCircle className='text-3xl'/>
                        </Link>
                    </div>
                </div>
        </div>
        </>
    )
}

export default ApplicationSection