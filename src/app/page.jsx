"use client";

import { useEffect, useState } from "react";
import { getPopSeries, getTopMovies, getTopSeries } from "@/src/services";

import Header from "@/src/components/Header";
import HeroArea from "@/src/app/home/HeroArea";
import BoxMovies from "@/src/components/BoxMovies";
import Footer from "@/src/components/Footer";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import "swiper/css/navigation";
import "react-loading-skeleton/dist/skeleton.css";

export default function Home() {
  const [popularSeriesData, setPopularSeriesData] = useState(null);
  const [topRatedSeriesData, setTopRatedSeriesData] = useState(null);
  const [popularMoviesData, setPopularMoviesData] = useState(null);
  const [topRatedMoviesData, setTopRatedMoviesData] = useState(null);

  useEffect(() => {
    async function fetchPopSeries() {
      try {
        const popSeriesData = await getPopSeries();

        setPopularSeriesData(popSeriesData);
      } catch (err) {
        console.error(err);
      }
    }

    async function fetchTopSeries() {
      try {
        const topSeriesData = await getTopSeries();

        setTopRatedSeriesData(topSeriesData);
      } catch (err) {
        console.error(err);
      }
    }

    async function fetchPopMovies() {
      try {
        const popMoviesData = await getTopMovies();

        setPopularMoviesData(popMoviesData);
      } catch (err) {
        console.error(err);
      }
    }

    async function fetchTopMovies() {
      try {
        const topMoviesData = await getTopMovies();

        setTopRatedMoviesData(topMoviesData);
      } catch (err) {
        console.error(err);
      }
    }

    fetchPopSeries();
    fetchTopSeries();
    fetchPopMovies();
    fetchTopMovies();
  }, []);

  return (
    <>
      <Header />
      <HeroArea />
      <main className="main-content-area">
        <BoxMovies
          name="محبوب ترین سریال ها"
          information={popularSeriesData}
          activeBg={false}
          isSeries={true}
        />
        <BoxMovies
          name="برترین سریال ها"
          information={topRatedSeriesData}
          activeBg={true}
          isSeries={true}
        />
        <BoxMovies
          name="محبوب ترین فیلم ها"
          information={popularMoviesData}
          activeBg={false}
          isSeries={false}
        />
        <BoxMovies
          name="برترین فیلم ها"
          information={topRatedMoviesData}
          activeBg={true}
          isSeries={false}
        />
      </main>
      <Footer />
    </>
  );
}
