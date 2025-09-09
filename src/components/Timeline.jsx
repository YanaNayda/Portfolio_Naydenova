 import React from "react";
import {GraduationCap ,School,  BookOpen } from "lucide-react"

export default function Timeline({ defaultColor = "text-primary", education = [] }) {
  return (
    <div className="relative w-full max-w-5xl mx-auto py-10">
       

      <div className="flex flex-col gap-12">
        {education.map((element) => {
          let IconComponent;
          if (typeof element.icon === "string") {
            IconComponent = element.icon === "school" ? BookOpen : GraduationCap;
          } else {
            IconComponent = element.icon;
          }

          return (
            <div key={element.id} className="flex items-start w-full">
           
              <div className="w-1/4 text-right pr-4 text-gray-400">
                {element.date}
              </div>

 
              <div className="relative flex flex-col items-center w-16">
               
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-px bg-primary opacity-30"></div>
 
                 <div className="z-10 flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white">
                  <IconComponent className={`${element.color || defaultColor} w-6 h-6`} />
                </div>
                </div>

         
              <div className="flex-1 ml-6">
                <div className="border border-gray-600 rounded-lg px-6 py-4 bg-gray-800 shadow-md">
                  <div className="text-xl font-semibold mb-1">{element.title}</div>
                  <div className="text-sm text-gray-300 mb-2">{element.location}</div>
                  <div className="text-sm text-gray-200 mb-4">{element.description}</div>
                  {element.buttonText && (
                    <a className="inline-block bg-primary px-4 py-2 rounded-md text-white hover:bg-primary-dark">
                      {element.buttonText}
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}