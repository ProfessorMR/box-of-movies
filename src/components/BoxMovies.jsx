"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { IMAGE_URL } from "@/src/utils/data";

import StarIcon from "@mui/icons-material/Star";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import TvIcon from "@mui/icons-material/Tv";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

import "@/src/styles/boxMovies.css";

export default function BoxMovies({ name, information, activeBg, isSeries }) {
  const isLoading = !information || information.results.length === 0;

  return (
    <section
      className={`py-10  ${
        activeBg
          ? `bg-gradient-to-l from-neutral-800 to-neutral-900`
          : `bg-transparent`
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="mt-4">
          <h1 className="mb-4 font-bold text-2xl text-primary">{name}</h1>
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
            {isLoading
              ? Array.from({ length: 4 }).map((_, index) => (
                  <SwiperSlide
                    key={index}
                    className="loading-box-movies transition ease-in-out border hover:border-primary rounded-md"
                  >
                    <SkeletonTheme baseColor="#202020" highlightColor="#999">
                      <Skeleton height={160} className="rounded-t-md flex" />
                      <div className="rounded-b-md p-3">
                        <Skeleton
                          width={`60%`}
                          height={20}
                          className="loading-box-movies-title"
                        />
                        <ul className="flex justify-start flex-row-reverse gap-x-3 mt-2">
                          <li className="text-sm">
                            <Skeleton width={30} height={20} />
                          </li>
                          <li className="text-sm">
                            <Skeleton width={60} height={20} />
                          </li>
                          <li className="text-sm">
                            <Skeleton width={40} height={20} />
                          </li>
                          <li className="text-sm">
                            <Skeleton width={30} height={20} />
                          </li>
                        </ul>
                      </div>
                    </SkeletonTheme>
                  </SwiperSlide>
                ))
              : information.results.map((item, index) => (
                  <SwiperSlide
                    key={index}
                    className="transition ease-in-out border hover:border-primary rounded-md"
                  >
                    <Link href="#">
                      <Image
                        src={`${IMAGE_URL}${item.poster_path}`}
                        alt={isSeries ? item.name : item.title}
                        className="rounded-t-md"
                        width={200}
                        height={200}
                      />
                      <div className="bg-slate-700 rounded-b-md p-3">
                        <h3 className="text-left text-white font-semibold text-lg">
                          {isSeries ? item.name : item.title}
                        </h3>
                        <ul className="flex justify-start flex-row-reverse gap-x-3 mt-2">
                          <li className="text-slate-300 text-sm">
                            {Number.parseFloat(item.vote_average).toFixed(1)}
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
                            {isSeries
                              ? item.first_air_date.split("-")[0]
                              : item.release_date.split("-")[0]}
                            <CalendarMonthIcon className="text-white text-xl mr-1" />
                          </li>
                        </ul>
                      </div>
                    </Link>
                  </SwiperSlide>
                ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
