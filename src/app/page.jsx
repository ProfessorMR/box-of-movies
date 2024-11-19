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

export default function Home() {
  const [popularSeriesData, setPopularSeriesData] = useState(null);
  const [topRatedSeriesData, setTopRatedSeriesData] = useState(null);
  const [popularMoviesData, setPopularMoviesData] = useState(null);
  const [topRatedMoviesData, setTopRatedMoviesData] = useState(null);
  const [genreMoviesData, setGenreMoviesData] = useState(null);
  const [genreSeriesData, setGenreSeriesData] = useState(null);

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
        const popMoviesData = await getPopMovies();

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

    async function fetchGenreMovies() {
      try {
        const topMoviesData = await getGenreMovies();

        setGenreMoviesData(topMoviesData);
      } catch (err) {
        console.error(err);
      }
    }

    async function fetchGenreSeries() {
      try {
        const topMoviesData = await getGenreSeries();

        setGenreSeriesData(topMoviesData);
      } catch (err) {
        console.error(err);
      }
    }

    fetchPopSeries();
    fetchTopSeries();
    fetchPopMovies();
    fetchTopMovies();
    fetchGenreMovies();
    fetchGenreSeries();
  }, []);

  return (
    <>
      <Header />
      <HeroArea />
      <main className="main-content-area">
        <SpecialSliders
          name="محبوب ترین سریال ها"
          information={popularSeriesData}
          activeBg={false}
          isSeries={true}
          genreSeries={genreSeriesData}
        />
        <SpecialSliders
          name="برترین سریال ها"
          information={topRatedSeriesData}
          activeBg={true}
          isSeries={true}
          genreSeries={genreSeriesData}
        />
        <SpecialSliders
          name="محبوب ترین فیلم ها"
          information={popularMoviesData}
          activeBg={false}
          isSeries={false}
          genreMovies={genreMoviesData}
        />
        <SpecialSliders
          name="برترین فیلم ها"
          information={topRatedMoviesData}
          activeBg={true}
          isSeries={false}
          genreMovies={genreMoviesData}
        />
      </main>
      <Footer />
    </>
  );
}
