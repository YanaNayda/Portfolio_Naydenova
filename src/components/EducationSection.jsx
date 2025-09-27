import React from "react";
import Timeline from "./Timeline";
import {GraduationCap ,School,  BookOpen } from "lucide-react"
import bagrut from "../../public/documents/bagrut.pdf"
import bachelor from "../../public/documents/bachelor.pdf"
import { AvatarEducation } from "./AvatarEducation.jsx"; 
import { useControls } from "leva";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, OrbitControls } from "@react-three/drei";
import { Room5 } from "./Room5.jsx";
import { useState } from "react";
import { cn } from "@/lib/utils";
import "../i18n";
import { useTranslation } from "react-i18next";


const MemoRoom5 = React.memo(Room5);
const MemoAvatarEducation = React.memo(AvatarEducation);

const education = [
    {
        id: 1,
        title: "masterDegree",
        location: "holonInstitute",
        description: "masterDescription",
        date: "2025 - 2027",
        buttonText: "downloadCertificate",
        demoUrl: "#",
        icon: GraduationCap,
        color:"text-white-800" 
    },{
        id: 2,
        title: "bachelorDegree",
        location: "holonInstitute",
        description: "bachelorDescription",
        date: "2022 - 2025",
        buttonText: "downloadCertificate",
        demoUrl: bachelor,
        icon: GraduationCap,
        color:"text-white-800" 
    },{
        id: 3,
        title: "bordingSchool",
        location: "ortSchool",
        description: "ortDescription",
        date: "2015 - 2018",
        buttonText: "downloadCertificate",
        demoUrl: bagrut,
        icon: "school",
        color:"text-white-800"  
    }
]
export const EducationSection = () => {
    
   const {t,i18n} = useTranslation();

    
  return (

 <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-background text-foreground relative">

  <div className="absolute inset-0 -left-32 flex flex-col items-center z-[-1] space-y-6">
    <div className="blob blob--teal w-72 h-32 opacity-70"></div>
    <div className="blob blob--yellow w-56 h-56 opacity-50"></div>
    <div className="blob blob--pink w-64 h-64"></div>
    <div className="blob blob--blue w-64 h-64"></div>
    <div className="blob blob--teal w-64 h-64 opacity-70"></div>
  </div>

  <div className="container mx-auto max-w-l z-10 relative">
    <h2 className="text-4xl font-bold mb-8 text-center">
        {t("myEducation")} <span className="text-primary">  {t("education")} </span>
    </h2>
  </div>

  <div className="container mx-auto py-2 grid grid-cols-1 lg:grid-cols-3 text-center relative z-10">
    <div className="lg:col-span-1 w-full h-full flex justify-start items-center relative">

    <div className="absolute inset-0 -left-42  bottom-0flex flex-col items-center z-[-1] space-y-6">
    <div className="blob blob--teal w-72 h-32 opacity-70"></div>
    <div className="blob blob--teal w-64 h-64 opacity-70"></div>
    <div className="blob blob--purple w-48 h-48 opacity-60"></div>
    <div className="blob blob--yellow w-56 h-56 opacity-50"></div>
    <div className="blob blob--pink w-64 h-64"></div>
    <div className="blob blob--blue w-64 h-64"></div>
    <div className="blob blob--teal w-64 h-64 opacity-70"></div>
  </div>

  <Canvas className="relative z-10" camera={{ position: [-12,5,11], fov: 38 }}>
    <ambientLight intensity={1} />
    <directionalLight position={[5, 5, 5]} />
    <group>
      <group position={[-3.2, -2, 0]} rotation={[0, Math.PI, 0]} scale={[1, 1, 1]}>
          <MemoRoom5 />
      </group>
      <group position={[-2, -1.2, 0]} scale={[3, 3, 3]}>
        <MemoAvatarEducation animation="Typing" />
      </group>
    </group>
  </Canvas>
   <div className = "absolute  z-20 top-1/6 left-15 flex space-y-2">
              <div className=" bg-white/80 backdrop-blur-md+7-9 opacity-0 animate-fade-in-delay-4 text-glow text-black px-3 py-2 rounded-2xl shadow-lg">
              <span className="ml-1 "> {t("messageThirdAbout")} </span>
            </div>
            </div>

            <div className="absolute top-1/3   z-20 opacity-5 animate-fade-in-delay-4  right-1 flex flex-col space-y-3">
                <div className="message-container absolute top-1/3 right-10">
                  <div className="message message-1 bg-white/80  text-glow backdrop-blur-md text-black px-3 py-2 rounded-2xl shadow-lg">
                    <span className="ml-1"> {t("messageFirstAbout")} </span>
                  </div>
                  <div className="message message-2 bg-white/80 text-glow  backdrop-blur-md text-black px-3 py-2 rounded-2xl shadow-lg">
                    <span className="ml-3"> {t("messageSecondAbout")} </span>
                  </div>
                  <div className="message message-3 bg-white/80  text-glow backdrop-blur-md text-black px-3 py-2 rounded-2xl shadow-lg">
                    <span className="ml-3"> {t("messageFourthAbout")} </span>
                  </div>
                </div>
            </div>
         
</div>

    <div className="lg:col-span-2 text-left justify-start w-full h-full">
      <Timeline defaultColor="bg-blue-500 min-w-[3500px]" education={education} />
    </div>
  </div>
</section>
  );
};