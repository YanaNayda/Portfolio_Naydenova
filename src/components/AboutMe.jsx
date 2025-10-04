
import { Code, User, Briefcase,TrendingUp } from "lucide-react";
import "../i18n";
import { t } from "i18next";
import { useTranslation } from "react-i18next";


export const AboutMeSection = () => {
     const {t ,i18n} = useTranslation();

    return  (
    <section id ="about"
        className="py-24 px-4 sm:px-10  lg:px-20 relative">
        {" "}
        <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-bold mb-8">
                 {t("about")}
                <span className="text-primary"> {t("me")}</span>
            </h2>
            <div className="blob blob--teal hidden md:flex absolute left-0 top-0 -translate-y-1/2 -translate-x-1/2 w-72 h-32 opacity-70"></div>
            <div className="blob blob--purple hidden md:flex absolute left-40 top-[100px] w-48 h-48 opacity-60"></div>
            <div className="blob blob--pink hidden md:flex  absolute top-[100px] left-[10px]  w-32 h-32 opacity-60 " ></div>
            <div className="blob blob--pink  hidden md:flex absolute top-[200px] right-[50px]  w-64 h-64 opacity-70 " ></div>
            <div className="blob blob--teal hidden md:flex h-[200px] absolute left-20 top-[250px] -translate-y-1/2 -translate-x-1/2 w-64 opacity-70"></div>
                
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12  ">
            
                <div className="space-y-6">
                    <h3 className = "text-xl font-bold text-center">{t("passionateDeveloper")}</h3>

                    <div className=" ">  
                    <p className="text-muted-foreground">
                        {t("textAboutFirst")}
                    
                    </p>

                     <p className="text-muted-foreground">
                        {t("textAboutSecond")}
                    </p>

                    <p className="text-muted-foreground">
                        {t("textAboutThird")}
                    </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center " >
                        <a href= "#contact" className="cosmic-button">
                            {" "}
                            {t("contactMe")}
                        </a>

                         <a href= "#contact" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10  transition-colors duration-300">
                            {" "}
                            {t("downloadCV")}
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover  z-40">
                            <div className="flex items-start gap-4 ">
                                <div className ="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-8 lg:w-8 text-primary" />
                                </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> {t("problemSolving")}</h4>
                                <p className="text-muted-foreground">
                                    {t("problemSolvingExplain")}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="gradient-border p-6 card-hover  z-40">
                        <div className="flex items-start gap-4">
                            <div className ="p-3 rounded-full bg-primary/10">
                                <User className="h-6 w-6 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-8 lg:w-8 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> {t("collaboration")} </h4>
                                <p className="text-muted-foreground">
                                    {t("collaborationExplain")}
                                </p>
                            </div>

                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover  z-40">
                        <div className="flex items-start gap-4">
                            <div className ="p-3 rounded-full bg-primary/10">
                                <TrendingUp className="h-6 w-6 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-8 lg:w-8 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">  {t("innovation")} </h4>
                                <p className="text-muted-foreground">
                                    {t("innovationExplain")}
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
                
                    
            </div>

                

        </div>

    </section>

)}