import React from 'react'
import { Outlet, Link } from 'react-router-dom';

function NavBar() {
    return (
        <>
            <nav className="bg-primary-color opacity-95 max-w-full h-24 flex flex-row flex-wrap
                            sm:w-full sm:p-2 sm:flex-col sm:h-40
                            md:px-8 md:py-4
                            lg:h-24 lg:px-6 lg:py-4 lg:flex lg:flex-row lg:justify-center lg:items-center
                            min-[320px]:h-96 max-[639px]:h-96
                            min-[320px]:flex-col max-[639px]:flex-col
                            min-[320px]:flex-wrap max-[639px]:flex-wrap
                            "
            >
                <div className="flex basis-1/4 items-center justify-center">
                    <Link to="/">
                        <img className="img-logo" src="../images/Logo.svg" alt="logo" />
                    </Link>
                </div>
                <div className='flex basis-2/4 items-center justify-center'>
                    <ul className="flex flex-row gap-x-0
                                sm:flex-row
                                min-[320px]:flex-col max-[639px]:flex-col
                                min-[320px]:gap-4 max-[639px]:gap-4
                                min-[320px]:text-center max-[639px]:text-center
                    ">
                        <Link to="/" className='link-list'>
                            <li className="font-medium tracking-wide p-4 text-base text-tertiary-color rounded hover:bg-hover-primary-color
                                        sm:p-1 sm:text-sm
                                        md:p-2 md:text-base
                                        lg:p-4 lg:text-lg
                                        min-[320px]:p-0 max-[639px]:p-0
                                        "
                            >
                                Home
                            </li>
                        </Link>
                        <Link to="/filieres" className='link-list'>
                            <li className="font-medium tracking-wide p-4 text-base text-tertiary-color rounded hover:bg-hover-primary-color
                                        sm:p-1 sm:text-sm
                                        md:p-2 md:text-base
                                        lg:p-4 lg:text-lg
                                        min-[320px]:p-0 max-[639px]:p-0
                                        "
                            >
                                Filières
                            </li>
                        </Link>
                        <Link to="/news" className='link-list'>
                            <li className="font-medium tracking-wide p-4 text-base text-tertiary-color rounded hover:bg-hover-primary-color
                                        sm:p-1 sm:text-sm
                                        md:p-2 md:text-base
                                        lg:p-4 lg:text-lg
                                        min-[320px]:p-0 max-[639px]:p-0
                                        "
                            >
                                Nouveautés
                            </li>
                        </Link>
                        <Link to="https://www.ofppt.ma/fr/inscription-en-ligne?utm_source=Bouton%20Inscription&utm_medium=CTA&utm_campaign=inscription" target='_blank' className='link-list'>
                            <li className="font-medium tracking-wide p-4 text-base text-tertiary-color rounded hover:bg-hover-primary-color
                                        sm:p-1 sm:text-sm
                                        md:p-2 md:text-base
                                        lg:p-4 lg:text-lg
                                        min-[320px]:p-0 max-[639px]:p-0
                                        "
                            >
                                Inscription
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className='flex basis-1/4 items-center justify-center flex-row gap-x-4
                                sm:gap-x-2
                                md:gap-x-2
                                lg:gap-x-4'
                >
                    <Link to="/login" className="text-tertiary-color font-medium tracking-wide p-4 text-base rounded hover:bg-hover-primary-color
                                                sm:p-2 sm:text-sm
                                                md:p-2 md:text-base
                                                lg:p-4 lg:text-lg"
                    >
                    Login
                    </Link>
                    <Link to="/espaceStagiaire" className="bg-tertiary-color text-primary-color font-medium tracking-wide p-4 text-base rounded hover:bg-hover-primary-color hover:text-tertiary-color
                                                sm:px-1 sm:py-2 sm:text-sm
                                                md:p-2 md:text-base
                                                lg:p-4 lg:text-lg"
                    >
                    Mon Espace
                    </Link>
                </div>
            </nav>

            <Outlet />
        </>
    )
}

export default NavBar;
