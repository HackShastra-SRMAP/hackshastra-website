import { Badge } from "@/components/ui/badge";
import { ArrowRight, MapPin, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import ElectricBorder from "@/components/ui/ElectricBorder";
import banner3 from '@/assets/banner3.png';

const Events = () => {
  return (
    <section id="events" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-4 mb-12">
          <p className="text-primary text-sm font-black tracking-[0.3em] uppercase">Upcoming Event</p>
          <h2 className="text-foreground text-3xl md:text-4xl font-bold">TECHEXPO</h2>
          <p className="text-muted-foreground text-lg">Student & Industry Technology Expo</p>
        </div>

        {/* Main Event Card */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Event Image/Visual */}
          <div>
            <ElectricBorder
              color="#DC143C"
              speed={1}
              chaos={0.12}
              borderRadius={12}
              style={{ borderRadius: 12 }}
            >
              <div className="relative w-full aspect-[16/10] md:aspect-[16/9] rounded-xl overflow-hidden border border-border bg-black group">
                <img 
                  src={banner3} 
                  alt="TECHEXPO Banner" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Spotlight mask effect - only on desktop */}
                <div 
                  className="hidden md:block absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle 150px at var(--mouse-x, 50%) var(--mouse-y, 50%), transparent 0%, rgba(0, 0, 0, 0.7) 100%)'
                  }}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = ((e.clientX - rect.left) / rect.width) * 100;
                    const y = ((e.clientY - rect.top) / rect.height) * 100;
                    e.currentTarget.style.setProperty('--mouse-x', `${x}%`);
                    e.currentTarget.style.setProperty('--mouse-y', `${y}%`);
                  }}
                />
                <Badge className="absolute top-4 left-4 z-10 uppercase tracking-widest text-xs font-bold bg-primary text-white">
                  Coming Soon
                </Badge>
              </div>
            </ElectricBorder>
          </div>

          {/* Event Details */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Official Launch Event of HackShastra SRM–AP Chapter</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                TECHEXPO is the flagship technology expo marking the official launch of the HackShastra SRM–AP Chapter. 
                The event bridges student innovation with industry application through structured evaluation rounds, 
                MVP showcases, and a large-scale industry expo.
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-foreground">Registration Period</p>
                    <p className="text-sm text-muted-foreground">Coming Soon</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-foreground">Shortlist Announcement</p>
                    <p className="text-sm text-muted-foreground">Coming Soon</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-foreground">Venue</p>
                    <p className="text-sm text-muted-foreground">SRM University AP</p>
                  </div>
                </div>
              </div>
            </div>

            <Link to="/texpo-register" className="w-full bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
              Register Now <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
