import Footer from "@/src/components/Footer";
import Header from "@/src/components/Header";
import InformationMedia from "@/src/components/InformationMedia";
import { getDetailSeries } from "@/src/services";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

export async function generateMetadata({ params }) {
  const mediaParams = await params;
  const nameSeries = await getDetailSeries(JSON.parse(mediaParams.id));

  return {
    title: nameSeries.name,
  };
}
export default async function SingleTv({ params }) {
  return (
    <>
      <Header />
      <main className="py-10">
        <InformationMedia params={(await params).id} isSeries={true} />
      </main>
      <Footer />
    </>
  );
}
