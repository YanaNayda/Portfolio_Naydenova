import { useState, useEffect } from "react";
import { cn } from "../lib/utils";
import { Menu, X ,Languages, GraduationCap} from "lucide-react";
import React from "react";
import {Moon,Sun, TurntableIcon} from "lucide-react"
import { useTranslation } from "react-i18next";
import "../i18n"; 

 const navItems = [
  { key: "home", href: "#hero" },
  { key: "aboutMe", href: "#about" },
  { key: "skills", href: "#skills" },
  { key: "education", href: "#education" },
  { key: "projects", href: "#projects" },
  { key: "contact", href: "#contact" },
];

const languages = [
    {name:"en" ,href: "#en"},
    {name:"ru" ,href: "#ru"},
    {name:"uk" ,href: "#uk"},
    {name:"he" ,href: "#he"},
   
]

export const Navbar = () =>{

    const {t ,i18n} = useTranslation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen,setIsMenuOpen] = useState(false);
    const [isLanguageOpen,setIsLanguageOpen] = useState(false);
    const[isDarkMode, setIsDarkMode] = useState(false)

  
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }
    const toggleTheme = () =>{
        if(isDarkMode){
           document.documentElement.classList.remove("dark")
            localStorage.setItem("theme", "light")
           setIsDarkMode(false)
        }else{
           setIsDarkMode(true)
              document.documentElement.classList.add("dark")
              localStorage.setItem("theme", "dark")
        } 
    }

    useEffect(() => {
          const theme = localStorage.getItem("theme")
        if(theme === "dark"){
            setIsDarkMode(true)
            document.documentElement.classList.add("dark")
         
        }else{
            setIsDarkMode(false)
            document.documentElement.classList.add("light")
            
        }

        const handleScroll = () => {
                setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
   },[isDarkMode])

        return (

        <nav className ={cn(
           "fixed w-full z-40 transition-all duration-300",
             isScrolled ? "py-4 bg-background/80 backdrop-blur-md shadow-xs" : "py-5" ) } >
                <div className="container flex justify-between items-center mx-auto px-4">
                   <a 
                    className="text-xl font-bold text-primary flex items-center" 
                    href="#hero" 
                    onClick={() => setIsMenuOpen(false)}>
                        <span className="relative z-11">
                            <span className="text-glow text-foreground"> {t("nameYanaNaydenova")}</span> {t("portfolio")}
                        </span>
                    </a>    

                    {/*desktop version*/}
                    <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-8 z-10">
                        {navItems.map((item,key) =>(
                            <a
                                key={item.key}
                                href={item.href}
                                className="text-lg text-foreground/80 hover:text-primary font-bold transition-colors duration-300"
                            >
                                {t(item.key)}
                            </a>
                        ))}               
                    </div>
                    <button className="btn-grad absolute right-0 md:right-4    z-20" onClick={     
                        () => setIsLanguageOpen(!isLanguageOpen)}>
                        {isLanguageOpen ? <X size={20} /> : <Languages size={20} />}
                    </button>
                    {/*mobile version*/}
                    <button  onClick={
                        () => setIsMenuOpen((prev) => !prev)}
                        className="md:hidden  p-2 text-foreground z-50"
                        aria-label= {isMenuOpen ? "Close menu" : "Open menu"}> 
                        {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                    
                    


                    {/* <button onClick={toggleTheme} className= {cn(
                        " btn-grad fixed max-sm:hidden  right-25         ",
                            "focus:outlin-hidden"
                    )}
                    >{isDarkMode ? 
                       <Sun size={20} />:
                        <Moon size={20} />}</button> */}

                     {/*menu*/}
                    <div className={cn(
                        "fixed inset-0 bg-background/95  backdrop-blur-md z-40 flex flex-col items-center justify-center",
                        "transition-all duration-300 md:hidden",
                        isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
                        )}> 

                        <div className="flex flex-col space-y-8 text-xl ">
                            {navItems.map((item,key) =>(
                                <a key={key} href= {item.href} className="text-foreground/80 hover:text-primary transition-colors duration-300"> {item.name}</a>
                            ))}               
                        </div>
                    </div>

                     {/*languages*/}
                    <div className={cn(
                        "fixed top-16 right-4 bg-background/95  backdrop-blur-md z-40 flex flex-col items-center justify-center rounded-md",
                        "transition-all duration-300",
                        isLanguageOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
                        )}> 

                        <div className={cn("flex flex-col space-y-2 text-xl p-4", languages.code === i18n.language ? "bg-primary text-white" : "text-foreground/80 hover:text-primary transition-colors duration-300")}>
                            {languages.map((item,key) =>(
                                <button key={key} href= {item.href} onClick={() => changeLanguage(item.name)}  className={cn(
                                    "px-4 py-2 rounded-md transition-colors duration-300",
                                        i18n.language === item.name
                                        ? "bg-primary text-white"  // выбранный язык
                                         : "text-foreground/80 hover:text-primary"
                                    )}> {item.name}</button>
                            ))}               
                        </div>
                    </div>
                     
                </div>
        </nav>)
}