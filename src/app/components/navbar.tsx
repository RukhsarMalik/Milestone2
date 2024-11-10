"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = ()=> {
    return(
    <div className='bg-white z-50 sticky top-0'>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image src={require("../../../public/assests/pictures/rm-high-resolution-logo.png")} alt="RM" width={100} height={100} className='w-[50px]'/>
            <span className="ml-3 text-xl">My Portfolio</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
              <Link href={"/"} className="mr-5 hover:text-blue-600">Home</Link>
              <Link href={"#About"} className="mr-5 hover:text-blue-600">About</Link>
              <Link href={"#Skill"} className="mr-5 hover:text-blue-600">Skills</Link>
              <Link href={"#Project"} className="mr-5 hover:text-blue-600">Project</Link>
              <Link href={"#Contact"}  className="mr-5 hover:text-blue-600">Contact</Link>
          </nav>
   
        </div>
      </header>
    </div>
    )
}

export default Navbar