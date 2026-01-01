import { useState } from "react";
import { Search, ShoppingCart, User, ChevronDown, Menu, Globe, MessageCircle, Heart, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logoImage from "@/assets/image/LOGOCLEAN.png";

const categories = [
  "All Categories",
  "Consumer Electronics",
  "Apparel & Accessories",
  "Home & Garden",
  "Sports & Entertainment",
  "Automobiles & Motorcycles",
  "Machinery",
  "Beauty & Health",
];

export const Header = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-card shadow-card">
      {/* Top Bar - Hidden on mobile */}
      <div className="border-b border-border hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-10 text-sm">
            <div className="flex items-center gap-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Buyer Central
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Sell on Marketplace
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Help
              </a>
            </div>
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors">
                <Globe className="h-4 w-4" />
                <span>English-USD</span>
              </button>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Ship to: United States
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center gap-2 md:gap-8">
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>

          {/* Logo */}
          <a href="/" className="flex-shrink-0">
            <div className="flex items-center gap-3">
              <img 
                src={logoImage} 
                alt="B2B Marketplace Logo" 
                className="h-12 md:h-48 w-auto"
              />
            
            </div>
          </a>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-3xl">
            <div className="flex w-full">
              {/* Category Dropdown */}
              <div className="relative">
                <button 
                  className="flex items-center gap-2 h-11 px-4 bg-secondary border border-r-0 border-input rounded-l-md hover:bg-muted transition-colors"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <span className="text-sm whitespace-nowrap">{selectedCategory}</span>
                  <ChevronDown className="h-4 w-4 text-muted-foreground" />
                </button>
                {isMenuOpen && (
                  <div className="absolute top-full left-0 w-64 bg-card border border-border rounded-md shadow-lg mt-1 py-2 z-50">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        className="w-full text-left px-4 py-2 text-sm hover:bg-muted hover:text-primary transition-colors"
                        onClick={() => {
                          setSelectedCategory(cat);
                          setIsMenuOpen(false);
                        }}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Search Input */}
              <Input
                type="text"
                placeholder="Search products, suppliers, or categories..."
                className="h-11 rounded-none border-input focus-visible:ring-primary"
              />
              
              {/* Search Button */}
              <Button variant="search" size="lg" className="h-11">
                <Search className="h-5 w-5" />
                <span className="hidden sm:inline">Search</span>
              </Button>
            </div>
          </div>

          {/* Right Actions - Desktop */}
          <div className="hidden md:flex items-center gap-6">
            <button className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors">
              <MessageCircle className="h-6 w-6" />
              <span className="text-xs mt-1">Messages</span>
            </button>
            <button className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors">
              <Heart className="h-6 w-6" />
              <span className="text-xs mt-1">Favorites</span>
            </button>
            <button className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors relative">
              <ShoppingCart className="h-6 w-6" />
              <span className="text-xs mt-1">Cart</span>
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </button>
            <Button variant="hero" size="default">
              <User className="h-4 w-4" />
              Sign In
            </Button>
          </div>

          {/* Mobile Actions - Simplified */}
          <div className="flex md:hidden items-center gap-3 ml-auto">
            <button className="relative">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-4 w-4 flex items-center justify-center text-[10px]">
                3
              </span>
            </button>
            <Button variant="hero" size="sm">
              <User className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden mt-3">
          <div className="flex">
            <Input
              type="text"
              placeholder="Search..."
              className="h-10 rounded-l-md border-input"
            />
            <Button variant="search" size="default" className="h-10 rounded-r-md rounded-l-none">
              <Search className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Category Navigation - Desktop */}
      <div className="border-t border-border bg-card hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-8 h-12 overflow-x-auto">
            <button className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors whitespace-nowrap">
              <Menu className="h-4 w-4" />
              All Categories
            </button>
            {["Hot Deals", "Top Ranking", "New Arrivals", "Trade Assurance", "Ready to Ship", "Logistics"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm text-muted-foreground hover:text-primary transition-colors whitespace-nowrap"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <>
          {/* Overlay */}
          <div 
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Drawer */}
          <div className="fixed left-0 top-0 bottom-0 w-80 bg-card z-50 shadow-xl md:hidden overflow-y-auto">
            <div className="p-4">
              {/* Close Button */}
              <button 
                className="absolute top-4 right-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X className="h-6 w-6" />
              </button>

              {/* Logo */}
              <div className="mb-6">
                <img 
                  src={logoImage} 
                  alt="B2B Marketplace Logo" 
                  className="h-16 w-auto"
                />
              </div>

              {/* Sign In */}
              <Button variant="hero" className="w-full mb-6">
                <User className="h-4 w-4 mr-2" />
                Sign In
              </Button>

              {/* Navigation Links */}
              <nav className="space-y-4">
                <div className="border-b border-border pb-4">
                  <h3 className="font-semibold mb-2">Quick Links</h3>
                  <a href="#" className="block py-2 text-muted-foreground hover:text-primary transition-colors">
                    Buyer Central
                  </a>
                  <a href="#" className="block py-2 text-muted-foreground hover:text-primary transition-colors">
                    Sell on Marketplace
                  </a>
                  <a href="#" className="block py-2 text-muted-foreground hover:text-primary transition-colors">
                    Help
                  </a>
                </div>

                <div className="border-b border-border pb-4">
                  <h3 className="font-semibold mb-2">Categories</h3>
                  {["Hot Deals", "Top Ranking", "New Arrivals", "Trade Assurance", "Ready to Ship", "Logistics"].map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="block py-2 text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item}
                    </a>
                  ))}
                </div>

                <div className="border-b border-border pb-4">
                  <h3 className="font-semibold mb-2">My Account</h3>
                  <button className="flex items-center gap-2 py-2 w-full text-left text-muted-foreground hover:text-primary transition-colors">
                    <MessageCircle className="h-5 w-5" />
                    Messages
                  </button>
                  <button className="flex items-center gap-2 py-2 w-full text-left text-muted-foreground hover:text-primary transition-colors">
                    <Heart className="h-5 w-5" />
                    Favorites
                  </button>
                  <button className="flex items-center gap-2 py-2 w-full text-left text-muted-foreground hover:text-primary transition-colors">
                    <ShoppingCart className="h-5 w-5" />
                    Cart (3)
                  </button>
                </div>

                <div>
                  <button className="flex items-center gap-2 py-2 text-muted-foreground hover:text-primary transition-colors">
                    <Globe className="h-5 w-5" />
                    English-USD
                  </button>
                  <a href="#" className="block py-2 text-muted-foreground hover:text-primary transition-colors">
                    Ship to: United States
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </>
      )}
    </header>
  );
};