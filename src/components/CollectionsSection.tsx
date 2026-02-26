import { collections } from "@/data/collections";
import CollectionCard from "./CollectionCard";
import { useEffect, useRef, useState } from "react";

const CollectionsSection = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="collections" className="py-24 px-6 relative" ref={sectionRef}>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Collections
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blush via-peach to-sage mx-auto mt-4 rounded-full" />
          <p className="text-muted-foreground font-body mt-4 max-w-lg mx-auto">
            Explore curated collections spanning seasons and creative inspirations
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection, i) => (
            <div
              key={collection.id}
              className={`transition-all duration-700 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <CollectionCard collection={collection} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionsSection;
