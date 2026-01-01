import { ArrowRight, Flame } from "lucide-react";
import { ProductCard } from "./ProductCard";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: 1,
    name: "Wireless Bluetooth Earbuds TWS Noise Cancelling Headphones",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=300&fit=crop",
    price: "$5.99 - $12.99",
    minOrder: "100 pieces",
    supplier: "Shenzhen Audio Co., Ltd",
    rating: 4.8,
    reviews: 2543,
    verified: true,
    shipping: "Ready to Ship",
  },
  {
    id: 2,
    name: "Smart Watch Fitness Tracker Heart Rate Monitor Waterproof",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
    price: "$8.50 - $15.00",
    minOrder: "50 pieces",
    supplier: "Guangzhou Tech Ltd",
    rating: 4.6,
    reviews: 1876,
    verified: true,
    shipping: "3-Day Delivery",
  },
  {
    id: 3,
    name: "Portable Power Bank 20000mAh Fast Charging USB-C",
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=300&fit=crop",
    price: "$7.20 - $11.50",
    minOrder: "100 pieces",
    supplier: "Dongguan Power Co.",
    rating: 4.9,
    reviews: 3421,
    verified: true,
    shipping: "Ready to Ship",
  },
  {
    id: 4,
    name: "LED Ring Light Professional Photography Studio Lighting",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=300&fit=crop",
    price: "$12.00 - $25.00",
    minOrder: "20 pieces",
    supplier: "Beijing Photo Equipment",
    rating: 4.7,
    reviews: 892,
    verified: false,
    shipping: "7-Day Delivery",
  },
  {
    id: 5,
    name: "Mechanical Keyboard RGB Backlit Gaming 104 Keys",
    image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=400&h=300&fit=crop",
    price: "$15.99 - $28.00",
    minOrder: "30 pieces",
    supplier: "Hangzhou Gaming Tech",
    rating: 4.5,
    reviews: 1234,
    verified: true,
    shipping: "Ready to Ship",
  },
  {
    id: 6,
    name: "Wireless Charging Pad Fast Charger for iPhone Samsung",
    image: "https://images.unsplash.com/photo-1586816879360-004f5b0c51e3?w=400&h=300&fit=crop",
    price: "$3.50 - $8.00",
    minOrder: "200 pieces",
    supplier: "Shenzhen Charge Co.",
    rating: 4.4,
    reviews: 2156,
    verified: true,
    shipping: "5-Day Delivery",
  },
  {
    id: 7,
    name: "Sports Running Shoes Breathable Mesh Sneakers Men Women",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop",
    price: "$8.00 - $18.00",
    minOrder: "50 pairs",
    supplier: "Fujian Sports Wear",
    rating: 4.6,
    reviews: 1567,
    verified: true,
    shipping: "Ready to Ship",
  },
  {
    id: 8,
    name: "Stainless Steel Water Bottle Vacuum Insulated Flask",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=300&fit=crop",
    price: "$2.50 - $6.00",
    minOrder: "500 pieces",
    supplier: "Zhejiang Metal Products",
    rating: 4.8,
    reviews: 3892,
    verified: true,
    shipping: "3-Day Delivery",
  },
];

export const FeaturedProducts = () => {
  return (
    <section className="py-12 bg-secondary/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-hero p-2 rounded-lg">
              <Flame className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground">Top Ranking Products</h2>
              <p className="text-muted-foreground mt-1">Best sellers from verified suppliers</p>
            </div>
          </div>
          <Button variant="outline" className="hidden md:flex">
            View All Products
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-8 flex justify-center md:hidden">
          <Button variant="outline">
            View All Products
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};
