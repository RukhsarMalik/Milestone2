"use client"
import Link from 'next/link';
import React from 'react'
import { RiFacebookFill } from 'react-icons/ri';
import {BiLogoLinkedin} from 'react-icons/bi';
import Image from 'next/image';

import logo from "../../../public/assests/pictures/logo.png";

const Footer= ()=> {
    return(
        <div className='bg-blue-50'>
            <footer className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
    <Image src={logo} alt="RM" width={100} height={100} className='w-[50px]'/>
      <span className="ml-3 text-xl">Rukhsar Malik</span>
    </a>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
      © 2020 Rukhsar Malik 
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <Link target='_blank' href={"https://www.facebook.com/rukhsar.malik.3194"} className="text-gray-500">
        <RiFacebookFill className='text-3xl hover:text-[#3b5998]' />
      </Link>
      <Link target='_blank' href={"https://www.linkedin.com/in/rukhsar-malik-164147225"}>
        <BiLogoLinkedin className="text-3xl hover:text-[#0e76a8] " />
      </Link>
    </span>
  </div>
</footer>

        </div>
    )
}
export default Footer