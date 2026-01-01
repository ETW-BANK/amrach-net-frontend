import { ArrowRight, Shield, Truck, CreditCard, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  { name: "Consumer Electronics", icon: "📱" },
  { name: "Apparel & Accessories", icon: "👕" },
  { name: "Home & Garden", icon: "🏠" },
  { name: "Sports & Entertainment", icon: "⚽" },
  { name: "Automobiles", icon: "🚗" },
  { name: "Machinery", icon: "⚙️" },
  { name: "Beauty & Health", icon: "💄" },
  { name: "Packaging", icon: "📦" },
];

export const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-secondary via-background to-secondary">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-6">
          {/* Categories Sidebar */}
          <div className="col-span-3 hidden lg:block">
            <div className="bg-card rounded-lg shadow-card overflow-hidden">
              <div className="bg-gradient-hero text-primary-foreground px-4 py-3">
                <h3 className="font-semibold">Categories</h3>
              </div>
              <div className="p-2">
                {categories.map((cat) => (
                  <a
                    key={cat.name}
                    href="#"
                    className="flex items-center gap-3 px-3 py-2.5 rounded-md hover:bg-muted transition-colors group"
                  >
                    <span className="text-xl">{cat.icon}</span>
                    <span className="text-sm text-foreground group-hover:text-primary transition-colors">
                      {cat.name}
                    </span>
                    <ArrowRight className="h-4 w-4 ml-auto text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Hero Banner */}
          <div className="col-span-12 lg:col-span-6">
            <div className="relative h-[380px] rounded-lg overflow-hidden bg-gradient-hero shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-transparent" />
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=400&fit=crop"
                alt="Hero"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-center p-8">
                <span className="text-primary-foreground/80 text-sm font-medium mb-2">
                  GLOBAL B2B MARKETPLACE
                </span>
                <h1 className="text-4xl font-bold text-primary-foreground mb-4 leading-tight">
                  Source from <br />Global Suppliers
                </h1>
                <p className="text-primary-foreground/90 mb-6 max-w-md">
                  Connect with verified manufacturers and suppliers worldwide.
                  Get competitive prices on bulk orders.
                </p>
                <div className="flex gap-4">
                  <Button variant="secondary" size="lg">
                    Start Sourcing
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="lg" className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20">
                    View Suppliers
                  </Button>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-4 gap-4 mt-6">
              {[
                { icon: Shield, label: "Trade Assurance" },
                { icon: Truck, label: "Fast Shipping" },
                { icon: CreditCard, label: "Secure Payment" },
                { icon: Headphones, label: "24/7 Support" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 bg-card rounded-lg p-3 shadow-card"
                >
                  <div className="bg-success/10 text-success rounded-full p-2">
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="text-xs font-medium text-foreground">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="col-span-12 lg:col-span-3 space-y-4">
            {/* Sign In Card */}
            <div className="bg-card rounded-lg shadow-card p-4">
              <h4 className="font-semibold text-foreground mb-3">Sign in to access</h4>
              <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                <li className="flex items-center gap-2">
                  <span className="text-success">✓</span> Personalized recommendations
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-success">✓</span> Order management
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-success">✓</span> Exclusive deals
                </li>
              </ul>
              <Button variant="hero" className="w-full">
                Sign In
              </Button>
              <p className="text-center text-xs text-muted-foreground mt-3">
                New user? <a href="#" className="text-primary hover:underline">Join free</a>
              </p>
            </div>

            {/* Quick RFQ */}
            <div className="bg-gradient-to-br from-primary/10 to-accent/5 rounded-lg p-4 border border-primary/20">
              <h4 className="font-semibold text-foreground mb-2">Get Quotes Fast</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Submit a request and get quotes from suppliers
              </p>
              <Button variant="default" size="sm" className="w-full">
                Request for Quotation
              </Button>
            </div>

            {/* Promo Banner */}
            <div className="relative h-32 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=150&fit=crop"
                alt="Promo"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 to-transparent flex items-center p-4">
                <div>
                  <p className="text-xs text-primary-foreground/80">LIMITED TIME</p>
                  <p className="text-lg font-bold text-primary-foreground">New User Deals</p>
                  <p className="text-xs text-primary-foreground/80">Up to 70% OFF</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};