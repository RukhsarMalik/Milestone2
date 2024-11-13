"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";

import resume from "../../../public/assests/pictures/resume.png";
import YouTube from "../../../public/assests/pictures/YouTube.jpg";
import book from "../../../public/assests/pictures/book.jpeg";


const Project = ()=>{
    return(
        <div id="Project">
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-wrap">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-5xl text-2xl font-medium title-font mb-4 text-gray-900">My Projects</h1>
                    </div>
                    <div className="lg:w-2/3 mx-auto cursor-pointer" >
                        <div className="flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4">
                        <Image
                            alt="gallery"
                            className="w-full object-cover h-full object-center block opacity-50 absolute inset-0"
                            src={resume}
                        />
                        <div className="text-center relative z-10 w-full">
                        <h2 className="text-2xl text-gray-900 font-medium title-font mb-2">
                            Resume Builder Project
                        </h2>
                        <p className="leading-relaxed">
                            Generate resume in one click.
                        </p>
                        <Link target="_blank" href={"https://milestone5-omega-one.vercel.app/"}>
                        <h1 className="leading-relaxed text-gray-900 hover:underline " >View Project</h1>
                        </Link>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-2">
                        <div className="px-2 w-1/2">
                        <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
                            <Image
                            alt="gallery"
                            className="w-full object-cover h-full object-center block opacity-50 absolute inset-0"
                            src={YouTube}
                            />
                            <div className="text-center relative z-10 w-full">
                            <h2 className="text-xl text-gray-900 font-medium title-font mb-2">
                                YouTube Clone
                            </h2>
                            <Link target="_blank" href={"https://myfirst-website-alpha.vercel.app/"}>
                            <h1 className="leading-relaxed text-gray-900 hover:underline" >View Project</h1>
                            </Link>
                            </div>
                        </div>
                        </div>
                        <div className="px-2 w-1/2">
                        <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
                            <Image
                            alt="gallery"
                            className="w-full object-cover h-full object-center block opacity-50 absolute inset-0"
                            src={book}
                            />
                            <div className="text-center relative z-10 w-full">
                            <h2 className="text-xl text-gray-900 font-medium title-font mb-2">
                                Book Readers
                            </h2>
                            <h1 className="leading-relaxed text-gray-900 hover:underline" >To be Continue</h1>
                           
                           
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </section>

        </div>
    )
}
export default Project