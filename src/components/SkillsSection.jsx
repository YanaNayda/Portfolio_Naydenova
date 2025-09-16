import { useState } from "react";
import { cn } from "@/lib/utils";
import { Chair } from "./Chair";
import { Canvas } from "@react-three/fiber";
import React  from "react";
import { ArrowDown } from "lucide-react";
import { ContactShadows, OrbitControls } from "@react-three/drei";
import { Avatar } from "./Avatar.jsx";
import { useControls } from "leva";

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
        <section id="skills" className="relative py-20 px-4 bg-secondary/30">
            <div className="container max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold mb-8 text-center">
                    My <span className="text-primary"> Skills </span>
                </h2>

                <div className="flex justify-center mb-12 gap-4 flex-wrap">
                    {categories.map((category, key) => (
                        <button 
                            key={key}
                            className={cn(
                                "px-5 py-2 rounded-full border hover:bg-primary/10 transition-colors duration-300",
                                activeCategory === category
                                    ? "bg-primary/10 border-primary text-primary"
                                    : "border-muted-foreground text-primary"
                            )}
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                 
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {filteredSkils.map((skill, key) => (
                            <div
                                key={key}
                                className="bg-card p-6 rounded-lg shadow-xs card-hover"
                            >
                                <h3 className="text-2xl font-semibold mb-2 text-center">{skill.name}</h3>
                                <p className="text-m text-primary mb-2 text-center">{skill.category}</p> 
                                <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                    <div
                                        className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                                        style={{ width: skill.level + "%" }}
                                    />
                                </div>
                                <div className="text-right mt-1">
                                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                                </div>
                            </div>
                        ))}
                    </div>

                  
                    <div>
                        <Canvas camera={{ position: [0, 2, 9], fov: 15 }}>
                            <ambientLight intensity={1} />
                            <directionalLight position={[5, 5, 5]} />
                            <group>
                                <Chair />
                            </group>
                            <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
                            <ContactShadows position={[0, 0, 0]} opacity={0.5} scale={10} blur={1} />
                        </Canvas>
                    </div>
                </div>
            </div>
        </section>
    )
}