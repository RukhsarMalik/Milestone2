"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";
 const About = ()=>{
    return(
        <div id="About">
            <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <Image
      className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
      alt="hero"
      width={200}
      height={200}
      src={require("../../../public/assests/pictures/pic.jpg")}
    />
    <div className="text-center lg:w-2/3 w-full">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
       About Me
      </h1>
      <p className="mb-8 leading-relaxed">
      I hold a Master's degree in Mathematics from the University of Karachi and bring six years of teaching experience to my current role as a Junior Elementary School Teacher (JEST) at Government Girls Elementary School Ahmedabad. Currently, I am also advancing my development as a student at GIAIC.
      </p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-gray-900 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded text-lg">
          <Link target="_blank" href="https://myresume-tau-jet.vercel.app/">
          View Cv
          </Link>
        </button>
      </div>
    </div>
  </div>
</section>



        </div>
    )
 }
 export default About