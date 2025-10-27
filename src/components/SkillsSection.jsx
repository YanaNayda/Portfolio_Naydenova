import { useState } from "react";
import { cn } from "@/lib/utils";
import { Canvas } from "@react-three/fiber";
import React  from "react";
import { ArrowDown } from "lucide-react";
import { ContactShadows, OrbitControls } from "@react-three/drei";
import { useControls } from "leva"; 
import "../i18n";
import { useTranslation } from "react-i18next";

const skills = [

   // Programming Language
  { name: "Kotlin",   category: "programmingLanguage" },
  { name: "JavaScript",   category: "programmingLanguage" },
  { name: "C",   category: "programmingLanguage" },
  { name: "Python",   category: "programmingLanguage" },
  
  // Framework
  { name: "React",  category: "framework" },
  { name: "React Native",   category: "framework" },
  { name: "Node.js",   category:"framework" },
  { name: "Express.js" , category:"framework" },
  {name :"Compose Multiplatform",  category: "framework"},
  {name :"Jetpack Compose",   category:"framework"},


  // Database
  { name: "MySQL",  category: "database" },
  { name: "MongoDB",   category: "database" },

  // Tools
  { name: "GitHub",  category: "tools" },
  { name: "Postaman",   category: "tools" },
  { name: "Android Studio",   category: "tools" },
  { name: "Visual Studio Code",  category: "tools"},


  // Design
  { name: "Figma",  category: "design" },
  { name: "Canva",  category: "design" },
];

const categories = [
  { key: "all", filter:  "all" },
  { key: "programmingLanguage", filter: "programmingLanguage"},
  { key: "framework", filter: "framework" },
  { key: "database", filter: "database" },
  { key: "tools", filter: "tools" },
  { key: "design", filter:"design" },
];

export const SkillsSection = () => {

    const {t ,i18n} = useTranslation();
    const [activeCategory, setActiveCategory] = useState("all");
    const filteredSkils =skills.filter((skill) =>
        activeCategory === "all" ? true : skill.category === activeCategory
    );
    
     return ( 
        
        <section id="skills"   className="relative py-20 px-4 min-h-screen ">
            <div className="blob blob--teal absolute left-0 top-0 -translate-y-1/2 -translate-x-1/2  z-0 w-72 h-32 opacity-70"></div>
          <div className="blob blob--pink absolute right-10 top-[50px] z-0 w-56 h-56 opacity-50"></div>
          <div className="blob blob--pink absolute top-[250px] z-0 left-0 w-64 h-64"></div>
          <div className="blob blob--teal h-[200px] absolute left-20 top-[250px] -translate-y-1/2 -translate-x-1/2 z-0 w-64 opacity-70"></div>
          
        
            <div className="container max-w-6xl mx-auto relative z-10">
                <h2 className="text-4xl font-bold mb-8 text-center z-40">
  {i18n.language === "he" ? (
    <>
      <span className="text-primary z-30">{t("skills")}</span> {t("my")}
    </>
  ) : (
    <>
      {t("my")} <span className="text-primary z-30">{t("skills")}</span>
    </>
  )}
</h2>

                <div className="flex justify-center mb-12 gap-4 flex-wrap  z-10">
                    {categories.map(({ key, filter }) => (
                        <button
                            key={key}
                            className={cn(
                                "px-5 py-2 rounded-lg border     duration-500  z-10 ",
                                activeCategory === filter
                                ? "bg-primary/10 border-white  z-40 text-primary"
                                : "border-muted-foreground  z-40 text-white"
                            )}
                            onClick={() => setActiveCategory(filter)}
                        >
                            {t(key)}
                        </button>
                    ))}
                </div>

                 
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 md:gap-6 lg:gap-8 items-center">
                      

                        {filteredSkils.map((skill, key) => (
                            <div
                                key={key}
                                className="bg-card sm:p-4 md:p-6 lg:p-8 p-4 rounded-lg shadow-lg  card-hover z-20"
                            >
                                <h3 className="text-md sm:text-xl md:text-2xl  font-semibold mb-2 text-center">{skill.name}</h3>
                                <p className="text-sm text-white mb-2 text-center">{t( skill.category)}</p> 
                                 
                                
                            </div>
                        ))}
                    
                </div>
                 
            </div>
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-background pointer-events-none"></div>
        </section>
    )
}