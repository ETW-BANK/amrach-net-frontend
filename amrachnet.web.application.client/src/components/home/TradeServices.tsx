import { Shield, Truck, CreditCard, FileCheck, Clock, Headphones } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Trade Assurance",
    description: "Protect your orders from payment to delivery with our buyer protection program",
    color: "bg-success/10 text-success",
  },
  {
    icon: FileCheck,
    title: "Verified Suppliers",
    description: "All suppliers are verified through on-site inspections and certifications",
    color: "bg-info/10 text-info",
  },
  {
    icon: Truck,
    title: "Logistics Services",
    description: "End-to-end shipping solutions with real-time tracking worldwide",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    description: "Multiple secure payment options with escrow protection",
    color: "bg-warning/10 text-warning",
  },
  {
    icon: Clock,
    title: "Fast Fulfillment",
    description: "Ready-to-ship products delivered within 3-7 business days",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Dedicated customer service team available around the clock",
    color: "bg-destructive/10 text-destructive",
  },
];

export const TradeServices = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Trade with Confidence
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We provide comprehensive trade services to ensure safe, efficient, and
            reliable business transactions for buyers worldwide.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 group cursor-pointer"
            >
              <div
                className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-12 bg-gradient-hero rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Ready to Start Sourcing?
          </h3>
          <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
            Join millions of buyers who trust our platform for their business needs.
            Get started with a free account today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-card text-foreground hover:bg-card/90 px-8 py-3 rounded-lg font-semibold transition-colors">
              Join Free Now
            </button>
            <button className="bg-primary-foreground/10 border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 px-8 py-3 rounded-lg font-semibold transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
