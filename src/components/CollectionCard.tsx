import { Collection } from "@/data/collections";
import { useNavigate } from "react-router-dom";

interface CollectionCardProps {
  collection: Collection;
  index: number;
}

const CollectionCard = ({ collection, index }: CollectionCardProps) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/collection/${collection.id}`)}
      className="group cursor-pointer"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 bg-card">
        {/* Image */}
        <div className="aspect-[4/5] overflow-hidden">
          <img
            src={collection.cover}
            alt={collection.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-blush/60 via-peach/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Text */}
        <div className="p-5">
          <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-foreground/80 transition-colors">
            {collection.title}
          </h3>
          <p className="font-body text-sm text-muted-foreground mt-1 leading-relaxed">
            {collection.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
