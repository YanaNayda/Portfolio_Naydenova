import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [

   // Programming Language
  { name: "Java", level: 55, category: "Programming Language" },
  { name: "Kotlin", level: 55, category: "Programming Language" },
  { name: "JavaScript", level: 55, category: "Programming Language" },
  { name: "C", level: 55, category: "Programming Language" },
  { name: "Python", level: 45, category: "Programming Language" },
  
  // Framework
  { name: "React", level: 45, category: "Framework" },
  { name: "React Native", level: 75, category: "Framework" },
  { name: "Node.js", level: 55, category: "Framework" },
  { name: "Express.js", level: 65, category: "Framework" },
  {name :"Compose Multiplatform", level:75, category:"Framework"},
  {name :"Jetpack Compose", level:75, category:"Framework"},


  // Database
  { name: "MySQL", level: 60, category: "Database" },
  { name: "MongoDB", level: 65, category: "Database" },

  // Tools
  { name: "GitHub", level: 75, category: "Tools" },
  { name: "Postaman", level: 75, category: "Tools" },
  { name: "Android Studio", level: 75, category: "Tools" },
  { name: "Visual Studio Code", level: 70, category: "Tools" },


  // Design
  { name: "Figma", level: 55, category: "Design" },
  { name: "Canva", level: 75, category: "Design" },
];
const categories = ["All", "Programming Language", "Framework", "Database", "Tools", "Design"];

export const SkillsSection = () => {

    const [activeCategory, setActiveCategory] = useState("All");

    const filteredSkils =skills.filter((skill) =>
        activeCategory === "All" ? true : skill.category === activeCategory
    );
    
    return ( 
    <section id="skills"
        className="relative py-20 px-4 bg-secondary/30"
    >
        <div className="container max-w-5xl mx-auto">
            <h2  className="text-4xl font-bold mb-8 text-center">
                My <span className="text-primary  " > Skills </span>
            </h2>

            <div className="flex justify-center mb-12 gap-4  flex-wrap">
                {categories.map((category, key) => (
                    <button 
                        key={key}
                        className={cn("px-5 py-2 rounded-full border  hover:bg-primary/10  transition-colors duration-300 ",
                            activeCategory=== category?
                            "bg-primary/10 border-primary text-primary":
                            "border-muted-foreground text-primary"
                )}
                        onClick={() => setActiveCategory (category)}
                    >
                        {category}
                    </button>
                ))}

            </div>
            

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {filteredSkils.map((skill, key) => (
                    <div
                        key={key}
                        className="bg-card p-6 rounded-lg shadow-xs card-hover mb-6">
                        <div>
                            <h3 className="text-2xl font-semibold mb-2 text-center">{skill.name}</h3>
                            <p className="text-m text-primary mb-2 text-center">{skill.category}</p> 
                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                <div className="bg-primary h-2 rounded-full  origin-left animate-[grow_1.5s_ease-out] "
                                     style={{ width:skill.level+ "%" }}>
                                </div>
                            </div>
                            <div className=" text-right mt-1">
                                <span className="text-sm text-muted-foreground">{skill.level}%</span>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
    )
}