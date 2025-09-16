import React  from "react";
import { cn } from "@/lib/utils";
import { ArrowDown } from "lucide-react";
import { useState } from 'react';
 import { Canvas } from "@react-three/fiber";
 import { ContactShadows, OrbitControls } from "@react-three/drei";
 import { Avatar } from "./Avatar.jsx";
import { useControls } from "leva";

export const HeroSection = () => {

   const { animation } = useControls({
    animation: {
      value: "Typing",
      options: ["Typing", "Greeting", "Phone"],
    },
  });

    return (
         
        <section id="hero" className="relative min-h-screen flex   items-center relative    ">
            <div class="blob blob--teal absolute left-0 top-0 -translate-y-1/2 -translate-x-1/2 w-72 h-32 "></div>
            <div class="blob blob--teal  h-100 absolute left-20 top-200 -translate-y-1/2 -translate-x-1/2 w-64   "></div>
              
            <div className="grid grid-cols-1 md:grid-cols-2 items-center relative max-w-[80%] mx-auto gap-2">
                
                <div className="space-y-10">
                  
                    <h1 className="text-3xl md:text-6xl text-center  tracking-tight  ">
                        <span className="opacity-0   animate-fade-in">Hi, I'm</span> 
                        <span className="text-primary text-glow  opacity-0 animate-fade-in-delay-1"> Yana</span> 
                        <span className="text-primary text-glow  opacity-0 animate-fade-in-delay-2"> Naydenova</span> 
                    </h1>

                <p className="text-lg md:text-3xl text-muted-foreground max-w-3xl text-center mx-auto opacity-0 animate-fade-in-delay-2">
                    Computer Science graduate and software developer passionate about creating clean, user-friendly applications and exploring modern technologies.
                </p>

                <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                     <a href="#projects" className="cosmic-button">
                         View My Work
                    </a>
            </div>
            </div>

            {/* <div className="flex justify-center items-center">
                <img 
                    src={'./public/projects/photo_.jpg'} 
                    alt="My Image" 
                    className="rounded-full w-82 h-82 object-cover opacity-0 animate-fade-in-delay-4" 
                />
            </div> */}

            <div className="relative h-full"> 
                <div class="blob blob--pink space-y-250   "></div>
                 <div class="blob blob--blue  absolute  space-y-350 space-x-200 "></div>
                 <div className="blob blob--blue absolute bottom-10 right-10 w-64 h-64"></div>
                <Canvas className="min-h-screen opacity-0 space-y-2  flex  animate-fade-in-delay-4  " camera={{ position: [0, 2, 9], fov: 15 }}>
                    <ambientLight intensity={1} />
                    <directionalLight position={[5, 5, 5]} />
                    {/* <OrbitControls />   */}
                    <group position-y={-1}  >
                        <ContactShadows opacity={1} scale={10} blur={1} far={10}resolution={256} color="rgba(0, 0, 0, 1)"/>
                        <Avatar animation = {animation} />  
                    </group>
                    <ambientLight intensity ={1}/>
                </Canvas>
                </div>
            </div>

            <div  className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col item-center animate-bounce">
               
                <span  className="text-sm text-muted-foreground md-2">Scroll</span>
                 <ArrowDown className="h-5 w-5  text-primary ml-2 item-center"/>

            </div>
             

        </section>
         
    );  
}