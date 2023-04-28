import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

import NavBar from '../commun/NavBar';
import Footer from '../commun/Footer';

function NewsDetails() {

    return (
        <>
            <NavBar />
            <div className="h-full px-6 py-2 flex flex-col">
                <div className="w-full h-full px-2 py-6 flex flex-row justify-start items-start gap-4">
                    <div className="w-fit h-full py-2 flex justify-start items-start basis-4/12 bg-contain">
                        <img src='/images/image-1.jpg' alt="" className='h-auto max-w-lg rounded-lg' />
                    </div>
                    <div className='w-full basis-8/12 flex flex-col'>
                        <div className='px-2 flex flex-col gap-1'>
                            <span className='font-medium text-4xl py-2 break-words whitespace-normal overflow-hidden text-primary-color'>
                                Titre du nouveauté
                            </span>
                            <span className='w-full flex flex-col justify-start items-start font-medium text-lg'>
                                2023-10-12 
                            </span>
                            <p className='py-2'>
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
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default NewsDetails;
