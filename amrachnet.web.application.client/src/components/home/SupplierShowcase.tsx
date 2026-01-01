import { Shield, Star, MapPin, Clock, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const suppliers = [
  {
    id: 1,
    name: "Shenzhen Tech Solutions Co., Ltd",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&h=100&fit=crop",
    location: "Guangdong, China",
    yearsOnPlatform: 8,
    rating: 4.9,
    responseTime: "< 24h",
    verified: true,
    products: [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=150&h=150&fit=crop",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=150&h=150&fit=crop",
      "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=150&h=150&fit=crop",
    ],
    mainProduct: "Consumer Electronics",
  },
  {
    id: 2,
    name: "Hangzhou Fashion Apparel Group",
    logo: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=100&h=100&fit=crop",
    location: "Zhejiang, China",
    yearsOnPlatform: 12,
    rating: 4.8,
    responseTime: "< 12h",
    verified: true,
    products: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=150&h=150&fit=crop",
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=150&h=150&fit=crop",
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=150&h=150&fit=crop",
    ],
    mainProduct: "Apparel & Textiles",
  },
  {
    id: 3,
    name: "Ningbo Industrial Machinery Corp",
    logo: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=100&h=100&fit=crop",
    location: "Zhejiang, China",
    yearsOnPlatform: 15,
    rating: 4.7,
    responseTime: "< 48h",
    verified: true,
    products: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=150&h=150&fit=crop",
      "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=150&h=150&fit=crop",
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=150&h=150&fit=crop",
    ],
    mainProduct: "Industrial Machinery",
  },
];

export const SupplierShowcase = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Verified Suppliers</h2>
            <p className="text-muted-foreground mt-1">
              Connect with trusted manufacturers and traders
            </p>
          </div>
          <a
            href="#"
            className="flex items-center gap-2 text-primary hover:underline font-medium"
          >
            Find more suppliers
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        {/* Suppliers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {suppliers.map((supplier) => (
            <div
              key={supplier.id}
              className="bg-card rounded-lg shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden group"
            >
              {/* Header */}
              <div className="p-4 border-b border-border">
                <div className="flex items-start gap-4">
                  <img
                    src={supplier.logo}
                    alt={supplier.name}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground truncate group-hover:text-primary transition-colors">
                      {supplier.name}
                    </h3>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                      <MapPin className="h-3 w-3" />
                      {supplier.location}
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      {supplier.verified && (
                        <Badge className="bg-success/10 text-success text-xs">
                          <Shield className="h-3 w-3 mr-1" />
                          Verified
                        </Badge>
                      )}
                      <Badge variant="secondary" className="text-xs">
                        {supplier.yearsOnPlatform}+ yrs
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="px-4 py-3 bg-muted/50 flex items-center justify-between text-sm">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-warning fill-warning" />
                  <span className="font-medium">{supplier.rating}</span>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  Response: {supplier.responseTime}
                </div>
              </div>

              {/* Products Preview */}
              <div className="p-4">
                <p className="text-xs text-muted-foreground mb-3">
                  Main products: {supplier.mainProduct}
                </p>
                <div className="flex gap-2">
                  {supplier.products.map((img, i) => (
                    <div
                      key={i}
                      className="w-20 h-20 rounded-md overflow-hidden bg-muted"
                    >
                      <img
                        src={img}
                        alt="Product"
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="p-4 pt-0">
                <Button variant="outline" className="w-full">
                  Contact Supplier
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};