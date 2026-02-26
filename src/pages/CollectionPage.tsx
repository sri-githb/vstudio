import { useParams, useNavigate } from "react-router-dom";
import { collections } from "@/data/collections";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import Lightbox from "@/components/Lightbox";

const CollectionPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const collection = collections.find((c) => c.id === id);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (!collection) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <p className="text-muted-foreground font-body">Collection not found.</p>
      </div>
    );
  }

  // For now, use the cover image as the only image. 
  // When real images are added to the folders, this array will be populated dynamically.
  const images = [collection.cover];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center gap-4">
          <button
            onClick={() => navigate("/")}
            className="p-2 rounded-full hover:bg-primary/30 transition-colors"
            aria-label="Go back"
          >
            <ArrowLeft className="w-5 h-5 text-foreground" />
          </button>
          <h1 className="text-xl md:text-2xl font-display font-bold text-foreground">
            {collection.title}
          </h1>
        </div>
      </div>

      {/* Gallery */}
      <div className="container mx-auto px-6 py-12">
        <p className="text-muted-foreground font-body mb-8 max-w-xl">
          {collection.description}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className="group cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-500"
              onClick={() => setLightboxIndex(i)}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={img}
                  alt={`${collection.title} - Image ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>

        {images.length === 1 && (
          <div className="mt-12 text-center py-16 border-2 border-dashed border-border rounded-2xl">
            <p className="text-muted-foreground font-body">
              Add images to the <code className="bg-card px-2 py-1 rounded text-sm">{collection.folder}/</code> folder to populate this gallery.
            </p>
          </div>
        )}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </div>
  );
};

export default CollectionPage;
