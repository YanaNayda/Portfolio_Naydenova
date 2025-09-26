import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Send } from "lucide-react"
import {cn} from "@/lib/utils"
import { AvatarContact } from "./AvatarContact";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { ContactShadows } from "@react-three/drei";
import { useControls } from "leva";
import "../i18n";

export const ContactSection = () => {


    const message ="Thank you for visiting my portfolio! I’m excited to connect and explore opportunities together. Whether you have a project in mind, want to discuss potential collaborations, or simply wish to say hello, feel free to reach out. "
    const handleSubmit = (e) => {
        e.preventDefault();

        setTimeout(() => {
            alert("Message sent successfully!");
        }, 500);
    }



    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className ="container  ">
                 <h2 className="text-2xl font-bold mb-8 text-center md:text-3xl lg:text-4xl"> 
                    Get In <span className="text-primary"> Touch</span>
                </h2>
            </div>
 
            <div className = "text-xenter text-muted-foreground mb-12 max-w-7xl mx-auto">
                  
                <div className="space-y-8 ">
                     
                    <h3 className ="text-2xl font-semibold mb-10"> Contact Information </h3>
                    <div className="space-y-6 justify-center text-center ">
                        <div className="flex flex-col lg:flex-row gap-8 mb-8 justify-center text-center">
    
                        <div className="flex  items-center text-center mb-6 space-x-4 space-y-8">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Mail className="h-6 w-6 text-primary"/>
                            </div>
                            <div>
                                <h4 className="font-semibold text-lg text-left"> Email</h4>
                                <a href="mailto:naydenova.yn@gmail.com" className="text-muted-foreground hover:text-primary transition-colors" > naydenova.yn@gmail.com </a>
                       
                            </div>
                        </div>

                          <div className="flex items-center text-center mb-6 space-x-4 space-y-8">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Phone className="h-6 w-6 text-primary"/>
                            </div>
                            <div>
                                <h4 className="font-semibold text-lg text-left"> Phone</h4>
                                <a href="tel:+972539525562" className="text-muted-foreground hover:text-primary transition-colors" > +972-539525562 </a>
                       
                            </div>
                        </div>

                         <div className="flex items-center text-center mb-6 space-x-4 space-y-8">
                            <div className="p-3 rounded-full bg-primary/10">
                                <MapPin className="h-6 w-6 text-primary"/>
                            </div>
                            <div>
                                <h4 className="font-semibold text-lg text-left"> Location</h4>
                                <a className="text-muted-foreground hover:text-primary transition-colors" > Holon, Israel </a>
                       
                            </div>
                        </div>
                        </div>

                        
                        <h4 className ="text-2xl font-semibold text-center mb-6" >Connect With Me </h4>

                        <div className="pt-4 text-center  z-20" >
                            <div className="flex space-x-4  z-0 justify-center text-center justify-center mt-4">
                                <a href="https://www.linkedin.com/in/yana-naydenova/" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                                    <Linkedin/>
                                </a>
                                 <a href="https://www.facebook.com/profile.php?id=100016418804566&locale=ru_RU" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                                    <Facebook/>
                                </a>
                                 <a href="https://www.instagram.com/yana.nayda/" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                                    <Instagram/>
                                </a>
                            </div>
                        </div>
                    <div className="container mx-auto py-12 relative z-10">
  <div className="flex flex-col lg:flex-row gap-8">
    
   <div className="absolute inset-0 -z-10 pointer-events-none">
    <div className="absolute -left-32 flex flex-col items-center space-y-6">
      <div className="blob blob--teal w-72 h-32 opacity-70"></div>
      <div className="blob blob--teal w-64 h-64 opacity-70"></div>
      <div className="blob blob--purple w-48 h-48 opacity-60"></div>
      <div className="blob blob--yellow w-56 h-56 opacity-50"></div>
      <div className="blob blob--pink w-64 h-64"></div>
      <div className="blob blob--blue w-64 h-64"></div>
      <div className="blob blob--teal w-64 h-64 opacity-70"></div>
    </div>
  </div>
    <div className="lg:w-2/3 w-full bg-card px-8 py-10 rounded-lg shadow-xs">
      <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
      <form className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
          <input 
            type="text" 
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 border rounded bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Pedro Pedro"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
          <input 
            type="text" 
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 border rounded bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="example@gmail.com"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
          <textarea 
            id="message"
            name="message"
            required
            className="w-full px-4 py-3 border rounded bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none h-32"
            placeholder="Hello! I'd like to talk about..."
          />
        </div>
        <button type="submit" className="cosmic-button w-full flex items-center justify-center gap-2">
          Send Message
        </button>
      </form>
    </div>

     
    <div className="lg:w-1/3 w-full  relative">
     <div className="absolute inset-0 -z-10 -left-32 flex flex-col items-center z-[-1] space-y-6">
    <div className="blob blob--teal z-20w-72 h-32 opacity-70"></div>
    <div className="blob blob--teal z-20w-64 h-64 opacity-70"></div>
    <div className="blob blob--purple z-20 w-48 h-48 opacity-60"></div>
    <div className="blob blob--yellow z-20 w-56 h-56 opacity-50"></div>
    <div className="blob blob--pink  z-20 w-64 h-64"></div>
    <div className="blob blob--blue z-20 w-64 h-64"></div>
    <div className="blob blob--teal z-20 w-64 h-64 opacity-70"></div>
  </div>
      <Canvas className="w-full h-full relative z-10" camera={{ position: [0, 2, 6], fov: 45 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} />
        <group position-y={-2}>
          <AvatarContact animation={"Thankful"} scale={[2.5, 2.5, 2.5]} />
          <ContactShadows opacity={1} scale={10} blur={1} far={10} />
        </group>
      </Canvas>
      <div className="absolute z-20 absolute bottom-10 right-4 max-w-xs">
            <div className="bg-white/80 backdrop-blur-md opacity-100 text-glow text-black px-3 py-2 rounded-2xl shadow-lg">
                <span className="ml-1">{message}</span>
            </div>
        </div>
    </div>
  </div>
</div>
                </div>
                 </div>
            </div>    
            
        </section>
    )}