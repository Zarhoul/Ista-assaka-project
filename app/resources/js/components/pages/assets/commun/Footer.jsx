import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import { BsInstagram, BsFacebook, BsWhatsapp } from "react-icons/bs"

function Footer() {
    return (
        <>
            <div className="bg-primary-color opacity-95 max-w-full h-80 p-8 flex flex-col flex-wrap justify-around items-center
                            sm:h-full sm:px-3 sm:py-5 sm:gap-6
                            md:h-full md:px-14 md:py-10
                            lg:h-full lg:px-20 lg:py-10
                            xl:h-full xl:px-24 xl:py-10
                            "
            >
                <div className="w-full flex flex-row flex-wrap justify-between items-center
                                sm:justify-center sm:gap-6 sm:flex-nowrap
                                md:justify-between"
                >
                    <div className="flex flex-col">
                        <Link to="/" className='mb-4'>
                            <img className="m-0 sm:w-48" src="./images/Logo.svg" alt="logo" />
                        </Link>
                        <div className="flex flex-col mb-4">
                            <span className="text-tertiary-color sm:text-sm">Rejoignez-nous afin de suivre</span>
                            <span className="text-tertiary-color sm:text-sm">les dernières nouvelles.</span>
                        </div>
                        <div className="flex flex-row justify-start items-center gap-x-4">
                            <Link to="https://www.facebook.com/ISTA.ASSAKA.Page.Officielle" target='_blank' className='bg-tertiary-color opacity-50 w-12 h-12 rounded-full flex justify-center items-center text-xl text-primary-color sm:w-10 sm:h-10' alt="Facebook">
                                <BsFacebook />
                            </Link>
                            <Link to="" className='bg-tertiary-color opacity-50 w-12 h-12 rounded-full flex justify-center items-center text-xl text-primary-color sm:w-10 sm:h-10' alt="Instagram">
                                <BsInstagram />
                            </Link>
                            <Link to="https://web.whatsapp.com/send?phone=+212-5282-66448" target='_blank' className='bg-tertiary-color opacity-50 w-12 h-12 rounded-full flex justify-center items-center text-xl text-primary-color sm:w-10 sm:h-10' alt="Whatsapp">
                                <BsWhatsapp />
                            </Link>
                        </div>
                    </div>
                    <div className='flex flex-col justify-between'
                    >
                        <div className="font-medium text-2xl text-tertiary-color basis-1/4">
                            Menu
                        </div>
                        <ul className="basis-3/4">
                            <li className="text-tertiary-color hover:text-hover-secondary-color">
                                <Link to="/" className='sm:text-sm' target='_blank'>Home</Link>
                            </li>
                            <li className="text-tertiary-color hover:text-hover-secondary-color">
                                <Link to="/filieres" className='sm:text-sm' target='_blank'>Filières</Link>
                            </li>
                            <li className="text-tertiary-color hover:text-hover-secondary-color">
                                <Link to="/news" className='sm:text-sm' target='_blank'>Nouveautés</Link>
                            </li>
                            <li className="text-tertiary-color hover:text-hover-secondary-color">
                                <Link to="https://www.ofppt.ma/fr/inscription-en-ligne?utm_source=Bouton%20Inscription&utm_medium=CTA&utm_campaign=inscription" className='sm:text-sm' target='_blank'>Inscription</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='h-full flex flex-col justify-evenly
                                    sm:justify-between
                                    md:justify-between'
                    >
                        <div className="font-medium text-2xl text-tertiary-color">
                            Informations
                        </div>
                        <ul className="">
                            <li className="text-tertiary-color">
                                <Link to="" className='sm:text-sm'>+212 50000-0000</Link>
                            </li>
                            <li className="text-tertiary-color hover:text-hover-secondary-color">
                                <Link to="" className='sm:text-sm'>OFPPT.ASSAKA@GMAIL.COM</Link>
                            </li>
                            <li className="text-tertiary-color">
                                <Link to="" className='sm:text-sm'>Route Marrakech Tikiouine Assaka, Agadir, Morocco</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='w-full flex flex-row flex-wrap justify-between items-center'>
                    <div className='text-tertiary-color'>
                        Made by OPENCODE
                    </div>
                    <div className='flex flex-row gap-x-4 text-tertiary-color'>
                        <Link to="">Teams of Conditions</Link>
                        <Link to="">Privacy policy</Link>
                    </div>
                </div>
            </div>

            <Outlet />
        </>
    )
}

export default Footer;