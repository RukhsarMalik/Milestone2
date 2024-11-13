import React from "react";
import {PiFileHtmlBold} from "react-icons/pi"
import { PiFileCssBold } from "react-icons/pi";
import { TbBrandTypescript } from "react-icons/tb";
import { RiNextjsLine } from "react-icons/ri";
import { AiOutlinePython } from "react-icons/ai";
import { RiTailwindCssLine } from "react-icons/ri";

const Skill = ()=>{
    return(
        <div id="Skill">
            <section className="text-gray-600 body-font bg-gray-100">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h2 className="text-xs text-gray-500 tracking-widest font-medium title-font mb-1">
        SKILLS
      </h2>
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
        My Skills
      </h1>
    </div>
    <div className="flex flex-wrap -m-4 -mt-[5rem]">

      <div className="p-4 w-[100%] md:w-1/3">
            <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-gray-900 text-white flex-shrink-0">
                        <PiFileHtmlBold className="text-xl" />
                    </div>
                    <h2 className="text-gray-900 text-lg title-font font-medium">
                    HTML
                    </h2>
                </div>
                <div className="flex-grow">
                    <div className="relative h-1 w-full bg-gray-300 rounded-xl">
                        <div className="absolute bg-gray-900 h-1 rounded-xl w-[100%]">

                        </div>
                        <p className="font-bold text-gray-500 text-right">100%</p>
                    </div>

                </div>
            </div>
      </div>
      <div className="p-4 w-[100%] md:w-1/3">
            <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-gray-900 text-white flex-shrink-0">
                        <PiFileCssBold className="text-xl" />
                    </div>
                    <h2 className="text-gray-900 text-lg title-font font-medium">
                    CSS
                    </h2>
                </div>
                <div className="flex-grow">
                    <div className="relative h-1 w-full bg-gray-300 rounded-xl">
                        <div className="absolute bg-gray-900 h-1 rounded-xl w-[90%]">

                        </div>
                        <p className="font-bold text-gray-500 text-right">90%</p>
                    </div>

                </div>
            </div>
      </div>

      <div className="p-4 w-[100%] md:w-1/3">
            <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-gray-900 text-white flex-shrink-0">
                        <TbBrandTypescript className="text-xl" />
                    </div>
                    <h2 className="text-gray-900 text-lg title-font font-medium">
                    TypeScript
                    </h2>
                </div>
                <div className="flex-grow">
                    <div className="relative h-1 w-full bg-gray-300 rounded-xl">
                        <div className="absolute bg-gray-900 h-1 rounded-xl w-[80%]">

                        </div>
                        <p className="font-bold text-gray-500 text-right">80%</p>
                    </div>

                </div>
            </div>
      </div>
      <div className="p-4 w-[100%] md:w-1/3">
            <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-gray-900 text-white flex-shrink-0">
                        <RiNextjsLine className="text-xl" />
                    </div>
                    <h2 className="text-gray-900 text-lg title-font font-medium">
                    Next.js
                    </h2>
                </div>
                <div className="flex-grow">
                    <div className="relative h-1 w-full bg-gray-300 rounded-xl">
                        <div className="absolute bg-gray-900 h-1 rounded-xl w-[60%]">

                        </div>
                        <p className="font-bold text-gray-500 text-right">60%</p>
                    </div>

                </div>
            </div>
      </div>

      <div className="p-4 w-[100%] md:w-1/3">
            <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-gray-900 text-white flex-shrink-0">
                        <AiOutlinePython className="text-xl" />
                    </div>
                    <h2 className="text-gray-900 text-lg title-font font-medium">
                    Python
                    </h2>
                </div>
                <div className="flex-grow">
                    <div className="relative h-1 w-full bg-gray-300 rounded-xl">
                        <div className="absolute bg-gray-900 h-1 rounded-xl w-[70%]">

                        </div>
                        <p className="font-bold text-gray-500 text-right">70%</p>
                    </div>

                </div>
            </div>
      </div>
      <div className="p-4 w-[100%] md:w-1/3">
            <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-gray-900 text-white flex-shrink-0">
                        <RiTailwindCssLine className="text-xl" />
                    </div>
                    <h2 className="text-gray-900 text-lg title-font font-medium">
                    Tailwind css
                    </h2>
                </div>
                <div className="flex-grow">
                    <div className="relative h-1 w-full bg-gray-300 rounded-xl">
                        <div className="absolute bg-gray-900 h-1 rounded-xl w-[60%]">

                        </div>
                        <p className="font-bold text-gray-500 text-right">60%</p>
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

export default Skill