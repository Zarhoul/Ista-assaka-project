import React from 'react';

function NewsCardLoading() {
    return (
        <>
            <div className="w-fit flex flex-col basis-1/4 gap-x-4">
                <div className="bg-gray- opacity-10 w-fit h-1/2 animate-pulse">
                    <img src="./images/image-2.jpg" alt="" className=''/> 
                </div>
                <div className="w-full h-full flex flex-col justify-between items-start p-4 gap-4">
                    <div className="w-2/3 h-full bg-gray-400 p-2 animate-pulse"></div>
                    <div className="w-1/2 h-full bg-gray-400 p-2 animate-pulse"></div>
                </div>
            </div>
        </>
    )
}

export default NewsCardLoading