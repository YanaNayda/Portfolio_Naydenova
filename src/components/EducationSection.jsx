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
        color:"text-white-800" 
    },{
        id: 2,
        title: "Bachelor's degree in Computer Science",
        location: "Holon Institute of Technology",
        description: "Graduated with a final GPA of 85+, having learned core software development principles and collaborated on real-world projects during the final year.",
        date: "2022 - 2025",
        buttonText: "Download Certificate",
        demoUrl: bachelor,
        icon: GraduationCap,
        color:"text-white-800" 
    },{
        id: 3,
        title: "Boarding School",
        location: " Ort Yad Leibovitz & Naale Program",
        description: "Outstanding student in the Systems Planning and Programming major .Graduated with honors (GPA: 104)",
        date: "2015 - 2018",
        buttonText: "Download Certificate",
        demoUrl: bagrut,
        icon: "school",
         color:"text-white-800"  
    }
]
export const EducationSection = () => {

    const messageFirst = "Every day I dive deeper into Computer Science 📘"
    const messageSecond = "AI is my favorite playground for ideas 🤖"
    const messageThird = "Tech has the power to shape the future ✨"
    const messageFourth = "I’m also improving my English skills to grow internationally 🌍"

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
      My <span className="text-primary"> Education </span>
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
        <Room5 />
      </group>
      <group position={[-2, -1.2, 0]} scale={[3, 3, 3]}>
        <AvatarEducation animation={"Typing"} />
      </group>
    </group>
  </Canvas>
   <div className = "absolute  z-20 top-1/6 left-15 flex space-y-2">
              <div className=" bg-white/80 backdrop-blur-md+7-9 opacity-0 animate-fade-in-delay-4 text-glow text-black px-3 py-2 rounded-2xl shadow-lg">
              <span className="ml-1 ">{messageThird}</span>
            </div>
            </div>

            <div className="absolute top-1/3   z-20 opacity-5 animate-fade-in-delay-4  right-1 flex flex-col space-y-3">
                <div className="message-container absolute top-1/3 right-10">
                  <div className="message message-1 bg-white/80  text-glow backdrop-blur-md text-black px-3 py-2 rounded-2xl shadow-lg">
                    <span className="ml-1">{messageFirst}</span>
                  </div>
                  <div className="message message-2 bg-white/80 text-glow  backdrop-blur-md text-black px-3 py-2 rounded-2xl shadow-lg">
                    <span className="ml-3">{messageSecond}</span>
                  </div>
                  <div className="message message-3 bg-white/80  text-glow backdrop-blur-md text-black px-3 py-2 rounded-2xl shadow-lg">
                    <span className="ml-3">{messageFourth}</span>
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