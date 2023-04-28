import React from 'react';
import { Link } from 'react-router-dom';
import { BsTelephone } from 'react-icons/bs';
import { FiMapPin } from 'react-icons/fi';
import { MdOutlineMail } from 'react-icons/md';

import NavBar from '../commun/NavBar';
import Footer from '../commun/Footer';

function InfosDetails() {
    return (
        <>
            <NavBar />
            <div className="h-full px-6 py-2 flex flex-col">
                <div className="w-full h-full px-2 py-6 flex flex-row justify-start items-start gap-4">
                    <div className='w-full p-10 flex flex-col'>
                            <span className='font-medium text-7xl py-8 text-center break-words whitespace-normal overflow-hidden text-primary-color'>
                                Institut Spécialisé de Technologie Appliquée Assaka Tikiouine - AGADIR
                            </span>
                            <p className='pt-2 py-8 text-center text-secondary-color'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ultricies mi eget mauris pharetra. Sed cras ornare arcu dui vivamus arcu felis bibendum. 
                                Fermentum dui faucibus in ornare. 
                                Venenatis a condimentum vitae sapien pellentesque habitant morbi.
                                Tempus iaculis urna id volutpat. Hendrerit gravida rutrum quisque non tellus. Libero id faucibus nisl tincidunt. 
                                Accumsan lacus vel facilisis volutpat est velit egestas dui. Et netus et malesuada fames ac turpis egestas. 
                                Aliquet sagittis id consectetur purus ut. Odio morbi quis commodo odio. Dictum varius duis at consectetur lorem donec massa sapien faucibus. 
                                Volutpat sed cras ornare arcu dui vivamus arcu felis. Quam lacus suspendisse faucibus interdum posuere lorem ipsum. Facilisis volutpat est velit egestas dui. 
                                Adipiscing tristique risus nec feugiat in fermentum posuere.
                                Sed euismod nisi porta lorem mollis aliquam ut porttitor leo. 
                                Ultrices gravida dictum fusce ut placerat orci. Vehicula ipsum a arcu cursus vitae congue mauris rhoncus.
                                Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Sed elementum tempus egestas sed sed risus. 
                                Pellentesque eu tincidunt tortor aliquam. Etiam sit amet nisl purus in mollis nunc. 
                                Consequat interdum varius sit amet mattis vulputate enim nulla. Laoreet sit amet cursus sit amet dictum. 
                                Interdum velit laoreet id donec ultrices tincidunt arcu non sodales. Sapien nec sagittis aliquam malesuada bibendum arcu. 
                                Curabitur vitae nunc sed velit dignissim sodales ut. Praesent elementum facilisis leo vel fringilla. Tortor dignissim convallis aenean et tortor at risus viverra adipiscing.
                            </p>
                            <div className="border-t-2 border-dashed border-blue-500"></div>
                            <div className='w-full p-4'>
                                <div className="font-medium text-3xl text-primary-color">
                                    Informations
                                </div>
                                <ul>
                                    <li className="text-secondary-color flex flex-row gap-2 p-4 font-medium">
                                        <BsTelephone />
                                        <Link to="" className='text-base'>+212 50000-0000</Link>
                                    </li>
                                    <li className="text-secondary-color flex flex-row gap-2 p-4 font-medium">
                                        <MdOutlineMail />
                                        <Link to="" className='text-base'>OFPPT.ASSAKA@GMAIL.COM</Link>
                                    </li>
                                    <li className="text-secondary-color flex flex-row gap-2 p-4 font-medium">
                                        <FiMapPin />
                                        <Link to="" className='text-base'>Route Marrakech Tikiouine Assaka, Agadir, Morocco</Link>
                                    </li>
                                </ul>
                            </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default InfosDetails;
