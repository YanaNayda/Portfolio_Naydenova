import React from "react";
import Timeline from "./Timeline";
import {GraduationCap ,School,  BookOpen } from "lucide-react"

const education = [
    {
        id: 1,
        title: "Graduation1",
        location: "University of XYZ",
        description: "This is a brief description of Project One.",
        date: "2019 - 2023",
        buttonText: "Details",
        demoUrl: "#",
        icon: GraduationCap,
        color:"bg-blue-500"
    },{
        id: 2,
        title: "Graduation2",
        location: "University of XYZ",
        description: "This is a brief description of Project One.",
        date: "2019 - 2023",
        buttonText: "Details",
        demoUrl: "#",
        icon: School,
        color:"bg-blue-500"
    },{
        id: 3,
        title: "Graduation3",
        location: "University of XYZ",
        description: "This is a brief description of Project One.",
        date: "2019 - 2023",
        buttonText: "Details",
        demoUrl: "#",
        icon: BookOpen,
        color:"bg-blue-500"
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
      <div className="container mx-auto max-w-5xl">
        <Timeline defaultColor="bg-blue-500" education={education} />
      </div>
    </section>
  );
};