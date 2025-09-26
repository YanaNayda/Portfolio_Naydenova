import { useEffect } from "react";
import { useState } from "react";
    import "../i18n";

export const StarBackground = () =>{

    const [stars, setStars] = useState([])
    const [meteors, setMeteors] = useState([])


    useEffect(() => {
        

        const handleResize = () => {
            generateStars();
            generateMeteors();

        };
        generateMeteors();
        generateStars();


        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    },[]
    );

    const generateStars = () =>{   
        const numberOfstars =Math.floor( window.innerWidth * window.innerHeight / 10000);
        const newStars = []

         for(let i = 0; i < numberOfstars; i++){
            newStars.push ({
                id: i,
                size: Math.random() * 3 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random()* 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2,
            })  
        }
    setStars(newStars)
}
 const generateMeteors = () =>{   
        const numberOfmeteors = 4
        const newMeteors = []

         for(let i = 0; i < numberOfmeteors; i++){
            newMeteors.push ({
                id: i,
                size: Math.random() * 2 + 1,
                x: Math.random() * 100 ,
                y: Math.random() * 20 ,
                opacity: Math.random()* 0.5 + 0.5,
                delay: Math.random() * 15,
                
                animationDuration: Math.random() * 3 + 3,
            })  
        }
    setMeteors(newMeteors)
}


return <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" >

        {stars.map((star) => {
          return ( 
          <div key={star.id} className="star animate-pulse-subtle" style = {{
                left: star.x + "%",
                top: star.y + "%",
                width: star.size + "px",
                height: star.size + "px",
                opacity: star.opacity,
                animationDuration: star.animationDuration + "s"
             }} />
        )})}

         {meteors.map((meteor) => {
          return ( 
          <div key={meteor.id} className="meteor animate-meteor" style = {{
                left: meteor.x + "%",
                top: meteor.y + "%",
                width: meteor.size *  10 + "px",
                height: meteor.size + "px",
                delay: meteor.delay,
                animationDuration: meteor.animationDuration + "s"
             }} />
        )})}
    

    </div>
    //inset - top: 0; right: 0; bottom: 0; left: 0;
    //pointer-events-none - don't take a push 
    
}