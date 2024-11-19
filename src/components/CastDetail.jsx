import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation } from "swiper/modules";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import Image from "next/image";

import BlankImagePerson from "@/public/images/error/blank-image-person.avif";

export default function CastDetail({ loadingCredits, creditsData }) {
  return (
    <div className="w-full bg-neutral-700 p-4 rounded-md mt-6">
      <h3 className="mb-3 text-primary font-medium text-xl">بازیگران</h3>
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
  );
}
