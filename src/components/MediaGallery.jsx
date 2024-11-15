import MediaBox from "@/src/components/MediaBox";

export default function MediaGallery() {
  return (
    <section className="py-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-4 gap-4">
          <MediaBox />
        </div>
      </div>
    </section>
  );
}
