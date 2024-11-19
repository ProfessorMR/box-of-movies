"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation } from "swiper/modules";

import MediaBox from "./MediaBox";

import "@/src/styles/boxMovies.css";

export default function BoxMovies({
  name,
  information,
  activeBg,
  isSeries,
  genreSeries,
  genreMovies,
}) {
  const isLoadingInformation = !information || information.results.length === 0;

  const genreSeriesLookup = genreSeries?.genres.reduce((acc, { id, name }) => {
    acc[id] = name;
    return acc;
  }, {});

  const genreMoviesLookup = genreMovies?.genres.reduce((acc, { id, name }) => {
    acc[id] = name;
    return acc;
  }, {});

  const getGenreSeriesName = (id) => genreSeriesLookup?.[id] || "Unknown Genre";
  const getGenreMoviesName = (id) => genreMoviesLookup?.[id] || "Unknown Genre";

  return (
    <section
      className={`py-10 ${
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
            {isLoadingInformation
              ? Array.from({ length: 4 }).map((_, index) => (
                  <SwiperSlide key={index}>
                    <MediaBox loading={true} />
                  </SwiperSlide>
                ))
              : information.results.map((item, index) => (
                  <SwiperSlide key={index}>
                    <MediaBox
                      item={item}
                      isSeries={isSeries}
                      getGenreMoviesName={getGenreMoviesName}
                      getGenreSeriesName={getGenreSeriesName}
                      loading={false}
                    />
                  </SwiperSlide>
                ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
