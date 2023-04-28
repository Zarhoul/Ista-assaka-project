import React from 'react'
import { Link } from 'react-router-dom';
import { CiLogout } from "react-icons/ci"


function Logout() {

return (
    <>
        <div className="h-full flex flex-col justify-center">
            <div className="h-full flex">
                <Link to="" className='flex flex-row justify-center items-center gap-2 font-medium'>
                    <CiLogout />
                    Déconnexion
                </Link>
            </div>
        </div>
    </>
    )
}

export default Logout
