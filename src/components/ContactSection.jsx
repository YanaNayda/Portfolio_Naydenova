
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Send } from "lucide-react"
import {cn} from "@/lib/utils"
import { AvatarYanaContact } from "./AvatarYanaContact.jsx";
import { Canvas } from "@react-three/fiber";
import React, { useState, Suspense } from "react";
import { ContactShadows } from "@react-three/drei";
import { useControls } from "leva";
import "../i18n";
import { useTranslation } from "react-i18next";



const MemoThank = React.memo(AvatarYanaContact);

export const ContactSection = () => {

    const {t ,i18n} = useTranslation();
    const [isSent, setIsSent] = useState(false);

    const onSubmit = async (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);

      formData.append("access_key", "d265f588-b5d0-4446-9b30-1bac858e92fc");

      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);

      const res = await fetch("https://api.web3forms.com/submit", {
       method: "POST",
        headers: {
          "Content-Type": "application/json",
           Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());

         if (res.success) {
     
      setIsSent(true)
       event.target.reset(); 
      setTimeout(() => setIsSent(false), 4000);
         }
       else {
        alert("Error");
    }
  };
     
    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className ="container  ">
                 <h2 className="text-2xl font-bold mb-8 text-center md:text-3xl lg:text-4xl"> 
                       {t("contactSection.getInTouch")}
                    <span className="text-primary">  {t("contactSection.touch")}</span>
                </h2>
            </div>
 
            <div className = "text-сenter  text-muted-foreground mb-12 max-w-7xl mx-auto">
                  
                <div className="space-y-8 ">
                     
                    <h3 className ="text-2xl font-semibold mb-10"> {t("contactSection.contactInformation")}  </h3>
                    <div className="flex flex-col mb-6 gap-4">

                  <div className="flex flex-col items-start md:flex-row  md:items-center md:justify-center  text-left md:text-center gap-6 mb-12">

  {/* Email */}
  <div className="flex items-center gap-4">
    <div className="p-3 rounded-full bg-primary/10">
      <Mail className="h-6 w-6 text-primary"/>
    </div>
    <div>
      <h4 className="font-semibold text-lg">{t("contactSection.email")}</h4>
      <a href="mailto:naydenova.yn@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
        naydenova.yn@gmail.com
      </a>
    </div>
  </div>

  {/* Phone */}
  <div className="flex items-center gap-4">
    <div className="p-3 rounded-full bg-primary/10">
      <Phone className="h-6 w-6 text-primary"/>
    </div>
    <div>
      <h4 className="font-semibold text-lg">{t("contactSection.phone")}</h4>
      <a href="tel:+972539525562" className="text-muted-foreground hover:text-primary transition-colors">
        +972-539525562
      </a>
    </div>
  </div>

  {/* Location */}
  <div className="flex items-center gap-4">
    <div className="p-3 rounded-full bg-primary/10">
      <MapPin className="h-6 w-6 text-primary"/>
    </div>
    <div>
      <h4 className="font-semibold text-lg">{t("contactSection.location")}</h4>
      <a className="text-muted-foreground hover:text-primary transition-colors">
        {t("contactSection.mylocation")}
      </a>
    </div>
  </div>

</div>
                        
                        <h4 className ="text-2xl font-semibold text-center mb-6" > {t("contactSection.connectWithMe")} </h4>

                        <div className="pt-4 text-center  z-20" >
                            <div className="flex space-x-4  z-0 justify-center text-center justify-center mt-4">
                                <a href="https://www.linkedin.com/in/yana-naydenova/" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                                    <Linkedin/>
                                </a>
                                 <a href="https://www.facebook.com/profile.php?id=100016418804566&locale=ru_RU" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                                    <Facebook/>
                                </a>
                                 <a href="https://www.instagram.com/yana.nayda/" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                                    <Instagram/>
                                </a>
                            </div>
                        </div>
                    <div className="container mx-auto py-12 relative z-10">
  <div className="flex flex-col lg:flex-row gap-8">
    
   <div className="absolute inset-0 -z-10 pointer-events-none">
    <div className="absolute -left-32 flex flex-col items-center space-y-6">
      <div className="blob blob--teal w-72 h-32 opacity-70"></div>
      <div className="blob blob--teal w-64 h-64 opacity-70"></div>
      <div className="blob blob--purple w-48 h-48 opacity-60"></div>
      <div className="blob blob--yellow w-56 h-56 opacity-50"></div>
      <div className="blob blob--pink w-64 h-64"></div>
      <div className="blob blob--blue w-64 h-64"></div>
      <div className="blob blob--teal w-64 h-64 opacity-70"></div>
    </div>
  </div>
   <div
  className={cn(
    "lg:w-2/3 w-full bg-card px-8 py-10 rounded-lg shadow-xs",
    i18n.language === "he" ? "text-right" : "text-left"
  )}
  dir={i18n.language === "he" ? "rtl" : "ltr"}
>
  <h3 className="text-2xl font-semibold mb-6 text-center">
    {t("contactSection.sendMessage")}
  </h3>
  <form className="space-y-6" onSubmit={onSubmit}>
    <div>
      <label
        htmlFor="name"
        className="block text-sm font-medium mb-2"
      >
        {t("contactSection.yourName")}
      </label>
      <input
        type="text"
        id="name"
        name="name"
        required
        className="w-full px-4 py-3 border rounded bg-background focus:outline-none focus:ring-2 focus:ring-primary"
        placeholder={t("contactSection.placeholderName")}
      />
    </div>

    <div>
      <label
        htmlFor="email"
        className="block text-sm font-medium mb-2"
      >
        {t("contactSection.yourEmail")}
      </label>
      <input
        type="text"
        id="email"
        name="email"
        required
        className="w-full px-4 py-3 border rounded bg-background focus:outline-none focus:ring-2 focus:ring-primary"
        placeholder={t("contactSection.placeholderEmail")}
      />
    </div>

    <div>
      <label
        htmlFor="message"
        className="block text-sm font-medium mb-2"
      >
        {t("contactSection.yourMessage")}
      </label>
      <textarea
        id="message"
        name="message"
        required
        rows="10"
        className="w-full px-4 py-3 border rounded bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none h-32"
        placeholder={t("contactSection.placeholderMessage")}
      />
    </div>

    <button
      type="submit"
      className="cosmic-button w-full flex items-center justify-center gap-2"
    >
      {t("contactSection.sendMessage")}
    </button>

    {isSent && (
      <p className="mt-4 text-center text-green-600 font-semibold">
        {t("contactSection.messageSent")}
      </p>
    )}
  </form>
</div>

     
    <div className="lg:w-1/3 sm:w-full   w-full  relative">
     <div className="absolute inset-0 -z-10 -left-32 flex flex-col items-center z-[-1] space-y-6">
    <div className="blob blob--teal hidden md:flex z-20w-72 h-32 opacity-70"></div>
    <div className="blob blob--teal  hidden md:flex z-20w-64 h-64 opacity-70"></div>
    <div className="blob blob--purple hidden md:flex z-20 w-48 h-48 opacity-60"></div>
    <div className="blob blob--yellow  hidden md:flex z-20 w-56 h-56 opacity-50"></div>
    <div className="blob blob--pink hidden md:flex  z-20 w-64 h-64"></div>
    <div className="blob blob--blue hidden md:flex z-20 w-64 h-64"></div>
    <div className="blob blob--teal hidden md:flex z-20 w-64 h-64 opacity-70"></div>
  </div>
  <div className="absolute z-20 right-24 sm: right-0  ">
  <div className="absolute top-1/5 z-20 opacity-100 animate-fade-in-delay-4 flex flex-col space-y-3">
    <div className="message-container">
      <div className="message message-1 hidden lg:flex bg-white/80 text-glow backdrop-blur-md text-black px-3 py-2 rounded-2xl shadow-lg">
        <span className="ml-1">{t("contactSection.messageFirstContact")}</span>
      </div>
      <div className="message message-2 hidden lg:flex bg-white/80 text-glow backdrop-blur-md text-black px-3 py-2 rounded-2xl shadow-lg">
        <span className="ml-3">{t("contactSection.messageSecondContact")}</span>
      </div>
      <div className="message message-3hidden lg:flexbg-white/80 text-glow backdrop-blur-md text-black px-3 py-2 rounded-2xl shadow-lg">
        <span className="ml-3">{t("contactSection.messageThirdContact")}</span>
      </div>
    </div>
  </div>
</div>
      <Suspense fallback={null}>
      <Canvas className=" w-full h-full relative z-10 hidden lg:flex " camera={{ position: [0, 2, 6], fov: 45 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} />
        <group position-y={-2}  scale={[2.5, 2.5, 2.5]}>
           <MemoThank animation={"Thankful"}   />  
        </group>
      </Canvas>
      </Suspense>
       
    </div>
  </div>
</div>
                </div>
                 </div>
            </div>    
            
        </section>
    )}