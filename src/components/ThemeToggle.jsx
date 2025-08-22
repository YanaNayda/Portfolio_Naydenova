import {Moon,Sun, TurntableIcon} from "lucide-react"
import {use, useEffect, useState} from "react"
import {cn} from "../lib/utils"

export const ThemeToggle = () =>{

  
   const[isDarkMode, setIsDarkMode] = useState(false)


   useEffect(() =>{
        const theme = localStorage.getItem("theme")
        if(theme === "dark"){
            setIsDarkMode(true)
            document.documentElement.classList.add("dark")
         
        }else{
            setIsDarkMode(false)
            document.documentElement.classList.add("light")
            
        }
    },[isDarkMode])

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

  


    return <button onClick={toggleTheme} className= {cn(
        "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duraction-300",
        "focus:outlin-hidden"

    )}
    
    >{isDarkMode ? 

       <Sun className="h-6 w-6 text-yellow-500" /> :
       <Moon className="h-6 w-6 text-white-900" />}</button>
}