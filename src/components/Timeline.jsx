import React from "react";
import {GraduationCap ,School,  BookOpen } from "lucide-react"
import "../i18n";
import { useTranslation } from "react-i18next";

export default function Timeline({ defaultColor = "text-primary", education = [] }) {

  const {t,i18n} = useTranslation();
  return (
    <div className="relative w-full max-w-5xl  mx-auto py-10">
    <div className="absolute left-[calc(25%+2rem)] top-6 bottom-6 transform -translate-x-1/2 w-px bg-primary  z-10"></div>
        
          <div className="blob blob--purple absolute left-40 top-[100px] z-0 w-48 h-48 opacity-60"></div>
          <div className="blob blob--yellow absolute left-10 top-[50px] z-0 w-56 h-56 opacity-50"></div>
          <div className="blob blob--pink absolute top-[250px] z-0 left-0 w-64 h-64"></div>
          <div className="blob blob--blue absolute top-[350px]  left-[200px] z-0 w-64 h-64"></div>
          <div className="blob blob--teal  absolute left-20 top-[250px] -translate-y-1/2 -translate-x-1/2 z-0 w-64 opacity-70"></div>
      <div className="flex flex-col  z-20 gap-12">
        
         

        {education.map((element) => {
          let IconComponent;
          if (typeof element.icon === "string") {
            IconComponent = element.icon === "school" ? BookOpen : GraduationCap;
          } else {
            IconComponent = element.icon;
          }

          return (
            <div key={element.id} className="flex  z-20 items-start w-full">
           
              <div className="w-1/4 text-right pr-4  z-20 text-gray-400">
                {element.date}
              </div>

 
              <div className="relative flex flex-col items-center w-16">
               
                 
 
                 <div className="z-10 flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white">
                  <IconComponent className={`${element.color || defaultColor} w-6 h-6`} />
                </div>
                </div>

         
              <div className="flex-1  z-20 ml-6">
                <div className="border border-gray-600 rounded-lg px-6 py-4 bg-gray-800 shadow-md">
                  <div className="text-xl font-semibold mb-1">{t(element.title)}</div>
                  <div className="text-sm text-gray-300 mb-2">{t(element.location)}</div>
                  <div className="text-sm text-gray-200 mb-4">{t(element.description)}</div>
                  {element.buttonText && (
                    <a
                        href={element.demoUrl}           
                        download                     
                        className="inline-block bg-primary px-4  z-20 py-2 rounded-md text-white hover:bg-primary-dark"
                    >
                    {t(element.buttonText)}
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