import { Star, Shield, Truck } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    image: string;
    price: string;
    minOrder: string;
    supplier: string;
    rating: number;
    reviews: number;
    verified: boolean;
    shipping: string;
  };
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <a
      href="#"
      className="group bg-card rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {product.verified && (
          <Badge className="absolute top-2 left-2 bg-success text-success-foreground text-xs">
            <Shield className="h-3 w-3 mr-1" />
            Verified
          </Badge>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-sm font-medium text-foreground line-clamp-2 group-hover:text-primary transition-colors mb-2">
          {product.name}
        </h3>

        {/* Price */}
        <div className="mb-2">
          <span className="text-lg font-bold text-primary">{product.price}</span>
          <span className="text-xs text-muted-foreground ml-2">/ piece</span>
        </div>

        {/* Min Order */}
        <p className="text-xs text-muted-foreground mb-3">
          Min. order: {product.minOrder}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-3 w-3 ${
                  i < Math.floor(product.rating)
                    ? "text-warning fill-warning"
                    : "text-muted"
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">
            {product.rating} ({product.reviews})
          </span>
        </div>

        {/* Supplier & Shipping */}
        <div className="mt-auto pt-3 border-t border-border">
          <p className="text-xs text-muted-foreground mb-1">{product.supplier}</p>
          <div className="flex items-center gap-1 text-xs text-success">
            <Truck className="h-3 w-3" />
            {product.shipping}
          </div>
        </div>
      </div>
    </a>
  );
};
