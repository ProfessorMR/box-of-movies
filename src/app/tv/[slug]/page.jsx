import Footer from "@/src/components/Footer";
import Header from "@/src/components/Header";
import InformationMedia from "@/src/components/InformationMedia";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

export default function SingleTv() {
  return (
    <>
      <Header />
      <main className="py-10">
        <InformationMedia isSeries={true} />
      </main>
      <Footer />
    </>
  );
}
