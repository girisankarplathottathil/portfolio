import { Mountain, Flower2, Drama, Compass } from "lucide-react";

interface TopPickItem {
  icon: React.ReactNode;
  label: string;
  gradient: string;
}

const topPicks: TopPickItem[] = [
  { 
    icon: <Mountain className="w-7 h-7" />, 
    label: "Ruins",
    gradient: "from-amber-900/40 to-stone-800/60"
  },
  { 
    icon: <Flower2 className="w-7 h-7" />, 
    label: "Sakura Cherry",
    gradient: "from-pink-900/40 to-rose-800/60"
  },
  { 
    icon: <Drama className="w-7 h-7" />, 
    label: "Culture",
    gradient: "from-orange-900/40 to-amber-800/60"
  },
  { 
    icon: <Compass className="w-7 h-7" />, 
    label: "Adventures",
    gradient: "from-cyan-900/40 to-teal-800/60"
  },
];

const TopPicks = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-xl font-medium text-foreground mb-1 tracking-wide">Top Picks</h2>
        <p className="text-muted-foreground text-xs mb-10">
          Handpicked destinations for you to explore
        </p>
        
        <div className="flex flex-wrap justify-center gap-10 md:gap-16">
          {topPicks.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-4 cursor-pointer group"
            >
              <div 
                className={`w-[72px] h-[72px] rounded-full bg-gradient-to-br ${item.gradient} backdrop-blur-sm border border-border/30 flex items-center justify-center text-primary/80 group-hover:text-primary group-hover:border-primary/40 transition-all duration-300 group-hover:scale-110 shadow-lg shadow-black/20`}
              >
                {item.icon}
              </div>
              <span className="text-xs text-muted-foreground font-medium group-hover:text-foreground transition-colors tracking-wide">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopPicks;
