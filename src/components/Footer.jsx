
import "../i18n";
import { ArrowUp } from "lucide-react";
 
 
import { useTranslation } from "react-i18next";
 


export const Footer = () => {
     const { t } = useTranslation();
    return <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center text-sm text-muted-foreground">
        {""}
        <p className="text-center text-muted-foreground">   {t("footer.designedBuilt")}
            &copy; {new Date().getFullYear()} </p>

        <a href="#hero" className="absolute right-4 top-4 p-2 rounded-full bg-secondary/20 hover:bg-secondary/30 transition-colors">
            <ArrowUp  size={32}/>
        </a>
           
    </footer>
}