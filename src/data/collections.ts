import autumnCover from "@/assets/autumn-cover.png";
import springCover from "@/assets/spring-cover.png";
import summerCover from "@/assets/summer-cover.png";
import winterCover from "@/assets/winter-cover.png";
import own1Cover from "@/assets/own1-cover.png";
import own2Cover from "@/assets/own2-cover.png";
import inspirationCover from "@/assets/inspiration-cover.png";

export interface Collection {
  id: string;
  title: string;
  description: string;
  cover: string;
  folder: string;
}

export const collections: Collection[] = [
  {
    id: "autumn",
    title: "Autumn Collection",
    description: "Warm tones and cozy silhouettes for the fall season",
    cover: autumnCover,
    folder: "Autumn-Collection",
  },
  {
    id: "spring",
    title: "Spring Collection",
    description: "Fresh florals and light fabrics celebrating renewal",
    cover: springCover,
    folder: "Spring-Collection",
  },
  {
    id: "summer",
    title: "Summer Collection",
    description: "Breezy designs with vibrant colors for sunny days",
    cover: summerCover,
    folder: "Summer-Collection",
  },
  {
    id: "winter",
    title: "Winter Collection",
    description: "Elegant layers and rich textures for the cold season",
    cover: winterCover,
    folder: "Winter-Collection",
  },
  {
    id: "own1",
    title: "Own Collection 1",
    description: "Original designs from Varsha's creative vision",
    cover: own1Cover,
    folder: "Own-Collection-1",
  },
  {
    id: "own2",
    title: "Own Collection 2",
    description: "Couture pieces with hand-crafted details",
    cover: own2Cover,
    folder: "Own-Collection-2",
  },
  {
    id: "inspirations",
    title: "Indian & International Inspirations",
    description: "A fusion of traditional Indian and global fashion influences",
    cover: inspirationCover,
    folder: "Indian-International-Inspirations",
  },
];
