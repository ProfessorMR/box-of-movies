"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import {
  getCreditsMovie,
  getCreditsSeries,
  getDetailMovie,
  getDetailSeries,
} from "@/src/services";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { IMAGE_URL } from "@/src/utils/data";

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
import SyncIcon from "@mui/icons-material/Sync";

import BlankImage from "@/public/images/error/blank-image.jpg";
import BlankImage2 from "@/public/images/error/blank-image-2.jpg";
import BlankImagePerson from "@/public/images/error/blank-image-person.avif";

import "@/src/styles/informationMedia.css";

export default function InformationMedia({ params, isSeries }) {
  const [detailData, setDetailData] = useState(null);
  const [creditsData, setCreditsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadingCredits, setLoadingCredits] = useState(true);

  const mediaParams = JSON.parse(params);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setLoadingCredits(true);

        if (isSeries) {
          const detailSeries = await getDetailSeries(mediaParams);
          const creditsSeries = await getCreditsSeries(mediaParams);

          setDetailData(detailSeries);
          setCreditsData(creditsSeries);
        } else {
          const detailMovie = await getDetailMovie(mediaParams);
          const creditsMovie = await getCreditsMovie(mediaParams);

          setDetailData(detailMovie);
          setCreditsData(creditsMovie);
        }

        setLoading(false);
        setLoadingCredits(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
        setLoadingCredits(false);
      }
    }

    fetchData();
  }, [isSeries, mediaParams]);

  return (
    <>
      <div className="w-full py-10">
        <div className="w-full banner relative">
          {loading ? (
            <SkeletonTheme baseColor="#202020" highlightColor="#3c3c3c">
              <Skeleton height={550} className="w-full" />
            </SkeletonTheme>
          ) : (
            <>
              {/* Changing the static image with the image that comes from the api */}
              {/* <Image
                src={`${IMAGE_URL}${detailData.backdrop_path}`}
                alt={detailData.name || detailData.title}
                width={200}
                height={200}
                className="w-full object-cover"
              /> */}
              <Image
                src={BlankImage2}
                alt={detailData.name || detailData.title}
                width={1000}
                height={200}
                className="w-full object-cover"
                objectFit="cover"
              />
              <div className="absolute inset-0 z-20 pointer-events-none">
                <div className="absolute bottom-0 right-0 w-full h-52 bg-gradient-to-t from-neutral-950 to-transparent"></div>
              </div>
            </>
          )}
        </div>
        <section className="information-media-area">
          <div className="container mx-auto px-4">
            <div className="w-full">
              <div className="grid grid-cols-5 gap-4 -mt-40 z-50 relative">
                <div className="col-span-4 py-6">
                  <div className="w-full">
                    {loading ? (
                      <SkeletonTheme
                        baseColor="#202020"
                        highlightColor="#3c3c3c"
                      >
                        <Skeleton
                          width={300}
                          height={50}
                          className="mb-3 loading-box-movies-title"
                        />
                        <ul className="flex justify-start flex-row-reverse gap-x-3 mt-3">
                          {Array.from({ length: 4 }).map((_, index) => (
                            <li key={index} className="text-slate-300 text-md">
                              <Skeleton
                                width={60}
                                height={20}
                                className="inline-block mr-1"
                              />
                            </li>
                          ))}
                        </ul>
                      </SkeletonTheme>
                    ) : (
                      <>
                        <h1 className="text-left text-5xl text-white font-extrabold">
                          {detailData.name || detailData.title}
                        </h1>
                        <ul className="flex justify-start flex-row-reverse gap-x-3 mt-3">
                          <li className="text-slate-300 text-md">
                            {Number.parseFloat(detailData.vote_average).toFixed(
                              1
                            )}
                            <StarIcon className="text-primary text-3xl mr-1" />
                          </li>
                          <li className="text-slate-300 text-md">
                            {detailData.genres[0].name}
                            <FormatListBulletedIcon className="text-white text-3xl mr-1" />
                          </li>
                          <li className="text-slate-300 text-md">
                            4k
                            <TvIcon className="text-white text-3xl mr-1" />
                          </li>
                          <li className="text-slate-300 text-md">
                            {
                              (
                                detailData.first_air_date?.split("-")[0] ||
                                detailData.release_date
                              )?.split("-")[0]
                            }
                            <CalendarMonthIcon className="text-white text-3xl mr-1" />
                          </li>
                        </ul>
                      </>
                    )}
                  </div>
                  <div className="w-full bg-neutral-700 mt-20 rounded-md shadow-md p-4">
                    <h3 className="mb-3 text-primary font-medium text-xl">
                      {isSeries ? "جزئیات سریال" : "جزئیات فیلم"}
                    </h3>
                    <hr />
                    {loading ? (
                      <SkeletonTheme
                        baseColor="#202020"
                        highlightColor="#3c3c3c"
                      >
                        <div className="grid grid-cols-2 gap-2 mt-3">
                          {Array.from({ length: 6 }).map((_, index) => (
                            <div key={index} className="flex items-center">
                              <Skeleton
                                width={100}
                                height={20}
                                className="mr-2"
                              />
                              <Skeleton width={150} height={20} />
                            </div>
                          ))}
                        </div>
                      </SkeletonTheme>
                    ) : (
                      <div className="grid grid-cols-2 gap-2 mt-3">
                        <div className="flex items-center">
                          <span className="text-primary font-medium text-base my-1">
                            <MovieIcon className="ml-1" />
                            نام اصلی:
                          </span>
                          <p className="mr-2 text-white text-base">
                            {detailData.original_name ||
                              detailData.original_title}
                          </p>
                        </div>
                        <div className="flex items-center">
                          <span className="text-primary font-medium text-base my-1">
                            <CategoryIcon className="ml-1" />
                            ژانر:
                          </span>
                          <p className="mr-2 text-white text-base">
                            {detailData.genres
                              .map((genre) => genre.name)
                              .join(", ")}
                          </p>
                        </div>
                        <div className="flex items-center">
                          <span className="text-primary font-medium text-base my-1">
                            <PublicIcon className="ml-1" />
                            سال انتشار:
                          </span>
                          <p className="mr-2 text-white text-base">
                            {detailData.first_air_date ||
                              detailData.release_date}
                          </p>
                        </div>
                        {isSeries ? (
                          <div className="flex items-center">
                            <span className="text-primary font-medium text-base my-1">
                              <LanguageIcon className="ml-1" />
                              زبان:
                            </span>
                            <p className="mr-2 text-white text-base">
                              {" "}
                              {detailData.languages
                                .map((lang) => lang)
                                .join(", ")}
                            </p>
                          </div>
                        ) : (
                          <div className="flex items-center">
                            <span className="text-primary font-medium text-base my-1">
                              <LanguageIcon className="ml-1" />
                              زبان:
                            </span>
                            <p className="mr-2 text-white text-base">
                              {detailData.origin_country}
                            </p>
                          </div>
                        )}

                        {isSeries ? (
                          <div className="flex items-center">
                            <span className="text-primary font-medium text-base my-1">
                              <SyncIcon className="ml-1" />
                              وضعیت:
                            </span>

                            <p className="mr-2 text-white text-base">
                              {detailData.status === "Ended"
                                ? "پایان یافته"
                                : detailData.status === "In Production"
                                ? "در حال تولید"
                                : "در حال پخش"}
                            </p>
                          </div>
                        ) : (
                          <div className="flex items-center">
                            <span className="text-primary font-medium text-base my-1">
                              <AttachMoneyIcon className="ml-1" />
                              بودجه:
                            </span>

                            <p className="mr-2 text-white text-base">
                              {detailData.budget}
                            </p>
                          </div>
                        )}

                        <div className="flex items-center">
                          <span className="text-primary font-medium text-base my-1">
                            <HowToRegIcon className="ml-1" />
                            تعداد رای ها:
                          </span>
                          <p className="mr-2 text-white text-base">
                            {detailData.vote_count}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex justify-end">
                  {loading ? (
                    <SkeletonTheme baseColor="#202020" highlightColor="#3c3c3c">
                      <Skeleton
                        height={384}
                        width={256}
                        className="rounded-md"
                      />
                    </SkeletonTheme>
                  ) : (
                    // <Image
                    //   src={
                    //     isSeries
                    //       ? `${IMAGE_URL}${detailData.seasons[0].poster_path}`
                    //       : `${IMAGE_URL}${detailData.poster_path}`
                    //   }
                    //   alt={detailData.name || detailData.title}
                    //   width={200}
                    //   height={200}
                    //   className="w-full h-96 object-cover border-4 border-neutral-700 rounded-md"
                    // />
                    <Image
                      src={BlankImage}
                      alt={detailData.name || detailData.title}
                      width={1000}
                      height={200}
                      objectFit="cover"
                      className="w-full h-96 object-cover border-4 border-neutral-700 rounded-md"
                    />
                  )}
                </div>
              </div>
              <div className="w-full bg-neutral-700 p-4 rounded-md">
                <h3 className="mb-3 text-primary font-medium text-xl">
                  توضیحات
                </h3>
                <hr />
                {loading ? (
                  <SkeletonTheme baseColor="#202020" highlightColor="#3c3c3c">
                    <Skeleton count={4} className="mt-3" />
                  </SkeletonTheme>
                ) : (
                  <p className="text-neutral-300 mt-3">{detailData.overview}</p>
                )}
              </div>

              <div className="w-full bg-neutral-700 p-4 rounded-md mt-6">
                <h3 className="mb-3 text-primary font-medium text-xl">
                  بازیگران
                </h3>
                <hr />
                {loadingCredits ? (
                  <div className="grid grid-cols-9 gap-4 mt-5">
                    <SkeletonTheme baseColor="#202020" highlightColor="#999">
                      {Array.from({ length: 9 }).map((_, index) => (
                        <div key={index} className="flex flex-col items-center">
                          <Skeleton
                            circle
                            height={100}
                            width={100}
                            className="w-28 h-28"
                          />
                          <Skeleton
                            width={80}
                            height={15}
                            className="mt-2"
                            baseColor="#303030"
                            highlightColor="#3c3c3c"
                          />
                        </div>
                      ))}
                    </SkeletonTheme>
                  </div>
                ) : (
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
                    {creditsData.cast.length > 0 ? (
                      creditsData.cast.map((cast, index) => (
                        <SwiperSlide key={index}>
                          <div className="flex items-center justify-center flex-col">
                            {/* <Image
                              src={`${IMAGE_URL}${cast.profile_path}`}
                              alt={cast.name}
                              width={200}
                              height={200}
                              className="w-28 h-28 rounded-full object-cover"
                            /> */}
                            {/* <Image
                              src={`${IMAGE_URL}${cast.profile_path}`}
                              alt={cast.name}
                              width={200}
                              height={200}
                              className="w-28 h-28 rounded-full object-cover"
                            /> */}
                            <Image
                              src={BlankImagePerson}
                              alt={cast.name}
                              width={200}
                              height={200}
                              className="w-28 h-28 rounded-full object-cover"
                              objectFit="cover"
                            />
                            <p className="text-white font-medium text-base mt-2 text-center">
                              {cast.name}
                            </p>
                          </div>
                        </SwiperSlide>
                      ))
                    ) : (
                      <p className="w-full py-3 text-center text-white font-medium">
                        متاسفانه بازیگری وجود ندارد☹️
                      </p>
                    )}
                  </Swiper>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
