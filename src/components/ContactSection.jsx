import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Send } from "lucide-react"
import {cn} from "@/lib/utils"

export const ContactSection = () => {


    const handleSubmit = (e) => {
        e.preventDefault();

        setTimeout(() => {
            alert("Message sent successfully!");
        }, 500);
    }



    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className ="container mx-auto max-w-5xl">
                 <h2 className="text-2xl font-bold mb-8 text-center md:text-3xl lg:text-4xl"> 
                    Get In <span className="text-primary"> Touch</span>
                </h2>
            </div>
 
            <div className = "text-xenter text-muted-foreground mb-12 max-w-2xl mx-auto">
                  
                <div className="space-y-8">
                     
                    <h3 className ="text-2xl font-semibold mb-6"> Contact Information </h3>
                    <div className="space-y-6 justify-center">
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Mail className="h-6 w-6 text-primary"/>
                            </div>
                            <div>
                                <h4 className="font-semibold text-lg text-left"> Email</h4>
                                <a href="mailto:naydenova.yn@gmail.com" className="text-muted-foreground hover:text-primary transition-colors" > naydenova.yn@gmail.com </a>
                       
                            </div>
                        </div>

                          <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Phone className="h-6 w-6 text-primary"/>
                            </div>
                            <div>
                                <h4 className="font-semibold text-lg text-left"> Phone</h4>
                                <a href="tel:+972539525562" className="text-muted-foreground hover:text-primary transition-colors" > +972-539525562 </a>
                       
                            </div>
                        </div>

                         <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <MapPin className="h-6 w-6 text-primary"/>
                            </div>
                            <div>
                                <h4 className="font-semibold text-lg text-left"> Location</h4>
                                <a className="text-muted-foreground hover:text-primary transition-colors" > Holon, Israel </a>
                       
                            </div>
                        </div>

                        <div className="pt-4 text-center" >
                            <h4>Connect With Me </h4>
                            <div className="flex space-x-4 mt-4">
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
                    </div>
                    <div className="bg-card p-8 rounded-lg shadow-xs" >
                            <h3 className= "text-2xl font-semibokd mb-6"> Send a Message </h3>
                            <form className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium mb-2">{""}  Your Name </label>
                                    <input 
                                        type="text" 
                                        id="name"
                                        name="name"
                                        required
                                        className="w-full px-4 py-3 border rounded-nd bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                        placeholder="Pedro Pedro"
                                    />


                                </div>             
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium mb-2">{""}  Your Email </label>
                                    <input 
                                        type="text" 
                                        id="email"
                                        name="email"
                                        required
                                        className="w-full px-4 py-3 border rounded-nd bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                        placeholder="example@gmail.com"
                                    />


                                </div>

                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium mb-2">{""}  Your Message </label>
                                    <textarea 
                                        id="message"
                                        name="message"
                                        required
                                        className="w-full px-4 py-3 border rounded-nd bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none h-32"
                                        placeholder="Hello! I'd like to talk about..."
                                    />
                                </div>                        
                                <button type="submit" className={
                                    cn(
                                        "cosmic-button w-full flex items-center justify-center gap-2"

                                    )}> Send Message
                                    <Send size={16} />
                                     </button>
                            </form>
                        </div>
                </div>
            </div>
           
            
        </section>
    )}