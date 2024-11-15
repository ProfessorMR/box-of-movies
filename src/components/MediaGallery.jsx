"use client";

import { useEffect, useState } from "react";
import {
  advancedFilterSeries,
  getGenreMovies,
  getGenreSeries,
} from "@/src/services";

import MediaBox from "@/src/components/MediaBox";
import PaginateMedia from "@/src/components/PaginateMedia";

export default function MediaGallery({ isSeries }) {
  const [allSeriesData, setAllSeriesData] = useState(null);
  const [genreMoviesData, setGenreMoviesData] = useState(null);
  const [genreSeriesData, setGenreSeriesData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [pageOffset, setPageOffset] = useState(0);
  const itemsPerPage = 20;

  useEffect(() => {
    async function fetchAllSeries() {
      try {
        setLoading(true);
        const allSeriesData = await advancedFilterSeries(pageOffset + 1);
        setAllSeriesData(allSeriesData);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

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

    fetchAllSeries();
    fetchGenreMovies();
    fetchGenreSeries();
  }, [pageOffset]);

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
            <div className="grid grid-cols-4 gap-4 w-full">
              {Array.from({ length: itemsPerPage }).map((_, index) => (
                <div
                  key={index}
                  className="bg-neutral-700 rounded h-60 w-full animate-pulse"
                />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-4 gap-4 w-full">
              {isSeries && allSeriesData
                ? allSeriesData.results.map((item, index) => (
                    <MediaBox
                      key={index}
                      item={item}
                      getGenreMoviesName={getGenreMoviesName}
                      getGenreSeriesName={getGenreSeriesName}
                    />
                  ))
                : null}
            </div>
          )}

          {!loading && allSeriesData && (
            <PaginateMedia
              itemsPerPage={itemsPerPage}
              count={allSeriesData.total_results}
              currentPage={pageOffset}
              onPageChange={handlePageChange}
            />
          )}
        </div>
      </div>
    </section>
  );
}
