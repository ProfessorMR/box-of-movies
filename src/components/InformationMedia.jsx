"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation } from "swiper/modules";

import penguin from "@/public/images/sliders/arcane.avif";
import poster from "@/public/images/poster.jpg";

import StarIcon from "@mui/icons-material/Star";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import TvIcon from "@mui/icons-material/Tv";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import MovieIcon from "@mui/icons-material/Movie";
import CategoryIcon from "@mui/icons-material/Category";
import PublicIcon from "@mui/icons-material/Public";
import LanguageIcon from "@mui/icons-material/Language";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import HowToRegIcon from "@mui/icons-material/HowToReg";

import "@/src/styles/informationMedia.css";

export default function InformationMedia({ isSeries }) {
  return (
    <>
      <div className="w-full py-10">
        <div className="w-full banner relative">
          <Image src={penguin} alt="logo" className="w-full object-cover" />
          <div className="absolute inset-0 z-20 pointer-events-none">
            <div className="absolute bottom-0 right-0 w-full h-52 bg-gradient-to-t from-neutral-950 to-transparent"></div>
          </div>
        </div>
        <section className="information-media-area">
          <div className="container mx-auto px-4">
            <div className="w-full">
              <div className="grid grid-cols-5 gap-4 -mt-40 z-50 relative">
                <div className="col-span-4 py-6">
                  <div className="w-full">
                    <h1 className="text-left text-5xl text-white font-extrabold">
                      Arcane
                    </h1>
                    <ul className="flex justify-start flex-row-reverse gap-x-3 mt-3">
                      <l className="text-slate-300 text-md">
                        8.8
                        <StarIcon className="text-primary text-3xl mr-1" />
                      </l>
                      <li className="text-slate-300 text-md">
                        Action
                        <FormatListBulletedIcon className="text-white text-3xl mr-1" />
                      </li>
                      <li className="text-slate-300 text-md">
                        4k
                        <TvIcon className="text-white text-3xl mr-1" />
                      </li>
                      <li className="text-slate-300 text-md">
                        2021
                        <CalendarMonthIcon className="text-white text-3xl mr-1" />
                      </li>
                    </ul>
                  </div>
                  <div className="w-full bg-neutral-700 mt-20 rounded-md shadow-md p-4">
                    <h3 className="mb-3 text-primary font-medium text-xl">
                      جزئیات سریال
                    </h3>
                    <hr />
                    <div className="grid grid-cols-2 gap-2 mt-3">
                      <div className="flex items-center">
                        <span className="text-primary font-medium text-base my-1">
                          <MovieIcon className="ml-1" />
                          نام اصلی:
                        </span>
                        <p className="mr-2 text-white text-base">arcane</p>
                      </div>
                      <div className="flex items-center">
                        <span className="text-primary font-medium text-base my-1">
                          <CategoryIcon className="ml-1" />
                          ژانر:
                        </span>
                        <p className="mr-2 text-white text-base">arcane</p>
                      </div>
                      <div className="flex items-center">
                        <span className="text-primary font-medium text-base my-1">
                          <PublicIcon className="ml-1" />
                          سال انتشار:
                        </span>
                        <p className="mr-2 text-white text-base">arcane</p>
                      </div>
                      <div className="flex items-center">
                        <span className="text-primary font-medium text-base my-1">
                          <LanguageIcon className="ml-1" />
                          زبان:
                        </span>
                        <p className="mr-2 text-white text-base">arcane</p>
                      </div>
                      <div className="flex items-center">
                        <span className="text-primary font-medium text-base my-1">
                          <AttachMoneyIcon className="ml-1" />
                          بودجه:
                        </span>
                        <p className="mr-2 text-white text-base">arcane</p>
                      </div>
                      <div className="flex items-center">
                        <span className="text-primary font-medium text-base my-1">
                          <HowToRegIcon className="ml-1" />
                          تعداد رای ها:
                        </span>
                        <p className="mr-2 text-white text-base">arcane</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end">
                  <Image
                    src={poster}
                    alt="poster"
                    className="w-full h-96 object-cover border-4 border-neutral-700 rounded-md"
                  />
                </div>
              </div>
              <div className="w-full bg-neutral-700 p-4 rounded-md">
                <h3 className="mb-3 text-primary font-medium text-xl">
                  توضیحات
                </h3>
                <hr />
                <p className="text-neutral-300 mt-3">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Aliquid provident libero in, totam et reiciendis natus,
                  ratione at harum autem error incidunt laboriosam asperiores
                  odit impedit, doloremque molestiae quos. Provident?
                </p>
              </div>
              <div className="w-full bg-neutral-700 p-4 rounded-md mt-6">
                <h3 className="mb-3 text-primary font-medium text-xl">
                  بازیگران
                </h3>
                <hr />
                <Swiper
                  style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                  }}
                  loop={true}
                  spaceBetween={10}
                  slidesPerView={9}
                  navigation={true}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                  }}
                  modules={[FreeMode, Autoplay, Navigation]}
                  className="h-full w-full mt-5"
                >
                  <SwiperSlide>
                    <div className="flex items-center justify-center flex-col">
                      <Image
                        src={poster}
                        alt="logo"
                        className="w-28 h-28 rounded-full object-cover"
                      />
                      <p className="text-white font-medium text-base mt-2">
                        ممد گور
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="flex items-center justify-center flex-col">
                      <Image
                        src={poster}
                        alt="logo"
                        className="w-28 h-28 rounded-full object-cover"
                      />
                      <p className="text-white font-medium text-base mt-2">
                        ممد گور
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="flex items-center justify-center flex-col">
                      <Image
                        src={poster}
                        alt="logo"
                        className="w-28 h-28 rounded-full object-cover"
                      />
                      <p className="text-white font-medium text-base mt-2">
                        ممد گور
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="flex items-center justify-center flex-col">
                      <Image
                        src={poster}
                        alt="logo"
                        className="w-28 h-28 rounded-full object-cover"
                      />
                      <p className="text-white font-medium text-base mt-2">
                        ممد گور
                      </p>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
