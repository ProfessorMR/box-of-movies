import FilterSearch from "@/src/components/FilterSearch";
import Footer from "@/src/components/Footer";
import Header from "@/src/components/Header";
import MediaGallery from "@/src/components/MediaGallery";

export default function Tv() {
  return (
    <>
      <Header />
      <main className="py-10">
        <FilterSearch isSeries={true} />
        <MediaGallery />
      </main>
      <Footer />
    </>
  );
}
