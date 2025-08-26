import React from "react";
import  { useState } from "react";
import {GraduationCap ,School,  BookOpen } from "lucide-react"


export default function Timeline( { defaultColor = "bg-blue-500" , education = [] } ) {
    return (
    <div> 
        {education.map(element =>  {
            
            return( 
            <div className="container mx-auto px-4" key={element.id}>    
            <div key={element.id} className="mb-8 flex justify-between items-center w-full"> 
                <div className="mb-8 flex justify-between items-center w-full ">{element.title}</div>
                <div className="mb-8 flex justify-between items-center w-full ">{element.location}</div>
                <div className="mb-8 flex justify-between items-center w-full ">{element.description}</div>
                <div className="mb-8 flex justify-between items-center w-full ">{element.date}</div>
                <div className="mb-8 flex justify-between items-center w-full ">{element.buttonText}</div>
                <div className="mb-8 flex justify-between items-center w-full ">{element.demoUrl}</div>
               

            </div>
            </div>)
        })}
        
    </div>

)}
