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



const education = [
    {
        id: 1,
        title: "Master's degree in Computer Science",
        location: "Holon Institute of Technology",
        description: "Enrolled in a master's program to deepen knowledge in computer science and explore research opportunities.",
        date: "2025 - 2027",
        buttonText: "Download Certificate",
        demoUrl: "#",
        icon: GraduationCap,
         color:"text-gray-800" 
    },{
        id: 2,
        title: "Bachelor's degree in Computer Science",
        location: "Holon Institute of Technology",
        description: "Graduated with a final GPA of 85+, having learned core software development principles and collaborated on real-world projects during the final year.",
        date: "2022 - 2025",
        buttonText: "Download Certificate",
        demoUrl: bachelor,
        icon: GraduationCap,
        color:"text-gray-800" 
    },{
        id: 3,
        title: "Boarding School",
        location: " Ort Yad Leibovitz & Naale Program",
        description: "Outstanding student in the Systems Planning and Programming major .Graduated with honors (GPA: 104)",
        date: "2015 - 2018",
        buttonText: "Download Certificate",
        demoUrl: bagrut,
        icon: "school",
        color:"text-gray-800" 
    }
]
export const EducationSection = () => {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-background text-foreground">
        <div className="blob blob--teal absolute left-0 top-0 -translate-y-1/2 -translate-x-1/2  z-0 w-72 h-32 opacity-70"></div>
          <div className="blob blob--teal h-[100px] absolute left-20 top-[200px]  z-0 -translate-y-1/2 -translate-x-1/2 w-64 opacity-70"></div>
          <div className="blob blob--purple absolute left-40 top-[100px] z-0 w-48 h-48 opacity-60"></div>
          <div className="blob blob--yellow absolute right-10 top-[50px] z-0 w-56 h-56 opacity-50"></div>
          <div className="blob blob--pink absolute top-[250px] z-0 left-0 w-64 h-64"></div>
          <div className="blob blob--blue absolute top-[350px] right-[200px] z-0 w-64 h-64"></div>
          <div className="blob blob--teal h-[200px] absolute left-20 top-[250px] -translate-y-1/2 -translate-x-1/2 z-0 w-64 opacity-70"></div>
      <div className="container mx-auto max-w-l">

        
        <h2 className="text-4xl font-bold mb-8 text-center">
          My <span className="text-primary"> Education </span>
        </h2>
      </div> 
      <div className="container mx-auto py-2  grid grid-cols-1 lg:grid-cols-3 text-center">
         <div className="lg:col-span-2 text-left justify-start w-full h-full  ">
          <Timeline defaultColor="bg-blue-500 min-w-[3500px]" education={education} />
        </div> 
         <div className="lg:col-span-1 w-full h-full flex justify-start items-center">  
        <Canvas camera={{ position: [14, 9, 12], fov: 30, near:0.01, far:1000  }}>
          <ambientLight intensity={1} />
          <directionalLight position={[5, 5, 5]} />
           <group   > 
              <group position={[3, -2, 0]} rotation={[0, Math.PI, 0]} scale={[1, 1, 1]}>
                <Room5/>
              </group>

              <group position={[ 3.6, -1.35, -0.2]}  scale={[3, 3, 3]}  >
                <AvatarEducation animation={"Typing"}  />
              </group>
          </group>
          {/* <AvatarCanvas animation={"Typing"} /> */}
          <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
           
        </Canvas>    
        </div>
        
      </div>
      
    </section>
  );
};