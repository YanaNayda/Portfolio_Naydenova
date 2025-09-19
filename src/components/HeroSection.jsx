import React, { useState, useEffect } from "react";
import { ArrowDown, MessageSquare, Code, Rocket } from "lucide-react";
import { Canvas } from "@react-three/fiber";
import { ContactShadows } from "@react-three/drei";
import { Avatar } from "./Avatar.jsx";
import { useControls } from "leva";
import { motion, AnimatePresence } from "framer-motion";
import AvatarCanvas from "./AvatarCanvas.jsx";  


export const HeroSection = () => {  
  const messageFirst = "Hello there!"
  const messageSecond = "I love coding 🚀"
  const messageThird = "Let's build something cool!"
  const [visibleMessages, setVisibleMessages] = useState([]);
 
 

  return (
    <section id="hero" className="relative min-h-screen flex items-center">
      <div className="blob blob--teal absolute left-0 top-0 -translate-y-1/2 -translate-x-1/2 w-72 h-32"></div>
      <div className="blob blob--teal h-[100px] absolute left-20 top-[200px] -translate-y-1/2 -translate-x-1/2 w-64"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 items-center relative max-w-[80%] mx-auto gap-2">
        <div className="space-y-10">
          <h1 className="text-3xl md:text-6xl text-center tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>
            <span className="text-primary text-glow opacity-0 animate-fade-in-delay-1"> Yana</span>
            <span className="text-primary text-glow opacity-0 animate-fade-in-delay-2"> Naydenova</span>
          </h1>

          <p className="text-lg md:text-3xl text-muted-foreground max-w-3xl text-center mx-auto opacity-0 animate-fade-in-delay-2">
            Computer Science graduate and software developer passionate about
            creating clean, user-friendly applications and exploring modern
            technologies.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>

        <div className="relative h-full">
          <div className="blob blob--teal absolute left-0 top-0 -translate-y-1/2 -translate-x-1/2 w-72 h-32 opacity-70"></div>
          <div className="blob blob--teal h-[100px] absolute left-20 top-[200px] -translate-y-1/2 -translate-x-1/2 w-64 opacity-70"></div>
          <div className="blob blob--purple absolute left-40 top-[100px] w-48 h-48 opacity-60"></div>
          <div className="blob blob--yellow absolute right-10 top-[50px] w-56 h-56 opacity-50"></div>
            <div className="blob blob--pink absolute top-[250px] left-0 w-64 h-64"></div>
            <div className="blob blob--blue absolute top-[350px] right-[200px] w-64 h-64"></div>
            <div className="blob blob--blue absolute bottom-10 right-10 w-64 h-64"></div>
        
            <AvatarCanvas animation={"Greeting"} />

            <div className="absolute top-1/3 right-10 flex flex-col space-y-3">
              <div className="message-container absolute top-1/3 right-30">
            <div className="message message-1 bg-white/80 backdrop-blur-md text-black px-3 py-2 rounded-2xl shadow-lg">
              <span className="ml-1">{messageFirst}</span>
            </div>
            <div className="message message-2 bg-white/80 backdrop-blur-md text-black px-3 py-2 rounded-2xl shadow-lg">
              <span className="ml-3">{messageSecond}</span>
            </div>
            <div className="message message-3 bg-white/80 backdrop-blur-md text-black px-3 py-2 rounded-2xl shadow-lg">
              <span className="ml-3">{messageThird}</span>
            </div>
          </div>
            </div>
         
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary ml-2" />
      </div>
    </section>
  );
};