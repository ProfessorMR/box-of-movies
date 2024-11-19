"use client";

import { useEffect, useState } from "react";
import {
  getGenreMovies,
  getGenreSeries,
  getPopMovies,
  getPopSeries,
  getTopMovies,
  getTopSeries,
} from "@/src/services";

import Header from "@/src/components/Header";
import HeroArea from "@/src/app/home/HeroArea";
import SpecialSliders from "@/src/components/SpecialSliders";
import Footer from "@/src/components/Footer";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import "swiper/css/navigation";

async function fetchData(fetchFunction, setData) {
  try {
    const data = await fetchFunction();
    setData(data);
  } catch (err) {
    console.error(err);
  }
}

export default function Home() {
  const [data, setData] = useState({
    popularSeries: null,
    topRatedSeries: null,
    popularMovies: null,
    topRatedMovies: null,
    genreMovies: null,
    genreSeries: null,
  });

  useEffect(() => {
    fetchData(getPopSeries, (data) =>
      setData((prev) => ({ ...prev, popularSeries: data }))
    );
    fetchData(getTopSeries, (data) =>
      setData((prev) => ({ ...prev, topRatedSeries: data }))
    );
    fetchData(getPopMovies, (data) =>
      setData((prev) => ({ ...prev, popularMovies: data }))
    );
    fetchData(getTopMovies, (data) =>
      setData((prev) => ({ ...prev, topRatedMovies: data }))
    );
    fetchData(getGenreMovies, (data) =>
      setData((prev) => ({ ...prev, genreMovies: data }))
    );
    fetchData(getGenreSeries, (data) =>
      setData((prev) => ({ ...prev, genreSeries: data }))
    );
  }, []);

  const {
    popularSeries,
    topRatedSeries,
    popularMovies,
    topRatedMovies,
    genreMovies,
    genreSeries,
  } = data;

  return (
    <>
      <Header />
      <HeroArea />
      <main className="main-content-area">
        <SpecialSliders
          name="محبوب ترین سریال ها"
          information={popularSeries}
          activeBg={false}
          isSeries={true}
          genreSeries={genreSeries}
        />
        <SpecialSliders
          name="برترین سریال ها"
          information={topRatedSeries}
          activeBg={true}
          isSeries={true}
          genreSeries={genreSeries}
        />
        <SpecialSliders
          name="محبوب ترین فیلم ها"
          information={popularMovies}
          activeBg={false}
          isSeries={false}
          genreMovies={genreMovies}
        />
        <SpecialSliders
          name="برترین فیلم ها"
          information={topRatedMovies}
          activeBg={true}
          isSeries={false}
          genreMovies={genreMovies}
        />
      </main>
      <Footer />
    </>
  );
}
