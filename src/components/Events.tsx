import TechExpoCard from "./TechExpoCard";
import ForgeCard from "./ForgeCard";

const Events = () => {
  return (
    <section id="events" className="py-16 md:py-24 px-4 sm:px-6 bg-background">
      <div className="max-w-7xl mx-auto flex flex-col gap-16 md:gap-24">

        {/* Upcoming Event */}
        <div>
          <div className="flex flex-col gap-3 md:gap-4 mb-8 md:mb-12">
            <p className="text-green-500 text-xs sm:text-sm font-black tracking-[0.3em] uppercase">Upcoming Event</p>
            <h2 className="text-foreground text-2xl sm:text-3xl md:text-4xl font-bold">Block Forge</h2>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg">Blockchain Workshop & Mini Hackathon | Free Entry | Prize Pool ₹30,000</p>
          </div>
          <ForgeCard />
        </div>

        {/* Divider */}
        <div className="border-t border-border/40" />

        {/* Previous Event */}
        <div>
          <div className="flex flex-col gap-3 md:gap-4 mb-8 md:mb-12">
            <p className="text-primary text-xs sm:text-sm font-black tracking-[0.3em] uppercase">Previous Event</p>
            <h2 className="text-foreground text-2xl sm:text-3xl md:text-4xl font-bold">TEXPO'26</h2>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg">Student Innovation & Industry Technology Expo | Prizes worth ₹30,000</p>
          </div>
          <TechExpoCard />
        </div>

      </div>
    </section>
  );
};

export default Events;