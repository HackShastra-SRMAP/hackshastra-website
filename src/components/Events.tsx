import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Calendar } from "lucide-react";
import CardSwap, { Card } from "@/components/ui/CardSwap";

interface Event {
  date: string;
  title: string;
  description: string;
  location: string;
  image: string;
}

const events: Event[] = [
  {
    date: "OCT 15",
    title: "System Architecture 2024",
    description: "A deep dive into scalable system design and high-performance backend infrastructures.",
    location: "SRM-AP Lab 4",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB8BcExz2JpWPz5fK1WPEgEf4CnAoKmrZ-VVakmkdNjlcMIq7TgdF3hZY9oIS1SWqlr7NA1exWoeuWWQpHQK6vZWhZ_-VXGLs8pL9otMkIUAmZLpqzmHyoknvNl2TpyqccDAZzAedJRIh6V9jIRdAv3cEJOMe1Y6p_7YH4Xu7QJC4bvQfyX_v8e7bBJtPLn65bpPffYQGFW0LUtQreKzcAsSS7bwnrKJFr7mmq3uhqEdJFw-P5aQEAJ8YlXWRc-p4z78sLsYRJbfzMG"
  },
  {
    date: "NOV 02",
    title: "Advanced React Patterns",
    description: "Master the complexities of React and modern frontend state management.",
    location: "Hybrid Format",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA-Sntuzh06DJXFedRR2npNoBDXDue719yHfkXgXPOK56_D257Y-pjg2WJY2M3qy5kYtgdzJ38_5G6ripu8GaPzNucRYpuCqh_aLLjVYPj8hQxI9-fvUuBlG3nFJ30TS6GVmH_z5BhXN1aB3biwShqDD4fEellb6Bt9zeTgPZ78yvMVaJVUjoiG7kDnVK9C5Xtmc_3_h2IZlGG4-uVydS_ja-Kkoeey5jJuo8aGi3AD-93FkO441Z_rKpLXMyVpzY5MZ0-9LaRBZeFt"
  },
  {
    date: "NOV 20",
    title: "Security in Web3",
    description: "Exploring vulnerabilities in decentralized networks and how to mitigate them.",
    location: "Main Auditorium",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBX8VnJNNClZD0WBq1TUi6oFodpb5BrsUWkRZEi_cShPU6xTW9QLFwI9JY4faKv6QRlESgbLpsBWf4hoBpw5hsZQBzVoEVqKPeUMePUPLdk6bhnKGpsO3_WD8M-EFsuUG7Yp57RB9sOu0ME1HUf1gFVGR2UMDtvMZjOPwEe35eNfuTTJoXfhMlZ4XF0CgwYPLsxagQK0HHzsZ8JV1nx2Ttk5Oh4EXKYPxt8HQGoXVIZeNf2mh66CFw22ErAQodcE3cYPeg_6DUi6_Tv"
  }
];

const EventCardContent = ({ event }: { event: Event }) => (
  <div className="h-full flex flex-col">
    {/* Image */}
    <div className="h-48 overflow-hidden relative">
      <Badge className="absolute top-4 left-4 z-10 uppercase tracking-widest text-[10px] font-bold bg-primary text-white">
        {event.date}
      </Badge>
      <div
        className="w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url("${event.image}")` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
    </div>
    
    {/* Content */}
    <div className="flex-1 p-6 flex flex-col">
      <h3 className="text-white text-xl font-bold tracking-tight mb-2">{event.title}</h3>
      <p className="text-gray-400 text-sm mb-4 flex-1">{event.description}</p>
      
      <div className="flex items-center justify-between mt-auto">
        <div className="flex items-center gap-1 text-gray-500">
          <MapPin className="h-3 w-3" />
          <span className="text-[11px] font-bold tracking-widest uppercase">{event.location}</span>
        </div>
        <button className="text-primary font-bold uppercase tracking-widest text-xs flex items-center gap-1 hover:gap-2 transition-all">
          Register <ArrowRight className="h-3 w-3" />
        </button>
      </div>
    </div>
  </div>
);

const Events = () => {
  return (
    <section id="events" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4">
          <div className="flex flex-col gap-4">
            <p className="text-primary text-sm font-black tracking-[0.3em] uppercase">Upcoming Shastras</p>
            <h2 className="text-foreground text-3xl font-bold">Featured Events</h2>
          </div>
          <Button variant="link" className="text-primary font-bold text-sm tracking-widest uppercase p-0 h-auto">
            View All Events <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </div>

        {/* CardSwap for Featured Events */}
        <div className="flex justify-center items-center min-h-[550px] relative">
          <CardSwap
            width={380}
            height={450}
            cardDistance={40}
            verticalDistance={50}
          >
            {events.map((event, index) => (
              <Card key={index}>
                <EventCardContent event={event} />
              </Card>
            ))}
          </CardSwap>
        </div>

        {/* Upcoming Events List */}
        <div className="mt-16 flex items-center justify-center gap-8 flex-wrap">
          {events.map((event, index) => (
            <div key={index} className="flex items-center gap-3 text-muted-foreground">
              <Calendar className="h-4 w-4 text-primary" />
              <span className="text-sm">{event.date}</span>
              <span className="text-sm font-medium text-foreground">{event.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
