import Footer from "@/src/components/Footer";
import Header from "@/src/components/Header";
import InformationMedia from "@/src/components/InformationMedia";

export default function singleTv() {
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
