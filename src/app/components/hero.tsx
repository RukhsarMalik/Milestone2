"use client"
import Image from "next/image"
import Link from "next/link";
import React from "react"
import Typewriter from 'typewriter-effect';

import pic from "../../../public/assests/pictures/pic.jpg";


const Hero = ()=>{
    return(
 <section className="text-gray-600 body-font bg-gray-100 ">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <Image
        className="object-cover object-center rounded mx-auto w-[25rem]"
        alt="hero"
        width={500}
        height={500}
        src={pic}
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        I am
        <br className="hidden lg:inline-block" />
        <Typewriter
            options={{
                strings: ['Web Developer', 
                  'Front-end developer'],
                autoStart: true,
                loop: true,
            }}
        />
      </h1>
      <div className="w-[100px] h-[2px] bg-blue-700"></div>
      <p className="mb-8 leading-relaxed">
      Hello! I’m a passionate front-end developer dedicated to crafting intuitive and responsive web experiences. With a focus on HTML, CSS, Next.js and JavaScript, I aim to transform ideas into clean, efficient code and bring designs to life. I enjoy creating seamless user interfaces and constantly seek to enhance my skills in building accessible and engaging web applications.
      </p>
      <div className="flex justify-center">
        <Link href={'#Contact'}>
        <button className="inline-flex text-white bg-gray-900 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded text-lg">
          Contact
        </button>
        </Link>
      </div>
    </div>
  </div>
</section>
    )
}
export default Hero