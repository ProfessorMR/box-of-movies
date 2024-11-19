import Footer from "@/src/components/Footer";
import Header from "@/src/components/Header";
import InformationMedia from "@/src/components/InformationMedia";
import { getDetailMovie } from "@/src/services";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

export async function generateMetadata({ params }) {
  const mediaParams = await params;
  const nameMovie = await getDetailMovie(JSON.parse(mediaParams.id));

  return {
    title: nameMovie.title,
  };
}

export default async function SingleMovies({ params }) {
  return (
    <>
      <Header />
      <main className="py-10">
        <InformationMedia params={(await params).id} isSeries={false} />
      </main>
      <Footer />
    </>
  );
}
