import { ExternalLink, Github, ArrowRight } from "lucide-react";
import React from "react";
import "../i18n";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { CardBody, CardContainer, CardItem } from "@/components/ui/shadcn-io/3d-card";
 
import "swiper/css/effect-coverflow";

    

const projects = [
    {
        id: 1,
        name: "DMT - Proms ++ App",
        description: "dmtProjectDescription",
        imageUrl: "/projects/medical_project.jpg",
        tags: ["Kotlin", "Android Studio","Compose Multiplatform", "GitHub"],
        githubUrl: "https://github.com/YanaNayda/DMT---Proms-"
    },
    {
        id: 2,
        name: "PawPal",
        description: "pawpalDescription",
        imageUrl: "/projects/paw_pal_logo.png",
        tags: ["Node.js", "Express", "MongoDB", "React Native", "FireBase", "GitHub"],
        githubUrl: "https://github.com/YanaNayda/PawPal-client"
    },
    {
        id: 3,
        name: "GymBro",
        description: "gymbroDescription",
        imageUrl: "/projects/gymbro.png",
        tags: ["Java", "Android Studio", "Firebase ", "GitHub"],
        githubUrl: "https://github.com/YanaNayda/GymBro"
    },

]


export  const ProjectsSections = () =>{
   const {t ,i18n} = useTranslation();
    return( 

    <section id="projects" className="  text-foreground relative min-h-screen bg-secondary">
      <div className=" relative z-20">
        <div className="container mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 max-w-7xl mx-auto">
                {t("projectsSection.featured")} <span className="text-primary">{t("projects")}</span>
            </h2>
            <p className="text-muted-foreground mb-12 max-w-4xl mx-auto">
                {t("projectsSection.hereAreSome")}
             </p>
        </div>

        {/*Desktop*/}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-10 px-4 sm:px-6 z-10 max-w-6xl item-center mx-auto">

          <div className="blob blob--teal absolute left-0 top-0 -translate-y-1/2 -translate-x-1/2  z-0 w-72 h-32 opacity-70"></div>
           <div className="blob blob--teal absolute right-0 top-0 z-0 w-72 h-32 opacity-70"></div>
          <div className="blob blob--teal h-[100px] absolute left-20 top-[200px]  z-0 -translate-y-1/2 -translate-x-1/2 w-64 opacity-70"></div>
          <div className="blob blob--pink absolute right-10 top-[50px] z-0 w-56 h-56 opacity-50"></div>
           <div className="blob blob--pink absolute left-10 top-[50px] z-0 w-56 h-56 opacity-50"></div>
          <div className="blob blob--blue absolute top-[350px] left-[200px] z-0 w-64 h-64"></div>
          <div className="blob blob--blue h-[100px] absolute right-20 top-[200px] -translate-y-1/2 -translate-x-1/2 w-64"></div>
        
        
          {projects.map((project) => (
             
            <div key={project.id} className="bg-card rounded-lg shadow-xs overflow-hidden z-20 card-hover">
              
              <div className="h-48 overflow-hidden">
                <img src={project.imageUrl} alt={project.name} className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" />
              </div>
              <div className="p-4">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 font-medium border text-xs rounded-full bg-secondary text-secondary">{tag}</span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-1">{project.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{t(`projectsSection.${project.description}`)}</p>
                <div className="flex space-x-3">
                  <a href={project.githubUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                    <Github size={20}/>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

  
        <div className="md:hidden w-full"> 
          <Swiper
            modules={[ EffectCoverflow, Pagination]}
            className="mySwiper relative z-20 "
            effect="coverflow"
            centeredSlides={true}        
            slidesPerView={1.4}  
            spaceBetween={20}
             
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            style={{ paddingBottom: '40px' }} // Add some bottom padding for pagination
            
            pagination={{ clickable: true }}
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id}  style={{ width: '80%' }} >
                <div className="bg-card rounded-lg overflow-hidden shadow-lg">
                  <div className="h-48 overflow-hidden">
                    <img src={project.imageUrl} alt={project.name} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"/>
                  </div>
                  <div className="p-4">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-2 py-1 font-medium border text-xs rounded-full bg-secondary text-secondary">{tag}</span>
                      ))}
                    </div>
                    <h3 className="text-xl font-semibold mb-1">{project.name}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{t(`projectsSection.${project.description}`)}</p>
                    <div className="flex space-x-3">
                      <a href={project.githubUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                        <Github size={20}/>
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
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
        