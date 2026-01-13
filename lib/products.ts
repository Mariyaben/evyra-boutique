export type ProductCategory =
  | "Bridal Gown"
  | "Reception Dress"
  | "Sangeet & Mehendi"
  | "Accessories";

export type Product = {
  id: string;
  name: string;
  shortDescription: string;
  category: ProductCategory;
  price: number;
  tags?: string[];
};

export const products: Product[] = [
  {
    id: "evyra-aurora-gown",
    name: "Aurora Handloom Bridal Gown",
    shortDescription:
      "Ivory silk organza with hand-embroidered florals and a sweeping chapel train.",
    category: "Bridal Gown",
    price: 4200,
    tags: ["Signature", "Hand embroidered"],
  },
  {
    id: "evyra-moonlit-sari",
    name: "Moonlit Sari Gown",
    shortDescription:
      "Sculpted drape inspired by heirloom saris, finished with pearl edging.",
    category: "Bridal Gown",
    price: 3650,
    tags: ["Modern classic", "Pearl edged"],
  },
  {
    id: "evyra-rosewater-midi",
    name: "Rosewater Reception Midi",
    shortDescription:
      "Blush silk faille midi with corseted bodice and soft pleated skirt.",
    category: "Reception Dress",
    price: 1900,
    tags: ["Reception", "Lightweight"],
  },
  {
    id: "evyra-saffron-lehenga",
    name: "Saffron Song Lehenga",
    shortDescription:
      "Handwoven lehenga in marigold and rose, detailed with mirrorwork.",
    category: "Sangeet & Mehendi",
    price: 2850,
    tags: ["Sangeet", "Colour-play"],
  },
  {
    id: "evyra-seafoam-kurta",
    name: "Seafoam Kurta Set",
    shortDescription:
      "Soft mint kurta set with tonal embroidery for intimate celebrations.",
    category: "Sangeet & Mehendi",
    price: 980,
    tags: ["Mehendi", "Comfort"],
  },
  {
    id: "evyra-pearl-veil",
    name: "Whispered Pearl Veil",
    shortDescription:
      "Cathedral-length tulle veil scattered with hand-sewn freshwater pearls.",
    category: "Accessories",
    price: 520,
    tags: ["Veil", "Pearl detail"],
  },
  {
    id: "evyra-gold-kamarbandh",
    name: "Gilded Kamarbandh Belt",
    shortDescription:
      "Delicate gold-plated belt to frame lehengas and saris.",
    category: "Accessories",
    price: 280,
    tags: ["Gold", "Styling"],
  },
];

export const productsById: Record<string, Product> = Object.fromEntries(
  products.map((p) => [p.id, p])
);

export const productCategories: (ProductCategory | "All")[] = [
  "All",
  "Bridal Gown",
  "Reception Dress",
  "Sangeet & Mehendi",
  "Accessories",
];

export const featuredProducts: Product[] = products.slice(0, 3);
