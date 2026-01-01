import { ArrowRight } from "lucide-react";

const categories = [
  {
    name: "Consumer Electronics",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=300&h=200&fit=crop",
    items: ["Smartphones", "Laptops", "Tablets", "Accessories"],
  },
  {
    name: "Apparel & Fashion",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300&h=200&fit=crop",
    items: ["Women's Clothing", "Men's Clothing", "Shoes", "Bags"],
  },
  {
    name: "Home & Garden",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=200&fit=crop",
    items: ["Furniture", "Kitchen", "Decor", "Garden Tools"],
  },
  {
    name: "Machinery",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop",
    items: ["Industrial", "Manufacturing", "Construction", "Agriculture"],
  },
  {
    name: "Beauty & Personal Care",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300&h=200&fit=crop",
    items: ["Skincare", "Makeup", "Hair Care", "Fragrance"],
  },
  {
    name: "Sports & Outdoors",
    image: "https://images.unsplash.com/photo-1461896836934- voices08cbb?w=300&h=200&fit=crop",
    items: ["Fitness", "Camping", "Team Sports", "Water Sports"],
  },
];

export const CategoryGrid = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Explore Categories</h2>
            <p className="text-muted-foreground mt-1">Find products across all industries</p>
          </div>
          <a
            href="#"
            className="flex items-center gap-2 text-primary hover:underline font-medium"
          >
            View all categories
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat) => (
            <a
              key={cat.name}
              href="#"
              className="group bg-card rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              <div className="relative h-32 overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                <h3 className="absolute bottom-3 left-3 right-3 text-sm font-semibold text-card">
                  {cat.name}
                </h3>
              </div>
              <div className="p-3">
                <ul className="space-y-1">
                  {cat.items.slice(0, 3).map((item) => (
                    <li
                      key={item}
                      className="text-xs text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
