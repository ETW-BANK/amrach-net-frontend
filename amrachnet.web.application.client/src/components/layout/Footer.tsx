import { Facebook, Twitter, Linkedin, Youtube, Instagram, ChevronDown } from "lucide-react";
import { useState } from "react";

const footerLinks = {
  "Get to Know Us": [
    "About B2B Marketplace",
    "Corporate Responsibility",
    "News Center",
    "Careers",
  ],
  "Source on Our Platform": [
    "Request for Quotation",
    "Membership Program",
    "Logistics Service",
    "Trade Assurance",
  ],
  "Sell on Our Platform": [
    "Start Selling",
    "Seller Central",
    "Become a Verified Supplier",
    "Partnerships",
  ],
  "Trade Services": [
    "Trade Assurance",
    "Business Identity",
    "Logistics",
    "Inspection Service",
  ],
  "Help": [
    "Help Center",
    "Get the App",
    "Chat with Us",
    "Report Abuse",
  ],
};

export const Footer = () => {
  const [openSections, setOpenSections] = useState<string[]>([]);

  const toggleSection = (title: string) => {
    setOpenSections((prev) =>
      prev.includes(title) ? prev.filter((s) => s !== title) : [...prev, title]
    );
  };

  return (
    <footer className="bg-foreground text-secondary">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 md:grid-cols-5 gap-8">
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold text-card mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-card transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Mobile Accordion */}
        <div className="md:hidden space-y-2">
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="border-b border-muted-foreground/20">
              <button
                onClick={() => toggleSection(title)}
                className="flex items-center justify-between w-full py-3 text-left"
              >
                <h3 className="font-semibold text-card">{title}</h3>
                <ChevronDown
                  className={`h-5 w-5 text-card transition-transform ${
                    openSections.includes(title) ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openSections.includes(title) && (
                <ul className="space-y-2 pb-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-muted-foreground hover:text-card transition-colors block py-1"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* App & Social */}
        <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-muted-foreground/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
              <span className="text-sm text-muted-foreground">Follow us:</span>
              <div className="flex items-center gap-3">
                {[Facebook, Twitter, Linkedin, Youtube, Instagram].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="text-muted-foreground hover:text-card transition-colors"
                    aria-label={`Social media link ${i + 1}`}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
              <span className="text-sm text-muted-foreground">Download App:</span>
              <div className="flex items-center gap-2">
                <button className="bg-card/10 hover:bg-card/20 text-card px-3 md:px-4 py-2 rounded-md text-xs md:text-sm transition-colors">
                  App Store
                </button>
                <button className="bg-card/10 hover:bg-card/20 text-card px-3 md:px-4 py-2 rounded-md text-xs md:text-sm transition-colors">
                  Google Play
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-muted-foreground/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-center md:text-left">
              <span>© 2024 B2B Marketplace. All rights reserved.</span>
              <div className="flex items-center gap-3 md:gap-4">
                <a href="#" className="hover:text-card">Privacy Policy</a>
                <a href="#" className="hover:text-card">Terms of Use</a>
                <a href="#" className="hover:text-card">Legal Notice</a>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </footer>
  );
};
