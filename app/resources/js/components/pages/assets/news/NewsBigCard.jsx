import React from 'react';

import Badge from "./Badge";

function NewsBigCard({title, date, image, type}) {
    return (
        <>
            { type === 'Nouveauté' 
                ?
                <div className="h-full relative shadow-xl hover:scale-95 transition duration-300">
                    <div className="">
                        <img src={image} alt={title} className=''/>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 p-3 flex flex-col justify-start items-start bg-tertiary-color">
                            <div className="font-medium text-2xl break-words whitespace-normal overflow-hidden text-text-primary-color lg:text-3xl">{title}</div>
                            <div className="font-medium text-xl text-extend-secondary-color">{date}</div>
                    </div>
                </div> 
                :
                <div className="h-full relative shadow-xl hover:scale-95 transition duration-300">
                    <Badge 
                        type={type}
                    />
                    <div className="">
                        <img src={image} alt={title} className='w-full h-full'/>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 p-3 flex flex-col justify-start items-start bg-tertiary-color">
                            <div className="font-medium text-2xl break-words whitespace-normal overflow-hidden text-text-primary-color lg:text-3xl">{title}</div>
                            <div className="font-medium text-xl text-extend-secondary-color">{date}</div>
                    </div>
                </div>        
            }
        </>
    )
}

export default NewsBigCard