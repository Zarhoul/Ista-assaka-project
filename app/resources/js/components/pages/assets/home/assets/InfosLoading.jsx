import React from 'react';

function InfosLoading() {
    return (
        <>
        <div className="w-full grow">
            <div className='w-full flex flex-col relative'>
                <div className='bg-cover bg-center bg-local'>
                    <img src="./images/image-1.jpg" alt='' className='w-full h-auto object-cover bg-cover bg-center bg-local bg-slate-600 opacity-0' />
                </div>
                <div className='text-slate-300 bg-slate-300 opacity-0 animate-pulse absolute inset-0 flex flex-col items-center justify-center gap-6'>
            </div>
        </div>
        </div>
        </>
    )
}

export default InfosLoading