import Header from "@/src/components/Header";
import HeroArea from "@/src/app/home/HeroArea";
import BoxMovies from "@/src/components/BoxMovies";
import Footer from "@/src/components/Footer";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import "swiper/css/navigation";

export default function Home() {
  return (
    <>
      <Header />
      <HeroArea />
      <main className="main-content-area">
        <BoxMovies />
      </main>
      <Footer />
    </>
  );
}
