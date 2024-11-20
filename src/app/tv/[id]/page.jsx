import Footer from "@/src/components/Footer";
import Header from "@/src/components/Header";
import InformationMedia from "@/src/components/InformationMedia";
import ErrorPage from "@/src/components/ErrorPage";
import { getDetailSeries } from "@/src/services";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

export async function generateMetadata({ params }) {
  const mediaParams = await params;

  try {
    const nameSeries = await getDetailSeries(JSON.parse(mediaParams.id));
    return {
      title: nameSeries.name,
    };
  } catch (error) {
    return {
      title: "صفحه پیدا نشد",
    };
  }
}

export default async function SingleTv({ params }) {
  let seriesData = null;
  let error = null;

  try {
    const response = await getDetailSeries(JSON.parse(params.id));
    seriesData = response;
  } catch (err) {
    error = "شناسه سریال اشتباه است یا داده‌ها یافت نشدند.";
  }

  return (
    <>
      <Header />
      <main className="py-10">
        {error ? (
          <ErrorPage message={error} />
        ) : (
          <InformationMedia params={params.id} isSeries={true} />
        )}
      </main>
      <Footer />
    </>
  );
}
