"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation } from "swiper/modules";
import Image from "next/image";

import StarIcon from "@mui/icons-material/Star";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import TvIcon from "@mui/icons-material/Tv";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

import WildRobot from "@/public/images/sliders/whild-robot.avif";
import Link from "next/link";

import "@/src/styles/boxMovies.css";

export default function BoxMovies({ name }) {
  return (
    <section className="py-10 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="mt-4">
          <h1 className="mb-4 font-bold text-2xl text-primary">
            برترین فیلم ها
          </h1>
          <hr />
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            loop={true}
            spaceBetween={10}
            slidesPerView={4}
            navigation={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            modules={[FreeMode, Autoplay, Navigation]}
            className="h-full w-full mt-5 box-movies-swiper"
          >
            <SwiperSlide className="transition ease-in-out border hover:border-primary rounded-md">
              <Link href="#">
                <Image
                  src={WildRobot}
                  alt="WildRobot"
                  className="rounded-t-md"
                />
                <div className="bg-slate-700 rounded-b-md p-3">
                  <h3 className="text-left text-white font-semibold text-lg">
                    The wild robot
                  </h3>
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
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide className="transition ease-in-out border hover:border-primary rounded-md">
              <Link href="#">
                <Image
                  src={WildRobot}
                  alt="WildRobot"
                  className="rounded-t-md"
                />
                <div className="bg-slate-700 rounded-b-md p-3">
                  <h3 className="text-left text-white font-semibold text-lg">
                    The wild robot
                  </h3>
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
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide className="transition ease-in-out border hover:border-primary rounded-md">
              <Link href="#">
                <Image
                  src={WildRobot}
                  alt="WildRobot"
                  className="rounded-t-md"
                />
                <div className="bg-slate-700 rounded-b-md p-3">
                  <h3 className="text-left text-white font-semibold text-lg">
                    The wild robot
                  </h3>
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
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide className="transition ease-in-out border hover:border-primary rounded-md">
              <Link href="#">
                <Image
                  src={WildRobot}
                  alt="WildRobot"
                  className="rounded-t-md"
                />
                <div className="bg-slate-700 rounded-b-md p-3">
                  <h3 className="text-left text-white font-semibold text-lg">
                    The wild robot
                  </h3>
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
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide className="transition ease-in-out border hover:border-primary rounded-md">
              <Link href="#">
                <Image
                  src={WildRobot}
                  alt="WildRobot"
                  className="rounded-t-md"
                />
                <div className="bg-slate-700 rounded-b-md p-3">
                  <h3 className="text-left text-white font-semibold text-lg">
                    The wild robot
                  </h3>
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
                </div>
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
