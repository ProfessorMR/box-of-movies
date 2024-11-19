"use client";

import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Thumbs } from "swiper/modules";

import StarIcon from "@mui/icons-material/Star";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import TvIcon from "@mui/icons-material/Tv";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

import Arcane from "@/public/images/sliders/arcane.avif";
import Venom from "@/public/images/sliders/venom.jpg";
import WildRobot from "@/public/images/sliders/whild-robot.avif";
import Penguin from "@/public/images/sliders/penguin.jpg";
import From from "@/public/images/sliders/from.jpg";

import "@/src/styles/heroArea.css";

export default function App() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      image: From,
      title: "From",
      rating: 7.8,
      genre: "Horror",
      quality: "4k",
      year: 2022,
    },
    {
      image: Penguin,
      title: "The Penguin",
      rating: 8.8,
      genre: "Crime",
      quality: "HD",
      year: 2024,
    },
    {
      image: WildRobot,
      title: "The Wild Robot",
      rating: 8.3,
      genre: "Animation",
      quality: "4k",
      year: 2024,
    },
    {
      image: Venom,
      title: "Venom: The Last Dance",
      rating: 6.2,
      genre: "Superhero",
      quality: "4k",
      year: 2024,
    },
    {
      image: Arcane,
      title: "Arcane",
      rating: 9.0,
      genre: "Action",
      quality: "4k",
      year: 2021,
    },
  ];

  return (
    <section className="w-full z-10 h-screen">
      <Swiper
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Autoplay, Thumbs]}
        className="h-full w-full"
        onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative h-full w-full">
            <Image
              src={slide.image}
              fill
              className="w-full h-full object-cover"
              alt={slide.title}
            />
            <div className="absolute inset-0 z-20 pointer-events-none">
              <div className="absolute top-0 left-0 w-1/4 h-full bg-gradient-to-r from-black to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-black to-transparent"></div>
            </div>
            <div className="container mx-auto px-5 h-full relative z-30">
              <div
                key={activeSlide}
                className="absolute top-1/2 transform -translate-y-1/2 text-left left-4 flex flex-col items-end rtl"
              >
                <span className="bg-primary text-slate-800 py-0.5 px-4 rounded text-sm font-medium">
                  New
                </span>
                <h1 className="mt-4 text-white font-bold text-6xl fade-in-title">
                  {slide.title}
                </h1>
                <ul className="flex justify-start flex-row-reverse gap-x-3 mt-2 fade-in-info">
                  <li className="text-slate-300 text-sm">
                    {slide.rating}
                    <StarIcon className="text-primary text-xl mr-1" />
                  </li>
                  <li className="text-slate-300 text-sm">
                    {slide.genre}
                    <FormatListBulletedIcon className="text-white text-xl mr-1" />
                  </li>
                  <li className="text-slate-300 text-sm">
                    {slide.quality}
                    <TvIcon className="text-white text-xl mr-1" />
                  </li>
                  <li className="text-slate-300 text-sm">
                    {slide.year}
                    <CalendarMonthIcon className="text-white text-xl mr-1" />
                  </li>
                </ul>
                <p className="mt-4 text-slate-200 text-base w-96 fade-in-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                  harum delectus iusto eos. Possimus expedita explicabo nihil
                  dolorem quisquam labore.
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="w-full absolute text-left bottom-2 left-0 thumbnail-swiper-slider">
        <div className="container mx-auto px-4">
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            slidesPerView={5}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Autoplay, Thumbs]}
            className="w-full"
          >
            {slides.map((slide, index) => (
              <SwiperSlide
                key={index}
                onClick={() => setActiveSlide(index)}
                className="border border-slate-500 rounded-lg overflow-hidden opacity-75"
              >
                <Image
                  src={slide.image}
                  className="w-full h-36 object-cover"
                  alt={`${slide.title} thumbnail`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
