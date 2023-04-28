import React from 'react'

function Badge({type}) {
    return (
        <>
            <div className={`${type} absolute top-0 left-0 px-4 py-1 bg-extend-primary-color font-medium text-lg text-tertiary-color shadow-xl`}>
                {type}
            </div>
        </>
    )
}

export default Badge