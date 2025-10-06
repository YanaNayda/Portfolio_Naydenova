import React from "react";
import {GraduationCap ,School,  BookOpen } from "lucide-react"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination } from 'swiper/modules';
import "../i18n";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";


export default function Timeline({ defaultColor = "text-primary", education = [] }) {

  const {t,i18n} = useTranslation();
  return (
     <div className="relative w-full max-w-5xl mx-auto  md:py-8 px-4 sm:py-6 lg:py-8">

  

      <div className="hidden md:flex flex-col gap-12 relative">
        <div className="absolute left-[calc(25%+2rem)] top-6 bottom-6 -translate-x-1/2 w-px bg-primary z-10"></div>
        {education.map((element) => {
          let IconComponent =
            typeof element.icon === "string"
              ? element.icon === "school"
                ? BookOpen
                : GraduationCap
              : element.icon;

          return (
            <div key={element.id} className="flex z-20 items-start w-full ">
              <div className="w-1/4 text-right pr-4 text-gray-400">{element.date}</div>
              <div className="relative flex flex-col items-center w-16">
                <div className="z-10 flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white">
                  <IconComponent className="w-6 h-6" />
                </div>
              </div>
              <div className="flex-1 z-20 ml-6">
                <div className="  z-40  rounded-lg px-6 py-4 bg-card  shadow-md">
                  <div className="text-xl font-semibold mb-1">{t(element.title)}</div>
                  <div className="text-sm text-gray-300 mb-2">{t(element.location)}</div>
                  <div className="text-sm text-gray-200 mb-4">{t(element.description)}</div>
                  {element.buttonText && (
                    <a
                      href={element.demoUrl}
                      download
                      className="inline-block bg-primary px-4 py-2 rounded-md text-white hover:bg-primary-dark"
                    >
                      {t(element.buttonText)}
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ✅ Mobile  (Swiper) */}
      <div className="md:hidden relative z-20">
       <Swiper
         modules={[Pagination]}
          className="mySwiper relative z-20"
          loop={true}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          style={{ paddingBottom: '40px'  }} // Add some bottom padding for pagination
        
>
          {education.map((element) => {
            let IconComponent =
              typeof element.icon === "string"
                ? element.icon === "school"
                  ? BookOpen
                  : GraduationCap
                : element.icon;

            return (
              <SwiperSlide key={element.id}>
                <div className="bg-card  bg-card rounded-lg p-6 shadow-md text-center">
                  <div className="flex flex-col items-center gap-3 mb-3">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-gray-400">{element.date}</span>
                  </div>
                  <div className="text-lg font-semibold">{t(element.title)}</div>
                  <div className="text-sm text-gray-300 mb-2">{t(element.location)}</div>
                  <div className="text-sm text-gray-200 mb-4">{t(element.description)}</div>
                  {element.buttonText && (
                    <a
                      href={element.demoUrl}
                      download
                      className="inline-block bg-primary px-4 py-2 rounded-md text-white hover:bg-primary-dark"
                    >
                      {t(element.buttonText)}
                    </a>
                  )}
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
