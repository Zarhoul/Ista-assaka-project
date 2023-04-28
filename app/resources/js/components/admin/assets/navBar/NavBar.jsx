import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BsColumnsGap, BsPeople, BsFiles, BsCardHeading, BsFilePerson, BsDatabaseUp } from "react-icons/bs";
import Logout from '../../../auth/Logout';

function NavBar() {
    const [user, setUser] = useState({})
  
    useEffect(() => {
      axios.get(window.location.origin + "/api/auth?token=" + localStorage.getItem("token"))
        .then(response => setUser(response.data))
        console.log(user);
    }, [])
    return (
        <> 
            <div className="w-full h-full basis-1/12 p-2 flex flex-row gap-4">
                <div className='w-full px-6 py-2 flex flex-row justify-start items-center gap-2'>
                    <Link to="/dashboardAdmin" className='w-fit p-2 flex flex-row gap-2 justify-center items-center text-lg font-medium text-black rounded-md hover:bg-da-tertiary-color hover:text-black'>
                        <BsColumnsGap />
                        <div>Dashboard</div>
                    </Link>
                    <Link to="/dashboardAdmin/users" className='w-fit p-2 flex flex-row gap-2 justify-center items-center text-lg font-medium text-black rounded-md hover:bg-da-tertiary-color hover:text-black'>
                        <BsPeople />
                        <div>Users</div>
                    </Link>
                    <Link to="/dashboardAdmin/documents" className='w-fit p-2 flex flex-row gap-2 justify-center items-center text-lg font-medium text-black rounded-md hover:bg-da-tertiary-color hover:text-black'>
                        <BsFiles />
                        <div>Documents</div>
                    </Link>
                    <Link to="/dashboardAdmin/application" className='w-fit p-2 flex flex-row gap-2 justify-center items-center text-lg font-medium text-black rounded-md hover:bg-da-tertiary-color hover:text-black'>
                        <BsCardHeading />
                        <div>Application</div>
                    </Link>
                    <Link to={`/dashboardAdmin/profil/${user.id}`} className='w-fit p-2 flex flex-row gap-2 justify-center items-center text-lg font-medium text-black rounded-md hover:bg-da-tertiary-color hover:text-black'>
                        <BsFilePerson />
                        <div>Profil</div>
                    </Link>
                    <Link to="/dashboardAdmin/importData" className='w-fit p-2 flex flex-row gap-2 justify-center items-center text-lg font-medium text-black rounded-md hover:bg-da-tertiary-color hover:text-black'>
                        <BsDatabaseUp />
                        <div>Import data</div>
                    </Link>
                </div>
                <div className='w-fit px-6 py-2 flex flex-row justify-start items-center gap-2'>
                    <Logout />
                </div>
            </div>
        </>
    )
}

export default NavBar;