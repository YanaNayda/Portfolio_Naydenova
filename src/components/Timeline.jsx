import React from "react";
import  { useState } from "react";
import {GraduationCap ,School,  BookOpen } from "lucide-react"


export default function Timeline( { defaultColor = "text-primary" , education = [] } ) {
    return (
    <div className="relative"> 
        <div className="absolute left-10 top-0 w-px h-full bg-primary opacity-30 hidden sm:block"></div>

        {education.map(element =>  {
            let IconComponent;
             if (typeof element.icon === "string") {
                if (element.icon === "school") IconComponent = BookOpen;
                else IconComponent = GraduationCap;  
            } else {
                IconComponent = element.icon;  
            }

            return( 
             <div className="container mx-auto px-4" key={element.id}>
                <div className="flex sm:relative items-start mb-10">
  
                     <div className="rounded-full p-1 bg-primary ">
                         <IconComponent
                            className={`${element.color || defaultColor} text-white w-10 h-7`}
                        />
                     </div>

                <div className="text-center sm:text-left px-16 text-gray-500 ">{element.date}</div>

                 
                <div className="border border-gray-600 rounded-lg  px-8 py-4 bg-gray-800 w-full text-center z-10 sm:w-96 ">
                    <div className="text-xl font-medium"> {element.title} </div>

                    <div className="text-gray-300 mb-6 sm:mb-8 sm:text:xs"> 
                        {element.location} 
                       
                    </div>

                    <div className="mb-4 text-left" >{element.description} </div>
                    
                    <div className="sm:hidden absolute left-4 top-4">
                        <IconComponent
                            className={`${element.color || defaultColor} w-8 h-10 p-1 rounded-lg`}
                        />
                    </div>

                    <a className= "bg-primary px-4 py-2 rounded-md cursor-pointer hover:bg-primary-dark text-white"> {element.buttonText} </a>

                </div>
            </div>
            </div>)
        })}
        
    </div>

)}
