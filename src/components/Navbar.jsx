import React, { useState, useEffect } from "react";
import { cn } from "../lib/utils";
import { Menu, X, Languages } from "lucide-react";
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

const languages = [{ name: "en" }, { name: "ru" }, { name: "uk" }, { name: "he" }];

export const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsLanguageOpen(false);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-60 transition-all duration-300",
        isScrolled ? "py-2 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
      )}
    >
      <div className="container flex justify-between items-center mx-auto px-4 sm:px-6 lg:px-8">
        {/* Логотип всегда слева */}
        <a
          className="text-xl font-bold text-primary flex items-center"
          href="#hero"
          onClick={() => setIsMenuOpen(false)}
        >
          <span className="text-glow text-foreground">{t("nameYanaNaydenova")}</span>
          <span className="ml-2">{t("portfolio")}</span>
        </a>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center relative">
          <div className="flex items-center left-1/2 transform -translate-x-1/2 z-10 space-x-6">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-lg text-foreground/80 hover:text-primary font-bold transition-colors duration-300"
              >
                {t(item.key)}
              </a>
            ))}
          </div>

          {/* Language selector */}
          <div className="absolute flex items-center space-x-4 right-4 z-10">
            <button
              onClick={() => setIsLanguageOpen((s) => !s)}
              className="p-2 text-foreground/80 hover:text-primary"
              aria-label="Toggle languages"
            >
              <Languages size={24} />
            </button>

            {isLanguageOpen && (
              <div className="absolute top-10 mt-2 w-28 bg-background/95 backdrop-blur-md rounded-md shadow-lg right-0 z-20">
                {languages.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => changeLanguage(item.name)}
                    className={cn(
                      "w-full text-left px-3 py-2 text-sm transition-colors",
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

        {/* MOBILE / TABLET TOGGLE */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="flex lg:hidden p-2 text-foreground z-50"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* MOBILE / TABLET MENU */}
        <div
  className={cn(
    "fixed top-15 left-0 right-0 bg-background/98 backdrop-blur-md z-40 flex flex-col items-center justify-start pt-8 transition-all duration-300 lg:hidden",
    isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
  )}
>
          <div className="flex flex-col space-y-8 text-lg p-4 w-full max-w-xs">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-md text-foreground/80 hover:text-primary transition-colors duration-300 text-center"
              >
                {t(item.key)}
              </a>
            ))}

            {/* Language selection in mobile/tablet */}
            <div className="  mt-6 flex flex-col border-t border-foreground/20 pt-4 items-center justify-center">
              <button
                onClick={() => setIsLanguageOpen((s) => !s)}
                className="flex items-center space-x-2 text-foreground/80 hover:text-primary"
              >
                <Languages size={18} />
                <span>{t("language")}</span>
              </button>

              {isLanguageOpen && (
                <div className="mt-2 flex flex-row space-x-2">
                  {languages.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => changeLanguage(item.name)}
                      className={cn(
                        "px-4 py-2 rounded-md transition-colors duration-300",
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
