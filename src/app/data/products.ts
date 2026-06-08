export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  isBestSeller: boolean;
}

export const products: Product[] = [
  {"id": "p1", "name": "Shea Butter (150g)", "category": "Butters & Creams", "price": 8, "isBestSeller": true},
  {"id": "p2", "name": "Cacao Butter (150g)", "category": "Butters & Creams", "price": 10, "isBestSeller": false},
  {"id": "p3", "name": "Ginger Butter (100g)", "category": "Butters & Creams", "price": 7, "isBestSeller": false},
  {"id": "p4", "name": "Cacao Butter Oil", "category": "Soaps & Oils", "price": 7, "isBestSeller": false},
  {"id": "p5", "name": "Exfoliant Cream", "category": "Butters & Creams", "price": 8, "isBestSeller": true},
  {"id": "p6", "name": "Body Cream", "category": "Butters & Creams", "price": 8, "isBestSeller": false},
  {"id": "p7", "name": "Body Lotion", "category": "Butters & Creams", "price": 8, "isBestSeller": false},
  {"id": "p8", "name": "Cacao Butter Soap", "category": "Soaps & Oils", "price": 7, "isBestSeller": false},
  {"id": "p9", "name": "Karicoco Cream", "category": "Sun & Tanning", "price": 9, "isBestSeller": false},
  {"id": "p10", "name": "Oil + SPF 15", "category": "Sun & Tanning", "price": 10, "isBestSeller": false},
  {"id": "p11", "name": "Oil + SPF 10", "category": "Sun & Tanning", "price": 12, "isBestSeller": false},
  {"id": "p12", "name": "Sunscreen + SPF 50", "category": "Sun & Tanning", "price": 15, "isBestSeller": true},
  {"id": "p13", "name": "After Sun Lotion", "category": "Sun & Tanning", "price": 8, "isBestSeller": false},
  {"id": "p14", "name": "Ice Mint Shower Gel", "category": "Soaps & Oils", "price": 7, "isBestSeller": false},
  {"id": "p15", "name": "Natural Oils", "category": "Soaps & Oils", "price": 7, "isBestSeller": false},
  {"id": "p16", "name": "African Black Soap", "category": "Soaps & Oils", "price": 8, "isBestSeller": true}
];

export interface SkinGoalBundle {
  goal: string;
  description: string;
  productIds: string[];
}

export const skinGoalBundles: SkinGoalBundle[] = [
  {
    goal: "Deep Tanning",
    description: "Get a rich, sun-kissed glow with deep protective hydration.",
    productIds: ["p10", "p9"] // Oil + SPF 15 (p10) + Karicoco Cream (p9)
  },
  {
    goal: "Intense Hydration",
    description: "Restore deep, long-lasting moisture to dry skin.",
    productIds: ["p1", "p6"] // Shea Butter (150g) (p1) + Body Cream (p6) (Note: table has p11, but p1 matches Shea Butter (150g))
  },
  {
    goal: "Gentle Exfoliation",
    description: "Smooth away rough skin texture for a refreshed, soft touch.",
    productIds: ["p5", "p16"] // Exfoliant Cream (p5) + African Black Soap (p16)
  },
  {
    goal: "Sensitive/Natural",
    description: "Nourish hyper-sensitive skin with pure, organic botanicals.",
    productIds: ["p2", "p15"] // Cacao Butter (150g) (p2) + Natural Oils (p15)
  },
  {
    goal: "Glow & Radiance",
    description: "Protect and brighten your skin for an all-day luminous shine.",
    productIds: ["p12", "p5"] // Sunscreen + SPF 50 (p12) + Exfoliant Cream (p5)
  }
];
