"use client";

import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Thumbs } from "swiper/modules";

import StarIcon from "@mui/icons-material/Star";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import TvIcon from "@mui/icons-material/Tv";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

import Arcane from "@/public/images/sliders/arcane.avif";
import Venom from "@/public/images/sliders/venom.jpg";
import WildRobot from "@/public/images/sliders/whild-robot.avif";
import Penguin from "@/public/images/sliders/penguin.jpg";
import From from "@/public/images/sliders/from.jpg";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import "@/src/styles/heroArea.css";

export default function App() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <section className="w-full absolute top-0 z-10 h-screen">
      <Swiper
        loop={true}
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Thumbs]}
        className="h-full w-full mySwiper2"
      >
        <SwiperSlide className="relative h-full w-full">
          <Image
            src={From}
            layout="fill"
            className="w-full h-full object-cover"
            alt="From"
          />
          <div className="absolute inset-0 z-20 pointer-events-none">
            <div className="absolute top-0 left-0 w-1/4 h-full bg-gradient-to-r from-black to-transparent"></div>

            <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-black to-transparent"></div>
          </div>

          <div className="container mx-auto px-5 h-full relative z-30">
            <div className="absolute top-1/2 transform -translate-y-1/2 text-left left-4 flex flex-col items-end">
              <span className="bg-primary text-slate-800 py-0.5 px-4 rounded text-sm font-medium">
                New
              </span>
              <h1 className="mt-4 text-white font-bold text-6xl">From</h1>
              <ul className="flex justify-start flex-row-reverse gap-x-3 mt-2">
                <li className="text-slate-300 text-sm">
                  7.8
                  <StarIcon className="text-primary text-xl mr-1" />
                </li>
                <li className="text-slate-300 text-sm">
                  Horror
                  <FormatListBulletedIcon className="text-white text-xl mr-1" />
                </li>
                <li className="text-slate-300 text-sm">
                  4k
                  <TvIcon className="text-white text-xl mr-1" />
                </li>
                <li className="text-slate-300 text-sm">
                  2022
                  <CalendarMonthIcon className="text-white text-xl mr-1" />
                </li>
              </ul>
              <p className="mt-4 text-slate-200 text-base w-96">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                harum delectus iusto eos. Possimus expedita explicabo nihil
                dolorem quisquam labore.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative h-full w-full">
          <Image
            src={Penguin}
            layout="fill"
            className="w-full h-full object-cover"
            alt="Penguin"
          />
          <div className="absolute inset-0 z-20 pointer-events-none">
            <div className="absolute top-0 left-0 w-1/4 h-full bg-gradient-to-r from-black to-transparent"></div>

            <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-black to-transparent"></div>
          </div>

          <div className="container mx-auto px-5 h-full relative z-30">
            <div className="absolute top-1/2 transform -translate-y-1/2 text-left left-4 flex flex-col items-end">
              <span className="bg-primary text-slate-800 py-0.5 px-4 rounded text-sm font-medium">
                New
              </span>
              <h1 className="mt-4 text-white font-bold text-6xl">
                The Penguin
              </h1>
              <ul className="flex justify-start flex-row-reverse gap-x-3 mt-2">
                <li className="text-slate-300 text-sm">
                  8.8
                  <StarIcon className="text-primary text-xl mr-1" />
                </li>
                <li className="text-slate-300 text-sm">
                  Crime
                  <FormatListBulletedIcon className="text-white text-xl mr-1" />
                </li>
                <li className="text-slate-300 text-sm">
                  HD
                  <TvIcon className="text-white text-xl mr-1" />
                </li>
                <li className="text-slate-300 text-sm">
                  2024
                  <CalendarMonthIcon className="text-white text-xl mr-1" />
                </li>
              </ul>
              <p className="mt-4 text-slate-200 text-base w-96">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                harum delectus iusto eos. Possimus expedita explicabo nihil
                dolorem quisquam labore.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative h-full w-full">
          <Image
            src={WildRobot}
            layout="fill"
            className="w-full h-full object-cover"
            alt="WildRobot"
          />
          <div className="absolute inset-0 z-20 pointer-events-none">
            <div className="absolute top-0 left-0 w-1/4 h-full bg-gradient-to-r from-black to-transparent"></div>

            <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-black to-transparent"></div>
          </div>

          <div className="container mx-auto px-5 h-full relative z-30">
            <div className="absolute top-1/2 transform -translate-y-1/2 text-left left-4 flex flex-col items-end">
              <span className="bg-primary text-slate-800 py-0.5 px-4 rounded text-sm font-medium">
                New
              </span>
              <h1 className="mt-8 text-white font-bold text-6xl">
                The Wild Robot
              </h1>
              <ul className="flex justify-start flex-row-reverse gap-x-3 mt-2">
                <li className="text-slate-300 text-sm">
                  8.3
                  <StarIcon className="text-primary text-xl mr-1" />
                </li>
                <li className="text-slate-300 text-sm">
                  Animation
                  <FormatListBulletedIcon className="text-white text-xl mr-1" />
                </li>
                <li className="text-slate-300 text-sm">
                  4k
                  <TvIcon className="text-white text-xl mr-1" />
                </li>
                <li className="text-slate-300 text-sm">
                  2024
                  <CalendarMonthIcon className="text-white text-xl mr-1" />
                </li>
              </ul>
              <p className="mt-4 text-slate-200 text-base w-96">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                harum delectus iusto eos. Possimus expedita explicabo nihil
                dolorem quisquam labore.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative h-full w-full">
          <Image
            src={Venom}
            layout="fill"
            className="w-full h-full object-cover"
            alt="venom"
          />
          <div className="absolute inset-0 z-20 pointer-events-none">
            <div className="absolute top-0 left-0 w-1/4 h-full bg-gradient-to-r from-black to-transparent"></div>

            <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-black to-transparent"></div>
          </div>

          <div className="container mx-auto px-5 h-full relative z-30">
            <div className="absolute top-1/2 transform -translate-y-1/2 text-left left-4 flex flex-col items-end">
              <span className="bg-primary text-slate-800 py-0.5 px-4 rounded text-sm font-medium">
                New
              </span>
              <h1 className="mt-8 text-white font-bold text-6xl">
                Venom: Last Dance
              </h1>
              <ul className="flex justify-start flex-row-reverse gap-x-3 mt-2">
                <li className="text-slate-300 text-sm">
                  6.2
                  <StarIcon className="text-primary text-xl mr-1" />
                </li>
                <li className="text-slate-300 text-sm">
                  Superhero
                  <FormatListBulletedIcon className="text-white text-xl mr-1" />
                </li>
                <li className="text-slate-300 text-sm">
                  4k
                  <TvIcon className="text-white text-xl mr-1" />
                </li>
                <li className="text-slate-300 text-sm">
                  2024
                  <CalendarMonthIcon className="text-white text-xl mr-1" />
                </li>
              </ul>
              <p className="mt-4 text-slate-200 text-base w-96">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                harum delectus iusto eos. Possimus expedita explicabo nihil
                dolorem quisquam labore.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative h-full w-full">
          <Image
            src={Arcane}
            layout="fill"
            className="w-full h-full object-cover"
            alt="arcane"
          />
          <div className="absolute inset-0 z-20 pointer-events-none">
            <div className="absolute top-0 left-0 w-1/4 h-full bg-gradient-to-r from-black to-transparent"></div>

            <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-black to-transparent"></div>
          </div>

          <div className="container mx-auto px-5 h-full relative z-30">
            <div className="absolute top-1/2 transform -translate-y-1/2 text-left left-4 flex flex-col items-end">
              <span className="bg-primary text-slate-800 py-0.5 px-4 rounded text-sm font-medium">
                New
              </span>
              <h1 className="mt-8 text-white font-bold text-6xl">Arcane</h1>
              <ul className="flex justify-start flex-row-reverse gap-x-3 mt-2">
                <li className="text-slate-300 text-sm">
                  9.0
                  <StarIcon className="text-primary text-xl mr-1" />
                </li>
                <li className="text-slate-300 text-sm">
                  Action
                  <FormatListBulletedIcon className="text-white text-xl mr-1" />
                </li>
                <li className="text-slate-300 text-sm">
                  4k
                  <TvIcon className="text-white text-xl mr-1" />
                </li>
                <li className="text-slate-300 text-sm">
                  2021
                  <CalendarMonthIcon className="text-white text-xl mr-1" />
                </li>
              </ul>
              <p className="mt-4 text-slate-200 text-base w-96">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                harum delectus iusto eos. Possimus expedita explicabo nihil
                dolorem quisquam labore.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="w-full absolute text-left bottom-2 left-0 thumbnail-swiper-slider">
        <div className="container mx-auto px-4">
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={10}
            slidesPerView={5}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Thumbs]}
            className="w-full"
          >
            <SwiperSlide className="border border-slate-500 rounded-lg overflow-hidden opacity-75">
              <Image
                src={From}
                className="w-full h-36 object-cover"
                alt="From thumbnail"
              />
            </SwiperSlide>
            <SwiperSlide className="border border-slate-500 rounded-lg overflow-hidden opacity-75">
              <Image
                src={Penguin}
                className="w-full h-36 object-cover"
                alt="Penguin thumbnail"
              />
            </SwiperSlide>
            <SwiperSlide className="border border-slate-500 rounded-lg overflow-hidden opacity-75">
              <Image
                src={WildRobot}
                className="w-full h-36 object-cover"
                alt="WildRobot thumbnail"
              />
            </SwiperSlide>
            <SwiperSlide className="border border-slate-500 rounded-lg overflow-hidden opacity-75">
              <Image
                src={Venom}
                className="w-full h-36 object-cover"
                alt="venom thumbnail"
              />
            </SwiperSlide>
            <SwiperSlide className="border border-slate-500 rounded-lg overflow-hidden opacity-75">
              <Image
                src={Arcane}
                className="w-full h-36 object-cover"
                alt="arcane thumbnail"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
