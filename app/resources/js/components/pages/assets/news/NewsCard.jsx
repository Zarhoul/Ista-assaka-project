import React from 'react';

import Badge from "./Badge";

function NewsCard(props) {
    const { type, image, title, date } = props;
    return (
        <>
            { type === 'Nouveauté' 
                ?
                <div className="w-fit flex flex-col basis-1/4 gap-x-4">
                    <div className="w-fit h-1/2">
                        <img src={image} alt={title} className=''/> 
                    </div>
                    <div className="w-fit flex flex-col justify-between items-start p-4">
                        <div className="font-medium text-2xl break-words whitespace-normal overflow-hidden text-primary-color">{title}</div>
                        <div className="p-2 font-medium text-lg text-extend-secondary-color">{date}</div>
                    </div>
                </div>
                :
                <div className="w-fit relative flex flex-col basis-1/4 gap-x-4">
                    <Badge 
                        type={type}
                    />
                    <div className="w-fit h-1/2">
                        <img src={image} alt={title} className=''/> 
                    </div>
                    <div className="w-fit flex flex-col justify-between items-start p-4">
                        <div className="font-medium text-2xl break-words whitespace-normal overflow-hidden text-primary-color">{title}</div>
                        <div className="p-2 font-medium text-lg text-extend-secondary-color">{date}</div>
                    </div>
                </div>
            }
        </>
    )
}

export default NewsCard