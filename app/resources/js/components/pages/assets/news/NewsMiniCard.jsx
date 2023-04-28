import React from 'react';

import Badge from "./Badge";

function NewsMiniCard({title, image, date, type}) {
    return (
        <>
            { type === 'Nouveauté' 
                ?
                <div className="flex flex-row gap-x-4 shadow-xl hover:scale-95 transition duration-300 
                                md:flex-col md:basis-2/4
                                lg:flex-row"
                >
                    <div className="w-full h-full basis-2/4">
                        <img src={image} alt={title} className=''/> 
                    </div>
                    <div className="flex flex-col basis-2/4 justify-between items-start gap-2 p-4
                                    md:gap-0"
                    >
                        <div className="font-medium text-2xl py-4  break-words whitespace-normal overflow-hidden text-text-primary-color
                                        md:py-2"
                        >
                        {title}
                        </div>
                        <div className="p-2 font-medium text-lg text-extend-secondary-color
                                        lg:text-xl"
                        >
                        {date}
                        </div>
                    </div>
                </div>
                :
                <div className="relative flex flex-row gap-x-4 shadow-xl hover:scale-95 transition duration-300 
                                md:flex-col md:basis-2/4
                                lg:flex-row"
                >
                    <Badge 
                        type={type}
                    />
                    <div className="w-full h-full basis-2/4">
                        <img src={image} alt={title} className=''/> 
                    </div>
                    <div className="flex flex-col basis-2/4 justify-between items-start gap-2 p-4
                                    md:gap-0"
                    >
                        <div className="font-medium text-2xl py-4 break-words whitespace-normal overflow-hidden text-text-primary-color
                                        md:py-2"
                        >
                        {title}
                        </div>
                        <div className="p-2 font-medium text-lg text-extend-secondary-color
                                        lg:text-xl"
                        >
                        {date}
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default NewsMiniCard