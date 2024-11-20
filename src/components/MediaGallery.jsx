"use client";

import { useEffect, useState, useContext } from "react";
import {
  advancedFilterMovies,
  advancedFilterSeries,
  getGenreMovies,
  getGenreSeries,
} from "@/src/services";
import Image from "next/image";

import DropdownContext from "@/src/context/DropdownContext";
import MediaBox from "@/src/components/MediaBox";
import PaginateMedia from "@/src/components/PaginateMedia";

import EmptyMedia from "@/public/images/error/empty-media.svg";

export default function MediaGallery({ isSeries }) {
  const [allSeriesData, setAllSeriesData] = useState(null);
  const [allMoviesData, setAllMoviesData] = useState(null);
  const [genreMoviesData, setGenreMoviesData] = useState(null);
  const [genreSeriesData, setGenreSeriesData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [pageOffset, setPageOffset] = useState(0);
  const itemsPerPage = 20;

  const { selectedItem } = useContext(DropdownContext);

  useEffect(() => {
    async function fetchGenreMovies() {
      try {
        const genreMoviesData = await getGenreMovies();
        setGenreMoviesData(genreMoviesData);
      } catch (err) {
        console.error(err);
      }
    }

    async function fetchGenreSeries() {
      try {
        const genreSeriesData = await getGenreSeries();
        setGenreSeriesData(genreSeriesData);
      } catch (err) {
        console.error(err);
      }
    }

    fetchGenreMovies();
    fetchGenreSeries();
  }, []);

  useEffect(() => {
    if (isSeries) {
      async function fetchAllSeries() {
        try {
          setLoading(true);

          const allSeries = await advancedFilterSeries({
            page: pageOffset + 1,
            year: selectedItem.year === null ? "" : selectedItem.year,
            genre: selectedItem.genre === null ? "" : selectedItem.genre,
            voteAvg: selectedItem.voteAvg === null ? "" : selectedItem.voteAvg,
          });

          setAllSeriesData(allSeries);
        } catch (err) {
          console.error(err);
        } finally {
          setLoading(false);
        }
      }

      fetchAllSeries();
    } else {
      async function fetchAllMovies() {
        try {
          setLoading(true);

          const allMovies = await advancedFilterMovies({
            page: pageOffset + 1,
            year: selectedItem.year === null ? "" : selectedItem.year,
            genre: selectedItem.genre === null ? "" : selectedItem.genre,
            voteAvg: selectedItem.voteAvg === null ? "" : selectedItem.voteAvg,
          });

          setAllMoviesData(allMovies);
        } catch (err) {
          console.error(err);
        } finally {
          setLoading(false);
        }
      }
      fetchAllMovies();
    }
  }, [
    isSeries,
    pageOffset,
    selectedItem.year,
    selectedItem.genre,
    selectedItem.voteAvg,
  ]);

  const genreSeriesLookup = genreSeriesData?.genres.reduce(
    (acc, { id, name }) => {
      acc[id] = name;
      return acc;
    },
    {}
  );

  const genreMoviesLookup = genreMoviesData?.genres.reduce(
    (acc, { id, name }) => {
      acc[id] = name;
      return acc;
    },
    {}
  );

  const getGenreSeriesName = (id) => genreSeriesLookup?.[id] || "Unknown Genre";
  const getGenreMoviesName = (id) => genreMoviesLookup?.[id] || "Unknown Genre";

  const handlePageChange = (newPage) => {
    setPageOffset(newPage);
  };

  return (
    <section className="py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          {loading ? (
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 w-full">
              {Array.from({ length: itemsPerPage }).map((_, index) => (
                <div
                  key={index}
                  className="bg-neutral-700 rounded h-60 w-full animate-pulse"
                />
              ))}
            </div>
          ) : (
            <>
              {isSeries && allSeriesData?.results.length > 0 ? (
                <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 w-full">
                  {allSeriesData.results.map((item, index) => (
                    <MediaBox
                      key={index}
                      item={item}
                      getGenreSeriesName={getGenreSeriesName}
                      isSeries={isSeries}
                    />
                  ))}
                </div>
              ) : !isSeries && allMoviesData?.results.length > 0 ? (
                <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 w-full">
                  {allMoviesData.results.map((item, index) => (
                    <MediaBox
                      key={index}
                      item={item}
                      getGenreMoviesName={getGenreMoviesName}
                      isSeries={isSeries}
                    />
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center mt-10">
                  <Image src={EmptyMedia} alt="no-media" className="w-80" />
                  <p className="text-white text-lg font-semibold mt-8">
                    متاسفانه فیلم یا سریال شما یافت نشد☹️
                  </p>
                </div>
              )}
            </>
          )}

          {!loading &&
            ((isSeries && allSeriesData?.results.length > 0) ||
              (!isSeries && allMoviesData?.results.length > 0)) && (
              <PaginateMedia
                count={
                  isSeries
                    ? allSeriesData.total_pages
                    : allMoviesData.total_pages
                }
                currentPage={pageOffset}
                onPageChange={handlePageChange}
              />
            )}
        </div>
      </div>
    </section>
  );
}
