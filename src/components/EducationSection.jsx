import React from "react";
import Timeline from "./Timeline";
import {GraduationCap ,School,  BookOpen } from "lucide-react"

const education = [
    {
        id: 1,
        title: "Master's degree in Computer Science",
        location: "Holon Institute of Technology",
        description: "Enrolled in a master's program to deepen knowledge in computer science and explore research opportunities.",
        date: "2025 - 2027",
        buttonText: "Details",
        demoUrl: "#",
        icon: GraduationCap,
         color:"text-gray-800" 
    },{
        id: 2,
        title: "Bachelor's degree in Computer Science",
        location: "Holon Institute of Technology",
        description: "Learned core software development principles and collaborated on real-world projects during the final year.",
        date: "2022 - 2025",
        buttonText: "Details",
        demoUrl: "#",
        icon: GraduationCap,
        color:"text-gray-800" 
    },{
        id: 3,
        title: "Graduation3",
        location: "University of XYZ",
        description: "This is a brief description of Project One.",
        date: "2019 - 2023",
        buttonText: "Details",
        demoUrl: "#",
        icon: "school",
        color:"text-gray-800" 
    }
]
export const EducationSection = () => {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-background text-foreground">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl font-bold mb-8 text-center">
          My <span className="text-primary"> Education </span>
        </h2>
      </div>
      <div className="container mx-auto max-w-5xl py-8  text-center">
        <Timeline defaultColor="bg-blue-500" education={education} />
      </div>
    </section>
  );
};