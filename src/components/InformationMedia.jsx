"use client";

import Image from "next/image";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import CastDetail from "@/src/components/CastDetail";
import InformationMediaDetails from "@/src/components/InformationMediaDetails";
import { useInformationMedia } from "@/src/hooks/useInformationMedia";
// import { IMAGE_URL } from "@/src/utils/data";

import StarIcon from "@mui/icons-material/Star";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import TvIcon from "@mui/icons-material/Tv";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

import BlankImage from "@/public/images/error/blank-image.jpg";
import BlankImage2 from "@/public/images/error/blank-image-2.jpg";

import "@/src/styles/informationMedia.css";

export default function InformationMedia({ params, isSeries }) {
  const mediaParams = JSON.parse(params);

  const { detailData, creditsData, loading, loadingCredits } =
    useInformationMedia({ mediaParams, isSeries });
    
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
                style={{ objectFit: "cover" }}
                priority
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
                  <InformationMediaDetails
                    detailData={detailData}
                    isSeries={isSeries}
                    loading={loading}
                  />
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
                      style={{ objectFit: "cover" }}
                      className="w-full h-96 border-4 border-neutral-700 rounded-md"
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
                  <p className="text-neutral-300 mt-3">
                    {detailData.overview
                      ? detailData.overview
                      : "متاسفانه توضیحی وجود ندارد☹️"}
                  </p>
                )}
              </div>
              <CastDetail
                creditsData={creditsData}
                loadingCredits={loadingCredits}
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
