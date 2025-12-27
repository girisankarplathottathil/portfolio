import { 
  Luggage, 
  Utensils, 
  Wifi, 
  CreditCard, 
  Shield, 
  Mountain,
  Compass,
  Camera 
} from "lucide-react";

const essentials = [
  { icon: Luggage, label: "Packing", description: "Smart packing tips" },
  { icon: Utensils, label: "Cuisine", description: "Local food guides" },
  { icon: Wifi, label: "Connectivity", description: "Stay connected" },
  { icon: CreditCard, label: "Currency", description: "Payment info" },
  { icon: Shield, label: "Safety", description: "Travel safely" },
  { icon: Mountain, label: "Activities", description: "Adventures await" },
  { icon: Compass, label: "Navigation", description: "Getting around" },
  { icon: Camera, label: "Photography", description: "Capture moments" },
];

const TravelEssentialsSection = () => {
  return (
    <section id="essentials" className="py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-widest text-sm mb-4">
            PREPARE YOUR JOURNEY
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Travel Essentials
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Everything you need to know for a seamless travel experience across Saudi Arabia.
          </p>
        </div>

        {/* Essentials Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 lg:gap-6">
          {essentials.map((item, index) => (
            <div
              key={item.label}
              className="group flex flex-col items-center text-center p-6 rounded-xl bg-secondary/50 hover:bg-secondary border border-border/50 hover:border-primary/30 transition-all duration-300 cursor-pointer"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:glow-gold transition-all duration-300">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-foreground font-medium text-sm mb-1">
                {item.label}
              </h3>
              <p className="text-muted-foreground text-xs">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelEssentialsSection;
