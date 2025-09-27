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
        <section id="skills" className="relative py-20 px-4 bg-secondary/30">
            <div className="container max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold mb-8 text-center">
                   {t("my")} <span className="text-primary"> {t("skills")} </span>
                </h2>

                <div className="flex justify-center mb-12 gap-4 flex-wrap">
                    {categories.map(({ key, filter }) => (
                        <button
                            key={key}
                            className={cn(
                                "px-5 py-2 rounded-lg border hover:bg-primary/10 transition-colors duration-300",
                                activeCategory === filter
                                ? "bg-primary/10 border-primary text-primary"
                                : "border-muted-foreground text-primary"
                            )}
                            onClick={() => setActiveCategory(filter)}
                        >
                            {t(key)}
                        </button>
                    ))}
                </div>

                 
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                      <div className="blob blob--teal absolute left-0 top-0 -translate-y-1/2 -translate-x-1/2 w-72 h-32 opacity-70"></div>
                        <div className="blob blob--teal h-[100px] absolute left-20 top-[200px] -translate-y-1/2 -translate-x-1/2 w-64 opacity-70"></div>
                        <div className="blob blob--purple absolute left-40 top-[100px] w-48 h-48 opacity-60"></div>
                        <div className="blob blob--yellow absolute right-10 top-[50px] w-56 h-56 opacity-50"></div>
                        <div className="blob blob--pink absolute top-[250px] left-0 w-64 h-64"></div>
                        <div className="blob blob--blue absolute top-[350px] right-[200px] w-64 h-64"></div>
                        <div className="blob blob--teal h-[200px] absolute left-20 top-[250px] -translate-y-1/2 -translate-x-1/2 w-64 opacity-70"></div>

                        {filteredSkils.map((skill, key) => (
                            <div
                                key={key}
                                className="bg-card p-8 rounded-lg shadow-lg   card-hover z-20"
                            >
                                <h3 className="text-2xl font-semibold mb-2 text-center">{skill.name}</h3>
                                <p className="text-m text-primary mb-2 text-center">{t( skill.category)}</p> 
                                 
                                
                            </div>
                        ))}
                    
                </div>
                 
            </div>
        </section>
    )
}