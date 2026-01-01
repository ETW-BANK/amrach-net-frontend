import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { SupplierShowcase } from "@/components/home/SupplierShowcase";
import { TradeServices } from "@/components/home/TradeServices";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <CategoryGrid />
        <FeaturedProducts />
        <SupplierShowcase />
        <TradeServices />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
