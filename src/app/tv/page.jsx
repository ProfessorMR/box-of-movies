import FilterSearch from "@/src/components/FilterSearch";
import Footer from "@/src/components/Footer";
import Header from "@/src/components/Header";
import MediaGallery from "@/src/components/MediaGallery";
import { DropdownProvider } from "@/src/context/DropdownContext";

export async function generateMetadata() {
  return {
    title: "سریال ها",
  };
}

export default function Tv() {
  return (
    <DropdownProvider>
      <Header />
      <main className="py-10">
        <FilterSearch isSeries={true} />
        <MediaGallery isSeries={true} />
      </main>
      <Footer />
    </DropdownProvider>
  );
}
