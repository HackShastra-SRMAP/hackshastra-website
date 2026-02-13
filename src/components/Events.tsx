import TechExpoCard from "./TechExpoCard";

const Events = () => {
  return (
    <section id="events" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-4 mb-12">
          <p className="text-primary text-sm font-black tracking-[0.3em] uppercase">Upcoming Event</p>
          <h2 className="text-foreground text-3xl md:text-4xl font-bold">TEXPO'26</h2>
          <p className="text-muted-foreground text-lg">Student Innovation & Industry Technology Expo | Prizes worth ₹30,000</p>
        </div>

        {/* Main Event Card */}
        <TechExpoCard />
      </div>
    </section>
  );
};

export default Events;
