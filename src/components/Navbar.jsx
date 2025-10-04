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
        //setIsLanguageOpen(false);
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

       <nav
      className={cn(
        "fixed w-full z-60 transition-all duration-300",
        isScrolled ? "py-4 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
      )}
    >
      <div className="container flex justify-between items-center mx-auto px-4 sm:px-6 lg:px-8">
        <a
          className="text-xl font-bold text-primary flex items-center"
          href="#hero"
          onClick={() => setIsMenuOpen(false)}
        >
          <span className="relative z-11">
            <span className="text-glow text-foreground">{t("nameYanaNaydenova")}</span> {t("portfolio")}
          </span>
        </a>

        {/* Desktop version */}
        <div className="hidden md:flex ">

        <div className="flex items-center  left-1/2 transform -translate-x-1/2 space-x-8 z-10 space-x-6">  
          {navItems.map((item, key) => (
            <a
              key={item.key}
              href={item.href}
              className="text-lg text-foreground/80 hover:text-primary font-bold transition-colors duration-300"
            >
              {t(item.key)}
            </a>
          ))}
        </div>

          <div className="absolute right-15 flex items-center space-x-4 z-10"> 
            <button 
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center space-x-4 text-foreground/80 hover:text-primary"
              >
                <Languages size={24} />
            </button>
            
            {isLanguageOpen && (
          <div className="absolute right-0 top-10 mt-2 w-24 bg-background/95 backdrop-blur-md rounded-md shadow-lg z-20">
        
          {languages.map((item, key) => (
            <button
              key={key}
              onClick={() => changeLanguage(item.name)}
              className={cn(
                "w-full text-left px-4 py-2 text-sm text-foreground/80 hover:text-primary transition-colors ",
                i18n.language === item.name
                  ? "bg-primary text-white"
                  : ""
              )}
            >
              {item.name}
            </button>
          ))}
        </div>
        )}
         </div>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Mobile menu */}
        <div
          className={cn(
            "fixed top-15 right-0 left-0   bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            " fixed transition-all duration-300 md:hidden",
            isMenuOpen ? "fixed opacity-98 pointer-events-auto  " : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-lg p-4 w-full max-w-xs">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                onClick={() => setIsMenuOpen(false)} 
                className= " text-md text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                {t(item.key)}
              </a>
            ))}

            {/* Language selection in mobile menu */}
            <div className="mt-6  flex flex-col border-t border-foreground/20 pt-4 flex items-center justify-center">
              <button 
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center space-x-4 text-foreground/80 hover:text-primary"
              >
                <Languages size={18} />
                <span>{t("language")}</span>
              </button>
              {isLanguageOpen && (
                <div className="mt-2 flex flex-row space-x-2">
                  {languages.map((item, key) => (
                    <button
                      key={key}
                      onClick={() => changeLanguage(item.name)}
                      className={cn(
                        "px-4 py-2 flex flex-col rounded-md transition-colors duration-300",
                        i18n.language === item.name
                          ? "bg-primary text-white"
                          : "text-foreground/80 hover:text-primary"
                      )}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
