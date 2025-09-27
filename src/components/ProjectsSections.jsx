import { ExternalLink, Github, ArrowRight } from "lucide-react";
import React from "react";
import "../i18n";
import { useTranslation } from "react-i18next";

    

const projects = [
    {
        id: 1,
        name: "DMT - Proms ++ App",
        description: "dmtProjectDescription",
        imageUrl: "public/projects/medical_project.jpg",
        tags: ["Kotlin", "Android Studio","Compose Multiplatform", "GitHub"],
        githubUrl: "https://github.com/YanaNayda/DMT---Proms-"
    },
    {
        id: 2,
        name: "PawPal",
        description: "pawpalDescription",
        imageUrl: "public/projects/pawpal.jpg",
        tags: ["Node.js", "Express", "MongoDB", "React Native", "FireBase", "GitHub"],
        githubUrl: "https://github.com/YanaNayda/PawPal-client"
    },
    {
        id: 3,
        name: "GymBro",
        description: "gymbroDescription",
        imageUrl: "public/projects/gymbro.png",
        tags: ["Java", "Android Studio", "Firebase ", "GitHub"],
        githubUrl: "https://github.com/YanaNayda/GymBro"
    },

]


export  const ProjectsSections = () =>{
   const {t ,i18n} = useTranslation();
    return( 

   <section id="projects" className="py-24 px-4 sm:px-6 text-foreground relative min-h-screen bg-secondary  ">

        <div className="absolute inset-0 flex items-center justify-center flex-col z-0 space-y-6">
            <div className="blob blob--teal   w-72 h-32 opacity-70"></div>
            <div className="blob blob--teal    w-64 h-64 opacity-70"></div>
            <div className="blob blob--pink w-64 h-64"></div>
        </div>
         <div className="absolute inset-0 flex items-center justify-center z-0 space-y-6">
            <div className="blob blob--teal   w-72 h-32  "></div>
            <div className="blob blob--teal    w-64 h-64  "></div>
            <div className="blob blob--pink w-64 h-64"></div>
        </div>


        <div className ="container mx-auto max-w-6xl relative  z-20">
            <h2 className = "text-3xl md:text-4xl font-bold mb-8 text-center">
                {""}
                {t("projectsSection.featured")} <span className="text-primary">  {t("projects")}</span>
            </h2>
            <p className ="text-center text-muted-foreground mb-12">
                {t("projectsSection.hereAreSome")}
            </p>
                 
            
            <div className = "grid grid-cols-1 z-10 sm:grid-cols-2 lg:grid-cols-3 gap-8   ">
                {projects.map((project) => (
                    <div 
                        key={project.id}
                        className="bg-card rounded-lg shadow-xs overflow-hidden card-hover">
                    {/* image */}
                    <div className="h-48 overflow-hidden">
                        <img 
                            src= {project.imageUrl}
                            alt={project.name}
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" />
                    </div>

                    {/* text */}
                    <div className="p-4">
                     
                         

                    {/* tags */}
                    <div className="flex flex-wrap  z-10 gap-2 mb-4">
                        {project.tags.map((tag) => (
                            <span className="px-2 py-1 font-medium border text-xs rounded-full bg-secondary text-secondary " key={tag}>
                                {tag}</span>))}
                    </div>

                    <h3 className="text-xl font-semibold mb-1">{project.name}</h3>
                    <p className="text-muted-foreground  text-sm mb-4">  {t(`projectsSection.${project.description}`)}</p>

                    {/* links */}
                    <div className="flex space-x-3">
                       
                        <a  
                            href={project.githubUrl} 
                            target="_blank"
                            className="text-foreground/80 hover:text-primary transition-colors duration-300">
                            {""}
                            <Github size={20}/>
                        </a>
                         
                    </div>
                    
                </div>
            </div>
        ))}
            </div>
            <div className="text-center mt-12">
                <a className="cosmic-button w-fit flex items-center mx-auto "
                target="_blank"
                    href="https://github.com/YanaNayda">
                    {t("projectsSection.checkMyGithub")}
                     <ArrowRight size={16} className="inline-block ml-2"/>
                </a>
            </div>

        </div>
    </section>
)}
        