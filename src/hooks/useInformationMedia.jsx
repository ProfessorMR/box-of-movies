"use client";

import { useEffect, useState } from "react";
import {
  getCreditsMovie,
  getCreditsSeries,
  getDetailMovie,
  getDetailSeries,
} from "@/src/services";

export function useInformationMedia({ mediaParams, isSeries }) {
  const [detailData, setDetailData] = useState(null);
  const [creditsData, setCreditsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadingCredits, setLoadingCredits] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setLoadingCredits(true);

        const detail = isSeries
          ? await getDetailSeries(mediaParams)
          : await getDetailMovie(mediaParams);
        const credits = isSeries
          ? await getCreditsSeries(mediaParams)
          : await getCreditsMovie(mediaParams);

        setDetailData(detail);
        setCreditsData(credits);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
        setLoadingCredits(false);
      }
    }

    fetchData();
  }, [mediaParams, isSeries]);

  return { detailData, creditsData, loading, loadingCredits };
}
