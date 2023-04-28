import React from 'react'
import NavBar from '../commun/NavBar'
import Footer from '../commun/Footer'
import { TbFaceIdError } from "react-icons/tb";

function NoPage() {
  return (
    <>
      <div className='h-full flex flex-col'>
        <NavBar />
        <div className='flex flex-col justify-center items-center gap-4 p-40'>
          <TbFaceIdError className=" text-9xl" />
          <div className='text-3xl font-medium'>
            This page is not found !
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default NoPage