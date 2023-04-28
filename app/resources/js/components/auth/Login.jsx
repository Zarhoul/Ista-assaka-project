import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import NavBar from '../pages/assets/commun/NavBar';
import Footer from '../pages/assets/commun/Footer';


function Login() {
  const goto = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${window.location.origin}/api/auth`, new FormData(e.target));
      const { token } = response.data;
      localStorage.setItem("token", token);
      goto("/dashboardAdmin");
    } catch (error) {
      console.error(error);
      goto("/");
    }
  };

return (
    <>
        <NavBar />
        <div className="h-full flex flex-col justify-center">
            <div className="h-full flex flex-row shadow-xl rounded-lg">
                <div className='basis-1/2'>
                    <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center px-16 py-16">
                        <div className="w-full font-bold text-4xl text-primary-color text-start">LOGIN</div>
                        <div className="w-full flex flex-col justify-center items-start">
                            <label className="font-medium text-xl pt-6 pb-2">Identifient :</label>
                            <input type="text" name="username" className="w-full p-2 border-2 border-solid rounded-sm border-extend-secondary-color"/>
                            <label className="font-medium text-xl pt-6 pb-2">Mot de passe :</label>
                            <input type="password" name="password" className="w-full p-2 border-2 border-solid rounded-sm border-extend-secondary-color"/>
                        </div>
                        <div>
                            <button type="submit" className="p-4 mt-6 rounded-md bg-primary-color font-medium text-lg text-tertiary-color hover:bg-hover-primary-color">Se connecter</button>
                        </div>
                    </form>
                </div>
                <div className=" bg-primary-color opacity-95 basis-1/2 py-16 px-6 flex flex-row gap-2">
                    <img src='/images/image-1.jpg' alt=""/>
                </div>
            </div>
        </div>
        <Footer />
    </>
    )
}

export default Login
