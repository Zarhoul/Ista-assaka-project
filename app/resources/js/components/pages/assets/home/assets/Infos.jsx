import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import InfosLoading from './InfosLoading';

function Infos() {
    
    const [isLoading, setIsLoading] = useState(true); // <-- add loading state

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <>
        {
            isLoading ?

            <InfosLoading />

            :
            <div className="w-full grow">
            <div className='w-full flex flex-col relative'>
                <div className='w-full h-full bg-cover bg-center bg-local bg-primary-color opacity-70'>
                    <img src="./images/image-1.jpg" alt='' className='w-full h-screen object-cover bg-cover bg-center bg-local bg-primary-color opacity-60' />
                </div>
                <div className='text-tertiary-color absolute inset-0 flex flex-col items-center justify-center'>
                    <div className='basis-1/6 flex justify-center items-center font-medium text-5xl
                                    sm:text-5xl
                                    md:text-6xl
                                    lg:text-5xl
                                    xl:text-7xl
                                    min-[320px]:text-xl max-[639px]:text-xl
                                    min-[320px]:p-0 max-[639px]:p-0
                                    min-[320px]:justify-center max-[639px]:justify-center
                                    '
                    >
                    Institut Spécialisé de
                    </div>
                    <div className='mb-8 basis-1/6 flex justify-center items-center font-medium text-5xl
                                    sm:text-5xl
                                    md:text-6xl
                                    lg:text-5xl
                                    xl:text-7xl
                                    min-[320px]:text-xl max-[639px]:text-xl'
                    >
                    Technologie Appliquée
                    </div>
                    <div className='basis1/6 flex justify-center items-center h-fit font-small text-3xl 
                                    sm:text-2xl
                                    md:text-2xl
                                    lg:text-3xl
                                    xl:text-5xl
                                    min-[320px]:text-lg max-[639px]:text-lg
                                    min-[320px]:p-0 max-[639px]:p-0'
                    >
                    Assaka Tikiouine - AGADIR
                    </div>
                    <Link to='/infos' className='mt-8 font-medium px-2 py-4 text-lg border-2 border-solid rounded-lg border-primary-color hover:bg-primary-color 
                                                sm:p-2 sm:text-base
                                                md:p-2 md:text-2xl
                                                lg:px-2 lg:py-4
                                                min-[320px]:text-xl max-[639px]:text-xl
                                                min-[320px]:p-2 max-[639px]:p-2'
                    >
                    Plus d'infos
                    </Link>
                </div>
            </div>
        </div>
        }
        
        </>
    )
}

export default Infos