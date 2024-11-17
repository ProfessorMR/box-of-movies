import FilterSearch from "@/src/components/FilterSearch";
import Footer from "@/src/components/Footer";
import Header from "@/src/components/Header";
import MediaGallery from "@/src/components/MediaGallery";
import { DropdownProvider } from "@/src/context/DropdownContext";

export default function Movies() {
  return (
    <DropdownProvider>
      <Header />
      <main className="py-10">
        <FilterSearch isSeries={false} />
        <MediaGallery isSeries={false} />
      </main>
      <Footer />
    </DropdownProvider>
  );
}
