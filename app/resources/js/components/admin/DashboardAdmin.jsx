import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

import NavBar from './assets/navBar/NavBar';
import Section from './assets/section/Section';

function DashboardAdmin() {
    const [user, setUser] = useState({})
    const goto = useNavigate()
  
    useEffect(() => {
      axios.get(window.location.origin + "/api/auth?token=" + localStorage.getItem("token"))
        .then(response => setUser(response.data))
        .catch(err => goto("/login"))
        console.log(user);
    }, [])

    return (
        <>
        <div className='w-full h-screen flex flex-col'>
            <NavBar />
            <Section />
        </div>
        </>
        
    );
}

export default DashboardAdmin;
