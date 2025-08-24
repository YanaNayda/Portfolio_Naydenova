import { useState } from "react";
import { cn } from "@/lib/utils";

const skills =[
    {name: "HTML", level: 95, category: "Programming Language"},
    {name: "CSS", level: 90, category: "Programming Language"},
    {name: "JavaScript", level:   85, category: "Programming Language"},
    {name: "React", level:  80, category: "Framework"},
    {name: "Node.js", level: 75, category: "Framework"},
    {name: "Python", level:  70, category: "Programming Language"},
    {name: "MongoDB", level: 65, category: "Database"},
    {name: "Git", level: 60 ,category: "Tools"},
    {name: "Figma", level: 55,category: "Design"},
    
]
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