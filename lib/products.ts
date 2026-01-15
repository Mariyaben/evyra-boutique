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
  image?: string;
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
    image: "/hero-mobile.png",
  },
  {
    id: "evyra-moonlit-sari",
    name: "Moonlit Sari Gown",
    shortDescription:
      "Sculpted drape inspired by heirloom saris, finished with pearl edging.",
    category: "Bridal Gown",
    price: 3650,
    tags: ["Modern classic", "Pearl edged"],
    image: "/evysari.png",
  },
  {
    id: "evyra-rosewater-midi",
    name: "Rosewater Reception Midi",
    shortDescription:
      "Blush silk faille midi with corseted bodice and soft pleated skirt.",
    category: "Reception Dress",
    price: 1900,
    tags: ["Reception", "Lightweight"],
    image: "/evydress.png",
  },
  {
    id: "evyra-saffron-lehenga",
    name: "Saffron Song Lehenga",
    shortDescription:
      "Handwoven lehenga in marigold and rose, detailed with mirrorwork.",
    category: "Sangeet & Mehendi",
    price: 2850,
    tags: ["Sangeet", "Colour-play"],
    image: "/evylenga2.png",
  },
  {
    id: "evyra-seafoam-kurta",
    name: "Seafoam Kurta Set",
    shortDescription:
      "Soft mint kurta set with tonal embroidery for intimate celebrations.",
    category: "Sangeet & Mehendi",
    price: 980,
    tags: ["Mehendi", "Comfort"],
    image: "/evydress.png",
  },
  {
    id: "evyra-pearl-veil",
    name: "Whispered Pearl Veil",
    shortDescription:
      "Cathedral-length tulle veil scattered with hand-sewn freshwater pearls.",
    category: "Accessories",
    price: 520,
    tags: ["Veil", "Pearl detail"],
    image: "/evysari.png",
  },
  {
    id: "evyra-gold-kamarbandh",
    name: "Gilded Kamarbandh Belt",
    shortDescription:
      "Delicate gold-plated belt to frame lehengas and saris.",
    category: "Accessories",
    price: 280,
    tags: ["Gold", "Styling"],
    image: "/evygoldsaree.png",
  },
  {
    id: "evyra-moonrise-sari",
    name: "Moonrise Temple Sari",
    shortDescription:
      "Ivory silk sari with antique zari borders, photographed against sandstone arches.",
    category: "Bridal Gown",
    price: 3320,
    tags: ["Sari gown", "Heritage"],
    image: "/evygoldsaree.png",
  },
  {
    id: "evyra-saffron-court-lehenga",
    name: "Saffron Court Lehenga",
    shortDescription:
      "Marigold lehenga with fine gota work, designed for sangeet celebrations.",
    category: "Sangeet & Mehendi",
    price: 2980,
    tags: ["Sangeet", "Statement"],
    image: "/evylenga2.png",
  },
  {
    id: "evyra-caravan-sari",
    name: "Caravan Moon Sari Gown",
    shortDescription:
      "Moonlit sari gown in liquid ivory, draped for open-air terraces.",
    category: "Reception Dress",
    price: 2740,
    tags: ["Reception", "Sari gown"],
    image: "/evysaree2.png",
  },
  {
    id: "evyra-rose-salon-gown",
    name: "Rose Salon Pleated Gown",
    shortDescription:
      "Blush pleated gown with corseted bodice for cocktail receptions.",
    category: "Reception Dress",
    price: 2100,
    tags: ["Pleated", "Reception"],
    image: "/Gemini_Generated_Image_d84dh3d84dh3d84d.png",
  },
  {
    id: "evyra-loomed-veil",
    name: "Loomed Rose Veil",
    shortDescription:
      "Soft tulle veil inspired by handloom textures from the Evyra studio archives.",
    category: "Accessories",
    price: 460,
    tags: ["Veil", "Archive"],
    image: "/evysaree2.png",
  },
  {
    id: "evyra-karigar-dupatta",
    name: "Karigar Atelier Dupatta",
    shortDescription:
      "Sheer dupatta with painterly florals, designed to layer over lehengas.",
    category: "Accessories",
    price: 380,
    tags: ["Dupatta", "Handcrafted"],
    image: "/evylenga.png",
  },
  {
    id: "evyra-pink-courtyard-gown",
    name: "Courtyard Rose Bridal Gown",
    shortDescription:
      "Powder rose gown with soft corsetry, captured in a Rajasthani courtyard.",
    category: "Bridal Gown",
    price: 3980,
    tags: ["Signature", "Editorial"],
    image: "/evydress.png",
  },
  {
    id: "evyra-sunset-panorama-sari",
    name: "Sunset Panorama Sari",
    shortDescription:
      "Draped sari gown styled against an open desert skyline.",
    category: "Reception Dress",
    price: 2890,
    tags: ["Modern classic"],
    image: "/evysari.png",
  },
  {
    id: "evyra-atelier-mini",
    name: "Atelier Film Mini Dress",
    shortDescription:
      "Structured mini dress that echoes the textures of our campaign film.",
    category: "Reception Dress",
    price: 1750,
    tags: ["Campaign", "Modern"],
    image: "/hero-mobile.png",
  },
  {
    id: "evyra-desert-lilac-lehenga",
    name: "Desert Lilac Lehenga",
    shortDescription:
      "Lilac and saffron lehenga with mirrorwork, styled for courtyard sangeets.",
    category: "Sangeet & Mehendi",
    price: 2620,
    tags: ["Sangeet", "Mirrorwork"],
    image: "/evylenga2.png",
  },
  {
    id: "evyra-sandstone-bridal-gown",
    name: "Sandstone Arch Bridal Gown",
    shortDescription:
      "Ivory bridal gown framed against carved sandstone arches and jharokhas.",
    category: "Bridal Gown",
    price: 4150,
    tags: ["Bridal", "Heritage"],
    image: "/evylenga.png",
  },
  {
    id: "evyra-terrace-reception-midi",
    name: "Terrace Dawn Reception Midi",
    shortDescription:
      "Soft rose midi dress with structured bodice for rooftop receptions.",
    category: "Reception Dress",
    price: 1880,
    tags: ["Reception", "Midi"],
    image: "/evydress.png",
  },
  {
    id: "evyra-monsoon-sari-gown",
    name: "Monsoon Courtyard Sari Gown",
    shortDescription:
      "Liquid ivory sari gown with gentle drape, imagined for monsoon terraces.",
    category: "Reception Dress",
    price: 2680,
    tags: ["Sari gown", "Modern classic"],
    image: "/evysari.png",
  },
  {
    id: "evyra-amber-mehendi-set",
    name: "Amber Mehendi Kurta Set",
    shortDescription:
      "Lightweight kurta set in amber and rose, perfect for mehendi afternoons.",
    category: "Sangeet & Mehendi",
    price: 1040,
    tags: ["Mehendi", "Comfort"],
    image: "/evylenga2.png",
  },
  {
    id: "evyra-pearl-droplet-earrings",
    name: "Pearl Droplet Chand Earrings",
    shortDescription:
      "Delicate chand earrings with cascading pearls for bridal looks.",
    category: "Accessories",
    price: 320,
    tags: ["Jewellery", "Pearl"],
    image: "/Gemini_Generated_Image_d84dh3d84dh3d84d.png",
  },
  {
    id: "evyra-heritage-kada-set",
    name: "Heritage Kada Bangle Set",
    shortDescription:
      "Stackable kada bangles with antique-finish detailing.",
    category: "Accessories",
    price: 290,
    tags: ["Jewellery", "Stacking"],
    image: "/evygoldsaree.png",
  },
  {
    id: "evyra-vermilion-lehenga",
    name: "Vermilion Court Lehenga",
    shortDescription:
      "Deep vermilion lehenga with tonal threadwork for sangeet nights.",
    category: "Sangeet & Mehendi",
    price: 3050,
    tags: ["Sangeet", "Statement"],
    image: "/evylenga.png",
  },
  {
    id: "evyra-sunrise-bridal-gown",
    name: "Sunrise Courtyard Bridal Gown",
    shortDescription:
      "Soft blush bridal gown with sweeping train, shot at daybreak.",
    category: "Bridal Gown",
    price: 4020,
    tags: ["Bridal", "Editorial"],
    image: "/evygoldsaree.png",
  },
  {
    id: "evyra-lotus-courtyard-midi",
    name: "Lotus Courtyard Midi Dress",
    shortDescription:
      "Lotus-pink midi dress with knife pleats for cocktail evenings.",
    category: "Reception Dress",
    price: 1820,
    tags: ["Pleated", "Reception"],
    image: "/evydress.png",
  },
  {
    id: "evyra-saffron-veil",
    name: "Saffron Halo Veil",
    shortDescription:
      "Soft tulle veil edged with saffron zari for sunset pheras.",
    category: "Accessories",
    price: 540,
    tags: ["Veil", "Zari"],
    image: "/evysaree2.png",
  },
  {
    id: "evyra-carved-arch-sari",
    name: "Carved Arch Sari Gown",
    shortDescription:
      "Ivory sari gown framed within intricate palace arches.",
    category: "Reception Dress",
    price: 2810,
    tags: ["Sari gown", "Palace"],
    image: "/evysari.png",
  },
  {
    id: "evyra-rosequartz-lehenga",
    name: "Rose Quartz Lehenga",
    shortDescription:
      "Rose quartz-toned lehenga with scattered florals and shimmer.",
    category: "Sangeet & Mehendi",
    price: 3120,
    tags: ["Sangeet", "Shimmer"],
    image: "/evylenga2.png",
  },
  {
    id: "evyra-midnight-terrace-gown",
    name: "Midnight Terrace Gown",
    shortDescription:
      "Ink-toned gown designed for candlelit terrace cocktails.",
    category: "Reception Dress",
    price: 2230,
    tags: ["Evening", "Modern"],
    image: "/hero-mobile.png",
  },
  {
    id: "evyra-sand-gold-bridal-gown",
    name: "Sand Gold Bridal Gown",
    shortDescription:
      "Champagne gold bridal gown inspired by desert light.",
    category: "Bridal Gown",
    price: 4370,
    tags: ["Bridal", "Gold"],
    image: "/evygoldsaree.png",
  },
  {
    id: "evyra-mirrorwork-kurta-set",
    name: "Mirrorwork Courtyard Kurta Set",
    shortDescription:
      "Kurta set with scattered mirrorwork for daytime functions.",
    category: "Sangeet & Mehendi",
    price: 1120,
    tags: ["Kurta", "Mirrorwork"],
    image: "/evylenga.png",
  },
  {
    id: "evyra-lattice-veil",
    name: "Lattice Arch Veil",
    shortDescription:
      "Veil edged with a delicate lattice pattern echoing palace jaalis.",
    category: "Accessories",
    price: 510,
    tags: ["Veil", "Lattice"],
    image: "/Gemini_Generated_Image_d84dh3d84dh3d84d.png",
  },
  {
    id: "evyra-sunlit-dupatta",
    name: "Sunlit Courtyard Dupatta",
    shortDescription:
      "Lightweight dupatta washed in sunlit gold tones.",
    category: "Accessories",
    price: 360,
    tags: ["Dupatta", "Layering"],
    image: "/evysaree2.png",
  },
  {
    id: "evyra-petal-tassel-belt",
    name: "Petal Tassel Kamarbandh",
    shortDescription:
      "Kamarbandh with petal tassels to cinch lehengas and saris.",
    category: "Accessories",
    price: 300,
    tags: ["Belt", "Tassel"],
    image: "/evydress.png",
  },
  {
    id: "evyra-jasmine-court-gown",
    name: "Jasmine Court Bridal Gown",
    shortDescription:
      "Jasmine-toned bridal gown with gentle corsetry and sweeping skirt.",
    category: "Bridal Gown",
    price: 4090,
    tags: ["Bridal", "Signature"],
    image: "/evysari.png",
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
