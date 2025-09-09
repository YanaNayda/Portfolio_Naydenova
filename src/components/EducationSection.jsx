import React from "react";
import Timeline from "./Timeline";
import {GraduationCap ,School,  BookOpen } from "lucide-react"
import bagrut from "../../public/documents/bagrut.pdf"
import bachelor from "../../public/documents/bachelor.pdf"

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
        description: "Graduated with a final GPA of 85+, having learned core software development principles and collaborated on real-world projects during the final year.",
        date: "2022 - 2025",
        buttonText: "Details",
        demoUrl: bachelor,
        icon: GraduationCap,
        color:"text-gray-800" 
    },{
        id: 3,
        title: "Boarding School Program",
        location: " Ort Yad Leibovitz & Naale",
        description: "Outstanding student in the Systems Planning and Programming major .Graduated with honors (GPA: 104)",
        date: "2015 - 2018",
        buttonText: "Details",
        demoUrl: bagrut,
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