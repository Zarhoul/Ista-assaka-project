import React from 'react'

import NavBar from '../../../navBar/NavBar';


function ImportSection() {
    return (
        <>
        <div className=' w-full h-screen flex flex-col'>
                <NavBar />
                <div className='w-full h-full basis-11/12 flex flex-col bg-slate-300'>
                    <div className='w-full h-full flex basis-1/5 justify-start items-center p-4 text-4xl font-medium'>
                        Importer data :
                    </div>
                </div>
        </div>
        </>
    )
}

export default ImportSection