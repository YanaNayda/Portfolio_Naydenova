import React from "react";
import { cn } from "@/lib/utils";
import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
    return (
        <section id="hero" className="relative min-h-screen flex   items-center relative   mx-auto  relative">
           <div className="grid grid-cols-1 md:grid-cols-2 items-center relative max-w-[90%] mx-auto gap-4">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight space-y-6">
                        <span className="opacity-0 animate-fade-in">Hi, I'm</span> 
                        <span className="text-primary opacity-0 animate-fade-in-delay-1"> Yana</span> 
                        <span className="text-primary opacity-0 animate-fade-in-delay-2"> Naydenova</span> 
                    </h1>

                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-2">
                    Computer Science graduate and software developer passionate about creating clean, user-friendly applications and exploring modern technologies.
                </p>

                <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                     <a href="#projects" className="cosmic-button">
                         View My Work
                    </a>
            </div>
            </div>

            <div className="flex justify-center items-center">
                <img 
                    src={'public/projects/photo_.jpg'} 
                    alt="My Image" 
                    className="rounded-full w-82 h-82 object-cover opacity-0 animate-fade-in-delay-4" 
                />
            </div>
            </div>

            <div  className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col item-center animate-bounce">
                <span  className="text-sm text-muted-foreground md-2">Scroll</span>
                 <ArrowDown className="h-5 w-5  text-primary ml-2 item-center"/>

            </div>

        </section>
    );
}