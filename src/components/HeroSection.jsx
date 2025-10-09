import React, { useState, useEffect } from "react";
import { ArrowDown, MessageSquare, Code, Rocket } from "lucide-react";
import { Canvas } from "@react-three/fiber";
import { ContactShadows } from "@react-three/drei";
import { AvatarHero } from "./AvatarHero.jsx";
import { useControls } from "leva";
import { cn } from "../lib/utils";
import { motion, AnimatePresence } from "framer-motion";
 import "../i18n";
 import { useTranslation } from "react-i18next";
import { GradientText } from '@/components/ui/shadcn-io/gradient-text';

  const MemoAvatar = React.memo(AvatarHero);
export const HeroSection = () => {  
  
  const [visibleMessages, setVisibleMessages] = useState([]);
  const {t ,i18n} = useTranslation();
 
 

  return (
    <section id="hero" className="relative min-h-screen flex items-center top-20">
      <div className="blob blob--teal absolute left-0 top-0 -translate-y-1/2 -translate-x-1/2 w-72 h-32"></div>
      <div className="blob blob--teal h-[100px] absolute left-20 top-[200px] -translate-y-1/2 -translate-x-1/2 w-64"></div>
      <div className="blob blob--teal h-[100px] absolute right-20 top-[200px] -translate-y-1/2 -translate-x-1/2 w-64"></div>

      <div className="grid grid-cols-1 lg:grid-cols-2 space-y-6 items-center relative max-w-[80%] mx-auto gap-2">
      
        <div className="space-y-10 item-center  z-20">
          <img
            src="./public/projects/photo_blue.png"
            alt="Avatar"
            className="
                 
                mx-auto object-cover object-center shadow-lg
                md:h-52 w-52        
                sm:h-60 sm:w-60 
                md:h-68 md:w-68   
                lg:h-74 lg:w-74  
                xl:h-82 xl:w-82  "/>

          <h1 className="text-4xl md:text-6xl text-center tracking-tight">
  {i18n.language === "he" ? (
    <>
      <GradientText
        text={t("nameYanaNaydenova")}
        gradient="linear-gradient(95deg, #4b02c1ff 0%, rgba(101, 94, 211, 1) 50%, #1c1497ff 70%)"
        className="text-primary opacity-0 animate-fade-in-delay-1 inline-block"
      />
      <span className="opacity-0 animate-fade-in inline-block">
          &nbsp;{t("greeting")}
      </span>
    </>
  ) : (
    <>
      <span className="opacity-0 animate-fade-in inline-block">
        {" "}
        {t("greeting")}
      </span>
       <span className="opacity-0 animate-fade-in inline-block">
        &nbsp;
        {" "}
      </span>
      <GradientText
        text={t("nameYanaNaydenova")}
        gradient="linear-gradient(95deg, #4b02c1ff 0%, rgba(101, 94, 211, 1) 50%, #1c1497ff 70%)"
        className="text-primary opacity-0 animate-fade-in-delay-1 inline-block"
      />
    </>
  )}
</h1>

          <p className="text-lg md:text-3xl text-muted-foreground max-w-3xl text-center mx-auto opacity-0 animate-fade-in-delay-2">
            {t("textAbout")}
          </p>

          <div className=" md:text-lg  sm:text-md pt-6 opacity-0 animate-fade-in-delay-4 h-18 ">
            <a href="#projects" className="button-hero">
              {t("viewWork")}
            </a>
          </div>
        </div>

        <div className="relative h-full">
          <div className="blob blob--teal absolute left-0 top-0 -translate-y-1/2 -translate-x-1/2  z-0 w-72 h-32 opacity-70"></div>
          <div className="blob blob--teal h-[100px] absolute left-20 top-[200px]  z-0 -translate-y-1/2 -translate-x-1/2 w-64 opacity-70"></div>
          <div className="blob blob--pink absolute right-10 top-[50px] z-0 w-56 h-56 opacity-50"></div>
          <div className="blob blob--pink absolute top-[250px] z-0 left-0 w-64 h-64"></div>
          <div className="blob blob--blue absolute top-[350px] right-[200px] z-0 w-64 h-64"></div>
          <div className="blob blob--teal h-[200px] absolute left-20 top-[250px] -translate-y-1/2 -translate-x-1/2 z-0 w-64 opacity-70"></div>
        
  
          
           
          <Canvas
        className="min-h-screen hidden lg:flex opacity-0 z-30 animate-fade-in-delay-3"
      camera={{ position: [0, 2, 9], fov: 15 }}
    >
      <ambientLight intensity={1} />
      <directionalLight position={[5, 5, 5]} />
      <group position-y={-1}>
        <ContactShadows
          opacity={1}
          scale={10}
          blur={1}
          far={10}
          resolution={256}
          color="rgba(0, 0, 0, 1)"
        />
        <MemoAvatar animation={"Greeting"} />
      </group>
    </Canvas>
            <div className = "absolute  hidden lg:flex  z-20 top-1/6 left-15 flex space-y-2">
              <div className=" bg-white/80 backdrop-blur-md+7-9 opacity-0 animate-fade-in-delay-4 text-glow text-black px-3 py-2 rounded-2xl shadow-lg">
              <span className="ml-1 "> {t("messageThirdAbout")} </span>
            </div>
            </div>

            <div className="absolute top-1/3 hidden lg:flex  z-20 opacity-5 animate-fade-in-delay-4  right-1 flex flex-col space-y-3">
                <div className="message-container absolute top-1/3 right-10">
                  <div className="message message-1 bg-white/80  text-glow backdrop-blur-md text-black px-3 py-2 rounded-2xl shadow-lg">
                    <span className="ml-1"> {t("messageFirstAbout")}</span>
                  </div>
                  <div className="message message-2 bg-white/80 text-glow  backdrop-blur-md text-black px-3 py-2 rounded-2xl shadow-lg">
                    <span className="ml-3"> {t("messageSecondAbout")}</span>
                  </div>
                  <div className="message message-3 bg-white/80  text-glow backdrop-blur-md text-black px-3 py-2 rounded-2xl shadow-lg">
                    <span className="ml-3"> {t("messageFourthAbout")}</span>
                  </div>
                </div>
            </div>
         
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">{t("scroll")}</span>
        <ArrowDown className="h-5 w-5 text-primary ml-2" />
      </div>
    </section>
  );
};