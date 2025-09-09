import { ExternalLink, Github, ArrowRight } from "lucide-react";
import React from "react";


const projects = [
    {
        id: 1,
        name: "DMT - Proms ++ App",
        description: "The DMT - Proms ++ App is a customizable and flexible platform designed to support various medical use cases.",
        imageUrl: "public/projects/medical_project.jpg",
        tags: ["Kotlin", "Android Studio","Compose Multiplatform", "GitHub"],
        demoUrl: "#",
        githubUrl: "https://github.com/YanaNayda/DMT---Proms-"
    },
    {
        id: 2,
        name: "PawPal",
        description: "A social network for pet lovers to connect, share, and shop.",
        imageUrl: "public/projects/pawpal.jpg",
        tags: ["Node.js", "Express", "MongoDB", "React Native", "FireBase", "GitHub"],
        demoUrl: "#",
        githubUrl: "https://github.com/YanaNayda/PawPal-client"
    },
    {
        id: 3,
        name: "GymBro",
        description:  "A workout planner app that provides personalized training programs based on fitness level and available equipment.",
        imageUrl: "public/projects/gymbro2.jpg",
        tags: ["Java", "Android Studio", "Firebase ", "GitHub"],
        demoUrl: "#",
        githubUrl: "https://github.com/YanaNayda/GymBro"
    },

]


export  const ProjectsSections = () =>{
    return( 
    <section id="projects" className="py-24 px-4 relative">
        <div className ="container mx-auto max-w-5xl">
            <h2 className = "text-3xl md:text-4xl font-bold mb-8 text-center">
                {""}
                Featured <span className="text-primary"> Projects</span>
            </h2>
            <p className ="text-center text-muted-foreground mb-12">
                Here are some of the projects I've worked on recently. Click on any project to learn more about it. 
            </p>
            
            <div className = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <div 
                        key={project.id}
                        className="bg-card rounded-lg shadow-xs overflow-hidden card-hover">
                    {/* image */}
                    <div className="h-48 overflow-hidden">
                        <img 
                            src={project.imageUrl}
                            alt={project.name}
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" />
                    </div>

                    {/* text */}
                    <div className="p-4">
                     
                         

                    {/* tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                            <span className="px-2 py-1 font-medium border text-xs rounded-full bg-secondary text-secondary " key={tag}>
                                {tag}</span>))}
                    </div>

                    <h3 className="text-xl font-semibold mb-1">{project.name}</h3>
                    <p className="text-muted-foreground  text-sm mb-4">{project.description}</p>

                    {/* links */}
                    <div className="flex space-x-3">
                        <a 
                            href={project.demoUrl}
                            target="_blank"
                            className="text-foreground/80 hover:text-primary transition-colors duration-300">
                            {""}
                            <ExternalLink size={20}/>
                        </a>
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
                    Check My Github <ArrowRight size={16} className="inline-block ml-2"/>
                </a>
            </div>

        </div>
    </section>
)}
        