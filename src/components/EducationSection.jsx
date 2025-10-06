import React from "react";
import Timeline from "./Timeline";
import {GraduationCap ,School,  BookOpen } from "lucide-react"
import bagrut from "../documents/bagrut.pdf"
import bachelor from "../documents/bachelor.pdf"
import { AvatarEducation } from "./AvatarEducation.jsx"; 
import { useControls } from "leva";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, OrbitControls } from "@react-three/drei";
import { Room5 } from "./Room5.jsx";
import { useState } from "react";
import { cn } from "@/lib/utils";
import "../i18n";
import { useTranslation } from "react-i18next";
import { CursorFollow, CursorProvider } from '@/components/ui/shadcn-io/animated-cursor';

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
 
  const [message, setMessage] = useState(t("messageThirdAbout"));
 const [clicked, setClicked] = useState(0);

    
  return (

 <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-background text-foreground relative">

  <div className="absolute inset-0 -left-32 flex flex-col items-center z-[-1] space-y-6">
    <div className="blob blob--teal w-72 h-32 opacity-70"></div>
    <div className="blob blob--yellow w-56 h-56 opacity-50"></div>
    <div className="blob blob--pink w-64 h-64"></div>
    <div className="blob blob--blue w-64 h-64"></div>
    <div className="blob blob--teal w-64 h-64 opacity-70"></div>
  </div>

  


  <div className="container mx-auto max-w-l z-20 relative">
    <h2 className="text-4xl font-bold mb-8 text-center z-20">
        {t("myEducation")} <span className="text-primary">  {t("education")} </span>
    </h2>
  </div>

  <div className="container mx-auto py-2 grid grid-cols-1 lg:grid-cols-3 text-center relative z-10">
    <div className="lg:col-span-1 w-full h-full flex justify-start items-center relative">
<div className="blob blob--teal absolute left-0 top-0 -translate-y-1/2 -translate-x-1/2  z-0 w-72 h-32 opacity-70"></div>
           <div className="blob blob--teal absolute right-0 top-0 z-0 w-72 h-32 opacity-70"></div>
          <div className="blob blob--teal h-[100px] absolute left-20 top-[200px]  z-0 -translate-y-1/2 -translate-x-1/2 w-64 opacity-70"></div>
          <div className="blob blob--pink absolute right-10 top-[50px] z-0 w-56 h-56 opacity-50"></div>
           <div className="blob blob--pink absolute left-10 top-[50px] z-0 w-56 h-56 opacity-50"></div>
          <div className="blob blob--blue absolute top-[350px] left-[200px] z-0 w-64 h-64"></div>
          <div className="blob blob--blue h-[100px] absolute right-20 top-[200px] -translate-y-1/2 -translate-x-1/2 w-64"></div>
    <div className="absolute inset-0 -left-42  bottom-0 flex flex-col items-center z-0 space-y-6">
    <div className="blob blob--teal w-72 h-32 opacity-70  z-0"></div>
    <div className="blob blob--pink w-64 h-64 z-0"></div>
    <div className="blob blob--blue w-64 h-64 z-0"></div>
    <div className="blob blob--teal w-64 h-64 opacity-70  z-0"></div>

  </div>

 <CursorProvider>
        <CursorFollow>
          <div className="bg-cyan-600 text-white px-2 py-1 rounded-lg text-sm shadow-lg">
                {t("bother")} 
          </div>
        </CursorFollow>
      </CursorProvider>
  
  <Canvas className="hidden md:flex relative z-10" 
  camera={{ position: [-12,5,11], fov: 38 }}
  onClick={()=>{
    setClicked((prev) => {
      
    
    const next = prev + 1;
      if (next === 1) setMessage(t("messageThirdAbout"));
      else if (next === 2) setMessage(t("messageClicked"));
      else if (next === 3){

         setMessage(
  <>
    {t("messageEducationToContact")}&nbsp;
    <br />
    <a
      href="#contact"
      className="text-primary hover:text-primary/80  transition"
      onClick={() => setClicked(0)}
    >
      {t("contactSection.contactInformation")} 
    </a>
  </>
);
      }
        

    return next > 3 ? 0 : next; 
  })
}
 }>
     
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
   

   <div className = "absolute  z-20 top-1/6 left-15 flex space-y-2 ">
              <div className="hidden md:flex bg-white/80 backdrop-blur-md+7-9 opacity-0 animate-fade-in-delay-4 text-glow text-black px-3 py-2 rounded-2xl shadow-lg">
              <span className="ml-1 ">  {message}</span>
            </div>
            </div>

            <div className="hidden md:flex absolute top-1/3   z-20 opacity-5 animate-fade-in-delay-4  right-1 flex flex-col space-y-3">
                <div className="message-container absolute top-1/3 right-10">
                  <div className="message message-1 bg-white/80  text-glow backdrop-blur-md text-black px-3 py-2 rounded-2xl shadow-lg">
                    <span className="ml-1"> {t("messageFirstEducation")} </span>
                  </div>
                  <div className="message message-2 bg-white/80 text-glow  backdrop-blur-md text-black px-3 py-2 rounded-2xl shadow-lg">
                    <span className="ml-3"> {t("messageSecondEducation")} </span>
                  </div>
                  <div className="message message-3 bg-white/80  text-glow backdrop-blur-md text-black px-3 py-2 rounded-2xl shadow-lg">
                    <span className="ml-3"> {t("messageFourthEducation")} </span>
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